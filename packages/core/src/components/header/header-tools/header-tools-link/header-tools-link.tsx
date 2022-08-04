import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'fr-header-tools-link',
  styleUrl: 'header-tools-link.scss',
  shadow: false,
})
export class ToolsLinK {
  @Prop({ reflect: true }) titleLink = '';
  @Prop({ reflect: true }) hrefLink = '';
  @Prop({ reflect: true }) textLink = '';
  @Prop({ reflect: true }) targetLink = '';
  @Prop({ reflect: true }) iconLink = '';

  render() {
    return (
      <a target={this.targetLink} href={this.hrefLink} title={this.titleLink} class={'fr-btn ' + this.iconLink}>
        {this.textLink}
      </a>
    );
  }
}
