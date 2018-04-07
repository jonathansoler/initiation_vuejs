<template>
  <transition :name="transition">
    <div class="slide" v-show="isCourante">
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
    // la diapo courante
    courante: {
      type: Number,
      default: 0
    },
    // le numéro de la diapo
    numero: {
      type: Number
    },
    // mode maquette (false par défaut)
    maquette: {
      type: Boolean
    }
  },
  computed: {
    // vérifiue si la diapo doit être affichée ou non
    isCourante: function () {
      return this.maquette || this.numero === this.courante
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .slide {
    border: solid 1px black;
    height: 100vh;
    background-image: url('/static/img/fond-diapo.png');
    background-repeat: no-repeat;
    background-size: 100vw 100vh;
  }

  .slide div {
    padding: 1vh 1vw 0vh 1vw;
  }

  .slide .preview {
    border: dotted grey 1px;
  }

  .slide .titre {
    min-height: 10vh;
    font-size: 5.7vmin;
  }

  .slide .titre h1 {
    font-size: 6.8vmin;
  }

  .slide .titre h1 {
    border-bottom: solid;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .slide .titre .preview{
    min-height: 10vh;
  }

  .slide .contenu {
    font-size: 4vmin;
    vertical-align: top;
  }

  .slide .contenu .preview {
    min-height: 70vh;
  }

  /* Les animations d'entrée (« enter ») et de sortie (« leave »)  */
  /* peuvent utiliser différentes fonctions de durée et de temps.  */
  .slide-fade-enter-active, .slide-fade-leave-active {
    transition: all 1.2s ease;
  }
  .slide-fade-leave-to {
    transform: rotateY(180deg);
    opacity: 0;
  }
  .slide-fade-enter {
    transform: rotateY(-180deg);
    opacity: 0;
  }
</style>
