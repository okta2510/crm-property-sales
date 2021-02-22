<template>
    <ion-page>
      <ion-header class="main">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-button class="clear-button" @click="router.push('/login')">
              <ion-icon :icon="chevronBack"></ion-icon>
              <span>kembali</span>
            </ion-button>
          </ion-buttons>
          <ion-title mode="ios">Lupa Kata Sandi</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-grid>
          <ion-row>
            <ion-col size-md="4" size-xs="10" offset-md="4" offset-xs="1">
                <form v-on:submit.prevent="onSubmit" class="mt-4 form-custom">
                  <div class="input-wrap">
                    <ion-item class="md">
                      <ion-label color="medium" position="stacked">Alamat Email</ion-label>
                      <ion-input
                      id="email"
                      placeholder=""
                      autocapitalize="off"
                      title=""
                      type="email"
                      v-model="email"
                      required>
                      </ion-input>
                    </ion-item>
                  </div>
                  <p class="text-center small-text-1 mt-0">
                    <span>Kembali ke halaman <router-link to="/login" class="text-light">Login</router-link> atau <router-link to="/register" class="text-light">Daftar</router-link></span>
                  </p>
                  <div class="text-center py-2 mt-5">
                    <ion-button
                    :disabled="!isNotEmpty || submitted || requestingEmail"
                    color="secondary"
                    size="large"
                    class="ios md"
                    expand="block"
                    type="submit">
                      <strong>{{requestingEmail ? 'Mengirim' : 'Kirim'}}</strong>
                    </ion-button>
                  </div>
                </form>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>
    </ion-page>
</template>
<script>
import axios from 'axios';
import {IonPage, IonContent, IonToolbar, IonTitle, IonGrid, IonInput, IonItem, IonButton, IonRow, IonCol, IonLabel, toastController} from '@ionic/vue'
import { 
  chevronBack
} from 'ionicons/icons';
import { useRouter } from 'vue-router'

export default {
  name: 'ForgotPassword',
  components: {
    IonPage, IonContent, IonToolbar, IonTitle, IonGrid, IonInput, IonItem, IonButton, IonRow, IonCol, IonLabel,
  },
  setup() {
    const router = useRouter();
    return {
      chevronBack, router
    }
  },
  ionViewWillEnter() {
    this.resetState()
  },
  ionViewWillLeave() {
  },
  ionViewDidEnter() {
  },
  ionViewDidLeave() {
    this.resetState()
  },
  created() {
  },
  mounted() {
  },
  data: function() {
    return {
      email: null,
      submitted: false,
      requestingEmail: false
    }
  },
  computed: {
    API_LOGIN: function () {
      return '/api/v1/consumer/member/login'
    },
    isNotEmpty: function () {
      return this.email ? true : false
    }
  },
  methods: {
    async openToast(message='openToast', duration=2000, color='default') {
      let toast = await toastController
        .create({
          message: message,
          duration: duration,
          animated: true,
          cssClass: 'custom-toast',
          color: color
        })
      toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });
      return toast.present();
    },
    onSubmit: function () {
      this.requestingEmail = true
      if (!this.submitted) {
        axios.post(this.API_LOGIN, {
          "username": "+62081210161816",
          "password": "qweqweqwe"
        })
        .then(response => {
          this.openToast('<img src="assets/check-icon.svg" /> Silahkan cek email anda untuk kata sandi baru', 5000, 'success')
          this.router.push('/login')
          this.resetState()
          console.log(response)
        }).catch(function (error) {
          // handle error
          this.requestingEmail = false
          console.log(error);
        })
      }
    },
    resetState() {
      this.email = null
      this.submitted = false
      this.requestingEmail = false
    }
  },
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
  margin-bottom: 15px;
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