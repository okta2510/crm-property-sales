<template>
  <ion-header class="main" mode="md">
    <ion-toolbar class="ion-align-items-center">
      <ion-buttons slot="end">
            <ion-button class="clear-button" @click="closeAction">
              <span>Tutup</span>
            </ion-button>
          </ion-buttons>
      <ion-title mode="ios">{{ title }}</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-grid>
      <ion-row>
        <ion-col size-md="4" size-xs="10" offset-md="4" offset-xs="1">
           <form v-on:submit.prevent="onSetFilter" class="mt-4 form-custom">

            <ion-list mode="ios">
              <ion-item>
                <ion-label position="stacked">Urutkan Berdasarkan</ion-label>
                <ion-select value="brown" ok-text="Pilih" cancel-text="Batal">
                  <ion-select-option value="brown">Terbaru</ion-select-option>
                  <ion-select-option value="blonde">Harga Tertinggi</ion-select-option>
                  <ion-select-option value="black">Harga Terendah</ion-select-option>
                  <ion-select-option value="black">Luas Tanah - Besar</ion-select-option>
                  <ion-select-option value="black">Luas Tanah - Kecil</ion-select-option>
                  <ion-select-option value="black">Luas Bangunan - Besar</ion-select-option>
                  <ion-select-option value="black">Luas Bangunan - Kecil</ion-select-option>
                </ion-select>
              </ion-item>
            </ion-list>


            <ion-item class="md segment-handled" lines="none">
               <ion-label position="stacked">Tipe Property</ion-label>
            </ion-item>
            <ion-segment @ionChange="segmentChanged($event)" 
              value="dijual"
              class="mb-2"
              swipeGesture="true">
                <ion-segment-button value="dijual">
                  <ion-label>Dijual</ion-label>
                </ion-segment-button>
                <ion-segment-button value="disewa">
                  <ion-label>Disewa</ion-label>
                </ion-segment-button>
            </ion-segment>

            <ion-list mode="ios">
              <ion-item>
                <ion-label position="stacked">Tipe Property</ion-label>
                <ion-select value="brown" ok-text="Pilih" cancel-text="Batal">
                  <ion-select-option value="brown">Rumah</ion-select-option>
                  <ion-select-option value="blonde">Apartemen</ion-select-option>
                  <ion-select-option value="black">Ruko</ion-select-option>
                  <ion-select-option value="red">Kavling</ion-select-option>
                </ion-select>
              </ion-item>
            </ion-list>

            <ion-button
            color="medium"
            size="large"
            class="ios md mt-5"
            expand="block"
            type="submit">
              <strong>Terapkan</strong>
            </ion-button>
           </form>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-content>
</template>

<script>
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonSegment, IonSegmentButton, IonLabel, IonItem, IonCol, IonRow, IonGrid, IonSelect, IonSelectOption, IonList } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ModalFilterListing',
  props: {
    title: { type: String, default: 'Modal Tittle' },
    closeAction: { type: Function },
  },
  data() {
    return {
    }
  },
  components: { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonSegment, IonSegmentButton, IonLabel, IonItem, IonCol, IonRow, IonGrid, IonSelect, IonSelectOption, IonList },
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