<template>
  <ion-page class="logged">
    <HeaderPage
      title="Berita Properti"
      urlPage=""
      urlText=""
      modalText=""
      backText="Kembali"
      backUrl="/dashboard"
      v-on:modalClick="null">
    </HeaderPage>
    <ion-header class="ion-no-padding">
      <ion-toolbar class="bg-grey ion-no-padding">
          <SearchBar
        v-on:searchEnter="getNews"
        searchType="Berita"
        :listResults="results"
        ></SearchBar>
      </ion-toolbar>
    </ion-header>
    <ion-content class="bg-grey min-height-100 ion-no-padding-start ion-no-padding-end pb-200">
        <NewsCard
          :listResults="results"
          classProps="bg-grey"
          ></NewsCard>
        <div class="component-popular-news mb-set">
          <div class="ion-padding-start ion-padding-end">
            <h3 class="mt-0 mb-0">Artikel Terpopuler</h3>
          </div>
          <ul>
            <li v-for="(item, index) in results" :key="index" class="item">
              <a :href="`/berita/${item}`">
                <span class="d-block w-100 date">
                2020-11-05 10:00
                </span>
                <span class="d-block w-100 title">
                  Termurah di jatiasih, bisa cicil 24x dengan bunga yang fantastis
                </span>
              </a>
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
  IonHeader,
  IonToolbar,
  // IonItem
} from '@ionic/vue';
import HeaderPage from '@/component/HeaderPage'
import { defineComponent } from 'vue';
import ModalFilterListing from '@/component/ModalFilterListing.vue'
import NewsCard from '@/component/NewsCard.vue'
import SearchBar from '@/component/SearchBar.vue'

export default defineComponent({
  components: {
    IonContent,
    IonPage,
    HeaderPage,
    NewsCard,
    SearchBar,
    IonHeader,
    IonToolbar,
    // IonItem
  },
  data: function() {
    return {
      titlePage: 'My Listing',
      currentModal: null,
      results: [1,2,3,4,5]
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
    this.results = [1,2,3,4,5]
    this.currentModal = null
  },
  created() {
  },
  mounted() {
  },
  methods: {
    getNews (queryString) {
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