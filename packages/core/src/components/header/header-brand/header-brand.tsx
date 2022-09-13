import { Component, h, Prop } from '@stencil/core';
@Component({
  tag: 'fr-header-brand',
  styleUrl: 'header-brand.scss',
  shadow: false,
})
export class HeaderBrand {
  @Prop({ reflect: true }) baseline!: string;

  render() {
    return (
      <div class="fr-header__service">
        <slot></slot>
        <p class="fr-header__service-tagline">{this.baseline}</p>
      </div>
    );
  }
}
