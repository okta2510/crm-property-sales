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

      // if (number > 99999999) {
      //   number = this.toFixedTrunc(number / 1000000000, 2)
      //   return number && number > 0 ? number + ' Milyar' : '-'
      // }

      // if (number > 100000000 && number < 1000000000) {
      //   number = this.toFixedTrunc(number / 1000000, 0)
      //   return number && number > 0 ? number + ' Juta' : '-'
      // }

      return number && number > 0 ? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.separator) : '-'
    }
  },
  methods: {
    toFixed:function (x) {
      let e;
      if (Math.abs(x) < 1.0) {
        e = parseInt(x.toString().split('e-')[1]);
        if (e) {
            x *= Math.pow(10,e-1);
            x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
        }
      } else {
        e = parseInt(x.toString().split('+')[1]);
        if (e > 20) {
            e -= 20;
            x /= Math.pow(10,e);
            x += (new Array(e+1)).join('0');
        }
      }
      return x;
    },
    toFixedTrunc:function (x, n) {
      x = this.toFixed(x) 

      // From here on the code is the same than the original answer
      const v = (typeof x === 'string' ? x : x.toString()).split('.');
      if (n <= 0) return v[0];
      let f = v[1] || '';
      if (f.length > n) return `${v[0]}.${f.substr(0,n)}`;
      while (f.length < n) f += '0';
      return `${v[0]}.${f}`
    }
  }
});
</script>
<style  scoped>
</style>