<template>
  <ion-grid class="ion-no-padding component-form" id="top-page">
    <ion-row>
      <ion-col size-md="4" size-xs="10" offset-md="4" offset-xs="1">
        <div class="heading-page text-center mb-30">
          <h1 class="text-center title mt-0 mb-1" @click="showPayload">Listing Baru</h1>
          <span class="d-block text-center">Lengkapi form dibawah untuk upload</span>
        </div>
        <form v-on:submit.prevent="checkValidityForm" class="form-custom logged">
          <div class="input-wrap mb-0">
            <ion-item class="md ion-no-padding-start ion-no-padding-end mb-30">
              <!-- required  -->
              <ion-label color="medium" position="stacked">Nama Property</ion-label>
              <ion-input id="" placeholder="" autocapitalize="off" title="" type="text" v-model="name">
              </ion-input>
            </ion-item>
            <ion-label color="medium" position="stacked">Titik Lokasi</ion-label>
            <GoogleMapSearch :disableUI="false"
              class="mt-10"
              :zoom="14"
              mapType="roadmap"
              :markers="markers"
              :center="{ lat: 38.8977859, lng: -77.0057621 }"
              :mapDidLoad="handleMapDidLoad">
              </GoogleMapSearch>
               <ion-input id="" placeholder="Ketik Nama Lokasi..." autocapitalize="off" title="" type="text" class="w-100 mt-10 mb-10 px-0"  v-model="location"> </ion-input>
              <ion-button class="ios md" @click="findLocation" size="" expand="block">Cari Lokasi</ion-button>
              <p v-if="locResult">
                lat {{ locresult.position }} {{locresult.address}}
              </p>
            <ion-item class="md ion-no-padding-start ion-no-padding-end">
              <!-- required  -->
              <ion-label color="medium" position="stacked">Alamat Listing</ion-label>
              <ion-textarea rows="3" cols="20" id="" placeholder="" autocapitalize="off" title="" v-model="address">
              </ion-textarea>
            </ion-item>
            <ion-item class="md ion-no-padding-start ion-no-padding-end">
              <!-- required  -->
              <ion-label color="medium" position="stacked">Harga</ion-label>
              <ion-input id="" placeholder="" autocapitalize="off" title="" type="number"  v-model="price">
              </ion-input>
            </ion-item>
            <ion-item class="md ion-no-padding-start ion-no-padding-end">
              <!-- required -->
              <ion-label color="medium" position="stacked">Komisi</ion-label>
              <ion-input id="" placeholder="" autocapitalize="off" title="" type="number"  v-model="comission">
              </ion-input>
            </ion-item>
            <ion-item class="md ion-no-padding-start ion-no-padding-end">
              <!-- required -->
              <ion-label position="stacked">Tipe Listing</ion-label>
              <ion-select  v-model="type_listing" ok-text="Pilih" cancel-text="Tutup">
                <ion-select-option value="dijual">Dijual</ion-select-option>
                <ion-select-option value="disewa">Disewa</ion-select-option>
              </ion-select>
            </ion-item>

            <ion-item class="md ion-no-padding-start ion-no-padding-end">
              <!-- required  -->
              <ion-label color="medium" position="stacked">Deskripsi Listing</ion-label>
              <ion-textarea rows="2" cols="20" id="" placeholder="" autocapitalize="off" title=""  v-model="description">
              </ion-textarea>
            </ion-item>

            <ion-item class="md ion-no-padding-start ion-no-padding-end">
              <!-- required  -->
              <ion-label position="stacked">Jenis Properti</ion-label>
              <ion-select  v-model="property_type" ok-text="Pilih" cancel-text="Tutup">
                <ion-select-option value="rumah">Rumah</ion-select-option>
                <ion-select-option value="apartment">Apartement</ion-select-option>
                <ion-select-option value="kavling">Kavling</ion-select-option>
              </ion-select>
            </ion-item>
            
            <ion-item class="md ion-no-padding-start ion-no-padding-end">
              <!-- required -->
              <ion-label color="medium" position="stacked">Luas Tanah</ion-label>
              <ion-input id="" placeholder="" autocapitalize="off" title="" type="number"  v-model="surface_area">
              </ion-input>
            </ion-item>

            <ion-item class="md ion-no-padding-start ion-no-padding-end">
              <!-- required -->
              <ion-label color="medium" position="stacked">Luas Bangunan</ion-label>
              <ion-input id="" placeholder="" autocapitalize="off" title="" type="number"  v-model="building_area">
              </ion-input>
            </ion-item>
            
            <ion-item class="md ion-no-padding-start ion-no-padding-end">
              <!-- required -->
              <ion-label color="medium" position="stacked">Jumlah Lantai</ion-label>
              <ion-input id="" placeholder="" autocapitalize="off" title="" type="number"  v-model="floor">
              </ion-input>
            </ion-item>

            <ion-item class="md ion-no-padding-start ion-no-padding-end">
              <!-- required -->
              <ion-label color="medium" position="stacked">Jumlah Kamar Tidur</ion-label>
              <ion-input id="" placeholder="" autocapitalize="off" title="" type="number"  v-model="bedroom">
              </ion-input>
            </ion-item>

            <ion-item class="md ion-no-padding-start ion-no-padding-end">
              <!-- required -->
              <ion-label color="medium" position="stacked">Jumlah Kamar Mandi</ion-label>
              <ion-input id="" placeholder="" autocapitalize="off" title="" type="number"  v-model="bathroom">
              </ion-input>
            </ion-item>

            <ion-item class="md ion-no-padding-start ion-no-padding-end">
              <!-- required -->
              <ion-label color="medium" position="stacked">Kapasitas Garasi</ion-label>
              <ion-input id="" placeholder="" autocapitalize="off" title="" type="number"  v-model="garage_capacity">
              </ion-input>
            </ion-item>

            <ion-item class="md ion-no-padding-start ion-no-padding-end">
              <!-- required -->
              <ion-label color="medium" position="stacked">Kapasitas Carpot</ion-label>
              <ion-input id="" placeholder="" autocapitalize="off" title="" type="number"  v-model="carport_capacity">
              </ion-input>
            </ion-item>

            <ion-item class="md ion-no-padding-start ion-no-padding-end">
              <!-- required -->
              <ion-label color="medium" position="stacked">Properti Menghadap ke arah</ion-label>
              <ion-select  v-model="property_heading" ok-text="Pilih" cancel-text="Tutup">
                <ion-select-option value="timur">Timur</ion-select-option>
                <ion-select-option value="tenggara">Tenggara</ion-select-option>
                <ion-select-option value="selatan">Selatan</ion-select-option>
                <ion-select-option value="barat daya">Barat Daya</ion-select-option>
                <ion-select-option value="barat">Barat</ion-select-option>
                <ion-select-option value="barat laut">Barat Laut</ion-select-option>
                <ion-select-option value="utara">Utara</ion-select-option>
                <ion-select-option value="timur laut">Timur Laut</ion-select-option>
              </ion-select>
            </ion-item>

            <ion-item class="md ion-no-padding-start ion-no-padding-end">
              <!-- required -->
              <ion-label color="medium" position="stacked">Status Sertifikat</ion-label>
              <ion-select  v-model="certificate" ok-text="Pilih" cancel-text="Tutup">
                <ion-select-option value="ppjb">PPJB</ion-select-option>
                <ion-select-option value="girik">Girik</ion-select-option>
                <ion-select-option value="ajb">AJB</ion-select-option>
                <ion-select-option value="hgb">HGB</ion-select-option>
              </ion-select>
            </ion-item>

            <ion-item class="md ion-no-padding-start ion-no-padding-end">
               <!-- required -->
              <ion-label color="medium" position="stacked">Daya Listrik</ion-label>
              <ion-input id="" placeholder="" autocapitalize="off" title="" type="number"  v-model="electricity">
              </ion-input>
            </ion-item>

            <ion-item class="md ion-no-padding-start ion-no-padding-end">
               <!-- required -->
              <ion-label color="medium" position="stacked">Kondisi Interior</ion-label>
              <ion-select  v-model="interior" ok-text="Pilih" cancel-text="Tutup">
                <ion-select-option value="furnished">Furnished</ion-select-option>
                <ion-select-option value="semi">Semi</ion-select-option>
                <ion-select-option value="non furnished">Non Furnished</ion-select-option>
              </ion-select>
            </ion-item>

            <ion-item class="md ion-no-padding-start ion-no-padding-end">
               <!-- required -->
              <ion-label color="medium" position="stacked">Fasilitas Kawasan</ion-label>
              <ion-textarea rows="3" cols="20" id="" placeholder="" autocapitalize="off" title=""  v-model="facilities">
              </ion-textarea>
            </ion-item>

            <ion-item class="md ion-no-padding-start ion-no-padding-end">
               <!-- required -->
              <ion-label color="medium" position="stacked">Nama Tertulis</ion-label>
              <ion-input id="" placeholder="" autocapitalize="off" title="" type="text"  v-model="contact_name_for_marketing_contract">
              </ion-input>
            </ion-item>
            <small class="text-light"><i>*Sebagai Kontak Untuk di Perjanjian Jasa Pemasaran</i></small>

            <ion-item class="md ion-no-padding-start ion-no-padding-end">
               <!-- required -->
              <ion-label color="medium" position="stacked">Status Kepemilikan</ion-label>
              <ion-select  v-model="ownership_status" ok-text="Pilih" cancel-text="Tutup">
                <ion-select-option value="pemilik">Pemilik</ion-select-option>
                <ion-select-option value="kuasa pemilik">Kuasa Pemilik</ion-select-option>
              </ion-select>
            </ion-item>

             <ion-item class="md ion-no-padding-start ion-no-padding-end">
                <!-- required -->
              <ion-label position="stacked">Tipe Perjanjian</ion-label>
              <ion-select  v-model="type_contract" ok-text="Pilih" cancel-text="Tutup">
                <ion-select-option value="ekslusif">Ekslusif</ion-select-option>
                <ion-select-option value="non ekslusif">Non Ekslusif</ion-select-option>
              </ion-select>
            </ion-item>

            <ion-item class="md photo ion-no-padding-start ion-no-padding-end bg-transparent mt-3">
               <!-- required -->
              <ion-label color="medium" position="stacked">Foto Properti</ion-label>

              <div class="component-upload-multi-photo mt-2 mb-3" @click="takePhoto()" v-show="albums && albums.length < 5">
                <ion-button class="btn-take-photo">
                  <ion-icon :icon="camera" slot="icon-only"></ion-icon>
                </ion-button>
                <label for="">Add Image</label>
                <!-- <img :src="listPhoto" /> -->
              </div>
              <!-- <input type="text" class="not-displayed" v-model="picture" required> -->
              <ul class="albums-multi-image list-unstyled" v-if="albums && albums.length > 0">
                <li v-for="(item, index) in albums" :key="index">
                  <img :src="typeof item === 'object' ? item.image : item" width="100" height="100"/>
                  <ion-button
                  @click="removeImage(index)"
                  color="danger"
                  size="small"
                  class="ios md">
                    <ion-icon :icon="trashOutline" slot="icon-only"></ion-icon>
                    <label for="">Delete</label>
                  </ion-button>
                </li>
              </ul>
              <!-- <input type="text" class="not-displayed" :value="albums.length > 0 ? 'filled' : ''" required> -->
            </ion-item>
            
            <div class="mt-3 text-right">
              <ion-button
              color="secondary"
              size="large"
              class="ios md"
              expand="block"
              :disabled="submitting || idDetail && Object.keys(detailListing).length === 0"
              type="submit">
                <strong>{{detailListing && Object.keys(detailListing).length > 0 ? 'Update Perubahan' : 'Tambahkan'}}</strong>
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
  IonTextarea,
  IonButton,
  IonIcon,
  IonSelect,
  IonSelectOption,
  IonInput,
  toastController
} from '@ionic/vue';
import { ref, defineComponent } from 'vue';
import { camera,trashOutline } from 'ionicons/icons';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
const { Camera } = Plugins;
import { useRouter } from 'vue-router'
import GoogleMapSearch from '@/component/GoogleMapSearch.vue'

