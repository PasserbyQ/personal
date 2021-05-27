<template>
  <div class="top">
    <div class="home"></div>
  </div>
  <case class="case-container" @more="moreCase" />
  <technology class="case-container" @more="moreTech" />
  <character-info style="margin-top: 50px" @click="moreInfo" />
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref, toRefs } from "vue";
import Case from "./components/Case.vue"; // @ is an alias to /src
import Technology from "./components/Technology.vue"; // @ is an alias to /src
import CharacterInfo from "./components/CharacterInfo.vue"; // @ is an alias to /src
import { useRouter } from "vue-router";

export default {
  name: "Home",
  components: {
    Case,
    Technology,
    CharacterInfo,
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
  background: #39424f;
}
.home {
  // height: 550px;
  width: 40%;
  background: #13df81;
  border-top: 550px solid #13df81;
  border-right: 550px solid #39424f;
  // border-bottom: 50px solid green;
}
.home:hover {
  cursor: pointer;
}
.case-container {
  padding: 50px 300px 0 300px;
}
</style>
