export default {
  global: {
    componenteFormativo: 'Introducción al desarrollo de aplicaciones móviles',
    descripcionCurso:
      'Este material hace un recorrido por la historia y evolución de los dispositivos móviles, identificando componentes que se integran en su arquitectura de <em>software y hardware</em>; enfocado en los <em>smartphones</em> para comprender el funcionamiento básico y la integración de sus componentes físicos y lógicos; familiarizándose con los conceptos necesarios para la contextualización y desarrollo de las actividades de programación de aplicaciones.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    // imagenesDecorativasBanner: [
    //   {
    //     clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
    //     imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
    //   },
    //   {
    //     clases: ['banner-principal-decorativo-2'],
    //     imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
    //   },
    // ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',

        numero: '1',
        titulo: 'Introducción al desarrollo de aplicaciones móviles',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Dispositivos móviles',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Características de los dispositivos móviles',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Historia y evolución de los dispositivos móviles',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Características y hardware de los dispositivos móviles',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Teléfonos inteligentes o smartphones ',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',

        numero: '2',
        titulo: 'Redes de conexión celular ',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',

        numero: '3',
        titulo: 'Sistemas operativos móviles',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Historia de los sistemas operativos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Principales sistemas operativos y sus características ',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Componentes del sistema operativo móvil',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228139_CF08_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1.5 Teléfonos inteligentes o smartphones',
      referencia:
        'Computerhoy. (2015). Autopsia de un iPhone 6S: Todas sus piezas y componentes. <i>Computerhoy</i>',
      tipo: 'Noticia',
      link:
        'https://computerhoy.com/noticias/moviles/autopsia-iphone-6s-todas-sus-piezas-componentes-34955',
    },
    {
      tema: '1.5 Teléfonos inteligentes o smartphones',
      referencia:
        'Nobbot (2016). Tecnología forense: te destripamos un smartphone. <i>Nobbot.</i>',
      tipo: 'Artículo',
      link:
        'https://www.nobbot.com/pantallas/tecnologia-forense-te-destripamos-smartphone/',
    },
  ],
  glosario: [
    {
      termino: '<em>Bluetooth</em>',
      significado:
        'Sistema inalámbrico de conexión y comunicación, el cual enlaza dos o varios dispositivos electrónicos, sean móviles o no: computadores, teléfonos, relojes, auriculares, entre otros. El mudo informático creó este estándar que en inglés significa “diente azul” y se relaciona, anecdóticamente con el sobrenombre de un vikingo legendario del siglo IX.',
    },
    {
      termino: '<em>Free Software</em>',
      significado:
        'Programas desarrollados y distribuidos según la filosofía de dar al usuario la libertad de ejecutar, copiar, distribuir, estudiar, cambiar y mejorar dicho programa (Linux es un ejemplo de esta filosofía). El software libre no es siempre software gratuito (equivocación bastante habitual que tiene su origen en que la palabra inglesa free significa tanto “libre” como “gratuito”).',
    },
    {
      termino: 'PDA',
      significado:
        'Asistente Personal Digital Ordenador de pequeño tamaño cuya principal función era en principio la de mantener una agenda electrónica, aunque cada vez más se va confundiendo con los ordenadores de mano y de palma, y se está integrando con otros dispositivos como los teléfonos móviles. Se le denomina también ordenador de bolsillo.',
    },
    {
      termino: '<em>Roaming</em>',
      significado:
        'Servicio tecnológico que favorece a las personas comunicarse, con su teléfono celular, fuera de la cobertura de red proporcionada por sus operadores de servicios de comunicación. De esta manera, los dueños de un dispositivo pueden hacer llamadas y recibirlas desde un país hasta otro, desde un continente hasta otro. La palabra <i>“roaming”</i> hace referencia a lo que sucede en la calle, por fuera, en lo vago de un lugar. Este beneficio se hace posible, únicamente, cuando compañías de servicios de operación de comunicaciones celulares hacen acuerdos de servicio articulado.',
    },
    {
      termino: 'Universal Mobile Telecommunications System  UMTS',
      significado:
        'Estándar de telefonía móvil celular de banda ancha y alta velocidad (de 2 Mbps en adelante) desarrollado por el ETSI (European Telecommunications Standard Institute). Se trata de un sistema de tercera generación que permite la conexión a internet. Sustituye a los sistemas GSM y GPRS, y está disponible comercialmente a partir del año 2001 o 2002.',
    },
  ],
  referencias: [
    {
      referencia:
        'Acontecimientos importantes. (2020). <i>La evolución de tecnología móviles o celulares 1g 2g 3g 4g 5g.</i> [Video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=zGJQJlGIKcQ  ',
    },
    {
      referencia:
        'Agtechnology.net (2015). <i>Generaciones de teléfonos celulares.</i>  [Video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=VggUrZEvHK4',
    },
    {
      referencia:
        'Entorno simple. (2020). <i>Breve historia y evolución del celular. [Video]. YouTube.</i> ',
      link: 'https://www.youtube.com/watch?v=PvUomnZWADA',
    },
    {
      referencia:
        'Los infiltrados. (2020). <i>Evolución de la tecnología móvil 1G - 5G | Segunda Generación 2G.</i> [Video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=Lh8eYncXrmc ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander  ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander ',
        },
        {
          nombre: 'Wilson Andrés Cuervo Nieto',
          cargo: 'Instructor',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Fabián Leonardo Correa Díaz',
          cargo: 'Diseñador Instruccional',
          centro: 'Centro agropecuario La Granja Regional Tolima ',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda ',
          cargo: 'Evaluador Instruccional',
          centro: 'Centro de Gestión Industrial Regional Distrito Capital',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Corrector de Estilo',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Camilo Andres Bolaño Rey',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },

        {
          nombre: 'Carmen Alicia Martinez Torres ',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Industrial del Diseño y la Manufactura  - Regional Santander',
        },
        {
          nombre: 'Camilo Andres Bolaño Rey ',
          cargo: 'Locución',
          centro:
            'Centro Industrial del Diseño y la Manufactura  - Regional Santander',
        },
        {
          nombre: 'Camilo Andres Bolaño Rey',
          cargo: 'Actividad Didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
