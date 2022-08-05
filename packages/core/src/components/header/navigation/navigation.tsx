import { Component, h, Element } from '@stencil/core';

@Component({
  tag: 'fr-navigation',
  styleUrl: 'navigation.scss',
  shadow: false,
})
export class Navigation {
  @Element() el!: HTMLElement;
  slotchange() {
    console.log('test');
    let li = document.createElement('li');
    li.className = 'fr-nav__item';
    this.el.shadowRoot
      .querySelector('slot')
      ?.assignedElements({ flatten: true })
      .forEach((item) => {
        item.setAttribute('class', 'fr-nav__link');
        item.prepend(li);
      });
  }

  render() {
    return (
      <nav
        id="navigation-866"
        role="navigation"
        aria-label="Menu principal"
        class="fr-nav"
        data-fr-js-navigation="true"
      >
        <ul class="fr-nav__list">
          <slot onSlotchange={() => this.slotchange()}></slot>
        </ul>
      </nav>
    );
  }
}
