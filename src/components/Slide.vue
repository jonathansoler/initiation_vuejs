<template>
  <transition :name="transition">
    <div class="slide" v-show="courante">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'slide',
  props: {
    transition: {
      default: 'slide-fade'
    },
    courante: {
      default: true
    },
    numero: {
      default: 1
    }
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .slide {
    border: solid 1px black;
    min-height: 100vh;
    background-image: url('/static/img/fond-diapo.png');
    background-repeat: no-repeat;
    background-size: 100vw 100vh;
  }

  .slide div {
    padding: 5px 10px 0px 10px;
  }

  .slide .preview {
    border: dotted grey 1px;
  }

  .slide .titre {
    min-height: 10vh;
    font-size: 1.5em;
  }

  .slide .titre h1 {
    border-bottom: solid;
  }

  .slide .titre .preview{
    min-height: 10vh;
  }

  .slide .contenu {
    min-height: 70vh;
    /* display: table; */
    line-height: 1.5em;
    font-size: 1.5em;
    vertical-align: top;
  }

  .slide .contenu .preview {
    min-height: 70vh;
  }

  /* .slide .contenu > * {
    display: table-cell;
    vertical-align: middle;
  } */

  /* Les animations d'entrée (« enter ») et de sortie (« leave »)  */
  /* peuvent utiliser différentes fonctions de durée et de temps.  */
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
