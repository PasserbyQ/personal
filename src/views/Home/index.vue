<template>
  <div class="top">
    <div class="home"></div>
    <img class="home_bg" src="@/assets/home_bg.png" />
    <div class="home_text">
      <div>书山有路勤为径</div>
      <div>学海无涯苦作舟</div>
    </div>
  </div>
  <case class="case-container" :data="cases" @more="moreCase" />
  <technology class="case-container" :data="techs" @more="moreTech" />
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  reactive,
  ref,
  toRefs,
} from "vue";
import Case from "./components/Case.vue"; // @ is an alias to /src
import Technology from "./components/Technology.vue"; // @ is an alias to /src
import { useRouter } from "vue-router";
const homeData = require("@/json/home.json");

export default {
  name: "Home",
  components: {
    Case,
    Technology,
  },

  setup() {
    const router = useRouter();
    const state = reactive({
      ob: { name: "qqq", age: 10 },
    });
    // 案例
    const cases = computed(() => {
      return homeData.result.cases;
    });

    // 技术
    const techs = computed(() => {
      return homeData.result.technologys;
    });

    onMounted(() => {
      // debugger;
    });

    const moreCase = () => {
      window.scrollTo(0, 0);
      router.push("case");
    };

    const moreTech = () => {
      window.scrollTo(0, 0);
      router.push("technology");
    };

    return {
      cases,
      techs,
      moreCase,
      moreTech,
    };
  },
};
</script>
<style lang="scss" scoped>
.top {
  position: relative;
  background: #39424f;
}

.home_bg {
  position: absolute;
  left: 100px;
  top: 50%;
  transform: translateY(-50%);
}

.home_text {
  position: absolute;
  right: 120px;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  font-size: 30px;
  font-weight: bold;
  font-family: Georgia, "Times New Roman", Times, serif;
  div {
    &:last-child {
      margin-top: 30px;
      margin-left: 70px;
    }
  }
}

.home {
  // height: 550px;
  width: 40%;
  background: #13df81;
  border-top: 550px solid #13df81;
  border-right: 550px solid #39424f;
  // border-bottom: 50px solid green;
}

.case-container {
  padding: 50px 300px 0 300px;
}
</style>
