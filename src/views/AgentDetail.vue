<template>
  <ion-page class="logged">
    <HeaderPage
      title="Profil Agent"
      urlPage=""
      urlText=""
      modalText=""
      backText="Kembali"
      backUrl="/tab2"
      headerClass="header-detail no-shadow border-bottom"
      v-on:modalClick="null">
    </HeaderPage>
    <ion-content class="min-height-100 ion-no-padding-start ion-no-padding-end pb-100">
      <div class="my-account">
        <div class="profile-info">
          <div class="thumbnail-photo">
            <img :src="detailInfo ? detailInfo.profile_picture : '/assets/agent-empty.png'"/>
          </div>
          <div class="text">
            <span class="name">
              {{detailInfo.display_name || '-'}}
            </span>
            <span class="email">Professional Real Estate Agent</span>
            <ul class="star-rating mb-20" v-if="detailInfo">
              <li :class="detailInfo.rating > 4 ? 'filled' : ''">
                <ion-icon :icon="star"></ion-icon>
              </li>
              <li :class="detailInfo.rating > 3 ? 'filled' : ''">
                <ion-icon :icon="star"></ion-icon>
              </li>
              <li :class="detailInfo.rating > 2 ? 'filled' : ''">
                <ion-icon :icon="star"></ion-icon>
              </li>
              <li :class="detailInfo.rating > 1 ? 'filled' : ''">
                <ion-icon :icon="star"></ion-icon>
              </li>
              <li :class="detailInfo.rating > 0 ? 'filled' : ''">
                <ion-icon class="filled" :icon="star"></ion-icon>
              </li>
            </ul>
          </div>
        </div>

        <div class="agent-records">
          <ion-grid class="ion-no-padding">
            <ion-row class="info-records">
              <ion-col size="6" class="ion-no-padding-top ion-no-padding-bottom text-center">
                <div class="wrap-box">
                  <span class="number">
                    <PrintValue :value="detailInfo.total_listing" />
                  </span>
                  <span class="text">
                    Total Listing
                  </span>
                </div>
              </ion-col>
              <ion-col size="6" class="ion-no-padding-top ion-no-padding-bottom text-center">
                <div class="wrap-box">
                  <span class="number">
                    <PrintValue :value="detailInfo.total_sold" />
                  </span>
                  <span class="text">
                   Terjual / Tersewa
                  </span>
                </div>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="12" class="mt-30 mb-30 text-center">
                <ion-button target="_blank" href="https://api.whatsapp.com/send?phone=+6281280029291" size="medium" color="medium mx-auto min-w-300 ion-no-margin">
                  <strong>Chat James</strong>
                  <ion-ripple-effect></ion-ripple-effect>
                </ion-button>
              </ion-col>
            </ion-row>
          </ion-grid>
        </div>
        <ul class="border-top list-award" v-if="detailInfo && detailInfo.awards">
            <li class="title text-center">
              Rewards
            </li>
            <li v-for="(item, index) in detailInfo.awards" :key="index">
              <span class="title-date d-block">
                {{item.year}}
              </span>
              <ul v-for="(list, index2) in item.entries" :key="index2">
                <li>
                  {{list}}
                </li>
              </ul>
            </li>
            <li v-if="detailInfo.awards.length <= 0">
              <div class="text-center component-empty">
                <span class="content">- Data Kosong -</span>
              </div>
            </li>
          </ul>
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
  // IonLabel,
  IonIcon,
  // IonItem,
  IonButton,
  IonRippleEffect,
  toastController
} from '@ionic/vue';
import HeaderPage from '@/component/HeaderPage'
import { defineComponent } from 'vue';
import ModalFilterListing from '@/component/ModalFilterListing.vue'
import PrintValue from '@/component/PrintValue.vue'
import { chevronForward, star } from 'ionicons/icons'
import { useRoute } from 'vue-router'
import { getLocal } from '@/services/storage'
import axios from 'axios';

export default defineComponent({
  components: {
    IonContent,
    IonPage,
    HeaderPage,
    IonGrid,
    IonRow,
    IonCol,
    // IonLabel,
    IonIcon,
    // IonItem,
    IonButton,
    IonRippleEffect,
    PrintValue
  },
  data: function() {
    return {
      titlePage: 'Agent Detail',
      currentModal: null,
      detailInfo: {}
    }
  },
  setup() {
    const route = useRoute();
    return {
      route,
      chevronForward,
      star
    }
  },
  computed: {
    API_HOST: function () {
      return 'http://54.179.9.67:8000/api/v1/consumer'
    },
    API_DETAIL: function () {
      return this.API_HOST+'/member/agent/list/'+this.route.params.id
    }
  },
  ionViewWillEnter() {
  },
  ionViewWillLeave() {
  },
  ionViewDidEnter() {
  },
  ionViewDidLeave() {
  },
  created: async function () {
     await this.getUserInfo()
     this.getDetail()
  },
  mounted() {
  },
  methods: {
    async openToast(message='empty toast', duration=2000, color='default', position='bottom') {
        let toast = await toastController
          .create({
            message: message,
            duration: duration,
            animated: true,
            cssClass: 'custom-toast',
            color: color,
            position: position
          })
        toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
      return toast.present();
    },
    goTo(path){
      window.location.href = path
    },
    getUserInfo: async function () {
      await getLocal('userInfo').then((res)=>{
        if(res) {
          this.userToken = res.token
        }
      }).catch((err)=>{
        console.log(err)
      })
    },
    getDetail: function () {
      let self = this
      axios.get(this.API_DETAIL,{
         headers: {
          'Accept': "application/json",
          'Authorization': 'PIINTU '+ self.userToken

        },
        mode:"cors"
      }).then(response => {
        self.detailInfo = response.data
      }).catch(function (err) {
        console.log(err)
      })
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