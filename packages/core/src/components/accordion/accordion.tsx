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

  /* dispose (node) {
    const disposables = [];
    this.forEach((element) => {
      if (node.contains(element.node)) disposables.push(element);
    });

    for (const disposable of disposables) {
      disposable.dispose();
      this.remove(disposable);
    }
  }*/

  subscriberCallback(mutations) {
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList') {
      } else if (mutation.type === 'attributes') {
        console.log(`The ${mutation.attributeName} attribute was modified.`);
      }
    });
  }

  componentDidLoad() {
    const target = this.el;

    const config = {
      attributes: true,
      childList: true,
      attributeOldValue: true,
      attributeFilter: ['class'],
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
