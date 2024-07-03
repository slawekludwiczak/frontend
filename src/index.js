import './main.css';
import Tailwind from './tailwind.png';
import Webpack from './webpack.png';

function component() {
    const div = document.createElement('div');
    div.className = 'flex flex-col items-center'
    const h1 = document.createElement('h1');
    h1.innerHTML = 'Webpack with tailwind';
    // element.classList.add('text-lime-500', 'text-3xl', 'font-bold', 'underline');
    h1.className = 'flex text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600';
    const tailwindIcon = new Image();
    const webpackIcon = new Image();
    tailwindIcon.src = Tailwind;
    tailwindIcon.width = 300;
    webpackIcon.src = Webpack;
    webpackIcon.width = 300;
    div.appendChild(h1);
    div.appendChild(tailwindIcon);
    div.appendChild(webpackIcon);
    return div;
}

document.body.appendChild(component());