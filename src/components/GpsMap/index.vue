<template>
  <div class="gps-box">
    <!-- 搜索框 -->
    <div>
      <div class="select-box">
        <div class="selecticon-box">
          <img class="selecticon" src="./icons/select.png" alt="" />
        </div>
        <input
          class="select-input"
          @input="mythrottle(self, $event)"
          v-model="selectAddress"
          placeholder="请输入您要搜索的地址"
        />
      </div>
      <div class="select-list" v-show="!closeList">
        <div
          v-for="data in selectList"
          @click="selectAdressitem(data)"
          :key="data.uid"
          class="item-style"
        >
          <div><img class="gps-icon" src="./icons/GPS.png" alt="" /></div>
          <div>{{ data.title }} {{ data.address }}</div>
        </div>
      </div>
    </div>
    <!-- 搜索框 -->
    <div id="container"></div>
    <div class="context">
      <div
        v-for="data in renderList"
        :key="data.uid"
        class="item-style"
        @click="selectItem(data)"
      >
        <div><img class="gps-icon" src="./icons/GPS.png" alt="" /></div>
        <div class="item-text">{{ data.title }} {{ data.address }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { BMPGL } from "./bmpgl.js";
import { throttle } from "@/utils/index.js";
export default {
  data() {
    return {
      self: this,
      renderList: [],
      selectAddress: null,
      BMapGL: null,
      map: null,
      from: null,
      selectList: [],
      //关闭下拉窗
      closeList: true,
      // 返回的地址信息
      returnAddress: "",
      //   地图配置
      mapConfig: {
        // 地图周边搜索POI
        PoiKey:["街道", "学校", "餐饮"],
        // 默认搜索周边POI半径 (米)
        defaultPoint:1500,
        // 地图的初始缩放比例 0 - 20
        scale:15
      },
    };
  },
  created() {},
  mounted() {
    this.initMap();
  },
  watch: {
    selectAddress(oldval) {
      if (oldval === "") {
        this.closeList = true;
      } else {
        this.closeList = false;
      }
    },
  },
  methods: {
    initMap() {
      BMPGL()
        .then((BMap) => {
          let self = this;
          var map = new BMap.Map("container");
          this.map = map;
          // 缩放开启
          map.enableScrollWheelZoom();
          // 移动地图时 移动点
          map.addEventListener("moving", function () {
            let newPointCenter = map.getCenter();
            // 清除所有坐标点
            map.clearOverlays();
            // 绘制点
            var mk = new BMap.Marker(newPointCenter);
            map.addOverlay(mk);
            map.panTo(newPointCenter);
            var point = new BMap.Point(newPointCenter.lng, newPointCenter.lat);
            map.centerAndZoom(point, 16);
          });
          map.addEventListener("dragend", function () {
            let newPointCenter = map.getCenter();
            var point = new BMap.Point(newPointCenter.lng, newPointCenter.lat);
            // 开启联想
            self.selectPoi(map, point);
          });
          var geolocation = new BMap.Geolocation();

          geolocation.getCurrentPosition(function (r) {
            // eslint-disable-next-line no-undef
            if (this.getStatus() == BMAP_STATUS_SUCCESS) {
              self.drawMap(map, r.point);
            } else {
              this.showPopup("定位失败请刷新页面");
            }
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 顶图绘制搜索周边
    drawMap(map, point) {
      point = new window.BMap.Point(point.lng, point.lat);
      // 绘制点
      var mk = new window.BMap.Marker(point);
      map.addOverlay(mk);
      map.panTo(point);
      var newpoint = new window.BMap.Point(point.lng, point.lat);
      map.centerAndZoom(newpoint, this.mapConfig.scale);
      this.selectPoi(map, newpoint);
    },
    // 节流两秒一次
    mythrottle: throttle((e) => {
      e[0].blurAddress();
    }, 1000),
    // 弹出提示框
    showPopup() {
      console.log("定位失败");
    },
    selectItem(item) {
      // 点击具体地址要做的事情
      console.log(item);
    },
    // 周边poi搜索
    selectPoi(map, point, radius = this.mapConfig.defaultPoint) {
      let self = this;
      self.location = point.lng + "," + point.lat;
      let ls = new window.BMap.LocalSearch(map, {
        onSearchComplete(r) {
          let temp = [];
          r.forEach((item) => {
            temp.push(...item._pois);
          });
          self.renderList = temp;
        },
      });
      ls.searchNearby(this.mapConfig.PoiKey, point, radius);
    },
    // 地名模糊匹配
    blurAddress() {
      let self = this;
      let ls = new window.BMap.LocalSearch(this.map, {
        onSearchComplete(e) {
          if (e) {
            self.selectList = e._pois;
          }
        },
      });
      ls.search(this.selectAddress);
    },
    // 手动搜索
    selectAdressitem(item) {
      this.drawMap(this.map, item.point);
      this.closeList = true;
    },
  },
};
</script>

<style scoped>
.gps-box {
  width: 100%;
  height: 100vh;
}

.item-text {
  font-size: 14px;
}

.select-box-module {
  width: 100%;
  height: 400px;
}

.select-input {
  font-size: 16px;
  border: none;
  outline: none;
  height: 50px;
  width: 100vw;
  text-align: center;
}

.current-address {
  text-align: center;
}

#container {
  position: relative;
  top: 10px;
  width: 100%;
  height: 900px;
}

.context {
  margin-top: 10px;
  width: 100%;
  height: calc(100vh - 1080px);
  overflow: auto;
}
.content-msg {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #e4e7ed;
}
.success-btn {
  margin: auto;
  width: 90%;
  height: 40px;
  background: #fc4426;
  color: white;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}

.select-box {
  display: flex;
  align-items: center;
  background: #eaeaea;
  border-radius: 50px !important;
  height: 120px !important;
  justify-content: center;
  margin: 0 5px;
}

.selecticon {
  width: 15px;
}

.selecticon-box {
  position: relative;
  left: -10px;
  display: flex;
  align-items: center;
  opacity: 0.7;
}

.select-input {
  position: relative;
  left: -10px;
  width: 80%;
  background: #eaeaea;
}

.select-list {
  position: absolute;
  background: white;
  width: 100%;
  height: calc(100vh - 70px);
  z-index: 100;
}

.item-style {
  display: flex;
  font-size: 16px;
  color: #272727;
  font-weight: bold;
  width: 100%;
  padding: 0 10px;
  height: 200px;
  align-items: center;
}

.gps-icon {
  margin: 5px 2px 0 0;
  width: 130px;
  height: 130px;
}
</style>
