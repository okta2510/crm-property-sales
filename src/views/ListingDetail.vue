<template>
  <ion-page class="logged">
    <HeaderPage
      title="Detil Listing"
      :urlPage="route.query.type === 'primary' ? `/listing/edit/${detail.id}`:''"
      :urlText="route.query.type === 'primary' ? 'Edit':''"
      modalText=""
      backText="Kembali"
      backUrl="/tab2"
      headerClass="header-detail no-shadow border-bottom"
      v-on:modalClick="null">
    </HeaderPage>
    <ion-content class="ion-padding min-height-100 pb-200 detail-page">
      <div class="news-detail">
        <ion-grid class="ion-no-padding ion-no-padding-top ion-no-padding-bottom">
          <ion-row>
            <ion-col>
              <div class="wrap-chips">
                <ion-chip class="custom label-shadow" :color="detail.type_listing.includes('jual') ? 'success' : 'warning'" v-if="detail.type_listing">
                  <ion-label color="light">{{ detail.type_listing.includes('jual') ? 'Dijual' : 'Disewa' }}</ion-label>
                </ion-chip>
                
                <!-- <ion-chip class="custom label-shadow" color="warning">
                  <ion-label color="dark">Disewa</ion-label>
                </ion-chip> -->
              </div>
              <h1 class="title mt-0">
                {{detail.name || '-'}}
              </h1>
              <div class="component-size-info">
                <ul class="text-left">
                  <li>
                    <img height="14" src="/assets/icon/icon-area-size.png">
                    <span>
                      <PrintValue
                    :value="detail.surface_area"/>
                    </span>
                  </li>
                  <li>
                    <img height="14" src="/assets/icon/icon-building-size.png">
                    <span>
                      <PrintValue
                    :value="detail.building_area"/>
                    </span>
                  </li>
                  <li>
                    <img height="14" src="/assets/icon/icon-bed-size.png">
                    <span>
                      <PrintValue
                    :value="detail.bedroom"/>
                    </span>
                  </li>
                  <li>
                    <img height="14" src="/assets/icon/icon-bath-size.png">
                    <span>
                      <PrintValue
                    :value="detail.bathroom"/>
                    </span>
                  </li>
                </ul>
              </div>
               <img class="feature-img" v-if="detail.gallery && detail.gallery.length < 2" :src="`${detail.gallery.length === 1 ? detail.gallery[0].image : '/assets/empty-image-square.png'}`" />
              <ion-slides v-if="detail.gallery && detail.gallery.length > 1" class="slider-feature ion-margin-bottom" pager="true" mode="ios" :options="slideOpts">
                <ion-slide
                v-for="(item, index_listing) in detail.gallery"
                :key="index_listing">
                   <img class="feature-img" :src="`${item.image}` || `/assets/empty-image-square.png`" />
                </ion-slide>
              </ion-slides> 
              <ion-grid>
                <ion-row>
                  <ion-col size="7">
                    <span class="date d-block">
                      {{formattingDate(detail.created, 'YYYY-MM-DD HH:mm') || 'YYYY-MM-DD HH:mm'}}
                    </span>
                    <span class="price d-block">
                      <PrintValue
               :value="detail.price"
               preText="Rp."></PrintValue>
                    </span>
                  </ion-col>
                  <ion-col size="5" v-if="route.query.type === 'other' && detail.user">
                    <div class="wrap-agent-info">
                      <div class="profile cursor-pointer" @click="goTo('/agent/'+detail.user.id)" :style="`background-image: url(${detail.user.profile_picture || '/assets/agent-empty.png'})`"></div>
                      <div class="top-section text-capitalize">{{ detail.contact_name_for_marketing_contract || 'Agent Name'}}</div>
                      <div class="bottom-section text-capitalize">
                        {{ detail.user.agency_name|| 'Agency Name'}}
                      </div>
                    </div>

                    <ion-button target="_blank" href="https://api.whatsapp.com/send?phone=+6281280029291" size="small" color="medium w-100 ion-no-margin mt-10">
                      <strong>Chat James</strong>
                      <ion-ripple-effect></ion-ripple-effect>
                    </ion-button>
                  </ion-col>
                </ion-row>
              </ion-grid>
              <article class="pt-4">
                <div class="form-group">
                  <span class="d-block form-label">Alamat</span>
                  <span class="d-block value">
                    {{detail.address || '-'}}
                  </span>
                </div>
                <div class="form-group">
                  <iframe :src="`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126907.08036858666!2d106.73203906191657!3d-6.283931256097716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1ec2422b0b3%3A0x39a0d0fe47404d02!2sSouth%20Jakarta%2C%20South%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1617249753662!5m2!1sen!2sid`" width="" class="w-100" height="180" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                </div>
                <div class="form-group">
                  <span class="d-block form-label">Komisi</span>
                  <span class="d-block value">
                    {{detail.comission || '-'}} %
                  </span>
                </div>
                <div class="form-group">
                  <span class="d-block form-label">Tipe Listing</span>
                  <span class="d-block value text-capitalize">
                    {{detail.type_listing || '-'}}
                  </span>
                </div>
                <div class="form-group">
                  <span class="d-block form-label">Deskripsi Listing</span>
                  <span class="d-block value">
                    {{detail.description || '-'}}
                  </span>
                </div>
                <div class="form-group">
                  <span class="d-block form-label">Jenis Properti</span>
                  <span class="d-block value text-capitalize">
                    {{detail.property_type || '-'}}
                  </span>
                </div>
                <div class="form-group">
                  <span class="d-block form-label">Luas Tanah</span>
                  <span class="d-block value">
                     <PrintValue
                    :value="detail.surface_area"/> m<sup>2</sup></span>
                </div>
                <div class="form-group">
                  <span class="d-block form-label">Luas Bangunan</span>
                  <span class="d-block value">
                    <PrintValue
                    :value="detail.building_area"/> m<sup>2</sup></span>
                </div>
                <div class="form-group">
                  <span class="d-block form-label">Jumlah Lantai</span>
                  <span class="d-block value">{{detail.floor || '-'}}</span>
                </div>
                <div class="form-group">
                  <span class="d-block form-label">Jumlah Kamar Tidur</span>
                  <span class="d-block value">{{detail.bedroom || '-'}}</span>
                </div>
                <div class="form-group">
                  <span class="d-block form-label">Jumlah Kamar Mandi</span>
                  <span class="d-block value">
                    <PrintValue
                    :value="detail.bathroom"/>
                  </span>
                </div>
                <div class="form-group">
                  <span class="d-block form-label">Kapasitas Garasi</span>
                  <span class="d-block value">
                    <PrintValue
                    :value="detail.garage_capacity"/>
                  </span>
                </div>
                <div class="form-group">
                  <span class="d-block form-label">Kapasitas Carport</span>
                  <span class="d-block value">{{detail.carport_capacity || '-'}}</span>
                </div>
                <div class="form-group">
                  <span class="d-block form-label">Properti menghadap ke arah</span>
                  <span class="d-block value text-capitalize">
                    {{detail.property_heading || '-'}}
                  </span>
                </div>
                <div class="form-group">
                  <span class="d-block form-label">Status Sertifikat</span>
                  <span class="d-block value text-uppercase">
                    {{detail.certificate || '-'}}
                  </span>
                </div>
                <div class="form-group">
                  <span class="d-block form-label">Daya Listrik</span>
                  <span class="d-block value">{{detail.electricity || '-'}} watt</span>
                </div>
                <div class="form-group">
                  <span class="d-block form-label">Kondisi Interior</span>
                  <span class="d-block value text-capitalize">
                    {{detail.interior || '-'}}
                  </span>
                </div>
                <div class="form-group">
                  <span class="d-block form-label">Fasilitas Kawasan</span>
                  <span class="d-block value text-capitalize">
                    {{detail.facilities || '-'}}
                  </span>
                </div>
                <div class="form-group">
                  <span class="d-block form-label">Status Kepemilikan</span>
                  <span class="d-block value text-capitalize">
                    {{detail.ownership_status || '-'}}
                  </span>
                </div>
                <div class="form-group">
                  <span class="d-block form-label">Tipe Perjanjian</span>
                  <span class="d-block value text-capitalize">
                    {{detail.type_contract || '-'}}
                  </span>
                </div>
              </article>
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
import PrintValue from '@/component/PrintValue.vue'
import { 
  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonChip,
  IonLabel,
  IonSlides,
  IonSlide,
  IonButton,
  IonRippleEffect
} from '@ionic/vue';
import HeaderPage from '@/component/HeaderPage'
import { defineComponent } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import { getLocal } from '@/services/storage'

