<template>
  <div class="wrap-search wrap-content search-component" :class="classProps">
    <div class="input-search input-icon-left" :class="disabled ? 'disabled' : ''">
        <ion-icon :icon="search"></ion-icon>
        <input :disabled="disabled" type="text" v-model="queryString" v-on:keyup="searchingQuery" placeholder="Ketik Pencarian...">
    </div>
    <ion-grid class="ion-no-padding">
      <ion-row>
        <ion-col>
          <span class="d-block count-label">
            {{listResults.length}} {{searchType}}
          </span>
        </ion-col>
        <ion-col class="text-right">
          <span class="count-label text-green" @click="resetString">
            Reset
          </span>
        </ion-col>
      </ion-row>
    </ion-grid>
  </div>
</template>

<script>
import {
  IonIcon,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/vue';
import { defineComponent } from 'vue';
import { search } from 'ionicons/icons';
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'SearchBar',
  components: {
    IonIcon,
    IonGrid,
    IonRow,
    IonCol
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
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
    searchString: {
      type: String,
      required: true,
      default: ''
    },
    classProps: {
      type: String,
      default: ''
    }
  },
  data: function () {
    return {
      timeOut: null,
      queryString: ''
    }
  },
  setup(){
    const route = useRoute()
    return {
      search,
      route
    }
  },
  created: function() {
    this.queryString = this.route.query.search || ''
  },
  beforeUpdate: function() {
  },
  mounted() {
  },
  beforeUnmount: function() {
    this.queryString = ''
  },
  methods: {
    resetString() {
      if(this.queryString) {
        this.queryString = ''
        this.$emit('searchEnter', {
          'search': self.queryString
        })
      }
    },
    searchingQuery() {
      if (!this.disabled) {
        let self = this
        clearTimeout(this.timeOut)
        this.timeOut =  setTimeout(function() {
          self.$emit('searchEnter', {
            'search': self.queryString
          })
        }, 1500)
      }
    }
  }
});
</script>

<style scoped>
</style>