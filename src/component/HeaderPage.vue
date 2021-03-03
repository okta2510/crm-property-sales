<template>
  <ion-header class="main logged" >
    <ion-toolbar>
      <ion-buttons slot="start" v-show="sideMenuVisible">
        <ion-button class="clear-button" @click="openMenu" icon-only>
          <ion-icon :icon="menu"></ion-icon>
        </ion-button>
      </ion-buttons>
      <ion-buttons slot="end" class="filter-button btn-function">
        <ion-button class="clear-button" @click="openModal">
          <span>Filter</span>
        </ion-button>
      </ion-buttons>
      <ion-title mode="ios">{{title}}</ion-title>
    </ion-toolbar>
  </ion-header>
</template>

<script>
import { IonHeader, IonToolbar, IonButtons, IonButton, IonIcon, IonTitle, menuController } from '@ionic/vue';
import { defineComponent } from 'vue';
import { menu } from 'ionicons/icons';

export default defineComponent({
  name: 'HeaderPage',
  components: {
    IonHeader, IonToolbar, IonButtons, IonButton, IonIcon, IonTitle
  },
  setup(){
    return {
      menu
    }
  },
  props: {
    title: {
      type: String,
      required: true,
      default: 'Page Title'
    },
    sideMenuVisible: {
      type: Boolean,
      required: true,
      default: false
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
ion-header {
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
}
</style>