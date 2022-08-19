import { Component, h, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'fr-select',
  shadow: false,
})
export class Select implements ComponentInterface {
  render() {
    return (
      <div class="fr-select-group">
        <label class="fr-label" htmlFor="select">
          Label pour liste déroulante
        </label>
        <select class="fr-select" id="select" name="select">
          <slot></slot>
        </select>
      </div>
    );
  }
}
