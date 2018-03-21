<template>
  <slide :courante="courante" :numero="numero" :maquette="maquette">
    <div class="titre">
      <slot name="titre">
        <div class="preview">
          Titre
        </div>
      </slot>
    </div>
    <div>
      <div class="contenu" id="contenu1">
        <div class="titre">
          <slot name="titreColonne1">
            <div class="preview">
              Titre
            </div>
          </slot>
        </div>
        <div>
          <slot name="contenu1">
            <div class="preview">
              Contenu 1
            </div>
          </slot>
        </div>
      </div>
      <div class="contenu" id="contenu2">
        <div class="titre">
          <slot name="titreColonne2">
            <div class="preview">
              Titre
            </div>
          </slot>
        </div>
        <div>
          <slot name="contenu2">
            <div class="preview">
              Contenu 2
            </div>
          </slot>
        </div>
      </div>
    </div>
  </slide>
</template>

<script>
import Slide from '@/components/Slide.vue'
export default {
  extends: Slide,
  name: 'slide3',
  components: {slide: Slide}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #contenu1, #contenu2 {
    width: 47%;
    display: inline-block;
  }

  .slide .contenu .titre .preview {
    min-height: 2vh;
  }

  .slide .contenu .titre {
    min-height: 2vh;
  }

  .slide .contenu {
    min-height: 80vh;
  }

  .slide .contenu .preview {
    min-height: 70vh;
  }

</style>
