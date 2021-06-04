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
          @click="showDetail(project)"
        >
          <div class="desc">
            {{ project.introduce }}
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
import { useRouter } from "vue-router";

export default {
  components: {
    TopTool,
  },
  setup() {
    /*****************  数据声明  ***************/
    const router = useRouter();
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
            type: "WebAPP",
            icon: "data_mob",
            introduce:
              "用户通过应用查看公司业务量、订单量、派件量等件量数据，并包含利润、时 效、服务质量等模块",
            descList: [
              "参与需求评审，与项目经理和技术团队进行充分的沟通，开发创建性高，高可用性的 移动端的 WebApp",
              "参与移动产品和项目制作，配合后台开发人员实现产品前端界面效果与功能。",
              "负责移动产品 HTML5、CSS3 的编写，解决 web 端和移动端适配问题等。",
              "实现产品 UI 和交互方面的开发需求，确保产品具有优质的用户使用体验。",
            ],
            company: "zto",
          },
          {
            title: "趣生活",
            type: "小程序",
            icon: "qsh",
            introduce: "包含动态广场、话题、文章及小视频模块生活类小程序",
            descList: [
              "需求调研及prd及UI设计。",
              "采用云开发模式进行后台存储文章、视频等。",
              "使用 swiper-video 实现小程序员小视频开发。",
            ],
            company: "zto",
          },
          {
            title: "同城e达",
            type: "小程序",
            icon: "city_express",
            introduce:
              "用于同城派单业务，通过小程序可下同城单，app 端骑手会接收到接单请求， 形成一套完整的派送链",
            descList: [
              "参与需求评审，参与产品和项目制作，配合后台人员实现产品界面效果与功能。",
              "负责地址簿页面及我的页面开发。",
            ],
            company: "zto",
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
            type: "iOS",
            icon: "grain",
            introduce:
              "用户通过移动设备远程控制粮库内温湿度传感器等，达到储存粮食的最佳条件， 同时可以通过移动设备控制粮车进出仓的流程操作",
            descList: [
              "根据用户需求说明书，与产品部对项目进行功能分析和策划。",
              "负责智能粮库框架搭建、前后端联调。",
              "设计实时控制粮仓内设备运行框架。",
            ],
            url:
              "https://apps.apple.com/cn/app/%E6%99%BA%E8%83%BD%E7%B2%AE%E5%BA%93/id1245518089",
            company: "dl",
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
            type: "iOS",
            icon: "qb",
            introduce:
              "是一个综合性商城应用，同时包含发布任务、悬赏、微商功能、 和 IM 包含 单聊、群聊、好友、公众号等功能，支持文本、红包、图片、语音、表情、地理位置、商 品、订单信息等内容的发送与接收。",
            descList: [
              "参与项目的构建以及迭代维护，参与日常技术方案选型。",
              "参与 IM 需求分析及实现方案设计，IM 模块底层架构重建。",
              "IM SDK 开发和对外接口调试工作，打包静态库供其他部门使用。",
              "IM 项目优化，聊天数据持久化处理以及缓冲区和重发消息机制处理。",
            ],
            company: "qb",
          },
        ],
      },
    ]);
    /*****************  生命周期  ***************/

    /*****************  自定义方法  ***************/
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

    return {
      dataList,
      majorList,
      showDetail,
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
      margin: 10px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 5;
      overflow: hidden;
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