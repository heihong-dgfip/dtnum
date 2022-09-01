import { Component, h } from '@stencil/core';
@Component({
  tag: 'fr-tags',
  styleUrl: 'tags.scss',
  shadow: true,
})
export class Tags {
  render() {
    return (
      <ul class="fr-tags-group">
        <li>
          <p class="fr-tag">Label tag 1</p>
        </li>
        <li>
          <p class="fr-tag">Label tag 2</p>
        </li>
      </ul>
    );
  }
}
