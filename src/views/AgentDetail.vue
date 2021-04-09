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
            <img src="/assets/agent-photo.png"/>
          </div>
          <div class="text">
            <span class="name">James Harden</span>
            <span class="email">Professional Real Estate Agent</span>
            <ul class="star-rating mb-20">
              <li class="">
                <ion-icon :icon="star"></ion-icon>
              </li>
              <li class="">
                <ion-icon :icon="star"></ion-icon>
              </li>
              <li class="filled">
                <ion-icon :icon="star"></ion-icon>
              </li>
              <li class="filled">
                <ion-icon :icon="star"></ion-icon>
              </li>
              <li class="filled">
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
                    230
                  </span>
                  <span class="text">
                    Total Listing
                  </span>
                </div>
              </ion-col>
              <ion-col size="6" class="ion-no-padding-top ion-no-padding-bottom text-center">
                <div class="wrap-box">
                  <span class="number">
                    113
                  </span>
                  <span class="text">
                   Terjual / Tersewa
                  </span>
                </div>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="12" class="mt-30 mb-30 text-center">
                <ion-button rel="noreferrer" target="_blank" href="https://wa.me/+6281300998893" size="medium" color="medium mx-auto min-w-300 ion-no-margin">
                  <strong>Chat James</strong>
                  <ion-ripple-effect></ion-ripple-effect>
                </ion-button>
              </ion-col>
            </ion-row>
          </ion-grid>
        </div>
        <ul class="border-top list-award">
            <li class="title text-center">
              Rewards
            </li>
            <li>
              <span class="title-date d-block">2019</span>
              <ul>
                <li>TOP 1 by unit transaction</li>
                <li>TOP 10 by KPR periode 2021</li>
                <li>TOP 3 by Gross Closed Commission periode 2021</li>
              </ul>
            </li>
            <li>
              <span class="title-date d-block">2019</span>
              <ul>
                <li>TOP 1 by unit transaction</li>
                <li>TOP 10 by KPR periode 2021</li>
                <li>TOP 3 by Gross Closed Commission periode 2021</li>
              </ul>
            </li>
            <li>
              <span class="title-date d-block">2019</span>
              <ul>
                <li>TOP 1 by unit transaction</li>
                <li>TOP 10 by KPR periode 2021</li>
                <li>TOP 3 by Gross Closed Commission periode 2021</li>
              </ul>
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
  IonRippleEffect
} from '@ionic/vue';
import HeaderPage from '@/component/HeaderPage'
import { defineComponent } from 'vue';
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
    // IonLabel,
    IonIcon,
    // IonItem,
    IonButton,
    IonRippleEffect
  },
  data: function() {
    return {
      titlePage: 'Agent Detail',
      currentModal: null,
      results: [1,2,3,4,5]
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
  },
  mounted() {
  },
  methods: {
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