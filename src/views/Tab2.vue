<template>
  <ion-page class="logged">
    <HeaderPage
      title="Semua Listing"
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
                <ion-label>Secondary</ion-label>
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
import axios from 'axios';
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
import { getLocal } from '@/services/storage'

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
      otherResults: [],
      primaryResults: [],
      listingType: 'other',
      results: []
    }
  },
  computed: {
    API_HOST: function () {
      return 'http://54.179.9.67:8000/api/v1/consumer'
    },
    API_SECONDARY: function () {
      return this.API_HOST+'/listing/secondary'
    },
    API_PRIMARY: function () {
      return this.API_HOST+'/listing/primary'
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
    this.results =  this.listingType === 'primary' ? [...this.primaryResults] : [...this.otherResults]
    this.currentModal = null
  },
  created: async function () {
    await this.getUserInfo()
    // this.results = [...this.otherResults]
    this.getListing()
  },
  mounted() {
  },
  watch: {
    listingType: function(val) {
      this.results = val === 'primary' ? [...this.primaryResults] : [...this.otherResults]
    }
  },
  methods: {
    getUserInfo: async function () {
      await getLocal('userInfo').then((res)=>{
        if(res) {
          this.userToken = res.token
        }
      }).catch((err)=>{
        console.log(err)
      })
    },
    getListing: function () {
      let self = this
      axios.get(this.API_SECONDARY,{
         headers: {
          'Accept': "application/json",
          'Authorization': 'PIINTU '+ self.userToken

        },
        mode:"cors"
      }).then(response => {
        self.otherResults = response.data.results
        self.results = self.otherResults
      }).catch(function (err) {
        console.log(err)
      })

      axios.get(this.API_PRIMARY,{
         headers: {
          'Accept': "application/json",
          'Authorization': 'PIINTU '+ self.userToken

        },
        mode:"cors"
      }).then(response => {
        self.primaryResults = response.data.results
      }).catch(function (err) {
        console.log(err)
      })
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