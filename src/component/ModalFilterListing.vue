<template>
  <ion-header class="main no-shadow border-bottom" mode="md">
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
    <ion-grid class="ion-no-padding">
      <ion-row>
        <ion-col size-md="4" size-xs="12" offset-md="4" offset-xs="0">
           <form v-on:submit.prevent="onSetFilter" class="mt-2 form-custom">

            <ion-list mode="ios">
              <ion-item>
                <ion-label position="stacked">Urutkan Berdasarkan</ion-label>
                <ion-select :value="sort" ok-text="Pilih" cancel-text="Tutup" @ionChange="sortChanged($event)">
                  <ion-select-option value="created">Terbaru</ion-select-option>
                  <ion-select-option value="max_price">Harga Tertinggi</ion-select-option>
                  <ion-select-option value="min_price">Harga Terendah</ion-select-option>
                  <ion-select-option value="max_area">Luas Tanah - Besar</ion-select-option>
                  <ion-select-option value="min_area">Luas Tanah - Kecil</ion-select-option>
                  <ion-select-option value="max_building">Luas Bangunan - Besar</ion-select-option>
                  <ion-select-option value="min_building">Luas Bangunan - Kecil</ion-select-option>
                </ion-select>
              </ion-item>
            </ion-list>


            <ion-item class="md segment-handled" lines="none">
               <ion-label position="stacked">Tipe Transaksi</ion-label>
            </ion-item>
            <ion-segment @ionChange="segmentChanged($event)" 
              :value="tipe_transaksi || 'dijual'"
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
                <ion-select :value="tipe_property" ok-text="Pilih" cancel-text="Tutup" @ionChange="typePropChanged($event)">
                  <ion-select-option value="rumah">Rumah</ion-select-option>
                  <ion-select-option value="apartemen">Apartemen</ion-select-option>
                  <ion-select-option value="ruko">Ruko</ion-select-option>
                  <ion-select-option value="kavling">Kavling</ion-select-option>
                </ion-select>
              </ion-item>
            </ion-list>

            <ion-button
            color="medium"
            size="medium"
            class="mt-5 min-w-300 mx-auto"
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
  components: { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonSegment, IonSegmentButton, IonLabel, IonItem, IonCol, IonRow, IonGrid, IonSelect, IonSelectOption, IonList },
  props: {
    title: { type: String, default: 'Modal Tittle' },
    currentParams: { type: Object, default: function () {
      return null
    }},
    updateParams: { type: Function },
    closeAction: { type: Function },
  },
  data() {
    return {
      sort: '',
      tipe_transaksi: '',
      tipe_property: ''
    }
  },
  computed: {
    params: function () {
      let query = {}
      let obj = {
        order: this.order,
        sort: this.sort,
        tipe_transaksi: this.tipe_transaksi,
        tipe_property: this.tipe_property
      }
      for (let [key, value] of Object.entries(obj)) {
        if (value) {
          query[key] = value
        }
      }
      return query
    }
  },
  created: function () {
    let { sort, tipe_transaksi, tipe_property } = this.currentParams
    this.sort = sort || ''
    this.tipe_transaksi = tipe_transaksi || ''
    this.tipe_property = tipe_property || ''
  },
  methods: {
    sortChanged(val) {
      this.sort = val.target.value
    },
    typePropChanged(val) {
      this.tipe_property = val.target.value
    },
    segmentChanged(val) {
      this.tipe_transaksi = val.target.value
    },
    dismissModal() {
      this.closeAction()
    },
    onSetFilter() {
      this.updateParams(this.params)
      this.closeAction()
    }
  } 
});
</script>
<style scoped>

</style>