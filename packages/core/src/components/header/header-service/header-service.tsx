import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'fr-header-service',
  styleUrl: 'header-service.scss',
  shadow: false,
})
export class Link {
  @Prop({ reflect: true }) titleLink = '';
  @Prop({ reflect: true }) ariaCurrentLink = '';
  @Prop({ reflect: true }) hrefLink = '';
  @Prop({ reflect: true }) textLink = '';

  render() {
    return (
      <a
        href={this.hrefLink}
        aria-current={this.ariaCurrentLink}
        title={this.titleLink}
        class="router-link-exact-active router-link-active"
      >
        <p class="fr-header__service-title">{this.textLink}</p>
      </a>
    );
  }
}
