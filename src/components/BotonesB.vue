<template lang="pug">
.btns
  .row.justify-content-center
    .col-md-8
      img(src='@/assets/curso/tema3-fondo-botones.svg', alt='Las fases del proyecto')
  .btns__item(
    v-for="(boton, index) in botones"
    :style="getStyles(boton, index)"
    :class="[`btns_item--${index}`]"
    @mouseover="hover = index"
    @mouseleave="hover = null"
  )
    .indicador--hover(v-if="index === 0 && indicador")
    .btns__text.p-4(v-if="index === hover")  
      h4 {{boton.titulo}}
      p {{boton.texto1}}
      p.mb-0 {{boton.texto2}}
        


</template>

<script>
export default {
  name: 'BotonesB',
  data: () => ({
    indicador: true,
    hover: null,
    size: '20%',
    botones: [
      {
        img: require('@/assets/curso/tema3-boton1_1.svg'),
        img_h: require('@/assets/curso/tema3-boton1_2.svg'),
        pos_x: '15.9%',
        pos_y: '3.1%',
        titulo: 'Soportes de impresión',
        texto1:
          'Según la norma ISO, se establecen 4 soportes, 3 papeles y 1 lámina o película, y es acá donde se encuentra el primer problema a la norma, ya que con el paso del tiempo surgen nuevos soportes al momento de hablar del proceso de impresión flexo gráfica, como polietilenos, polietilenos y hasta materiales como aluminios, materiales que por el momento la norma no los acoge, lo que lleva a que muchas especificaciones no se ajusten a estos materiales.',
      },
      {
        img: require('@/assets/curso/tema3-boton2_1.svg'),
        img_h: require('@/assets/curso/tema3-boton2_2.svg'),
        pos_x: '31.9%',
        pos_y: '3.1%',
        titulo: 'El brillo en los soportes de impresión',
        texto1:
          'En la industria del empaquetado y en la realización del trabajo flexográfico, la aplicación de elementos como barnices y tintas especiales que se trabajan con calor o luz no están contempladas, así como la utilización de sustratos que afectan directamente el brillo y el color.',
        texto2:
          'La implementación de estos factores incide en los acabados y características que deben tenerse en cuenta para poder incluir a nuevos mercados en la norma ISO.',
      },
      {
        img: require('@/assets/curso/tema3-boton3_1.svg'),
        img_h: require('@/assets/curso/tema3-boton3_2.svg'),
        pos_x: '47.9%',
        pos_y: '3.1%',
        titulo: 'Juego de tintas CMYK',
        texto1:
          'Para el empleo de tintas directas y de forma análoga a como se plantea en la norma ISO debemos estandarizar el proceso de impresión con las tintas específicas empleadas siguiendo las pautas y recomendaciones técnicas de la norma, realizando un estudio de las condiciones de impresión y definiendo tolerancias de trabajo para las mismas.',
      },
      {
        img: require('@/assets/curso/tema3-boton4_1.svg'),
        img_h: require('@/assets/curso/tema3-boton4_2.svg'),
        pos_x: '64%',
        pos_y: '3.1%',
        titulo: 'La formulación en las tintas de impresión',
        texto1:
          'Hay claves a considerar al momento de hablar de la fabricación de las tintas y que la norma ISO no especifica, deben ser fijadas características como la viscosidad, las condiciones ambientales y las mezclas con sus porcentajes, características que tampoco se ven y que son determinantes al momento de la elaboración de cualquier trabajo. Una buena fabricación con porcentajes óptimos, una calibración óptima que permita el flujo y la viscosidad de la  tinta, determinarán la calidad y la optimización para que sean tenidas en cuenta al momento de su implementación.',
      },
    ],
  }),
  watch: {
    selected() {
      this.indicador = false
    },
    hover() {
      this.indicador = false
    },
  },
  methods: {
    getStyles(boton, index) {
      const image = this.hover === index ? boton.img_h : boton.img
      return {
        'background-image': `url(${image})`,
        top: boton.pos_y,
        left: boton.pos_x,
        width: this.size,
        'padding-top': this.size,
      }
    },
  },
}
</script>

<style lang="sass" scoped>


.btns
  position: relative
  height: 500px
  &__item
    position: absolute
    background-size: contain
    background-repeat: no-repeat
    background-position: center
    cursor: pointer
    transition: background-image 0.2s ease-in-out
  &__text
    border-radius: 20px
    position: absolute
    top: 110%
    left: 50%
    background-color: #B1F9FF
    width: 500px
    z-index: 100
    line-height: 1.2em
    border-radius: 20px
    transform: translate(-50%)
    p
      line-height: 1.2em
@media (max-width: $bp-max-md)
  .btns__item
    width: 13% !important
    padding: 13%

  .btns_item--0
    top: 0.5% !important
    left: 2.1% !important
  .btns_item--1
    top: 0.5% !important
    left: 25.3% !important
  .btns_item--2
    top: 0.5% !important
    left: 48.3% !important
  .btns_item--3
    top: 0.5% !important
    left: 71.5% !important


  .btns__text
    width: 330px
  .btns_item--0 .btns__text
    left: 180% !important
  .btns_item--1 .btns__text
    left: 90%
  .btns_item--2 .btns__text
    left: 10%
  .btns_item--3 .btns__text
    left: -80%
</style>
