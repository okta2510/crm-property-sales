<template>
  <div class="wrap-listing wrap-content component-news mx-0">
    <ion-item
    v-for="(item, index) in listResults"
    :key="index"
    lines="none"
    class="list-item"
    :class="classProps"
    >
      <ion-card mode="ios" @click="router.push(`/berita/${item}`)">
        <div class="wrap-image">
          <img class="feature-img" :src="`/assets/img-sample${item}.jpg`" />
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
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'SearchBar',
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
    listResults: {
      type: Array,
      default: function () {
        return []
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