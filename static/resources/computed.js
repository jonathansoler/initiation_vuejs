var vm2 = new Vue({
 name: 'exemple-computed',
 el: '#exemple-computed',
 data: {
   chiffre1: 10,
   chiffre2: 5
 },
 computed: {
   resultat: function () {
     return this.chiffre1 + this.chiffre2
   }
 },
 methods: {
   result: function () {
     return this.chiffre1 + this.chiffre2
   }
 }
})
