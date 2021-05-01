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
              <div class="btn-notification cursor-pointer" @click="openModal">
                  <ion-icon :icon="notificationsOutline"></ion-icon>
                  <ion-badge color="danger" v-if="countNotif && countNotif.unread > 0">
                    {{countNotif.unread || 0}}
                  </ion-badge>
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
        
        <ion-slides v-if="bannerList && bannerList.length > 0" class="slider-feature mb-4" pager="false" mode="ios" :options="slideFeatureOpts">
          <ion-slide v-for="(item, index_banner) in bannerList" :key="index_banner">
            <img :src="item.banner || 'assets/empty-image-slider.jpg'"/>
          </ion-slide>
        </ion-slides>

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

          <ion-grid class="ion-padding-start ion-padding-end card-header-info">
            <ion-row class="ion-align-items-center">
              <ion-col class="ion-no-padding">
                <h3 class="my-0 title">Listing {{listingType === 'primary' ? 'Primary' : 'Secondary'}}</h3>
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

        <div class="wrap-card-news" v-if="articleList && articleList.length > 0">
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
          <ion-slides v-if="articleList && articleList.length > 0" class="slider-listing ion-margin-bottom" pager="true" mode="ios" :options="slideOpts">
            <ion-slide
            v-for="(item, index_news) in articleList"
            :key="index_news">
              <NewsDashboardCard
              :detail="item"
              classProps=""
              ></NewsDashboardCard>
            </ion-slide>
          </ion-slides> 
          <div v-else class="text-center component-empty">
            <span class="content">- Data Kosong -</span>
          </div>
        </div>
      <!-- </div> -->

    </ion-content>
  </ion-page>
</template>

<script>
import axios from 'axios';
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
import { getLocal } from '@/services/storage'


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
      primaryResults: [],
      otherResults: [],
      articleList: [],
      bannerList: [],
      countNotif: null,
      listingType: 'other',
      userToken: null,
      timeOut: null
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
  computed: {
     API_HOST: function () {
      return 'http://54.179.9.67:8000/api/v1/consumer'
    },
    API_BANNER: function () {
      return this.API_HOST+'/article/banner'
    },
    API_NEWS: function () {
      return this.API_HOST+'/article/list'
    },
    API_SECONDARY: function () {
      return this.API_HOST+'/listing/secondary'
    },
    API_PRIMARY: function () {
      return this.API_HOST+'/listing/primary'
    },
    API_NOTIF_COUNT: function () {
      return this.API_HOST+'/notification/user/counter'
    }
  },
  created: async function () {
    await this.getUserInfo()
    this.getArticles()
    this.getListing()
    this.getBanner()
    this.getCount()
  },
  ionViewWillEnter() {
  },
  ionViewWillLeave() {
  },
  ionViewDidEnter() {
  },
  ionViewDidLeave() {
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
    // logScrollStart: function() {
    //    console.log('start scroll')
    // },
    // logScrollEnd: function() {
    //   console.log('end scroll')
    // },
    // logScrolling: function(val) {
    //   console.log(val)
    // },
    toggleSliderListing: function(val) {
      this.listingType = val
      console.log(val)
    },
    searchingQuery: function () {
      let self = this
      clearTimeout(this.timeOut)
      this.timeOut =  setTimeout(function() {
        window.location = `/tab2?search=${self.queryString}`;
      }, 1500)
    },
    getBanner: function () {
      let self = this
      axios.get(this.API_BANNER,{
         headers: {
          'Accept': "application/json",
          'Authorization': 'PIINTU '+ self.userToken

        },
        mode:"cors"
      }).then(response => {
        self.bannerList = response.data
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
    getArticles: function () {
      let self = this
      axios.get(this.API_NEWS,{
         headers: {
          'Accept': "application/json",
          'Authorization': 'PIINTU '+ self.userToken

        },
        mode:"cors"
      }).then(response => {
        self.articleList = response.data.results
      }).catch(function (err) {
        console.log(err)
      })
    },
    getCount: function () {
      let self = this
      axios.get(this.API_NOTIF_COUNT,{
         headers: {
          'Accept': "application/json",
          'Authorization': 'PIINTU '+ self.userToken

        },
        mode:"cors"
      }).then(response => {
        self.countNotif = response.data.results
      }).catch(function (err) {
        console.log(err)
      })
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
      if (this.countNotif && this.countNotif.unread > 0) {
        this.getCount()
      }
    }
  }
});
</script>

<style scoped>
</style>