<template>
  <ion-page class="logged">
    <HeaderPage
      title="Transaksi Listing"
      urlPage=""
      urlText=""
      modalText=""
      backText="Kembali"
      backUrl="/transaction"
      headerClass="header-detail"
      v-on:modalClick="null">
    </HeaderPage>
    <ion-content class="ion-padding min-height-100 ion-no-padding-start ion-no-padding-end pb-200 ">
      <div class="news-detail">
        <ion-grid class="ion-no-padding ion-no-padding-top ion-no-padding-bottom">
          <ion-row>
            <ion-col>

              <span class="pubid d-block">
                INV/2021/XXI/I/733123
              </span>
              <h1 class="title mt-0">
                For sale kemang minimalis private lift & swimming pool
              </h1>
              <img class="feature-img mb-0" :src="`/assets/img-sample${(parseInt(route.params.id))}.jpg`" />
              <article class="pt-4">
                <div class="form-group">
                  <span class="d-block form-label">Publish Date</span>
                  <span class="d-block value">2020-11-05 10:00</span>
                </div>
                <div class="form-group">
                  <span class="d-block form-label">Transaction Date</span>
                  <span class="d-block value">2020-11-05 10:00</span>
                </div>
                <div class="form-group">
                  <span class="d-block form-label">Status</span>
                  <span class="d-block value text-uppercase text-success status text-bold font-weight-bold">Paid</span>
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