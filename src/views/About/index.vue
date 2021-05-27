<template>
  <div class="about-container">
    <top-tool
      :show-tag="true"
      :show-more="false"
      title="工作经历"
      @more="more"
    />
    <div class="job">
      <div class="job-top">
        <img src="@/assets/logo.png" alt="" />
        <div class="job-top-right">
          <div>中通快递</div>
          <div>2018.07-至今</div>
        </div>
      </div>
      <div class="job-bottom">
        <img src="" alt="" />
        <div>中通快递</div>
        <div>2018.07-至今</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { onMounted } from "vue";
import TopTool from "@/components/TopTool.vue"; // @ is an alias to /src

export default {
  components: {
    TopTool,
  },
  setup() {
    /*****************  数据声明  ***************/

    /*****************  生命周期  ***************/

    /*****************  自定义方法  ***************/

    /*****************  网络请求  ***************/

    return {};
  },
};
</script>
<style lang="scss" scoped>
.about-container {
  padding: 50px 200px;
}

.job {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .job-top {
    display: flex;
    text-align: left;
    img {
      width: 60px;
      height: 60px;
    }

    .job-top-right {
      margin-left: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
}
</style>