import Scenery from './src/components/Scenery';
import './style.css'

const $root = document.querySelector('#root');

   


const $htmlScenery = Scenery();
$root.insertAdjacentHTML("beforeend", $htmlScenery)

const luigi = document.querySelector('.luigi');
const pipe = document.querySelector('.pipe');
const $btn = document.querySelector('.btn-start')

function start() {
 location.reload()
}

function jump() {

    luigi.classList.add('jump')

    setTimeout(() => {
        luigi.classList.remove('jump')
    }, 500)
}

 const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const luigiPosition = +window.getComputedStyle(luigi).bottom.replace('px', '')
    

    // console.log(pipePosition)

    if(pipePosition <= 150  && pipePosition > 0 && luigiPosition < 50 ) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        luigi.src = './assets/over.gif';
        luigi.style.animation = 'none';
        luigi.style.bottom = `${pipePosition}px`;
        luigi.classList.add('game-over')

        $btn.classList.add('active')
    }

}, 10);



$btn.addEventListener("click", start)



document.addEventListener('keydown', jump) 

