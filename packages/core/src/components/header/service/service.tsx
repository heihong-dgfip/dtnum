import { Component, h, Prop } from '@stencil/core';
@Component({
  tag: 'fr-service',
  styleUrl: 'service.scss',
  shadow: false,
})
export class Service {
  @Prop({ reflect: true }) description!: string;

  render() {
    return (
      <div class="fr-header__service">
        <slot></slot>
        <p class="fr-header__service-tagline">{this.description}</p>
      </div>
    );
  }
}
