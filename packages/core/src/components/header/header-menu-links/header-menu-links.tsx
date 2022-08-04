import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'fr-header-menu-links',
  styleUrl: 'header-menu-links.scss',
  shadow: false,
})
export class MenuLink {
  @Prop({ reflect: true }) titleLink = '';
  @Prop({ reflect: true }) ariaCurrentLink = '';
  @Prop({ reflect: true }) hrefLink = '';
  @Prop({ reflect: true }) textLink = '';

  render() {
    return (
      <div class="fr-header__menu-links">
        <slot></slot>
      </div>
    );
  }
}
