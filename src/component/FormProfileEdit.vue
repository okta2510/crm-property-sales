<template>
  <ion-grid class="ion-no-padding component-form">
    <ion-row>
      <ion-col size-md="4" size-xs="10" offset-md="4" offset-xs="1">
        <div class="heading-page text-center mb-30" v-on:click="showPayload">
          <h1 class="text-center title mt-0 mb-1" >Perbaharui Info</h1>
          <span class="d-block text-center">Perbaharui informasi profil anda</span>
        </div>
        <ion-slides @ionSlideDidChange="getIndex()" ref="slides" pager="false" scrollbar="false" :options="slideOpts">
                <ion-slide name="slide 1">
                    <div class="d-block text-left w-100 mt-4">

                  <form id="step1" v-on:submit.prevent="checkValidityForm1" class="form-custom">
                      <h3 class="mt-0 sub-title h3">Halaman 1/2</h3>
                      <div class="input-wrap mb-0">
                        <ion-item class="md photo ion-no-padding-start ion-no-padding-end bg-transparent">
                          <!-- required  -->
                          <ion-label color="medium" position="stacked">Profile Picture</ion-label>
                          <div class="component-upload-photo mt-2 mb-3">
                            <ion-button class="btn-take-photo" @click="takePhoto('profile')">
                              <ion-icon :icon="camera" slot="icon-only"></ion-icon>
                            </ion-button>
                            <img :src="profilePhoto || profile_picture" />
                          </div>
                            <!-- <input type="text" class="not-displayed" :value="profile_picture || profilePhoto ? 'filled':''" required> -->
                        </ion-item>
                        <!-- <ion-item class="md ion-no-padding-start ion-no-padding-end">
                          <ion-label color="medium" position="stacked">Nama Lengkap</ion-label>
                          <ion-input name="full_name" id="full_name" placeholder="" autocapitalize="off" title="nama lengkap" type="text" v-model="name" :value="name" required>
                          </ion-input>
                        </ion-item> -->
                        <ion-item class="md ion-no-padding-start ion-no-padding-end">
                          <ion-label color="medium" position="stacked">Nama Publik</ion-label>
                          <ion-input id="nama_publik" placeholder="" autocapitalize="off" title="nama publik" type="text" v-model="display_name">
                          </ion-input>
                        </ion-item>
                        <ion-item class="md ion-no-padding-start ion-no-padding-end">
                          <ion-label color="medium" position="stacked">No HP (Primary)</ion-label>
                          <ion-input id="" placeholder="" autocapitalize="off"  title="+62812XXXXXX" onkeypress='return event.charCode >= 48 && event.charCode <= 57 || event.charCode == 43' type="tel" v-model="phone">
                          </ion-input>
                        </ion-item>
                        <ion-item class="md ion-no-padding-start ion-no-padding-end">
                          <ion-label color="medium" position="stacked">Nomor ke - 2</ion-label>
                          <ion-input id="" placeholder="" autocapitalize="off"  title="+62812XXXXXX" onkeypress='return event.charCode >= 48 && event.charCode <= 57 || event.charCode == 43' type="tel" v-model="phone_second">
                          </ion-input>
                        </ion-item>
                        <ion-item class="md ion-no-padding-start ion-no-padding-end">
                          <ion-label color="medium" position="stacked">Nomor ke - 3</ion-label>
                          <ion-input id="" placeholder="" autocapitalize="off"  title="+62812XXXXXX" onkeypress='return event.charCode >= 48 && event.charCode <= 57 || event.charCode == 43' type="tel" v-model="phone_third">
                          </ion-input>
                        </ion-item>
                        <!-- <ion-item class="md ion-no-padding-start ion-no-padding-end">
                          <ion-label color="medium" position="stacked">Email</ion-label>
                          <ion-input id="" placeholder="" autocapitalize="off" title="" type="email" v-model="email" :value="email" required>
                          </ion-input>
                        </ion-item> -->
                        <!-- <ion-item class="md ion-no-padding-start ion-no-padding-end">
                          <ion-label color="medium" position="stacked">Password</ion-label>
                          <ion-input id="" placeholder="" autocapitalize="off" title="" type="password" v-model="password" :value="password" required>
                          </ion-input>
                        </ion-item> -->
                        <!-- <ion-item class="md ion-no-padding-start ion-no-padding-end">
                          <ion-label color="medium" position="stacked">Ketik Ulang Password</ion-label>
                          <ion-input id="" placeholder="" autocapitalize="off" title="" type="password" v-model="rePassword" :value="rePassword" required>
                          </ion-input>
                        </ion-item> -->
                        <ion-item class="md ion-no-padding-start ion-no-padding-end">
                          <ion-label color="medium" position="stacked">Tanggal Lahir</ion-label>
                          <ion-datetime
                          mode="ios"
                          class="text-left"
                          min="1970-01"
                          max="2000"
                          v-model="dob"
                          :value="dob"
                          type="date"
                          @ionChange="dob = formattingDate($event.target.value, 'YYYY-MM-DD')"
                          name="date"
                          display-format="MMMM DD, YYYY"
                          month-short-names="jan, feb, mar, apr, mai, jun, jul, aug, sep, okt, nov, des"
                          required></ion-datetime>
                           <!-- <input type="text" class="not-displayed" v-model="dob" required> -->
                        </ion-item>
                        <ion-item class="md ion-no-padding-start ion-no-padding-end">
                          <ion-label color="medium" position="stacked">Tempat Kelahiran</ion-label>
                          <ion-input id="" placeholder="" autocapitalize="off" title="" type="text" v-model="pob">
                          </ion-input>
                        </ion-item>
                        <ion-item class="md ion-no-padding-start ion-no-padding-end">
                          <ion-label color="medium" position="stacked">Alamat</ion-label>
                          <ion-textarea rows="4" cols="20" id="" placeholder="" autocapitalize="off" title=""  v-model="address">
                          </ion-textarea>
                        </ion-item>
                      </div>

                      <div class="mt-3 text-right">
                        <ion-button name="selanjutnya" type="submit" class="clear-button" :disabled="gettingDetail">
                        Selanjutnya 
                          <ion-icon :icon="chevronForward"></ion-icon>
                        </ion-button>
                      </div>
                      </form>
                    </div>
                </ion-slide>
                <ion-slide>
                 
                     <div class="d-block text-left w-100 mt-4">
                        <form id="step2" v-on:submit.prevent="checkValidityForm2" class="form-custom">
                          <h3 class="mt-0 sub-title h3">Halaman 2/2</h3>
                          <div class="input-wrap mb-4">
                            <!-- <ion-item class="md ion-no-padding-start ion-no-padding-end">
                              <ion-label color="medium" position="stacked">Nomor KTP</ion-label>
                              <ion-input id="nomor_ktp" placeholder="" autocapitalize="off" title="no ktp" type="text" minlength="16" maxlength="16" v-model="ktp" :value="ktp" required>
                              </ion-input>
                            </ion-item>
                            <ion-item class="md ion-no-padding-start ion-no-padding-end">
                              <ion-label color="medium" position="stacked">Nomor NPWP</ion-label>
                              <ion-input id="nomor_ktp" placeholder="" autocapitalize="off" title="no npwp" type="text" minlength="15" maxlength="15" v-model="npwp" :value="npwp" required>
                              </ion-input>
                            </ion-item> -->
                            <!-- <ion-item class="md photo ion-no-padding-start ion-no-padding-end">
                              <ion-label color="medium" position="stacked">Upload KTP / NPWP</ion-label>
                              <div class="component-upload-photo mt-2 mb-3">
                                <ion-button class="btn-take-photo" @click="takePhoto('ktp')">
                                  <ion-icon :icon="camera" slot="icon-only"></ion-icon>
                                </ion-button>
                                <img :src="ktpPhoto" />
                              </div>
                               <input type="text" class="not-displayed" v-model="npwp_file" required>
                            </ion-item> -->
                            <ion-item class="md ion-no-padding-start ion-no-padding-end">
                              <ion-label color="medium" position="stacked">Bank</ion-label>
                              <ion-input id="nomor_ktp" placeholder="" autocapitalize="off" title="bank name" type="text" v-model="bank">
                              </ion-input>
                            </ion-item>
                            <ion-item class="md ion-no-padding-start ion-no-padding-end">
                              <ion-label color="medium" position="stacked">Cabang</ion-label>
                              <ion-input id="nomor_ktp" placeholder="" autocapitalize="off" title="cabang bank" type="text" v-model="bank_branch">
                              </ion-input>
                            </ion-item>
                            <ion-item class="md ion-no-padding-start ion-no-padding-end">
                              <ion-label color="medium" position="stacked">No Rekening</ion-label>
                              <ion-input id="nomor_ktp" placeholder="" autocapitalize="off" title="No Rekening" type="text" v-model="account_number">
                              </ion-input>
                            </ion-item>
                            <ion-item class="md ion-no-padding-start ion-no-padding-end">
                              <ion-label color="medium" position="stacked">Nama di Rekening</ion-label>
                              <ion-input id="nomor_ktp" placeholder="" autocapitalize="off" title="Nama di Rekening" type="text" v-model="account_holder">
                              </ion-input>
                            </ion-item>
                          </div>
                          <ion-button
                          :disabled="submitting"
                          color="warning"
                          size="large"
                          class="ios md"
                          expand="block"
                          type="submit">
                            <strong>Perbaharui Profil</strong>
                          </ion-button>
                        </form>
                      </div>
                </ion-slide>
              </ion-slides>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script>
