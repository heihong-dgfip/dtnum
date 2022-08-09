import { Component, h, Element, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'fr-navigation',
  styleUrl: 'navigation.scss',
  shadow: false,
})
export class Navigation implements ComponentInterface {
  @Element() el!: HTMLElement;

  connectedCallback() {
    let f = 'connectedCallback';
    this.slotchange(f);
  }
  componentDidLoad() {
    let f = 'componentDidLoad';

    this.slotchange(f);
  }

  slotchange(f) {
    console.log('slotchange');
    if (this.el.querySelector('ul.fr-nav__list')) {
      if (this.el.querySelector('ul.fr-nav__list')?.children.length !== 0) {
        if (
          this.el.querySelectorAll('li.fr-nav__item') &&
          this.el.querySelectorAll('li.fr-nav_item')?.length !==
            this.el.querySelector('ul.fr-nav__list')?.children.length
        ) {
          console.log(f);
          console.log(this.el.querySelector('ul.fr-nav__list')?.children);
          Array.from(this.el.querySelector('ul.fr-nav__list')?.children).forEach((item) => {
            item?.setAttribute('class', 'fr-nav__link');
            let parent = item.parentNode;
            let wrapper = document.createElement('li');
            wrapper.className = 'fr-nav__item';
            parent.replaceChild(wrapper, item);
            wrapper.appendChild(item);
          });
        }
      }
    }
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
          <slot onSlotchange={(f) => this.slotchange(f)}></slot>
        </ul>
      </nav>
    );
  }
}
