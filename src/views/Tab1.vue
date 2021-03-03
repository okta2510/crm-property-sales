<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>tab1</ion-title>
         <SearchBar
        v-on:searchEnter="getListing"
        searchType="Listing"
        :listResults="results"
        ></SearchBar>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">Hello World</ion-content>
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
import SearchBar from '@/component/SearchBar.vue'

export default defineComponent({
  components: {
    IonContent, 
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    SearchBar
  },
  setup() {
  }
});
</script>