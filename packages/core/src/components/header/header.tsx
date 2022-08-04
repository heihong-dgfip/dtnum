import { Component, h } from '@stencil/core';

@Component({
  tag: 'fr-header',
  styleUrl: 'header.scss',
  shadow: false,
})
export class Header {
  render() {
    return (
      <header role="banner" id="header-navigation" class="fr-header">
        <div class="fr-header__body">
          <div class="fr-container">
            <div class="fr-header__body-row">
              <div class="fr-header__brand fr-enlarge-link">
                <div class="fr-header__brand-top">
                  <div class="fr-header__logo">
                    <p class="fr-logo">
                      République
                      <br />
                      Française
                    </p>
                  </div>
                  <div class="fr-header__navbar">
                    <button
                      data-fr-opened="false"
                      aria-controls="modal-header__menu"
                      aria-haspopup="menu"
                      id="button-861"
                      title="Menu"
                      class="fr-btn--menu fr-btn"
                      data-fr-js-modal-button="true"
                    >
                      Menu
                    </button>
                  </div>
                </div>
                <div class="fr-header__service">
                  <slot name="service"></slot>
                </div>
              </div>
              <div class="fr-header__tools">
                <slot name="tools"></slot>
              </div>
            </div>
          </div>
        </div>
        <div
          id="modal-header__menu"
          aria-labelledby="button-861"
          class="fr-header__menu fr-modal"
          data-fr-js-modal="true"
          data-fr-js-header-modal="true"
          role="dialog"
        >
          <div class="fr-container">
            <button aria-controls="modal-header__menu" class="fr-btn fr-btn--close" data-fr-js-modal-button="true">
              Fermer
            </button>
            <slot></slot>
          </div>
        </div>
      </header>
    );
  }
}
