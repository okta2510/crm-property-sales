<template>
  <ion-page id="main-content">
     <ion-tabs class="ion-tabs-custom" id="main-content">
      <ion-tab-bar slot="bottom">
         <ion-tab-button tab="tab1" href="/tab1">
          <ion-icon :icon="home" />
          <ion-label>Beranda</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tab2">
          <ion-icon :icon="readerOutline" />
          <ion-label>Listing</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="add">
          <ion-label>add</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tab3">
          <ion-icon :icon="barChartOutline" />
          <ion-label>Marketing</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab4" href="/tab4">
          <ion-icon :icon="person" />
          <ion-label>Profil</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
    <ion-fab class="fab-button-custom" vertical="bottom" horizontal="center" slot="fixed">
      <ion-fab-button @click="router.push('/new')">
        <ion-icon :icon='add'></ion-icon>
      </ion-fab-button>
    </ion-fab>
    <SideMenu></SideMenu>
  </ion-page>
</template>

<script>
import {
  // IonContent,
  // IonHeader,
  IonPage,
  // IonTitle,
  // IonToolbar,
  IonTabs,
  IonTabButton,
  IonTabBar,
  IonLabel,
  IonIcon,
  IonFab,
  IonFabButton 
} from '@ionic/vue';
import { 
  calendar,
  personCircle,
  add,
  triangle,
  home,
  person,
  barChartOutline,
  readerOutline

} from 'ionicons/icons';
import { defineComponent } from 'vue';
import SideMenu from '@/component/SideMenu'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Tabs',
  components: {
    // IonContent,
    // IonHeader,
    IonPage,
    // IonTitle,
    // IonToolbar,
    IonTabs,
    IonTabButton,
    IonTabBar,
    IonLabel,
    IonIcon,
    IonFab,
    IonFabButton,
    SideMenu
  },
  setup() {
    const beforeTabChange = () => {
      // do something before tab change
    }
    const afterTabChange = () => {
      // do something after tab change
    }
    const router = useRouter();
    return {
      calendar,
      personCircle,
      beforeTabChange,
      afterTabChange,
      add,
      triangle,
      router,
      home,
      person,
      barChartOutline,
      readerOutline
    }
  }
});
</script>

<style  scoped>
.header-md::after {
  content: none;
}
.header-ios ion-toolbar:last-of-type {
  --border-width:0;
}
.toolbar-container {
  padding: 0!important;
  --padding-start: 0;
  --padding-end: 0;
  --padding-top: 0;
  --padding-bottom: 0;
  --padding: 0;
  margin: 0;
}
</style>