import "./styles.css";
import { greeting } from './greeting';
import odinImage from './odin.webp';

console.log(greeting);

const image = document.createElement('img');
image.src = odinImage;

document.body.appendChild(image);