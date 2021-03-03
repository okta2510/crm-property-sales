<template>
    <ion-menu side="start" menu-id="side-menu" content-id="main-content">
      <ion-header>
        <ion-toolbar color="" translucent>
          <img class="logo" width="106" src="assets/icon-login.png">
          <h1>hello</h1>
          <h1>okta</h1>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list>
          <ion-item>
            <a href="/dashboard">Beranda</a>
          </ion-item>
          <ion-item><a href="/listing">Listing Saya</a></ion-item>
          <ion-item><a href="/transaction">Transaksi</a></ion-item>
          <ion-item><a href="/transaction">Info Marketing</a></ion-item>
          <ion-item><a href="/transaction">Berita Properti</a></ion-item>
        </ion-list>
      </ion-content>
      <ion-footer>
        <ion-toolbar>
          <a href="/logout">Keluar</a>
        </ion-toolbar>
      </ion-footer>
    </ion-menu>
</template>

<script>
import { IonMenu, IonHeader, IonToolbar, IonContent, IonList, IonItem, IonFooter} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SideMenu',
  components: {
    IonMenu, IonHeader, IonToolbar, IonContent, IonList, IonItem, IonFooter
  },
  setup(){
    return {}
  },
  props: {
  },
  methods: {
  }
});
</script>
<style  scoped>
</style>