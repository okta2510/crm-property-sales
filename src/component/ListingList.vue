<template>
  <div class="wrap-listing wrap-content component-listing-list mx-0">
    <ion-item
    v-for="(item, index) in result"
    :key="index"
    @click="router.push(`/listing/${item}`)"
    class="list-item"
    :class="classProps"
    >
    <div class="d-block w-100 item-row">
      <ion-grid class="ion-no-padding">
        <ion-row class="ion-align-items-top">
          <ion-col class='ion-no-padding text-right' size="5">
             <div class="wrap-feature-img">
               <div class="wrap-chips">
                  <ion-chip class="custom" color="success">
                    <ion-label color="light">Dijual</ion-label>
                  </ion-chip>
                  <!-- <ion-chip class="custom" color="warning">
                    <ion-label color="dark">Disewa</ion-label>
                  </ion-chip> -->
                  <ion-chip class="custom" color="light">
                    <ion-label color="secondary">Rumah</ion-label>
                  </ion-chip>
               </div>
               <img class="feature-img" :src="`/assets/img-sample${item}.jpg`" />
             </div>
          </ion-col>
          <ion-col class='content-info' size="7">
            <span class="d-block w-100 date">
            2020-11-05 10:00
            </span>
            <span class="d-block w-100 title">
              Termurah di jatiasih, bisa cicil 24x dengan bunga yang fantastis
            </span>
            <div class="component-size-info">
              <ul class="text-left">
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
            </div>
            <span class="d-block w-100 price">
               Rp. 12.000.000.000
            </span>
          </ion-col>
          <ion-col size="12" v-if="listingType === 'other'">
            <div class="wrap-agent-info">
              <div class="profile" style="background-image: url(/assets/agent-photo.png)"></div>
              <div class="top-section">James Harden</div>
              <div class="bottom-section">Raywhite Sunter</div>
            </div>
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
    IonLabel,
    IonChip,
    IonRow,
    IonCol,
    IonGrid
} from '@ionic/vue';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'ListingList',
  components: {
    IonItem,
    IonLabel,
    IonChip,
    IonRow,
    IonCol,
    IonGrid
  },
  setup(){
    const router = useRouter();
    return {
      router
    }
  },
  watch: {
    listingType: function(val) {
      console.log(val)
    }
  },
  props: {
    listingType: {
      type: String,
      default: 'primary',
      required: true
    },
    result: {
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