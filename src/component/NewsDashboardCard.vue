<template>
  <div class="wrap-listing wrap-content component-news mx-0">
    <ion-item
    lines="none"
    class="list-item"
    :class="classProps"
    >
      <ion-card mode="ios" class="mb-3" :href="`/berita/${detail}`">
        <div class="wrap-image">
          <img class="feature-img" :src="`/assets/img-sample${detail}.jpg`" />
        </div>
        <ion-card-header>
          <div class="wrap-header">
            <ion-card-subtitle>Feb 22, 2021</ion-card-subtitle>
            <ion-card-title>Rumah Minimalis</ion-card-title>
          </div>
        </ion-card-header>
        <ion-card-content>
          Kawasan industri merupakan sub sektor properti yang mencatatkan kinerja sangat baik saat situasi pandemi Covid-19.
        </ion-card-content>
      </ion-card>
    </ion-item>
  </div>
</template>

<script>
import {
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonItem,
    IonCardContent
} from '@ionic/vue';
import { useRouter } from 'vue-router'
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NewsDashboardCard',
  components: {
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonItem,
    IonCardContent
  },
  setup(){
    const router = useRouter();
    return {
      router
    }
  },
  props: {
    detail: {
      type: Number,
      default: function () {
        return 1
      },
      required: true
    },
    classProps: {
      type: String,
      default: ''
    }
  },
  mounted() {
  },
  methods: {
  }
});
</script>

<style scoped>
</style>