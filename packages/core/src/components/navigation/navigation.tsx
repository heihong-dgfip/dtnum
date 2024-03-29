import { Component, h, Element } from '@stencil/core';

@Component({
  tag: 'fr-navigation',
  styleUrl: 'navigation.scss',
  shadow: false,
})
export class Navigation {
  @Element() el!: HTMLElement;
  render() {
    return (
      <nav class="fr-nav" role="navigation" aria-label="Menu principal">
        <slot></slot>
      </nav>
    );
  }
}
