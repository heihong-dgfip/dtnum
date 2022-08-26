import { Component, h, Element, ComponentInterface, Method, State } from '@stencil/core';

@Component({
  tag: 'fr-navigation',
  styleUrl: 'navigation.scss',
  shadow: false,
})
export class thatNavigation implements ComponentInterface {
  @Element() el!: HTMLElement;
  @State() newElement: any;
  @State() newElements = [];

  componentWillLoad() {
    this.createElement();
  }

  componentDidLoad() {
    this.init();

    let that = this;

    const target = this.el;

    const config = {
      childList: true,
    };

    function subscriberCallback(mutations) {
      for (let mutation of mutations) {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            that.newElements.push(node);
            node.remove();
          });
        }
      }

      console.log(that.newElements);
      // that.newElement = that.createElement(that.newElements[0])
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

  createElement() {
    this.newElement = <a></a>;
    let text = document.createTextNode('This just got added');
    this.newElement.appendChild(text);

    /*   for (var i = 0; i < node.attributes.length; i++) {
        let attrib = node.attributes[i];
        element.setAttribute(attrib.name, attrib.value);
    }
   // console.log(element)
      if(node.tagName == 'A'){
        element.innerHTML = node.innerHTML;
      }
      console.log('element',element)
      console.log(node)*/
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
