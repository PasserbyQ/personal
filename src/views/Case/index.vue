<template>
  <div class="container">
    <div class="case-item" v-for="item in dataList" :key="item.title">
      <div class="info">
        <div>
          <div>{{ item.title }}</div>
          <div style="font-size: 12px">{{ item.type }}</div>
        </div>
        <div class="arrow-container">
          <img src="@/assets/arrow_active.png" />
        </div>
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
      { title: "趣生活", type: "APP", icon: "" },
      { title: "趣生活", type: "APP", icon: "" },
      { title: "趣生活", type: "APP", icon: "" },
      { title: "趣生活", type: "APP", icon: "" },
    ]);
    /*****************  生命周期  ***************/
    /*****************  自定义方法  ***************/
    /*****************  网络请求  ***************/
    return { dataList };
  },
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  //   justify-content: space-between;
  align-items: center;
  padding: 100px 300px 0 300px;

  .case-item {
    width: 32%;
    height: 220px;
    background: #13df81;
    margin-bottom: 20px;
    margin-right: 10px;

    position: relative;
    .info {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 40px;
      background: white;

      font-size: 15px;
      text-align: left;
      padding: 10px;

      display: flex;
      justify-content: space-between;
      align-items: center;

      .arrow-container {
        width: 40px;
        height: 40px;
        border-radius: 40px;
        background: #13df81;
        opacity: 0;
        img {
          width: 20px;
          height: 20px;
          transform: translate(50%, 50%);
        }
      }
    }
  }
  .case-item:hover {
    cursor: pointer;
    box-shadow: 0px 8px 15px 0px rgba(0, 0, 0, 0.12);
    .arrow-container {
      transition: all 1s;
      opacity: 1;
    }
  }
}
</style>