<template>
  <div>
    <top-tool title="技术" @more="more" />
    <div class="container">
      <div class="tech-item">
        <div class="title">标题</div>
        <div class="content">
          内容内容内容内容内容内容内容内容内容内容内容内容内容内容
        </div>
        <div class="more">
          <div>
            <div class="date year">02-25</div>
            <div class="year">2021</div>
          </div>
          <div class="arrow-container">
            <img src="@/assets/arrow_active.png" />
          </div>
        </div>
      </div>
      <div class="tech-item">
        <div class="title">标题</div>
        <div class="content">
          内容内容内容内容内容内容内容内容内容内容内容内容内容内容
        </div>
        <div class="more">
          <div>
            <div class="date year">02-25</div>
            <div class="year">2021</div>
          </div>
          <div class="arrow-container">
            <img src="@/assets/arrow_active.png" />
          </div>
        </div>
      </div>
      <div class="tech-item">
        <div class="title">标题</div>
        <div class="content">
          内容内容内容内容内容内容内容内容内容内容内容内容内容内容
        </div>
        <div class="more">
          <div>
            <div class="date year">02-25</div>
            <div class="year">2021</div>
          </div>
          <div class="arrow-container">
            <img src="@/assets/arrow_active.png" />
          </div>
        </div>
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
  setup(prop: any, context: any) {
    /*****************  数据声明  ***************/
    /*****************  生命周期  ***************/
    /*****************  自定义方法  ***************/
    const more = () => {
      context.emit("more");
    };
    /*****************  网络请求  ***************/
    return {
      more,
    };
  },
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  .tech-item {
    width: 30%;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid rgba(233, 233, 233, 100);
    .title {
      padding: 20px 10px;
    }
    .content {
      padding: 10px;
    }

    .more {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      height: 80px;
      background: #e9e9e9;

      .year {
        font-size: 12px;
        color: #13df81;
        text-align: left;
      }

      .date {
        font-size: 20px;
        font-weight: bold;
      }
      .arrow-container {
        width: 40px;
        height: 40px;
        border-radius: 40px;
        background: #13df81;
        opacity: 0;

        img {
          width: 20px;
          height: 20px;
          transform: translateY(50%);
        }
      }
    }
  }

  .tech-item:hover {
    cursor: pointer;
    background: #13df81;
    border: none;
    color: white;
    box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.12);
    transition: all 1s;
    .more {
      background: white;
    }
    .arrow-container {
      opacity: 1;
    }
  }
}
</style>