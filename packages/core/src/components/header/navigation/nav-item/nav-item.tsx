import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'fr-nav-item',
  styleUrl: 'nav-item.scss',
  shadow: false,
})
export class NavItem {
  @Prop({ reflect: true }) titleLink = '';
  @Prop({ reflect: true }) ariaCurrentLink = '';
  @Prop({ reflect: true }) hrefLink = '';
  @Prop({ reflect: true }) textLink = '';

  render() {
    return (
      <a
        href={this.hrefLink}
        target="_self"
        aria-current={this.ariaCurrentLink}
        aria-controls="modal-header__menu"
        title={this.titleLink}
      >
        {this.textLink}
      </a>
    );
  }
}
