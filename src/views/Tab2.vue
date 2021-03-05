<template>
  <ion-page class="logged">
    <HeaderPage
      title="Listing Saya"
      urlPage=""
      urlText=""
      modalText="Filter"
      v-on:modalClick="openModal">
    </HeaderPage>
    <ion-header class="ion-no-padding">
      <ion-toolbar class="bg-grey ion-no-padding">
          <SearchBar
        v-on:searchEnter="getListing"
        searchType="Listing"
        :listResults="results"
        ></SearchBar>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding bg-grey" :fullscreen="true">
      <div id="container-page-listing">
        <ListingCard
        :listResults="results"
        classProps="bg-grey"
        ></ListingCard>
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
import ModalFilterListing from '@/component/ModalFilterListing.vue'
import ListingCard from '@/component/ListingCard.vue'
import SearchBar from '@/component/SearchBar.vue'

export default defineComponent({
  components: {
    IonContent,
    IonPage,
    HeaderPage,
    ListingCard,
    SearchBar,
    IonHeader,
    IonToolbar
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