<template>
  <div class="wrap-listing wrap-content component-transaction mx-0">
    <ion-item
    v-for="(item, index) in result"
    :key="index"
    class="list-item"
    :class="classProps"
    >
    <div class="d-block w-100 item-row">
      <ion-grid class="ion-no-padding">
        <ion-row class="ion-align-items-center">
          <ion-col class='ion-no-padding' size="8">
            <span class="d-block w-100 date">
            2020-11-05 10:00
            </span>
            <span class="d-block w-100 title">
              Termurah di jatiasih, bisa cicil 24x dengan bunga yang fantastis
            </span>
            <span class="d-block w-100 pubid">
              INV/2021/XXI/I/733123
            </span>
          </ion-col>
          <ion-col class='ion-no-padding text-right' size="4">
             <ion-chip class="status" color="success" outline="true">
                <ion-label color="success">Selesai</ion-label>
              </ion-chip>
          </ion-col>
        </ion-row>
      </ion-grid>
    </div>
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
    return {
    }
  },
  props: {
    result: {
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