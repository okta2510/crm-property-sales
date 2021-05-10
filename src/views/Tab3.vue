<template>
  <ion-page class="logged">
    <HeaderPage
      title="Marketing Tools"
      urlPage=""
      urlText=""
      modalText=""
      v-on:modalClick="null">
    </HeaderPage>
    <ion-content class="ion-padding min-height-100 ion-no-padding-start ion-no-padding-end pb-100">
      <div id="container-page2">
        <div class="px-3 mb-3 text-center">
          <ion-button color="medium" size="medium" class="min-w-300 mx-auto" @click="router.push('/marketing/add')">
            <strong>Pesan Baru</strong>
          </ion-button>
        </div>
        <KeepAlive>
          <MarketingItems
          :result="marketingOrders.results"
          classProps=""
          ></MarketingItems>
        </KeepAlive>
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
  IonButton,
  toastController
} from '@ionic/vue';
import HeaderPage from '@/component/HeaderPage'
import { defineComponent, KeepAlive } from 'vue';
import MarketingItems from '@/component/MarketingItems.vue'
import { getLocal } from '@/services/storage'
import moment from 'moment';


export default defineComponent({
  components: {
    IonContent,
    IonPage,
    HeaderPage,
    MarketingItems,
    IonButton,
    KeepAlive
  },
  data: function() {
    return {
      titlePage: 'Marketing List',
      currentModal: null,
      marketingOrders: {},
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
    API_MARKETING: function () {
      return this.API_HOST+'/marketing/list'
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
    this.marketingOrders = {}
    //  this.router.push({
    //     'query': null
    // })
  },
  created: async function () {
    await this.getUserInfo()
    this.getMarketings(this.params)
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
    getMarketings (params, filterChanged = false) {
      let self = this
      axios.get(this.API_MARKETING,{
         headers: {
          'Accept': "application/json",
          'Authorization': 'PIINTU '+ self.userToken
        },
        'params': params,
        mode:"cors"
      }).then(response => {
        if (self.route.query.pagination == 1 || filterChanged) {
          self.marketingOrders = response.data
        } else {
          let newResults = {...response.data}
          newResults.results = [...self.articles.results, ...newResults.results]
          self.articles = newResults
        }
      }).catch(function (err) {
        self.openToast('Error get orders', 5000, 'danger')
        console.log(err)
      })
    }
  }
});
</script>
<style  scoped>

</style>