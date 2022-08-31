import { Component, h, Element } from '@stencil/core';

@Component({
  tag: 'fr-header',
  styleUrl: 'header.scss',
  shadow: false,
})
export class Header {
  @Element() el!: HTMLElement;

  render() {
    return (
      <header role="banner" class="fr-header">
        <div class="fr-header__body">
          <div class="fr-container">
            <div class="fr-header__body-row">
              <div class="fr-header__brand fr-enlarge-link">
                <div class="fr-header__brand-top">
                  <fr-logo small></fr-logo>
                </div>
                <slot></slot>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
