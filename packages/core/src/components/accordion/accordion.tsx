import { Component, h } from '@stencil/core';

@Component({
  tag: 'fr-accordion',
  styleUrl: 'accordion.scss',
  shadow: false,
})
export class Accordion {
  // @Element() el!: HTMLElement;

  /*connectedCallback() {

    const target = this.el;

    const config = {
      attributes: true,
      attributeOldValue: true,
      attributeFilter: ['class'],
      childList: true,
      subtree: true,
    };

      function subscriberCallback(mutations) {
        mutations.forEach((mutation) => {
            console.log(mutation);
        });
    }

    const observer = new MutationObserver(subscriberCallback);
    observer.observe(target, config);
  }*/

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
