import { Component, h, Element, Prop } from '@stencil/core';

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
  @Element() el!: HTMLElement;

  slotElements: Array<any> = [];
  slotElementsOld: Array<any> = [];
  attributes = this.el.getAttributeNames();
  @Prop({ reflect: true }) toto = 'test';

  subscriberCallback(mutations) {
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach((node) => console.log('add', node));
        mutation.removedNodes.forEach((node) => console.log('remove', node));
      } else if (mutation.type === 'attributes') {
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

    const observer = new MutationObserver(this.subscriberCallback.bind(this));
    observer.observe(target, config);
  }

  slotChange(node) {
    console.log(node);
    this.slotElements = [...this.el.shadowRoot.querySelector('slot')?.assignedElements({ flatten: true })];
  }

  render() {
    return (
      <ol>
        <slot onSlotchange={(node) => this.slotChange(node)}></slot>
      </ol>
    );
  }
}
