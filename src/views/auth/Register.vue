<template>
    <ion-page>
      <ion-header class="main">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-button class="clear-button" @click="router.push('/login')">
              <ion-icon :icon="chevronBack"></ion-icon>
              <span>kembali</span>
            </ion-button>
          </ion-buttons>
          <ion-title mode="ios">Daftar Agent Baru</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content
      id="content-page"
      :scroll-events="true">
        <ion-grid>
          <ion-row>
            <ion-col size-md="4" size-xs="10" offset-md="4" offset-xs="1">
              <div class="heading-page text-center">
                <h1 class="text-center title mt-0 mb-1">Buat Akun</h1>
                <span class="d-block text-center">Lengkapi form dibawah untuk lanjut</span>
              </div>

              <ion-slides @ionSlideDidChange="getIndex()" ref="slides" pager="false" scrollbar="false" :options="slideOpts">
                <ion-slide name="slide 1">
                    <div class="d-block text-left w-100 mt-4">

                  <form id="step1" v-on:submit.prevent="next" class="form-custom">
                      <h3 class="mt-0 sub-title h3">Halaman 1/2</h3>
                      <div class="input-wrap mb-0">
                        <ion-item class="md photo">
                          <ion-label color="medium" position="stacked">Profile Picture</ion-label>
                          <div class="component-upload-photo mt-2 mb-3">
                            <ion-button class="btn-take-photo" @click="takePhoto('profile')">
                              <ion-icon :icon="camera" slot="icon-only"></ion-icon>
                            </ion-button>
                            <img :src="profilePhoto" />
                          </div>
                            <input type="text" class="not-displayed" v-model="profile_picture" required>
                        </ion-item>
                        <ion-item class="md">
                          <ion-label color="medium" position="stacked">Nama Lengkap</ion-label>
                          <ion-input name="full_name" id="full_name" placeholder="" autocapitalize="off" title="nama lengkap" type="text" v-model="name" :value="name" required>
                          </ion-input>
                        </ion-item>
                        <ion-item class="md">
                          <ion-label color="medium" position="stacked">Nama Publik</ion-label>
                          <ion-input id="nama_publik" placeholder="" autocapitalize="off" title="nama publik" type="text" v-model="display_name" :value="display_name" required>
                          </ion-input>
                        </ion-item>
                        <ion-item class="md">
                          <ion-label color="medium" position="stacked">No HP (Primary)</ion-label>
                          <ion-input id="" placeholder="" autocapitalize="off"  title="+62812XXXXXX" onkeypress='return event.charCode >= 48 && event.charCode <= 57 || event.charCode == 43' minlength="12" type="tel" :value="phone" v-model="phone" required>
                          </ion-input>
                        </ion-item>
                        <ion-item class="md">
                          <ion-label color="medium" position="stacked">Nomor ke - 2</ion-label>
                          <ion-input id="" placeholder="" autocapitalize="off"  title="+62812XXXXXX" onkeypress='return event.charCode >= 48 && event.charCode <= 57 || event.charCode == 43' minlength="12" type="tel" v-model="phone_second" :value="phone_second">
                          </ion-input>
                        </ion-item>
                        <ion-item class="md">
                          <ion-label color="medium" position="stacked">Nomor ke - 3</ion-label>
                          <ion-input id="" placeholder="" autocapitalize="off"  title="+62812XXXXXX" onkeypress='return event.charCode >= 48 && event.charCode <= 57 || event.charCode == 43' minlength="12" type="tel" v-model="phone_third" :value="phone_third">
                          </ion-input>
                        </ion-item>
                        <ion-item class="md">
                          <ion-label color="medium" position="stacked">Email</ion-label>
                          <ion-input id="" placeholder="" autocapitalize="off" title="" type="email" v-model="email" :value="email" required>
                          </ion-input>
                        </ion-item>
                        <ion-item class="md">
                          <ion-label color="medium" position="stacked">Password</ion-label>
                          <ion-input id="" placeholder="" autocapitalize="off" title="" type="password" v-model="password" :value="password" required>
                          </ion-input>
                        </ion-item>
                        <ion-item class="md">
                          <ion-label color="medium" position="stacked">Ketik Ulang Password</ion-label>
                          <ion-input id="" placeholder="" autocapitalize="off" title="" type="password" v-model="rePassword" :value="rePassword" required>
                          </ion-input>
                        </ion-item>
                        <ion-item class="md">
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
                           <input type="text" class="not-displayed" v-model="dob" required>
                        </ion-item>
                        <ion-item class="md">
                          <ion-label color="medium" position="stacked">Tempat Kelahiran</ion-label>
                          <ion-input id="" placeholder="" autocapitalize="off" title="" type="text" v-model="pob" :value="pob" required>
                          </ion-input>
                        </ion-item>
                        <ion-item class="md">
                          <ion-label color="medium" position="stacked">Alamat</ion-label>
                          <ion-textarea rows="4" cols="20" id="" placeholder="" autocapitalize="off" title=""  v-model="address" value="" required>
                          </ion-textarea>
                        </ion-item>
                      </div>

                        <div class="mt-3 text-right">
                          <ion-button name="selanjutnya" type="submit" class="clear-button">
                          Selanjutnya 
                          <ion-icon :icon="chevronForward"></ion-icon>
                          </ion-button>
                        </div>
                      </form>
                    </div>
                </ion-slide>
                <ion-slide>
                 
                     <div class="d-block text-left w-100 mt-4">
                        <form id="step2" v-on:submit.prevent="onSubmit" class="form-custom">
                          <h3 class="mt-0 sub-title h3">Halaman 2/2</h3>
                          <div class="input-wrap mb-4">
                            <ion-item class="md">
                              <ion-label color="medium" position="stacked">Nomor KTP</ion-label>
                              <ion-input id="nomor_ktp" placeholder="" autocapitalize="off" title="no ktp" type="text" minlength="16" maxlength="16" v-model="ktp" :value="ktp" required>
                              </ion-input>
                            </ion-item>
                            <ion-item class="md">
                              <ion-label color="medium" position="stacked">Nomor NPWP</ion-label>
                              <ion-input id="nomor_ktp" placeholder="" autocapitalize="off" title="no npwp" type="text" minlength="15" maxlength="15" v-model="npwp" :value="npwp" required>
                              </ion-input>
                            </ion-item>
                            <ion-item class="md photo">
                              <ion-label color="medium" position="stacked">Upload KTP / NPWP</ion-label>
                              <div class="component-upload-photo mt-2 mb-3">
                                <ion-button class="btn-take-photo" @click="takePhoto('ktp')">
                                  <ion-icon :icon="camera" slot="icon-only"></ion-icon>
                                </ion-button>
                                <img :src="ktpPhoto" />
                              </div>
                               <input type="text" class="not-displayed" v-model="npwp_file" required>
                            </ion-item>
                            <ion-item class="md">
                              <ion-label color="medium" position="stacked">Bank</ion-label>
                              <ion-input id="nomor_ktp" placeholder="" autocapitalize="off" title="bank name" type="text" v-model="bank" :value="bank" required>
                              </ion-input>
                            </ion-item>
                            <ion-item class="md">
                              <ion-label color="medium" position="stacked">Cabang</ion-label>
                              <ion-input id="nomor_ktp" placeholder="" autocapitalize="off" title="cabang bank" type="text" v-model="bank_branch" :value="bank_branch" required>
                              </ion-input>
                            </ion-item>
                            <ion-item class="md">
                              <ion-label color="medium" position="stacked">No Rekening</ion-label>
                              <ion-input id="nomor_ktp" placeholder="" autocapitalize="off" title="No Rekening" type="text" v-model="account_number" :value="account_number" required>
                              </ion-input>
                            </ion-item>
                            <ion-item class="md">
                              <ion-label color="medium" position="stacked">Nama di Rekening</ion-label>
                              <ion-input id="nomor_ktp" placeholder="" autocapitalize="off" title="Nama di Rekening" type="text" v-model="account_holder" :value="account_holder" required>
                              </ion-input>
                            </ion-item>
                          </div>
                          <ion-button
                          color="warning"
                          size="large"
                          class="ios md"
                          expand="block"
                          type="submit">
                            <strong>Daftarkan Saya</strong>
                          </ion-button>
                        </form>
                      </div>
                </ion-slide>
              </ion-slides>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>
    </ion-page>
