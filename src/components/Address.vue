<template>
    <div class="address-content" id="address">
      <h2>Nosso Endereço</h2>
      <p class="address-text">
        Praça Antônio Menk, 153 - Centro, Osasco - SP, 06097-060
      </p>
  
      <div class="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d914.5297012343273!2d-46.77686399236459!3d-23.528228993522795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ceff0006186dcf%3A0x852f4b66b6c3fe71!2sEsta%C3%A7%C3%A3o%20de%20Osasco%20Primitiva!5e0!3m2!1spt-BR!2sbr!4v1728778889366!5m2!1spt-BR!2sbr"
          class="map-iframe"
          allowfullscreen="false"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  </script>
  
  <style scoped>
  .address-content {
    padding: 30px 15px;
    background-color: rgb(159, 76, 255);
    text-align: center;
    color: white;
  }
  
  .address-content h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .address-text {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 25px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .map-container {
    display: flex;
    justify-content: center;
  }
  
  .map-iframe {
    width: 80%;
    height: 350px;
    border: 0;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  
  @media screen and (max-width: 730px) {
    .map-iframe {
      width: 90%;
      height: 250px;
    }
  
    .address-text {
      font-size: 14px;
    }
  }
  </style>
  