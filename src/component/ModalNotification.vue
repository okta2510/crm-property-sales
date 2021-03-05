<template>
  <ion-header class="main" mode="md">
    <ion-toolbar class="ion-align-items-center">
      <ion-buttons slot="end" class="on-no-margin">
            <ion-button class="clear-button" @click="closeAction">
              <span>Tutup</span>
            </ion-button>
          </ion-buttons>
      <ion-title mode="ios">{{ title }}</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-no-padding">
    <ion-item>
      <ion-label>
        <span class="date">2020-11-05 10:00</span>
        <span class="title">Reset Password request</span>
        <span class="desc">Silahkan lakukan verifikasi pada email anda</span>
      </ion-label>
    </ion-item>
    <ion-item class="readed">
      <ion-label>
        <span class="date">2020-11-05 10:00</span>
        <span class="title">Reset Password request</span>
        <span class="desc">Silahkan lakukan verifikasi pada email anda</span>
      </ion-label>
    </ion-item>
  </ion-content>
</template>

<script>
import { 
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonButtons,
  IonLabel,
  IonItem
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ModalNotification',
  props: {
    title: { type: String, default: 'Modal Tittle' },
    closeAction: { type: Function },
  },
  data() {
    return {
    }
  },
  components: { 
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonButtons,
  IonLabel,
  IonItem
},
  methods: {
    segmentChanged(ev) {
      console.log('Segment changed', ev);
    },
    dismissModal() {
      this.closeAction()
    },
    onSetFilter() {
      alert('filter set')
      this.closeAction()
    }
  } 
});
</script>
<style scoped>

</style>