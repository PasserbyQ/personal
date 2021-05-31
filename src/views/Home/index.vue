<template>
  <div class="top">
    <div class="home"></div>
    <img class="home_bg" src="@/assets/home_bg.png" />
    <div class="home_text">
      <div>书山有路勤为径</div>
      <div>学海无涯苦作舟</div>
    </div>
  </div>
  <case class="case-container" @more="moreCase" />
  <technology class="case-container" @more="moreTech" />
  <!-- <character-info style="margin-top: 50px" @click="moreInfo" /> -->
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref, toRefs } from "vue";
import Case from "./components/Case.vue"; // @ is an alias to /src
import Technology from "./components/Technology.vue"; // @ is an alias to /src
import { useRouter } from "vue-router";

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

    onMounted(() => {
      // debugger;
    });

    const moreCase = () => {
      router.push("Case");
    };

    const moreTech = () => {
      router.push("Technology");
    };

    const moreInfo = () => {
      router.push("About");
    };

    return {
      moreCase,
      moreTech,
      moreInfo,
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
