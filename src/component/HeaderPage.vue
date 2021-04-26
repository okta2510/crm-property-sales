<template>
  <ion-header class="main logged" :class="headerClass" mode="md">
    <ion-toolbar class="ion-align-items-center">
      <!-- if backUrl is set -->
      <ion-buttons slot="start" class="ion-no-margin" v-show="backUrl">
        <ion-button class="clear-button"  :href="backUrl" icon-only>
          <ion-icon :icon="chevronBack"></ion-icon>
          <ion-label>
            {{backText}}
          </ion-label>
        </ion-button>
      </ion-buttons>
      <!-- if sideMenuVisible is set -->
      <ion-buttons slot="start" class="ion-no-margin" v-show="sideMenuVisible">
        <ion-button class="clear-button" @click="openMenu" icon-only>
          <ion-icon :icon="menu"></ion-icon>
        </ion-button>
      </ion-buttons>

      <ion-buttons slot="end" v-if="modalText || urlText"  class="filter-button btn-function on-no-margin">
        <ion-button v-if="urlPage" class="clear-button" :href="urlPage" icon-only>
          <span>{{urlText || 'text'}}</span>
        </ion-button>

        <ion-button v-else-if="modalText" class="clear-button on-no-margin" @click="openModal" icon-only>
          <span>{{modalText || 'Filter'}}</span>
        </ion-button>
      </ion-buttons>

      <ion-title mode="ios">{{title}}</ion-title>
    </ion-toolbar>
  </ion-header>
</template>

<script>
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonTitle,
  IonLabel,
  menuController
} from '@ionic/vue';
import { defineComponent } from 'vue';
import { menu, chevronBack } from 'ionicons/icons';
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'HeaderPage',
  components: {
    IonHeader,
    IonToolbar,
    IonButtons,
    IonButton,
    IonIcon,
    IonTitle,
    IonLabel
  },
  setup(){
    const router = useRouter();
    return {
      menu,
      router,
      chevronBack
    }
  },
  props: {
    headerClass: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      required: true,
      default: 'Page Title'
    },
    sideMenuVisible: {
      type: Boolean,
      required: true,
      default: false
    },
    urlPage: {
      type: String,
      default: ''
    },
    urlText: {
      type: String,
      default: ''
    },
    backText: {
      type: String,
      default: 'Back'
    },
    backUrl: {
      type: String,
      default: ''
    },
    modalText: {
      type: String,
      default: ''
    }
  },
  mounted() {
  },
  methods: {
    openMenu() {
      menuController.enable(true, 'side-menu');
      menuController.open('side-menu');
    },
    openModal() {
      this.$emit('modalClick')
    },
  }
});
</script>

<style scoped>
/* ion-header {
  z-index: 9999;
  position: relative;
  background: #00A79D;
}
.filter-button {
  margin-inline-end: 6px;
  margin-inline-start: 2;
}
.btn-function, .btn-function button{
  color:#BDBDBD;
  --color: #BDBDBD;
}
ion-toolbar.logged-header {
  --background: #00A79D;
  --color:#fff;
}
ion-toolbar.logged-header .btn-function, ion-toolbar.logged-header .btn-function button{
  color:#fff;
  --color: #fff;
} */
</style>