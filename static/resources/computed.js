var vm2 = new Vue({
 name: 'exemple-computed',
 el: '#exemple-computed',
 data: {
   nom: 'Soler',
   prenom: 'Jonathan'
 },
 computed: {
   nomPrenom: function () {
     return this.nom + ' ' + this.prenom
   }
 },
 methods: {
   fullName: function () {
     return this.nom + ' ' + this.prenom
   }
 }
})
