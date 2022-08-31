import { Component, h, Prop } from '@stencil/core';
@Component({
  tag: 'fr-service',
  styleUrl: 'service.scss',
  shadow: false,
})
export class Logo {
  /**
   * Global size of the logo with the Marianne and the french motto
   * The default size is medium and does not need to be specified
   */
  @Prop({ reflect: true }) small?: boolean;
  @Prop({ reflect: true }) large?: boolean;

  render() {
    return (
      <div class="fr-header__service">
        <a
          href="/"
          title="Accueil - [À MODIFIER - Nom du site / service] - [À MODIFIER - nom de l’entité (ministère, secrétariat d‘état, gouvernement)]"
        >
          <p class="fr-header__service-title">Nom du site / service</p>
        </a>
        <p class="fr-header__service-tagline">baseline - précisions sur l‘organisation</p>
      </div>
    );
  }
}
