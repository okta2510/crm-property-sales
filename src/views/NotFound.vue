<template>
    <ion-page>
      <ion-content>
       <div class="text-center">
         <h1 class="text-center">
           404
         </h1>
       </div>
      </ion-content>
    </ion-page>
</template>
<script>
import {IonPage, IonContent} from '@ionic/vue'
import { add } from 'ionicons/icons';
import { getLocal } from '@/services/storage'
import { useRouter } from 'vue-router'

export default {
  name: 'NotFound',
  components: {
    IonPage, IonContent
  },
  setup() {
    const router = useRouter();
    return {
      add, router
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
  },
  data: function() {
    return {
      userInfo: null
    }
  },
  computed: {
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

<style  scoped>

.header-md::after {
  content: none;
}
ion-content {
  --padding-top: 40px;
  --background: #00A79D;
  --color: #fff;
}
ion-list {
  margin: 0;
}
ion-item {
  --padding-start: 0;
  --padding-end: 0;
  --background: rgba(255,255,255,0);
  --background-activated-opacity: 0;
  --background-focused-opacity: 0;
}
ion-toolbar {
  --padding-top: 10px;
  --padding-bottom: 10px;
  --background: #fff;
  --color: #00A79D;

}
ion-button.submit-button {
  margin: 0 0 40px;
}
.input-wrap {
  margin-bottom: 40px;
}
ion-header {
  box-shadow: 0px 5px 10px #00000020;
}
ion-header.main ion-title {
  text-align: center;
  font-size: 16px;
  line-height: 20px;
}

ion-footer ion-toolbar{
  color: #00EEE0;
  --opacity: 1;
  --background: #00A79D;
  --border-width: 0;
  --border-color: rgba(255,255,255,0)
}
a.text-light {
  font-weight: 600;
  text-decoration: underline;
  font-style: italic;
}
</style>