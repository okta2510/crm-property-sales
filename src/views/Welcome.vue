<template>
  <ion-page>
    <ion-content>
       <div class="wrap-middlenn content-body">
         <img width="300" src="/assets/opening-screen.png" alt="">
       </div>
    </ion-content>
    <ion-footer class="ion-no-border">
      <ion-toolbar>
        <div class="text-center py-3">
          <img width="130" src="/assets/logo-footer.png" alt="">
          <div class="text-center pt-1">
            <small>Versi 1.0</small>
          </div>
        </div>
      </ion-toolbar>
    </ion-footer>

  </ion-page>
</template>

<script>
import {IonPage, IonContent, IonFooter, IonToolbar} from '@ionic/vue'
import { getLocal } from '@/services/storage'
import { useRouter } from 'vue-router'
export default {
  name: 'Welcome',
  data: function() {
    return {
      userInfo: null
    }
  },
  components: {
    IonPage, IonContent, IonFooter, IonToolbar
  },
  setup() {
    const router = useRouter();
    return {
      router
    }
  },
  ionViewWillEnter() {
    this.getLoggedUser('userInfo')
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
      // this.userInfo ? this.router.push('/my-listing') : this.router.push('/login')
  },
  methods: {
    directPage(res) {
      setTimeout(()=>{
        res ? this.router.push('/my-listing') : this.router.push('/login')
      },5000)
    },
     getLoggedUser: async function (key) {
      await getLocal(key).then((res)=>{
        this.directPage(res)
      }).catch(()=>{
        this.router.push('/login')
      })
    }
  }
}
</script>

<style scoped>
ion-content {
  --background:#E7F6FF;
  text-align: center;
}
.content-body {
  padding: 100px 30px 30px;
}

ion-footer, ion-toolbar{
  color: #A5C7DC;
  background-color: transparent;
}

ion-footer, ion-toolbar{
  color: #A8B7BF;
  --opacity: 1;
  --background: #E7F6FF;
}
.toolbar-background {
  background-color: #E7F6FF;
}
</style>