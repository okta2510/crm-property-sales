<template>
  <ion-grid class="ion-no-padding">
    <ion-row>
      <ion-col size-md="4" size-xs="10" offset-md="4" offset-xs="1">
        <div class="heading-page text-center mb-30">
          <h1 class="text-center title mt-0 mb-1">Buat Akun</h1>
          <span class="d-block text-center">Lengkapi form dibawah untuk lanjut</span>
        </div>
        <form v-on:submit.prevent="submitPayload" class="form-custom logged">
          <div class="input-wrap mb-0">
            <ion-item class="md photo  ion-no-padding bg-transparent">
              <ion-label color="medium" position="stacked">Profile Picture</ion-label>
              <div class="component-upload-photo mt-2 mb-3">
                <ion-button class="btn-take-photo" @click="takePhoto()">
                  <ion-icon :icon="camera" slot="icon-only"></ion-icon>
                </ion-button>
                <img :src="profilePhoto" />
              </div>
                <input type="text" class="not-displayed" v-model="picture" required>
            </ion-item>
          </div>
        </form>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script>
import {
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon
} from '@ionic/vue';
import { ref, defineComponent } from 'vue';
import { camera } from 'ionicons/icons';
const { Camera } = Plugins;
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'FormMarketingAdd',
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonItem,
    IonLabel,
    IonButton,
    IonIcon
  },
  data: function() {
    return {
      type: 'banner',
      picture: null
    }
  },
  setup(){
    const profilePhoto = ref('');
    const router = useRouter();

    const takePhoto = async () => {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Base64,
        source: CameraSource.Prompt
      });
      console.log(image)
      let url = `data:image/${image.format};base64, ${image.base64String}`
      profilePhoto.value = url;
    }

    return {
      router,
      profilePhoto,
      takePhoto,
      camera
    }
  },
  props: {
  },
  mounted() {
  },
  computed: {
    payload: function() {
      return {
        type: this.type
      }
    }
  },
  methods: {
    submitPayload: function() {
      console.log(this.payload)
    }
  }
});
</script>

<style scoped>

</style>