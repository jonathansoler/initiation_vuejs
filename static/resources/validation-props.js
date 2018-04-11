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
    // fonction de validation personnalisée
    propE: {
      validator: function (value) {
        return value > 10
      }
    }
  }
})
