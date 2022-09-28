import "./x.scss";
import './y.less';
import './z.styl';

import png from './assets/1.png'

const div = document.getElementById('app1')
div.innerHTML = `
<img src="${png}">
`
console.log('你好')
const button = document.createElement('button')
button.innerText = '懒加载'
button.onclick = () => {
    const promise = import('./lazy')
    promise.then((module) => {
        const fn = module.default
        fn()
    }, () => { })
}
div.appendChild(button)


