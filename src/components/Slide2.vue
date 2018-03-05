<template>
  <slide :courante="courante">
    <div class="titre">
      <slot name="titre">
        <div class="preview">
          Titre
        </div>
      </slot>
    </div>
    <div>
      <div class="contenu" id="contenu1">
        <slot name="contenu1">
          <div class="preview">
            Contenu 1
          </div>
        </slot>
      </div>
      <div class="contenu" id="contenu2">
        <slot name="contenu2">
          <div class="preview">
            Contenu 2
          </div>
        </slot>
      </div>
    </div>
  </slide>
</template>

<script>
import Slide from '@/components/Slide.vue'
export default {
  extends: Slide,
  name: 'slide2',
  components: {slide: Slide}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #contenu1, #contenu2 {
    /* max-width: 50vh; */
    width: 47%;
    float: left;
  }

</style>
