<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Sistemas operativos móviles
    figure
      img(src="@/assets/template/tema-3-1.png", alt="Texto que describa la imagen")
    p.mt-5 Los dispositivos móviles trabajan con sistemas operativos muy similares a los utilizados por los computadores.
    .row.mt-4
      .col-6.col-lg-4.offset-3.offset-lg-4
        .cajon.color-acento-botones.p-4.mb-4.bg-amarillo-claro
          .row
            .col-4.d-none.d-lg-block.align-self-center
             figure 
              img(src="@/assets/template/tema-3-2.svg", alt="Texto que describa la imagen")
            .col-12.col-lg-8
              p.text-small Estos SO están diseñados y enfocados en la realización de la integración de los componentes físicos, el <i>hardware</i>, y mejorar el rendimiento de sus componentes más relevantes como, por ejemplo, la batería. 
    .titulo-segundo.mt-5
      #t_3_1.h2 3.1 	Historia de los sistemas operativos
    p.mt-5 Con el desarrollo y la evolución de los dispositivos móviles se generó una gran necesidad por los sistemas operativos para dispositivos móviles.
    SlyderB.mt-5(:datos="datosSlyder")
    
    .titulo-segundo.mt-5
      #t_3_2.h2 3.2 	Principales sistemas operativos y sus características
    figure
      img(src="@/assets/template/tema-3-9.png" , alt="Texto que describa la imagen")
    p.mt-4 La evolución y transformación de los principales sistemas operativos acompañan el proceso de crecimiento de los dispositivos móviles. Estos, a su vez y de manera paralela, deben realizar su adaptación a la misma regularidad con que lo hace el <i>hardware</i>, buscando adecuarse y ofrecer mejor rendimiento, mayor seguridad y efectividad a la hora de la implementación. Algunos sistemas operativos no lograron seguir los cambios frenéticos que exige esta carrera tecnológica y desaparecieron; otros, con gran esfuerzo, son los líderes del mercado, pero su trabajo de transformación es constante para mantenerse vigente.
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-azul-claro").mt-5
      .row(titulo="Symbian")
        .col-4.col-lg-3.offset-4.offset-lg-0.align-self-center
          figure
            img(src="@/assets/template/tema-3-10.png", alt="Texto que describa la imagen")
        .col-12.col-lg-9
          p Fue producto de la alianza de Nokia, Sony Ericsson, Samsung, Siemens, BenQ, Fujitsu, Lenovo, LG, Motorola, esta alianza le permitió en un momento dado ser unos de los pioneros y más usados sistemas operativos. Symbian es una colección compacta de código ejecutable y varios archivos, la mayoría de ellos son archivos DLL (bibliotecas vinculadas dinámicamente) y otros datos requeridos, incluyendo archivos de configuración, de imágenes y de tipografía, entre otros recursos. Symbian se almacenaba, en un circuito flash dentro del dispositivo móvil, este tipo de tecnología permitía conservar la información, aunque el sistema no tuviese carga eléctrica, y permitía la reprogramación, sin necesidad de separarla de los demás circuitos. Las aplicaciones para Symbian se desarrollaron a partir de lenguajes de programación orientados a objetos como C + +, Java (con sus variantes como PJava, J2ME, etc.), Visual <i>basic</i> para dispositivos móviles.

      div(titulo="Firefox OS")
        .row
          .col-4.col-lg-3.offset-4.offset-lg-0.align-self-center
            figure
              img(src="@/assets/template/tema-3-11.png", alt="Texto que describa la imagen")
          .col-12.col-lg-9
            p Es desarrollado por Mozilla Corporation bajo el apoyo de otras empresas como Telefónica y una gran comunidad de voluntarios de todo el mundo. Es un sistema operativo móvil, fundamentado en HTML5 con núcleo Linux, de código abierto, para <i>smartphones</i>y tabletas. Este sistema operativo está enfocado especialmente en los dispositivos móviles incluidos los de gama baja. Está diseñado para permitir a las aplicaciones HTML5 comunicarse directamente con el <i>hardware</i> del dispositivo usando JavaScript y Open Web APIs. Ha sido montado en <i>smartphones</i> y Raspberry Pi, compatibles con Android.
      div(titulo="BlackBerry")
        .row
          .col-4.col-lg-3.offset-4.offset-lg-0.align-self-center
            figure
              img(src="@/assets/template/tema-3-12.png", alt="Texto que describa la imagen")
          .col-12.col-lg-9
            p Inició en el año 2010 y fue desarrollado por Research In Motion. El primer dispositivo de la familia fue la BlackBerry 850, este dispositivo móvil tenía un teclado completo, lo que era inusual en ese momento. Podía enviar mensajes, acceder al correo electrónico, enviar y recibir páginas de internet completas e implementaba una agenda para organizar tareas, con tan solo una pequeña pantalla que podía mostrar ocho líneas de texto; este sistema operativo es de código cerrado. Desde el año 2015 los dispositivos BlackBerry utilizan Android como su sistema operativo. BlackBerry ha contado con seis versiones comenzando con la denominada 1.0, finalizando con su Versión 7.1 con capacidad de crear un punto de acceso a wifi, llamar a  gente a través de wifi y de escuchar radio FM.
      div(titulo="Ubuntu Touch")
        .row
          .col-4.col-lg-3.offset-4.offset-lg-0.align-self-center
            figure
              img(src="@/assets/template/tema-3-13.png", alt="Texto que describa la imagen")
          .col-12.col-lg-9
            p Ubuntu Touch SO está basado en Linux. La empresa Canonical Ltda. Lo desarrolló y presentó al mercado y al público consumidor en enero del año 2013 mediante un anuncio en el mismo sitio web de Ubuntu. Es de anotar que ya culminó el proceso de Canonical, de desarrollar una interfaz lista para ser usada en computadoras de sobremesa, en equipos portátiles, <i>netbooks</i>, en <i>tablets</i> y, por supuesto, en <i>smartphones</i>.
      div(titulo="Windows Phone")
        .row
          .col-4.col-lg-3.offset-4.offset-lg-0.align-self-center
            figure
              img(src="@/assets/template/tema-3-14.png", alt="Texto que describa la imagen")
          .col-12.col-lg-9
            p Desarrollado por Microsoft, y conocido antes como Windows Mobile, es un SO que se basa en el núcleo del sistema operativo Microsoft Windows CE .NET que es un sistema operativo de 32 bits, abierto y escalable, diseñado para cubrir las necesidades de un amplio rango de dispositivos inteligentes, que van desde las herramientas empresariales, como los controladores industriales y dispositivos de comunicaciones, hasta productos destinados al usuario final como cámaras de video o televisores interactivos; cuenta con un conjunto de aplicaciones básicas y está diseñado para ser similar a las versiones de escritorio de Windows estéticamente y existe una gran oferta de software de terceros disponible para Windows Mobile, la cual se podía adquirir en Windows Marketplace for Mobile que era un servicio de Microsoft que permitía a los usuarios navegar y descargar aplicaciones que habían sido desarrolladas por terceros.
            p.mt-3 Entre las versiones más destacadas de Windows, se encuentran: versión Windows 7, Windows 8 y Windows 8.1
      div(titulo="Android")
        .row
          .col-4.col-lg-3.offset-4.offset-lg-0.align-self-center
            figure
              img(src="@/assets/template/tema-3-15.png", alt="Texto que describa la imagen")
          .col-12.col-lg-9
            p Creado por Android Inc. en el año 2003, entre el año 2005 y el 2007 la compañía Google la adquirió y realizó su lanzamiento al mercado tecnológico. El nombre que recibe hace referencia directa a la persona que lo inventó, Andy Rubin. En el comienzo, este sistema estaba pensado para usarlo en las cámaras digitales. El Android se basa en Linux, pero Google lo modificó para que fuera usado luego en los teléfonos móviles y, posteriormente, en <i>tablets</i>; su anuncio y lanzamiento fue hecho en el año 2007 y ya para el año 2008 fue liberado. El conjunto de aplicaciones que están hechas para un sistema operativo Android, se escriben y desarrollan en Java, sin embargo, cuenta con APIS propias.
      div(titulo="iOS")
        .row
          .col-4.col-lg-3.offset-4.offset-lg-0.align-self-center
            figure
              img(src="@/assets/template/tema-3-16.png", alt="Texto que describa la imagen")
          .col-12.col-lg-9
            p iOS es el sistema operativo para iPhone, el iPad, el iPod Touch o el Apple TV. Cada año, Apple lanza una gran actualización de iOS que suele traer características exclusivas para los dispositivos, basado en el concepto de manipulación directa, es decir, que el usuario puede interactuar directamente con la pantalla del dispositivo por medio de gestos multitáctiles como toques, pellizcos y deslices. Se ha denominado iPhone OS, y ha sido introducido por la compañía Apple, pero de manera inicial estaba destinado al iPhone, y luego se usó en el iPod Touch y en el iPad. Es un derivado de Mac OS X, que se lanzó en el año 2007, aumentó el interés con el iPod Touch e iPad que son dispositivos con las capacidades multimedia del iPhone, pero sin la capacidad de hacer llamadas telefónicas; en sí su principal revolución es una combinación casi perfecta entre <i>hardware</i> y <i>software</i>. El sistema iOS es de código cerrado exclusivamente para los dispositivos móviles Apple.
    .row.mt-5
      .col-10.offset-1
        .tarjeta.bg-amarillo-degradado.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/template/tema-3-17.svg").w-75
            .col
              .row.justify-content-between.align-items-center
                .col
                  a.anexo.py-2(:href="obtenerLink('/downloads/Principales_Sistemas_Operativos.pdf')" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-pdf.svg")
                    .anexo__texto
                      .h4.mb-0.text-small Visite el Anexo 1. Principales sistemas operativos y características
                      p.text-small y conozca detalles específicos de los sistemas operativos mencionados en este punto y que han impactado significativamente el mercado tecnológico.  
                .col-sm-auto
                  a.boton.bg-azul(:href="obtenerLink('/downloads/Principales_Sistemas_Operativos.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
    .titulo-segundo.mt-5
      #t_3_3.h2 3.3 Componentes del Sistema operativo móvil 
    .row.mt-4
      .col-12
        p Se conoce que los SO móviles cuentan con capas específicas, lo cual no define o determina qué otro tipo de sistemas operativos funcionen de la misma manera; ello está más determinado por su modo de funcionamiento. El núcleo del sistema operativo se encarga de administrar aquellos elementos de <i>hardware</i> del teléfono móvil. La capa del <i>middleware</i>, conocida también como intermediador de aplicaciones del SO, son diferentes programas o módulos que permiten el uso de aplicaciones, librerías, entre otras. Para que un <i>smartphone</i> funcione correctamente, la capa de administración de aplicaciones se encarga de ejecutar, detener y finalizar las aplicaciones del SO y, finalmente, es la interfaz la que administra el uso que la persona hace de su teléfono móvil, bien sea un teléfono con servicio de pantalla sensible al tacto <i>(touch)</i> o con servicio de teclado <i>QWERTY</i>.
      .col-12.offset-lg-0.align-self-center
        figure
          img(src="@/assets/template/tema-3-18.png", alt="Texto que describa la imagen")
    .row.mt-4
      .col-10.offset-1
        LineaTiempoD.color-acento-botones
          .row(numero="1" titulo="Núcleo o <i>kernel</i>")
            .col-2.col-lg-2.align-self-center
              figure
                img(src="@/assets/template/tema-3-19.svg", alt="Texto que describa la imagen").m-0-auto.w-75
            .col-10.col-lg-10
              p Se trata de una parte del sistema operativo que concede varios servicios de conexión a las capas superiores como, por ejemplo, los drives o controladores para el <i>hardware</i>, para la gestión de procesos, para el ingreso a la información de la memoria y gestión de la misma. Este núcleo, permite el acceso a diferentes elementos del <i>hardware</i> del dispositivo.
          .row(numero="2" titulo="<i>Middleware</i>")
            .col-2.col-lg-2.align-self-center
              figure
                img(src="@/assets/template/tema-3-20.svg", alt="Texto que describa la imagen").m-0-auto.w-75
            .col-10.col-lg-10
              p Es el conjunto de módulos que hacen posible la existencia de aplicaciones para móviles. Es totalmente transparente para el usuario y ofrece servicios clave como el motor de mensajería y comunicaciones, <i>códecs</i> multimedia, intérpretes de páginas web, gestión del dispositivo y seguridad.
          .row(numero="3" titulo="Entorno de ejecución de aplicaciones")
            .col-2.col-lg-2.align-self-center
              figure
                img(src="@/assets/template/tema-3-21.svg", alt="Texto que describa la imagen").m-0-auto.w-75
            .col-10.col-lg-10
              p Este entorno consiste en un gestor de aplicaciones y un conjunto de interfaces programables y programables abiertas, por parte de los desarrolladores para facilitar la creación de <i>software</i>.
          .row(numero="4" titulo="Interfaz de usuario")
            .col-2.col-lg-2.align-self-center
              figure
                img(src="@/assets/template/tema-3-22.svg", alt="Texto que describa la imagen").m-0-auto.w-75
            .col-10.col-lg-10
              p Las interfaces de usuario facilitan la interacción con el usuario y el diseño de la presentación visual de la aplicación. Los servicios que incluye son los de componentes gráficos (botones, pantallas, listas, etc.).
          .row(numero="5" titulo="Marco de interacción")
            .col-2.col-lg-2.align-self-center
              figure
                img(src="@/assets/template/tema-3-23.svg", alt="Texto que describa la imagen").m-0-auto.w-75
            .col-10.col-lg-10
              p Aparte de estas capas, también existe una familia de aplicaciones nativas del teléfono que suelen incluir los menús o el marcador de números de teléfono.
</template>

<script>
export default {
  name: 'Tema3',
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
