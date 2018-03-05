<template>
  <div id="diaporama" tabindex="-1" @keyup.left="precedenteDiapo()" @keyup.right="prochaineDiapo()">
    <div id="corps">
    <!--  <div id="logo"></div> -->
      <slide-title title="Initiation à Vue.js" :courante="isCourante(getNumero('titre'))" :numero="getNumero('titre')">
        <div>
          <img src="/static/img/logo.png" />
        </div>
      </slide-title>
      <slide1 :courante="isCourante(getNumero('sommaire'))" :numero="getNumero('sommaire')">
        <h1 slot="titre">Sommaire</h1>
        <div slot="contenu">
          <ul>
            <li>Euh, Vue.js, c'est quoi ?</li>
            <li>Pour bien commencer</li>
            <li>Les bases</li>
            <li>Des modules utiles</li>
            <li>Exemples d'applications</li>
            <li>Quand l'utiliser ?</li>
          </ul>
        </div>
      </slide1>
      <slide1 :courante="isCourante(getNumero('vuejs'))" :numero="getNumero('vuejs')">
        <h1 slot="titre">Qu'est-ce-que Vue.js ?</h1>
        <div slot="contenu">
          <ul>
            <li>Créé par Evan You en 2014</li>
            <li>Framework Front</li>
            <li>Accessible, Polyvalent et Performant</li>
            <li>Très bonne documentation, en français s'il-vous-plait!</li>
            <li><a href="https://vuejs.org/v2/guide/">https://vuejs.org/v2/guide/</a></li>
          </ul>
        </div>
      </slide1>
      <slide1 :courante="isCourante(getNumero('bienCommencer'))" :numero="getNumero('bienCommencer')">
        <h1 slot="titre">Bien commencer</h1>
        <div slot="contenu">
          <ul>
            <li>Analyser son besoin</li>
            <li>Simple fichier Javascript</li>
            <li>Outils de génération de projet</li>
            <li>Outil de build</li>
            <li>TypeScript</li>
          </ul>
        </div>
      </slide1>
      <slide2 :courante="isCourante(getNumero('base1'))" :numero="getNumero('base1')" id="base1">
        <h1 slot="titre">Les bases : Implementation simple</h1>
        <div slot="contenu1">
          <ul>
            <li>Implementation basique</li>
            <li>Simple fichier Javascript</li>
            <li>data-binding</li>
            <li>Intégration simple</li>
          </ul>
        </div>
        <div slot="contenu2">
          <code-highlight src='./static/resources/base1.js' class="code1"/>
          <code-highlight src='./static/resources/base1.html' class="code2"/>
          <code-exemple src-js="./static/resources/base1.js" src-html="./static/resources/base1.html"/>
        </div>
      </slide2>
      <slide2 :courante="isCourante(getNumero('syntaxe'))" :numero="getNumero('syntaxe')" id="syntaxe">
        <h1 slot="titre">Les bases : Syntaxe</h1>
        <div slot="contenu1">
          <ul>
            <li>liaison directive => v-bind Abréviation => :</li>
            <li>binding => v-model</li>
            <li>Evènement => v-on Abréviation => @</li>
            <li>Similaire à Angular</li>
          </ul>
        </div>
        <div slot="contenu2">
          <code-highlight src='./static/resources/syntaxe.html' class="code1"/>
        </div>
      </slide2>
      <slide2 :courante="isCourante(getNumero('base2'))" :numero="getNumero('base2')" id="base2">
        <h1 slot="titre">Les bases : Data-binding</h1>
        <div slot="contenu1">
          <ul>
            <li>Implementation basique</li>
            <li>Simple fichier Javascript</li>
            <li>data-binding</li>
            <li>Intégration simple</li>
          </ul>
          <code-highlight src='./static/resources/base2.js' class="code1"/>
        </div>
        <div slot="contenu2">
          <code-highlight src='./static/resources/base2.html' class="code2"/>
          <code-exemple src-js="./static/resources/base2.js" src-html="./static/resources/base2.html"/>
        </div>
      </slide2>
      <slide4 :courante="isCourante(getNumero('base3'))" :numero="getNumero('base3')" id="base3">
        <h1 slot="titre">Les bases : Rendu conditionnel</h1>
        <div slot="titreColonne1">
          v-if - v-else-if - v-else
        </div>
        <div slot="contenu1">
          <code-highlight src='./static/resources/if-else.html' class="code1"/>
        </div>
        <div slot="titreColonne2">
          v-show
        </div>
        <div slot="contenu2">
          <code-highlight src='./static/resources/show.html' class="code1"/>
          <ul>
            <li>v-if => Vrai rendu conditionnel</li>
            <li>v-show => Rendu CSS</li>
            <li>v-show => permutation fréquente</li>
          </ul>
        </div>
      </slide4>
      <slide4 :courante="isCourante(getNumero('base5'))" :numero="getNumero('base5')" id="base5">
        <h1 slot="titre">Les bases : Rendu conditionnel</h1>
        <div slot="contenu1">
          <ul>
            <li>Les boucles</li>
            <li>modificateur</li>
          </ul>
        </div>
        <div slot="contenu2">
        <!--  <code-highlight src='./static/resources/base2.js' class="code1"/>
          <code-highlight src='./static/resources/base2.html' class="code2"/>
          <code-exemple src-js="./static/resources/base2.js" src-html="./static/resources/base2.html"/>-->
        </div>
      </slide4>
      <slide4 :courante="isCourante(getNumero('base4'))" :numero="getNumero('base4')" id="base4">
        <h1 slot="titre">Les bases : Les propriétés calculées vs méthodes</h1>
        <div slot="titreColonne1">
          <ul>
            <li>Computed</li>
          </ul>
        </div>
        <div slot="contenu1">
          <ul>
            <li>Mise en cache du résultat</li>
            <li>Rééveluée uniquement quand ses dépendances sont modifiée</li>
            <li>Réévaluation seulement pour les dépendances réactives</li>
            <li>Mutateur</li>
          </ul>
          <code-exemple src-js="./static/resources/computed.js" src-html="./static/resources/computed.html"/>
        </div>
        <div slot="titreColonne2">
          <ul>
            <li>Methods</li>
          </ul>
        </div>
        <div slot="contenu2">
          <!--<ul>
            <li>Execution à chaque appel</li>
          </ul>-->
          <code-highlight src='./static/resources/computed.js' class="code1"/>
        </div>
      </slide4>
      <slide2 :courante="isCourante(getNumero('cycleDeVie'))" :numero="getNumero('cycleDeVie')" id="cycle-de-vie">
        <h1 slot="titre">Les bases : Cycle de vie</h1>
        <div slot="contenu1">
          <img src="/static/img/lifecycle.png" />
        </div>
        <div slot="contenu2">
          <code-highlight src='./static/resources/cycle-de-vie.js' class="code1"/>
        </div>
      </slide2>
      <slide2 :courante="isCourante(getNumero('reutilisabilite1'))" :numero="getNumero('reutilisabilite1')">
        <h1 slot="titre">Les composants</h1>
        <div slot="contenu1">
          <ul>
            <li>Utilisation des props</li>
            <li>Les évènements</li>
            <li>Les slots</li>
          </ul>
          <code-highlight src='./static/resources/reutilisabilite1.html' class="code2"/>
        </div>
        <div slot="contenu2">
          <code-highlight src='./static/resources/reutilisabilite1.js' class="code1"/>
          <code-exemple src-js="./static/resources/reutilisabilite1.js" src-html="./static/resources/reutilisabilite1.html"/>
        </div>
      </slide2>
      <slide2 :courante="isCourante(getNumero('reutilisabilite2'))" :numero="getNumero('reutilisabilite2')">
        <h1 slot="titre">La notion de mixin</h1>
        <div slot="contenu1">
          <ul>
            <li>Partage de fonction</li>
            <li>Mixin global</li>
          </ul>
        </div>
        <div slot="contenu2">
        </div>
      </slide2>
      <slide2 :courante="isCourante(getNumero('reutilisabilite3'))" :numero="getNumero('reutilisabilite3')">
        <h1 slot="titre">Les composants : Mono-fichier</h1>
        <div slot="contenu1">
          <ul>
            <li>Utilisation d'un outil de build</li>
            <li>Coloration syntaxique du template</li>
            <li>Déclaration non global</li>
            <li>Application Javascript avancée</li>
            <li>Un fichier .vue par composant</li>
          </ul>
        </div>
        <div slot="contenu2">
          <code-highlight src='./static/resources/reutilisabilite3.js' class="code1"/>
        </div>
      </slide2>
      <slide2 :courante="isCourante(getNumero('testUnitaire'))" :numero="getNumero('testUnitaire')">
        <h1 slot="titre">Les tests unitaires</h1>
        <div slot="contenu1">
          <ul>
            <li>Fonctionnement basique</li>
            <li>Karma + jasmine</li>
          </ul>
          <div>
            <img src="/static/img/karma-jasmine.png" />
          </div>
        </div>
        <div slot="contenu2">
          <code-highlight src='./static/resources/test-unitaire.js' class="code1"/>
        </div>
      </slide2>
      <slide4 :courante="isCourante(getNumero('autreFramework'))" :numero="getNumero('autreFramework')" id="autreFramework">
        <h1 slot="titre">Et en comparaison aux autres framework ?</h1>
        <div slot="titreColonne1">
          <ul>
            <li>Angular</li>
          </ul>
        </div>
        <div slot="contenu1">
          <ul>
            <li>Syntaxe qui se rapproche</li>
            <li>Moins structuré, plus flexible</li>
            <li>Courbe d'apprentissage</li>
            <li>Typescript pas nécessaire</li>
          </ul>
          <div class="img">
            <img src="/static/img/Angular.png"/>
          </div>
        </div>
        <div slot="titreColonne2">
          <ul>
            <li>React</li>
          </ul>
        </div>
        <div slot="contenu2">
          <ul>
            <li>Uniquement HTML, Javascript et CSS</li>
            <li>Mise à jour des composant plus précis</li>
            <li>Courbe d'apprentissage</li>
          </ul>
          <div class="img">
            <img src="/static/img/react.png"/>
          </div>
        </div>
      </slide4>
      <slide2 :courante="isCourante(getNumero('modules'))" :numero="getNumero('modules')">
        <h1 slot="titre">Quelques modules</h1>
        <div slot="contenu1">
          <ul>
            <li>VueRouter</li>
            <li>Vuex</li>
            <li>Vue Awesome</li>
          </ul>
          <img src="/static/img/vue-awesome.png" />
        </div>
        <div slot="contenu2">
          <code-highlight src='./static/resources/router.js' class="code1"/>
        </div>
      </slide2>
      <slide-title title="Merci pour votre attention" :courante="isCourante(getNumero('fin'))" :numero="getNumero('fin')"/>
    </div>
    <div id="footer">
      <span>Jonathan SOLER - Viseo Technologies</span>
      <input @click="$event.target.select()" @keyup.enter="changerDeDiapo(diapoCible)" v-model.number="diapoCible"/> / {{nombreDiapo - 1}}
    </div>
  </div>
