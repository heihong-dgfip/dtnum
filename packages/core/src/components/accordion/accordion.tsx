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
    console.log(window.dsfr);
    const target = this.el;

    const config = {
      childList: true,
      subtree: true,
      attributes: true,
    };

    const observer = new MutationObserver(this.subscriberCallback.bind(this));
    observer.observe(target, config);
  }

  slotChange() {
    if (this.slotElements.length === 0) {
      this.slotElements = [...this.el.shadowRoot.querySelector('slot')?.assignedElements({ flatten: true })];
      console.log(this.slotElements);
    }
  }

  render() {
    return (
      <ol>
        <slot onSlotchange={() => this.slotChange()}></slot>
      </ol>
    );
  }
}
