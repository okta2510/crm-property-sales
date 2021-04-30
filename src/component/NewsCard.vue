<template>
  <div class="wrap-listing wrap-content component-news mx-0">
    <ion-item
    v-for="(detail, index) in listResults"
    :key="index"
    lines="none"
    class="list-item"
    :class="classProps"
    >
      <ion-card mode="ios" :href="`/berita/${detail.id}`">
        <div class="wrap-image">
          <img class="feature-img" :src="detail.thumbnail || `/assets/empty-image-square.png`" />
        </div>
        <ion-card-header>
          <div class="wrap-header">
            <ion-card-subtitle>{{formattingDate(detail.created, 'MMM DD, YYYY') || 'MMM DD, YYYY'}}</ion-card-subtitle>
            <ion-card-title>{{ detail.title || '-'}}</ion-card-title>
          </div>
        </ion-card-header>
        <ion-card-content v-if="detail.excerpt">
           <article v-html="detail.excerpt"></article>
        </ion-card-content>
         <ion-card-content v-else>
          -
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
import moment from 'moment';

export default defineComponent({
  name: 'NewsCard',
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
    formattingDate(val, format) {
      return moment(val).format(format)
    },
    limitContent: function (string) {
      let newString = ''
      if (this.detail.content.split(" ").length > 15) {
        this.detail.content.split(" ").forEach((element, index) => {
          if (15 > index) {
            newString = newString + element + ' '
          }
        });
        return newString + '...'
      } else {
        return string
      }
    }
  }
});
</script>

<style scoped>
</style>