<template>
  <ion-page class="dashboard-page">
    <ion-content :fullscreen="true">
      <div class="header ion-padding-start ion-padding-end ion-padding-top">
        <ion-grid class="ion-no-padding">
          <ion-row class="ion-align-items-center">
            <ion-col>
              <img src="/assets/logo-logged.svg" />
            </ion-col>
            <ion-col class="text-right">
             <div class="btn-notification" @click="openModal">
                <ion-icon :icon="notificationsOutline"></ion-icon>
                <ion-badge color="danger">2</ion-badge>
              </div>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
      <ion-toolbar class="toolbar-search-dashboard">
        <div class="search-dashboard ion-padding">
          <div class="input-search input-icon-left">
              <ion-icon :icon="search"></ion-icon>
              <input type="text" v-model="queryString" v-on:keyup="searchingQuery" placeholder="Ketik Pencarian...">
          </div>
        </div>
      </ion-toolbar>
      <div id="container">
        <ion-slides class="slider-feature mb-4" pager="false" mode="ios" :options="slideFeatureOpts">
          <ion-slide>
            <img src="/assets/slider-sample1.jpg"/>
          </ion-slide>
          <ion-slide>
            <img src="/assets/slider-sample2.jpg"/>
          </ion-slide>
          <ion-slide>
            <img src="/assets/slider-sample3.jpg"/>
          </ion-slide>
        </ion-slides>

        <div class="wrap-toggle-slide">
          <div class="text-center">
            <ion-segment
              mode="ios"
              value="primary"
              swipeGesture="true">
              <ion-segment-button value="primary" @click="toggleSliderListing('primary')">
                <ion-label>Primary</ion-label>
              </ion-segment-button>
              <ion-segment-button value="other" @click="toggleSliderListing('other')">
                <ion-label>Lainnya</ion-label>
              </ion-segment-button>
            </ion-segment>
          </div>

          <ion-grid class="ion-padding-start ion-padding-end card-header-info">
            <ion-row class="ion-align-items-center">
              <ion-col class="ion-no-padding">
                <h3 class="my-0 title">Listing {{listingType === 'primary' ? 'Primary' : 'Lainnya'}}</h3>
              </ion-col>
              <ion-col class="ion-no-padding text-right">
                <a href="#" class="seeMore">Lihat Semua</a>
              </ion-col>
            </ion-row>
          </ion-grid>

          <ion-slides v-if="listingType === 'primary'" class="slider-listing ion-margin-bottom" pager="true" mode="ios" :options="slideOpts">
            <ion-slide
            v-for="(item, index) in primaryResults"
            :key="index">
              <ListingDashboardCard
              :detail="item"
              classProps=""
              ></ListingDashboardCard>
            </ion-slide>
          </ion-slides> 

         <ion-slides v-else class="slider-listing ion-margin-bottom" pager="true" mode="ios" :options="slideOpts">
            <ion-slide
            v-for="(item, index) in otherResults"
            :key="index">
              <ListingDashboardCard
              :detail="item"
              classProps=""
              ></ListingDashboardCard>
            </ion-slide>
          </ion-slides> 
        </div>

        <div class="wrap-card-news">
          <ion-grid class="ion-padding-start ion-padding-end card-header-info">
            <ion-row class="ion-align-items-center">
              <ion-col class="ion-no-padding">
                <h3 class="my-0 title">Berita Properti</h3>
              </ion-col>
              <ion-col class="ion-no-padding text-right">
                <a href="#" class="seeMore">Lihat Semua</a>
              </ion-col>
            </ion-row>
          </ion-grid>
          <ion-slides class="slider-listing ion-margin-bottom" pager="true" mode="ios" :options="slideOpts">
            <ion-slide
            v-for="(item, index) in otherResults"
            :key="index">
              <NewsDashboardCard
              :detail="item"
              classProps=""
              ></NewsDashboardCard>
            </ion-slide>
          </ion-slides> 
        </div>
      </div>

      <div class="wrap-list-transactions">
        <ion-grid class="ion-padding-start ion-padding-end card-header-info">
          <ion-row class="ion-align-items-center">
            <ion-col class="ion-no-padding">
              <h3 class="my-0 title">Transaksi Saya</h3>
            </ion-col>
            <ion-col class="ion-no-padding text-right">
              <a href="#" class="seeMore">Lihat Semua</a>
            </ion-col>
          </ion-row>
        </ion-grid>
        <TransactionItems
        :result="transactions"
        classProps=""
        ></TransactionItems>
      </div>

    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonContent,
  IonPage,
  IonSlides,
  IonSlide,
  IonGrid,
  IonCol,
  IonRow,
  IonIcon,
  IonBadge,
  IonToolbar,
  modalController,
  IonLabel,
  IonSegment,
  IonSegmentButton
} from '@ionic/vue';
import { defineComponent } from 'vue';
import {
  search,
  notificationsOutline
} from 'ionicons/icons';
import ModalNotification from '@/component/ModalNotification.vue'
import ListingDashboardCard from '@/component/ListingDashboardCard.vue'
import NewsDashboardCard from '@/component/NewsDashboardCard.vue'
import TransactionItems from '@/component/TransactionItems.vue'

export default defineComponent({
  name: 'Dashboard',
  components: {
    IonContent,
    IonPage,
    IonSlides,
    IonSlide,
    IonGrid,
    IonCol,
    IonRow,
    IonToolbar,
    IonIcon,
    IonBadge,
    IonLabel,
    IonSegment,
    IonSegmentButton,
    ListingDashboardCard,
    NewsDashboardCard,
    TransactionItems
  },
  data: function () {
    return {
      queryString: null,
      primaryResults: [1,2,3,4,5],
      otherResults: [3,2,1,5,4],
      transactions: [1,2,3,4,5],
      listingType: 'primary'
    }
  },
  setup() {
    // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
    const slideOpts = {
      initialSlide: 0,
      speed: 400
    };
    const slideFeatureOpts = {
      initialSlide: 0,
      speed: 400,
      lazy: true,
      autoplay: {
        delay: 5000
      }
    }
    return {
      slideOpts,
      slideFeatureOpts,
      search,
      notificationsOutline
    }
  },
  created() {
  },
  methods: {
    logScrollStart: function() {
       console.log('start scroll')
    },
    logScrollEnd: function() {
      console.log('end scroll')
    },
    logScrolling: function(val) {
      console.log(val)
    },
    toggleSliderListing: function(val) {
      this.listingType = val
      console.log(val)
    },
    searchingQuery: function () {
      //searching
    },
    async openModal() {
      const modal = await modalController
        .create({
          component: ModalNotification,
          cssClass: 'modal-component modal-notification',
          swipeToClose: true,
          showBackdrop: true,
          mode: 'ios',
          backdropDismiss: true,
          animated: true,
          componentProps: {
            title: 'Notifikasi',
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

<style scoped>
</style>