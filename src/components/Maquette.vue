<template>
  <div id="maquette">
    <slide-title title="Initiation à Vue.js">
    </slide-title>
    <slide1>
    </slide1>
    <slide2>
      <div slot="titre">Mon titre</div>
    </slide2>
    <slide3>
    </slide3>
  </div>
</template>

<script>
import SlideTitle from '@/components/SlideTitle.vue'
import Slide1 from '@/components/Slide1.vue'
import Slide2 from '@/components/Slide2.vue'
import Slide3 from '@/components/Slide3.vue'
import CodeHighlight from '@/components/CodeHighlight.vue'

export default {
  name: 'maquette',
  components: {
    slideTitle: SlideTitle,
    slide1: Slide1,
    slide2: Slide2,
    slide3: Slide3,
    codeHighlight: CodeHighlight
  },
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
