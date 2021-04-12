<template>
  <ion-page class="logged">
    <HeaderPage
      title="Detil Listing"
      urlPage=""
      urlText=""
      modalText=""
      backText="Kembali"
      backUrl="/tab2"
      headerClass="header-detail no-shadow border-bottom"
      v-on:modalClick="null">
    </HeaderPage>
    <ion-content class="ion-padding min-height-100 pb-200 ">
      <div class="news-detail">
        <ion-grid class="ion-no-padding ion-no-padding-top ion-no-padding-bottom">
          <ion-row>
            <ion-col>
              <div class="wrap-chips">
                <ion-chip class="custom label-shadow" color="success">
                  <ion-label color="light">Dijual</ion-label>
                </ion-chip>
                <!-- <ion-chip class="custom label-shadow" color="warning">
                  <ion-label color="dark">Disewa</ion-label>
                </ion-chip> -->
              </div>
              <h1 class="title mt-0">
                For sale kemang minimalis private lift & swimming pool
              </h1>
              <div class="component-size-info">
                <ul class="text-left">
                  <li>
                    <img height="14" src="/assets/icon/icon-area-size.png">
                    <span>180</span>
                  </li>
                  <li>
                    <img height="14" src="/assets/icon/icon-building-size.png">
                    <span>250</span>
                  </li>
                  <li>
                    <img height="14" src="/assets/icon/icon-bed-size.png">
                    <span>4</span>
                  </li>
                  <li>
                    <img height="14" src="/assets/icon/icon-bath-size.png">
                    <span>2</span>
                  </li>
                </ul>
              </div>
              <img class="feature-img" :src="`/assets/img-sample${(parseInt(route.params.id))}.jpg`" />
              <ion-grid>
                <ion-row>
                  <ion-col size="7">
                    <span class="date d-block">
                      2020-11-05 10:00
                    </span>
                    <span class="price d-block">
                      Rp. 9.900.000.000
                    </span>
                  </ion-col>
                  <ion-col size="5">
                    <div class="wrap-agent-info">
                      <div @click="goTo('/agent/123')"  class="profile cursor-pointer" style="background-image: url(/assets/agent-photo.png)"></div>
                      <div class="top-section">James Harden</div>
                      <div class="bottom-section">Raywhite Sunter</div>
                    </div>

                    <ion-button target="_blank" href="https://api.whatsapp.com/send?phone=+6281280029291" size="small" color="medium w-100 ion-no-margin mt-3">
                      <strong>Chat James</strong>
                      <ion-ripple-effect></ion-ripple-effect>
                    </ion-button>
                  </ion-col>
                </ion-row>
              </ion-grid>
              <article class="pt-4">
                <div class="form-group">
                  <span class="d-block form-label">Alamat</span>
                  <span class="d-block value">Jl. Mawar indah blok CC 43, jakarta Selatan</span>
                </div>
                <div class="form-group">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126907.08036858666!2d106.73203906191657!3d-6.283931256097716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1ec2422b0b3%3A0x39a0d0fe47404d02!2sSouth%20Jakarta%2C%20South%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1617249753662!5m2!1sen!2sid" width="" class="w-100" height="180" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
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
  IonCol,
  IonChip,
  IonLabel
} from '@ionic/vue';
import HeaderPage from '@/component/HeaderPage'
import { defineComponent } from 'vue';
import ModalFilterListing from '@/component/ModalFilterListing.vue'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  components: {
    IonContent,
    IonPage,
    HeaderPage,
    IonGrid,
    IonRow,
    IonCol,
    IonChip,
    IonLabel
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
    const router = useRouter();
    return {route, router}
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
    goTo (url) {
      window.location.href = url
    },
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