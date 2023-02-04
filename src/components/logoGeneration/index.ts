import { templatesArt } from '../../data/templatesArt';
import { templatesFood } from '../../data/templatesFood';
import { templatesIt } from '../../data/templatesIt';
import { templatesMidecal } from '../../data/templatesMedical';
import { ILogoParameters, ITemplates } from '../../types/interfaces';
import { getRandomInt } from '../../utils';

export const logoParameters = {} as ILogoParameters;

export function sortLogoByScope() {
  let resultArray: ITemplates[] = [];
  switch (logoParameters.scope) {
    case 'Искусство/Дизайн': 
      resultArray = templatesArt;
      break;
    case 'Рестораны/Еда':
      resultArray = templatesFood;
      break;
    case 'IT':
      resultArray = templatesIt;
      break;
    case 'Медицина':
      resultArray = templatesMidecal;
      break;
    default:
      console.log('default');
  }
  return resultArray;
}

export function sortLogoTemplates() {
  const result = sortLogoByScope();
  const filterStyle = result.filter(item => item.style === logoParameters.style && item.color === logoParameters.color);
  let resultArray: ITemplates[] = [];
  while (resultArray.length != 2) {
    const index = getRandomInt(filterStyle.length);    
    resultArray.push(filterStyle[index]);    
    resultArray = resultArray.filter((v, i, arr) => arr.indexOf(v) == i);
  }
  return resultArray;
}

export function checkColorPage(id: string) {
  logoParameters.color = id;
  (document.querySelector('#btn-next__color-select') as HTMLButtonElement).disabled = false;
}
  
export function checkStylePage(id: string) {
  logoParameters.style = id;
  (document.querySelector('#btn-next__style-select') as HTMLButtonElement).disabled = false;  
}

export function checkBusinessPage() {
  if ((document.querySelector('.input-name-company') as HTMLInputElement).value !== '' && 
    (document.querySelector('.type-of-activity') as HTMLSelectElement).value !== 'Выберите сферу деятельности') {
    (document.querySelector('#btn-next__about-business') as HTMLButtonElement).disabled = false;
    logoParameters.name = (document.querySelector('.input-name-company') as HTMLInputElement).value;
    logoParameters.scope = (document.querySelector('.type-of-activity') as HTMLSelectElement).value;
  }
}
  