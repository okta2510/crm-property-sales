<template>
  <ion-page class="logged">
    <HeaderPage
      title="Detil Listing"
      urlPage=""
      urlText=""
      modalText=""
      backText="Kembali"
      backUrl="/tab2"
      headerClass="header-detail"
      v-on:modalClick="null">
    </HeaderPage>
    <ion-content class="ion-padding min-height-100 pb-200 ">
      <div class="news-detail">
        <ion-grid class="ion-no-padding ion-no-padding-top ion-no-padding-bottom">
          <ion-row>
            <ion-col>
              <h1 class="title mt-0">
                For sale kemang minimalis private lift & swimming pool
              </h1>
              <img class="feature-img" :src="`/assets/img-sample${(parseInt(route.params.id))}.jpg`" />
              <span class="price d-block">
                Rp. 9.900.000.000
              </span>
              <article class="pt-4">
                <div class="form-group">
                  <span class="d-block form-label">Alamat</span>
                  <span class="d-block value">Jl. Mawar indah blok CC 43, jakarta Selatan</span>
                </div>
                <div class="form-group">
                  <span class="d-block form-label">Komisi</span>
                  <span class="d-block value">300.000.000</span>
                </div>
                <div class="form-group">
                  <span class="d-block form-label">Tipe Listing</span>
                  <span class="d-block value">Dijual</span>
                </div>
                <div class="form-group">
                  <span class="d-block form-label">Deskripsi Listing</span>
                  <span class="d-block value">Lorem Ipsum</span>
                </div>
                <div class="form-group">
                  <span class="d-block form-label">Jenis Properti</span>
                  <span class="d-block value">Rumah</span>
                </div>
                <div class="form-group">
                  <span class="d-block form-label">Luas Tanah</span>
                  <span class="d-block value">230 m<sup>2</sup></span>
                </div>
                <div class="form-group">
                  <span class="d-block form-label">Luas Bangunan</span>
                  <span class="d-block value">400 m<sup>2</sup></span>
                </div>
                <div class="form-group">
                  <span class="d-block form-label">Jumlah Lantai</span>
                  <span class="d-block value">2</span>
                </div>
                <div class="form-group">
                  <span class="d-block form-label">Jumlah Kamar Tidur</span>
                  <span class="d-block value">6</span>
                </div>
                <div class="form-group">
                  <span class="d-block form-label">Jumlah Kamar Mandi</span>
                  <span class="d-block value">4</span>
                </div>
                <div class="form-group">
                  <span class="d-block form-label">Kapasitas Garasi</span>
                  <span class="d-block value">4</span>
                </div>
                <div class="form-group">
                  <span class="d-block form-label">Kapasitas Carport</span>
                  <span class="d-block value">2</span>
                </div>
                <div class="form-group">
                  <span class="d-block form-label">Properti menghadap ke arah</span>
                  <span class="d-block value">Utara</span>
                </div>
                <div class="form-group">
                  <span class="d-block form-label">Status Sertifikat</span>
                  <span class="d-block value">Selatan</span>
                </div>
                <div class="form-group">
                  <span class="d-block form-label">Daya Listrik</span>
                  <span class="d-block value">5.200 watt</span>
                </div>
                <div class="form-group">
                  <span class="d-block form-label">Kondisi Interior</span>
                  <span class="d-block value">Furnished</span>
                </div>
                <div class="form-group">
                  <span class="d-block form-label">Fasilitas Kawasan</span>
                  <span class="d-block value">Keamanan, CCTV, Taman, Kolam Renang</span>
                </div>
                <div class="form-group">
                  <span class="d-block form-label">Status Kepemilikan</span>
                  <span class="d-block value">HaK Milik</span>
                </div>
                <div class="form-group">
                  <span class="d-block form-label">Tipe Perjanjian</span>
                  <span class="d-block value">Eksklusif</span>
                </div>
              </article>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { 
  IonContent,
  IonPage,
  modalController,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/vue';
import HeaderPage from '@/component/HeaderPage'
import { defineComponent } from 'vue';
import ModalFilterListing from '@/component/ModalFilterListing.vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  components: {
    IonContent,
    IonPage,
    HeaderPage,
    IonGrid,
    IonRow,
    IonCol
  },
  data: function() {
    return {
      titlePage: 'My Listing',
      currentModal: null,
      results: [1,2,3,4,5]
    }
  },
  setup() {
    const route = useRoute();
    console.log(route.params.id)
    return {route}
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
  methods: {
    getListing (queryString) {
      queryString ?  this.results = [1] :  this.results = [1,2,3,4,5]
    },
    async openModal() {
      const modal = await modalController
        .create({
          component: ModalFilterListing,
          cssClass: 'modal-component filter-component',
          swipeToClose: true,
          showBackdrop: true,
          mode: 'ios',
          backdropDismiss: true,
          animated: true,
          componentProps: {
            title: 'Filter Pencarian',
            closeAction: this.closeModal
          },
        })
      this.currentModal = modal
      return modal.present();
    },
    closeModal() {
      this.currentModal.dismiss()
    }
  }
});
</script>
<style  scoped>

</style>