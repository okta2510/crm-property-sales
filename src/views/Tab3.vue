<template>
  <ion-page class="logged">
    <HeaderPage
      title="Marketing Tools"
      urlPage=""
      urlText=""
      modalText=""
      v-on:modalClick="closeModal">
    </HeaderPage>
    <ion-content class="ion-padding min-height-100 ion-no-padding-start ion-no-padding-end pb-100">
      <div id="container-page2">
        <div class="px-3">
          <ion-button color="medium" class="w-100" @click="router.push('/marketing/add')">
            Pesan Baru
          </ion-button>
        </div>
        <MarketingItems
        :result="results"
        classProps=""
        ></MarketingItems>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { 
  IonContent,
  IonPage,
  modalController,
} from '@ionic/vue';
import HeaderPage from '@/component/HeaderPage'
import { defineComponent } from 'vue';
import ModalFilterListing from '@/component/ModalFilterListing.vue'
import MarketingItems from '@/component/MarketingItems.vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  components: {
    IonContent,
    IonPage,
    HeaderPage,
    MarketingItems,
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
      router
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