import './style.css'
import { setupCounter } from './counter.ts'
import '../public/CAR_RILLO_LOGO.jpg'

document.querySelector<HTMLDivElement>('#dashboard')!.innerHTML = /*html*/`
  <div>
    <div class="navigator">
    </div>
    <div class="sidebar">
      <div class="form-select">
      <span class="material-symbols-outlined">
        edit
      </span>
      RO
      </div>
    </div>

`


// <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)