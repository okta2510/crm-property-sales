<template>
  <div>
    <ion-page id="main-content">
      <HeaderPage></HeaderPage>
      <ion-content :fullscreen="true">
        <div id="container">
          <h1>Transaction</h1>
        </div>
      </ion-content>
    </ion-page>
    <SideMenu></SideMenu>
  </div>
</template>

<script>
import { IonContent, IonPage} from '@ionic/vue';
import { defineComponent } from 'vue';
import SideMenu from '@/component/SideMenu'
import HeaderPage from '@/component/HeaderPage'

export default defineComponent({
  name: 'Transaction',
  components: {
    IonContent,
    IonPage,
    SideMenu,
    HeaderPage
  },
  setup() {
    return {}
  },
  data: function() {
    return {
    }
  },
  ionViewWillEnter() {
  },
  ionViewWillLeave() {
  },
  ionViewDidEnter() {
  },
  ionViewDidLeave() {
  },
  created() {
  },
  mounted() {
  },
  
});
</script>

<style  scoped>
</style>