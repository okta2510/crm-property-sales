<template>
  <ion-page class="logged">
    <HeaderPage
      title="Berita Properti"
      urlPage=""
      urlText=""
      modalText=""
      backText="Kembali"
      backUrl="/berita"
      headerClass="header-detail"
      v-on:modalClick="null">
    </HeaderPage>
    <ion-content class="ion-padding min-height-100 ion-no-padding-start ion-no-padding-end pb-200 ">
      <div class="news-detail">
        <ion-grid class="ion-no-padding ion-no-padding-top ion-no-padding-bottom">
          <ion-row>
            <ion-col>
              <h1 class="title mt-0">
                Klaster Baru Yang Diluncurkan Saat Pandemi Harganya Lebih Murah - {{route.params.id}}
              </h1>
              <span class="date d-block">
                Feb 22, 2021
              </span>
              <img class="feature-img" :src="`/assets/img-sample${(parseInt(route.params.id))}.jpg`" />
              <span class="excerpt d-block">
                Piintu.com - Banyak kalangan pengembang yang menurunkan segmen pasar dengan mengeluarkan produk untuk segmen di bawah harga Rp500 juta. Perumahan Harvest City meluncurkan klaster baru rumah kompak seharga Rp400 jutaan sehingga lebih terjangkau untuk kalangan milenial.
              </span>
              <article v-html="article.desc">
              </article>
              <div class="share-media">
                <span class="d-block">
                  Share :
                </span>
                <ul class="list-unstyled mt-0">
                  <li>
                    <a href="#">
                      <img src="/assets/icon/icon-fb.svg" alt="facebook">
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/assets/icon/icon-tw.svg" alt="twitter">
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/assets/icon/icon-insta.svg" alt="instagram">
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/assets/icon/icon-email.svg" alt="email">
                    </a>
                  </li>
                </ul>
              </div>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { 
  IonContent,
  IonPage,
  modalController,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/vue';
import HeaderPage from '@/component/HeaderPage'
import { defineComponent } from 'vue';
import ModalFilterListing from '@/component/ModalFilterListing.vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  components: {
    IonContent,
    IonPage,
    HeaderPage,
    IonGrid,
    IonRow,
    IonCol
  },
  data: function() {
    return {
      titlePage: 'My Listing',
      currentModal: null,
      results: [1,2,3,4,5],
      article: {
        desc: `
                <p>Banyak kalangan pengembang saat pandemi Covid-19 ini menurunkan range segmen produk yang dipasarkannya. Rumah yang dipasarkan pun umumnya didesain kompak dengan luasan terbatas sehingga bisa dipasarkan dengan harga yang lebih terjangkau. Harga yang lebih terjangkau membuat segmen pasar yang disasar mejadi lebih besar.</p>

                <p>Salah satunya township Harvest City di Jalan Raya Cileungsi, Jonggol, yang luasnya mencapai 1.350 ha sehingga area pengembangannya masuk ke dalam Kabupaten Bogor dan Kabupaten Bekasi. Harvest City meluncurkan klaster baru Sakura Indika sebanyak 300 unit dengan rumah tipe 27/66 dan 37/72 seharga Rp400 jutaan-Rp500 jutaan.</p>

                <p>Menurut GM Marketing & Sales Harvest City Rymond Santoso, klaster baru rumah kompak ini menyasar kalangan muda pembeli rumah pertama yang bekerja di Jakarta dengan rute menyusuri Kabupaten Bekasi hingga Kota Bekasi. Karena itu di perumahannya disediakan shuttle bus JR Connexion dari Harvest City ke Blok M dan Mangga Dua.</p>

                <p>“Rumah kompak ini cocok untuk pasangan muda sebagai rumah pertama yang harganya terjangkau. Kawasannya juga masih akan berkembang terus dan kami sudah membangun mencapai lebih 10 ribu unit dan 7.000 unit diantaranya sudah dihuni, jadi kawasan sudah sangat hidup,” ujarnya.</p>

                <p>Klaster Sakura Indika juga mengusung fasilitas yang dibutuhkan oleh kalangan pasangan muda seperti menerapkan teknologi smart cluster dengan access card, public Wifi, smart lock, CCTV, dan sebagainya. Di dalam kawasan perumahannya juga telah tersedia fasilitas yang lengkap seperti Sekolah Ibnu Sina dan Santo Yoseph, wahana air Water Joy, komplek ruko, minimarket, Narma Supermarket. Restoran cepat saji, dan sebagainya.</p>`
      }
    }
  },
  setup() {
    const route = useRoute();
    console.log(route.params.id)
    return {route}
  },
  ionViewWillEnter() {
  },
  ionViewWillLeave() {
  },
  ionViewDidEnter() {
  },
  ionViewDidLeave() {
  },
  created() {
  },
  mounted() {
  },
  methods: {
    getListing (queryString) {
      queryString ?  this.results = [1] :  this.results = [1,2,3,4,5]
    },
    async openModal() {
      const modal = await modalController
        .create({
          component: ModalFilterListing,
          cssClass: 'modal-component filter-component',
          swipeToClose: true,
          showBackdrop: true,
          mode: 'ios',
          backdropDismiss: true,
          animated: true,
          componentProps: {
            title: 'Filter Pencarian',
            closeAction: this.closeModal
          },
        })
      this.currentModal = modal
      return modal.present();
    },
    closeModal() {
      this.currentModal.dismiss()
    }
  }
});
</script>
<style  scoped>

</style>