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
      .col-md-2.col-4.mb-4.mb-md-0
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

    .row.mb-4
      h2.text-center Imagen sin gestión de color
      .col-md-4.mb-md-2.mb-4
        .tarjeta.bg-acento-botones.p-4
          img.mb-4(src='@/assets/curso/tema1-1-imgA.jpg', alt='Original')
          h3.text-center Original
      .col-md-4.mb-md-2.mb-4
        .tarjeta.bg-acento-botones.p-4
          img.mb-4(src='@/assets/curso/tema1-1-imgB.jpg', alt='En un monitor ')
          h3.text-center En un monitor 
      .col-md-4.mb-md-2.mb-4
        .tarjeta.bg-acento-botones.p-4
          img.mb-4(src='@/assets/curso/tema1-1-imgC.jpg', alt='Impresa')
          h3.text-center Impresa 
      .col-md-12
        figcaption Fuente: https://lh3.googleusercontent.com/proxy/qDeZWsGVBSdOylJfDM4UnJzaMW-A6ZfYtiZmct5HRGi2A-7e_NuoF9aGJR7h9AyKIyCu3pe6gcrs6KkTD6FETp7l

    p.mb-4(data-aos="fade") En el siguiente ejemplo como en la anterior imagen, se observa la misma imagen tres veces, pero ahora <b>con gestión de color: original, en monitor e impresa;</b> analizando como el color es uniforme en las tres imágenes:

    .row.mb-4
      h2.text-center Imagen con gestión de color
      .col-md-4.mb-md-2.mb-4
        .tarjeta.bg-acento-botones.p-4
          img.mb-4(src='@/assets/curso/tema1-1-img2A.jpg', alt='Original')
          h3.text-center Original
      .col-md-4.mb-md-2.mb-4
        .tarjeta.bg-acento-botones.p-4
          img.mb-4(src='@/assets/curso/tema1-1-img2B.jpg', alt='En un monitor ')
          h3.text-center En un monitor 
      .col-md-4.mb-md-2.mb-4
        .tarjeta.bg-acento-botones.p-4
          img.mb-4(src='@/assets/curso/tema1-1-img2C.jpg', alt='Impresa')
          h3.text-center Impresa 
      .col-md-12
        figcaption Fuente: https://lh3.googleusercontent.com/proxy/4AKZ6KfNqPLoIbuMP894XLez8Y5onLVOfj3aBl8k733nsetjhH5q7De1dVanr8gw4cFDw-GK_yqJs036svaKxM7l

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
          .row
            .col-md-6.mb-4.mb-md-0
              h3 Iluminación
              p Otro aspecto importante a tener presente es la incidencia de la iluminación, es tener una iluminación óptima en el lugar de trabajo es fundamental a la hora de trabajar, una iluminación cerca al entorno del monitor se sugiere que sea neutra, que no hayan colores dominantes, sin reflejos ni colores directos hacia la pantalla.  
            .col-md-6
              figure
                img(src='@/assets/curso/tema1-1-slide5.png', alt='Iluminación')            
          .row
            .col-md-6.mb-4.mb-md-0
              h3 Impresora
              p Este dispositivo es muy importante a la hora de la gestión de color, ya que permite analizar el color a partir de pruebas físicas, así como el monitor, es importante que la impresora cuente con unas características avanzadas es su calidad de impresión, para así poder obtener unas tonalidades y colores acordes a lo que se quiere en un proceso digital. Las características de las impresoras varían según la marca y referencia. Para la realización de pruebas de color se recomienda tener un proveedor con impresoras calibradas y de buena calidad tonal.  
            .col-md-6
              figure
                img(src='@/assets/curso/tema1-1-slide6.png', alt='Impresora') 
          .row
            .col-md-6.mb-4.mb-md-0
              h3 Tintas
              p Para la realización de pruebas de color, el rango tonal se sugiere mayor al dispositivo final en el cual se va a realizar la impresión, un ejemplo de esto es la rotativa o la impresora en la que se va a realizar la impresión, es prescindible analizar la maquina que se va a utilizar ya que si tiene un nivel tonal rojo más brillante que un tóner o tinta, no se deben hacer las pruebas de color.  
            .col-md-6
              figure
                img(src='@/assets/curso/tema1-1-slide7.png', alt='Tintas') 
          .row
            .col-md-6.mb-4.mb-md-0
              h3 Papel 
              p El sustrato a utilizar en la impresión es crucial para unos resultados óptimos, para las pruebas de color se puede escoger el mismo papel en el cual se va a imprimir el producto, esto con el fin de identificar el resultado final. El rango tonal y el gamut debe ser más amplio o igual al de la impresora, tintas y papel. No se recomienda hacer pruebas de color en papeles de impresoras donde el tono base sea más oscuro en relación con el que se va a imprimir el producto final, el resultado en la prueba de color seria diferente al resultado final. Hoy en día existe la posibilidad de escoger entre las variedades del papeles que hay en el mercado y escoger a criterio propio un papel homogéneo y uniforme.
            .col-md-6
              figure
                img(src='@/assets/curso/tema1-1-slide8.png', alt='Papel') 
          .row
            .col-md-6.mb-4.mb-md-0
              h3 Calibrador
              p Este es un procedimiento que se debe realizar constantemente en los dispositivos tanto  digitales y análogos, calibrar es importante para mantener los dispositivos óptimos. Para estos procesos de calibración se deben tener a la mano un colorímetro, que permite calibrar el color transmitido por la pantalla y por otra parte está el espectrofotómetros, que ayudan a medir el color de un monitor y el reflejo en papeles, y también tiene como funcionalidad crear perfiles de impresoras y otras máquinas. Es decir que los espectrofotómetros son más avanzados que los colorímetros.
            .col-md-6
              figure
                img(src='@/assets/curso/tema1-1-slide9.png', alt='Calibrador')                                 

    Separador


    // 1.2
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 1.2  El color en impresos

    .row
      .col-md-5.mb-4(data-aos="fade-right")
        .cajon2.color-primario.personalizado.px-md-5.py-md-0.p-4
          .bloque-texto-b__texto
            h4.mb-0 El uso del color en impresos se genera a partir del modelo de color CMYK: Cyan, Magenta, Yellow y Key, que traducido significa cian, magenta, amarillo y color clave/negro, se eligió la letra K para diferenciarse del color azul (Blue) y no generar confusiones.      
      .col-md-7.mb-4(data-aos="fade-left")
        p En medios impresos el proceso de creación pasa por varias etapas como el diseño, preprensa, impresión y terminados, entre otros; en los cuales se hace un seguimiento íntegro al producto sobre todo antes del proceso de la impresión, ya que una vez el diseño está impreso sobre el sustrato, es imposible realizar correcciones de última hora, caso contrario pasa con los productos digitales que permiten realizar actualizaciones en cualquier momento. 

    .row.mb-4
      .col-md-7.mb-4(data-aos="fade-right")
        p El proceso de impresión empieza con la técnica de 
          strong la cuatricromía que hace referencia a la utilización de cuatro tintas (CMYK), 
          | que al ser mezcladas generan infinidad de colores, que adquieren profundidad al ser superpuestos y finalizan con la definición que genera el color negro sobre las otras tintas, generando en el papel casi el 70 % de los colores visibles al ojo humano. Actualmente es el sistema estándar utilizado principalmente en impresión offset. La mezcla generada se denomina sustractiva, ya que los colores de base impresos en una hoja en blanco funcionan como un filtro. La luz atraviesa el primer color y la tinta absorbe parte de esta. La luz restante atraviesa el segundo color y, una vez más, la tinta absorbe parte de esa luz.
      .col-md-5.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1-2-img.png', alt='Imagen decorativa')    

    .row.justify-content-center.mb-4(data-aos="fade-down") 
      .col-md-10
        .cajon.color-primario.p-4
          p.mb-0 Los inconvenientes generados por la mala aplicación del color por lo general se deben principalmente al tipo de papel o sustrato en el cual se va a imprimir, la calidad de las tintas que son utilizadas en el proceso de impresión, el tipo de sistema e impresora, la calidad de los cartuchos y en la gran mayoría de los casos la calibración del monitor que afecta directamente en cómo percibimos el color y su calidad, ya que muchas veces lo que vemos en pantalla no es lo que obtenemos en la impresión. 

    p.mb-4(data-aos="fade") Por ejemplo, un papel rojo absorbería todas las longitudes de ondas excepto las del color rojo, que sería enviada de nuevo a la atmósfera y percibida por el ojo humano. La síntesis sustractiva, al ser de colores reflejados, necesita luz blanca para su creación. Continuando con el ejemplo, el papel rojo es rojo porque incide la luz sobre él, pero si se apaga la luz desaparece el color y se ve negro (ausencia de color). El blanco es el resultado de la reflexión de toda la luz. El papel blanco es blanco porque refleja toda la luz.

    .row(data-aos="fade-down") 
      .col-lg-3.col-md-6.text-center
        img(src='@/assets/curso/tema1-2-C.png', alt='C') 
        h1.bg-suave.py-2 C
      .col-lg-3.col-md-6.text-center
        img(src='@/assets/curso/tema1-2-M.png', alt='M') 
        h1.bg-suave.py-2 M
      .col-lg-3.col-md-6.text-center
        img(src='@/assets/curso/tema1-2-Y.png', alt='Y') 
        h1.bg-suave.py-2 Y
      .col-lg-3.col-md-6.text-center
        img(src='@/assets/curso/tema1-2-K.png', alt='K') 
        h1.bg-suave.py-2 K      

    p(data-aos="fade") Es importante considerar que el papel se asimila a un reflector de luz; es decir, si es blanco, refleja todos los colores, por eso se percibe blanco, se hace importante poder controlar selectivamente los colores reflejados por el papel. Esta manera de control está a cargo de las tintas de imprenta, donde las tintas absorben luz; de esta forma se podrá utilizar para controlar la luz reflejada en el papel.

    Separador


    // 1.3
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 1.3   Aplicación de modelos de color

    p.mb-4(data-aos="fade") Los modelos de color sirven para clasificar y definir los colores, veamos este tema con mayor detalle a continuación:

    .tarjeta.bg-secundario.mb-5(data-aos="fade-down")
      SlyderA.py-5.px-md-0.px-4
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h2 Aplicación de modelos de color
            h4 ¿Para qué sirven?
            p Los modelos de color sirven para clasificar y definir los colores, mediante fórmulas matemáticas que  representan  a los colores de forma numérica, por ejemplo:  
          .col-md-5
            figure
              img(src='@/assets/curso/tema1-3-slide1.jpg', alt='Aplicación de modelos de color')
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h4 ¿Qué modelos hay?
            p Dentro de los principales modelos de color se encuentran:
            h4.mb-0 CMYK
            p Cyan, Magenta, Yellow y Key.
          .col-md-5
            figure
              img(src='@/assets/curso/tema1-3-slide2.jpg', alt='CMYK')  
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h4 RGB
            p (Millones de colores), es un modelo basado en la síntesis de color aditiva, lo cual significa que por medio de adición de luz (roja, verde y azul), se generan los diferentes colores que al ser  sobrexpuestos generan el color blanco. Este tipo de modelo es utilizado en pantallas, proyectores, monitores, es por eso que el monitor del computador debe estar bien calibrado, pues de esto dependerá entre otras cosas, que el color de cualquier producto final sea el requerido. 
            p Cabe mencionar que los colores utilizados en impresión del modelo (CMYK), se ven totalmente diferentes a los que se observan en la pantalla de su computador (RGB), por tal razón es muy importante convertir los archivos. 
          .col-md-5
            figure
              img(src='@/assets/curso/tema1-3-slide3.jpg', alt='RGB')
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h4 LAB
            p El modo de color LAB, se basa en la medida del componente lumínico que es medido de 0 a 100. Este modo de color es el que más se aproxima a la percepción visual, el color Lab consta de un componente de luminancia o luminosidad (L) y dos componentes cromáticos, el componente a (del verde al rojo) y el componente b (del azul al amarillo). Modelo Lab. A. Luminancia=100 (blanco) B. Componente verde a rojo C. Componente azul a amarillo D. Luminancia=0 (negro).
          .col-md-5
            figure
              img(src='@/assets/curso/tema1-3-slide4.jpg', alt='LAB')                

    .row.bg-elemento.justify-content-center.py-2.align-items-end.mb-5(data-aos="fade-down") 
      .col-lg-2.col-md-3.col-4.mb-4.mb-md-0
        img.px-md-3(src='@/assets/curso/tema1-3-ico.svg', alt='Icono decorativo')
      .col-lg-8.col-md-9
        .row.align-items-center
          .col-lg-10.col-md-8.mb-3.mb-md-0
            h4.mb-md-1 Modelos de color
            p.mb-md-1 Para reforzar y profundizar sus conceptos en este tema, lo invitamos a ver el siguiente video, recuerde que también se encuentra disponible en el material complementario:
          .col-lg-1.col-md-1
            a.boton.color-acento-botones.me-3(href="https://www.youtube.com/watch?v=r_omt3DDwDU" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download 






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
