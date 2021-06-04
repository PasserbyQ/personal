<template>
  <div class="tech-container">
    <div
      class="tech-item"
      v-for="item in technologys"
      :key="item.title"
      @click="showDetail(item)"
    >
      <img class="icon" :src="getIcon(item.icon)" />
      <div class="content">
        <div class="title">{{ item.title }}</div>
        <div class="desc">{{ item.desc }}</div>
      </div>
      <span class="date">{{ item.year + "-" + item.date }}</span>
      <div class="more">
        <img src="@/assets/arrow_normal.png" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, onMounted, reactive } from "vue";
const dataList = require("@/json/getTechnologys.json");

export default {
  setup() {
    /*****************  数据声明  ***************/
    const technologys = computed(() => {
      return dataList.result;
    });
    /*****************  生命周期  ***************/

    /*****************  自定义方法  ***************/
    const getIcon = (icon: string) => {
      if (icon) {
        return icon;
      }
      return require("@/assets/logo.png");
    };

    const showDetail = (item: any) => {
      item.url && window.open(item.url);
    };
    /*****************  网络请求  ***************/

    return {
      technologys,
      getIcon,
      showDetail,
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

  position: relative;

  .icon {
    width: 200px;
    height: 150px;
    background: white;
  }

  .date {
    position: absolute;
    bottom: 10px;
    left: 240px;
    font-size: 13px;
    color: #919191;
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
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
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
  .date {
    color: white;
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