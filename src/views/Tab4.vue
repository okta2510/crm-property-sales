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
            <img src="/assets/user-profile.png"/>
          </div>
          <div class="text">
            <span class="name">Budi Handoko</span>
            <span class="email">Professional Real Estate Agent</span>
          </div>
        </div>
        <ion-item mode="md" class="reset-class" href="/profile/edit" routerDirection="forward">
          <ion-grid>
            <ion-row>
              <ion-col size="9">
                <ion-label>
                  Edit Profile
                </ion-label>
              </ion-col>
              <ion-col size="3" class="text-right">
                <ion-icon :icon="chevronForward"></ion-icon>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-item>
        <ion-item mode="md" class="reset-class" href="#" routerDirection="forward">
          <ion-grid>
            <ion-row>
              <ion-col size="9">
                <ion-label>
                  Rewards Saya
                </ion-label>
              </ion-col>
              <ion-col size="3" class="text-right">
                <ion-icon :icon="chevronForward"></ion-icon>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-item>
        <ion-item mode="md" class="reset-class" href="/transaction" routerDirection="forward">
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
         <ion-item mode="md" class="reset-class" href="/tab2" routerDirection="forward">
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
         <ion-item mode="md" class="reset-class" href="#" routerDirection="forward">
          <ion-grid>
            <ion-row>
              <ion-col size="9">
                <ion-label>
                  Points Saya
                </ion-label>
              </ion-col>
              <ion-col size="3" class="text-right">
                <ion-icon :icon="chevronForward"></ion-icon>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-item>
        <div class="text-center button-wrap px-3">
          <ion-button color="danger w-100 ion-no-margin" @click="router.push('/logout')">
            Keluar
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
  IonButton
} from '@ionic/vue';
import HeaderPage from '@/component/HeaderPage'
import { defineComponent } from 'vue';
import ModalFilterListing from '@/component/ModalFilterListing.vue'
import { chevronForward } from 'ionicons/icons'
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
    IonButton
  },
  data: function() {
    return {
      titlePage: 'My Listing',
      currentModal: null,
      results: [1,2,3,4,5]
    }
  },
  setup() {
    const router = useRouter();
    return {
      router,
      chevronForward
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