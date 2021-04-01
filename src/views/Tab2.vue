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
      <ion-toolbar class="ion-no-padding ios-handled ios">
          <SearchBar
        v-on:searchEnter="getListing"
        searchType="Listing"
        :listResults="results"
        ></SearchBar>
      </ion-toolbar>
    </ion-header>
    <ion-content class="min-height-100 ion-no-padding-start ion-no-padding-end pb-200">
      <div id="container-page-listing">
        <div class="wrap-toggle-slide mb-40">
          <div class="text-center">
            <ion-segment
              mode="ios"
              :value="listingType"
              swipeGesture="true">
              <ion-segment-button value="other" @click="toggleSliderListing('other')">
                <ion-label>Lainnya</ion-label>
              </ion-segment-button>
              <ion-segment-button value="primary" @click="toggleSliderListing('primary')">
                <ion-label>Primary</ion-label>
              </ion-segment-button>
            </ion-segment>
          </div>

          <ListingList
              :result="results"
              classProps=""
              :listingType="listingType"
              ></ListingList>
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
  IonToolbar,
  IonSegment,
  IonLabel,
  IonSegmentButton
} from '@ionic/vue';
import HeaderPage from '@/component/HeaderPage'
import { defineComponent } from 'vue';
import ModalFilterListing from '@/component/ModalFilterListing.vue'
import ListingList from '@/component/ListingList.vue'
import SearchBar from '@/component/SearchBar.vue'

export default defineComponent({
  components: {
    IonContent,
    IonPage,
    HeaderPage,
    ListingList,
    SearchBar,
    IonHeader,
    IonToolbar,
    IonSegment,
    IonLabel,
    IonSegmentButton
  },
  data: function() {
    return {
      titlePage: 'My Listing',
      currentModal: null,
      otherResults: [3,2,1,5,4],
      primaryResults: [1,2,3,4],
      listingType: 'other',
      results: []
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
    this.results = [1,2,3,4,5]
    this.currentModal = null
  },
  created() {
    this.results = [...this.otherResults]
  },
  mounted() {
  },
  watch: {
    listingType: function(val) {
      this.results = val === 'primary' ? [...this.primaryResults] : [...this.otherResults]
    }
  },
  methods: {
    getListing (queryString) {
      queryString ?  this.results = [1] :  this.results = [1,2,3,4,5]
    },
    toggleSliderListing: function(val) {
      this.listingType = val
      console.log(val)
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