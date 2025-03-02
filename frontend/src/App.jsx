// import { useState } from 'react'
import './App.css'

import { SessionCard } from "./components/SessionCard.jsx"

function App() {
  return (
    <>
      <h1>Header</h1>
      <hr/>
      <div>
        <SessionCard data={generateSession("Boulder")}/>
        <SessionCard data={generateSession("Boulder")}/>
        <SessionCard data={generateSession("Boulder")}/>
      </div>
    </>
  )
}

export default App

function generateSession (type) {
  let numClimbs = Math.floor(Math.random() * 10);
  let climbs = [];
  for (let i = 0; i < numClimbs; i++) {
    climbs.push(`V${Math.floor(Math.random() * 10)}`);
  }

  let date = new Date(Date.now());

  return {
      date: date,
      type: `${type}`,
      climbs: climbs,
      notes: "Lorem ipsum odor amet, consectetuer adipiscing elit. Nunc eu class magna semper senectus facilisis senectus laoreet. Viverra placerat vel integer velit purus dapibus fusce litora. Molestie mus donec nam posuere vestibulum tellus. Eros mus eleifend tellus nisi ipsum ultrices. Turpis sit lacinia hendrerit vel habitasse lobortis laoreet quis natoque. Aliquam conubia proin phasellus lacus a donec ullamcorper magnis. Arcu blandit torquent himenaeos tincidunt velit.",
    }
}

function randomDate(start, end) {
  return new Date(start + Math.random() * (end - start));
}