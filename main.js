import Scenery from './src/components/Scenery';
import './style.css'

const $root = document.querySelector('#root');

   

const $htmlScenery = Scenery();

function jump() {
    const luigi = document.querySelector('.luigi');

    luigi.classList.add('jump')

    setTimeout(() => {
        luigi.classList.remove('jump')
    }, 500)
    console.log("te")
}

document.addEventListener('keydown', jump) 



$root.insertAdjacentHTML("beforeend", $htmlScenery  )
