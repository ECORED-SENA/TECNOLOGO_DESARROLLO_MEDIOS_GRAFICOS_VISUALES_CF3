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
    
    .row
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
                    p.mb-0 <b>12647-2</b> Offset plano y con horno
                  li.mb-0
                    i.fas.fa-chevron-right
                    p.mb-0 <b>12647-3</b> Coldset y periódicos
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

    p(data-aos="fade") Se han diseñado e implantado sistemas apoyados en visión artificial para la localización ágil y en línea de producción de los posibles defectos de una impresión. Dichos procesos de inspección permiten descubrir los defectos de calidad de impresión en un lapso real de tiempo, estos errores se exponen y se registran, permitiendo que un operador encuentre la ubicación exacta de la falla. Si se presenta un episodio crítico se podrá automatizar la impresión haciendo que el proceso se detenga en la línea. El sistema cuenta con una configuración con las siguientes características:

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
