import { Component, h } from '@stencil/core';

declare global {
  interface Window {
    dsfr: any;
  }
}

@Component({
  tag: 'fr-accordion',
  styleUrl: 'accordion.scss',
  shadow: false,
})
export class Accordion {
  connectedCallback() {
    console.log(window.dsfr);
  }

  render() {
    return (
      <section class="fr-accordion">
        <h3 class="fr-accordion__title">
          <button class="fr-accordion__btn" aria-expanded="false" aria-controls="accordion1">
            <slot name="title"></slot>
          </button>
        </h3>
        <div id="accordion1" class="fr-collapse">
          <slot />
        </div>
      </section>
    );
  }
}
