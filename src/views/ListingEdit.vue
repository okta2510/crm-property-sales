<template>
  <ion-page class="logged">
    <HeaderPage
      title="Upload Listing"
      urlPage=""
      urlText=""
      modalText=""
      backText="Kembali"
      backUrl="/my-listing"
      headerClass="bg-light"
      v-on:modalClick="null">
    </HeaderPage>
    <ion-content  id="content-page" class="min-height-100 ion-padding pb-100 bg-primary text-light form-logged">
        <FormListingAdd
        :idDetail="route.params.id"
        :detailListing="detailListing"
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
import { useRoute } from 'vue-router'


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
      detailListing: {},
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
       this.getListingDetail()
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
    getListingDetail: function () {
      let self = this
      axios.get(this.API_PRIMARY+'/'+this.route.params.id,{
         headers: {
          'Accept': "application/json",
          'Authorization': 'PIINTU '+ self.userToken

        },
        mode:"cors"
      }).then(response => {
        self.detailListing = response.data
      }).catch(function (err) {
        console.log(err)
        self.openToast('Error, Invalid listing detail', 5000, 'danger')
        setTimeout(function() {
          window.location = '/my-listing'
        }, 2000)
      })
    },
    onSubmitListing: function(payload, albums, deleted) {
      let self = this
      this.onSubmitting = true
      axios.put(this.API_PRIMARY+'/'+this.route.params.id, payload, {
         headers: {
          'Accept': "application/json",
          'Authorization': 'PIINTU '+ self.userToken
        },
        mode:"cors"
      })
      .then((res) => {
        //check deleted bucket
        if (res.data.id && deleted.length > 0) {
          deleted.forEach(element => {
            self.deleteImages(res.data.id, element)
          })
        }

        //check new image
        if (res.data.id && albums.length > 0) {
          let checkImagesChange = 0
          albums.forEach(element => {
            if (typeof element !== 'object') {
              self.uploadAlbums(res.data.id, element)
              checkImagesChange++
            }
          })
          if (checkImagesChange === 0) {
            self.openToast('Listing berhasil diperbaharui', 5000, 'success')
            setTimeout(function() {
              window.location = '/my-listing'
            }, 2000)
          }
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
        self.openToast('Error Edit listing', 5000, 'danger')
        self.onSubmitting = false
      })
    },
    uploadAlbums: function(id, image) {
      let self = this
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
      .then(() => {
        self.openToast('Listing berhasil diperbaharui', 5000, 'success')
        setTimeout(function() {
          window.location = '/my-listing'
        }, 2000)
      }).catch((err) => {
        // handle err
        self.openToast('Error Upload image', 5000, 'danger')
        console.log(err)
        self.onSubmitting = false
      })
    },
    deleteImages: function(id, image) {
      let self = this
      axios.delete(this.API_IMAGE+'/'+image.id, {
         headers: {
          'Accept': "application/json",
          'Authorization': 'PIINTU '+ self.userToken
        },
        mode:"cors"
      })
      .then((res) => {
        console.log(res)
      }).catch((err) => {
        // handle err
        self.openToast('Error Delete image', 5000, 'danger')
        console.log(err)
      })
    }
  }
});
</script>
<style  scoped>

</style>