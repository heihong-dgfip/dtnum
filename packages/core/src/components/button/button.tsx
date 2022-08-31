import { Component, Element, Prop, h, Event, EventEmitter, State } from '@stencil/core';

@Component({
  tag: 'fr-btn',
  styleUrl: 'btn.scss',
  shadow: false,
})
export class Btn {
  private model?: HTMLButtonElement;
  private inheritedAttributes: { [k: string]: any } = {};

  @Element() el!: HTMLElement;

  @State() hasFullWidth: boolean = false;

  /**
   * If `true`, the user cannot interact with the button.
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * The button size.
   */
  @Prop({ reflect: true }) size?: 'sm' | 'md' | 'lg' = 'md';

  /**
   * The text position of button.
   */
  @Prop({ reflect: true }) justify?: 'left' | 'center' | 'right' = 'left';

  /**
   * The state of the button.
   */
  @Prop({ reflect: true }) state?: 'primary' | 'secondary' = 'primary';

  /**
   * If `true`, the button has a width=100%
   */
  @Prop({ reflect: true }) fullWidth?: boolean = false;

  /**
   * Full width a specified breakpoint
   */
  @Prop({ reflect: true }) fullWidthUntil?: 'sm' | 'md' | 'lg' | 'xl';

  /**
   * If `true`, the button has only a icon
   */
  @Prop({ reflect: true }) iconOnly?: boolean = false;

  /**
   * Shape a close button
   */
  @Prop({ reflect: true }) closable?: boolean = false;

  /**
   * Shape a close button with label
   */
  @Prop({ reflect: true }) closableWithLabel?: boolean = false;

  /**
   * Emitted when the button has focus.
   */
  @Event({ eventName: 'fr-focus' }) frFocus!: EventEmitter;

  /**
   * Emitted when the button loses focus.
   */
  @Event({ eventName: 'fr-blur' }) frBlur!: EventEmitter<void>;

  /**
   * Emitted when the button has click.
   */
  @Event({ eventName: 'fr-click' }) frClick!: EventEmitter<void>;

  private onFocus() {
    this.frFocus.emit();
  }

  private onBlur() {
    this.frBlur.emit();
  }

  private onclick() {
    this.frClick.emit();
    if (!!this.model) {
      this.model.click();
    }
  }

  slotChange() {
    const slot = this.el.shadowRoot.querySelector('slot:not([name])') as HTMLSlotElement;
    const models = slot
      .assignedElements({ flatten: true })
      .filter((element) => element.matches('button'))
      .map((input) => input as HTMLButtonElement);

    if (models.length === 1) {
      this.model = models[0];
    } else {
      this.model = null;
    }
  }

  render() {
    return (
      <button
        disabled={this.disabled}
        onFocus={() => this.onFocus()}
        onBlur={() => this.onBlur()}
        onClick={() => this.onclick()}
        class={{
          'fr-btn': true,
          [`fr-btn--secondary`]: this.state === 'secondary',
          [`fr-btn--${this.size}`]: ['sm', 'lg'].includes(this.size),
          [`fr-btn--full-width`]: this.hasFullWidth,
          [`fr-btn--${this.justify}`]: ['center', 'right'].includes(this.justify) && this.hasFullWidth,
          'fr-link--close': this.closable,
          'fr-link--close-with-label': this.closableWithLabel,
        }}
        {...this.inheritedAttributes}
      >
        <slot name="left"></slot>
        <slot onSlotchange={() => this.slotChange()}></slot>
        <slot name="right"></slot>
      </button>
    );
  }
}
