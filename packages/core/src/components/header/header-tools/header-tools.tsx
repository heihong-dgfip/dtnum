import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'fr-header-tools',
  styleUrl: 'header-tools.scss',
  shadow: false,
})
export class Tools {
  render() {
    return (
      <div class="fr-header__tools-links">
        <slot></slot>
      </div>
    );
  }
}
