<template>
    <ion-page>
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title>Welcome Back,</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-grid>
          <ion-row>
            <ion-col size-md="4" size-xs="10" offset-md="4" offset-xs="1">
              <h1 text-center>Pintu Management</h1>
                <img class="logo" src="assets/logo.jpg">
                <form v-on:submit.prevent="onSubmit">
                  <div formGroupName="user">
                    <ion-item>
                      <ion-label>Email</ion-label>
                      <ion-input id="email" autocapitalize="on" type="email" v-model="email" required>
                      </ion-input>
                    </ion-item>

                    <ion-item>
                      <ion-label>Password</ion-label>
                      <ion-input id="password" type="password" v-model="password" required>
                      </ion-input>
                    </ion-item>
                  </div>
                  <ion-grid>
                    <ion-button expand="block" type="submit">
                      <strong>Log in</strong>
                    </ion-button>
                    <p>
                     <router-link to="/register"> new user? Create an account</router-link>
                    </p>
                  </ion-grid>
                </form>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>
    </ion-page>
</template>
<script>
import {IonPage, IonContent, IonToolbar, IonTitle, IonGrid, IonInput, IonLabel, IonItem, IonButton, IonRow, IonCol} from '@ionic/vue'
export default {
  name: 'Login',
  components: {
    IonPage, IonContent, IonToolbar, IonTitle, IonGrid, IonInput, IonLabel, IonItem, IonButton, IonRow, IonCol
  },
  data: function() {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    onSubmit: function () {
      console.log(this.email,this.password)
    }
  },
}
</script>

<style  scoped>
ion-list {
  margin: 0;
}
ion-toolbar {
  --padding-top: 10px;
  --padding-bottom: 10px;
}
</style>