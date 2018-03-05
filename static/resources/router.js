import Vue from 'vue'
import Router from 'vue-router'
import Diaporama from '@/components/Diaporama'
import Maquette from '@/components/Maquette'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'diaporama',
      component: Diaporama
    },
    {
      path: '/maquette',
      name: 'maquette',
      component: Maquette
    }
  ]
})
