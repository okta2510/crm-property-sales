<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>tab3</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding">
      <div style="min-height:950px">
        Hello World
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { 
  IonContent, 
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    IonContent, 
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
  },
  data: function() {
    return {}
  }
});
</script>