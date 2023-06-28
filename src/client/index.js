import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
import { checkForEmptyText } from './js/emptyTextChecker'
import { handleSubmit } from './js/formHandler'

console.log(checkForEmptyText);
console.log(handleSubmit);

export {
    checkForEmptyText,
    handleSubmit
}

import logo from './images/logo.png';
var logoImg = document.getElementsByClassName('header-logo')[0];
logoImg.src = logo;
