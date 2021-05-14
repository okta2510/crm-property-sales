<template>
  <ion-grid class="ion-no-padding component-form">
    <ion-row>
      <ion-col size-md="4" size-xs="10" offset-md="4" offset-xs="1">
        <div class="heading-page text-center mb-30">
          <h1 class="text-center title mt-0 mb-1" @click="showPayload">Cetak Materi</h1>
          <span class="d-block text-center">Lengkapi kolom informasi dibawah</span>
        </div>
        <form v-on:submit.prevent="submitPayload" class="form-custom logged">
          <div class="input-wrap mb-0">
            <ion-item class="md ion-no-padding-start ion-no-padding-end">
              <ion-label position="stacked">Tipe Printing</ion-label>
              <ion-select :value="marketing_tool_type" ok-text="Pilih" v-model="marketing_tool_type" cancel-text="Tutup">
                <ion-select-option v-for="(item, index) in typeTools" :key="index" :value="item.id">{{item.name}}</ion-select-option>
              </ion-select>
              <input type="text" class="not-displayed" :value="marketing_tool_type" required>
            </ion-item>
            <ion-item class="md ion-no-padding-start ion-no-padding-end">
              <ion-label position="stacked">Ukuran</ion-label>
              <ion-select :value="marketing_tool_size" ok-text="Pilih" v-model="marketing_tool_size" cancel-text="Tutup">
                <ion-select-option value="50x40">50x40 cm</ion-select-option>
                <ion-select-option value="90x60">90x60 cm</ion-select-option>
              </ion-select>
               <input type="text" class="not-displayed" :value="marketing_tool_size" required>
            </ion-item>
            <ion-item class="md ion-no-padding-start ion-no-padding-end">
              <ion-label position="stacked">Tipe Transaksi</ion-label>
              <ion-select :value="transaction_type" v-model="transaction_type" ok-text="Pilih" cancel-text="Tutup">
                <ion-select-option value="dijual">Dijual</ion-select-option>
                <ion-select-option value="disewa">Disewa</ion-select-option>
              </ion-select>
              <input type="text" class="not-displayed" :value="transaction_type" required>
            </ion-item>
            <ion-item class="md ion-no-padding-start ion-no-padding-end">
              <ion-label color="medium" position="stacked">Nama Agent</ion-label>
              <ion-input id="" v-model="agent_name" placeholder="" autocapitalize="off" title="" type="text" required>
              </ion-input>
            </ion-item>
            <ion-item class="md ion-no-padding-start ion-no-padding-end">
              <ion-label color="medium" position="stacked">Jumlah (pcs)</ion-label>
              <ion-input id="" placeholder="" v-model="quantity" autocapitalize="off" title="" type="number" required>
              </ion-input>
            </ion-item>
            <ion-item class="md ion-no-padding-start ion-no-padding-end">
              <ion-label color="medium" position="stacked">Nomor Kontak Agent</ion-label>
              <ion-input id="" placeholder="" v-model="agent_contact" autocapitalize="off" title="" type="phone" required>
              </ion-input>
            </ion-item>
            <ion-item class="md photo  ion-no-padding-start ion-no-padding-end bg-transparent mt-3">
              <ion-label color="medium" position="stacked">Office Logo</ion-label>
              <div class="component-upload-photo mt-2 mb-3">
                <ion-button class="btn-take-photo" @click="takePhoto()">
                  <ion-icon :icon="camera" slot="icon-only"></ion-icon>
                </ion-button>
                <img :src="bannerPhoto" />
              </div>
                <input type="text" class="not-displayed" v-model="bannerPhoto" required>
            </ion-item>

            <div class="mt-3 text-right">
              <ion-button
              :disabled="submitting"
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
      marketing_tool_type : '',
      marketing_tool_size : '',
      transaction_type : '',
      for_sale: '',
      for_lease: '',
      agent_name : '',
      agent_contact : '',
      quantity: null
    }
  },
  setup(){
    const bannerPhoto = ref('');
    const router = useRouter();

    const takePhoto = async () => {
      const image = await Camera.getPhoto({
        quality: 80,
        // allowEditing: true,
        resultType: CameraResultType.Base64,
        source: CameraSource.Prompt
      });
      console.log(image)
      let url = `data:image/${image.format};base64, ${image.base64String}`
      bannerPhoto.value = url;
    }

    return {
      router,
      bannerPhoto,
      takePhoto,
      camera
    }
  },
  props: {
    typeTools: {
      type: Array,
      default: function () {
        return []
      }
    },
    submitting: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
  },
  computed: {
    payload: function() {
      return {
        marketing_tool_type : this.marketing_tool_type,
        marketing_tool_size : this.marketing_tool_size,
        transaction_type : this.transaction_type,
        office_logo : this.bannerPhoto,
        agent_name : this.agent_name,
        agent_contact : this.agent_contact,
        quantity: parseInt(this.quantity)
      }
    }
  },
  methods: {
    showPayload: function () {
      console.log(this.payload)
    },
    submitPayload: function() {
      console.log(this.payload)
      this.$emit('submitMarketing',this.payload)
    }
  }
});
</script>

<style scoped>

</style>