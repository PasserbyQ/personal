<template>
  <div class="about-container">
    <!-- 个人简介 -->
    <div class="introduction-container">
      <div class="left">{{ "个人\n简介" }}</div>
      <div class="right">
        <span>5年开发经验 | 27岁 </span>
        <div class="contact">
          <span>联系方式：</span>
          <a
            style="margin-right: 20px"
            href="tencent://message/?uin=1173020746&Site=qq&Menu=yes"
            ><img src="@/assets/QQ.png"
          /></a>
          <!-- <img src="@/assets/wechat.png" @click="showWechat" /> -->
          <el-popover placement="bottom" :width="200" trigger="hover">
            <template #reference>
              <img src="@/assets/wechat.png" @click="showWechat" />
            </template>
            <div style="text-align: center">
              <img
                style="width: 150px; height: 150px"
                src="@/assets/wechat_code.png"
              />
            </div>
          </el-popover>
        </div>
        <span>联系邮箱：1173020746@qq.com</span>
      </div>
    </div>
    <!-- 专业技能 -->
    <top-tool
      :show-tag="true"
      :show-more="false"
      title="专业技能"
      @more="more"
    />
    <div class="major-container">
      <div class="major-item" v-for="item in majorList" :key="item.title">
        <div class="title">{{ item.title }}:</div>
        <div class="major" v-for="(major, index) in item.items" :key="index">
          <div></div>
          <span>{{ major }}</span>
        </div>
      </div>
    </div>
    <!-- 工作经历 -->
    <top-tool
      :show-tag="true"
      :show-more="false"
      title="工作经历"
      @more="more"
    />
    <div class="job-container" v-for="item in dataList" :key="item.name">
      <div class="tech-item">
        <div class="logo"><img :src="item.logo" alt="" /></div>
        <div class="company">{{ item.name }}</div>
        <div class="more">
          <div>
            <div class="station time">{{ item.station }}</div>
            <div class="time">{{ item.date }}</div>
          </div>
        </div>
      </div>
      <div class="arrow-container">
        <img src="@/assets/arrow_active.png" />
      </div>
      <div class="project-container">
        <div
          class="case-item"
          v-for="project in item.projects"
          :key="project.title"
        >
          <div class="desc">
            {{ project.desc }}
          </div>
          <div class="info">
            <div>
              <div class="title">{{ project.title }}</div>
              <div class="type" style="font-size: 12px">{{ project.type }}</div>
            </div>
            <div class="arrow-container">
              <img src="@/assets/arrow_active.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { onMounted, reactive } from "vue";
import TopTool from "@/components/TopTool.vue"; // @ is an alias to /src

export default {
  components: {
    TopTool,
  },
  setup() {
    /*****************  数据声明  ***************/
    const majorList = reactive([
      {
        title: "前端",
        items: [
          "熟练掌握基于 HTML5 的 webApp 开发以及各种手机移动端适配",
          "熟悉闭包原理，熟悉面向对象 JS 编程，理解原型链的继承机制",
          "熟练掌握Vue.js主流MVVM框架开发,了解node.js,react.js以及MVC、 MVVM 设计模式与模块化开发流程",
          "熟练使用 HTML、CSS、JavaScript、TypeScript 等前端技术，开发兼容 主流浏览器的页面，以及实现页面的交互，提升用户体验。",
          "熟练调试工具，能够快速解决编码问题。",
          "基于需求，快速选择合适的框架，并提高代码的重用性和可读性。",
        ],
      },
      {
        title: "iOS",
        items: [
          "熟练掌握 Objective-C、Swift 语言和 iOS 开发与调试工具。",
          "熟悉 Flutter，掌握基本控件布局使用。",
          "熟练掌握 iOS App 结构与运行机制，注重代码质量与执行效率。",
          "熟悉常见移动 App 架构，熟悉各类常见第三方库的使用。",
          "熟悉多线程处理 NSThread、NSOperation、GCD 等。",
          "SQLite、Coredata、Realm 等数据持久化方案的使用。",
          "有良好的代码风格与清晰的文档结构，遵循团队开发规范。",
        ],
      },
      {
        title: "小程序",
        items: [
          "熟练掌握常用小程序 api。",
          "熟练使用结合云开发功能开发完整应用。",
          "熟悉小程序上架及发布流程。",
        ],
      },
    ]);

    const dataList = reactive([
      {
        logo: require("@/assets/logo.png"),
        name: "中通快递",
        station: "软件工程师",
        date: "2018.07-至今",
        projects: [
          {
            title: "移动驾驶舱",
            desc:
              "项目介绍:用户通过应用查看公司业务量、订单量、派件量等件量数据，并包含利润、时效、服务质量等模块",
            icon: require("@/assets/logo.png"),
            type: "WebApp(独立开发)",
          },
          {
            title: "同城 e 达",
            desc:
              "项目介绍:用于同城派单业务，通过小程序可下同城单，app 端骑手会接收到接单请求， 形成一套完整的派送链",
            icon: require("@/assets/logo.png"),
            type: "小程序(团队合作)",
          },
          {
            title: "趣生活",
            desc: "项目介绍:包含动态广场、话题、文章及小视频模块生活类小程序",
            icon: require("@/assets/logo.png"),
            type: "小程序(独立开发)",
          },
        ],
      },
      {
        logo: require("@/assets/logo.png"),
        name: "上海达联电子科技有限公司",
        station: "软件工程师",
        date: "2017/12 – 2018/07",
        projects: [
          {
            title: "智能粮库",
            desc:
              "项目介绍:用户通过移动设备远程控制粮库内温湿度传感器等，达到储存粮食的最佳条件， 同时可以通过移动设备控制粮车进出仓的流程操作",
            icon: require("@/assets/logo.png"),
            type: "iOS",
          },
        ],
      },
      {
        logo: require("@/assets/logo.png"),
        name: "江苏钱旺智能系统有限公司",
        station: "软件工程师",
        date: "2015/10 – 2017/12",
        projects: [
          {
            title: "钱宝网",
            desc:
              "项目介绍:综合性商城应用，同时包含发布任务、悬赏、微商功能、 和 IM 包含 单聊、群聊、好友、公众号等功能",
            icon: require("@/assets/logo.png"),
            type: "iOS",
          },
        ],
      },
    ]);
    /*****************  生命周期  ***************/

    /*****************  自定义方法  ***************/
    const showWechat = () => {
      console.log(111);
    };

    /*****************  网络请求  ***************/

    return {
      dataList,
      majorList,
      showWechat,
    };
  },
};
</script>
<style lang="scss" scoped>
.about-container {
  padding: 50px 200px;
}

