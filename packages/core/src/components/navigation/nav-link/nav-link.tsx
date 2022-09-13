import { Component, h, Element } from '@stencil/core';

@Component({
  tag: 'fr-nav-link',
  styleUrl: 'nav-link.scss',
  shadow: false,
})
export class NavLink {
  @Element() el!: HTMLElement;

  render() {
    return (
      <li class="fr-nav__item">
        <slot></slot>
      </li>
    );
  }
}
