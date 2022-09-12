import { Component, h, Host, Element, Prop, State } from '@stencil/core';
@Component({
  tag: 'fr-tags',
  styleUrl: 'tags.scss',
  shadow: true,
})
export class Tags {
  /**
   * Le composant lui même.
   */
  @Element() el!: HTMLElement;

  /**
   * Taille du composant. Par defaut, la valeur est MD.
   */
  @Prop({ reflect: true }) size?: 'sm' | 'md' = 'md';

  /** Has a tag slot assigned */
  @State() hasAssignedTag: boolean = false;

  slotTagGroupChange() {
    const slot = this.el.shadowRoot.querySelector('slot') as HTMLSlotElement;
    const slotAssigned = slot.assignedElements({ flatten: true });
    this.hasAssignedTag = slotAssigned.length > 0;
    slotAssigned.forEach((item) => {
      item.setAttribute('role', 'listitem');
      item.setAttribute('size', this.size);
    });
  }

  render() {
    return (
      <Host>
        <ul class="fr-tags-group" role="list">
          <slot onSlotchange={() => this.slotTagGroupChange()}></slot>
        </ul>
      </Host>
    );
  }
}
