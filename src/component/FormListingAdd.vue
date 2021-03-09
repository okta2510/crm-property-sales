<template>
  <ion-grid class="ion-no-padding component-form">
    <ion-row>
      <ion-col size-md="4" size-xs="10" offset-md="4" offset-xs="1">
        <div class="heading-page text-center mb-30">
          <h1 class="text-center title mt-0 mb-1">Listing Baru</h1>
          <span class="d-block text-center">Lengkapi form dibawah untuk upload</span>
        </div>
        <form v-on:submit.prevent="submitPayload" class="form-custom logged">
          <div class="input-wrap mb-0">
            <ion-item class="md ion-no-padding-start ion-no-padding-end">
              <ion-label color="medium" position="stacked">Alamat Listing</ion-label>
              <ion-textarea rows="3" cols="20" id="" placeholder="" autocapitalize="off" title="" value="" required>
              </ion-textarea>
            </ion-item>
            <ion-item class="md ion-no-padding-start ion-no-padding-end">
              <ion-label color="medium" position="stacked">Harga</ion-label>
              <ion-input id="" placeholder="" autocapitalize="off" title="" type="text" value="" required>
              </ion-input>
            </ion-item>
            <ion-item class="md ion-no-padding-start ion-no-padding-end">
              <ion-label color="medium" position="stacked">Komisi</ion-label>
              <ion-input id="" placeholder="" autocapitalize="off" title="" type="text" value="" required>
              </ion-input>
            </ion-item>
            <ion-item class="md ion-no-padding-start ion-no-padding-end">
              <ion-label position="stacked">Tipe Listing</ion-label>
              <ion-select value="" ok-text="Pilih" cancel-text="Tutup">
                <ion-select-option value="1">Dijual</ion-select-option>
                <ion-select-option value="2">Disewa</ion-select-option>
              </ion-select>
            </ion-item>

            <ion-item class="md ion-no-padding-start ion-no-padding-end">
              <ion-label color="medium" position="stacked">Deskripsi Listing</ion-label>
              <ion-textarea rows="2" cols="20" id="" placeholder="" autocapitalize="off" title="" value="" required>
              </ion-textarea>
            </ion-item>

            <ion-item class="md ion-no-padding-start ion-no-padding-end">
              <ion-label position="stacked">Jenis Properti</ion-label>
              <ion-select value="" ok-text="Pilih" cancel-text="Tutup">
                <ion-select-option value="1">Rumah</ion-select-option>
                <ion-select-option value="2">Apartement</ion-select-option>
                <ion-select-option value="3">Kavling</ion-select-option>
              </ion-select>
            </ion-item>
            
            <ion-item class="md ion-no-padding-start ion-no-padding-end">
              <ion-label color="medium" position="stacked">Luas Tanah</ion-label>
              <ion-input id="" placeholder="" autocapitalize="off" title="" type="text" value="" required>
              </ion-input>
            </ion-item>

            <ion-item class="md ion-no-padding-start ion-no-padding-end">
              <ion-label color="medium" position="stacked">Luas Bangunan</ion-label>
              <ion-input id="" placeholder="" autocapitalize="off" title="" type="text" value="" required>
              </ion-input>
            </ion-item>
            
            <ion-item class="md ion-no-padding-start ion-no-padding-end">
              <ion-label color="medium" position="stacked">Jumlah Lantai</ion-label>
              <ion-input id="" placeholder="" autocapitalize="off" title="" type="text" value="" required>
              </ion-input>
            </ion-item>

            <ion-item class="md ion-no-padding-start ion-no-padding-end">
              <ion-label color="medium" position="stacked">Jumlah Kamar Tidur</ion-label>
              <ion-input id="" placeholder="" autocapitalize="off" title="" type="text" value="" required>
              </ion-input>
            </ion-item>

            <ion-item class="md ion-no-padding-start ion-no-padding-end">
              <ion-label color="medium" position="stacked">Jumlah Kamar Mandi</ion-label>
              <ion-input id="" placeholder="" autocapitalize="off" title="" type="text" value="" required>
              </ion-input>
            </ion-item>

            <ion-item class="md ion-no-padding-start ion-no-padding-end">
              <ion-label color="medium" position="stacked">Kapasitas Garasi</ion-label>
              <ion-input id="" placeholder="" autocapitalize="off" title="" type="text" value="" required>
              </ion-input>
            </ion-item>

            <ion-item class="md ion-no-padding-start ion-no-padding-end">
              <ion-label color="medium" position="stacked">Kapasitas Carpot</ion-label>
              <ion-input id="" placeholder="" autocapitalize="off" title="" type="text" value="" required>
              </ion-input>
            </ion-item>

            <ion-item class="md ion-no-padding-start ion-no-padding-end">
              <ion-label color="medium" position="stacked">Properti Menghadap ke arah</ion-label>
              <ion-input id="" placeholder="" autocapitalize="off" title="" type="text" value="" required>
              </ion-input>
            </ion-item>

            <ion-item class="md ion-no-padding-start ion-no-padding-end">
              <ion-label color="medium" position="stacked">Status Sertifikat</ion-label>
              <ion-input id="" placeholder="" autocapitalize="off" title="" type="text" value="" required>
              </ion-input>
            </ion-item>

            <ion-item class="md ion-no-padding-start ion-no-padding-end">
              <ion-label color="medium" position="stacked">Daya Listrik</ion-label>
              <ion-input id="" placeholder="" autocapitalize="off" title="" type="text" value="" required>
              </ion-input>
            </ion-item>

            <ion-item class="md ion-no-padding-start ion-no-padding-end">
              <ion-label color="medium" position="stacked">Kondisi Interior</ion-label>
              <ion-input id="" placeholder="" autocapitalize="off" title="" type="text" value="" required>
              </ion-input>
            </ion-item>

            <ion-item class="md ion-no-padding-start ion-no-padding-end">
              <ion-label color="medium" position="stacked">Fasikitas Kawasan</ion-label>
              <ion-input id="" placeholder="" autocapitalize="off" title="" type="text" value="" required>
              </ion-input>
            </ion-item>

            <ion-item class="md ion-no-padding-start ion-no-padding-end">
              <ion-label color="medium" position="stacked">Nama Tertulis</ion-label>
              <ion-input id="" placeholder="" autocapitalize="off" title="" type="text" value="" required>
              </ion-input>
            </ion-item>
            <small class="text-light"><i>*Sebagai Kontak Untuk di Perjanjian Jasa Pemasaran</i></small>

            <ion-item class="md ion-no-padding-start ion-no-padding-end">
              <ion-label color="medium" position="stacked">Status Kepemilikan</ion-label>
              <ion-input id="" placeholder="" autocapitalize="off" title="" type="text" value="" required>
              </ion-input>
            </ion-item>

             <ion-item class="md ion-no-padding-start ion-no-padding-end">
              <ion-label position="stacked">Tipe Perjanjian</ion-label>
              <ion-select value="" ok-text="Pilih" cancel-text="Tutup">
                <ion-select-option value="1">Regular</ion-select-option>
                <ion-select-option value="2">Istimewa</ion-select-option>
              </ion-select>
            </ion-item>

            <ion-item class="md photo ion-no-padding-start ion-no-padding-end bg-transparent mt-3">
              <ion-label color="medium" position="stacked">Foto Properti</ion-label>
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
                <strong>Tambahkan</strong>
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
  name: 'FormListingAdd',
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