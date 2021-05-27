import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App).use(store).use(router).mount("#app");





// var global
// function f1() {
//     function f2() {
//         var v2 = 999
//         v1 = 111
//         console.log(v1)
//     }
//     var v1 = 666
//     return f2
// }
// const f = f1()
// f()
