import Scenery from './src/components/Scenery';
import './style.css'

const $root = document.querySelector('#root');
const $htmlScenery = Scenery();

$root.insertAdjacentHTML("beforeend", $htmlScenery)

