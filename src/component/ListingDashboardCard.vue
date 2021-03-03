<template>
  <div class="wrap-listing wrap-content component-listing mx-0">
    <ion-item
    lines="none"
    class="list-item"
    :class="classProps"
    >
      <ion-card mode="ios" class="mb-3">
        <div class="wrap-image">
          <ul>
            <li>
              <img height="14" src="/assets/icon/icon-area-size.png">
              <span>180</span>
            </li>
            <li>
              <img height="14" src="/assets/icon/icon-building-size.png">
              <span>250</span>
            </li>
            <li>
              <img height="14" src="/assets/icon/icon-bed-size.png">
              <span>4</span>
            </li>
            <li>
              <img height="14" src="/assets/icon/icon-bath-size.png">
              <span>2</span>
            </li>
          </ul>
          <img class="feature-img" :src="`/assets/img-sample${detail}.jpg`" />
        </div>
        <ion-card-header>
          <div class="wrap-header">
            <ion-card-subtitle>2020-11-05 10:00</ion-card-subtitle>
            <ion-card-title>Rumah Minimalis</ion-card-title>
            <span class="price d-block w-100">
              Rp. 12.000.000.000
            </span>
            <div class="status color-success border-success">
              <span>Dijual</span>
            </div>
          </div>
        </ion-card-header>
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
    IonItem
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ListingDashboardCard',
  components: {
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonItem
  },
  setup(){
    return {
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