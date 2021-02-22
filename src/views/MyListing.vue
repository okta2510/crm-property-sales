<template>
  <ion-page>
    <ion-header class="logged">
      <ion-toolbar>
        <ion-title>Listing Saya</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <div id="container">
        <strong>all page</strong>
        <ul>
          <li> <a href="/test">test page</a></li>
          <li> <a href="/take-photo">Take Photo</a></li>
          <li> <a href="/login">Login</a></li>
          <li> <a href="/welcome">welcome</a></li>
          <li> <a href="/logout">logout</a></li>
        </ul>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router'
import { getLocal } from '@/services/storage'

export default defineComponent({
  name: 'Dashboard',
  components: {
    IonContent, IonHeader, IonPage, IonTitle, IonToolbar
  },
  data: function() {
    return {
    }
  },
  setup() {
    const router = useRouter();
    const getLoggedUser = async function () {
       await getLocal('userInfo').then((res)=>{
        res ? router.push('/my-listing') : router.push('/login')
      }).catch((err)=>{
        console.log(err)
      })
    }

    getLoggedUser()

    return { router }
  },
  ionViewWillEnter() {
  },
  ionViewWillLeave() {
  },
  ionViewDidEnter() {
  },
  ionViewDidLeave() {
  },
  created() {
  },
  mounted() {
  }
});
</script>

<style  scoped>

</style>