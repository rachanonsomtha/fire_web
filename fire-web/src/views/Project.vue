<template>
  <v-layout xs12>
    <div id="map" style="position: absolute; width: 100% ; height: 100%; top: 0; bottom: 0;"></div>
    <v-flex>
      <v-card xs2 class="bottom-left perple">
        <h4 class="heading white--text">คำอธิบายความหมายของหมุด</h4>
        <img class="pin" src="@/img/pin.png" />
      </v-card>
    </v-flex>
  </v-layout>
  <!-- <v-container fluid > -->
  <!-- <div>
  <div id="map" style="position: absolute; width: 100% ; top: 0; bottom: 0;"></div>-->
  <!-- </v-container> -->
  <!-- <iframe id="ytplayer" type="text/html" width="640" height="360"
    :src="'~/components/index1.html'"
  frameborder="0"></iframe>-->
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/vue-resource/0.1.10/vue-resource.min.js"></script>
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>

<script>
import { axios } from "@/plugins/axios";
import Vue from "vue";
import VueFriendlyIframe from "vue-friendly-iframe";
import vueResource from "vue-resource";
import { setInterval } from "timers";

// Vue.component("statichtmlpage", function (resolve, reject) {
//     this.$http.get("./../components/index1.html", function (
//         data,
//         status,
//         request
//     ) {
//         var parser = new DOMParser();
//         var doc = parser.parseFromString(data, "text/html");
//         resolve({
//             template: doc
//         });
//     });
// });

Vue.component("vue-friendly-iframe", VueFriendlyIframe);
export default {
  data() {
    return {
      data_get: {},
      // data: {},
      // ht: h,
      // info: null,
      test: "text",
      map: {},
      markers: new Array(),
      fire_stat: new Array(),
      latitude: new Array(),
      lati_trans: new Array(),

      longitude: new Array(),
      enable: new Array(),
      detectors_number: new Array(),
      batt: new Array(),
      status_v: new Array(),
      Leng: {},
      temp: {}
      // }}
    };
  },
  methods: {
    axiosTest: function() {
      return axios
        .get("http://202.28.247.52/api/v1/details/devices")
        .then(response => {
          // returning the data here allows the caller to get it through another .then(...)
          return response.data;
        });
    },
    myFunctionOnLoad: function() {
      // eslint-disable-next-line
      console.log("call on load...");
    },

    getMap: function() {
      let recaptchaScript = document.createElement("script");
      recaptchaScript.setAttribute(
        "src",
        "http://api.longdo.com/map/?key=3024cbe278e024cf2503cd2e87002a2d"
      );
      document.head.appendChild(recaptchaScript);
    },

    createMarker: function(idx, long_v, lat_v, url_img_icon) {
      // console.log('test1')
      this.temp = this.latitude[idx];
      this.tooltips_msg = "latitude : " + this.temp + " <br>";
      this.temp = this.longitude[idx];
      this.tooltips_msg =
        this.tooltips_msg + "longitude : " + this.temp + " <br>";
      this.temp = this.detectors_number[idx];
      this.tooltips_msg =
        this.tooltips_msg + "เลขอุปกรณ์ : " + this.temp + " <br>";
      this.temp = this.fire_stat[idx] != 0 ? "พบควัน" : "ไม่พบควัน";
      this.tooltips_msg =
        this.tooltips_msg + "สถานะควัน : " + this.temp + " <br>";
      this.temp = this.enable[idx] != 0 ? "ปกติ" : "ไม่พร้อมใช้";
      this.tooltips_msg = this.tooltips_msg + "สถานะ : " + this.temp + " <br>";
      this.temp = this.batt[idx];
      this.tooltips_msg =
        this.tooltips_msg + "ระดับแบตฯ : " + this.temp + " <br>";
      // console.log(lat_v)
      // console.log(long_v)

      var marker1 = new longdo.Marker(
        {
          lon: long_v,
          lat: lat_v
        },
        {
          icon: {
            url: url_img_icon
          },
          popup: {
            html: "<div id='tooltips-div' >" + this.tooltips_msg + "</div>"
          }
        }
      );
      this.map.Overlays.add(marker1);
    },

    init: function() {
      this.map = new longdo.Map({
        placeholder: document.getElementById("map")
      });
      this.myTimer();
      // console.log(this.map)
    },

    // var myVar : setInterval(myTimer, 10000),

    myTimer() {
      fire_stat: new Array();
      latitude: new Array();
      longitude: new Array();
      enable: new Array();
      detectors_number: new Array();
      batt: new Array();
      status_v: new Array();
      lati_trans: new Array();

      // this.map.Overlays.clear();
      // this.data_get = Promise.resolve(this.axiosTest())
      this.data_get.then(value => {
        console.log(value);
        this.map.Overlays.clear();
        for (var l = 0; l < value.data.length; l++) {
          this.enable.push(value.data[l].available_status);
          this.fire_stat.push(value.data[l].fire_status);
          this.latitude.push(value.data[l].latitude);
          this.longitude.push(value.data[l].longitude);
          this.detectors_number.push(parseInt(value.data[l].detector_number));
          this.batt.push(value.data[l].battery);
          this.status_v.push(value.data[l].status);
          this.lati_trans.push(parseFloat(value.data[l].latitude_trans, 10));
        }
        for (var p = 0; p < value.data.length; p++) {
          if (this.status_v[p] == 9) {
            //if (trans[p] == 0) {
            this.createMarker(
              p,
              this.longitude[p],
              this.latitude[p],
              "http://maps.google.com/mapfiles/ms/micons/green-dot.png"
            );
          } else if (this.status_v[p] != null) {
            if (this.fire_stat[p] > 0) {
              if (this.fire_stat[p] == 1) {
                this.createMarker(
                  p,
                  this.longitude[p],
                  this.latitude[p],
                  "http://maps.google.com/mapfiles/ms/micons/yellow-dot.png"
                );
              } else if (this.fire_stat[p] == 2) {
                this.createMarker(
                  p,
                  this.longitude[p],
                  this.latitude[p],
                  "http://maps.google.com/mapfiles/ms/micons/red-dot.png"
                );
              } else {
                this.createMarker(
                  p,
                  this.longitude[p],
                  this.latitude[p],
                  "http://maps.google.com/mapfiles/ms/micons/pink-dot.png"
                );
              }
            } else {
              if (this.enable[p] == 0) {
                this.createMarker(
                  p,
                  this.longitude[p],
                  this.latitude[p],
                  "http://maps.google.com/mapfiles/kml/pal3/icon51.png",
                  "Test5"
                );
              } else {
                if (
                  parseFloat(parseInt(this.latitude[p] * 1000) / 1000, 10) !=
                  parseFloat(parseInt(this.latitude_trans[p] * 1000) / 1000, 10)
                ) {
                  this.createMarker(
                    p,
                    this.longitude[p],
                    this.latitude[p],
                    "http://maps.google.com/mapfiles/ms/micons/bus.png"
                  );
                } else {
                  this.createMarker(
                    p,
                    this.longitude[p],
                    this.latitude[p],
                    "http://maps.google.com/mapfiles/ms/micons/green-dot.png"
                  );
                }
              }
            }
          }
        }
      });
    }
  },

  created: function() {
    setTimeout(() => {
      this.data_get = Promise.resolve(this.axiosTest());
      this.init();
      console.log("Start mytimer");
    }, 2000);

    setInterval(() => {
      // this.init();
      this.data_get = Promise.resolve(this.axiosTest());
      this.map.Overlays.clear();
      this.myTimer();
      console.log("New interval");
    }, 10000);
  },
  mounted() {
    // console.log(this.test)
    // let recaptchaScript = document.createElement('script')
    // recaptchaScript.setAttribute('src', 'http://api.longdo.com/map/?key=3024cbe278e024cf2503cd2e87002a2d')
    // document.head.appendChild(recaptchaScript)
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Kanit|Sarabun:100,400&display=swap");

.pin {
  /* display: block; */
  /* max-width: 350px; */
  max-height: 150px;
  width: auto;
  /* height: auto; */
}

h4 {
  font-family: "Sarabun", sans-serif;
}

.bottom-left {
  position: absolute;
  bottom: 8px;
  right: 10px;
}

h1 {
  color: paleturquoise;
  background-color: black;
}

.container {
  position: relative;
  text-align: center;
  color: white;
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#tooltips-div {
  position: absolute;
  bottom: 20px;
  background: rgba(232, 245, 255, 0.85);
  padding: 5px 10px;
  border: 2px solid #a5d8ff;
  -khtml-border-radius: 16px;
  -webkit-border-radius: 16px;
  -moz-border-radius: 16px;
  border-radius: 16px;
  z-index: 1;
  width: 200px;
}

#longdomap-legend-div {
  position: absolute;
  bottom: 80px;
  right: 10px;
  background: rgba(232, 245, 255, 0.85);
  padding: 5px 10px;
  border: 2px solid #a5d8ff;
  -khtml-border-radius: 16px;
  -webkit-border-radius: 16px;
  -moz-border-radius: 16px;
  border-radius: 16px;
  z-index: 1;
}

#longdomap-legend-content-div {
  overflow-y: auto;
  text-align: center;
}

