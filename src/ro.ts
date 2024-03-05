import './style.css'
import '../public/CAR_RILLO_LOGO.jpg'
import '../public/profile-picture.jpg'



document.querySelector<HTMLDivElement>('#ro')!.innerHTML = /*html*/`
  <div>
    <div class="navigator">
      <h2>Terminal<h2>
    </div>

    <div class="customer">'
      
      <img class="portrait" src="profile-picture.jpg" alt="profile picture">
      
      <div class="customer-details"></div>
    </div>


  </div>
  
`


// <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)