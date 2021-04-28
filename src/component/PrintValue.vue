<template>
    <span>
      {{preText}} {{newValue}} {{postText}}
    </span>
</template>

<script>
import {} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PrintValue',
  components: {
  },
  data: function () {
    return {
    }
  },
  setup(){
    return {}
  },
  props: {
    value: {
      type: Number,
      default: 0
    },
    preText: {
      type: String,
      default: ''
    },
    postText: {
      type: String,
      default: ''
    },
    separator: {
      type: String,
      default: '.'
    }
  },
  computed: {
    newValue: function () {
      let number = this.value
      return number && number > 0 ? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.separator) : '-'
    }
  },
  methods: {
  }
});
</script>
<style  scoped>
</style>