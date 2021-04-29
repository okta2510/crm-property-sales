<template>
  <div class="wrap-search wrap-content search-component" :class="classProps">
    <div class="input-search input-icon-left">
        <ion-icon :icon="search"></ion-icon>
        <input type="text" v-model="queryString" v-on:keyup="searchingQuery" placeholder="Ketik Pencarian...">
    </div>
      <span class="d-block count-label">
        {{listResults.length}} {{searchType}}
      </span>
  </div>
</template>

<script>
import {
  IonIcon
} from '@ionic/vue';
import { defineComponent } from 'vue';
import { search } from 'ionicons/icons';

export default defineComponent({
  name: 'SearchBar',
  components: {
    IonIcon
  },
  data: function () {
    return {
      timeOut: null,
      queryString: ''
    }
  },
  setup(){
    return {
      search
    }
  },
  ionViewDidLeave() {
    this.queryString = ''
  },
  props: {
    searchEnter: { type: Function },
    listResults: {
      type: Array,
      default: function () {
        return []
      }
    },
    searchType: {
      type: String,
      required: true,
      default: 'Items'
    },
    classProps: {
      type: String,
      default: ''
    }
  },
  mounted() {
  },
  methods: {
    searchingQuery() {
      let self = this
      clearTimeout(this.timeOut)
      this.timeOut =  setTimeout(function() {
        self.$emit('searchEnter', {
          'search': self.queryString
        })
      }, 2000)
    }
  }
});
</script>

<style scoped>
</style>