import {
  IonLabel,
  IonIcon,
  IonButton,
  IonItem,
  IonCol,
  IonGrid,
  IonRow,
  IonSlides,
  IonSlide,
  IonTextarea,
  IonInput,
  IonDatetime,
  toastController
} from '@ionic/vue'
import { useRouter } from 'vue-router'
import { ref, defineComponent } from 'vue';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { chevronBack, chevronForward, camera } from 'ionicons/icons';
import moment from 'moment';
const { Camera } = Plugins; 

export default defineComponent({
  name: 'FormProfileEdit',
  components: {
    IonLabel,
    IonIcon,
    IonButton,
    IonItem,
    IonCol,
    IonGrid,
    IonRow,
    IonSlides,
    IonSlide,
    IonTextarea,
    IonInput,
    IonDatetime,
  },
  data: function () {
    return {
      dob: null,
      name: null,
      display_name: null,
      phone: null,
      // email: null,
      address: null,
      pob: null,
      // ktp: null,
      // npwp: null,
      // npwp_file: null,
      profile_picture: null,
      bank: null,
      bank_branch: null,
      account_number: null,
      account_holder: null,
      member_id : null,
      // rePassword: null,
      // password: null,
      mail_address: null,
      phone_second: null,
      phone_third: null
    }
  },
  setup(){
    const router = useRouter();
    const slides = ref();
    const slideOpts = {
      initialSlide: 0,
      speed: 400
    };

    const getIndex = async () => {
      const index = await slides.value.$el.getActiveIndex()
      index === 0 ? disableSwap(true) : disableSwap(false)
      let content = document.getElementById('content-page');
      content.scrollToTop()
    }
    const goNext =  async () => {
      await slides.value.$el.slideNext()
    }
    const disableSwap = async (val) => {
      await slides.value.$el.lockSwipeToNext(val)
    }
    const ktpPhoto = ref('');
    const profilePhoto = ref('');

    const takePhoto = async (state) => {
      const image = await Camera.getPhoto({
        quality: 60,
        // allowEditing: true,
        resultType: CameraResultType.Base64,
        source: CameraSource.Prompt,
        saveToGallery: true
      });
      let url = `data:image/${image.format};base64, ${image.base64String}`
      if (state === 'ktp') {
        ktpPhoto.value = url;
      } else if (state === 'profile'){
        profilePhoto.value = url;
      }
    }

    return {
      chevronBack,
      chevronForward,
      router,
      slideOpts,
      slides,
      IonTextarea,
      IonInput,
      getIndex,
      goNext,
      disableSwap,
      IonDatetime,
      ktpPhoto,
      profilePhoto,
      takePhoto,
      camera 
    }
  },
  props: {
    detailInfo: {
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
    },
    gettingDetail: {
      type: Boolean,
      default: false
    }
  },
  ionViewWillEnter() {
  },
  ionViewWillLeave() {
  },
  ionViewDidEnter() {
     this.disableSwap(true)
  },
  ionViewDidLeave() {
    this.resetState()
  },
  created() {
  },
  mounted() {
    this.disableSwap(true)
  },
  computed: {
    payload() {
      return {
        dob: this.dob,
        // name: this.name,
        display_name: this.display_name,
        phone: this.phone,
        // email: this.email,
        address: this.address,
        pob: this.pob,
        // ktp: this.ktp,
        // npwp: this.npwp,
        // npwp_file: this.ktpPhoto,
        profile_picture: this.profilePhoto || this.profile_picture,
        bank: this.bank,
        bank_branch: this.bank_branch,
        account_number: this.account_number,
        account_holder: this.account_holder,
        member_id : this.member_id,
        mail_address: this.address
      }
    }
  },
  watch: {
    detailInfo: function (val) {
      if (val && Object.keys(val).length > 0) {
        // let {dob, name, display_name, phone, email, address, pob, ktp, npwp, npwp_file, profile_picture, bank, bank_branch, account_number, account_holder, member_id,  iya itu, phone_second, phone_third} = val
        let {dob, display_name, phone, address, pob, profile_picture, bank, bank_branch, account_number, account_holder, member_id, phone_second, phone_third} = val
        this.dob= dob || ''
        // this.name= display_name || ''
        this.display_name= display_name || ''
        this.phone= phone || ''
        // this.email= 'anya@gmail.com'
        this.address= address || ''
        this.pob= pob || ''
        // this.ktp= ktp || ''
        // this.npwp= npwp || ''
        // this.npwp_file= npwp_file || ''
        this.profile_picture= profile_picture || ''
        this.bank= bank || ''
        this.bank_branch= bank_branch || ''
        this.account_number= account_number || ''
        this.account_holder= account_holder || ''
        this.member_id = member_id || ''
        this.mail_address= address || ''
        this.phone_second= phone_second || ''
        this.phone_third= phone_third || ''
      }
    },
  },
  methods: {
     async openToast(message='openToast', duration=2000, color='default', position= 'bottom') {
      let toast = await toastController
        .create({
          message: message,
          duration: duration,
          animated: true,
          position: position,
          cssClass: 'custom-toast',
          color: color
        })
        toast.onDidDismiss(() => {
          console.log('Dismissed toast');
        });
      return toast.present();
    },
    formattingDate(val, format) {
      return moment(val).format(format)
    },
    next: function () {
      this.disableSwap(false)
      this.goNext()
    },
    showPayload: function () {
      console.log(this.payload)
      console.log(this.albums)
    },
    submitPayload: function() {
      this.$emit('submitProfile', this.payload)
    },
    resetState() {
      this.dob = null,
      // this.name = null,
      this.display_name = null,
      this.phone = null,
      // this.email = null,
      this.address =  null,
      this.pob = null,
      // this.ktp = null,
      // this.npwp = null,
      // this.npwp_file = null,
      this.profile_picture = null,
      this.bank = null,
      this.bank_branch = null,
      this.account_number = null,
      this.account_holder = null,
      this.member_id  = null,
      // this.rePassword = null,
      // this.password = null,
      this.mail_addres =  null
    },
    checkValidityForm1: function () {
      // document.getElementById("top-page").scrollIntoView()
      if (!this.profilePhoto && !this.profile_picture) {
        this.openToast('Foto Profil Wajib Diisi', 3000, 'danger', 'top')
        return
      }
      if (!this.display_name) {
        this.openToast('Nama Publik Wajib Diisi', 3000, 'danger', 'top')
        return
      }
      if (!this.phone) {
        this.openToast('No HP Wajib Diisi.', 3000, 'danger', 'top')
        return
      }
      if (!this.phone.includes('+') || this.phone.length < 12) {
        this.openToast('Format No HP (Utama) Salah, ex: +62812XXXX', 3000, 'danger', 'top')
        return
      }
      if (this.phone_second && !this.phone_second.includes('+') || this.phone.length < 12) {
        this.openToast('Format No HP (ke-2) Salah, ex: +62812XXXX', 3000, 'danger', 'top')
        return
      }
      if (this.phone_third && !this.phone_third.includes('+') || this.phone.length < 12) {
        this.openToast('Format No HP (ke-3) Salah, ex: +62812XXXX', 3000, 'danger', 'top')
        return
      }
       if (!this.dob) {
        this.openToast('Tanggal lahir Wajib Diisi', 3000, 'danger', 'top')
        return
      }
      if (!this.pob) {
        this.openToast('Tempat Kelahiran Wajib Diisi', 3000, 'danger', 'top')
        return
      }
      if (!this.address) {
        this.openToast('Alamat Wajib Diisi', 3000, 'danger', 'top')
        return
      }
      this.next()
    },
    checkValidityForm2: function () {
      // document.getElementById("top-page").scrollIntoView()
      if (!this.bank) {
        this.openToast('Nama Bank Wajib Diisi', 3000, 'danger', 'top')
        return
      }
      if (!this.bank_branch) {
        this.openToast('Rekening Bank - Nama Cabang Wajib Diisi', 3000, 'danger', 'top')
        return
      }
      if (!this.account_number) {
        this.openToast('Nomor Rekening Wajib Diisi', 3000, 'danger', 'top')
        return
      }
      if (!this.account_holder) {
        this.openToast('Nama Pemilik Rekening Wajib Diisi', 3000, 'danger', 'top')
        return
      }
      this.submitPayload()
    }
  }
});
</script>

<style scoped>

</style>