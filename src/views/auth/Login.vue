<template>
    <ion-page>
      <div class="content-auth"></div>
      <ion-content
      :fullscreen="true"
      :scroll-events="true">
        <ion-toolbar>
            <ion-grid>
              <ion-row>
                <ion-col>
                  <ion-title align="center">
                    Login Page
                  </ion-title>
                </ion-col>
              </ion-row>
              <ion-row>
                <ion-col>
                  login form
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-toolbar>
      </ion-content>
    </ion-page>
</template>
<script>
import {IonPage, IonContent, IonToolbar, IonTitle, IonRow, IonCol, IonGrid} from '@ionic/vue'
export default {
  name: 'Login',
  components: {
    IonPage, IonContent, IonToolbar, IonTitle, IonRow, IonCol, IonGrid
  }
}
</script>

<style  scoped>
.content-auth {
  padding-top: 100px;
}
</style>