<template>
  <ion-header class="main border-bottom no-shadow" mode="md">
    <ion-toolbar class="ion-align-items-center">
      <ion-buttons slot="end" class="on-no-margin">
            <ion-button class="clear-button" @click="closeAction">
              <span>Tutup</span>
            </ion-button>
          </ion-buttons>
      <ion-title mode="ios">{{ title }}</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-no-padding">
    <ion-item v-for="(item, index) in notifications" :key="index" class="readed">
      <ion-label>
        <span class="date">2020-11-05 10:00</span>
        <span class="title">Reset Password request</span>
        <span class="desc">Silahkan lakukan verifikasi pada email anda</span>
      </ion-label>
    </ion-item>
  </ion-content>
</template>

<script>
import { 
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonButtons,
  IonLabel,
  IonItem
} from '@ionic/vue';
import { defineComponent } from 'vue';
import { getLocal } from '@/services/storage'
import axios from 'axios';

export default defineComponent({
  name: 'ModalNotification',
  props: {
    title: { type: String, default: 'Modal Tittle' },
    closeAction: { type: Function },
  },
  components: { 
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    IonButtons,
    IonLabel,
    IonItem
  },
  data() {
    return {
      userToken: null,
      notifications: [1,2,3],
      userInfo: null
    }
  },
  created: async function () {
    await this.getUserInfo()
    this.getNotif()
  },
  beforeUnmount() {
    this.setReadNotif()
  },
  computed: {
     API_HOST: function () {
      return 'http://54.179.9.67:8000'
    },
    API_NOTIF: function () {
      return this.API_HOST+'/api/v1/consumer/notification/user'
    },
    API_NOTIF_READ: function () {
      return this.API_NOTIF+'/'+this.userInfo.id
    }
  },
  methods: {
    getUserInfo: async function () {
      await getLocal('userInfo').then((res)=>{
        if(res) {
          this.userToken = res.token
          this.userInfo = res.user
        }
      }).catch((err)=>{
        console.log(err)
      })
    },
    getNotif: function () {
      let self = this
      axios.get(this.API_NOTIF,{
         headers: {
          'Accept': "application/json",
          'Authorization': 'PIINTU '+ self.userToken

        },
        mode:"cors"
      }).then(response => {
        self.notifications = response.data || [1,2]
      }).catch(function (err) {
        console.log(err)
      })
    },
    setReadNotif: function () {
      let self = this
      axios.get(this.API_NOTIF_READ,{
         headers: {
          'Accept': "application/json",
          'Authorization': 'PIINTU '+ self.userToken

        },
        mode:"cors"
      }).then().catch(function (err) {
        console.log(err)
      })
    },
    segmentChanged(ev) {
      console.log('Segment changed', ev);
    },
    dismissModal() {
      this.closeAction()
    },
    onSetFilter() {
      alert('filter set')
      this.closeAction()
    }
  } 
});
</script>
<style scoped>

</style>