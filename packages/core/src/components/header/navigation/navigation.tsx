import { Component, h } from '@stencil/core';

@Component({
  tag: 'fr-navigation',
  styleUrl: 'navigation.scss',
  shadow: false,
})
export class Navigation {
  render() {
    return (
      <nav
        id="navigation-866"
        role="navigation"
        aria-label="Menu principal"
        class="fr-nav"
        data-fr-js-navigation="true"
      >
        <slot></slot>
      </nav>
    );
  }
}
