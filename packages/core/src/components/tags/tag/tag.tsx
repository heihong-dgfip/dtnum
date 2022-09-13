import { Component, h, Host } from '@stencil/core';
@Component({
  tag: 'fr-tag',
  styleUrl: 'tag.scss',
  shadow: false,
})
export class Tag {
  render() {
    return (
      <Host>
        <li>
          <slot></slot>
        </li>
      </Host>
    );
  }
}
