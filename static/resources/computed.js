var vm2 = new Vue({
 name: 'exemple-computed',
 el: '#exemple-computed',
 data: {
   chiffre1: 10,
   chiffre2: 5,
   affichageComputed: 0,
   affichageMethods: 0
 },
 computed: {
   resultat: function () {
     console.log('computed');
     return this.chiffre1 + this.chiffre2
   }
 },
 methods: {
   result: function () {
     console.log('methods');
     return this.chiffre1 + this.chiffre2
   },
   calculer: function () {
     this.affichageComputed = this.resultat;
     this.affichageMethods = this.result();
   }
 }
})