</template>
<script>
import axios from 'axios';
import {
  IonPage,
  IonContent,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonSlides,
  IonSlide,
  IonTextarea,
  IonInput,
  IonDatetime,
  toastController,
  IonIcon,
  IonButton,
  IonHeader,
  IonLabel,
  IonItem,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/vue'
import { useRouter } from 'vue-router'
import { ref, defineComponent } from 'vue';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { chevronBack, chevronForward, camera } from 'ionicons/icons';
import { getLocal } from '@/services/storage'
import moment from 'moment';
const { Camera } = Plugins;

export default defineComponent({
  name: 'Register',
  setup() {
    const slides = ref();
    const router = useRouter();
    const slideOpts = {
      initialSlide: 0,
      speed: 400
    };
    const getLoggedUser = async function () {
       await getLocal('userInfo').then((res)=>{
        // res ? router.push('/dashboard') : null
        console.log(res)
      }).catch((err)=>{
        console.log(err)
      })
    }
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
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Base64,
        source: CameraSource.Prompt
      });
      console.log(image)
      let url = `data:image/${image.format};base64, ${image.base64String}`
      if (state === 'ktp') {
        ktpPhoto.value = url;
      } else if (state === 'profile'){
        profilePhoto.value = url;
      }
    }

    // const dataUrlToFile = async function(dataUrl, fileName){
    //     const res = await fetch(dataUrl);
    //     const blob = await res.blob();
    //     let date = new Date()
    //     fileName = fileName + moment(date).format('-YYYY_MM_DD-hh:mm:ss')
    //     return new File([blob], fileName, { type: 'image/png' });
    // }
    

    getLoggedUser()

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
    };
  },
  data: function () {
    return {
      signingIn: false,
      dob: null,
      name: null,
      display_name: null,
      phone: null,
      email: null,
      address: null,
      pob: null,
      ktp: null,
      npwp: null,
      npwp_file: null,
      profile_picture: null,
      bank: null,
      bank_branch: null,
      account_number: null,
      account_holder: null,
      member_id : null,
      rePassword: null,
      password: null,
      mail_address: null,
      phone_second: null,
      phone_third: null
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
  },
  watch: {
    ktpPhoto: async function (val) {
      this.npwp_file = val
    },
    profilePhoto: async function (val) {
      this.profile_picture = val;
    },
  },
  computed: {
     API_REGISTER: function () {
      return '/api/v1/consumer/member/register'
    },
    payload() {
      return {
        dob: this.dob,
        name: this.name,
        display_name: this.display_name,
        phone: this.phone,
        email: this.email,
        address: this.address,
        pob: this.pob,
        ktp: this.ktp,
        npwp: this.npwp,
        npwp_file: this.npwp_file,
        profile_picture: this.profile_picture,
        bank: this.bank,
        bank_branch: this.bank_branch,
        account_number: this.account_number,
        account_holder: this.account_holder,
        member_id : this.member_id,
        mail_address: this.mail_addresss,
        password: this.password
      }
    }
  },
  components: {
    IonPage,
    IonContent,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonSlides,
    IonSlide,
    IonIcon,
    IonButton,
    IonHeader,
    IonLabel,
    IonItem,
    IonGrid,
    IonRow,
    IonCol,
    IonInput,
    IonDatetime,
    IonTextarea
  },
  methods: {
    onSubmit: function () {
      let self = this
      this.signingIn = true
      axios.post(this.API_REGISTER, this.payload)
      .then(() => {
        self.openToast('Agent baru telah didaftarkan', 5000, 'success')
        self.router.push('/login')
        self.resetState()
        self.signingIn = false
      }).catch((err) => {
        // handle err
        console.log(err.response)
        self.openToast(err.response ? err.response.data.detail : 'Login Error', 5000, 'danger')
        self.signingIn = false
      })
    },
    async openToast(message='openToast', duration=2000, color='default') {
        let toast = await toastController
          .create({
            message: message,
            duration: duration,
            animated: true,
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
    resetState() {
      this.dob = null,
      this.name = null,
      this.display_name = null,
      this.phone = null,
      this.email = null,
      this.address =  null,
      this.pob = null,
      this.ktp = null,
      this.npwp = null,
      this.npwp_file = null,
      this.profile_picture = null,
      this.bank = null,
      this.bank_branch = null,
      this.account_number = null,
      this.account_holder = null,
      this.member_id  = null,
      this.rePassword = null,
      this.password = null,
      this.mail_addres =  null
    }
  }
})
</script>

<style  scoped>
.header-md::after {
  content: none;
}
ion-content {
  --padding-top: 40px;
  --background: #00A79D;
  --color: #fff;
}
ion-list {
  margin: 0;
}
ion-item {
  --padding-start: 0;
  --padding-end: 0;
  --background: rgba(255,255,255,0);
  --background-activated-opacity: 0;
  --background-focused-opacity: 0;
}
ion-toolbar {
  --padding-top: 10px;
  --padding-bottom: 10px;
  --background: #fff;
  --color: #00A79D;

}
ion-button.submit-button {
  margin: 0 0 40px;
}
.input-wrap {
  margin-bottom: 40px;
}
ion-header {
  box-shadow: 0px 5px 10px #00000020;
}
ion-header.main ion-title {
  text-align: center;
  font-size: 16px;
  line-height: 20px;
}

ion-footer ion-toolbar{
  color: #00EEE0;
  --opacity: 1;
  --background: #00A79D;
  --border-width: 0;
  --border-color: rgba(255,255,255,0)
}
a.text-light {
  font-weight: 600;
  text-decoration: underline;
  font-style: italic;
}
</style>