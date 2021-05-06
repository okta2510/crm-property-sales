<template>
  <div class="map" id="map"></div>
</template>

<script>
import {} from '@ionic/vue';
import { defineComponent,ref } from 'vue';

// INITIALIZE GOOGLEMAPS
(() => {

  if (window.google?.maps) {
    window.initMap();
    return;
  }

  const key = "AIzaSyBPyvOc9IgPRurMe2BeIXEwScIdPv-wvKg";
  const googleMapScript = document.createElement("SCRIPT");
  googleMapScript.setAttribute(
    "src",
    `https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`
  );
  googleMapScript.setAttribute("defer", "");
  googleMapScript.setAttribute("async", "");
  document.head.appendChild(googleMapScript);
})()

export default defineComponent({
  name: 'GoogleMap',
  components: {
  },
  props: {
    msg: String,
    center: { lat: Number, lng: Number },
  },
  data: function () {
    return {
    }
  },
  setup(props) {
    // props, ctx
    const map = ref();

    // from the callback, initialize the map when we know
    // the script is loaded
    window.initMap = () => {
      map.value = new window.google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: props.center,
        disableDefaultUI: true,
      });
    };
  },
  created: function() {
  },
  beforeUpdate: function() {
  },
  mounted() {
  },
  beforeUnmount: function() {
  },
  methods: {
  }
});
</script>

<style scoped>
</style>