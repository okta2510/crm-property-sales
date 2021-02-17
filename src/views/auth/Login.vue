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
                <form v-on:submit.prevent="onSubmit" class="mt-4 form-custom">
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

                    <div class="text-right small-text-1 mt-3">
                      <router-link to="/forgot-password" class="text-light">Lupa Kata Sandi?</router-link>
                    </div>
                  </div>
                  <ion-button
                  :disabled="!isNotEmpty"
                  color="secondary"
                  size="default"
                  class="ios md"
                  expand="block"
                  type="submit">
                    <strong>Masuk</strong>
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
import {IonPage, IonContent, IonToolbar, IonTitle, IonGrid, IonInput, IonItem, IonButton, IonRow, IonCol, IonLabel} from '@ionic/vue'
import { add } from 'ionicons/icons';
import { setLocal} from '@/services/storage'
import { endpoint } from '@/api.config'

export default {
  name: 'Login',
  components: {
    IonPage, IonContent, IonToolbar, IonTitle, IonGrid, IonInput, IonItem, IonButton, IonRow, IonCol, IonLabel
  },
  setup() {
    return {
      add
    }
  },
  data: function() {
    return {
      username: null,
      password: null,
    }
  },
  computed: {
    API_LOGIN: function () {
      return endpoint + '/consumer/member/login'
    },
    isNotEmpty: function () {
      return this.username && this.password
    }
  },
  created() {
  },
  methods: {
    onSubmit: function () {
       axios.post(this.API_LOGIN, {
         username: this.username,
         password: this.password
       })
      .then(response => {
        let users = response
        setLocal('userInfo',users)
        console.log(response)
      }).catch(function (error) {
        // handle error
        console.log(error);
      })
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