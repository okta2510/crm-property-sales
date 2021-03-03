<template>
  <div>
    <ion-page id="main-content">
      <!-- <HeaderPage
      title="My Listing"
      v-on:modalClick="openModal">
      </HeaderPage> -->
      <ion-content :fullscreen="true">
        <div class="py-30">
          <div class="wrap-search wrap-content">
            <input type="text">
          </div>
          <div class="wrap-listing wrap-content mx-0">
            <!-- <ion-card>
              <img src="/assets/madison.jpg" />
              <ion-card-header>
                <ion-card-subtitle>Destination</ion-card-subtitle>
                <ion-card-title>Madison, WI</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.
              </ion-card-content>
            </ion-card> -->
          </div>
        </div>
      </ion-content>
    </ion-page>
    <!-- <SideMenu></SideMenu> -->
  </div>
</template>

<script>
import { IonContent, IonPage, 
// IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, 
// modalController
} from '@ionic/vue';
import { defineComponent } from 'vue';
// import SideMenu from '@/component/SideMenu'
// import HeaderPage from '@/component/HeaderPage'
// import ModalFilterListing from '@/component/ModalFilterListing.vue'


export default defineComponent({
  components: {
    IonContent, IonPage, 
    // IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent,
    // SideMenu, HeaderPage
  },
  data: function() {
    return {
      titlePage: 'My Listing',
      currentModal: null
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
    // async openModal() {
    //   const modal = await modalController
    //     .create({
    //       component: ModalFilterListing,
    //       cssClass: 'my-custom-class',
    //       swipeToClose: true,
    //       showBackdrop: true,
    //       mode: 'ios',
    //       backdropDismiss: true,
    //       animated: true,
    //       componentProps: {
    //         title: 'Filter Listing',
    //         closeAction: this.closeModal
    //       },
    //     })
    //   this.currentModal = modal
    //   return modal.present();
    // },
    // closeModal() {
    //   this.currentModal.dismiss()
    // }
  }
});
</script>

<style  scoped>
</style>