<template>
  <div id="diaporama" tabindex="-1" @keyup.left="precedenteDiapo()" @keyup.right="prochaineDiapo()">
    <div id="corps">
      <slide-title id="title" title="Initiation à Vue.js" :courante="diapoCourante" :numero="getNumero('titre')">
        <div>
          <img src="/static/img/logo.png" />
        </div>
      </slide-title>
      <slide1 :courante="diapoCourante" :numero="getNumero('sommaire')">
        <h1 slot="titre">Sommaire</h1>
        <div slot="contenu" class="margin-top">
          <ul>
            <li>Euh, Vue.js, c'est quoi ?</li>
            <li>Pour bien commencer</li>
            <li>Les bases</li>
            <li>Les composants</li>
            <li>Des modules utiles</li>
            <li>Et par rapport aux autres frameworks ?</li>
          </ul>
        </div>
      </slide1>
      <slide1 :courante="diapoCourante" :numero="getNumero('vuejs')">
        <h1 slot="titre">Qu'est-ce-que Vue.js ?</h1>
        <div slot="contenu" class="margin-top">
          <ul>
            <li>Créé par Evan You en 2014</li>
            <li>Large support de la communauté</li>
            <li>Framework Front-end</li>
            <li>Accessible, Polyvalent et Performant</li>
            <li>Bonne documentation, en français s'il-vous-plait!</li>
            <li><a href="https://vuejs.org/v2/guide/">https://vuejs.org/v2/guide/</a></li>
          </ul>
        </div>
      </slide1>
      <slide1 :courante="diapoCourante" :numero="getNumero('bienCommencer')">
        <h1 slot="titre">Bien commencer</h1>
        <div slot="contenu" class="margin-top">
          <ul>
            <li>Analyser son besoin</li>
            <li>Simple fichier Javascript ou application Single Page</li>
            <li>Outils de génération de projet</li>
            <li>Outil de build</li>
            <li>TypeScript</li>
          </ul>
        </div>
      </slide1>
      <slide2 :courante="diapoCourante" :numero="getNumero('base1')" id="base1">
        <h1 slot="titre">Les bases : Implementation simple</h1>
        <div slot="contenu1" class="margin-top">
          <ul>
            <li>Implémentation basique</li>
            <li>Simple fichier Javascript</li>
            <li>data-binding</li>
            <li>Intégration simple</li>
          </ul>
        </div>
        <div slot="contenu2">
          <code-highlight src='./static/resources/base1.js' class="code1"/>
          <code-highlight src='./static/resources/base1.html' class="code2"/>
          <code-exemple src-js="./static/resources/base1.js" src-html="./static/resources/base1.html" class="exemple"/>
        </div>
      </slide2>
      <slide2 :courante="diapoCourante" :numero="getNumero('cycleDeVie')" id="cycle-de-vie">
        <h1 slot="titre">Les bases : Cycle de vie</h1>
        <div slot="contenu1">
          <img src="/static/img/lifecycle1.png" />
        </div>
        <div slot="contenu2">
          <img src="/static/img/lifecycle2.png" id="lifecycle2"/>
          <code-highlight src='./static/resources/cycle-de-vie.js' class="code1"/>
        </div>
      </slide2>
      <slide2 :courante="diapoCourante" :numero="getNumero('syntaxe')" id="syntaxe">
        <h1 slot="titre">Les bases : Syntaxe</h1>
        <div slot="contenu1" class="margin-top">
          <ul>
            <li>liaison directive => v-bind (ou :)</li>
            <li>binding => v-model</li>
            <li>Evènement => v-on (ou @)</li>
            <li>Similaire à Angular</li>
          </ul>
        </div>
        <div slot="contenu2" class="margin-top">
          <code-highlight src='./static/resources/syntaxe.html' class="code1"/>
        </div>
      </slide2>
      <slide2 :courante="diapoCourante" :numero="getNumero('base2')" id="base2">
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
      <slide4 :courante="diapoCourante" :numero="getNumero('base3')" id="base3">
        <h1 slot="titre">Les bases : Rendu conditionnel</h1>
        <div slot="titreColonne1">
          v-if - v-else-if - v-else
        </div>
        <div slot="contenu1" class="margin-top">
          <code-highlight src='./static/resources/if-else.html' class="code1"/>
        </div>
        <div slot="titreColonne2">
          v-show
        </div>
        <div slot="contenu2" class="margin-top">
          <code-highlight src='./static/resources/show.html' class="code1"/>
          <ul>
            <li>v-if => Vrai rendu conditionnel</li>
            <li>v-show</li>
            <ul>
              <li>Rendu CSS</li>
              <li>Permutation fréquente</li>
            </ul>
          </ul>
        </div>
      </slide4>
      <slide2 :courante="diapoCourante" :numero="getNumero('base5')" id="base5">
        <h1 slot="titre">Les bases : les boucles</h1>
        <div slot="contenu1">
          <code-highlight src='./static/resources/boucle.html' class="code2"/>
          <code-exemple src-js="./static/resources/boucle.js" src-html="./static/resources/boucle.html"/>
        </div>
        <div slot="contenu2">
          <code-highlight src='./static/resources/boucle.js' class="code1"/>
        </div>
      </slide2>
      <slide2 :courante="diapoCourante" :numero="getNumero('base4')" id="base4">
        <h1 slot="titre">Propriétés calculées vs méthodes</h1>
        <div slot="contenu1">
          <ul>
            <li>Computed / Method</li>
            <ul>
              <li>Mise en cache du résultat</li>
              <li>Réévalué uniquement quand ses dépendances sont modifiées</li>
              <li>Réévaluation seulement pour les dépendances réactives</li>
              <li>Mutateur</li>
            </ul>
          </ul>
          <code-exemple src-js="./static/resources/computed.js" src-html="./static/resources/computed.html"/>
        </div>
        <div slot="contenu2">
          <code-highlight src='./static/resources/computed.js' class="code1"/>
        </div>
      </slide2>
      <slide2 :courante="diapoCourante" :numero="getNumero('reutilisabilite1')">
        <h1 slot="titre">Les composants</h1>
        <div slot="contenu1" class="margin-top">
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
      <slide2 :courante="diapoCourante" :numero="getNumero('reutilisabilite4')" id="reutilisabilite4">
        <h1 slot="titre">Composants : validation des props</h1>
        <div slot="contenu1" class="margin-top">
          <ul>
            <li>Possibilité de valider les props</li>
            <li>Typage</li>
          </ul>
        </div>
        <div slot="contenu2">
          <code-highlight src='./static/resources/validation-props.js' class="code1"/>
        </div>
      </slide2>
      <slide2 :courante="diapoCourante" :numero="getNumero('reutilisabilite2')" id="reutilisabilite2">
        <h1 slot="titre">La notion de mixin</h1>
        <div slot="contenu1" class="margin-top">
          <ul>
            <li>Partage de fonctions</li>
            <li>Mixin global</li>
            <li>Fusion des conflits</li>
          </ul>
        </div>
        <div slot="contenu2">
          <code-highlight src='./static/resources/mixin.js' class="code1"/>
        </div>
      </slide2>
      <slide2 :courante="diapoCourante" :numero="getNumero('reutilisabilite3')" id="reutilisabilite3">
        <h1 slot="titre">Les composants : Mono-fichier</h1>
        <div slot="contenu1" class="margin-top">
          <ul>
            <li>Utilisation d'un outil de build</li>
            <li>Coloration syntaxique du template</li>
            <li>Déclaration non global</li>
            <li>Application Javascript avancée</li>
            <li>Un fichier .vue par composant</li>
          </ul>
          <div class="img">
            <img src="/static/img/vue-format.png"/>
          </div>
        </div>
        <div slot="contenu2">
          <code-highlight src='./static/resources/reutilisabilite3.js' class="code1"/>
        </div>
      </slide2>
      <slide2 :courante="diapoCourante" :numero="getNumero('testUnitaire')" id="testUnitaire">
        <h1 slot="titre">Les tests unitaires</h1>
        <div slot="contenu1" class="margin-top">
          <ul>
            <li>Fonctionnement basique</li>
            <li>Karma + jasmine</li>
          </ul>
          <div>
            <img src="/static/img/karma-jasmine.png" />
          </div>
        </div>
        <div slot="contenu2" class="margin-top">
          <code-highlight src='./static/resources/test-unitaire.js' class="code1"/>
        </div>
      </slide2>
      <slide2 :courante="diapoCourante" :numero="getNumero('modules')" id="modules">
        <h1 slot="titre">Quelques modules</h1>
        <div slot="contenu1">
          <ul>
            <li>VueRouter</li>
            <li>Vuex</li>
            <li>Vue Awesome</li>
            <li>Vuetify</li>
          </ul>
          <img src="/static/img/vue-awesome.png" />
        </div>
        <div slot="contenu2">
          <code-highlight src='./static/resources/router.js' class="code1"/>
        </div>
      </slide2>
      <slide4 :courante="diapoCourante" :numero="getNumero('autreFramework')" id="autreFramework">
        <h1 slot="titre">En comparaison aux autres framework ?</h1>
        <div slot="titreColonne1" class="margin-top">
          <ul>
            <li>Angular</li>
          </ul>
        </div>
        <div slot="contenu1">
          <ul>
            <li>Syntaxe qui se rapproche</li>
            <li>Moins structuré, plus flexible</li>
            <li>Courbe d'apprentissage</li>
          </ul>
          <div class="img">
            <img src="/static/img/angular.png"/>
          </div>
        </div>
        <div slot="titreColonne2" class="margin-top">
          <ul>
            <li>React</li>
          </ul>
        </div>
        <div slot="contenu2">
          <ul>
            <li>Uniquement HTML, Javascript et CSS</li>
            <li>Mise à jour des composants plus précis</li>
            <li>Courbe d'apprentissage</li>
          </ul>
          <div class="img">
            <img src="/static/img/react.png"/>
          </div>
        </div>
      </slide4>
      <slide-title title="Merci pour votre attention" :courante="diapoCourante" :numero="getNumero('fin')" id="fin">
        <img src="/static/img/github-mark.png" />
        <a href="https://github.com/jonathansoler/initiation_vuejs">https://github.com/jonathansoler/initiation_vuejs</a>
        <div id="notion">
          <ul>
            <li>Notions utilisées :</li>
            <ul>
              <li>vue-cli</li>
              <li>VueRouter</li>
              <li>Composants</li>
              <li>Slot</li>
            </ul>
          </ul>
        </div>
      </slide-title>
    </div>
    <div id="footer">
      <span>Jonathan SOLER - Viseo Technologies</span>
      <input @click="$event.target.select()" @keyup.enter="changerDeDiapo(diapoCible)" v-model.number="diapoCible"/> / {{nombreDiapo - 1}}
    </div>
    <div id="diapoPrecedente" @click="precedenteDiapo()" />
    <div id="diapoSuivante" @click="prochaineDiapo()" />
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
    this.ordreDiapo.set('titre', this.nombreDiapo++)
    this.ordreDiapo.set('sommaire', this.nombreDiapo++)
    this.ordreDiapo.set('vuejs', this.nombreDiapo++)
    this.ordreDiapo.set('bienCommencer', this.nombreDiapo++)
    this.ordreDiapo.set('base1', this.nombreDiapo++)
    this.ordreDiapo.set('cycleDeVie', this.nombreDiapo++)
    this.ordreDiapo.set('syntaxe', this.nombreDiapo++)
    this.ordreDiapo.set('base2', this.nombreDiapo++)
    this.ordreDiapo.set('base3', this.nombreDiapo++)
    this.ordreDiapo.set('base5', this.nombreDiapo++)
    this.ordreDiapo.set('base4', this.nombreDiapo++)
    this.ordreDiapo.set('reutilisabilite1', this.nombreDiapo++)
    this.ordreDiapo.set('reutilisabilite4', this.nombreDiapo++)
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
    getNumero (nom) {
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
    changerDeDiapo: function (numero) {
      this.diapoCourante = numero
    }
  }
}
</script>

