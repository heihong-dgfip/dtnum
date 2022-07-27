import { Component, h, Prop } from '@stencil/core';

declare global {
  interface Window {
    dsfr: any;
  }
}

@Component({
  tag: 'fr-accordion',
  styleUrl: 'accordion.scss',
  shadow: true,
})
export class Accordion {
  @Prop({ reflect: true, mutable: true }) open = false;

  connectedCallback() {
    console.log(window.dsfr);
  }

  fopent = () => {
    this.open = !this.open;
    console.log(this.open);
  };

  render() {
    return (
      <section class="fr-accordion">
        <h3 class="fr-accordion__title">
          <button class="fr-accordion__btn" aria-expanded="false" aria-controls="accordion1" onClick={this.fopent}>
            <slot name="title"></slot>
          </button>
        </h3>
        <div id="accordion1" class={{ 'fr-collapse': true, ['fr-collapse--expanded']: this.open }}>
          <slot />
        </div>
      </section>
    );
  }
}
