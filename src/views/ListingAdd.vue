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
        v-on:submitListing="onSubmitListing"/>
    </ion-content>
  </ion-page>
</template>

<script>
import { 
  IonContent,
  IonPage
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
      titlePage: 'My Listing'
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
      }, {
         headers: {
          'Accept': "application/json",
          'Authorization': 'PIINTU '+ self.userToken
        },
        mode:"cors"
      }).catch((err) => {
        // handle err
        console.log(err)
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
      .then((res) => {
        console.log(res)
      }).catch((err) => {
        // handle err
        console.log(err)
      })
    }
  }
});
</script>
<style  scoped>

</style>