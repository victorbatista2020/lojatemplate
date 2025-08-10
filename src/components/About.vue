<template>
    <div class="about-content" id="about">
        <div class="slider">
            <input type="radio" name="slides" id="slide1" checked>
            <input type="radio" name="slides" id="slide2">
            <input type="radio" name="slides" id="slide3">
            <input type="radio" name="slides" id="slide4">

            <div class="slides">
                <div class="slide" id="s1">
                    <img src="./imgs/slides/salaobeleza3.png" alt="Imagem 1">
                </div>
                <div class="slide" id="s2">
                    <img src="./imgs/slides/salaobeleza2.png" alt="Imagem 2">
                </div>
                <div class="slide" id="s3">
                    <img src="./imgs/slides/barbeiro.png" alt="Imagem 3">
                </div>
                <div class="slide" id="s4">
                    <img src="./imgs/slides/barbeiro2.png" alt="Imagem 4">
                </div>
            </div>
            <div class="about">
                <h2>SALÃO</h2>

                Aqui cada cliente é tratado com atenção personalizada, buscando sempre realçar sua autoestima e estilo único.
                A equipe oferece cortes modernos, tratamentos exclusivos e dicas de cuidados,
                garantindo que todos saiam satisfeitos e confiantes. O objetivo é criar uma experiência de transformação
                que vai além da estética

                
            </div>
        </div>

    </div>


</template>


<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'About',
    setup() {
        let currentSlide = 1
        const totalSlides = 4

        function changeSlide() {
            currentSlide = (currentSlide % totalSlides) + 1
            const slideId = `slide${currentSlide}`
            const radioButton = document.getElementById(slideId) as HTMLInputElement
            if (radioButton) {
                radioButton.checked = true
            }
        }

        setInterval(changeSlide, 5000)

        return {}
    }
})
</script>

<style scoped>
.about-content {
    padding: 90px 4%;
    margin: 0 5px;
    padding-top: 100px;
    background-color: rgb(255, 179, 232);
    display: flex;
    justify-content: center;
    align-items: center;
}

.slider {
    position: relative;
    max-width: 1000px;
    margin: auto;
    overflow: hidden;
    border-radius: 10px;
}

.slider input {
    display: none;
}

img {
    width: 100%;
    height: 400px;
    border-radius: 10px;
}

.slides {
    max-width: 1000px;
    display: flex;
    transition: transform 1.5s ease-in-out;
}

.slide {
    min-width: 100%;
    padding: 20px;
    box-sizing: border-box;
    text-align: center;
}

#slide1:checked~.slides {
    transform: translateX(0);
}

#slide2:checked~.slides {
    transform: translateX(-100%);
}

#slide3:checked~.slides {
    transform: translateX(-200%);
}

#slide4:checked~.slides {
    transform: translateX(-300%);
}
</style>
