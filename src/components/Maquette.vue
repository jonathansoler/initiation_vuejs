<template>
  <div id="maquette">
    <slide-title title="Initiation à Vue.js" :maquette="true"/>
    <slide1 :maquette="true"/>
    <slide2 :maquette="true"/>
    <slide3 :maquette="true"/>
    <slide4 :maquette="true"/>
  </div>
</template>

<script>
import SlideTitle from '@/components/SlideTitle.vue'
import Slide1 from '@/components/Slide1.vue'
import Slide2 from '@/components/Slide2.vue'
import Slide3 from '@/components/Slide3.vue'
import Slide4 from '@/components/Slide4.vue'

export default {
  name: 'maquette',
  components: {
    slideTitle: SlideTitle,
    slide1: Slide1,
    slide2: Slide2,
    slide3: Slide3,
    slide4: Slide4
  },
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
