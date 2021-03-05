<template>
  <div class="wrap-listing wrap-content component-marketing mx-0">
    <ion-item
    v-for="(item, index) in result"
    :key="index"
    class="list-item"
    :class="classProps"
    >
    <div class="d-block w-100 item-row">
      <ion-grid class="ion-no-padding">
        <ion-row class="ion-align-items-center">
          <ion-col size="2">
           <div class="img-logo">
              <img src="/assets/logo-agency.png"/>
           </div>
          </ion-col>
          <ion-col class='ion-no-padding pl-3' size="6">
            <span class="d-block w-100 date">
            2020-11-05 10:00
            </span>
            <span class="d-block w-100 title">
              Banner Dijual 50x40 cm
            </span>
            <span class="d-block w-100 pubid">
              100 pcs
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
    IonItem,
    IonChip,
    IonLabel,
    IonRow,
    IonCol,
    IonGrid
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MarketingItems',
  components: {
    IonItem,
    IonChip,
    IonLabel,
    IonRow,
    IonCol,
    IonGrid
  },
  setup(){
    return {
    }
  },
  props: {
    result: {
      type: Array,
      default: function () {
        return [1]
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