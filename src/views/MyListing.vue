<template>
  <ion-page class="logged">
    <HeaderPage
      title="Listing Saya"
      urlPage=""
      urlText=""
       backText="Kembali"
      backUrl="/tab4"
      modalText="Filter"
      v-on:modalClick="openModal">
    </HeaderPage>
    <ion-header class="ion-no-padding">
      <ion-toolbar class="ion-no-padding ios-handled ios">
          <SearchBar
        v-on:searchEnter="onUpdateParams"
        :searchString="route.query.search"
        searchType="Listing"
        :listResults="selectedList.results"
        ></SearchBar>
      </ion-toolbar>
    </ion-header>
    <ion-content class="min-height-100 ion-no-padding-start ion-no-padding-end pb-200">
      <div id="container-page-listing">
        <div class="wrap-toggle-slide mb-40">

          <KeepAlive>
            <div>
            <ListingList
                :result="selectedList.results"
                classProps=""
                :editButton="true"
                :listingType="listingType"
                ></ListingList>
            </div>
          </KeepAlive>

          <div class="text-center mt-20" v-if="selectedList && selectedList.next">
            <ion-button color="medium" size="medium" class="min-w-300 mx-auto" @click="nextPage">
              <strong>Muat Lebih</strong>
            </ion-button>
          </div>
        </div>
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
} from '@ionic/vue';
import HeaderPage from '@/component/HeaderPage'
import { defineComponent, KeepAlive } from 'vue';
import ModalFilterListing from '@/component/ModalFilterListing.vue'
import ListingList from '@/component/ListingList.vue'
import SearchBar from '@/component/SearchBar.vue'
import { getLocal } from '@/services/storage'

export default defineComponent({
  components: {
    IonContent,
    IonPage,
    HeaderPage,
    ListingList,
    SearchBar,
    IonHeader,
    IonToolbar,
    IonButton,
    KeepAlive
  },
  data: function() {
    return {
      titlePage: 'My Listing',
      currentModal: null,
      otherResults: {},
      primaryResults: {},
      listingType: 'primary',
      selectedList: {},
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
    API_SECONDARY: function () {
      return this.API_HOST+'/listing/secondary'
    },
    API_PRIMARY: function () {
      return this.API_HOST+'/listing/primary'
    }
  },
  watch: {
    listingType: function(val) {
      this.selectedList = val === 'primary' ? {...this.primaryResults} : {...this.otherResults}
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
    this.selectedList =  this.listingType === 'primary' ? {...this.primaryResults} : {...this.otherResults}
    this.currentModal = null
    this.router.push({
        'query': null
    })
  },
  created: async function () {
    await this.getUserInfo()
    // this.selectedList = [...this.otherResults]
    this.getListing({...this.params, ...this.route.query})
  },
  beforeUpdate: function () {
    // if (Object.keys(this.route.query).length === 0) {
    //   this.refreshQuery()
    // }
  },
  mounted() {
  },
  unmounted() {
    this.router.push({
        'query': null
      })
  },
  methods: {
    nextPage: function () {
      if (this.selectedList.next) {
        this.router.push({
          query: {...this.params, ...{
            pagination: this.selectedList.next
          }}
        })
        this.getListing(this.route.query)
      }
    },
    refreshQuery: function () {
      if (this.route.query.search) {
           this.router.push({
              query: {...this.params, ...{
                'search': this.route.query.search
              }}
            })
      } else {
         this.router.push({
            query: this.params
          })
      }
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
    onUpdateParams: function(obj={}) {
      if(Object.keys(obj).length > 0) {
        let newParams = {...this.route.query, ...obj}
        this.router.push({
          query: newParams
        })
        this.getListing(newParams, true)
      }
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
            closeAction: this.closeModal,
            updateParams: this.onUpdateParams,
            currentParams: this.route.query
          },
        })
      this.currentModal = modal
      return modal.present();
    },
    closeModal() {
      this.currentModal.dismiss()
    },
    getListing: async function (params, filterChanged = false) {
      let self = this

      await axios.get(this.API_PRIMARY,{
         headers: {
          'Accept': "application/json",
          'Authorization': 'PIINTU '+ self.userToken

        },
        'params': params,
        mode:"cors"
      }).then(response => {
        if (self.route.query.pagination == 1 || filterChanged) {
          self.primaryResults = response.data
        } else if (!this.primaryResults){
          let newResults = {...response.data}
          newResults.results = [...self.primaryResults.results, ...newResults.results]
          self.primaryResults = newResults
        }
      }).catch(function (err) {
        console.log(err)
      })

      this.selectedList =  {...this.primaryResults}
    }
  }
});
</script>
<style  scoped>

</style>