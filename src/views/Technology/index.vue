<template>
  <div class="tech-container">
    <div class="tech-item" v-for="item in dataList" :key="item.title">
      <img class="icon" :src="item.icon" />
      <div class="content">
        <div class="title">{{ item.title }}</div>
        <div class="desc">{{ item.desc }}</div>
      </div>
      <div class="more">
        <img src="@/assets/arrow_normal.png" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { onMounted, reactive } from "vue";
export default {
  setup() {
    /*****************  数据声明  ***************/
    const dataList = reactive([
      { title: "趣生活", desc: "APP", icon: require("@/assets/logo.png") },
      { title: "趣生活", desc: "APP", icon: require("@/assets/logo.png") },
      { title: "趣生活", desc: "APP", icon: require("@/assets/logo.png") },
      { title: "趣生活", desc: "APP", icon: require("@/assets/logo.png") },
    ]);

    /*****************  生命周期  ***************/

    /*****************  自定义方法  ***************/

    /*****************  网络请求  ***************/

    return {
      dataList,
    };
  },
};
</script>
<style lang="scss" scoped>
.tech-container {
  padding: 50px 200px;
}
.tech-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f7f7f7;
  padding: 10px 20px;
  margin-bottom: 20px;

  .icon {
    width: 200px;
    height: 150px;
    background: white;
  }

  .content {
    padding: 0 20px;
    text-align: left;
    flex: 1;

    .title {
      font-size: 20px;
      color: #111111;
    }

    .desc {
      font-size: 14px;
      color: #919191;
      letter-spacing: 2px;
    }
  }

  .more {
    position: relative;
    width: 40px;
    height: 40px;
    line-height: 20px;
    border-radius: 40px;
    img {
      position: absolute;
      left: 50%;
      transform: translate(-50%, 50%);
      width: 30px;
      height: 20px;
    }
  }
}
.tech-item:hover {
  cursor: pointer;
  background: #13df81;
  box-shadow: 0px 8px 15px 0px rgba(0, 0, 0, 0.12);
  transition: all 1s;
  .more {
    border-radius: 40px;
    background: white;
  }
  .content {
    .title {
      color: white;
    }

    .desc {
      color: white;
    }
  }
}
</style>