.introduction-container {
  color: rgba(35, 198, 123, 100);
  font-size: 80px;
  text-align: left;
  display: flex;
  box-shadow: 0px 5px 15px 0px rgba(51, 49, 49, 0.12);
  margin-bottom: 50px;

  .left {
    padding: 0 50px;
    width: 200px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }

  .right {
    color: black;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    .contact {
      img {
        width: 30px;
        height: 30px;
        transform: translateY(25%);
        cursor: pointer;
      }
    }
  }
}

.major-container {
  text-align: left;
  padding: 10px;

  .major-item {
    margin-bottom: 20px;
    .title {
      font-size: 22px;
      font-weight: bold;
    }
    .major {
      display: flex;
      align-items: center;
      font-size: 18px;
      font-weight: bold;
      margin-top: 10px;

      div {
        display: block;
        width: 10px;
        height: 10px;
        border-radius: 10px;
        background: black;
        margin-right: 20px;
      }
    }
  }
}

.job-container {
  display: flex;
  align-items: center;
  margin-top: 40px;
}

.tech-item {
  width: 240px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid rgba(233, 233, 233, 100);
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.12);
  .logo {
    margin: 20px;
    img {
      width: 60px;
      height: 60px;
      border-radius: 5px;
    }
  }
  .title {
    padding: 20px 10px;
  }
  .company {
    padding: 0 20px;
    font-size: 20px;
    font-weight: bold;
  }

  .more {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    height: 80px;
    background: #e9e9e9;

    .time {
      font-size: 15px;
      color: #13df81;
      text-align: left;
    }

    .station {
      font-size: 20px;
      font-weight: bold;
    }
  }
}

.arrow-container {
  margin: 0 20px;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background: #13df81;
  img {
    width: 20px;
    height: 20px;
    transform: translateY(50%);
  }
}

.project-container {
  display: flex;
  align-items: center;

  .case-item {
    width: 200px;
    height: 240px;
    background: #13df81;
    margin-right: 30px;
    box-shadow: 0px 8px 15px 0px rgba(0, 0, 0, 0.12);
    position: relative;
    cursor: pointer;
    .desc {
      padding: 10px;
    }
    .info {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 40px;
      background: white;
      text-align: left;
      padding: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .title {
        font-size: 15px;
        font-weight: bold;
      }

      .type {
        font-size: 12px;
      }

      .arrow-container {
        width: 20px;
        height: 20px;
        border-radius: 20px;
        background: #13df81;
        img {
          width: 10px;
          height: 10px;
          transform: translate(50%, 0);
        }
      }
    }
  }
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
      border: 2px solid #13df81;
      border-radius: 5px;
    }

    .job-top-right {
      margin-left: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .title {
        font-size: 20px;
        font-weight: bold;
      }

      .station {
        font-size: 16px;
        font-weight: bold;
      }

      .time {
        font-size: 16px;
        font-weight: 500;
      }
    }
  }
}
</style>