<template>
  <ion-page class="logged">
    <HeaderPage
      title="Profile saya"
      urlPage=""
      urlText=""
      modalText=""
      v-on:modalClick="null">
    </HeaderPage>
    <ion-content class="min-height-100 ion-no-padding-start ion-no-padding-end pb-100">
      <div class="my-account">
        <div class="profile-info">
          <div class="thumbnail-photo">
            <img :src="userDetail ? userDetail.profile_picture : '/assets/agent-empty.png'" onerror="this.onerror=null; this.src='/assets/agent-empty.png'"/>
          </div>
          <div class="text">
            <span class="name">
              {{userDetail ? userDetail.display_name : '-name-'}}
            </span>
            <span class="email">Professional Real Estate Agent</span>
            <ul class="star-rating mb-20" v-if="userDetail">
              <li :class="userDetail.rating > 4 ? 'filled' : ''">
                <ion-icon :icon="star"></ion-icon>
              </li>
              <li :class="userDetail.rating > 3 ? 'filled' : ''">
                <ion-icon :icon="star"></ion-icon>
              </li>
              <li :class="userDetail.rating > 2 ? 'filled' : ''">
                <ion-icon :icon="star"></ion-icon>
              </li>
              <li :class="userDetail.rating > 1 ? 'filled' : ''">
                <ion-icon :icon="star"></ion-icon>
              </li>
              <li :class="userDetail.rating > 0 ? 'filled' : ''">
                <ion-icon class="filled" :icon="star"></ion-icon>
              </li>
            </ul>
          </div>
        </div>
        <ion-item mode="md" class="reset-class" :href="urlEditProfile" routerDirection="forward">
          <ion-grid>
            <ion-row>
              <ion-col size="9">
                <ion-label>
                  Ubah Profile
                </ion-label>
              </ion-col>
              <ion-col size="3" class="text-right">
                <ion-icon :icon="chevronForward"></ion-icon>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-item>
        <ion-item mode="md" class="reset-class" href="/coming-soon/reward-saya" routerDirection="forward">
          <ion-grid>
            <ion-row>
              <ion-col size="9">
                <ion-label>
                  Reward Saya
                </ion-label>
              </ion-col>
              <ion-col size="3" class="text-right">
                <ion-icon :icon="chevronForward"></ion-icon>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-item>
        <ion-item mode="md" class="reset-class" href="/coming-soon/transaction-saya"  routerDirection="forward">
          <ion-grid>
            <ion-row>
              <ion-col size="9">
                <ion-label>
                  Transaksi Saya
                </ion-label>
              </ion-col>
              <ion-col size="3" class="text-right">
                <ion-icon :icon="chevronForward"></ion-icon>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-item>
         <ion-item mode="md" class="reset-class" href="/my-listing" routerDirection="forward">
          <ion-grid>
            <ion-row>
              <ion-col size="9">
                <ion-label>
                  Listing Saya
                </ion-label>
              </ion-col>
              <ion-col size="3" class="text-right">
                <ion-icon :icon="chevronForward"></ion-icon>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-item>
         <ion-item mode="md" class="reset-class" href="/coming-soon/point-saya" routerDirection="forward">
          <ion-grid>
            <ion-row>
              <ion-col size="9">
                <ion-label>
                  Point Saya
                </ion-label>
              </ion-col>
              <ion-col size="3" class="text-right">
                <ion-icon :icon="chevronForward"></ion-icon>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-item>
        <div class="text-center button-wrap px-3">
          <ion-button size="medium" color="danger min-w-300 mx-auto ion-no-margin" @click="router.push('/logout')">
            <strong>Keluar</strong>
            <ion-ripple-effect></ion-ripple-effect>
          </ion-button>
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
  IonGrid,
  IonRow,
  IonCol,
  IonLabel,
  IonIcon,
  IonItem,
  IonButton,
  IonRippleEffect
} from '@ionic/vue';
import HeaderPage from '@/component/HeaderPage'
import { defineComponent } from 'vue';
import { getLocal } from '@/services/storage'
import ModalFilterListing from '@/component/ModalFilterListing.vue'
import { chevronForward, star } from 'ionicons/icons'
import { useRouter } from 'vue-router'

export default defineComponent({
  components: {
    IonContent,
    IonPage,
    HeaderPage,
    IonGrid,
    IonRow,
    IonCol,
    IonLabel,
    IonIcon,
    IonItem,
    IonButton,
    IonRippleEffect
  },
  data: function() {
    return {
      titlePage: 'Profile Page',
      currentModal: null,
      results: [1,2,3,4,5],
      userDetail: null
    }
  },
  setup() {
    const router = useRouter();
    return {
      router,
      chevronForward,
      star
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
  created() {
    this.getUserInfo()
  },
  mounted() {
  },
  computed : {
   urlEditProfile: function () {
     return this.userDetail ? `profile/edit/${this.userDetail.id}` : '#'
   }
  },
  methods: {
    getUserInfo: async function () {
      await getLocal('userInfo').then((res)=>{
        if(res) {
          this.userDetail = res.user
        }
      }).catch((err)=>{
        console.log(err)
      })
    },
    goTo(path){
      window.location.href = path
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