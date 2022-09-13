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
                  <div class="fr-header__navbar">
                    <button
                      class="fr-btn--menu fr-btn"
                      data-fr-opened="false"
                      aria-controls="modal-489"
                      aria-haspopup="menu"
                      id="button-490"
                      title="Menu"
                    >
                      Menu
                    </button>
                  </div>
                </div>
                <slot></slot>
              </div>
            </div>
          </div>
        </div>
        <div class="fr-header__menu fr-modal" id="modal-489" aria-labelledby="button-490">
          <div class="fr-container">
            <button class="fr-btn--close fr-btn" aria-controls="modal-489" title="Fermer">
              Fermer
            </button>
            <div class="fr-header__menu-links"></div>
            <slot name="nav"></slot>
          </div>
        </div>
      </header>
    );
  }
}
