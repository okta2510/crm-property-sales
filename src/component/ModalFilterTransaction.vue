<template>
  <ion-header class="main no-shadow border-bottom" mode="md">
    <ion-toolbar class="ion-align-items-center">
      <ion-buttons slot="end" class="ion-no-margin">
            <ion-button class="clear-button" @click="dismissModal">
              <span>Tutup</span>
            </ion-button>
          </ion-buttons>
      <ion-title mode="ios">{{ title }}</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-grid class="ion-no-padding">
      <ion-row>
        <ion-col size-md="4" size-xs="12" offset-md="4" offset-xs="0">
           <form v-on:submit.prevent="onSetFilter" class="mt-2 form-custom">

            <ion-list mode="ios">
              <ion-item>
                <ion-label position="stacked">Urutkan Berdasarkan</ion-label>
                <ion-select value="1" ok-text="Pilih" cancel-text="Tutup">
                  <ion-select-option value="1">Terbaru</ion-select-option>
                  <ion-select-option value="2">Harga Tertinggi</ion-select-option>
                  <ion-select-option value="3">Harga Terendah</ion-select-option>
                  <ion-select-option value="4">Luas Tanah - Besar</ion-select-option>
                  <ion-select-option value="5">Luas Tanah - Kecil</ion-select-option>
                  <ion-select-option value="6">Luas Bangunan - Besar</ion-select-option>
                  <ion-select-option value="7">Luas Bangunan - Kecil</ion-select-option>
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

            <ion-list mode="ios" class="mb-3">
              <ion-item>
                <ion-label position="stacked">Status</ion-label>
                <ion-select value="brown" ok-text="Pilih" cancel-text="Tutup">
                  <ion-select-option value="brown">Diproses</ion-select-option>
                  <ion-select-option value="blonde">Selesai</ion-select-option>
                  <ion-select-option value="black">Ditolak</ion-select-option>
                </ion-select>
              </ion-item>
            </ion-list>


            <ion-list  class="mb-3">
              <ion-item class="md">
                <ion-label color="medium" position="stacked">Mulai Dari Tanggal</ion-label>
                <ion-datetime
                mode="ios"
                class="text-left logged"
                min="1970-01"
                max="2000"
                v-model="dateStart"
                :value="dateStart"
                type="date"
                @ionChange="dateStart = formattingDate($event.target.value, 'YYYY-MM-DD')"
                name="date"
                display-format="MMMM DD, YYYY"
                month-short-names="jan, feb, mar, apr, mai, jun, jul, aug, sep, okt, nov, des"
                ></ion-datetime>
              </ion-item>
            </ion-list>

            <ion-list  class="mb-3">
              <ion-item class="md">
                <ion-label color="medium" position="stacked">Sampai Dengan Tanggal</ion-label>
                <ion-datetime
                mode="ios"
                class="text-left logged"
                min="1970-01"
                max="2000"
                v-model="dateStart"
                :value="dateStart"
                type="date"
                @ionChange="dateStart = formattingDate($event.target.value, 'YYYY-MM-DD')"
                name="date"
                display-format="MMMM DD, YYYY"
                month-short-names="jan, feb, mar, apr, mai, jun, jul, aug, sep, okt, nov, des"
                ></ion-datetime>
              </ion-item>
            </ion-list>

            <ion-list mode="ios">
              <ion-item>
                <ion-label position="stacked">Tipe Property</ion-label>
                <ion-select value="brown" ok-text="Pilih" cancel-text="Tutup">
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
            class="ios md mt-5 min-w-300 mx-auto"
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
import { 
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonButtons,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonItem,
  IonCol,
  IonRow,
  IonGrid,
  IonSelect,
  IonSelectOption,
  IonList,
  IonDatetime
} from '@ionic/vue';
import { defineComponent } from 'vue';
import moment from 'moment';

export default defineComponent({
  name: 'ModalFilterListing',
  props: {
    title: { type: String, default: 'Modal Tittle' },
    closeAction: { type: Function },
  },
  data() {
    return {
      dateStart: null,
      dateEnd: null,
    }
  },
  components: { 
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    IonButtons,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonItem,
    IonCol,
    IonRow,
    IonGrid,
    IonSelect,
    IonSelectOption,
    IonList,
    IonDatetime
},
  methods: {
    formattingDate(val, format) {
      return moment(val).format(format)
    },
    segmentChanged(ev) {
      console.log('Segment changed', ev);
    },
    dismissModal() {
      this.closeAction()
    },
    onSetFilter() {
      this.closeAction()
    }
  } 
});
</script>
<style scoped>

</style>