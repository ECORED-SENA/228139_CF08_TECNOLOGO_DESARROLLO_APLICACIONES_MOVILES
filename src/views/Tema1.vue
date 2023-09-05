<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Introducción al desarrollo de aplicaciones móviles
    figure.mt-3
      img(src="@/assets/template/tema-1-1.png", alt="Texto que describa la imagen")
    p.mt-4 Los dispositivos móviles, y en especial los <i>smartphones</i>, se han convertido en elementos fundamentales de uso personal y empresarial, por esta razón, el desarrollo y uso de las aplicaciones móviles ocupa un importante lugar en el mercado mundial, pues estas herramientas de comunicación son rápidas y eficientes permitiendo el desarrollo de actividades complejas. 
    .row.mt-4
      .col-10.offset-1
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Fácil acceso")
            .col-10.col-lg-11.mb-lg-0.mb-3
              p El fácil acceso y adquisición de estos dispositivos móviles ha generado una creciente necesidad de contenidos generales y particulares.
            .col-2.col-lg-1
              figure
                img(src="@/assets/template/tema-1-2.svg", alt="Texto que describa la imagen")
          .row(numero="2" titulo="Escenarios propicios")
            .col-10.col-lg-11.mb-lg-0.mb-3
              p Es así como se establecen los escenarios propicios para los desarrolladores que permiten identificar falencias y necesidades que se convierten en estrategias digitales.
            .col-2.col-lg-1
              figure
                img(src="@/assets/template/tema-1-3.svg", alt="Texto que describa la imagen")
          .row(numero="3" titulo="Posibilidades infinitas")
            .col-10.col-lg-11.mb-lg-0.mb-3
              p Las estrategias digitales potencian el modelo de negocios, conexión con las personas, las empresas y los grupos de valor. 
            .col-2.col-lg-1
              figure
                img(src="@/assets/template/tema-1-40.svg", alt="Texto que describa la imagen")
          .row(numero="4" titulo="Comunicación diversificada")
            .col-10.col-lg-11.mb-lg-0.mb-3
              p El desarrollo móvil se aplica de gran manera como canal de comunicación para el despliegue de contenido en la educación, las finanzas, las compras, el entretenimiento, entre otras áreas.
            .col-2.col-lg-1
              figure
                img(src="@/assets/template/tema-1-4.svg", alt="Texto que describa la imagen")
    Separador

    .titulo-segundo.mt-5
      #t_1_1.h2 1.1  Dispositivos móviles
    .row.mt-3
      .col-10.offset-1
        .row.rounded-20.borde-gris.align-items-center
          .col-8.offset-2.col-lg-4.d-lg-block.p-0.offset-lg-0
            figure
              img(src="@/assets/template/tema-1-5.png", alt="Texto que describa la imagen")
          .col-12.col-lg-8.px-5.py-4.align-self-center
            p Estos son pequeños aparatos electrónicos que permiten su fácil transporte y portabilidad, cuentan con capacidad de conexión permanente o intermitente a redes de datos.  
            .h5.mt-3.mb-0 Los dispositivos móviles, por lo general, tienen capacidad de procesamiento y almacenamiento; en su mayoría están diseñados con el fin de realizar una sola y específica tarea.
    Separador
    .titulo-segundo.mt-5
      #t_1_2.h2 1.2 	Características de los dispositivos móviles
    .row.mt-3
      .col-10.offset-1
        .row.rounded-20.borde-gris
          .col-8.offset-2.d-lg-block.p-0.offset-lg-0.col-lg-4
            figure
              img(src="@/assets/template/tema-1-6.png", alt="Texto que describa la imagen")
          .col-12.col-lg-8.px-5.py-4.align-self-center
            p Se enuncian a continuación algunas de las características principales que permiten identificar y definir un dispositivo móvil. Los <i>smartphones</i> no son los únicos que se encuentran en esta categoría; en el entorno cotidiano es posible identificar muchos otros elementos que cumplen con estas características.
    .row.mt-5
      .col-10.offset-1
        LineaTiempoD.color-acento-botones
          .row(numero="1" titulo="Movilidad")
            .col-10.col-lg-11.align-self-center.mb-lg-0.mb-3
              p Es la cualidad de un dispositivo electrónico para ser transportado o trasladado con frecuencia y facilidad. Su tamaño reducido favorece la portabilidad y sus baterías permiten ser utilizados durante su transporte.
            .col-2.col-lg-1.px-3
              figure
                img(src="@/assets/template/tema-1-7.svg", alt="Texto que describa la imagen")
          .row(numero="2" titulo="Reducido tamaño")
            .col-10.col-lg-11.align-self-center.mb-lg-0.mb-3
              p Esta característica permite que el dispositivo pueda ser transportado cómodamente por una persona. También posibilita ser usado con una o dos manos sin necesidad de ninguna ayuda o soporte externo. 
            .col-2.col-lg-1.px-3
              figure
                img(src="@/assets/template/tema-1-8.svg", alt="Texto que describa la imagen")
          .row(numero="3" titulo="Conexión inalámbrica ")
            .col-10.col-lg-11.align-self-center.mb-lg-0.mb-3
              p Es la capacidad que tiene el dispositivo electrónico de enviar y recibir datos sin necesidad de una conexión fija cableada.
            .col-2.col-lg-1.px-3
              figure
                img(src="@/assets/template/tema-1-9.svg", alt="Texto que describa la imagen")
          .row(numero="4" titulo="Interacción con los usuarios")
            .col-10.col-lg-11.align-self-center.mb-lg-0.mb-3
              p Es el proceso por el cual se genera una actividad de uso, configuración y manipulación del usuario con el dispositivo móvil electrónico. 
            .col-2.col-lg-1.px-3
              figure
                img(src="@/assets/template/tema-1-10.svg", alt="Texto que describa la imagen")
          .row(numero="5" titulo="Baterías")
            .col-10.col-lg-11.align-self-center.mb-lg-0.mb-3
              p Que permiten su funcionamiento independiente durante varias horas.
            .col-2.col-lg-1.px-3
              figure
                img(src="@/assets/template/tema-1-11.svg", alt="Texto que describa la imagen")
    Separador
    .titulo-segundo.mt-5
      #t_1_3.h2 1.3 Historia y evolución de los dispositivos móviles
    .row
      .col-10.col-lg-8.offset-1.offset-lg-2
        .bloque-texto-a.color-primario.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-center
            .col-lg-8.mb-lg-0.mb-3
              .bloque-texto-a__texto.p-4
                p Las cuatro décadas en las cuales se enmarca la aparición y evolución de los <i>smartphones</i> permiten ver cómo sus componentes se reducen y se potencializan; así, hay teléfonos cada día más pequeños y con mejor rendimiento, permiten sustituir los computadores de escritorio y portátiles que empiezan a ser desplazados por esta tecnología que está en una dinámica evolución y transformación.
            .col-lg-4.col-8.mb-4.mb-lg-0
              figure
                img(src="@/assets/template/tema-1-12.svg", alt="Texto que describa la imagen")
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Figura 1
      span Dispositivos móviles historia y evolución
    LineaTiempoC.color-primario.mt-5
        .row(titulo="1982")
          .col-10.col-lg-2.offset-1.offset-lg-5
            figure
              img(src="@/assets/template/tema-1-13.png", alt="Texto que describa la imagen")
        .row(titulo="1984")
          .col-10.col-lg-2.offset-1.offset-lg-5
            figure
              img(src="@/assets/template/tema-1-14.png", alt="Texto que describa la imagen")
        .row(titulo="1987")
          .col-10.col-lg-2.offset-1.offset-lg-5
            figure
              img(src="@/assets/template/tema-1-15.png", alt="Texto que describa la imagen")
        .row(titulo="1989")
          .col-10.col-lg-2.offset-1.offset-lg-5
            figure
              img(src="@/assets/template/tema-1-16.png", alt="Texto que describa la imagen")
        .row(titulo="1992")
          .col-10.col-lg-2.offset-1.offset-lg-5
            figure
              img(src="@/assets/template/tema-1-17.png", alt="Texto que describa la imagen")
        .row(titulo="1993")
          .col-10.col-lg-2.offset-1.offset-lg-5
            figure
              img(src="@/assets/template/tema-1-18.png", alt="Texto que describa la imagen")
        .row(titulo="2000")
          .col-10.col-lg-2.offset-1.offset-lg-5
            figure
              img(src="@/assets/template/tema-1-19.png", alt="Texto que describa la imagen")
        .row(titulo="2002")
          .col-10.col-lg-2.offset-1.offset-lg-5
            figure
              img(src="@/assets/template/tema-1-20.png", alt="Texto que describa la imagen")
        .row(titulo="2004")
          .col-10.col-lg-2.offset-1.offset-lg-5
            figure
              img(src="@/assets/template/tema-1-21.png", alt="Texto que describa la imagen")
        .row(titulo="2007")
          .col-10.col-lg-2.offset-1.offset-lg-5
            figure
              img(src="@/assets/template/tema-1-22.png", alt="Texto que describa la imagen")
        .row(titulo="2015")
          .col-10.col-lg-2.offset-1.offset-lg-5
            figure
              img(src="@/assets/template/tema-1-23.png", alt="Texto que describa la imagen")
        .row(titulo="2021")
          .col-10.col-lg-2.offset-1.offset-lg-5
            figure
              img(src="@/assets/template/tema-1-24.png", alt="Texto que describa la imagen")
    p.mt-5 En el siguiente recurso, se conocerán aspectos importantes de la historia y evolución de los dispositivos móviles y las transformaciones generales de diseño y funcionalidad que han sufrido con el tiempo.
    .row
      .col-12.col-lg-8.offset-1.offset-lg-2
        .bloque-texto-a.color-acento-botones.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-center
            .col-lg-4.mb-4.mb-lg-0.col-6
              figure
                img(src="@/assets/template/tema-1-25.svg", alt="Texto que describa la imagen")    
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p Los primeros dispositivos móviles se remontan a más de 100 años desde los inicios de la comunicación electrónica y mantienen, como objetivo, la construcción de elementos portátiles que permitan una comunicación fluida sin dependencias fijas. Podemos resaltar estos cuatro inventos que marcaron el camino para alcanzar lo que conocemos ahora.
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 1
      span Primeros Dispositivos Móviles
    .tabla-a.color-acento-botones.mt-5 
      table
        thead
          tr.bg-acento-botones
            th.p-3(style='width: 20%') Año
            th Inventor
            th Características
            th Descripción
        tbody
          tr
            td.p-4 1902 - Primer dispositivo electrónico considerado como móvil.
            td.p-4 Nathan B. Stubblefield 
            td.p-4 Utilizaba varios receptores de 800 metros de alcance que instaló en una plaza en Kentucky.
            td.p-4 Los receptores funcionaban a través de campos magnéticos. El teléfono principal tenía una antena y unas bobinas en forma de rueda. El sistema servía para comunicarse con un teléfono fijo y el emisor se podía mover de mover o desplazar
          tr
            td.p-4 1917 
            td.p-4 Eric Tigerstedt
            td.p-4 Teléfono plegable de bolsillo con un micrófono de carbono muy delgado
            td.p-4 Usado en comunicaciones analógicas de radio de barcos y trenes.
          tr
            td.p-4 Segunda Guerra mundial
            td.p-4 H12-16 (desarrollado por Motorola).
            td.p-4 Dispositivos llamados Handie Talkie
            td.p-4 Era un comunicador a distancia y fue muy utilizado por las tropas y el ejército. Funcionaba por medio de ondas de radio.
          tr
            td.p-4 1973
            td.p-4 Motorola DynaTAC 8000X 
            td.p-4 Pesado teléfono de 4,4 libras (2 kg)
            td.p-4 El primer teléfono móvil de mano disponible comercialmente.
    Separador 
    .titulo-segundo.mt-5
      #t_1_4.h2 1.4 	Características y <i>hardware</i> de los dispositivos móviles
    .row.mb-5
      .col-10.offset-1
        .row.borde-gris.rounded-10
          .col-8.offset-2.d-lg-block.px-4.align-self-center.text-center.offset-lg-0.col-lg-2
            figure
              img(src="@/assets/template/tema-1-26.svg", alt="")
          .col-12.col-lg-10.p-4.align-self-center
            p El primer <i>smartphone</i> de la historia fue el IBM Simon. Fabricado en 1992 y distribuido por EE. UU. entre agosto de 1994 y febrero de 1995, tenía un precio de 899 dólares, con una interfaz de usuario ausente de botones físicos y basada totalmente en una pantalla táctil de tipo LCD monocromo. Este dispositivo disponía de texto predictivo, agenda, funciones de SMS, correo electrónico, buscador #[em (beeper),] fax y un módem para conexión a internet; estas funciones eran más comunes de una PDA que de un móvil de la época. Mostraba un teclado QWERTY en pantalla desde el cual se podía introducir el texto estándar o predictivo.
    .row.justify-content-center.mb-5
      .col-lg-4
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 2
          span Imagen del IBM Simon
        figure
          img(src="@/assets/template/tema-1-27.png", alt="La figura representa un teléfono IBM Simon" style="width: 300px")
    p.mt-5 Los teléfonos móviles no son los únicos aparatos electrónicos que se consideran como dispositivos móviles, estos son algunos de los dispositivos más comunes: 
    .row.mt-4
      .col-10.offset-1
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Teléfonos inteligentes o <i>smartphones</i>")
            .col-12.col-lg-9.mb-lg-0.mb-3
              p Son teléfonos móviles construidos con mayor capacidad de almacenamiento y de procesamiento. Han evolucionado hasta convertirse casi en un pequeño computador de bolsillo son utilizados para el trabajo, estudio, entreteniendo y muchas más actividades cotidianas.
            .col-lg-3.col-12.d-lg-block
              figure
                img(src="@/assets/template/tema-1-28.png", alt="Texto que describa la imagen").mmy-3
          .row(numero="2" titulo="<i>Tablets</i>")
            .col-12.col-lg-9.mb-lg-0.mb-3
              p Son computadores portátiles personales integrados en una pantalla táctil, con acceso a internet y capacidad para ejecutar aplicaciones instaladas sobre un sistema operativo; su manejo es fácil e intuitivo.
            .col-lg-3.d-lg-block
              figure
                img(src="@/assets/template/tema-1-30.png", alt="Texto que describa la imagen").mmy-3
          .row(numero="3" titulo="Relojes inteligentes")
            .col-12.col-lg-9.mb-lg-0.mb-3
              p Son relojes de pulsera que poseen funcionalidades como acceso a internet, recibir llamadas o enviar mensajes.
            .col-lg-3.d-lg-block
              figure
                img(src="@/assets/template/tema-1-31.png", alt="Texto que describa la imagen").mmy-3
          .row(numero="4" titulo="Escenarios propicios")
            .col-12.col-lg-9.mb-lg-0.mb-3
              p Son dispositivos destinados a almacenar y reproducir archivos digitales como audio o video.
            .col-lg-3.d-lg-block
              figure
                img(src="@/assets/template/tema-1-32.png", alt="Texto que describa la imagen").mmy-3
          .row(numero="5" titulo="Cámaras")
            .col-12.col-lg-9.mb-lg-0.mb-3
              p Se trata de dispositivos que posibilitan la captura congelada de imágenes reales. En la mayoría de los casos captan, también, audio y videos. Tienen, además, capacidad de conectarse a otros dispositivos, a internet, compartir y enviar datos, información y material almacenado.
            .col-lg-3.d-lg-block
              figure
                img(src="@/assets/template/tema-1-33.png", alt="Texto que describa la imagen").mmy-3
          .row(numero="6" titulo="GPS")
            .col-12.col-lg-9.mb-lg-0.mb-3
              p Son dispositivos que permiten a los usuarios determinar la posición de forma precisa de un vehículo o una persona que use el dispositivo.
            .col-lg-3.d-lg-block
              figure
                img(src="@/assets/template/tema-1-34.png", alt="Texto que describa la imagen").mmy-3
          .row(numero="7" titulo="Computadores portátiles")
            .col-12.col-lg-9.mb-lg-0.mb-3
              p Son computadores completos que, debido a su tamaño reducido y compacto, permiten su transporte y su uso sin necesidad de tener una conexión eléctrica continua.
            .col-lg-3.d-lg-block
              figure
                img(src="@/assets/template/tema-1-35.png", alt="Texto que describa la imagen").mmy-3
    Separador
    .titulo-segundo.mt-5
      #t_1_5.h2 1.5 	Teléfonos inteligentes o <i>smartphones</i>
    figure.mt-4
      img(src="@/assets/template/tema-1-36.png", alt="Texto que describa la imagen")
    p.mt-4 En este apartado se expondrá sobre los teléfonos inteligentes o <i>smartphones</i> para profundizar en sus características y componentes, ya que el enfoque de desarrollo de aplicaciones se centra sobre estos elementos electrónicos.
    .row.mt-4
      .col-10.offset-1
        .cajon.color-acento-botones.p-4.mb-4.bg-amarillo-claro
          .row
            .col-2.d-none.d-lg-block.align-self-center
              figure 
                img(src="@/assets/template/tema-1-37.svg", alt="Texto que describa la imagen")
            .col-12.col-lg-10
              p.mb-0 En el año 2007 con la presentación del primer iPhone se inicia la gran transformación de los dispositivos móviles. Ya no era necesario conectar el celular a un equipo portátil para realizar la instalación de alguna aplicación o actualización de su sistema operativo (SO). Este fue el punto de partida para la implementación del comercio de aplicaciones por medio de la tienda App Store; también se implantó la tecnología multitáctil facilitando el uso de los dispositivos e incrementando las actividades que con este se podría realizar, las demás compañías realizaron lo propio y empezaron a imitar estas mejoras. 
    .h4.mt-5 Actividades que se pueden realizar con los teléfonos inteligentes o <i>smartphones</i>
    figure.mt-4
      img(src="@/assets/template/tema-1-38.png", alt="Texto que describa la imagen")
    p.mt-5 Está ya dicho que son múltiples las acciones y actividades que se pueden llevar a cabo con los teléfonos inteligentes o ayudados por ellos, pero aquí se le presentan las más comunes:
    .col-sm.mb-5.mb-sm-0
      ul.lista-ul--color
        li.d-flex 
          i.fas.fa-brain
          p.mb-0 Recepción y salida de llamadas de voz.
        li.d-flex 
          i.fas.fa-brain
          p.mb-0 Acceso a la red de internet mediante WAP, el protocolo de aplicaciones inalámbricas.
        li.d-flex 
          i.fas.fa-brain
          p.mb-0 Acceso a la red de internet mediante GPRS (Servicio General de Paquetes vía Radio) para tecnologías GSM.
        li.d-flex 
          i.fas.fa-brain
          p.mb-0 Acceso a Internet utilizando HSPD+.
        li.d-flex 
          i.fas.fa-brain
          p.mb-0 Acceso a Internet utilizando LTE. 
        li.d-flex 
          i.fas.fa-brain
          p.mb-0 Recepción y salida de mensajes, tanto SMS como mensajes multimedia, MMS.
        li.d-flex 
          i.fas.fa-brain
          p.mb-0 Aplicaciones de software básico como reloj, alarma, calendario, calculadora, juegos.
        li.d-flex 
          i.fas.fa-brain
          p.mb-0 Conexiones en red con tecnologías como Infrarrojo, <i>bluetooth</i>, Wi-Fi.
        li.d-flex 
          i.fas.fa-brain
          p.mb-0 Sistema de Posicionamiento Global GPS.
        li.d-flex 
          i.fas.fa-brain
          p.mb-0 <i>Roaming.</i>
        li.d-flex 
          i.fas.fa-brain
          p.mb-0 Sistemas de entrenamiento como reproducción de audio y video.
        li.d-flex 
          i.fas.fa-brain
          p.mb-0 Cámaras fotografícas y video frontales y posteriores.
        li.d-flex 
          i.fas.fa-brain
          p.mb-0 Visualización de servicios de TV.
        li.d-flex 
          i.fas.fa-brain
          p.mb-0 Contenidos personalizados.
        li.d-flex 
          i.fas.fa-brain
          p.mb-0 Proyección de Imágenes.
        li.d-flex 
          i.fas.fa-brain
          p.mb-0 Visualización de imágenes y Videos 3D.          
    .row.mt-5
      .col-12.col-lg-8.offset-1.offset-lg-2
        .bloque-texto-a.color-primario.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-center
            .col-lg-9
              .bloque-texto-a__texto.p-4
                .h4 Funcionamiento de un teléfono inteligente o <i>smartphone</i>
                p.mt3 Los dispositivos móviles están compuestos por partes, gracias a las cuales, es posible su funcionamiento básico. Conozca esas partes que integran a los dispositivos móviles e identifique, en el recurso que se le presenta a continuación, los aspectos más importantes de ello.
            .col-lg-3.mb-4.mb-lg-0.col-6
              figure
                img(src="@/assets/template/tema-1-39.svg", alt="Texto que describa la imagen")
    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/WJP4hik73I4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Funcionamiento de un teléfono inteligente
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
