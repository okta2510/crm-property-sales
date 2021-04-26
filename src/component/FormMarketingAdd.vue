<template>
  <ion-grid class="ion-no-padding component-form">
    <ion-row>
      <ion-col size-md="4" size-xs="10" offset-md="4" offset-xs="1">
        <div class="heading-page text-center mb-30">
          <h1 class="text-center title mt-0 mb-1">Cetak Materi</h1>
          <span class="d-block text-center">Lengkapi kolom informasi dibawah</span>
        </div>
        <form v-on:submit.prevent="submitPayload" class="form-custom logged">
          <div class="input-wrap mb-0">
            <ion-item class="md ion-no-padding-start ion-no-padding-end">
              <ion-label position="stacked">Tipe Printing</ion-label>
              <ion-select value="1" ok-text="Pilih" cancel-text="Tutup">
                <ion-select-option value="1">Banner</ion-select-option>
                <ion-select-option value="2">Spanduk</ion-select-option>
              </ion-select>
            </ion-item>
            <ion-item class="md ion-no-padding-start ion-no-padding-end">
              <ion-label position="stacked">Ukuran</ion-label>
              <ion-select value="1" ok-text="Pilih" cancel-text="Tutup">
                <ion-select-option value="1">50x40 cm</ion-select-option>
                <ion-select-option value="2">90x60 cm</ion-select-option>
              </ion-select>
            </ion-item>
            <ion-item class="md ion-no-padding-start ion-no-padding-end">
              <ion-label position="stacked">Tipe Transaksi</ion-label>
              <ion-select value="1" ok-text="Pilih" cancel-text="Tutup">
                <ion-select-option value="1">Dijual</ion-select-option>
                <ion-select-option value="2">Disewa</ion-select-option>
              </ion-select>
            </ion-item>
            <ion-item class="md ion-no-padding-start ion-no-padding-end">
              <ion-label color="medium" position="stacked">Nama Agent</ion-label>
              <ion-input id="" placeholder="" autocapitalize="off" title="" type="text" required>
              </ion-input>
            </ion-item>
            <ion-item class="md ion-no-padding-start ion-no-padding-end">
              <ion-label color="medium" position="stacked">Jumlah (pcs)</ion-label>
              <ion-input id="" placeholder="" autocapitalize="off" title="" type="text" required>
              </ion-input>
            </ion-item>
            <ion-item class="md ion-no-padding-start ion-no-padding-end">
              <ion-label color="medium" position="stacked">Nomor Kontak Agent</ion-label>
              <ion-input id="" placeholder="" autocapitalize="off" title="" type="phone" required>
              </ion-input>
            </ion-item>
            <ion-item class="md photo  ion-no-padding-start ion-no-padding-end bg-transparent mt-3">
              <ion-label color="medium" position="stacked">Office Logo</ion-label>
              <div class="component-upload-photo mt-2 mb-3">
                <ion-button class="btn-take-photo" @click="takePhoto()">
                  <ion-icon :icon="camera" slot="icon-only"></ion-icon>
                </ion-button>
                <img :src="profilePhoto" />
              </div>
                <input type="text" class="not-displayed" v-model="picture" required>
            </ion-item>

            <div class="mt-3 text-right">
              <ion-button
              color="secondary"
              size="large"
              class="ios md"
              expand="block"
              type="submit">
                <strong>Pesan Materi</strong>
              </ion-button>
          </div>
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
  IonIcon,
  IonSelect,
  IonSelectOption,
  IonInput
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
    IonIcon,
    IonSelect,
    IonSelectOption,
    IonInput
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
        // allowEditing: true,
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