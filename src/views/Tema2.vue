<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Redes de conexión celular
    .row.mt-4
      .col-12.col-lg-9.align-self-center
        p La primera red celular fue implementada en el año 1977 en la ciudad de Chicago; para el año 1978 esta red inició su funcionamiento y ya contaba aproximadamente con 1.300 usuarios conectados. Seguidamente en el año 1979 se inició en Japón la primera red 1G nacional que fue lanzada por NTT (Nippon Telegraph and Telephone Corporation). Estos fueron los primeros pasos que se dieron para iniciar la transformación digital móvil. Desde ese momento los dispositivos móviles de comunicación o teléfonos móviles se convirtieron en la mayor demanda mundial de tecnología y lo siguen siendo en este momento, gracias a su evolución, transformación y uso en general.
      .col-12.col-lg-3.offset-lg-0
        figure
          img(src="@/assets/template/tema-2-1.svg", alt="Texto que describa la imagen")
    .row.mt-5
      .col-10.offset-1
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 3
          span Sistemas operativos móviles
        figure.mt-4
          img(src="@/assets/template/tema-2-2.png", alt="La figura representa los diversos sistemas operativos que han caracterizado a los dispositivos móviles, tales como Symbian, Windows Mobile, Android, Apple, BlackBerry, y otros más, como Palm OS, entre otros.")
    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="G1")
        .col-4.col-lg-2.offset-4.offset-lg-0
          figure
            img(src="@/assets/template/tema-2-3.png", alt="Texto que describa la imagen")
        .col-12.col-lg-10
          p Fue la primera red celular comercial en 1979 en Japón. Continuó su implementación en Dinamarca, Finlandia, Noruega y Suecia en 1981 por la empresa Telefonía Móvil Nórdica (NMT); de esta manera, se siguió implementando en otros países; inició como una red celular analógica. Estos sistemas de primera generación (1G) con su tecnología solo permitían comunicaciones de voz móvil sobre una plataforma tecnológica analógica, sin mecanismos de seguridad sobre la comunicación. No existía el servicio de datos móviles.
      div(titulo="G2")
        .row
          .col-4.col-lg-2.offset-4.offset-lg-0
            figure
              img(src="@/assets/template/tema-2-4.png", alt="Texto que describa la imagen")
          .col-12.col-lg-10
            p La implementación de esta red de segunda generación se marca en el año 1991; esta segunda generación inicia en Finlandia por Radiolinja, en el estándar GSM. Tenía servicios de mensajes de texto y permitía la implementación de procesos de cifrado aportando un nivel básico de seguridad a las comunicaciones. También, permitió el envío de mensajes de texto y multimedia.
      div(titulo="G3")
        .row
          .col-4.col-lg-2.offset-4.offset-lg-0
            figure
              img(src="@/assets/template/tema-2-5.png", alt="Texto que describa la imagen")
          .col-12.col-lg-10
            p El inicio de la tercera generación se marca en el año 2001; fue implementada en Japón por NTT DoCoMo en el estándar WCDMA (Wideband Code Division Multiple Access, en español acceso múltiple por división de código de banda ancha). Esta tercera generación se dividió en 3.5G (H o 3G+) y luego el HSPAP (H+), que eran algunas mejoras implementadas en el acceso de paquetes de alta velocidad (HSPA), lo que permite a las redes UMTS (Universal Mobile Telecommunications System o sistema universal de telecomunicaciones móviles) alcanzar mayores velocidades de transferencia de datos. Esta generación alcanzó velocidades de hasta 2 Mbps, con ella llegaron los <i>smartphones</i> y fue posible ver videos, realizar videoconferencias y creció exponencialmente la industria móvil.
      div(titulo="G4")
        .row
          .col-4.col-lg-2.offset-4.offset-lg-0
            figure
              img(src="@/assets/template/tema-2-6.png", alt="Texto que describa la imagen")
          .col-12.col-lg-10
            p El inicio de la cuarta generación se da en 2009, cuando las redes de la generación anterior se saturaron por el crecimiento desmedido de instalación y uso de aplicaciones y fue necesario buscar banda ancha para suplir las necesidades del mercado, por ejemplo: las transmisiones multimedia. Las dos primeras tecnologías disponibles en el mercado como 4G: eran el estándar WiMAX, (Worldwide Interoperability for Microwave Access - interoperabilidad mundial para acceso por microondas), presentando grandes mejoras en la velocidad de carga y descarga, alcanzando 150 Mbps 10 veces más que la generación anterior.
      div(titulo="G5")
        .row
          .col-4.col-lg-2.offset-4.offset-lg-0
            figure
              img(src="@/assets/template/tema-2-7.png", alt="Texto que describa la imagen")
          .col-12.col-lg-10
            p Inicia en el año 2019 es una tecnología experimental con proyecciones a expandirse en el transcurso de la década de 2020. Busca que los usuarios tengan servicio de internet sin interrupciones y esperan alcanzar velocidades de hasta 10 Gbps.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
