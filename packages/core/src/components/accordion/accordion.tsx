import { Component, h, Element } from '@stencil/core';

@Component({
  tag: 'fr-accordion',
  styleUrl: 'accordion.css',
  shadow: false,
})
export class Accordion {
  @Element() el!: HTMLElement;

  render() {
    return (
      <section class="fr-accordion">
        <h3 class="fr-accordion__title">
          <button class="fr-accordion__btn" aria-expanded="false" aria-controls="accordion1">
            titre
          </button>
        </h3>
        <div id="accordion1" class="fr-collapse">
          description
        </div>
      </section>
    );
  }
}
