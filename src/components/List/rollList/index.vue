<template>
  <div class="main">
    <div class="contentBox">
      <span class="no_content_message" v-if="this.renderData.length === 0">{{
        promptContent
      }}</span>
      <div
        @click="chooseItem"
        class="info_div"
        v-for="item in this.renderData"
        :key="item"
      >
        <volunteer_block :configData="item"></volunteer_block>
      </div>
    </div>
  </div>
</template>

<script>
import volunteer_block from "@/components/List/volunteer-block/index.vue";

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    volunteer_block,
  },
  data() {
    return {
      // 没有数据的提示内容
      promptContent: "提示内容",
      renderData: [
        {
          Img: "https://fc1tn.baidu.com/it/u=2141828235,3300216750&fm=202&mola=new&crop=v1",
          isState: true,
          stateTitle: "标题",
          title: "内容标题",
          explain: "我是xzzzzzzzz本3123123213123213描述",
          points: 1000,
          currentNum: 1990,
          maxNum: 1000,
        },
        {
          Img: "https://fc1tn.baidu.com/it/u=2141828235,3300216750&fm=202&mola=new&crop=v1",
          isState: true,
          stateTitle: "标题",
          title: "内容标题",
          explain: "我是xzzzzzzzzzzzzzzzzzzzzzzzzzzzz文本3123123213123213描述",
          points: 1000,
          currentNum: 100,
          maxNum: 1000,
        },
        {
          Img: "https://fc1tn.baidu.com/it/u=2141828235,3300216750&fm=202&mola=new&crop=v1",
          isState: true,
          stateTitle: "标题",
          title: "内容标题",
          explain: "我是xzzzzzzzzzzzzzzzzzzzzzzzzzzzz文本3123123213123213描述",
          points: 1000,
          currentNum: 100,
          maxNum: 1000,
        },
        {
          Img: "https://fc1tn.baidu.com/it/u=2141828235,3300216750&fm=202&mola=new&crop=v1",
          isState: true,
          stateTitle: "标题",
          title: "内容标题",
          explain: "我是xzzzzzzzzzzzzzzzzzzzzzzzzzzzz文本3123123213123213描述",
          points: 1000,
          currentNum: 100,
          maxNum: 1000,
        },
        {
          Img: "https://fc1tn.baidu.com/it/u=2141828235,3300216750&fm=202&mola=new&crop=v1",
          isState: true,
          stateTitle: "标题",
          title: "内容标题",
          explain: "我是xzzzzzzzzzzzzzzzzzzzzzzzzzzzz文本3123123213123213描述",
          points: 1000,
          currentNum: 100,
          maxNum: 1000,
        },
        {
          Img: "https://fc1tn.baidu.com/it/u=2141828235,3300216750&fm=202&mola=new&crop=v1",
          isState: true,
          stateTitle: "标题",
          title: "内容标题",
          explain: "我是xzzzzzzzzzzzzzzzzzzzzzzzzzzzz文本3123123213123213描述",
          points: 1000,
          currentNum: 100,
          maxNum: 1000,
        },
        {
          Img: "https://fc1tn.baidu.com/it/u=2141828235,3300216750&fm=202&mola=new&crop=v1",
          isState: true,
          stateTitle: "标题",
          title: "内容标题",
          explain: "我是xzzzzzzzzzzzzzzzzzzzzzzzzzzzz文本3123123213123213描述",
          points: 1000,
          currentNum: 100,
          maxNum: 1000,
        },
        {
          Img: "https://fc1tn.baidu.com/it/u=2141828235,3300216750&fm=202&mola=new&crop=v1",
          isState: true,
          stateTitle: "标题",
          title: "内容标题",
          explain: "我是xzzzzzzzzzzzzzzzzzzzzzzzzzzzz文本3123123213123213描述",
          points: 1000,
          currentNum: 100,
          maxNum: 1000,
        },
        {
          Img: "https://fc1tn.baidu.com/it/u=2141828235,3300216750&fm=202&mola=new&crop=v1",
          isState: true,
          stateTitle: "标题",
          title: "内容标题",
          explain: "我是xzzzzzzzzzzzzzzzzzzzzzzzzzzzz文本3123123213123213描述",
          points: 1000,
          currentNum: 100,
          maxNum: 1000,
        },
        {
          Img: "https://fc1tn.baidu.com/it/u=2141828235,3300216750&fm=202&mola=new&crop=v1",
          isState: true,
          stateTitle: "标题",
          title: "内容标题",
          explain: "我是xzzzzzzzzzzzzzzzzzzzzzzzzzzzz文本3123123213123213描述",
          points: 1000,
          currentNum: 100,
          maxNum: 1000,
        },
        {
          Img: "https://fc1tn.baidu.com/it/u=2141828235,3300216750&fm=202&mola=new&crop=v1",
          isState: true,
          stateTitle: "标题",
          title: "内容标题",
          explain: "我是xzzzzzzzzzzzzzzzzzzzzzzzzzzzz文本3123123213123213描述",
          points: 1000,
          currentNum: 100,
          maxNum: 1000,
        },
      ],
    };
  },
  methods: {
    chooseItem() {
      console.log("触发事件");
    },
  },
};
</script>
<style scoped>
.main {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: #f8f8f8;
  overflow: hidden;
}

.top {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  width: 100%;
  background: #ffffff;
  z-index: 300;
}

.search_bar {
  margin-top: 5px;
  background: #ffffff;
}

.contentBox {
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 15px;
  margin-bottom: 20px;
  border-radius: 10px;
  height: 100vh;
  overflow: auto;
}

.test-scroll-list-wrap {
  z-index: 100;
  padding-top: 95px;
  background: #f8f8f8;
  justify-content: center;
  display: flex;
  position: fixed;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.testlist {
  margin-left: 4%;
  width: 92%;
}

.testlist:last-child {
  padding-bottom: 20px;
}

.testdiv {
  border-radius: 10px;
  background: #ffffff;
  display: flex;
  align-items: center;
  margin-top: 10px;
  padding: 15px 15px;
}

.no_content_message {
  position: absolute;
  width: 100%;
  margin-top: 160px;
  font-size: 14px;
  font-weight: bold;
  color: #666666;
  text-align: center;
  z-index: 200;
}

.info_div {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  border-bottom: 1px solid #f8f8f8;
  border-radius: 10px;
  background: white;
  overflow: auto;
  height: 100px;
   overflow: hidden;
}

/* 遮罩层 */
.shade {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(190, 190, 190, 0.6);
  z-index: 300;
}
</style>