export default defineComponent({
  components: {
    IonContent,
    IonPage,
    HeaderPage,
    IonGrid,
    IonRow,
    IonCol,
    IonChip,
    IonLabel,
    PrintValue,
    IonSlides,
    IonSlide,
    IonButton,
    IonRippleEffect
  },
  data: function() {
    return {
      titlePage: 'My Listing',
      detail: {}
    }
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const slideOpts = {
      initialSlide: 0,
      speed: 400,
      autoHeight: true,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      }
    };

    return {route, router, slideOpts}
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
  computed: {
    API_HOST: function () {
      return 'http://54.179.9.67:8000/api/v1/consumer'
    },
    API_PRIMARY: function () {
      return this.API_HOST+'/listing/primary/'+this.route.params.id
    },
    API_SECONDARY: function () {
      return this.API_HOST+'/listing/secondary/'+this.route.params.id
    }
  },
  methods: {
    getUserInfo: async function () {
      await getLocal('userInfo').then((res)=>{
        if(res) {
          this.userToken = res.token
        }
      }).catch((err)=>{
        console.log(err)
      })
    },
    formattingDate(val, format) {
      return moment(val).format(format)
    },
    goTo (url) {
      window.location.href = url
    },
    getArticle: function () {
      let self = this
      let  API_URL = this.route.query.type === 'primary' ? this.API_PRIMARY : this.API_SECONDARY
      axios.get(API_URL,{
         headers: {
          'Accept': "application/json",
          'Authorization': 'PIINTU '+ self.userToken
        },
        mode:"cors"
      }).then(response => {
        self.detail = response.data
      }).catch(function (err) {
        console.log(err)
      })
    }
  }
});
</script>
<style  scoped>

</style>