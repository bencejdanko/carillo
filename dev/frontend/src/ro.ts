import './style.css'
import '../public/CAR_RILLO_LOGO.jpg'
import '../public/profile-picture.jpg'
import '../public/gtr3.png'



document.querySelector<HTMLDivElement>('#ro')!.innerHTML = /*html*/`
  <div>
    <div class="navigator">
      <h2>Terminal<h2>
    </div>

    <div class="terminal">

      <div class="header">
        header
      </div>

      <div class="info">
        <div class="impression">
          <div class="GuestName">John Doe</div>
          <img class="portrait" src="profile-picture.jpg" alt="profile picture">
        </div>  


        <div class="customer-details">
            <p>Info1</p>
            <p>Info2</p>
            <p>Info1</p>
            <p>Info2</p>
            <p>Info1</p>
            <p>Info2</p>
            <p>Info1</p>
            <p>Info2</p>
          </div>
      </div>

      <div class="timer">
        timer
      </div>

      <div class="form">
        form
      </div>

      <div class="car">
        <img class="car-portrait" src="gtr3.png">
      </div>

      <div class="notes">
        notes
      </div>

      <div class="parts">
        parts
      </div>

      <div class="progress">
        progress
      </div>

      <div class="manage">
        manage
      </div>
      
      <div class="advisor">
        advisor
      </div>

    </div>

  </div>
  
`


// <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)