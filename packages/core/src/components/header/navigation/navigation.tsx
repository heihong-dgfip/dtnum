import { Component, h, Element } from '@stencil/core';

@Component({
  tag: 'fr-navigation',
  styleUrl: 'navigation.scss',
  shadow: false,
})
export class Navigation {
  @Element() el!: HTMLElement;

  componentDidLoad() {
    this.slotchange();
  }

  slotchange() {
    Array.from(this.el.querySelector('ul').children).forEach((item) => {
      item.setAttribute('class', 'fr-nav__link');
      let parent = item.parentNode;
      let wrapper = document.createElement('li');
      wrapper.className = 'fr-nav__item';
      parent.replaceChild(wrapper, item);
      wrapper.appendChild(item);
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
