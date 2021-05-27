<template>
  <div class="info-container">
    <div class="avatar"><img src="@/assets/logo.png" /></div>
    <div class="title">秦雨</div>
    <div class="desc">三年原生开发经验，两年前端开发经验，专注技术</div>
  </div>
</template>
<script lang="ts">
import { onMounted } from "vue";
export default {
  setup() {
    /*****************  数据声明  ***************/

    /*****************  生命周期  ***************/

    // onMounted(() => {});

    /*****************  自定义方法  ***************/

    /*****************  网络请求  ***************/

    return {};
  },
};
</script>
<style lang="scss" scoped>
.info-container {
  height: 240px;
  background: #13df81;
  color: white;

  .avatar {
    padding: 20px;
    img {
      width: 50px;
      height: 50px;
    }
  }

  .title {
    font-size: 18px;
    font-weight: bold;
    padding-bottom: 20px;
  }

  .desc {
    font-size: 16px;
    padding-bottom: 20px;
  }
}
.info-container:hover {
  cursor: pointer;
}
</style>