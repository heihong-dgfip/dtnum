import { Component, h, Host } from '@stencil/core';
@Component({
  tag: 'fr-tags',
  styleUrl: 'tags.scss',
  shadow: true,
})
export class Tags {
  render() {
    return (
      <Host>
        <ul class="fr-tags-group">
          <slot></slot>
        </ul>
      </Host>
    );
  }
}
