import { Component, h } from '@stencil/core';

@Component({
  tag: 'fr-header',
  styleUrl: 'header.scss',
  shadow: false,
})
export class Header {
  render() {
    return (
      <header role="banner" class="fr-header">
        <div class="fr-header__body">
          <div class="fr-container">
            <div class="fr-header__body-row">
              <div class="fr-header__brand fr-enlarge-link">
                <div class="fr-header__brand-top">
                  <div class="fr-header__logo">
                    <a href="/" title="Accueil - Nom de l’entité (ministère, secrétariat d‘état, gouvernement)">
                      <p class="fr-logo">
                        Intitulé
                        <br></br>officiel
                      </p>
                    </a>
                  </div>
                  <div class="fr-header__navbar">
                    <button
                      class="fr-btn--menu fr-btn"
                      data-fr-opened="false"
                      aria-controls="modal-585"
                      aria-haspopup="menu"
                      id="button-586"
                      title="Menu"
                    >
                      Menu
                    </button>
                  </div>
                </div>
              </div>
              <div class="fr-header__tools">
                <div class="fr-header__tools-links">
                  <ul class="fr-btns-group">
                    <li>
                      <a class="fr-btn fr-icon-add-circle-line" href="[url - à modifier]">
                        Créer un espace
                      </a>
                    </li>
                    <li>
                      <a class="fr-btn fr-icon-lock-line" href="[url - à modifier]">
                        Se connecter
                      </a>
                    </li>
                    <li>
                      <a class="fr-btn fr-icon-account-line" href="[url - à modifier]">
                        S’enregistrer
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="fr-header__menu fr-modal" id="modal-585" aria-labelledby="button-586">
          <div class="fr-container">
            <button class="fr-btn--close fr-btn" aria-controls="modal-585" title="Fermer">
              Fermer
            </button>
            <div class="fr-header__menu-links">
              <ul class="fr-btns-group"></ul>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
