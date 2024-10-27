<template>
    <div class="address-content" id="address">
       Nosso endereço :  Praça Antônio Menk, 153 - Centro, Osasco - SP, 06097-060
    

    <div class="google-map">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d914.5297012343273!2d-46.77686399236459!3d-23.528228993522795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ceff0006186dcf%3A0x852f4b66b6c3fe71!2sEsta%C3%A7%C3%A3o%20de%20Osasco%20Primitiva!5e0!3m2!1spt-BR!2sbr!4v1728778889366!5m2!1spt-BR!2sbr"
            height="350px" allowfullscreen="false" loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade" class="iframe"></iframe>
            
    </div>
    </div>
</template>

<script setup lang="ts">
</script>
<style scope>
.address-content {
    padding-top: 5px;
    margin-right: 5px;
    margin-left: 5px; 
    background-color: rgb(159, 76, 255);
    align-items: center;
    text-align: center;
}

.iframe{
    width: 80%;
    
}


@media screen and (max-width: 730px) {
.iframe{
    height: 250px;
    width: 60%;
}



}




</style>