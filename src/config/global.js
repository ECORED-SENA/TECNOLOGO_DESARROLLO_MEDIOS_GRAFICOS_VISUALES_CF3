export default {
  global: {
    componenteFormativo: 'Gestión de color',
    descripcionCurso:
      'Al momento de realizar ajustes de color y orientarlos a un proceso tecnológico por intermedio de una cámara fotográfica, un escáner, un monitor, una impresora y técnicas análogas de preparación de tintas, se genera una interpretación única de colores, los cuales no cambian en sus propiedades de color, ya que estas son iguales tanto en la lectura de entrada como de salida. Esto se denomina gestión de color.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Gestión de color',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Definición y características',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'El color en impresos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Aplicación de modelos de color',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Control de calidad de impresos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Estandarización de color para impresos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Implementación de modelos y espacios de color',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Perfiles de entrada',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Perfiles de salida',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Perfiles de visualización',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Perfiles de color <em>gamut</em>',
            hash: 't_2_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.7',
            titulo: 'Muestras Pantone y aplicación',
            hash: 't_2_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.8',
            titulo: 'Valor tonal, equilibrio, grises y densidad',
            hash: 't_2_8',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.9',
            titulo: 'Incremento de valor tonal',
            hash: 't_2_9',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Aplicación de normas técnicas',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        nombreRuta: 'sintesis',
        icono: 'fas fa-sitemap',
        numero: '',
        titulo: 'Síntesis',
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
  referencias: [
    {
      referencia: 'Adobe Company. (2020). Explicación de la gestión del color.',
      link:
        'https://helpx.adobe.com/la/photoshop/using/understanding-color-management.html',
    },
    {
      referencia: 'American academy of ophtalmology. (2017). Fotorreceptores.',
      link: 'https://www.aao.org/salud-ocular/anatomia/fotorreceptores',
    },
    {
      referencia: 'Consorcio Internacional del Color. (2021). ICC.',
      link: 'https://www.color.org/index.xalter',
    },
    {
      referencia:
        'García, R. (2021) ¿Para qué sirve el espacio de color y cuáles hay?',
      link: 'https://www.adslzone.net/reportajes/foto-video/espacios-color/',
    },
    {
      referencia:
        'Gómez, B. (2021). Descubre el Delta E, una medición fundamental para profesionales del color. ',
      link: 'https://www.profesionalreview.com/2021/06/26/delta-e-que-es/',
    },
    {
      referencia:
        'Instituto Tecnológico de Óptica, Color e Imagen. (2012). Estandarización de Color según ISO 12647.',
      link:
        'https://www.alborum.com/estandarizacion-del-color-segun-iso-12647-2/',
    },
    {
      referencia: 'Itten Johannes. (SF). Arte del color. Editorial Bouret.',
    },
    {
      referencia:
        'Javier Lucas. (2021). RGB, CMYK, LAB: Todo lo que Necesitas Saber sobre los Modos de Color.',
      link:
        'https://www.dzoom.org.es/rgb-cmyk-lab-todo-lo-que-necesitas-saber-sobre-los-modos-de-color/',
    },
    {
      referencia: 'López, J. (2012). Sustratos para impresión.',
      link: 'https://prezi.com/wj8zwzkhvvvw/sustratos-para-impresion/',
    },
    {
      referencia: 'Materiales de Laboratorio. (2021.) ¿Qué es un colorímetro?',
      link: 'https://materialeslaboratorio.com/colorimetro/',
    },
    {
      referencia: 'Navarro, J. (2013) Estandarización de color, ISO 12647.',
      link:
        'https://issuu.com/juannavarrofuentes/docs/4_estandarizaci__n_del_color_iso_12',
    },
    {
      referencia:
        'Vlietinck, E. (2018) Qué son RGB y CMYK y cuándo usar cada uno.',
      link: 'https://www.clipstudio.net/aprende-a-dibujar/archives/157955',
    },
    {
      referencia: 'Westreicher, G. (2021). Prisma.',
      link: 'https://economipedia.com/definiciones/prisma.html',
    },
    {
      referencia: 'Wiki Imprenta. (2020). Lineatura.',
      link: 'https://imprenta.wiki/lineatura/',
    },
    {
      referencia:
        'Won Wuicius. (1992). Principio del diseño en color. Editorial Gustavo Gilli.',
    },
  ],
  glosario: [
    {
      termino: 'Colorímetro',
      significado:
        'es un aparato que se usa para medir y analizar los colores. Hoy en día existen colorímetros elaborados y calibrados para usos específicos. Por ejemplo, los de transmisión que pueden calcular la concentración de un componente químico. (Materiales laboratorio, 2021).',
    },
    {
      termino: 'Delta (⊗) E',
      significado:
        'el Delta E es una medida usada para expresar la precisión de color que tiene el panel de un monitor o televisión. También podemos verlo expresado como ΔE (precisamente Δ es la letra griega Delta) o E*. Para explicar qué es esta métrica, podemos comenzar explicando de dónde viene su nombre. En matemáticas, ciencia e ingeniería, la letra Delta mayúscula significa cambio o incremento de una variable. (Gómez, 2021).',
    },
    {
      termino: 'Fotorreceptor',
      significado:
        'los fotorreceptores son células especializadas de la retina del ojo responsables de convertir la luz en señales que son enviadas al cerebro. Los fotorreceptores nos dan la visión de color y la visión nocturna. (<em>American academy of ophtalmology</em>, 2017).',
    },
    {
      termino: 'ICC',
      significado:
        '<em>International Color Consortium</em>. El propósito del ICC es promover el uso y la adopción de sistemas de gestión del color abiertos, independientes del proveedor y multiplataforma. La ICC anima a los proveedores a admitir el formato de perfil ICC y los flujos de trabajo necesarios para utilizar perfiles ICC. La especificación v4 ICC se usa ampliamente y se menciona en muchos estándares internacionales y otros estándares de facto. Fue aprobado por primera vez como norma internacional, ISO 15076-1, en 2005 y revisado en 2010. (<em>International Color Consortium</em>, 2021).',
    },
    {
      termino: 'LAB',
      significado:
        'coordenadas de <b>(L)</b> luminosidad <b>(A)</b> oposición Rojo-Verde <b>(B)</b> Amarillo-Azul; define un color real, en un espacio tridimensional de color. Se trata del modo conocido como LAB, que consta de tres canales: Luminosidad, A y B y que, aunque suene un poco a chino, es el modelo que más se acerca a la forma que tiene el ojo humano de percibir los colores. (Javier Lucas, 2021).',
    },
    {
      termino: '<em>Off-press</em>',
      significado:
        'pruebas de color, producidas por un sistema de impresión previo a la impresión final, emula patrones y colores antes de la producción final.',
    },
    {
      termino: 'Prisma',
      significado:
        'es un tipo de poliedro formado por dos caras paralelas que son polígonos idénticos denominados bases. Estas figuras se unen por las caras laterales que son paralelogramos (cuadriláteros cuyos lados opuestos son paralelos). (Westreicher, 2021).',
    },
    {
      termino: 'Sustrato',
      significado:
        'sea papel, tela, material de reciclaje, plástico o metal, el sustrato no es otro que el material y el soporte donde realizaremos nuestro trabajo, nuestra obra. Con ello no se pretende decir que una mesa de dibujo es parte del sustrato, este se limitará exclusivamente al área donde realizamos la obra. (López, 2013).',
    },
  ],
  complementario: [
    {
      texto:
        'Marco Creativo. (2016) Modos de Color en el diseño gráfico RGB, CMYK y HSB. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=tvKq1zKc5oY',
    },
    {
      texto:
        'Catedra AROSA CORBELLE FADU – UBA. (2020).  Modelos de color. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=r_omt3DDwDU',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Guillermo González Tarazona',
        cargo: 'Experto temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica <br>Regional Distrito Capital',
      },
      {
        nombre: 'Juan Manuel Reyes Ramírez',
        cargo: 'Experto temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica <br>Regional Distrito Capital',
      },
      {
        nombre: 'Gloria Amparo López escudero',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial <br>Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor metodológico y pedagógico',
        centro: 'Centro de Diseño y Metrología <br>Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios <br>Regional Tolima',
      },
      {
        nombre: 'Juan Carlos Tapias Rueda',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Andrea Paola Botello De la Rosa',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Andres Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: ' ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
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
