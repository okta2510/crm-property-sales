<template>
  <ion-page class="logged">
    <HeaderPage
      title="Transaksi Saya"
      urlPage=""
      urlText=""
      modalText="Filter"
      backText="Kembali"
      backUrl="/dashboard"
      v-on:modalClick="openModal">
    </HeaderPage>
    <ion-header class="ion-no-padding">
      <ion-toolbar class="ion-no-padding bg-grey">
          <SearchBar
        v-on:searchEnter="getListing"
        searchType="Transaksi"
        :listResults="results"
        classProps=""
        ></SearchBar>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding" :fullscreen="true">
      <div id="container-page-transaction">
        <div class="wrap-list-transactions">
          <TransactionItems
          :result="results"
          classProps=""
          ></TransactionItems>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { 
  IonContent,
  IonPage,
  modalController,
  IonHeader,
  IonToolbar
} from '@ionic/vue';
import HeaderPage from '@/component/HeaderPage'
import { defineComponent } from 'vue';
import ModalFilterTransaction from '@/component/ModalFilterTransaction.vue'
import SearchBar from '@/component/SearchBar.vue'
import TransactionItems from '@/component/TransactionItems.vue'

export default defineComponent({
  components: {
    IonContent,
    IonPage,
    HeaderPage,
    SearchBar,
    IonHeader,
    IonToolbar,
    TransactionItems
  },
  data: function() {
    return {
      titlePage: 'My Listing',
      currentModal: null,
      results: [1,2,3,4,5]
    }
  },
  setup() {
    return {}
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
          component: ModalFilterTransaction,
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