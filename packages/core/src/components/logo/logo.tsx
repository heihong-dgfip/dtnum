import { Component, h, Prop } from '@stencil/core';
@Component({
  tag: 'fr-logo',
  styleUrl: 'logo.scss',
  shadow: false,
})
export class Logo {
  /**
   * Global size of the logo with the Marianne and the french motto
   * The default size is medium and does not need to be specified
   */
  @Prop({ reflect: true }) small?: boolean
  @Prop({ reflect: true }) large?: boolean

  render() {
    return (
      <p
        class={{
          'fr-logo': true,
          [`fr-logo--sm`]: this.small,
          [`fr-logo--lg`]: this.large,
        }}
      >
        République
        <br />
        Française
      </p>
    );
  }
}
