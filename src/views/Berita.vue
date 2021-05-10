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
            <li v-for="(item, index) in popular.results" :key="index" class="item">
              <a :href="`/berita/${item.id}`">
                <span class="d-block w-100 date">
                {{formattingDate(item.created, 'YYYY-MM-DD HH:mm')}}
                </span>
                <span class="d-block w-100 title">
                  {{item.title}}
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
  IonHeader,
  IonToolbar,
  IonButton,
  toastController
  // IonItem
} from '@ionic/vue';
import HeaderPage from '@/component/HeaderPage'
import { defineComponent, KeepAlive } from 'vue';
import NewsCard from '@/component/NewsCard.vue'
import SearchBar from '@/component/SearchBar.vue'
import { getLocal } from '@/services/storage'
import moment from 'moment';

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
      popular: {},
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
    },
    API_POPULAR: function () {
      return this.API_HOST+'/article/list/popular'
    }
  },
  ionViewWillEnter() {
    this.refreshQuery()
  },
  ionViewWillLeave() {
  },
  ionViewDidEnter() {
  },
  ionViewDidLeave() {
    this.articles = {}
     this.router.push({
        'query': null
    })
  },
  created: async function () {
    await this.getUserInfo()
    this.getArticles(this.params)
    this.getPopular()
  },
  beforeUpdate: function () {
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
    formattingDate(val, format) {
      return moment(val).format(format)
    },
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
          self.articles = newResults
        }
      }).catch(function (err) {
        self.openToast('Error get news', 5000, 'danger')
        console.log(err)
      })
    },
    getPopular () {
      let self = this
      axios.get(this.API_POPULAR,{
         headers: {
          'Accept': "application/json",
          'Authorization': 'PIINTU '+ self.userToken
        },
        mode:"cors"
      }).then(response => {
        self.popular = response.data
      }).catch(function (err) {
        console.log(err)
        self.openToast('Error get popular news', 5000, 'danger')
      })
    }
  }
});
</script>
<style  scoped>

</style>