<template>
  <div class="wrap-listing wrap-content component-listing-list mx-0">
    <ion-item
    v-for="(item, index) in result"
    :key="index"
    class="list-item"
    :class="classProps"
    >
    <div class="d-block w-100 item-row">
      <ion-grid class="ion-no-padding">
        <ion-row class="ion-align-items-top">
          <ion-col class='ion-no-padding text-right' size="5">
             <div class="wrap-feature-img">
               <div class="wrap-chips text-capitalize">
                  <ion-chip class="custom" :color="item.type_listing.includes('jual') ? 'success' : 'warning'" v-if="item.type_listing">
                    <ion-label color="light">{{ item.type_listing.includes('jual') ? 'Dijual' : 'Disewa' }}</ion-label>
                  </ion-chip>
                  <ion-chip class="custom" color="light" v-if="item.property_type">
                    <ion-label color="secondary">{{item.property_type}}</ion-label>
                  </ion-chip>
               </div>
               <img @click="router.push(`/listing/${item.id}`)" class="feature-img cursor-pointer" :src="item.image || `/assets/empty-image-square.png`" />
             </div>
          </ion-col>
          <ion-col class='content-info' size="7">
            <span class="d-block w-100 date">
            {{formattingDate(item.created, 'YYYY-MM-DD HH:mm') || 'dd/mm/yyyy'}}
            </span>
            <span class="d-block w-100 title cursor-pointer" @click="router.push(`/listing/${item.id}`)">
              {{item.name || 'title listing'}}
            </span>
            <div class="component-size-info">
              <ul class="text-left">
                <li>
                  <img height="14" src="/assets/icon/icon-area-size.png">
                  <span>{{ item.surface_area || 'none'}}</span>
                </li>
                <li>
                  <img height="14" src="/assets/icon/icon-building-size.png">
                  <span>{{ item.building_area || 'none'}}</span>
                </li>
                <li>
                  <img height="14" src="/assets/icon/icon-bed-size.png">
                  <span>{{ item.bedroom || 'none'}}</span>
                </li>
                <li>
                  <img height="14" src="/assets/icon/icon-bath-size.png">
                  <span>{{ item.bathroom || 'none'}}</span>
                </li>
              </ul>
            </div>
            <span class="d-block w-100 price">
               <PrintValue
               :value="item.price"
               preText="Rp."></PrintValue>
            </span>
          </ion-col>
          <ion-col size="12" v-if="listingType === 'other'">
            <div class="wrap-agent-info">
              <div class="profile cursor-pointer" @click="goTo('/agent/123')" style="background-image: url(/assets/agent-photo.png)"></div>
              <div class="top-section">{{ item.contact_name_for_marketing_contract || 'Agent Name'}}</div>
              <div class="bottom-section">
                {{ item.agency_name|| 'Agency Name'}}
              </div>
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
import PrintValue from '@/component/PrintValue.vue'
import moment from 'moment';

export default defineComponent({
  name: 'ListingList',
  components: {
    IonItem,
    IonLabel,
    IonChip,
    IonRow,
    IonCol,
    IonGrid,
    PrintValue
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
    formattingDate(val, format) {
      return moment(val).format(format)
    },
    goTo (url) {
      window.location.href = url
    }
  }
});
</script>

<style scoped>
</style>