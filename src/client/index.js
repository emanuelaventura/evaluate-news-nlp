import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'

console.log(checkForName);
console.log(handleSubmit);

//alert("I EXIST")
//console.log("CHANGE!!");
export {
    checkForName,
    handleSubmit
}

import logo from './images/logo.png';

var logoImg = document.getElementsByClassName('header-logo')[0];

logoImg.src = logo;
