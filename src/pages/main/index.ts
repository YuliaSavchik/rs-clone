import { createHtmlElement, createButtonElement } from '../../utils';
import { createLogInButton } from '../../components/buttons/index';
import Page from '../../components/pageTemplates';

import card1 from '../../assets/card/card-1.png';
import card2 from '../../assets/card/card-2.png';
import card3 from '../../assets/card/card-3.png';
import card4 from '../../assets/card/card-4.png';

export const createMainHeader = () => {
  const header = createHtmlElement('div', 'main-header');
  const headerWrapper = createHtmlElement('div', 'main-header__wrapper');

  const navBlock = createHtmlElement('div', 'navigation-block');
  const logo = createHtmlElement('div', 'logo');
  
  const navigation = createHtmlElement('ul', 'nav');
  const navItems = ['Главная', 'Сгенерировать логотип', 'Рисование'];
  navItems.forEach(item => {
    if (item === 'Главная') {
      const navItem = createHtmlElement('li', 'nav__item');
      const linkHome: HTMLAnchorElement = document.createElement('a');
      linkHome.classList.add('link-back-home');
      linkHome.setAttribute('href', '#main-page');
      linkHome.textContent = item;
      navItem.append(linkHome);
      navigation.append(navItem);
    } else if (item === 'Рисование') {
      const navItem = createHtmlElement('li', 'nav__item');
      const linkPaint: HTMLAnchorElement = document.createElement('a');
      linkPaint.classList.add('link-paint');
      linkPaint.textContent = item;
      navItem.append(linkPaint);
      navigation.append(navItem);
    } else if (item === 'Сгенерировать логотип') {
      const navItem = createHtmlElement('li', 'nav__item');
      const linkPaint: HTMLAnchorElement = document.createElement('a');
      linkPaint.classList.add('banner__btn-create-logo');
      linkPaint.textContent = item;
      navItem.append(linkPaint);
      navigation.append(navItem);
    } else {
      const navItem = createHtmlElement('li', 'nav__item');
      navItem.textContent = item;
      navigation.append(navItem);
    }
  });
  navBlock.append(logo, navigation);

  const btnBlock = createHtmlElement('div', 'buttons-block');
  const btnAboutApp = createButtonElement('btn-about-app', 'О проекте');
  const btnLog = createLogInButton();

  btnBlock.append(btnAboutApp, btnLog);

  const burgerWrapper = createHtmlElement('div', 'burger-menu');
  const burgerCheck = createHtmlElement('input', 'burger-menu-input');
  burgerCheck.setAttribute('id', 'menu__toggle');
  burgerCheck.setAttribute('type', 'checkbox');
  const burgerLabel = createHtmlElement('label', 'menu__btn');
  burgerLabel.setAttribute('for', 'menu__toggle');
  const span = createHtmlElement('span', 'burger-menu-span');
  burgerLabel.append(span);

  const burgerUl = createHtmlElement('ul', 'menu__box');
  navItems.forEach(item => {
    if (item === 'Главная') {
      const navItem = createHtmlElement('li', 'nav__item');
      const linkHome: HTMLAnchorElement = document.createElement('a');
      linkHome.classList.add('link-back-home');
      linkHome.setAttribute('href', '#main-page');
      linkHome.textContent = item;
      navItem.append(linkHome);
      burgerUl.append(navItem);
    } else if (item === 'Рисование') {
      const navItem = createHtmlElement('li', 'nav__item');
      const linkPaint: HTMLAnchorElement = document.createElement('a');
      linkPaint.classList.add('link-paint');
      linkPaint.textContent = item;
      navItem.append(linkPaint);
      burgerUl.append(navItem);
    } else if (item === 'Сгенерировать логотип') {
      const navItem = createHtmlElement('li', 'nav__item');
      const linkPaint: HTMLAnchorElement = document.createElement('a');
      linkPaint.classList.add('banner__btn-create-logo');
      linkPaint.textContent = item;
      navItem.append(linkPaint);
      burgerUl.append(navItem);
    } else {
      const navItem = createHtmlElement('li', 'nav__item');
      navItem.textContent = item;
      burgerUl.append(navItem);
    }
  });

  burgerWrapper.append(burgerCheck, burgerLabel, burgerUl);
  headerWrapper.append(burgerWrapper, navBlock, btnBlock);
  header.append(headerWrapper);
  return header;
};

const templatesNames = [['Открытка', 'postcard'], ['Логотип', 'logotype'], ['Визитная карточка', 'visit-card'], ['Резюме', 'resume']];
const templatesImg = [card1, card2, card3, card4];

const createViewTemplates = (className: string, id: number, text: string) => {
  const block = createHtmlElement('div', 'templates-block__template-card');
  block.classList.add(className);
  const img = createHtmlElement('img', 'template-card__img');
  img.setAttribute('src', templatesImg[id]);
  img.setAttribute('alt', 'card');
  const title = createHtmlElement('p', 'template-card__title');
  title.textContent = text;
  block.append(img, title);

  return block;
};

const createMainContent = () => {
  const main = createHtmlElement('main', 'main');
  const wrapper = createHtmlElement('div', 'main__wrapper');

  const banner = createHtmlElement('div', 'banner');
  const bannerTextBlock = createHtmlElement('div', 'banner__text-block');
  const bannerMainTitle = createHtmlElement('p', 'banner__text-block_title');
  const bannerTitle = createHtmlElement('p', 'banner__text-block_title');
  bannerMainTitle.textContent = 'Превратите свои мысли в креативные проекты.';
  bannerTitle.textContent = 'Рисуйте, генерируйте, дизайните - все в одном приложении!';
  bannerTextBlock.append(bannerMainTitle, bannerTitle);
  banner.append(bannerTextBlock);

  
  const templatesBlock = createHtmlElement('div', 'templates-block');
  templatesNames.forEach((item, index) => {
    const card = createViewTemplates(`card-${index + 1}`, index, item[0]);
    card.setAttribute('id', `${item[1]}`);
    templatesBlock.append(card);
  });

  const latestDesigns = createHtmlElement('div', 'lates-designs-block');
  const latestDesignsTitle = createHtmlElement('p', 'lates-designs-block__title');
  latestDesignsTitle.textContent = 'Последние дизайны';
  const bg = createHtmlElement('div', 'lates-designs-block__bg-block');
  const bgImg = createHtmlElement('div', 'bg-block__img');
  const bgTitle = createHtmlElement('p', 'bg-block__title');
  bgTitle.textContent = 'Здесь будут отображаться дизайны, которые вы создаете';
  bg.append(bgImg, bgTitle);
  latestDesigns.append(latestDesignsTitle, bg);

  wrapper.append(banner, templatesBlock, latestDesigns);
  main.append(wrapper);
  return main;
};
export class MainPage extends Page {
  private createContent() {
    const header = createMainHeader();
    const main = createMainContent();

    return {
      header,
      main,
    };
  }

  render() {
    const content = this.createContent();
    this.container.append(content.header, content.main);
    return this.container;
  }
}
