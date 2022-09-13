import { Component, h, Prop, Method, Element } from '@stencil/core';

@Component({
  tag: 'fr-navigation',
  styleUrl: 'navigation.scss',
  shadow: false,
})
export class Navigation {
  @Element() el!: HTMLElement;
  @Prop({ reflect: true }) links = [
    {
      href: '#',
      target: '_self',
      text: 'accès direct',
    },
    {
      href: '#',
      target: '_self',
      text: 'accès direct',
    },
    {
      href: '#',
      target: '_self',
      text: 'accès direct',
    },
  ];

  render() {
    return (
      <nav class="fr-nav" role="navigation" aria-label="Menu principal">
        <ul class="fr-nav__list">
          {this.links.map(({ href, target, text }) => (
            <li class="fr-nav__item">
              <a class="fr-nav__link" href={href} target={target}>
                {text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
