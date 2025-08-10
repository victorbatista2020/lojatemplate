<template>
    <header>
        <nav class="nav-bar">
            <div class="logo">
                <a href="#about" class="nav-link">
                    <h1> Salão template</h1>
                </a>
            </div>
            <div class="nav-list" :class="{ open: isMenuOpen }">
                <ul>
                    <li class="nav-item"><a href="#about" class="nav-link">Início</a></li>
                    <li class="nav-item"><a href="#service" class="nav-link">Serviços</a></li>
                    <li class="nav-item"><a href="#address" class="nav-link">Endereço</a></li>
                    <li class="nav-item"><a href="#contact" class="nav-link">Contato</a></li>
                </ul>
            </div>

            <div class="mobile-menu-icon">
                <button @click="menuShow">
                    <img class="icon" src="@/components/imgs/menu_white_36dp.svg" alt="Menu Icon">
                </button>
            </div>
        </nav>
        <div class="mobile-menu" :class="{ open: isMenuOpen }" @click="closeMenu">
            <ul>
                <li class="nav-item"><a href="#about" class="nav-link">Início</a></li>
                <li class="nav-item"><a href="#service" class="nav-link">Serviços</a></li>
                <li class="nav-item"><a href="#address" class="nav-link">Endereço</a></li>
                <li class="nav-item"><a href="#contact" class="nav-link">Contato</a></li>
            </ul>
        </div>
    </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isMenuOpen = ref(false);


function menuShow() {
    isMenuOpen.value = !isMenuOpen.value;

}

function closeMenu() {
    if (isMenuOpen.value) {
        isMenuOpen.value = false;

    }
}
</script>

<style>
header {
    padding-top: 0.1rem;
    background-color: #ad6fad;
    position: fixed;
    box-shadow: 0px 3px 10px #464646;
    height: 70px;
    width: 100%;
    z-index: 1000;
}

.nav-bar {
    display: flex;
    justify-content: space-between;
    padding: 0.75rem 3rem;
}

.logo {
    display: flex;
    align-items: center;
}

.logo h1 {
    color: #fff;
}

.nav-list {
    display: flex;
    align-items: center;
}

.nav-list ul {
    display: flex;
    justify-content: center;
    list-style: none; 
}

.nav-item {
    margin: 0 15px;
}

.nav-link {
    text-decoration: none;
    font-size: 1.15rem;
    color: #fff;
    font-weight: 400;
}

.mobile-menu-icon {
    display: none;
}

.mobile-menu {
    display: none;
}

@media screen and (max-width: 730px) {
    .nav-bar {
        padding: 0.3rem 3rem;
    }

    .nav-item {
        display: none;
    }

    .mobile-menu-icon {
        display: block;
    }

    .mobile-menu {
        display: none;
    }

    .mobile-menu-icon button {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    .mobile-menu ul {
        display: flex;
        flex-direction: column;
        text-align: center;
        padding-bottom: 1rem;
    }

    .mobile-menu.open {

        display: flex;
        flex-direction: column;
        text-align: center;
        padding-bottom: 1rem;
        background-color: #021da3;
    }

    .mobile-menu .nav-item {
        display: block;
        padding-top: 1.2rem;
    }

    .open {
        display: block;
    }
}
</style>
