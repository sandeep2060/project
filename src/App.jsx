import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  return (
    <>

  <div class="container">
    <div class="card">
      <div class="illustration">
        <img src="https://tse1.mm.bing.net/th/id/OIP.c3c5dKWAzBDteqFaxkJp2wHaHa?pid=ImgDet&w=178&h=178&c=7&dpr=1.5&o=7&rm=3" alt="Illustration" />
      </div>
      <h2>Login</h2>
      <form>
        <div class="input-group">
          <input type="text" required />
          <label>Username</label>
        </div>
        <div class="input-group">
          <input type="password" required />
          <label>Password</label>
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
    
  </div>


     


    </>
  )
}

export default App
