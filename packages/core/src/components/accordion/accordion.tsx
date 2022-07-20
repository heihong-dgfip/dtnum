import { Component, h } from '@stencil/core';

@Component({
  tag: 'fr-accordion',
  styleUrl: 'accordion.css',
  shadow: false,
})
export class Accordion {
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
