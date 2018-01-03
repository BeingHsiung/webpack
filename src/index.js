/**
 * Created by beinghsiung on 01/12/2017.
 */
import _ from  'lodash';
import './style.css';
import  printMe from './print.js';

function component () {
    let element = document.createElement('div');
    let button = document.createElement('button');
    element.innerHTML = _.join(['Hello','webpack'],' ');
    element.classList.add('hello');

    button.innerHTML = 'Click me and check the console';
    button.onclick = printMe;

    element.appendChild(button);
    return element;
}

document.body.appendChild(component());