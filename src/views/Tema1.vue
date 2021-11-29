<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.bloque-fondo-intro

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Gestión de color
    
    figure.mb-4
      img(src='@/assets/curso/tema1-banner.png', alt='Brief')

    p.mb-4(data-aos="fade") La gestión de color hace referencia a 
      span.etiqueta los procesos de definición de las características de color para cada medio digital y para procesos de impresión;
      |  gestionar este proceso garantiza la exactitud de reproducción en los dispositivos, como por ejemplo una pantalla (pc), impresoras, técnica de impresión offset, entre otros. La gestión de color es un desafío en las artes gráficas y en el diseño digital, uno de los problemas más comunes que se presenta en los procesos de producción gráfica es no realizar el proceso de gestión de color adecuado y por consiguiente los resultados finales son negativos. Lo invitamos a conocer más acerca del maravilloso mundo de la gestión del color.

    .row.bg-elemento.justify-content-center.py-3.align-items-end(data-aos="fade-down") 
      .col-md-2.col-5.mb-4.mb-md-0
        img.px-md-4(src='@/assets/curso/tema1-ico.svg', alt='Icono decorativo')
      .col-md-8
        .row.align-items-center
          .col-md-9.mb-3.mb-md-0
            h4.mb-md-1 Gestión de color
            p.mb-0 A continuación, observe el video <b>Gestión de color</b>, para tener una mayor contextualización de este tema, sus elementos, características, modelos, entre otros.
          .col-md-1
            a.boton.color-acento-botones.me-3(:href="obtenerLink('/downloads/Orden_de_produccion.jpg')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download

    Separador


    // 1.1
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 1.1  Definición y características

    .row
      .col-md-7.mb-4(data-aos="fade-right")
        p La gestión de color 
          span.etiqueta es el proceso mediante el cual se realizan los ajustes necesarios en un dispositivo (escáner, impresora, computador, cámara fotográfica), con el fin de hacer que los colores coincidan, desde la captura digital hasta la salida final.
          |  La visualización del color en los programas de diseño actuales permite interpretar el perfil inicial de la imagen y realizar los cambios a criterio propio dependiendo del proyecto que se tenga en mente hacer; de esta manera, se podrá aplicar con seguridad la gestión de color final. Es importante mencionar que la gestión de color también permite realizar elementos basados en los estándares de producción gráfica ISO, SWOP y Japan Color. La gestión de color igualmente se conoce con las siglas CMS (<em>Color Management System</em>) y analiza el espacio de color en que se ha capturado o creado una imagen, con el espacio de trabajo en que se va a imprimir aplicando los cambios necesarios para que sean lo más parecidos posibles.
        .cajon.color-primario.p-4.mb-4 
          p.mb-0 En la gestión del color es importante saber que existe un estándar internacional conocido con las siglas ICC (<em>International Color Consortium</em>), creado en el año 1993, representado por los perfiles ICC. Uno de los objetivos de la gestión de color es mantener una lectura confiable del color y conllevar un flujo de color en el transcurso del proceso, para así obtener los mejores resultados en cuanto a calidad y apariencia de las impresiones. 
      .col-md-5(data-aos="fade-left")
        img(src='@/assets/curso/tema1-1-img.png', alt='Imagen decorativa')
      
    p.mb-4(data-aos="fade") Para explicar lo anterior, en la siguiente imagen se detalla un ejemplo: el dispositivo de entrada es la cámara de fotografía que captura la imagen en perfil RGB; para realizar la gestión de color se importa la imagen al monitor “espacio de trabajo”, donde se aplica la acción a CMYK, para posteriormente llevar al dispositivo de salida en este caso la impresora y realizar la correspondiente impresión:
    
    .row.justify-content-center.mb-4
      .col-md-8.bg-suave.p-md-4.p-3.mb-2
        h2.text-center Gestión del color
        figure
          img(src='@/assets/curso/tema1-1-fig1.jpg', alt='Gestión del color')
      .col-md-8.bg-color-primario2
        figcaption Nota. Tomado de https://www.soloparafotografos.es/wp-content/uploads/2017/08/Diagrama-color-management.png

    p.mb-4(data-aos="fade") En la imagen que se expone a continuación, se observa la misma imagen tres veces, <b>sin una gestión de color adecuada</b>, lo cual hace que se vean diferentes las tonalidades en las tres imágenes:

    .row
      h2.text-center Imagen sin gestión de color
      .col-md-4.mb-4
        .tarjeta.bg-acento-botones.p-4
          img.mb-4(src='@/assets/curso/tema1-1-imgA.jpg', alt='Original')
          h3.text-center Original
      .col-md-4.mb-4
        .tarjeta.bg-acento-botones.p-4
          img.mb-4(src='@/assets/curso/tema1-1-imgB.jpg', alt='En un monitor ')
          h3.text-center En un monitor 
      .col-md-4.mb-4
        .tarjeta.bg-acento-botones.p-4
          img.mb-4(src='@/assets/curso/tema1-1-imgC.jpg', alt='Impresa')
          h3.text-center Impresa 
    
    p.mb-4(data-aos="fade") En el siguiente ejemplo como en la anterior imagen, se observa la misma imagen tres veces, pero ahora <b>con gestión de color: original, en monitor e impresa;</b> analizando como el color es uniforme en las tres imágenes:

    .row
      h2.text-center Imagen con gestión de color
      .col-md-4.mb-4
        .tarjeta.bg-acento-botones.p-4
          img.mb-4(src='@/assets/curso/tema1-1-img2A.jpg', alt='Original')
          h3.text-center Original
      .col-md-4.mb-4
        .tarjeta.bg-acento-botones.p-4
          img.mb-4(src='@/assets/curso/tema1-1-img2B.jpg', alt='En un monitor ')
          h3.text-center En un monitor 
      .col-md-4.mb-4
        .tarjeta.bg-acento-botones.p-4
          img.mb-4(src='@/assets/curso/tema1-1-img2C.jpg', alt='Impresa')
          h3.text-center Impresa 
    
    p.mb-5(data-aos="fade") Analizando los dos ejemplos anteriores, se define una de las características más importantes a la hora de aplicar la gestión de color en las imágenes previas a su impresión, teniendo en cuenta que los recursos tecnológicos hoy en día permiten realizar previamente los ajustes de color que se deseen aplicar en una imagen. 

  
    .titulo-tercero.titulo-tercero__2.mb-4(data-aos="fade-right")
      h3.mb-0 Características básicas 
      img(src='@/assets/curso/titulo-tercero.svg', alt='Imagen decorativa')

    p.mb-4(data-aos="fade") Mediante técnicas e instrumentos de medición y el uso de programas especializados se logra realizar la gestión de color, cuyas principales características son las siguientes:

    .row.tarjeta.py-5.bg-suave.justify-content-center
      .col-md-11
        SlyderE(indicadores="derecha")
          .row
            .col-md-6.mb-4.mb-md-0
              h3 Color
              p La percepción que tiene el ser humano del color, es un factor complicado en el cual participan fenómenos físicos y psicológicos, debido a esta razón la colorimetría es una rama de la psicofísica. Gracias a la creación de los modelos de color, se puede determinar la percepción de color, dichos modelos definen la sensación de color de forma matemática, independientemente de cualquier instrumento utilizado. La mayoría de los modelos de color se definen con matrices de tres valores, los cuales ayudan a crear volúmenes en tres dimensiones que muestran espacios de color, que permiten definir los limites de percepción y capacidad de reproducción. 
            .col-md-6
              figure
                img(src='@/assets/curso/tema1-1-slide1.png', alt='Color')
          .row
            .col-md-6.mb-4.mb-md-0
              h3 Espacio de color o perfil de color
              p Se puede decir que debido a la creación de los modelos matemáticos, a instrumentos de medición y a la evolución digital de programas de diseño especializados se puede asignar perfiles de color en un archivo, independientemente de los dispositivos de captura. Los perfiles de color describen las características de los modelos de color, esto se conoce como espacio de color y han sido desarrollados en el tratamiento de datos de color para la implementación del mismo. Es común encontrar colores equilibrados y uniformes con los perfiles de color Adobe RGB, sRGB, Prophoto RGB.
            .col-md-6
              figure
                img(src='@/assets/curso/tema1-1-slide2.png', alt='Espacio de color')      
          .row
            .col-md-6.mb-4.mb-md-0
              h3 Motor de color
              p Es una herramienta informática, encargada de realizar las conversiones de color que utiliza el perfil de color, cabe explicar que algunos programas no están en capacidad de realizar esta gestión, es el caso de la mayoría de navegadores web, los programas que asimilan el perfil de color poseen la herramienta motor de color, y tienen la particularidad de conectar con perfiles del sistema.
            .col-md-6
              figure
                img(src='@/assets/curso/tema1-1-slide3.png', alt='Motor de color')    
          .row
            .col-md-6.mb-4.mb-md-0
              h3 Pantalla
              p Es el principal dispositivo para el diseño de gestión de colores, cabe mencionar que impresoras, escáner, cámaras, planchas, son alternativas que se tienen, pero nada mejor a la hora de realizar este proceso mediante una pantalla o monitor, en lo posible una pantalla con buena calidad de resolución y calibrada, para que el registro de color sea lo suficientemente de calidad a la hora de iniciar un proceso digital. Hoy en día la tecnología brinda la posibilidad de encontrar monitores de alta resolución a bajos costos; y la implementación de programas de diseño avanzados, como por ejemplo los programas de la casa adobe company, un ejemplo es Photoshop, Illustrator, Indesing, lightroon, etc.
            .col-md-6
              figure
                img(src='@/assets/curso/tema1-1-slide4.png', alt='Pantalla')                









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
