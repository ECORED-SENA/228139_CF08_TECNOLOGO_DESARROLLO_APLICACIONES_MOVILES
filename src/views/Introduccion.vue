<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row
      .col-12.col-lg-8.align-self-center
        p En la actualidad, es fácil identificar el aumento exponencial que tiene el mercado de los aparatos móviles: computadoras, relojes, teléfonos o <i>smartphones</i>, entre otros. En los últimos diez años se ha generado una fuerte demanda de aplicaciones para dispositivos en especial para los teléfonos inteligentes <i>(smartphones)</i>, y miles de usuarios en todo el planeta han abierto y alcanzado, así, oportunidades importantes para insertarse en el mundo laboral y para satisfacer necesidades de esta naturaleza.
        p.mt-3 Además, y en muy poco tiempo, los dispositivos han modificado la manera de interactuar  con el entorno; asunto que seguirá sucediendo, ya que la tendencia tecnológica indica la integración de los dispositivos móviles a las nuevas tecnologías como por ejemplo: inteligencia artificial, realidad virtual, realidad aumentada, <i>Big Data</i> y el denominado internet de las cosas. 
      .col-6.col-lg-4.offset-3.offset-lg-0.align-self-center
        figure.mb-5
          img(src="@/assets/template/tema-0-1.png", alt="Texto que describa la imagen")
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
