<template>
  <div class="code-exemple">
    <div v-html="rawHtml"></div>
  </div>
</template>

<script>
export default {
  name: 'codeExemple',
  props: ['srcJs', 'srcHtml'],
  data () {
    return {
      rawHtml: ''
    }
  },
  created () {
    fetch(this.srcHtml).then((response) => {
      return response.text()
    }).then((text) => {
      this.rawHtml = text

      let script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = this.srcJs
      document.getElementsByTagName('head')[0].appendChild(script)
    })
  }
}
</script>

<style scoped>
  .code-exemple {
    border: dotted grey;
  }
</style>
