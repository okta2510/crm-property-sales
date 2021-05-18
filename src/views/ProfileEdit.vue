<template>
  <ion-page class="logged">
    <HeaderPage
      title="Edit Profil"
      urlPage=""
      urlText=""
      modalText=""
      backText="Kembali"
      backUrl="/tab4"
      headerClass="bg-light"
      v-on:modalClick="null">
    </HeaderPage>
    <ion-content  id="content-page" class="min-height-100 ion-padding pb-100 bg-primary text-light form-logged">
        <FormProfileEdit
        id="top-page"
        :idDetail="route.params.id"
        :detailInfo="detailInfo"
        :submitting="onSubmitting"
        :gettingDetail="onGettingDetail"
        v-on:submitProfile="onSubmitProfile"/>
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
import { getLocal } from '@/services/storage'
import FormProfileEdit from '@/component/FormProfileEdit.vue'
import { useRoute } from 'vue-router'
import axios from 'axios';

export default defineComponent({
  components: {
    IonContent,
    IonPage,
    HeaderPage,
    FormProfileEdit
  },
  data: function() {
    return {
      titlePage: 'My Listing',
      currentModal: null,
      detailInfo: {},
      onSubmitting: false,
      onGettingDetail: true,
    }
  },
  computed: {
    API_HOST: function () {
      return 'http://54.179.9.67:8000/api/v1/consumer'
    },
    API_PROFILE: function () {
      return this.API_HOST+'/member/profile/'
    }
  },
  setup() {
    const route = useRoute();
    return {
      route
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
     if (this.route.params && this.route.params.id) {
       this.getDetail()
     }
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
    getDetail: function () {
      let self = this
      this.onGettingDetail = true
      axios.get(this.API_PROFILE + this.route.params.id,{
         headers: {
          'Accept': "application/json",
          'Authorization': 'PIINTU '+ self.userToken

        },
        mode:"cors"
      }).then(response => {
        self.onGettingDetail = false
        self.detailInfo = response.data
      }).catch(function (err) {
        console.log(err)
        self.openToast('Error, Invalid profile detail', 5000, 'danger')
        setTimeout(function() {
          window.location = '/tab4'
        }, 2000)
      })
    },
    onSubmitProfile: function (payload) {
      let self = this
      this.onSubmitting = true
      axios.put(this.API_PROFILE + this.route.params.id, payload, {
         headers: {
          'Accept': "application/json",
          'Authorization': 'PIINTU '+ self.userToken

        },
        mode:"cors"
      })
      .then(() => {
        self.openToast('Profile telah di perbaharui', 5000, 'success')
         setTimeout(function() {
          window.location = '/tab4'
        }, 2000)
      }, {
         headers: {
          'Accept': "application/json"
        },
        mode:"cors"
      }).catch((err) => {
        // handle err
        console.log(err.response)
        self.openToast(err.response ? err.response.data.detail : 'Update Profile Error', 5000, 'danger')
        self.onSubmitting = false
      })
    }
  }
});
</script>
<style  scoped>

</style>