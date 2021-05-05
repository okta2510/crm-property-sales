<template>
  <ion-page class="logged">
    <HeaderPage
      title="Berita Properti"
      urlPage=""
      urlText=""
      modalText=""
      backText="Kembali"
      backUrl="/berita"
      headerClass="header-detail"
      v-on:modalClick="null">
    </HeaderPage>
    <ion-content class="ion-padding min-height-100 pb-200 ">
      <div class="news-detail">
        <ion-grid class="ion-no-padding ion-no-padding-top ion-no-padding-bottom">
          <ion-row>
            <ion-col>
              <h1 class="title mt-0">
                {{article.title}}
              </h1>
              <span class="date d-block">
                {{formattingDate(article.created, 'MMM DD, YYYY') || 'MMM DD, YYYY'}}
              </span>
              <img class="feature-img" :src="article.thumbnail || `/assets/empty-image-square.png`" />
              <span class="excerpt d-block" v-html="article.excerpt">
              </span>
              <article v-html="article.content" class="mt-10">
              </article>
              <!-- <div class="share-media mt-20">
                <span class="d-block">
                  Share :
                </span>
                <ul class="list-unstyled mt-0">
                  <li>
                    <a href="#">
                      <img src="/assets/icon/icon-fb.svg" alt="facebook">
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/assets/icon/icon-tw.svg" alt="twitter">
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/assets/icon/icon-insta.svg" alt="instagram">
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/assets/icon/icon-email.svg" alt="email">
                    </a>
                  </li>
                </ul>
              </div> -->
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import axios from 'axios';
import moment from 'moment';
import { 
  IonContent,
  IonPage,
  modalController,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/vue';
import HeaderPage from '@/component/HeaderPage'
import { defineComponent } from 'vue';
import ModalFilterListing from '@/component/ModalFilterListing.vue'
import { useRoute } from 'vue-router'
import { getLocal } from '@/services/storage'

export default defineComponent({
  components: {
    IonContent,
    IonPage,
    HeaderPage,
    IonGrid,
    IonRow,
    IonCol
  },
  data: function() {
    return {
      titlePage: 'My Listing',
      currentModal: null,
      article: {}
    }
  },
  setup() {
    const route = useRoute();
    console.log(route.params.id)
    return {route}
  },
  computed: {
    API_HOST: function () {
      return 'http://54.179.9.67:8000/api/v1/consumer'
    },
    API_NEWS: function () {
      return this.API_HOST+'/article/list/'+this.route.params.id
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
  created: async function () {
     await this.getUserInfo()
     this.getArticle()
  },
  mounted() {
  },
  methods: {
    formattingDate(val, format) {
      return moment(val).format(format)
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
    getArticle: function () {
      let self = this
      axios.get(this.API_NEWS,{
         headers: {
          'Accept': "application/json",
          'Authorization': 'PIINTU '+ self.userToken

        },
        mode:"cors"
      }).then(response => {
        self.article = response.data
      }).catch(function (err) {
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
    }
  }
});
</script>
<style  scoped>

</style>