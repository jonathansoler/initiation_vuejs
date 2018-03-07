<template>
  <slide :courante="courante">
    <div id="titre">
      <div>
        <h1>{{ title }}</h1>
      </div>
      <div>
        <slot></slot>
      </div>
    </div>
  </slide>
</template>

<script>
import Slide from '@/components/Slide.vue'
export default {
  extends: Slide,
  name: 'slideTitle',
  props: ['title'],
  components: {slide: Slide}
}
</script>

<style scoped>
  #titre h1 {
    font-size: 50px;
  }

  #titre {
    min-height: 74vh;
    text-align: center;
  }

  #titre:first-child {
    margin-top: 25vh;
  }
</style>
