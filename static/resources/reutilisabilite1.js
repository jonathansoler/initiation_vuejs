Vue.component('mon-composant', {
  template: `<div>
              Bienvenue {{ prenom }} {{ nom }}.
              <slot name="slot1">Slot 1</slot>
              <slot name="slot2">Slot 2</slot>
              </div>`,
  props: {
    prenom: null,
    nom: null
  }
})

new Vue({
 name: 'exemple-reutilisabilite1',
 el: '#exemple-reutilisabilite1'
})
