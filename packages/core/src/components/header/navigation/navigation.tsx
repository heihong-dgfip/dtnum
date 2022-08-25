import { Component, h, Element, ComponentInterface, Method, State } from '@stencil/core';

@Component({
  tag: 'fr-navigation',
  styleUrl: 'navigation.scss',
  shadow: false,
})
export class thatNavigation implements ComponentInterface {
  @Element() el!: HTMLElement;
  @State() newElement: any;

  componentDidLoad() {
    this.init();

    const target = this.el;

    const config = {
      childList: true,
    };

    function subscriberCallback(mutations) {
      for (let mutation of mutations) {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            node.remove();
          });
        }
      }
    }

    const observer = new MutationObserver(subscriberCallback);
    observer.observe(target, config);
  }

  init() {
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

  @Method()
  async addElement(element) {
    let wrapper = document.createElement('li');
    wrapper.className = 'fr-nav__item';
    wrapper.appendChild(element);
    element.setAttribute('class', 'fr-nav__link');

    this.el.querySelector('ul.fr-nav__list').appendChild(wrapper);
  }

  @Method()
  async modi() {
    this.newElement = <p>test</p>;
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
          {this.newElement}
        </ul>
      </nav>
    );
  }
}
