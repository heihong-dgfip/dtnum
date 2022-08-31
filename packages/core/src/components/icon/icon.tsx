import { Component, Host, Prop, h } from '@stencil/core';


@Component({
  tag: 'fr-icon',
  styleUrl: 'icon.scss',
  shadow: false,
})
export class Icon {
  @Prop({ reflect: true }) iconName!: string;
  @Prop({ reflect: true }) size?: 'xs' | 'sm' | 'md' | 'lg' ='md';

  render() {
    return (
      <Host aria-hidden="true">
      </Host>
    );
  }
}