<style>
  #title img {
    width: 20vw;
    height: 25vh;
  }

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
    font-size: 2vmin;
  }

  #footer input {
    width: 1.9vw;
    height: 2vh;
    font-size: 2vmin;
    text-align: center;
  }

  #base1 .code1 {
    height: 28vh;
  }

  #base1 .code2 {
    height: 18vh;
  }

  #base1 .exemple {
    height: 13vh;
  }

  #base2 .code-exemple {
    height: 32vh;
    font-size: 4vmin;
  }

  #base2 .code-exemple input {
    font-size: 4vmin;
    width: 18vmin;
  }

  #base2 .code-exemple label {
    width: 17vmin;
    display: inline-block;
  }

  #base2 .code1 {
    height: 32vh;
  }

  #base2 .code2 {
    height: 20vh;
  }

  #base4 .code-exemple input {
    font-size: 4vmin;
      width: 15vw;
  }

  #base4 .code1 {
    height: 68vh;
  }

  #autreFramework img {
    width: 150px;
  }

  #autreFramework .img, #reutilisabilite3 .img {
    text-align: center;
  }

  #autreFramework ul {
    margin-top: 1vh;
    margin-bottom: 1.5vh;
  }

  #autreFramework img {
    height: 21vh;
    width: 15vw;
  }

  #cycle-de-vie .code1 {
    height: 22vmin;
    font-size: 2vmin;
  }

  #cycle-de-vie img {
    max-height: 76vh;
    width: 91%;
  }

  #cycle-de-vie #contenu2 {
    text-align: center;
  }

  #cycle-de-vie #lifecycle2 {
    max-height: 52vh;
    width: 70%;
  }

  #fin {
    text-align: center;
  }

  #fin img {
    height: 10vh;
    width: 10vw;
    display: block;
    margin: auto;
  }

  #fin a {
    font-size: 3vmin;
  }

  #fin h1 {
    margin-top: 1vw;
  }

  #diapoPrecedente, #diapoSuivante {
    top: 0;
    position: absolute;
    height: 100vh;
    width: 3vw;
  }

  #diapoPrecedente:hover, #diapoSuivante:hover {
    cursor: pointer;
    opacity: 0.2;
    background: grey;
  }

  #diapoSuivante {
    top: 0;
    right: 0;
  }

  #testUnitaire img {
    width: 35vw;
    height: 20vh;
  }

  #modules img {
    width: 40vw;
    height: 35vh;
  }

  #modules .code1 {
    height: 75vh;
  }

  #base3 .contenu .titre {
    font-size: 5.5vmin;
    font-weight: bold;
  }

  #reutilisabilite4 .code1 {
    height: 75vh;
  }

  #reutilisabilite2 .code1 {
    height: 75vh;
  }

  #reutilisabilite3 .code1 {
    height: 75vh;
  }

  #reutilisabilite3 img {
    height: 20vh;
    width: 20vw;
  }

  .margin-top {
    margin-top: 10vmin;
  }

  #fin ul {
    font-size: 3vmin;
    display: inline-block;
    text-align: left;
  }

  #fin #notion {
    text-align: right;
  }

  ul {
    padding-left: 3vmin;
  }
  li {
    list-style-type: none;
    background-image: url('/static/img/puce_liste.png');
    background-size: 4vmin;
    background-repeat: no-repeat;
    background-position: left center;
    padding-left: 4vmin;
  }
</style>
