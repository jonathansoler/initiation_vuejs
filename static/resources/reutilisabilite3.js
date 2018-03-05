<template>
  <div>
    <p>{{ greeting }} World!</p>
    <other-component/>
</template>

<script>
import OtherComponent from './OtherComponent.vue'

export default {
  data () {
    return {
      greeting: 'Hello'
    }
  },
  components: {
    OtherComponent
  }
}
</script>

<style scoped>
  p {
    font-size: 2em;
  }
</style>
