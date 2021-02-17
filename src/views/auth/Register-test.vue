<template>
    <ion-page>
      <ion-header translucent>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
           <ion-back-button default-href="" @click="() => router.push('/login')"></ion-back-button>
          </ion-buttons>
          <ion-title>Register</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        content
        <ion-slides @ionSlideDidChange="getIndex()" ref="slides" pager="false" scrollbar="false" :options="slideOpts">
          <ion-slide>
            <h1>Slide 1</h1>
          </ion-slide>
          <ion-slide>
            <h1>Slide 2</h1>
          </ion-slide>
          <ion-slide>
            <h1>Slide 3</h1>
          </ion-slide>
        </ion-slides>

        <ion-button @click="next">next</ion-button>
      </ion-content>
    </ion-page>
</template>
<script>
import {IonPage, IonContent, IonToolbar, IonTitle, IonButtons, IonSlides, IonSlide} from '@ionic/vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue';

export default {
  name: 'Register',
  setup() {
    const slides = ref();
    const router = useRouter();
    const slideOpts = {
      initialSlide: 0,
      speed: 400
    };

    const getIndex = () => {
      console.log(slides.value.$el.getActiveIndex())
    }
    
    const goNext = () => {
      slides.value.$el.slideNext()
    }

    const disableSwap = (val) => {
      slides.value.$el.lockSwipeToNext(val)
    }

    return { router, slideOpts, slides, getIndex, goNext, disableSwap };
  },
  components: {
    IonPage, IonContent, IonToolbar, IonTitle, IonButtons, IonSlides, IonSlide},
  methods: {
    next: function () {
      this.goNext()
    }
  },
  ionViewDidEnter() {
    this.disableSwap(true)
  },
  created: function () {
    console.log(this.router.params)
  }
}
</script>

<style  scoped>
ion-list {
  margin: 0;
}
ion-toolbar {
  --padding-top: 10px;
  --padding-bottom: 10px;
}
</style>