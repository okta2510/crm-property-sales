<template>
  <ion-page class="dashboard-page">
    <ion-header class="ion-no-padding ion-no-border">
      <ion-toolbar class="ion-no-padding">
        <div class="header ion-padding-start ion-padding-end ion-padding-top ion-padding-bottom">
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
      </ion-toolbar>
    </ion-header>
    <ion-content class="min-height-100 ion-no-padding-start ion-no-padding-end pb-200 ios">
      <!-- <div id="container-page-dashboard"> -->
        <ion-toolbar class="toolbar-search-dashboard">
          <div class="search-dashboard ion-padding ion-no-padding-top">
            <div class="input-search input-icon-left">
                <ion-icon :icon="search"></ion-icon>
                <input type="text" v-model="queryString" v-on:keyup="searchingQuery" placeholder="Ketik Pencarian...">
            </div>
          </div>
        </ion-toolbar>
        
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

          <ion-grid class="ion-padding-start ion-padding-end card-header-info">
            <ion-row class="ion-align-items-center">
              <ion-col class="ion-no-padding">
                <h3 class="my-0 title">Listing {{listingType === 'primary' ? 'Primary' : 'Lainnya'}}</h3>
              </ion-col>
              <ion-col class="ion-no-padding text-right">
                <span @click="router.replace('/tab2')" class="seeMore">Lihat Semua</span>
              </ion-col>
            </ion-row>
          </ion-grid>

          <ListingList
              :result="listingType === 'primary' ? primaryResults : otherResults"
              classProps=""
              :listingType="listingType"
              ></ListingList>
              
          <!-- <ion-slides v-show="listingType === 'primary'" class="slider-listing ion-margin-bottom" pager="true" mode="ios" :options="slideOpts">
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
          </ion-slides>  -->
        </div>

        <div class="wrap-card-news">
          <ion-grid class="ion-padding-start ion-padding-end card-header-info">
            <ion-row class="ion-align-items-center">
              <ion-col class="ion-no-padding">
                <h3 class="my-0 title">Berita Properti</h3>
              </ion-col>
              <ion-col class="ion-no-padding text-right">
                <span @click="router.replace('/berita')" class="seeMore">Lihat Semua</span>
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
      <!-- </div> -->

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
  IonSegmentButton,
  IonHeader
} from '@ionic/vue';
import { defineComponent } from 'vue';
import {
  search,
  notificationsOutline
} from 'ionicons/icons';
import ModalNotification from '@/component/ModalNotification.vue'
import ListingList from '@/component/ListingList.vue'
import NewsDashboardCard from '@/component/NewsDashboardCard.vue'
import { useRouter } from 'vue-router'

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
    ListingList,
    NewsDashboardCard,
    IonHeader
  },
  data: function () {
    return {
      queryString: null,
      primaryResults: [1,2,3,4,5],
      otherResults: [3,2,1,5,4],
      listingType: 'other'
    }
  },
  setup() {
    // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
    const router = useRouter();
    const slideOpts = {
      initialSlide: 0,
      speed: 400,
       autoplay: {
        delay: 5000
      }
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
      notificationsOutline,
      router
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