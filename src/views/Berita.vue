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
      <ion-toolbar class="bg-grey ion-no-padding ios-handled ios">
          <SearchBar
        v-on:searchEnter="onUpdateParams"
        searchType="Berita"
        :listResults="articles.results"
        ></SearchBar>
      </ion-toolbar>
    </ion-header>
    <ion-content class="bg-grey min-height-100 ion-no-padding-start ion-no-padding-end pb-200">
        <KeepAlive>
          <NewsCard
          :listResults="articles.results"
          classProps="bg-grey"
          ></NewsCard>
        </KeepAlive>
        <div class="text-center mt-20" v-if="articles && articles.next">
            <ion-button color="medium" size="medium" class="min-w-300 mx-auto" @click="nextPage">
              <strong>Muat Lebih</strong>
            </ion-button>
          </div>
        <div class="component-popular-news mb-set">
          <div class="ion-padding-start ion-padding-end">
            <h3 class="mt-0 mb-0">Artikel Terpopuler</h3>
          </div>
          <ul>
            <li v-for="(item, index) in articles.results" :key="index" class="item">
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
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router'
import { 
  IonContent,
  IonPage,
  modalController,
  IonHeader,
  IonToolbar,
  IonButton
  // IonItem
} from '@ionic/vue';
import HeaderPage from '@/component/HeaderPage'
import { defineComponent, KeepAlive } from 'vue';
import ModalFilterListing from '@/component/ModalFilterListing.vue'
import NewsCard from '@/component/NewsCard.vue'
import SearchBar from '@/component/SearchBar.vue'
import { getLocal } from '@/services/storage'

export default defineComponent({
  components: {
    IonContent,
    IonPage,
    HeaderPage,
    NewsCard,
    SearchBar,
    IonHeader,
    IonToolbar,
    KeepAlive,
    IonButton
    // IonItem
  },
  data: function() {
    return {
      titlePage: 'My Listing',
      currentModal: null,
      articles: {},
      params: {
        size: 10,
        sort: 'created',
        pagination: 1,
        order: 'desc'
      }
    }
  },
  setup() {
    const route = useRoute()
    const router = useRouter()

    return {
      route,
      router
    }
  },
  computed: {
    API_HOST: function () {
      return 'http://54.179.9.67:8000/api/v1/consumer'
    },
    API_NEWS: function () {
      return this.API_HOST+'/article/list'
    }
  },
  ionViewWillEnter() {
  },
  ionViewWillLeave() {
  },
  ionViewDidEnter() {
  },
  ionViewDidLeave() {
    this.articles = []
    this.currentModal = null
  },
  created: async function () {
    await this.getUserInfo()
    this.getArticles(this.params)
    this.refreshQuery()
    // this.selectedList = [...this.otherResults]Z
  },
  beforeUpdate: function () {
    if (Object.keys(this.route.query).length === 0) {
      this.refreshQuery()
    }
  },
  mounted() {
  },
  methods: {
    nextPage: function () {
      this.articles.next = 2
      if (this.articles.next) {
        this.router.push({
          query: {...this.params, ...{
            pagination: this.articles.next
          }}
        })
        this.getArticles(this.route.query)
      }
    },
    onUpdateParams: function (obj) {
      if(Object.keys(obj).length > 0) {
        let newParams = {...this.route.query, ...obj}
        this.router.push({
          query: newParams
        })
        this.getArticles(newParams, true)
      }
    },
    refreshQuery: function () {
      this.router.push({
        query: this.params
      })
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
    },
    getArticles (params, filterChanged = false) {
      let self = this
      axios.get(this.API_NEWS,{
         headers: {
          'Accept': "application/json",
          'Authorization': 'PIINTU '+ self.userToken
        },
        'params': params,
        mode:"cors"
      }).then(response => {
        if (self.route.query.pagination == 1 || filterChanged) {
          self.articles = response.data
        } else {
          let newResults = {...response.data}
          newResults.results = [...self.articles.results, ...newResults.results]
          console.log(newResults)
          self.articles = newResults
        }
      }).catch(function (err) {
        console.log(err)
      })
    }
  }
});
</script>
<style  scoped>

</style>