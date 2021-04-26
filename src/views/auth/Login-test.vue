<template>
    <ion-page>
      <ion-header class="main">
        <ion-toolbar color="primary">
           <ion-buttons slot="start">
            <ion-menu-button auto-hide="false"></ion-menu-button>
          </ion-buttons>
          <ion-buttons slot="primary">
            <ion-button fill="clear" color="dark">
              <ion-icon :icon="add"></ion-icon>
            </ion-button>
          </ion-buttons>
          <ion-title>Welcome Back,</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-grid>
          <ion-row>
            <ion-col size-md="4" size-xs="10" offset-md="4" offset-xs="1">
                <div class="heading-page">
                  <h1 class="text-center title">Agent Login</h1>
                </div>
                <img class="logo" src="assets/logo.jpg">
                <form v-on:submit.prevent="onSubmit" class="mt-4 form-custom">
                  <div class="input-wrap">
                    <ion-item>
                      <ion-label color="medium" position="stacked">Email</ion-label>
                      <ion-input id="email" placeholder="" autocapitalize="on" type="email" v-model="email" required>
                      </ion-input>
                    </ion-item>

                    <ion-item>
                      <ion-label color="medium" position="stacked">Password</ion-label>
                      <ion-input id="password" placeholder="" type="password" v-model="password" required>
                      </ion-input>
                    </ion-item>
                  </div>
                  <ion-button class="submit-button" expand="block" type="submit">
                    <strong>LOGIN</strong>
                  </ion-button>
                  <p class="text-center small-text-1">
                    <span>Don't have any account?</span> <router-link to="/register">Create a new account</router-link>
                  </p>
                </form>
            </ion-col>
          </ion-row>
        </ion-grid>
        <span>{{getUser}}</span>
      </ion-content>
    </ion-page>
</template>
<script>
import axios from 'axios';
import {IonPage, IonContent, IonToolbar, IonTitle, IonGrid, IonInput, IonItem, IonButton, IonRow, IonCol, IonLabel} from '@ionic/vue'
import { add } from 'ionicons/icons';
import { setLocal, getLocal } from '@/services/storage'

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
      email: null,
      password: null,
      users: null,
      getUser: null
    }
  },
  created() {

    this.getLoggedUser()
  },
  methods: {
    getLoggedUser: async function () {
      let data = await getLocal('users')
      this.getUser = data || {}
    },
    onSubmit: function () {
      console.log(this.email,this.password)
       axios.get('http://jsonplaceholder.typicode.com/users')
      .then(response => {
        this.users = {
          email: this.email,
          password: this.password,
        }
        setLocal('users',this.users)
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
ion-content {
  --padding-top: 50px;
  --background: linear-gradient(360deg, #ceddf5, #f4f5f8, #f4f5f8, #f4f5f8, #f4f5f8, #f4f5f8);
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
}
ion-button.submit-button {
  margin: 0 0 40px;
}
.input-wrap {
  margin-bottom: 50px;
}
ion-header.main ion-title {
  text-align: center;
}
</style>