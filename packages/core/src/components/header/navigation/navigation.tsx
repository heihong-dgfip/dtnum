import { Component, h, Element, ComponentInterface, Method } from '@stencil/core';

@Component({
  tag: 'fr-navigation',
  styleUrl: 'navigation.scss',
  shadow: false,
})
export class Navigation implements ComponentInterface {
  @Element() el!: HTMLElement;

  componentDidLoad() {
    let f = 'componentDidLoad';

    this.slotchange(f);
  }

  slotchange(f) {
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

            let parentul = this.el.querySelector('ul.fr-nav__list');
            if (item.parentNode == parentul) {
              let wrapper = document.createElement('li');
              wrapper.className = 'fr-nav__item';
              parent.replaceChild(wrapper, item);
              wrapper.appendChild(item);
            }
          });
        }
      }
    }
  }

  @Method()
  async addElement(element) {
    let wrapper = document.createElement('li');
    wrapper.className = 'fr-nav__item';
    wrapper.appendChild(element);
    element.setAttribute('class', 'fr-nav__link');

    this.el.querySelector('ul.fr-nav__list').appendChild(wrapper);
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
          <slot></slot>
        </ul>
      </nav>
    );
  }
}
