<template>
  <div class="map-wrap">
    <div class="map" ref="mapDivRef"></div>
  </div>
</template>

<script>
import {} from '@ionic/vue';
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'GoogleMapSearch',
  components: {
  },
  props: {
    center: { lat: Number, lng: Number },
    zoom: Number,
    mapType: String,
    disableUI: Boolean,
    markers: Array,
    mapDidLoad: Function
  },
  data: function () {
    return {
    }
  },
  setup(props) {
    // the google map object
    const map = ref(null);

    // the map element in the templste
    const mapDivRef = ref(null);

    // load in the google script
    onMounted(() => {
      // key is is the .env file
      const key = "AIzaSyDUzZdi2LgA2zI5o2bBSqJvuV-bEEkfZpU";

      // create the script element to load
      const googleMapScript = document.createElement("SCRIPT");
      googleMapScript.setAttribute(
        "src",
        `https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`
      );
      googleMapScript.setAttribute("defer", "");
      googleMapScript.setAttribute("async", "");
      document.head.appendChild(googleMapScript);
    });

    const loadMarkers = () => {
      if (props.markers.length === 0) return
      props.markers.forEach(markerInfo => {
        new window.google.maps.Marker({
          position: new window.google.maps.LatLng(markerInfo.lat, markerInfo.lng),
          map: map.value,
          title: markerInfo.title
        })
      });
    }

    /**
     * this function is called as soon as the map is initialized
     */
    window.initMap = () => {
      map.value = new window.google.maps.Map(mapDivRef.value, {
        mapTypeId: props.mapType || "hybrid",
        zoom: props.zoom || 8,
        disableDefaultUI: props.disableUI || false,
        center: props.center || { lat: 38.0, lng: -77.01 }
      });
      loadMarkers()
      props.mapDidLoad &&  props.mapDidLoad(map, window.google.maps)
    };
    return {
      mapDivRef
    }
  },
  created: function() {
  },
  beforeUpdate: function() {
  },
  mounted() {
    // console.log(this.markers, this.mapDidLoad)
  },
  beforeUnmount: function() {
  },
  methods: {
  }
});
</script>


<style scoped>
</style>