import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'fr-header_service',
  styleUrl: 'header_service.scss',
  shadow: false,
})
export class HeaderService {
  @Prop({ reflect: true }) serviceDescription: string;

  render() {
    <div class="fr-header__service">
      <slot></slot>
      <p v-if="serviceDescription" class="fr-header__service-tagline">
        {this.serviceDescription}
      </p>
    </div>;
  }
}