export default defineComponent({
  name: 'FormListingAdd',
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonItem,
    IonLabel,
    IonTextarea,
    IonButton,
    IonIcon,
    IonSelect,
    IonSelectOption,
    IonInput,
    GoogleMapSearch
  },
  setup(){
    // const listPhoto = [];
    let geoCoderService = null
    const location = ref('');
    const locResult = ref();
    const router = useRouter();
    const listPhoto = ref('')
    const markers = [{
      lat: 38.8977859, lng: -77.0057621, title: 'test map'
    }]

    const takePhoto = async () => {
      const image = await Camera.getPhoto({
        quality: 70,
        // allowEditing: false,
        resultType: CameraResultType.Base64,
        source: CameraSource.Photos,
        saveToGallery: true
      });
      let url = `data:image/${image.format};base64, ${image.base64String}`
      listPhoto.value = url;
    }

    const resetPhoto = function () {
      listPhoto.value = ""
    }
    
  // find lat lng base on address
    const findLocation = () => {
       geoCoderService.geocode({address: location.value}, (results, status) => {
         if (status !==  'OK') {
           console.log(results,status)
           alert("no result")
         } else {
           console.log(results)
           locResult.value.position = {
             position: results[0].geometry.locationn.toJSON(),
             address: results[0].formatted_address
           }
           locResult.value.address = results[0].formatted_address
         }
       })
    }

    const handleMapDidLoad = (map, GServices) => {
      console.log('map loaded')
      console.log(map)
      console.log(GServices)
      geoCoderService = new GServices.Geocoder();
    }

    return {
      router,
      listPhoto,
      takePhoto,
      camera,
      trashOutline,
      resetPhoto,
      markers,
      handleMapDidLoad,
      findLocation,
      location,
      locResult
    }
  },
  watch: {
    detailListing: function (val) {
      if (val && Object.keys(val).length > 0) {
        let {address, name, longitude, latitude, price, comission, type_listing, description, property_type, surface_area, building_area, floor, bedroom, bathroom, garage_capacity, carport_capacity, property_heading, certificate, electricity, interior, facilities, contact_name_for_marketing_contract, ownership_status, type_contract, gallery} = val
        this.address = address || ''
        this.name = name || ''
        this.longitude = longitude || ''
        this.latitude = latitude || ''
        this.price = price || ''
        this.comission = comission || ''
        this.type_listing = type_listing || ''
        this.description = description || ''
        this.property_type = property_type || ''
        this.surface_area = surface_area || ''
        this.building_area = building_area || ''
        this.floor = floor || ''
        this.bedroom = bedroom || ''
        this.bathroom = bathroom || ''
        this.garage_capacity = garage_capacity || ''
        this.carport_capacity = carport_capacity || ''
        this.property_heading = property_heading || ''
        this.certificate = certificate || ''
        this.electricity = electricity || ''
        this.interior = interior || ''
        this.facilities = facilities || ''
        this.contact_name_for_marketing_contract = contact_name_for_marketing_contract || ''
        this.ownership_status = ownership_status || ''
        this.type_contract = type_contract || ''
        this.albums = gallery.length > 0 ? [...gallery] : []
      }
    },
    listPhoto: function (val) {
      if (val) {
        this.albums.push(val)
        console.log(this.albums)
      }
    }
  },
  props: {
    detailListing: {
      type: Object,
      default: function () {
        return {}
      }
    },
    idDetail: {
      type: String,
      default: undefined
    },
    submitting: {
      type: Boolean,
      default: false
    }
  },
  data: function() {
    return {
      deleteImages: [],
      albums: [],
      address: '',
      name: '',
      longitude: '-123',
      latitude: '123',
      price: '',
      comission: '',
      type_listing: '',
      description: '',
      property_type: '',
      surface_area: '',
      building_area: '',
      floor: '',
      bedroom: '',
      bathroom: '',
      garage_capacity: '',
      carport_capacity: '',
      property_heading: '',
      certificate: '',
      electricity: '',
      interior: '',
      facilities: '',
      contact_name_for_marketing_contract: '',
      ownership_status: '',
      type_contract: ''
    }
  },
  mounted() {
  },
  computed: {
    payload: function() {
      return {
        address: this.address,
        name: this.name,
        longitude: this.longitude,
        latitude: this.latitude,
        price: parseInt(this.price) || '',
        comission: parseInt(this.comission) || '',
        type_listing: this.type_listing,
        description: this.description,
        property_type: this.property_type,
        surface_area: parseInt(this.surface_area) || '',
        building_area: parseInt(this.building_area) || '',
        floor: parseInt(this.floor) || '',
        bedroom: parseInt(this.bedroom) || '',
        bathroom: parseInt(this.bathroom) || '',
        garage_capacity: parseInt(this.garage_capacity) || '',
        carport_capacity: parseInt(this.carport_capacity) || '',
        property_heading: this.property_heading,
        certificate: this.certificate,
        electricity: parseInt(this.electricity) || '',
        interior: this.interior,
        facilities: this.facilities,
        contact_name_for_marketing_contract: this.contact_name_for_marketing_contract,
        ownership_status: this.ownership_status,
        type_contract: this.type_contract
      }
    }
  },
  methods: {
    async openToast(message='empty toast', duration=2000, color='default', position='bottom') {
        let toast = await toastController
          .create({
            message: message,
            duration: duration,
            animated: true,
            cssClass: 'custom-toast',
            color: color,
            position: position
          })
        toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
      return toast.present();
    },
    removeImage: function (index) {
      if (typeof this.albums[index] === 'object') {
        this.deleteImages.push(this.albums[index])
      }
      this.albums.splice(index, 1)
      this.resetPhoto()
      console.log(this.albums)
    },
    showPayload: function () {
      console.log(this.payload)
      console.log(this.albums)
    },
    submitPayload: function() {
      this.$emit('submitListing', this.payload, this.albums, this.deleteImages)
      this.deleteImages = []
    },
    checkValidityForm: function() {
      // document.getElementById("top-page").scrollIntoView()
      if (!this.name) {
        this.openToast('Nama Wajib Diisi', 3000, 'danger', 'top')
        return
      }
      if (!this.address) {
        this.openToast('Alamat Wajib Diisi', 3000, 'danger', 'top')
        return
      }
      if (!this.price) {
        this.openToast('Harga Wajib Diisi', 3000, 'danger', 'top')
        return
      }
      if (!this.comission) {
        this.openToast('Komisi Wajib Diisi', 3000, 'danger', 'top')
        return
      }
      if (!this.type_listing) {
        this.openToast('Tipe Listing Wajib Diisi', 3000, 'danger', 'top')
        return
      }
      if (!this.description) {
        this.openToast('Deskripsi Wajib Diisi', 3000, 'danger', 'top')
        return
      }
      if (!this.property_type) {
        this.openToast('Tipe Properti Wajib Diisi', 3000, 'danger', 'top')
        return
      }
      if (!this.surface_area) {
        this.openToast('Luas Tanah Wajib Diisi', 3000, 'danger', 'top')
        return
      }
      if (!this.building_area) {
        this.openToast('Luas Bangunan Wajib Diisi', 3000, 'danger', 'top')
        return
      }
      if (!this.floor) {
        this.openToast('Jumlah Lantai Wajib Diisi', 3000, 'danger', 'top')
        return
      }
      if (!this.bedroom) {
        this.openToast('Jumlah Kamar Wajib Diisi', 3000, 'danger', 'top')
        return
      }
      if (!this.bathroom) {
        this.openToast('Jumlah Kamar Tidur Wajib Diisi', 3000, 'danger', 'top')
        return
      }
      if (!this.garage_capacity) {
        this.openToast('Nama Wajib Diisi', 3000, 'danger', 'top')
        return
      }
      if (!this.carport_capacity) {
        this.openToast('Kapasitas Karpot Wajib Diisi', 3000, 'danger', 'top')
        return
      }
      if (!this.property_heading) {
        this.openToast('Arah Menghadap Bangunan Wajib Diisi', 3000, 'danger', 'top')
        return
      }
      if (!this.certificate) {
        this.openToast('Sertifikat Wajib Diisi', 3000, 'danger', 'top')
        return
      }
      if (!this.electricity) {
        this.openToast('Daya Listrik Wajib Diisi', 3000, 'danger', 'top')
        return
      }
      if (!this.interior) {
        this.openToast('Kondisi Interior Wajib Diisi', 3000, 'danger', 'top')
        return
      }
      if (!this.facilities) {
        this.openToast('Fasilitas Wajib Diisi', 3000, 'danger', 'top')
        return
      }
      if (!this.contact_name_for_marketing_contract) {
        this.openToast('Kontak Marketing Wajib Diisi', 3000, 'danger', 'top')
        return
      }
      if (!this.ownership_status) {
        this.openToast('Status Kepemilikan Wajib Diisi', 3000, 'danger', 'top')
        return
      }
      if (!this.type_contract) {
        this.openToast('Tipe Kontrak Wajib Diisi', 3000, 'danger', 'top')
        return
      }
      if (!this.albums.length > 0) {
        this.openToast('Foto Properti Wajib Diisi', 3000, 'danger', 'top')
        return
      }
      this.submitPayload()
    }
  }
});
</script>

<style scoped>

</style>