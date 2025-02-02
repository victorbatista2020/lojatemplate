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

    </div>
</template>

<script setup lang="ts">
</script>
<style scope>
.service-content h1 {
    text-align: center;
}

.service-content {
    padding: 30px 4%;
    margin-right: 5px;
    margin-left: 5px;
    padding-top: 10px;
    background-color: gray;
}

.services {
    display: flex;
    flex-wrap: wrap;
    gap: 10px; 
    justify-content: center;
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

.services-item img{
  padding: 10px;
  max-height: 150px;
  min-width: 150px;
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