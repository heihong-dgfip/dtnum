import { Component, h, Element, Prop } from '@stencil/core';

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
  @Element() el!: HTMLElement;

  slotElements: Array<any> = [];
  slotElementsOld: Array<any> = [];
  attributes = [];
  @Prop({ reflect: true }) toto = 'test';

  subscriberCallback(mutations) {
    let that = this;
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach((node) => {
          console.log('add', node);
          that.slotElements.push(node);
        });
        mutation.removedNodes.forEach((node) => {
          console.log(that.slotElements.indexOf(node));
          that.slotElements.splice(that.slotElements.indexOf(node), 1);
          console.log('remove', node);
          console.log(that.slotElements);
        });
      } else if (mutation.type === 'attributes') {
        this.attributes = that.el.getAttributeNames();
        console.log(`The ${mutation.attributeName} attribute was modified.`);
      }
    });
  }

  componentDidLoad() {
    const target = this.el;

    const config = {
      childList: true,
      subtree: true,
      attributes: true,
    };

    window.dsfr.observer = new MutationObserver(this.subscriberCallback.bind(this));
    window.dsfr.observer.observe(target, config);
    (window.dsfr.verbose = true), (window.dsfr.mode = 'manual');
    console.log(window.dsfr);

    function start() {
      console.log('start');
      window.dsfr.stop();
      window.dsfr.start();
    }
    setTimeout(() => start(), 1000);
  }

  render() {
    return (
      <section class="fr-accordion">
        <h3 class="fr-accordion__title">
          <button class="fr-accordion__btn" aria-expanded="false" aria-controls="accordion-77">
            Intitulé accordéon
          </button>
        </h3>
        <div class="fr-collapse" id="accordion-77">
          <slot></slot>
        </div>
      </section>
    );
  }
}
