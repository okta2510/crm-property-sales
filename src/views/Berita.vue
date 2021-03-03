<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="container">
        <h1>Berita</h1>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonPage} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Berita',
  components: {
    IonContent,
    IonPage,
  }
});
</script>

<style  scoped>
</style>