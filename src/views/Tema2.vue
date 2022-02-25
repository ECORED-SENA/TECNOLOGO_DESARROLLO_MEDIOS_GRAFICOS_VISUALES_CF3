<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.bloque-fondo-intro

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Control de calidad de impresos 
    
    figure.mb-4
      img(src='@/assets/curso/tema2-banner.png', alt='Control de calidad de impresos ')
    
    .row.mb-5.mb-md-0
      .col-md-7.mb-4(data-aos="fade-right")
        p El control de calidad se puede definir como  
          span.etiqueta diseñar y desarrollar productos y servicios con la mejor calidad al menor costo que se pueda conseguir.
        p El control de calidad en la industria gráfica se encuentra enmarcado por la reglamentación y el uso de la norma ISO (12647), que encamina a la profesión por el mismo sendero, ya que hoy en día es muy común solicitar impresos a diferentes países que ofrecen menores costos, haciendo que los procesos sean estandarizados y por ende que cumplan con la misma calidad, lo cual asegura el éxito de los proyectos. La ISO (<em>International Organization for Standardization</em>) es una organización a nivel internacional, cuya actividad es la de normalizar técnicas utilizadas en diferentes campos a nivel internacional, especialmente en el suministro de bienes y servicios, para estandarizar diferentes tipos de actividades que permiten tener iguales parámetros y gestionar el intercambio y el uso de nuevas tecnologías necesarias para cada oficio. 
        p Con respecto al color de las tintas, en el mercado actual existe infinidad de suministros e insumos, que han popularizado el uso de tintas más baratas en el uso de equipos de impresión; sin embargo, muchas de estas tintas no cuentan con los estándares requeridos dentro de la norma, por lo cual la impresión no tiene el estándar de calidad requerido. 
      .col-md-5(data-aos="fade-left")
        img.mb-2(src='@/assets/curso/tema2-img.png', alt='Imagen decorativa')
        figcaption Nota. Tomado de https://www.elempaque.com/documenta/imagenes/5063756/Foto-1-Brian-Lord-operario-de-Star-Packaging-g1.jpg
   
    .row.justify-content-center.mb-4(data-aos="fade-down") 
      .col-md-10    
        .bloque-texto-a.color-primario.p-4
          .row.m-0.align-items-center.justify-content-between
            .col-lg-5.mb-4.mb-lg-0
              h5.mb-0 El control de calidad busca esencialmente eliminar el error humano, detectando errores que se ven a simple vista y otros que son casi imperceptibles para el ojo humano. Gracias a la evolución de la norma, existen distintas versiones de la norma dependiendo del proceso de impresión utilizado; a continuación, se indican estas normas: 
            .col-lg-7
              .bloque-texto-a__texto.p-4
                ul.lista-ul--color.mb-0
                  li.mb-0
                    i.fas.fa-chevron-right
                    p.mb-0 <b>12647-1</b> Parámetros y métodos de medición
                  li.mb-0
                    i.fas.fa-chevron-right
                    p.mb-0 <b>12647-2</b> <em>Offset</em> plano y con horno
                  li.mb-0
                    i.fas.fa-chevron-right
                    p.mb-0 <b>12647-3</b> <em>Coldset</em> y periódicos
                  li.mb-0
                    i.fas.fa-chevron-right
                    p.mb-0 <b>12647-4</b> Huecograbado
                  li.mb-0
                    i.fas.fa-chevron-right
                    p.mb-0 <b>12647-5</b> Serigrafía
                  li.mb-0
                    i.fas.fa-chevron-right
                    p.mb-0 <b>12647-6</b> Flebografía
                  li.mb-0
                    i.fas.fa-chevron-right
                    p.mb-0 <b>12647-7</b> Pruebas de color
                  li.mb-0
                    i.fas.fa-chevron-right
                    p.mb-0 <b>12647-8</b> Impresión digital             

    p.mb-4(data-aos="fade") Dentro de los errores comunes que se presentan a la hora de imprimir se encuentran: 
      strong texto mal impreso, falta de tinta o material, salpicaduras de tinta, manchas, rayas y variación de color o tonalidad, arrugas. 
      | Estos errores se pueden presentar en diversos materiales teniendo en cuenta el propósito del producto o el sector al que esté orientado el mercado, de acuerdo con el tipo de impresión y al material a trabajar existen dos formatos de técnicas de visión artificial.

    .row.justify-content-center
      .col-md-10
        .row.tarjeta--container.mb-4
          .col-md.tarjeta.color-secundario.text-center.p-5(data-aos="fade-right")
            .row.justify-content-center.mb-4
              .col-4
                figure
                  img(src='@/assets/curso/tema2-tarj1.svg', alt='Texto que describa la imagen')  
            h1 Modo <em>offline</em>
            p Para un control fuera de línea de mayor precisión utilizando un escáner de alta resolución.
          .col-md.tarjeta.color-primario.text-center.p-5(data-aos="fade-left")
            .row.justify-content-center.mb-4
              .col-4
                figure
                  img(src='@/assets/curso/tema2-tarj2.svg', alt='Texto que describa la imagen')  
            h1 Modo <em>online</em>
            p  Para un control de calidad en tiempo real a gran velocidad empleando cámaras lineales. 

    .row
      .col-md-7.mb-3(data-aos="fade-right")
        p(data-aos="fade") Se han diseñado e implantado sistemas apoyados en visión artificial para la localización ágil y en línea de producción de los posibles defectos de una impresión. Dichos procesos de inspección permiten descubrir los defectos de calidad de impresión en un lapso real de tiempo, estos errores se exponen y se registran, permitiendo que un operador encuentre la ubicación exacta de la falla. Si se presenta un episodio crítico se podrá automatizar la impresión haciendo que el proceso se detenga en la línea. El sistema cuenta con una configuración con las siguientes características:
      .col-md-5(data-aos="fade-left")
        .cajon.color-acento-botones.p-4.mb-4
          ul.lista-ul--color.mb-0
            li.mb-0
              i.fas.fa-chevron-right
              | Velocidad de impresión (150-300 m/min)
            li.mb-0
              i.fas.fa-chevron-right
              | Anchos de inspección (hasta 1500 mm)
            li.mb-0
              i.fas.fa-chevron-right
              | Niveles de calidad
            li.mb-0
              i.fas.fa-chevron-right
              | Control de alineamiento
            li.mb-0
              i.fas.fa-chevron-right
              | Tamaño y tipología de defecto
            li.mb-0
              i.fas.fa-chevron-right
              | Control de densidad
            li.mb-0
              i.fas.fa-chevron-right
              | Desviaciones de color/tono
            li.mb-0
              i.fas.fa-chevron-right
              | Control de posición              
        
    Separador


    // 2.1
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 2.1   Estandarización de color para impresos

    .row
      .col-md-5.mb-4(data-aos="fade-right")
        img.mb-2(src='@/assets/curso/tema2-1-img.png', alt='Imagen decorativa')
      .col-md-7.mb-4(data-aos="fade-left")
        p La estandarización del color pasa por la regularización y estandarización de elementos que ayudan al impresor y a todo el personal implicado en la cadena de producción; dicha estandarización se debe entender no solo como la uniformidad en todo sentido al momento de pensar en un impreso o una pieza gráfica.
        p Se deben tener en cuenta elementos y materiales, al igual que diferentes componentes como las máquinas, las tintas, los soportes y otros elementos implicados en conseguir el mismo color; además se deben considerar algunas especificaciones como la transferencia de valor tonal, las pruebas de producción al igual que las pruebas de material y de maquinaria. De igual manera se establecen especificaciones más técnicas que se deben seguir para la reproducción de materiales de impresión como lo son: Gracol o SWOP y otras específicas que tienen carácter internacional y que corresponden a las normas ISO y sus diferentes versiones enunciadas a continuación:

    .row.justify-content-center(data-aos="fade-down")
      .col-md-10
        LineaTiempoD.color-acento-botones
          .row(numero="1" titulo="SWOP")
            p 
              italic Specifications for Web Offset Publications, SWOP 
              | (Las Especificaciones para publicaciones en rotativas de litografía <em>offset</em>). Son normas establecidas en Estados Unidos para impresión en rotativas <em>offset</em> sobre papel estucado, se publicaron por primera vez en 1976 y han sido objeto de distintas modificaciones a lo largo del tiempo.
          .row(numero="2" titulo="SNAP")
            p 
              italic Specifications for Non-Heatset Advertising Printing 
              | (Especificaciones para la impresión litográfica en frío de publicidad) son especificaciones para la impresión litográfica <em>offset</em> en frío, en papel prensa. Se publicaron por primera vez en 1984 y han sido modificadas en varias ocasiones.
          .row(numero="3" titulo="GRACol")
            p 
              italic General Requirements for Applications in Commercial Offset Lithography
              |  (Requisitos generales para aplicaciones en litografía <em>offset</em> comercial) Son especificaciones para la impresión en <em>offset</em> publicadas desde 1996 por el comité de la Asociación de Comunicaciones Gráficas IDEAlliance, La Asociación Internacional de Preimpresión IPA y la Fundación Técnica de Artes Gráficas GATF.
          .row(numero="4" titulo="FOGRA")
            p 
              italic Forschungsgesellschaft Druck e. V., FOGRA 
              | (Asociación para la investigación en las artes gráficas alemana), entrega reportes de caracterización para la impresión de periódicos, litografía <em>offset</em> y serigrafía según los estándares ISO 12647. (1983).
          .row(numero="5" titulo="CGATS")
            p 
              italic The Association for Suppliers of Printing, Publishing and Converting Technologies, NPES
              | (Asociación de proveedores de tecnologías impresión, publicación y conversión) reúne a más de 400 marcas productoras y distribuidoras de productos para la industria gráfica. Dentro de la NPES, trabaja el Comité para estándares de tecnologías de las artes gráficas (
              italic Committee for Graphic Arts Technologies Standards, CGATS
              | ), que desarrolla las normas en nombre de la ANSI. (1988)       

    Separador


    // 2.2
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 2.2  Implementación de modelos y espacios de color

        
    .row.justify-content-center(data-aos="fade-down")
      .col-md-10.mb-4   
        .cajon3.color-acento-botones.personalizado.px-md-5.py-md-0.p-4
          .bloque-texto-b__texto
            h5.mb-0 Un espacio de color es una organización básica de colores. En combinación con los perfiles de dispositivos físicos, permite representaciones reproducibles de color, tanto en representaciones analógicas como digitales se encuentran diferentes tipos de modelos y espacios de color, los cuales ayudan a contemplar más cantidad de colores y a comprender los espacios y sus limitantes frente a otras referencias.

    p.mb-4(data-aos="fade") Entre algunos de los espacios de color que se pueden encontrar, están los que se basan en la mezcla de colores RGB, que incluyen los formatos 
      strong sRGB y Adobe RGB. 
      | (El espacio de color sRGB, o perfil de color, está basado en el modelo de color RGB, que se compone en tres colores: rojo, verde y azul. Cuando estos tres colores están combinados, se crean nuevos colores. El espacio de color sRGB se compone de una cantidad específica de información de color; estos datos se usan para optimizar colores entre diferentes dispositivos y plataformas técnicas como monitores, impresoras y navegadores).

    .row.justify-content-center(data-aos="fade-down")
      .col-md-10.mb-4 
        .cajon.color-primario.p-4
          p.mb-0 Un modelo de color sin función de mapeo asociada a un espacio de color absoluto es un sistema de color más o menos arbitrario sin conexión con ningún sistema de interpretación de color entendido globalmente. Agregar una función de mapeo específica entre un modelo de color y un espacio de color de referencia, establece dentro del espacio de color de referencia una “huella” definida, conocida como una gama, y para un modelo de color dado, esto se refiere un espacio de color.    
    
    p(data-aos="fade") Los modelos de color son de gran utilidad, ya que definen el color de acuerdo con cada dispositivo de salida, especialmente si son medios impresos o digitales; son una lista de colores estandarizados y codificados según sus características, lo que permite que las fotografías e impresos no pierdan calidad, ni cambien el color. 

    p.mb-4(data-aos="fade") La conversión del espacio de color es la traducción de la representación de un color de una base a otra. Esto ocurre típicamente en el contexto de la conversión de una imagen que se representa en un espacio de color a otro espacio de color, con el objetivo de hacer que la imagen traducida se vea lo más similar posible al original.

    .row.mb-4
      h2.text-center Diferentes espacios de color
      .col-md-4.mb-4
        .tarjeta.bg-suave.p-4
          img.mb-4(src='@/assets/curso/tema2-2-A.jpg', alt='sRGB')
          h3.text-center sRGB
      .col-md-4.mb-4
        .tarjeta.bg-suave.p-4
          img.mb-4(src='@/assets/curso/tema2-2-B.jpg', alt='Adobe RGB')
          h3.text-center Adobe RGB 
      .col-md-4.mb-4
        .tarjeta.bg-suave.p-4
          img.mb-4(src='@/assets/curso/tema2-2-C.jpg', alt='CMYK')
          h3.text-center CMYK 

    
    .titulo-tercero.titulo-tercero__2.mb-4(data-aos="fade-right")
      h3.mb-0 Espacio de color absoluto
      img(src='@/assets/curso/titulo-tercero.svg', alt='Imagen decorativa')

    p.mb-5(data-aos="fade") Es una interpretación de color en un espacio que está definido colorimétricamente sin referencias a factores externos; es decir, un color es absoluto, cuando se define su relación exacta con 
      strong colores rojo, verde y azul (RGB), 
      | las cuales son las iniciales en inglés de 
      italic-strong Red, Green y Blue. 
      | Lo anterior significa que los espacios absolutos se miden exactamente con otras propiedades y valores RGB, que puedan considerarse absolutos como tal, donde se pueden encontrar espacios de color absolutos, pero deben ser referenciados y especificar puntos blancos para serlo. Para poder transformar un espacio de color RGB en un color absoluto, se define un perfil ICC (
      italic Internacional Color Consortium
      | ), representado por los perfiles ICC.


    .titulo-tercero.titulo-tercero__3.mb-4(data-aos="fade-right")
      h3.mb-0 Espacio de color del monitor RGB
      img(src='@/assets/curso/titulo-tercero.svg', alt='Imagen decorativa')

    p.mb-4(data-aos="fade") Los modelos de color basados en RGB se efectúan dependiendo el sistema utilizado; la implementación de 24 bits, limita a un rango de 256 x 256 x 256 x 16,7 millones de colores, lo que genera trabajar con espacios de color de alta gama, estos espacios se aplican a cualquier espacio de color basado en este modelo, pero se implementa en diferentes profundidades de bits. Algunos espacios de color basados en 
      strong RGB 
      | son el 
      strong sRGB, Adobe RGB 
      | y 
      strong ProPhoto RGB, 
      | los cuales podrá ver de una manera más detallada a continuación:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-suave")
      .row.justify-content-center(titulo="Espacio sRGB o estándar RGB")
        .col-md-7.mb-4.mb-md-0
          p Es el más común en pantallas y el que se encuentra en la gran mayoría de los monitores y dispositivos electrónicos, es el usado al momento de trabajar con elementos online, enviarlas por correo, editarlas, etc., todo lo contrario al momento de imprimirlas; especialmente creadas para su uso por internet y su compatibilidad. Es un espacio que ofrece una mayor saturación y mayor contraste que otros espacios, además su gama de color es un poco limitada frente a otras opciones, lo que hará que sea difícil ajustar tonalidades exactas. Dada su gran aceptación y su compatibilidad con la mayoría de los programas, es la más usada por los monitores de computadores, por su parte los monitores con gamas más altas deberán migrar a espacios más amplios como el 
            italic-strong Adobe RGB.
        .col-md-4
          figure
            img(src='@/assets/curso/tema2-2-acord1.jpg', alt='Espacio sRGB o estándar RGB')
      .row.justify-content-center(titulo="Espacio Adobe RGB")
        .col-md-7.mb-4.mb-md-0
          p Uno de los más habituales actualmente, ya que a diferencia del anterior permite trabajar de una manera más profesional dada su alta gama; pensado principalmente para la edición de fotografías de forma profesional, por eso su nombre 
            italic-strong AdobeRGB, 
            | ya que fueron ellos los desarrolladores. Es un espacio que consigue reproducir prácticamente todos los colores CMYK que se puedan imprimir, consiguiendo de esa forma una reproducción más fiel a los colores.
        .col-md-4
          figure
            img(src='@/assets/curso/tema2-2-acord2.jpg', alt='Espacio Adobe RGB')
      .row.justify-content-center(titulo="Espacio ProPhoto")
        .col-md-7.mb-4.mb-md-0
          p Es el espacio más fiel a los colores reconocibles por el ojo humano y están compuestos en el 
            italic gamut (Pointer gamut)
            | , compatibles con las gamas más altas, pensado a nivel profesional perfeccionista, el gran inconveniente es que no existe una gama en ningún dispositivo electrónico que alcance esta gama por lo que no será posible distinguir estos colores, por su parte, existen impresoras que si pueden conseguir representaciones más fieles de esas gamas. Desarrollado por una de las casas más icónicas de fotografía como 
            italic-strong Kodak, 
            | abarca el 100 % de los colores reales perceptibles en el mundo y es el único capaz de representar estos colores como los reconoce el ojo humano. 
        .col-md-4
          figure
            img(src='@/assets/curso/tema2-2-acord3.jpg', alt='Espacio ProPhoto')      


    
    .titulo-tercero.titulo-tercero__3.mb-4(data-aos="fade-right")
      h3.mb-0 Espacio de color de dispositivos CMYK
      img(src='@/assets/curso/titulo-tercero.svg', alt='Imagen decorativa')

    p.mb-4(data-aos="fade") Se conocen como los colores secundarios, se denominan sustractivos, ya que sustraen colores de la luz blanca más no se combinan como en los RGB; solo los dispositivos como impresoras y fotocopiadoras utilizan una entrada CMY y convierten la información de RGB a CMY, transformando principalmente el blanco en negro y viceversa.

    .row.justify-content-around
      h2.mb-4.text-center Colores CMYK
      .col-md-4
        h3.mb-4.text-center Color aditivo
        figure.mb-4
          img(src='@/assets/curso/tema2-2-tarj1.png', alt='color aditivo')
      .col-md-4
        h3.mb-4.text-center Color sustractivo
        figure.mb-4 
          img(src='@/assets/curso/tema2-2-tarj2.png', alt='color sustractivo')

    p.mb-4(data-aos="fade") El perfil de color 
      span.etiqueta CMYK, está fundamentado en la sustracción del blanco, implementando para esto la mezcla de pigmentos, se denomina síntesis sustractiva.
      |  Es importante entender que este modo de color se implementa para elementos gráficos que van a ser impresos sobre un sustrato. Las imágenes en CMYK poseen 32 
      italic bits 
      | por cada 
      italic píxel, 
      | utilizando cuatro canales de información, uno correspondiente a cada color. Relacionando el color RGB Y CMYK, en la práctica, cuando se necesita presentar un elemento grafico como por ejemplo una fotografía en un espacio de luz como un monitor, un teléfono inteligente, una 
      italic tablet, 
      | en la web o en un televisor se debe utilizar el modo de color RGB. Por otra parte, cuando se vaya a implementar cualquier formato de impresión, como una revista, un catálogo, un poster o un folleto, se deben utilizar el modelo CMYK, esto a razón que todas las máquinas de impresión están basadas en modos de color CMYK, ya sea impresión digital o impresión 
      italic offset. 
      | Enviar un archivo a impresión en el modo RGB ocasionará cambios en los colores finales.

    .row.justify-content-around.mb-4
      .col-md-4
        h3.mb-4.text-center CMYK
        figure.mb-4
          img(src='@/assets/curso/tema2-2-tarj3.png', alt='CMYK')
      .col-md-4.mb-4
        h3.mb-4.text-center Colores primarios
        figure.mb-5
          img(src='@/assets/curso/tema2-2-tarj4.png', alt='Colores primarios')
        h3.mb-4.text-center Colores secundarios
        figure.mb-4 
          img(src='@/assets/curso/tema2-2-tarj5.png', alt='Colores secundarios')



    .titulo-tercero.titulo-tercero__3.mb-4(data-aos="fade-right")
      h3.mb-0 Comparación entre espacios de color
      img(src='@/assets/curso/titulo-tercero.svg', alt='Imagen decorativa')

    p.mb-4(data-aos="fade") Existen diferentes espacios de color que representan las gamas que pueden llegar a representar los colores, por eso a continuación observará una comparación de cada uno donde podrá distinguir hasta donde alcanza el espacio tonal de cada espacio de color. Se hará una primera referencia al 
      italic.etiqueta Pointer gamut
      |  que es la escala que representa el 100 % de los colores que se pueden percibir:

    .row.justify-content-center.mb-4
      .col-md-8
        SlyderF(columnas="col-12")
          .row.p-4
            .bg-suave2.mb-2.py-4
              h2.text-center Pointer gamut
              .row.justify-content-center
                .col-8
                  img(src='@/assets/curso/tema2-2-D.png' alt='Pointer gamut')
            figcaption Nota. Tomado de upload.wikimedia.org/wikipedia/commons/b/b0/CIExy1931.png
          .row.p-4
            .bg-suave2.mb-2.py-4
              h2.text-center Comparación de espacios de color
              .row.justify-content-center
                .col-8
                  img(src='@/assets/curso/tema2-2-A.png' alt='Comparación de espacios de color')
            figcaption Nota. Tomado de www.dzoom.org.es/wp-content/uploads/2021/03/espacios-de-color-espectro-visible-734x489.jpg  

    p(data-aos="fade") En la segunda imagen, puede comparar los espacios de color, en ellos se contemplan las distancias de las gamas de color de cada uno de los espacios, cada uno con capacidades y limitaciones de color diferentes entre sí.

    Separador


    // 2.3
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 2.3   Perfiles de entrada

    p.mb-4(data-aos="fade") Un sistema de gestión de color emplea diferentes perfiles, lo que hará que los colores sean precisos al momento de pasar de un dispositivo o elemento a otro; estos perfiles ayudarán de forma correcta a que los dispositivos puedan realizar correcciones y no caer en fallos.

    .row.justify-content-center(data-aos="fade-down")
      .col-md-10.mb-4 
        .cajon.color-primario.p-4
          p.mb-0 Los perfiles de entrada son los perfiles de los distintos elementos que capturan o escanean un elemento, estos en su mayoría vienen en formatos <b>RGB</b> y <b>sRGB</b>, ya que vienen de fuentes de luz diferentes, entre estos podemos encontrar las cámaras digitales, escáneres, cámaras de teléfonos inteligentes, entre otros; estos perfiles son perfiles unidireccionales, puesto que no serán nunca un perfil o dispositivo de destino. Un perfil de entrada es siempre un perfil de origen por lo que solo existe una conversión.

    p.mb-4(data-aos="fade") Hoy en día muchas cámaras permiten seleccionar el modo de color de entrada para la captura de imágenes como lo muestra la siguiente imagen, pero la mejor opción es RGB, ya que se consigue mayor gama cromática:

    .row.justify-content-center
      .col-md-7.bg-suave.p-md-4.p-3.mb-2
        h2.text-center Modo de color cámara fotográfica
        figure
          img.px-md-5(src='@/assets/curso/tema2-3-img.png', alt='Modo de color cámara fotográfica')
      .col-md-7.bg-color-primario2
        figcaption Nota. Tomado de/www.dzoom.org.es/wp-content/uploads/2016/02/perfil-color_configuracion-camara-300x213.jpg
   
    Separador


    // 2.4
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 2.4   Perfiles de salida

    p.mb-4(data-aos="fade") Son la clase de perfiles que describe aparatos de reproducción impresa de imágenes como impresoras, prensas, rotativas y similares; es decir, los elementos de salida, a diferencia de los perfiles de origen, tienen la capacidad de ser tanto de origen, como de destino, dando la posibilidad de ser elementos que pueden ser 
      strong.etiqueta RGB o CMYK,
      |  donde se asignará al documento con condiciones de impresión determinadas para cada perfil. 

    .row.tarjetas2-4.mb-4
      .col-md-4.mb-md-2.mb-4
        .tarjeta.bg-acento-botones.p-4
          img.px-md-5.mb-4(src='@/assets/curso/tema2-4-tarj1.png', alt='CMYK')
          h3.text-center CMYK
      .col-md-4.mb-md-2.mb-4
        .tarjeta.bg-acento-botones.p-4
          img.px-md-5.mb-4(src='@/assets/curso/tema2-4-tarj2.png', alt='RGB')
          h3.text-center RGB 
      .col-md-4.mb-md-2.mb-4.img-3
        .tarjeta.bg-acento-botones.p-4
          img.px-md-5.mb-4(src='@/assets/curso/tema2-4-tarj3.png', alt='Pantone')
          h3.text-center Pantone 
      .col-md-12
        figcaption Fuente: https://www.dikaestudio.com/wp-content/uploads/2018/01/Imagen-03.jpg 


    p(data-aos="fade") Estos perfiles deberán tener condiciones como el tipo de papel o tipo de tinta, dado que la calidad de gamas de color o saturación no se contemplará igual en un papel mate. La mayoría de los controladores de impresión llevan diferentes perfiles de color incorporados, lo que dará posibilidad de pruebas, al momento de seleccionar el perfil apropiado. Los documentos sin perfiles asignados se denominan sin etiqueta y solo contienen los valores de color en bruto. Al trabajar con documentos sin etiqueta, las aplicaciones utilizan el perfil del espacio de trabajo activo para mostrar y modificar los colores.

    p(data-aos="fade") De otra parte, está el 
      span.etiqueta Pantone
      |  que es un sistema de identificación y comparación del color, comercialmente se conocen como colores sólidos o tintas planas, es una creación en tinta y se identifican con una referencia numérica propia a nivel mundial para que en cualquier imprenta puedan ser identificados. Este perfil de salida es especial para la producción gráfica e ideal para impresiones como logotipos, empaques y envases.

    Separador


    // 2.5
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 2.5   Perfiles de visualización

    .row
      .col-md-5.mb-4(data-aos="fade-right")
        img.mb-2(src='@/assets/curso/tema2-5-img.png', alt='Imagen decorativa')
      .col-md-7.mb-4(data-aos="fade-left")
        p Los perfiles de visualización se establecen para la correcta visualización en los dispositivos donde se establezcan las características de gestión de color y se hagan las conversiones posibles, para que tanto los dispositivos de entrada como de salida, puedan mantener un mismo lenguaje. 
        p La gestión de color para la visualización en pantallas es diferente a la gestión de medios impresos, usualmente en los programas de diseño como adobe Photoshop, al momento de importar una imagen al programa, se abre una ventana con la información de la imagen que se va a visualizar. En el siguiente ejemplo se observa como Photoshop está informando que el documento no tiene ningún perfil RGB incrustado; y a su vez informa que se desea hacer como lo muestra la imagen. En este caso se puede asignar el perfil que se desee a criterio según el producto a realizar.

    p.mb-4(data-aos="fade") A continuación, se describen algunas de las visualizaciones con dicho ejemplo:     

    .tarjeta.bg-acento-botones.p-4
      LineaTiempoC.color-acento-contenido(text-small)
        .row.justify-content-center(titulo="A")
          .col-md-5.mb-4.mb-md-0
            p El perfil de entrada describe los espacios de color del dispositivo de entrada y del documento, desde una composición de colores RGB.
          .col-md-5
            figure
              img(src='@/assets/curso/tema2-5-slide1.png', alt='Texto que describa la imagen')
        .row.justify-content-center(titulo="B")
          .col-md-5.mb-4.mb-md-0
            p Mediante las descripciones de los perfiles, el sistema de gestión de color identifica los colores reales del documento.
          .col-md-5
            figure
              img(src='@/assets/curso/tema2-5-slide2.png', alt='Texto que describa la imagen')  
        .row.justify-content-center(titulo="C")
          .col-md-5.mb-4.mb-md-0
            p El perfil de visualización indica al sistema de gestión de color cómo convertir los valores numéricos del documento en el espacio de color del monitor.
          .col-md-5
            figure
              img(src='@/assets/curso/tema2-5-slide3.png', alt='Texto que describa la imagen')  
        .row.justify-content-center(titulo="D")
          .col-md-5.mb-4.mb-md-0
            p Mediante el perfil de salida, el sistema de gestión de color convierte los valores numéricos del documento en los valores de color del dispositivo de salida para que se imprima el aspecto correcto. 
          .col-md-5
            figure
              img(src='@/assets/curso/tema2-5-slide4.png', alt='Texto que describa la imagen')                  

    Separador


    // 2.6
    #t_2_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 2.6   Perfiles de color <em>gamut</em> 

    p.mb-4(data-aos="fade") 
      span.etiqueta <em>Gamut</em> significa gama de colores y lo entendemos como el conjunto de colores que pueden ser representados por un dispositivo determinado.
      |  Si se piensa, con fines didácticos, que el ojo humano es un dispositivo, su <em>gamut</em> sería la referencia universal o el espacio de color absoluto, o el <em>gamut</em> universal absoluto. Pero los dispositivos como las pantallas, escáner, impresoras, máquinas fotográficas, etc., no son capaces de representar el espacio de color absoluto, así que tiene sus propios <em>gamut</em> definidos dentro del espacio universal. Incluso dos dispositivos iguales, como por ejemplo dos pantallas del mismo modelo, pueden tener <em>gamut</em> distintos.
      
    .row
      .col-md-7.mb-4(data-aos="fade-right")
        .cajon.color-primario.p-4.mb-4 
          p.mb-0 Por ejemplo, los perfiles de color gamut hacen entender por qué en ciertas ocasiones se tiene una imagen en el monitor del computador la cual luce muy bien; sin embargo, al hacer la impresión de esta, los colores suelen distorsionarse, se generan mayores luces o sombras en partes que se veían muy bien en la imagen, no hay correlación entre lo que se ve y lo que se imprime.
        p Para entender un poco más este concepto es necesario profundizar en 
          strong la colorimetría, la cual es una ciencia que trata de medir y cuantificar los colores mediante números para operar con ellos y deducir características de los colores obtenidos mediante mezclas a partir de tres colores considerados como primarios. 
          | Permite saber la cantidad de color primario que hay que mezclar para obtener otros. La colorimetría estudia aspectos físicos del color como la longitud de onda dominante (tono), pureza de la excitación (saturación) y luminancia (brillo de los cuerpos que emiten luz y claridad de los cuerpos que reflejan la luz) y las transforma en coordenadas que representan en el diagrama cualquier color visible.
      .col-md-5.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema2-6-img.png', alt='Imagen decorativa')

    p.mb-4(data-aos="fade") La importancia del diagrama es que representa todos los colores que se pueden ver, así que cualquier color generado por los diversos aparatos (pantallas, escáner, impresoras, máquinas fotográficas, celulares, etc.) se pueden calcular en este.

    .row.justify-content-center
      .col-md-7.bg-suave.p-md-4.p-3.mb-2
        h2.text-center Diagrama
        figure
          img.px-md-5(src='@/assets/curso/tema2-6-infog.png', alt='Diagrama')
      .col-md-7.bg-color-primario2
        figcaption Nota. Tomado de www.aulapc.es/dibujo_imagen_gamut.html 

    Separador


    // 2.7
    #t_2_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 2.7   Muestras Pantone y aplicación 

    .row
      .col-md-7.mb-4(data-aos="fade-right")
        p Los colores Pantone a diferencia del modelo de color CMYK, se aplican de manera directa, mientras en CMKY, se tienen que realizar mezclas de color para generar diversos tonos. Pantone tiene en su catálogo <b>1114 colores</b> realizados mezclando 13 pigmentos diferentes (más el negro).
        p Las tiras de color o muestrarios con los que cuentan las cartas de color Pantone (pantoneras), se asemejan a las cartas que encontramos en los almacenes de pintura, estos permiten al diseñador tener colores exactos o colores que se ajustan a cierto tipo de diseño o producto, que no se encuentran dentro del modelo CMYK, por lo cual, a la hora de imprimir este tipo de tintas, presentan muchas ventajas.
        p Los códigos con los que se designa cada color permiten una estandarización universal; por ejemplo, el color 
          strong <em>Blueberry</em> Pantone P102-16 C, 
          | es el mismo aquí o en la China, lo cual permite que se pueda imprimir la misma pieza, color y calidad en cualquier parte del mundo, lo cual no necesariamente sucede con CMYK, ya que depende de muchos factores externos. Anualmente Pantone da a conocer uno o varios colores que van a ser tendencia durante este periodo de tiempo, los cuales son utilizados en diversos campos del diseño, la moda y la industria de alimentos especialmente.   
      .col-md-5.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema2-7-img.png', alt='Imagen decorativa')


    .titulo-tercero.titulo-tercero__5.mb-4(data-aos="fade-right")
      h3.mb-0 Aplicación 
      img(src='@/assets/curso/titulo-tercero.svg', alt='Imagen decorativa')

    .row.justify-content-center(data-aos="fade-down")
      .col-md-10.mb-4 
        .cajon.color-primario.p-4
          p.mb-0 La aplicación de los colores <b>Pantone</b> puede ser un verdadero problema para pequeños impresores, ya que sus tintas se basan en combinaciones exactas de diferentes pigmentos y adquirirlas puede sobrepasar los costos permitidos, incluso muchas industrias grandes preparan sus propios colores, utilizando las fórmulas de Pantone, con base en el modo de tintas CMYK. El tema principal con Pantone es que su base no está creada a partir de CMYK, lo cual hace que se tengan muchas más muestras de color y algunos colores que por sus características no pueden ser preparados con base en mezclas en CMYK. 

    .row
      .col-md-7.mb-4(data-aos="fade-right")
        p Uno de los principales problemas por parte de impresores y diseñadores es escoger tintas Pantone en la pantonera, (se conoce como pantonera a la muestra física que tiene cada tirilla con su color y referencia) sin antes revisar si se pueden representar en CMYK, ya que su costo puede incrementar el presupuesto de impresión. 
        p La aplicación de los colores Pantone puede ser un verdadero problema para pequeños impresores, ya que sus tintas se basan en combinaciones exactas de diferentes pigmentos y adquirirlas puede sobrepasar los costos permitidos, incluso muchas industrias grandes preparan sus propios colores, utilizando las fórmulas de Pantone, con base en el modo de tintas CMYK. 
          strong El tema principal con Pantone es que su base no está creada a partir de CMYK, lo cual hace que se tengan muchas más muestras de color y algunos colores que por sus características no pueden ser preparados con base en mezclas en CMYK. 
      .col-md-5.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema2-7-img2.svg', alt='Imagen decorativa')
    
    Separador


    // 2.8
    #t_2_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 2.8   Valor tonal, equilibrio, grises y densidad

    p.mb-4(data-aos="fade") El valor tonal es la cantidad de luz y sombra que puede reflejar una superficie, estas producen las luces y sombras de la escala de grises que van de mezclas básicas entre el blanco y el negro, teniendo entre 10, 20 o más valores tonales entre ambos colores. Veamos con mayor profundidad este tema:

    ImagenInfograficaB.color-primario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema2-8-infografia.svg', alt='Texto que describa la imagen')

      .row.bg-suave.justify-content-center.p-4(x="29%" y="27%" tooltip="Clic para ver más" numero="1")
        .col-md-7
          h4 Valor tonal
          p La escala de valor tonal tiene en un extremo el blanco y en el otro se encuentra el negro, mezclando los dos, se obtiene una variada escala de grises, tonos acromáticos. Aquí, se tiene cuatro posibilidades de mezclar pigmentos para controlar el valor de los tonos, esto es: 
          ul.lista-ul--color.mb-3
            li.mb-0
              i.fas.fa-chevron-right
              p.mb-0 Agregando blanco, se aumenta el valor.
            li.mb-0
              i.fas.fa-chevron-right
              p.mb-0 Agregando negro se disminuye el valor.
            li.mb-0
              i.fas.fa-chevron-right
              p.mb-0 Agregando un gris contrastante, aumenta o disminuye el valor.
            li.mb-0
              i.fas.fa-chevron-right
              p.mb-0 Agregando un pigmento de valor distinto, se aumenta o disminuye el valor.   
          p No se puede cambiar el valor de un pigmento cromático sin modificar al mismo tiempo otras dimensiones tonales. Agregando negro, blanco o gris, se introduce un componente acromático.
          p Los valores tonales construyen principalmente el contraste, los volúmenes de las formas y figuras, se construyen más a partir del valor tonal que de cualquier uso del color o la forma misma, recrean los objetos y permite diferenciar una circunferencia de un cubo, por ejemplo, a simple vista sin tocar la forma misma, su expresión pura es utilizada también en la pintura y el arte como herramienta principal para denotar infinitas situaciones. 
        .col-md-5
          img(src='@/assets/curso/tema2-8-modal1.svg', alt='Imagen decorativa')
      .row.bg-suave.justify-content-center.p-4(x="39%" y="86%" tooltip="Clic para ver más" numero="2")
        .col-md-6
          h4 Balance de grises
          p El ojo humano es capaz de producir por lo menos 16 millones de tonos; sin embargo, en los procesos de impresión solo se alcanzan a reproducir unos cuantos de miles. 
          p El balance o equilibrio de grises es el primer paso para un control del color. El equilibrio de grises puede definirse como el método técnico para determinar que ningún componente cromático tiene predominancia sobre otros en el funcionamiento general de una síntesis o producción de color. 
          p Este valor puede ser calibrado en la post impresión, pero también se puede denotar desde la calibración misma del monitor que utilizamos.
        .col-md-6
          img(src='@/assets/curso/tema2-8-modal2.svg', alt='Imagen decorativa')  
        p Desde el punto de vista de la teoría, un perfecto equilibrio de grises se hallará cuando la suma de iguales partes de una tríada cromática genere un color acromático perfecto o sin desviaciones de matiz. Es decir, cuando sumando partes iguales de cian, magenta y amarillo, por ejemplo, dé un gris neutro. Este proceso se puede medir desde la parte inicial con la calibración del monitor, hasta el proceso final de la post impresión. Sin embargo, en imprenta es un proceso muy complejo por las transparencias generadas y la calidad de las tintas que no permiten un equilibrio en partes iguales. 
      .row.bg-suave.justify-content-center.p-4(x="53%" y="53%" tooltip="Clic para ver más" numero="3")
        .col-md-12
          h4 ¿Cómo se mide el balance de grises?
          p Es necesario tener un entorno cromático neutro, que cuente con una iluminación estándar con luz día para poder medir el balance de grises. Si no se cuenta con estos elementos, se producen efectos de metamerismo, que consiste en la percepción de las variaciones del color por parte del observador, según el color que rodee la muestra que se visualiza, o según el iluminante usado o los contrastes utilizados.
          p Comparando el gris que se forma por la mezcla de tríadas acromáticas se llama gris cromático, con el gris que se forma al mezclar blanco y negro puros o gris acromático, se puede determinar y apreciar el balance equilibrado de grises. Si no se percibe así, debe bajarse la intensidad de los colores dominantes o subir la intensidad de los otros, por cuanto se pueden presentar ambos fenómenos.
        .col-md-5
          img(src='@/assets/curso/tema2-8-modal3.svg', alt='Imagen decorativa') 
      .row.bg-suave.justify-content-center.p-4(x="83%" y="50%" tooltip="Clic para ver más" numero="4")
        .col-md-12
          h4 Tramado de imágenes
        .col-md-6
          p Existen aspectos importantes que utilizan las tecnologías actuales que reproducen la fotografía en soportes impresos.
          p Si observa una fotografía hecha en material fotográfico tradicional, podrá ver una imagen uniforme a pesar de que se examine detalladamente, pero si necesita reproducirla en un impreso, es imprescindible convertirla en un entramado de puntos diminutos, que no pueden verse a cierta distancia, pero generan en quien la observa una sensación de matices respecto al original. Al observar detenidamente los puntos del entramado diminuto, se puede inferir que en la mayor parte hay cuatro colores determinados, como son el amarillo, el negro, el magenta y el cian. Este proceso que va de la imagen fotográfica a la imagen impresa requiere dos procesos técnicos definidos que son:
        .col-md-6
          img(src='@/assets/curso/tema2-8-modal4.svg', alt='Imagen decorativa')  
        .col-md-12  
          ul.lista-ul--color.mb-3
            li.mb-0
              i.fas.fa-chevron-right
              p.mb-0 Tramado de la imagen, que consiste en convertirla en un conjunto de puntos.
            li.mb-0
              i.fas.fa-chevron-right
              p.mb-0 Separación de colores, que convierte cualquier matiz de la imagen en los componentes básicos de los colores que se utilizan en imprenta, negro, amarillo, cian y magenta.   

    p.mb-4(data-aos="fade") A continuación se identifican los distintos tipos de tramados que existen para la impresión, esto es:

    h2.text-center.text-white.bg-acento-contenido.py-2 Tramado de la impresión

    TabsC.color-acento-botones
      .py-3.py-md-4(titulo="Monocromático")
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema2-8-pest2.png', alt='Monocromático')
          .col-md-5
            h4 El tramado monocromático tradicional
            p Hace énfasis en un tramado usual, los puntos se ubican siempre a la misma distancia los unos de los otros, lo que se modifica es la amplitud del punto, es decir, su tamaño.
            p Cuando el punto sea más amplio, se marcará con más fuerza el color, cuando el punto disminuye el color se observará bastante degradado; es importante mencionar que el tamaño de los puntos se da en micrones, es decir solo se verá una variación del degrado.
      .py-3.py-md-4(titulo="Estocástico")
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema2-8-pest1.png', alt='Estocástico')
          .col-md-5
            h4 El tramado estocástico
            p Significa (aleatorio), los puntos están situados con mayor periodicidad sin seguir un esquema preestablecido. De tal manera que el degradado es mucho más natural y de mejor calidad. No varía el volumen de los puntos, pero si la frecuencia en el espacio ya que los puntos son más habituales, permite tener un color mucho más marcado, y donde los puntos se vean escasos terminan degradándose hasta el color blanco.  
      .py-3.py-md-4(titulo="Efecto muaré")
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema2-8-pest3.png', alt='Efecto muaré')
          .col-md-5
            h4 El color y el efecto muaré
            p La impresión por lo general se da en cuatro colores (amarillo, cian, magenta y negro) permitiendo crear el color deseado, se debe tener en cuenta que los colores no se combinan entre sí, por el contrario, se imprimen puntos, unos junto a otros, en los cuatro colores principales, las tramas ajustan el tamaño y la densidad de los puntos incorporando los cuatro colores.      

    Separador


    // 2.9
    #t_2_9.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 2.9   Incremento de valor tonal

    p.mb-4(data-aos="fade") Se denomina como 
      span.etiqueta el incremento o aumento de la cantidad de punto de trama debido a la impresión,
      |  por esta razón cualquier tipo de imagen puede aparecer con el color más oscuro y se puede producir un desplazamiento de color. En artes gráficas se puede medir las curvas de valor tonal en diferentes tipos de color como los primarios, especiales o mixtos. Este valor tonal se calcula aproximadamente en un rango de medios tonos del 40 % y un rango de sombras estimado en el 80 %. 

    .row.justify-content-center(data-aos="fade-down")
      .col-md-8.mb-4   
        .cajon3.color-acento-botones.personalizado.px-md-5.py-md-0.p-4
          .bloque-texto-b__texto
            h4.mb-0 Un ejemplo puede ser: si se mide una impresión con un densímetro en el 80 % de trama y se obtiene el valor de 90 %, la ganancia de punto es 10 %. No quiere decir que el punto en el 80 % aumentó un 10 %, siendo así se obtendría el 88 % puesto que el 10 % de 80 es 8.

    p.mb-4(data-aos="fade") Lo que se explica en el ejemplo es la medición de ganancia de punto, donde el valor en plancha que era 80 % de trama, en el impreso es de 90 % de trama; dicho de otra forma, incrementó el valor tonal de 80 % a un 90 %, indicando que incrementó en diez 10 el valor tonal. En resumen, se puede decir que el valor porcentual de la ganancia de punto hace referencia a cuántos pasos tonales aumenta el punto. Es importante que las impresoras de plancha se encuentren óptimas en su calibración, así el valor del punto sea el que verdaderamente corresponda. Veamos:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-6
        SlyderF(columnas="col-12")
          .tarjeta.color-secundario.p-4
            img.mb-5(src='@/assets/curso/tema2-9-tarj1.jpg' alt='Línea característica de impresión')
            h2.mb-5.text-center Línea característica de impresión
            p.text-center Esta línea es una representación gráfica, entre los cubrimientos superficiales en porcentaje de trama en la impresión y en la película o en el bloque de datos. La línea ideal forma un ángulo de 45°, sin embargo, depende de factores como la calidad del papel, el color de la impresión a realizar y la maquina en la cual se va a realizar dicha impresión.
          .tarjeta.color-acento-botones.p-4
            img.mb-5(src='@/assets/curso/tema2-9-tarj2.png' alt='Tabla de valores')
            h2.mb-5.text-center Tabla de valores
            p.text-center La tabla de valores se puede mostrar si arrastra hacia arriba la barra horizontal que se encuentra debajo de la representación de las curvas. Al hacer esto se reduce la representación de las curvas. En la tabla de colores siempre se muestran todos los colores, independientemente de la selección de curvas en la lista “Representación”. El área visible se puede desplazar con las barras de desplaza­miento.

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
