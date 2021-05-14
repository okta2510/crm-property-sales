<template>
  <ion-page class="logged">
    <HeaderPage
      title="Upload Listing"
      urlPage=""
      urlText=""
      modalText=""
      backText="Kembali"
      backUrl="/tab2"
      headerClass="bg-light"
      v-on:modalClick="null">
    </HeaderPage>
    <ion-content  id="content-page" class="min-height-100 ion-padding pb-100 bg-primary text-light form-logged">
        <FormListingAdd
        :onSubmitting="onSubmitting"
        v-on:submitListing="onSubmitListing"/>
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
import FormListingAdd from '@/component/FormListingAdd.vue'
import { getLocal } from '@/services/storage'
import axios from 'axios';


export default defineComponent({
  components: {
    IonContent,
    IonPage,
    HeaderPage,
    FormListingAdd
  },
  data: function() {
    return {
      titlePage: 'My Listing',
      onSubmitting: false
    }
  },
  computed: {
    API_HOST: function () {
      return 'http://54.179.9.67:8000/api/v1/consumer'
    },
    API_IMAGE: function () {
      return this.API_HOST+'/listing/images'
    },
    API_PRIMARY: function () {
      return this.API_HOST+'/listing/primary'
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
    onSubmitListing: function(payload, albums) {
      let self = this
      this.onSubmitting = true
      axios.post(this.API_PRIMARY, payload, {
         headers: {
          'Accept': "application/json",
          'Authorization': 'PIINTU '+ self.userToken
        },
        mode:"cors"
      })
      .then((res) => {
        console.log(res)
        if (res.id && albums && albums.length > 0) {
          albums.forEach(element => {
            self.uploadAlbums(res.id, element)
          })
        } 
        if (res.data.id && albums.length > 0) {
          albums.forEach(element => {
            if (!element.includes('http')) {
              self.uploadAlbums(res.data.id, element)
            }
          })
        }  else {
         self.openToast('Listing berhasil ditambahkan', 5000, 'success')
          setTimeout(function() {
            window.location = '/tab2'
          }, 2000)
        }
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
        this.onSubmitting = false
      })
    },
    uploadAlbums: function(id, image) {
      let self = this
      this.onSubmitting = true
      axios.post(this.API_IMAGE, {
        'listing': id,
        'image': image
      }, {
         headers: {
          'Accept': "application/json",
          'Authorization': 'PIINTU '+ self.userToken
        },
        mode:"cors"
      })
      .then((res) => {
        self.openToast('Listing berhasil ditambahkan', 5000, 'success')
         setTimeout(function() {
          window.location = '/tab2'
        }, 2000)
      }).catch((err) => {
        // handle err
        self.openToast('Error Upload image', 5000, 'danger')
        console.log(err)
        this.onSubmitting = false
      })
    }
  }
});
</script>
<style  scoped>

</style>