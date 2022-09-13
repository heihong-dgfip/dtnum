import { Component, h, Element } from '@stencil/core';

@Component({
  tag: 'fr-nav-list',
  styleUrl: 'nav-list.scss',
  shadow: true,
})
export class NavList {
  @Element() el!: HTMLElement;

  slotChange() {
    this.el.shadowRoot
      .querySelector('slot')
      ?.assignedElements({ flatten: true })
      .forEach((item) => {
        item.setAttribute('role', 'listitem');
        item.setAttribute('target', '_self');

        if (item.hasAttribute('active')) {
          item.setAttribute('current', 'page');
        }
      });
  }

  render() {
    return (
      <ul class="fr-nav__list" role="list">
        <slot onSlotchange={() => this.slotChange()}></slot>
      </ul>
    );
  }
}
