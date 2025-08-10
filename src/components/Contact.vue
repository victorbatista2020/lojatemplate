<template>
  <div class="contact-content" id="contact">
    <h1>Entre em contato e agende a sua consulta</h1>

    <div class="whatsapp">
      <a
        href="https://wa.me/5511999999999?text=Quero%20agendar%20uma%20consulta"
        target="_blank"
        rel="noopener noreferrer"
        class="whatsapp-button"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/124/124034.png"
          alt="WhatsApp"
        />
        Agende a consulta
      </a>
    </div>

    <div class="social-media">
      <p>Veja mais sobre os nossos trabalhos, e nos acompanhe pelas redes sociais:</p>
      <div class="social-links">
        <a
          href="https://www.facebook.com/seuPerfil"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
            alt="Facebook"
            width="32"
            height="32"
          />
        </a>
        <a
          href="https://www.instagram.com/seuPerfil"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
            alt="Instagram"
            width="32"
            height="32"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.contact-content h1 {
  text-align: center;
  padding-top: 20px;
}

.contact-content {
  text-align: center;
  margin-right: 5px;
  margin-left: 5px;
  padding-top: 10px;
  background-color: rgb(218, 188, 243);
}

.whatsapp {
  margin-top: 20px;
}

.whatsapp-button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  background-color: #036b29;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s;
}

.whatsapp-button:hover {
  background-color: #1ebe5d;
}

.whatsapp-button img {
  width: 24px;
  height: 24px;
}

.social-media {
  margin-top: 30px;
}

.social-media p {
  font-weight: bold;
  color: rgb(0, 0, 0);
  margin-bottom: 10px;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.social-links img {
  width: 32px;
  height: 32px;
  transition: transform 0.3s;
}

.social-links img:hover {
  transform: scale(1.1);
}
</style>
