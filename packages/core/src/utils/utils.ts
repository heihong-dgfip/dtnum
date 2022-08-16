export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

export function addElement(element) {
  let wrapper = document.createElement('li');
  wrapper.className = 'fr-nav__item';
  wrapper.appendChild(element);
  element.setAttribute('class', 'fr-nav__link');

  this.el.querySelector('ul.fr-nav__list').appendChild(wrapper);
}
