import addNewElement from './addHtmlElement';
import runScrollController from '../controllers/scrollController';

export default function renderScroll() {
  let parent = document.body.lastElementChild;
  parent = addNewElement('section', 'main__scroll_wrapper', parent);
  parent.setAttribute('hidden', 'hidden');
  parent = addNewElement('ul', 'main__scroll', parent);
  let newElement = addNewElement('img', 'main__scroll__item_button', addNewElement('li', 'main__scroll__item', parent, 'scroll-back'));
  newElement.setAttribute('src', './src/assets/images/arrow-left-solid.svg');
  let tooltip = addNewElement('span', 'main__scroll__item_button_tooltip', document.getElementById('scroll-back'));
  tooltip.innerHTML = '0';
  newElement = addNewElement('div', 'main__scroll__item_counter', addNewElement('li', 'main__scroll__item', parent), 'counter');
  newElement.innerHTML = '1';
  newElement = addNewElement('img', 'main__scroll__item_button', addNewElement('li', 'main__scroll__item', parent, 'scroll-forward'));
  newElement.setAttribute('src', './src/assets/images/arrow-right-solid.svg');
  tooltip = addNewElement('span', 'main__scroll__item_button_tooltip', document.getElementById('scroll-forward'));
  tooltip.innerHTML = '2';

  runScrollController();
}
