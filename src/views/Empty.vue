<template>
  <ion-page class="logged">
    <HeaderPage
      :title="titlePage"
      urlPage=""
      urlText=""
      modalText=""
      backText="Kembali"
      backUrl="/tab4"
      v-on:modalClick="null">
    </HeaderPage>
    <ion-header class="ion-no-padding">
      <ion-toolbar class="ion-no-padding bg-grey">
          <SearchBar
        v-on:searchEnter="getListing"
        searchType="Results"
        :disabled="true"
        :listResults="results"
        classProps=""
        ></SearchBar>
      </ion-toolbar>
    </ion-header>
    <ion-content class="min-height-100 ion-no-padding-start ion-no-padding-end pb-200">
      <div id="container-page-transaction">
        <div class="wrap-list-transactions">
          <div class="text-center component-empty">
            <span class="content">- Coming Soon -</span>
          </div>
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
  IonHeader,
  IonToolbar
} from '@ionic/vue';
import HeaderPage from '@/component/HeaderPage'
import { defineComponent } from 'vue';
import ModalFilterTransaction from '@/component/ModalFilterTransaction.vue'
import SearchBar from '@/component/SearchBar.vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  components: {
    IonContent,
    IonPage,
    HeaderPage,
    SearchBar,
    IonHeader,
    IonToolbar
  },
  data: function() {
    return {
    }
  },
  setup() {
    const route = useRoute();
    return {route}
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
  computed: {
    titlePage: function () {
      console.log(this.route.params)
      return this.route.params.title.replace('-', ' ')
    }
  },
  methods: {
    getListing (queryString) {
      queryString ?  this.results = [1] :  this.results = [1,2,3,4,5]
    },
    async openModal() {
      const modal = await modalController
        .create({
          component: ModalFilterTransaction,
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