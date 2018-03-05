<template>
  <slide :courante="courante">
    <div class="titre">
      <slot name="titre">
        <div class="preview">
          titre
        </div>
      </slot>
    </div>
    <div class="contenu">
      <slot name="contenu">
        <div class="preview">
          contenu
        </div>
      </slot>
    </div>
  </slide>
</template>

<script>
import Slide from '@/components/Slide.vue'
export default {
  extends: Slide,
  name: 'slide1',
  components: {slide: Slide}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
