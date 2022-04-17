<template>
  <div class="comp">
    <span class="left">
      <span class="img">
        <img
          :src="configData.Img"
          alt=""
          :style="{ width: '100%', height: '100%' }"
        />
      </span>
      <span
        class="state"
        v-if="configData.isState"
        :style="{ background: '#FC4426' }"
        >{{configData.stateTitle}}</span
      >
    </span>
    <div class="right">
      <div class="right-header">
        <span class="title">{{ configData.title }}</span>
      </div>
       <span class="location">{{ configData.explain }}</span>
      <div>
        <span class="bottom_texts">
          <span class="bottom_left">
            <span class="points">+{{ configData.points }}积分</span>
          </span>
          <span class="bottom_right">
            <span class="people_num"
              >已经报名<span style="color: #4ba0ff">{{ configData.currentNum }}</span
              >人/<b>限{{ configData.maxNum }}人</b></span
            >
          </span>
        </span>
      </div>
      <img
        v-if="participateStatus == 'ACKNOWLEDGED'"
        class="draw"
        src=""
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  //todo:目前删除活动按钮在整个block内，应该相对游离出其他控件才能避免点击事件同时相应的问题
  props: {
    configData: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },

  data() {
    return {
      isneedFunc: false,
    };
  },
  methods: {},
  created() {
    console.log(this);
  },
};
</script>
<style scoped>
.left {
  position: relative;
  flex-grow: 0;
  margin-bottom: 15px;
  display: flex;
  width: 105px;
  height: 100% !important;
  border-radius: 10px;
  flex: 2;
}

.right {
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  padding-left: 30px;
  height: 100%;
  flex-direction: column;
  height: 100% !important;
  flex: 4;
}

.comp {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  font-size: 17px;
  font-weight: 900;
  text-align: start;
  background: white;
  top: 0;
  padding: 5px 0;
}
.state {
  position: absolute;
  margin-top: 1px;
  margin-left: 1px;
  padding: 4px 2px;
  font-size: 12px;
  font-weight: normal;
  border-radius: 5px;
  color: white;
  text-align: center;
  display: flex;
}

.img {
  position: relative;
  width: 100%;
  height: 100%;
}

.right-header {
  margin-top: 5px;
  display: flex;
}
.func {
  font-size: 12px;
  margin-right: 10px;
}

.draw {
  width: 20px;
  position: absolute;
  top: 0;
  right: 0;
}

.title {
  flex: 1;
  font-size: 15px;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.location {
  margin-top: 3px;
  color: #999999;
  width: 100%;
  font-size: 12px;
  font-weight: normal;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.bottom_texts {
  display: flex;
  margin-top: 5px;
  margin-bottom: 5px;
  width: 100%;
  font-size: 10px;
  font-weight: normal;
}
.bottom_left {
  flex: 1;
}

.bottom_right {
  flex: 2;
  display: flex;
}
.points {
  position: relative;
  align-items: center;
  text-align: center;
  padding: 1px 4px;
  background: #fff7e9;
  color: #f1a81b;
}
.people_num {
  margin-left: auto;
}
</style>
