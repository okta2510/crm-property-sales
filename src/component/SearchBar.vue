<template>
  <div class="wrap-search wrap-content search-component">
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
  props: {
    listResults: {
      type: Array,
      default: []
    },
    searchType: {
      type: String,
      required: true,
      default: 'Items'
    }
  },
  mounted() {
  },
  methods: {
    searchingQuery() {
      let self = this
      clearTimeout(this.timeOut)
      this.timeOut =  setTimeout(function() {
        self.$emit('searchEnter', self.queryString)
      }, 2000)
    }
  }
});
</script>

<style scoped>
</style>