#longdomap-legend-collapse-title {
  line-height: 16px;
  margin: 5px 20px 6px 2px;
  font-size: 14px;
  color: #222;
  float: left;
}

#longdomap-legend-collapse-text {
  margin-right: 5px;
  font-size: 12px;
  line-height: 16px;
  height: 16px;
}

#longdomap-legend-div.longdomap-legend-hidden {
  background: rgba(32, 133, 243, 0.85);
  padding: 8px 16px;
}

.longdomap-legend-description {
  font-size: 12px;
  margin-top: 10px;
}

.longdomap-legend-warning {
  font-size: 11px;
  color: #cc2725;
  margin-top: 10px;
}

#longdomap-legend-div.longdomap-legend-hidden #longdomap-legend-content-div {
  display: none;
}

#longdomap-legend-div.longdomap-legend-hidden #longdomap-legend-collapse-text {
  color: #fff;
  font-size: 14px;
}

#longdomap-legend-collapse-div .collapse-arrow,
#longdomap-legend-collapse-text {
  float: right;
  cursor: pointer;
}

#longdomap-legend-collapse-div .collapse-arrow {
  background: url(/mmmap/images/collapse-arrow.png) no-repeat;
  background-position: bottom left;
  width: 12px;
  height: 12px;
  margin-top: 2px;
}

#longdomap-legend-collapse-div {
  margin-bottom: 5px;
  cursor: pointer;
  color: #2085f3;
  text-align: right;
}

#longdomap-legend-div.longdomap-legend-hidden #longdomap-legend-collapse-div {
  margin-bottom: 0px;
}

#longdomap-legend-div.longdomap-legend-hidden
  #longdomap-legend-collapse-div
  .collapse-arrow {
  background-position: top left;
}
</style>
