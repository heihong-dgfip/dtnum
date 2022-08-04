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
                <div class="fr-header__tools-links">
                  <ul class="fr-btns-group">
                    <li>
                      <a
                        target="_blank"
                        href="https://gouvfr.typeform.com/to/F1vMZ7sl"
                        title="Être tenu informé - nouvelle fenêtre"
                        class="fr-btn fr-icon-chat-3-line"
                      >
                        Être tenu informé
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://gouvfr.atlassian.net/servicedesk/customer/portals"
                        title="Nous contacter - nouvelle fenêtre"
                        class="fr-btn fr-icon-phone-line"
                      >
                        Nous contacter
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="modal-header__menu" aria-labelledby="button-861" class="fr-header__menu fr-modal">
          <div class="fr-container">
            <button aria-controls="modal-header__menu" class="fr-btn fr-btn--close">
              Fermer
            </button>
            <div class="fr-header__menu-links">
              <ul class="fr-btns-group">
                <li>
                  <a
                    target="_blank"
                    href="https://gouvfr.typeform.com/to/F1vMZ7sl"
                    title="Être tenu informé - nouvelle fenêtre"
                    class="fr-btn fr-icon-notification-3-line"
                  >
                    Être tenu informé
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://gouvfr.atlassian.net/servicedesk/customer/portals"
                    title="Nous contacter - nouvelle fenêtre"
                    class="fr-btn fr-icon-phone-line"
                  >
                    Nous contacter
                  </a>
                </li>
              </ul>
            </div>
            <slot></slot>
          </div>
        </div>
      </header>
    );
  }
}
