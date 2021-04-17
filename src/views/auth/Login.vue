<template>
    <ion-page>
      <ion-header class="main">
        <ion-toolbar>
          <ion-title>Agent Terdaftar</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-grid>
          <ion-row>
            <ion-col size-md="4" size-xs="10" offset-md="4" offset-xs="1">
                <div class="heading-page text-center">
                  <img class="logo" width="106" src="assets/icon-login.png">
                  <h1 class="text-center title mt-2 mb-1">Selamat Datang</h1>
                  <span class="d-block text-center">Silahkan Isi Form Dibawah</span>
                </div>
                <form v-on:submit.prevent="onSubmit2" class="mt-4 form-custom">
                  <div class="input-wrap">
                    <ion-item class="md">
                      <ion-label color="medium" position="stacked">Nomor Ponsel</ion-label>
                      <ion-input id="tel" placeholder="" autocapitalize="on" title="+62812XXXXXX" onkeypress='return event.charCode >= 48 && event.charCode <= 57 || event.charCode == 43' minlength="12" type="tel" v-model="username" required>
                      </ion-input>
                    </ion-item>

                    <ion-item class="md">
                      <ion-label color="medium" position="stacked">Kata Sandi</ion-label>
                      <ion-input id="password" placeholder="" type="password" v-model="password" required>
                      </ion-input>
                    </ion-item>

                    <div class="forgot_password">
                      <input type="checkbox" name="" v-model="rememberMe" id="">
                      <span>Ingatkan Saya Selanjutnya</span>
                    </div>

                    <div class="text-right small-text-1 mt-3">
                      <router-link to="/forgot-password" class="text-light">Lupa Kata Sandi?</router-link>
                    </div>
                  </div>
                  <ion-button
                  :disabled="!isNotEmpty || signingIn"
                  color="secondary"
                  size="large"
                  class="ios md"
                  expand="block"
                  type="submit">
                    <strong>Masuk</strong>
                     <ion-ripple-effect></ion-ripple-effect>
                  </ion-button>
                  <p class="text-center small-text-1">
                    <span>Belum Punya Akun?</span> <router-link to="/register" class="text-light">Daftarkan Saya</router-link>
                  </p>
                </form>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>
      <ion-footer class="ion-no-border">
        <ion-toolbar>
          <div class="text-center py-2">
            <small>Versi 1.0</small>
          </div>
        </ion-toolbar>
      </ion-footer>
    </ion-page>
</template>
<script>
import axios from 'axios';
import { HTTP } from '@ionic-native/http';
import {
  IonPage,
  IonContent,
  IonToolbar,
  IonTitle,
  IonGrid,
  IonInput,
  IonItem,
  IonButton,
  IonRow,
  IonCol,
  IonLabel,
  toastController,
  IonHeader,
  IonFooter,
  IonRippleEffect
} from '@ionic/vue'
import { add } from 'ionicons/icons';
import { setLocal, getLocal, removeLocal } from '@/services/storage'
import { useRouter } from 'vue-router'

export default {
  name: 'Login',
  components: {
    IonPage,
    IonContent,
    IonToolbar,
    IonTitle,
    IonGrid,
    IonInput,
    IonItem,
    IonButton,
    IonRow,
    IonCol,
    IonLabel,
    IonHeader,
    IonFooter,
    IonRippleEffect
  },
  setup() {
    const router = useRouter();
    const http = HTTP
    const getLoggedUser = async function () {
       await getLocal('userInfo').then((res)=>{
        res ? router.push('/dashboard') : router.push('/login')
      }).catch((err)=>{
        console.log(err)
      })
    }
    getLoggedUser()

    return {
      add, router, http
    }
  },
  ionViewWillEnter() {
    this.resetState()
    this.getRememberMe()
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
      username: null,
      password: null,
      signingIn: false,
      rememberMe: false
    }
  },
  computed: {
    API_LOGIN: function () {
      return '/api/v1/consumer/member/login'
    },
    isNotEmpty: function () {
      return this.username && this.password
    }
  },
  methods: {
    getRememberMe: async function () {
       await getLocal('lastLogged').then((res)=>{
        if(res) {
          let {remember, username, password} = res 
          this.rememberMe = remember
          this.username = username
          this.password = password
        }
      }).catch((err)=>{
        console.log(err)
      })
    },
    async openToast(message='empty toast', duration=2000, color='default') {
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
      let self = this
      this.signingIn = true
      axios.post(this.API_LOGIN, {
          "username": self.username,
          "password": self.password
      }, {
        proxy: {
          host: 'http://54.179.9.67',
          port: 8000
        }
      })
      .then(response => {
        // set local info
        if (Object.keys(response.data).length > 0 && response.data.token) {
          setLocal('userInfo', response.data)
          // set remember me
          if(this.rememberMe) {
            setLocal('lastLogged', {
              remember: this.rememberMe,
              username: this.username,
              password: this.password
            })
          } else {
            removeLocal('lastLogged')
          }
        } else {
          // self.openToast('Login Error' + JSON.stringify(response), 5000, 'danger')
          self.signingIn = false
        }

        this.router.push('/dashboard')
      }).catch(function (err) {
        // handle err
        console.log(err);
          self.openToast(err.response.data ? err.response.data.detail : 'Login Error', 5000, 'danger')
         self.signingIn = false
      })
    },
    onSubmit2: function () {
      let self = this
      this.http.post('http://54.179.9.67:8000', {
          "username": self.username,
          "password": self.password
      }, {})
      .then(data => {
          alert('success')
          console.log(data.status);
          console.log(data.data); // data received by server
          console.log(data.headers);

        })
        .catch(error => {
          alert('error')
          console.log(error.status);
          console.log(error.error); // error message as string
          console.log(error.headers);

        });
    },
    resetState() {
      this.username = null
      this.password = null
      this.signingIn = false
      this.rememberMe = false
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