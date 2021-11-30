<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.bloque-fondo-intro

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Aplicación de normas técnicas
    
    .row.mb-4
      .col-md-7.mb-4(data-aos="fade-right")
        p La norma técnica establecida internacionalmente es la 
          span.etiqueta ISO 12647,
          |  esta norma posee distintas variantes en función del sistema de impresión que se vaya a utilizar, sea offset, tipográfica, en plano o rotativa, serigrafía, huecograbado, etc. Permiten establecer la colorimetría de las tintas con la finalidad de normalizar; es decir, obtener los mismos resultados al momento de tener una prueba digital como una impresión en una o en otra máquina, la norma distingue entre cinco tipos de papel entre los que encontramos estucados, brillantes, mates, blancos y diferentes gramados. 
      .col-md-5.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema3-img.png', alt='Imagen decorativa')

    p.mb-4(data-aos="fade") <b>La norma ISO</b> especifica el valor y tolerancia de las características visuales que contiene el impreso. Entre los elementos más relevantes que se deben tener en cuenta para la aplicación de la norma están los siguientes parámetros:

    .row(data-aos="fade-down") 
      .col-lg-3.col-md-6.text-center.mb-4.d-flex
        .tarjeta-numerada.tarjeta3.color-acento-contenido.px-4.py-3
          .tarjeta-numerada__numero.text-white
            .h3 1
          .row.justify-content-center.align-items-center
            .col-md-6.mb-4
              img(src='@/assets/curso/tema3-ico1.svg', alt='Icono decorativo')
            .col-md-12 
              h4 Densidad vs. color
              p.mb-0 Controlar la capa de tinta para poder controlar la información del color y su relación.
      .col-lg-3.col-md-6.text-center.mb-4.d-flex
        .tarjeta-numerada.tarjeta3.color-acento-contenido.px-4.py-3
          .tarjeta-numerada__numero.text-white
            .h3 2
          .row.justify-content-center.align-items-center
            .col-md-6.mb-4
              img(src='@/assets/curso/tema3-ico2.svg', alt='Icono decorativo')
            .col-md-12 
              h4 Parámetros de control
              p.mb-0 Tamaños de imagen, valoración de tono.
      .col-lg-3.col-md-6.text-center.mb-4.d-flex
        .tarjeta-numerada.tarjeta3.color-acento-contenido.px-4.py-3
          .tarjeta-numerada__numero.text-white
            .h3 3
          .row.justify-content-center.align-items-center
            .col-md-6.mb-4
              img(src='@/assets/curso/tema3-ico3.svg', alt='Icono decorativo')
            .col-md-12 
              h4 Límites de reproducción de tono
              p.mb-0 Controlan el incremento de los límites de producción.
      .col-lg-3.col-md-6.text-center.mb-4.d-flex
        .tarjeta-numerada.tarjeta3.color-acento-contenido.px-4.py-3
          .tarjeta-numerada__numero.text-white
            .h3 4
          .row.justify-content-center.align-items-center
            .col-md-6.mb-4
              img(src='@/assets/curso/tema3-ico4.svg', alt='Icono decorativo')
            .col-md-12 
              h4 Balance de grises
              p.mb-0 Especifica porcentajes y balances.                       

    p.mb-4(data-aos="fade") Veamos otras normas que se incluyen:

    .row.mb-5
      BotonesB


    
</template>

<script>
import BotonesB from '../components/BotonesB.vue'
export default {
  name: 'Tema3',
  components: {
    BotonesB,
  },
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
