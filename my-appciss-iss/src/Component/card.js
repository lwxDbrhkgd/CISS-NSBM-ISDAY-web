import React from 'react'
import '../CSS/card.css'
import banuka from '../Assets/banuka.jpg'

export default function card() {
  return (
    <>
    <div class="box1 box">
    <div class="content">
      <div class="image">
        <img src={banuka} alt="" />
      </div>
      <div class="level">
        <p>PRO</p>
      </div>
      <div class="text">
        <p class="name">Ethan Rivers</p>
        <p class="job_title">UI / UX Designer</p>
        <p class="job_discription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam atque, ipsam a amet laboriosam eligendi.</p>
      </div>
      <div class="icons">
        <button>
          <ion-icon name="logo-dribbble"></ion-icon>
        </button>
        <button>
          <ion-icon name="logo-instagram"></ion-icon>
        </button>
        <button>
          <ion-icon name="logo-twitter"></ion-icon>
        </button>
        <button>
          <ion-icon name="logo-linkedin"></ion-icon>
        </button>
        <button>
          <ion-icon name="logo-facebook"></ion-icon>
        </button>
        <button>
          <ion-icon name="logo-behance"></ion-icon>
        </button>
      </div>
      <div class="button">
        <div>
          <button class="message" type="button">Message</button>
        </div>
        <div>
          <button class="connect" type="button">Connect</button>
        </div>
      </div>
    </div>
  </div>

 
    </>

  )
}