</template>

<script>
import SlideTitle from '@/components/SlideTitle.vue'
import Slide1 from '@/components/Slide1.vue'
import Slide2 from '@/components/Slide2.vue'
import Slide3 from '@/components/Slide3.vue'
import Slide4 from '@/components/Slide4.vue'
import CodeHighlight from '@/components/CodeHighlight.vue'
import CodeExemple from '@/components/CodeExemple.vue'

export default {
  name: 'diaporama',
  components: {
    slideTitle: SlideTitle,
    slide1: Slide1,
    slide2: Slide2,
    slide3: Slide3,
    slide4: Slide4,
    codeHighlight: CodeHighlight,
    codeExemple: CodeExemple
  },
  data () {
    return {
      diapoCourante: 1,
      ordreDiapo: new Map(),
      nombreDiapo: 1,
      diapoCible: 1
    }
  },
  mounted: function () {
    this.ordreDiapo = new Map()
    this.ordreDiapo.set('titre', this.nombreDiapo++)
    this.ordreDiapo.set('sommaire', this.nombreDiapo++)
    this.ordreDiapo.set('vuejs', this.nombreDiapo++)
    this.ordreDiapo.set('bienCommencer', this.nombreDiapo++)
    this.ordreDiapo.set('base1', this.nombreDiapo++)
    this.ordreDiapo.set('syntaxe', this.nombreDiapo++)
    this.ordreDiapo.set('base2', this.nombreDiapo++)
    this.ordreDiapo.set('base3', this.nombreDiapo++)
    this.ordreDiapo.set('base5', this.nombreDiapo++)
    this.ordreDiapo.set('base4', this.nombreDiapo++)
    this.ordreDiapo.set('cycleDeVie', this.nombreDiapo++)
    this.ordreDiapo.set('reutilisabilite1', this.nombreDiapo++)
    this.ordreDiapo.set('reutilisabilite2', this.nombreDiapo++)
    this.ordreDiapo.set('reutilisabilite3', this.nombreDiapo++)
    this.ordreDiapo.set('testUnitaire', this.nombreDiapo++)
    this.ordreDiapo.set('modules', this.nombreDiapo++)
    this.ordreDiapo.set('autreFramework', this.nombreDiapo++)
    this.ordreDiapo.set('fin', this.nombreDiapo++)

    document.getElementById('diaporama').focus()
  },
  watch: {
    diapoCourante: function (val) {
      this.diapoCible = val
    }
  },
  methods: {
    getNumero: function (nom) {
      return this.ordreDiapo.get(nom)
    },
    precedenteDiapo: function () {
      if (this.diapoCourante > 1) {
        this.diapoCourante = this.diapoCourante - 1
      }
    },
    prochaineDiapo: function () {
      if (this.diapoCourante < this.ordreDiapo.size) {
        this.diapoCourante = this.diapoCourante + 1
      }
    },
    isCourante: function (numeroDiapo) {
      return this.diapoCourante === numeroDiapo
    },
    changerDeDiapo: function (numero) {
      this.diapoCourante = numero
    }
  }
}
</script>

<style>
  #logo {
    background: url('/static/img/viseo.jpg');
    background-size: auto;
    position: absolute;
    right: 30px;
    top: 10px;
    width: 150px;
    height: 150px;
    background-size: 150px;
  }

  #diaporama {
    height: 100vh;
  }

  #corps {
    height: 97vh;
  }

  #footer {
    text-align: center;
    color: white;
    position: absolute;
    bottom: -2px;
    left: 35vw;
  }

  #footer input {
    width: 30px;
  }

  #base1 .code1 {
    max-height: 40vh;
  }

  #base1 .code2 {
    max-height: 20vh;
  }

  #autreFramework img {
    width: 150px;
  }

  #autreFramework .img {
    text-align: center;
  }

  #cycle-de-vie img {
    max-height: 76vh;
    width: 91%;
  }
</style>