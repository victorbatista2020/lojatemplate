<template>
    <div class="service-content" id="service">
        <h1>Principais Serviços Prestados</h1>

        <div class="services">
            <div class="services-item">
                <h3>Manicure e Pedicure</h3>
                <img src="@/components/imgs/services/alisamento.png">
            </div>

            <div class="services-item">
                <h3>Corte de Cabelo</h3>
                <img src="@/components/imgs/services/alisamento.png">
            </div>
            <div class="services-item">
                <h3>Alisamento</h3>
                <img src="@/components/imgs/services/alisamento.png">
            </div>
            <div class="services-item">
                <h3>Maquiagem</h3>
                <img src="@/components/imgs/services/alisamento.png">
            </div>
            <div class="services-item">
                <h3>Escovação</h3>
                <img src="@/components/imgs/services/alisamento.png">
            </div>
            <div class="services-item">
                <h3>Progressiva</h3>
                <img src="@/components/imgs/services/alisamento.png">
            </div>
        </div>

        <div class="sub-services">
            <h2>Serviços secundários</h2>
            <ul class="sub-services-list">
                <li>Sobrancelha</li>
                <li>Design de Sobrancelha</li>
                <li>Depilação com Cera</li>
                <li>Luzes</li>
                <li>Penteado para Festas</li>

                <li>Banho de Brilho</li>
                <li>Hidratação Capilar</li>
                <li>Selagem Térmica</li>
                <li>Cauterização</li>
                <li>Botox Capilar</li>

                <li>Alongamento de Unhas</li>
                <li>Esmaltação em Gel</li>
                <li>Depilação Facial</li>
                <li>Massagem Relaxante</li>
                <li>Limpeza de Pele</li>

            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>
<style scope>
.service-content h1 {
    text-align: center;
    padding-top: 20px;
}

.service-content h2 {
    text-align: center;
}


.services {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    padding-top: 20px;
}

.services-item {
    flex: 1 1 calc(33.333% - 10px);
    box-sizing: border-box;
    padding: 10px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 5px;
    min-width: 250px;
    max-height: 250px;
    min-height: 150px;
}

.services-item img {
    padding: 10px;
    max-height: 150px;
    min-width: 150px;
}

.sub-services {
    padding-top: 20px;
}

.sub-services-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    list-style-type: disc;
    padding-top: 20px;
    padding-left: 20px;
    gap: 10px;
    max-width: 600px;
    margin: 0 auto;
}

.sub-services-list li {
    margin: 5px 0;
}

@media (max-width: 768px) {
    .services-item {
        flex: 1 1 calc(50% - 10px);
    }
}

@media (max-width: 480px) {
    .services-item {
        flex: 1 1 100%;
    }
}
</style>