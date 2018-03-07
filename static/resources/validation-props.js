Vue.component('validation', {
  props: {
    // vérification basique du type (`null` signifie l'acceptation de n'importe quel type)
    propA: Number,
    // plusieurs types possibles
    propB: [String, Number],
    // une chaine de caractères est obligatoire
    propC: {
      type: String,
      required: true
    },
    // un nombre avec une valeur par défaut
    propD: {
      type: Number,
      default: 100
    },
    // les objets et tableaux par défaut doivent être retournés
    // par une fabrique de fonctions
    propE: {
      type: Object,
      default: function () {
        return { message: 'hello' }
      }
    },
    // fonction de validation personnalisée
    propF: {
      validator: function (value) {
        return value > 10
      }
    }
  }
})
