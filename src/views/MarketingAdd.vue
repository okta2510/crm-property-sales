<template>
  <ion-page class="logged">
    <HeaderPage
      title="Form Pesanan"
      urlPage=""
      urlText=""
      modalText=""
      backText="Kembali"
      backUrl="/tab3"
      headerClass="bg-light"
      v-on:modalClick="null">
    </HeaderPage>
    <ion-content  id="content-page" class="min-height-100 ion-padding pb-100 bg-primary text-light form-logged">
        <FormMarketingAdd
        :typeTools="typeTools"
        :onSubmitting="onSubmitting"
        v-on:submitMarketing="onSubmitMarketing"></FormMarketingAdd>
    </ion-content>
  </ion-page>
</template>

<script>
import { 
  IonContent,
  IonPage,
  toastController
} from '@ionic/vue';
import HeaderPage from '@/component/HeaderPage'
import { defineComponent } from 'vue';
import FormMarketingAdd from '@/component/FormMarketingAdd.vue'
import { getLocal } from '@/services/storage'
import axios from 'axios';

export default defineComponent({
  components: {
    IonContent,
    IonPage,
    HeaderPage,
    FormMarketingAdd
  },
  data: function() {
    return {
      titlePage: 'My Listing',
      typeTools: [],
      onSubmitting: false
    }
  },
  computed: {
    API_HOST: function () {
      return 'http://54.179.9.67:8000/api/v1/consumer'
    },
    API_MARKETING: function () {
      return this.API_HOST+'/marketing/list'
    },
    API_TYPE: function () {
      return this.API_HOST+'/marketing/tool-type'
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
  created: async function () {
     await this.getUserInfo()
     this.getListType()
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
    getUserInfo: async function () {
      await getLocal('userInfo').then((res)=>{
        if(res) {
          this.userToken = res.token
        }
      }).catch((err)=>{
        console.log(err)
      })
    },
    getListType: function () {
      let self = this
      axios.get(this.API_TYPE,{
         headers: {
          'Accept': "application/json",
          'Authorization': 'PIINTU '+ self.userToken

        },
        mode:"cors"
      }).then(response => {
        self.typeTools = response.data
      }).catch(function (err) {
        console.log(err)
      })
    },
    onSubmitMarketing: function (payload) {
      let self = this
      this.onSubmitting = true
      axios.post(this.API_MARKETING, payload, {
         headers: {
          'Accept': "application/json",
          'Authorization': 'PIINTU '+ self.userToken
        },
        mode:"cors"
      })
      .then((res) => {
        self.openToast('Marketing tools berhasil dipesan', 5000, 'success')
        setTimeout(function() {
          window.location = '/tab3'
        }, 2000)
      }, {
         headers: {
          'Accept': "application/json",
          'Authorization': 'PIINTU '+ self.userToken
        },
        mode:"cors"
      }).catch((err) => {
        // handle err
        console.log(err)
        self.openToast('Error Add listing', 5000, 'danger')
        self.onSubmitting = false
      })
    }
  }
});
</script>
<style  scoped>

</style>