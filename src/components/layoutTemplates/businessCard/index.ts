import { dragNdrop } from '../elementsActions';
import {
  createTemplateImg,
  createTemplateShape,
  createTemplateText,
  createTemplateTextArea,
} from '../elementsTemplate';
import { Template } from '../mainTemplate';
import mountains from '../../../assets/templateImages/mountains.png';
import flowers from '../../../assets/templateImages/flowers.png';
import qrCode from '../../../assets/templateImages/qrCode.png';
import { defaultTexsts } from '../../../data/layoutTemplateData';

export class BusinessCard {
  fieldSize = {
    width: '700px',
    height: '400px',
  };

  color: string;

  constructor(color: string) {
    this.color = color;
  }

  create() {
    const newField = new Template(this.fieldSize);
    const field: HTMLDivElement = newField.create();
    field.style.background = this.color;
    field.style.position = 'relative';
    field.style.overflow = 'hidden';

    return field;
  }

  add(...rest: HTMLDivElement[]): HTMLDivElement {
    const card: HTMLDivElement = this.create();
    card.append(...rest);
    dragNdrop(card);

    return card;
  }
}

//Business cards templates

export class BusinessCardTemplates {
  createEmptyTemplate() {
    const card = new BusinessCard('white');
    return card.add();
  }

  createTemplate1() {
    const card = new BusinessCard('black');

    const title = createTemplateTextArea('300px', '25px', '140px');
    title.appendChild(createTemplateText(defaultTexsts.title, 'Montserrat', '48px', 'white', 'center'));

    const info = createTemplateTextArea('280px', '390px', '150px');
    info.appendChild(createTemplateText(defaultTexsts.info, 'Montserrat', '20px', 'white', 'center'));

    const square = createTemplateShape('180px', '180px', '85px', '110px', '2px solid white');

    const line = createTemplateShape('2px', '300px', '349px', '50px');
    line.style.background = 'white';

    return card.add(title, info, square, line);
  }

  createTemplate2() {
    const card = new BusinessCard('#FCCE7A');

    const title = createTemplateTextArea('300px', '300px', '110px');
    title.appendChild(createTemplateText(defaultTexsts.title, 'Nunito', '48px', '#4F4F4F', 'center'));

    const info = createTemplateTextArea('250px', '60px', '290px');
    info.appendChild(createTemplateText(defaultTexsts.info, 'Nunito', '20px', '#4F4F4F'));

    const circle = createTemplateShape('230px', '230px', '400px', '50px', '5px solid rgba(79, 79, 79, 0.3)', '50%');

    return card.add(title, info, circle);
  }

  createTemplate3() {
    const card = new BusinessCard('#6987D3');

    const title = createTemplateTextArea('300px', '200px', '260px');
    title.appendChild(createTemplateText(defaultTexsts.title, 'Pacifico', '32px', 'white', 'center'));

    const image = createTemplateImg('150px', '150px', '275px', '100px', `url(${mountains})`);

    return card.add(title, image);
  }

  createTemplate4() {
    const card = new BusinessCard('white');

    const title = createTemplateTextArea('300px', '350px', '70px');
    title.appendChild(createTemplateText(defaultTexsts.title, 'Caveat', '32px', '#3E544F', 'center'));
    const title2 = createTemplateTextArea('300px', '350px', '130px');
    title2.appendChild(createTemplateText(defaultTexsts.title, 'Noto Sans', '24px', '#3E544F', 'center'));

    const image = createTemplateImg('400px', '400px', '-90px', '145px', `url(${flowers})`);
    const image2 = createTemplateImg('100px', '100px', '450px', '200px', `url(${qrCode})`);

    return card.add(title, title2, image, image2);
  }

  render(id: string) {
    let card: HTMLDivElement = document.createElement('div');

    switch (id) {
      case '1':
        card = this.createTemplate1();
        break;
      case '2':
        card = this.createTemplate2();
        break;
      case '3':
        card = this.createTemplate3();
        break;
      case '4':
        card = this.createTemplate4();
        break;
    }

    return card;
  }
}
