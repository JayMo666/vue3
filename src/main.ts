import { createApp, defineComponent, h } from 'vue'
// import App from "./App.vue";
import App from './App'
// import HelloWorld from './components/HelloWorld.vue'
// const img = require('./assets/logo.png') // eslint-disable-line

// const App = defineComponent({
//   render() {
//     // return 123
//     return h('div', { id: 'app' }, [
//       h('img', { alt: 'vue log', src: img }),
//       h(HelloWorld, { msg: 'Vue3 +TS', age: 12 }),
//     ])
//   },
// })
createApp(App).mount('#app')
