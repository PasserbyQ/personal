<template>
  <div class="container">
    <div
      class="case-item"
      v-for="item in cases"
      :key="item.title"
      @click="showDetail(item)"
    >
      <div
        class="bg-icon"
        :style="{
          background: 'url(' + getIcon(item.icon) + ')',
          'background-size': '100% 100%',
        }"
      ></div>
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
import { computed, onMounted, reactive } from "vue";
import { useRouter } from "vue-router";
const dataList = require("@/json/getCaseList.json");

export default {
  setup() {
    /*****************  数据声明  ***************/
    const router = useRouter();
    // 案例
    const cases = computed(() => {
      return dataList.result;
    });

    /*****************  生命周期  ***************/
    /*****************  自定义方法  ***************/
    const getIcon = (icon: string) => {
      return require(`@/assets/case/${icon}.png`);
    };

    const showDetail = (item: any) => {
      window.scrollTo(0, 0);
      const id = item.icon;
      router.push({
        name: "CaseDetail",
        params: {
          id: id,
        },
      });
    };
    /*****************  网络请求  ***************/
    return { cases, getIcon, showDetail };
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
    width: 30%;
    height: 220px;
    background: #13df81;
    margin-bottom: 20px;
    margin-right: 20px;

    position: relative;
    cursor: pointer;
    box-shadow: 0px 8px 15px 0px rgba(0, 0, 0, 0.12);

    .bg-icon {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      height: 180px;
    }
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
        // opacity: 0;
        img {
          width: 20px;
          height: 20px;
          transform: translate(50%, 50%);
        }
      }
    }
  }
  // .case-item:hover {
  //   cursor: pointer;
  //   box-shadow: 0px 8px 15px 0px rgba(0, 0, 0, 0.12);
  //   .arrow-container {
  //     transition: all 1s;
  //     opacity: 1;
  //   }
  // }
}
</style>