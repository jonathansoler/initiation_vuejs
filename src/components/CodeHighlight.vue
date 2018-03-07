<template>
  <pre :data-src="src"></pre>
</template>

<script>
import 'prismjs/themes/prism-okaidia.css'
import Prism from 'prismjs'
export default {
  name: 'codeHighlight',
  props: ['src'],
  created () {
    /* Prism Plugin : File Highlight */
    Prism.fileHighlight = function () {
      var Extensions = {
        'js': 'javascript',
        'py': 'python',
        'rb': 'ruby',
        'ps1': 'powershell',
        'psm1': 'powershell',
        'sh': 'bash',
        'bat': 'batch',
        'h': 'c',
        'tex': 'latex'
      }

      Array.prototype.slice.call(document.querySelectorAll('pre[data-src]')).forEach(function (pre) {
        var src = pre.getAttribute('data-src')

        var language
        var parent = pre
        var lang = /\blang(?:uage)?-(?!\*)(\w+)\b/i
        while (parent && !lang.test(parent.className)) {
          parent = parent.parentNode
        }

        if (parent) {
          language = (pre.className.match(lang) || [''])[1]
        }

        if (!language) {
          var extension = (src.match(/\.(\w+)$/) || [''])[1]
          language = Extensions[extension] || extension
        }

        var code = document.createElement('code')
        code.className = 'language-' + language

        pre.textContent = ''

        code.textContent = 'Loading…'

        pre.appendChild(code)

        fetch(src).then(function (response) {
          code.textContent = response.text()
          Prism.highlightElement(code)
        }, function (error) {
          code.textContent = '✖ Error ' + error.status + ' while fetching file: ' + error.statusText
        })
      })
    }
  }
}
</script>

<style>
  pre {
    font-size: 0.65em;
    max-width: 60vw;
    max-height: 60vh;
  }
</style>
