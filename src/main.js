import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//import Embed from './embed.vue';

createApp(App).use(store).use(router).mount("#app");

// var VideoEmbed = {
//     install: function (Vue) {
//         if (Vue.__embed_installed) {
//             return;
//         }

//         Vue.__embed_installed = true;

//         Vue.component('video-embed', Embed);
//     }
// };

// if (typeof window !== 'undefined' && window.Vue) {
//     Vue.use(VideoEmbed);
// }

// export default VideoEmbed;