<template>
    <ion-page>
      <ion-content>
       <div class="text-center">
       </div>
      </ion-content>
    </ion-page>
</template>
<script>
import {IonPage, IonContent} from '@ionic/vue'
import { add } from 'ionicons/icons';
import { removeLocal } from '@/services/storage'
import { useRouter } from 'vue-router'

export default {
  name: 'Logout',
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
  },
  ionViewWillLeave() {
  },
  ionViewDidEnter() {
  },
  ionViewDidLeave() {
  },
  created() {
    removeLocal('userInfo')
    window.location = "/login";
  },
  mounted() {
  },
  data: function() {
    return {}
  },
  computed: {
  },
  methods: {
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