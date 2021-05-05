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
    <ion-item v-for="(item, index) in notifications" :key="index" :class="!item.readed ? '' : 'readed'">
      <ion-label>
        <span class="date">
          {{formattingDate(item.created, 'YYYY-MM-DD HH:mm') || 'YYYY-MM-DD HH:mm'}}
        </span>
        <span class="title">
          {{item.notification || '-'}}
        </span>
        <span class="desc">
          {{item.content || '-'}}
        </span>
      </ion-label>
    </ion-item>
    <ion-item v-if="!notifications || notifications.length === 0" >
       <ion-label>
        <span class="empty-text text-center">- Tidak ada notifikasi -</span>
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
import moment from 'moment';
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
      notifications: [],
      userInfo: null
    }
  },
  created: async function () {
    await this.getUserInfo()
    this.getNotif()
  },
  beforeUnmount() {
    if (this.notifications.length > 0) {
      this.notifications.forEach(el => {
        if(el.readed === false) {
          this.setReadNotif(el.id)
        }
      })
    }
  },
  computed: {
     API_HOST: function () {
      return 'http://54.179.9.67:8000'
    },
    API_NOTIF: function () {
      return this.API_HOST+'/api/v1/consumer/notification/user'
    },
    API_NOTIF_READ: function () {
      return this.API_NOTIF+'/'
    }
  },
  methods: {
    formattingDate(val, format) {
      return moment(val).format(format)
    },
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
        self.notifications = response.data.results
      }).catch(function (err) {
        console.log(err)
      })
    },
    setReadNotif: function (id) {
      let self = this
      axios.get(this.API_NOTIF_READ+id+'/set_readed',{
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
    }
  } 
});
</script>
<style scoped>

</style>