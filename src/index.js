import './res/styles/index.less';
import 'element-ui/lib/theme-chalk/index.css';
import 'tailwindcss/tailwind.css'
import Vue from 'vue';
import less from 'less';
import ElementUI from 'element-ui'
import Comp from "./components/Comp/Comp.vue";

Vue.use(less);
Vue.use(ElementUI);
new Vue({
    el:'#content',
    render:(h,props)=>h(Comp,{
        props:{
            text:'Hello World!',
        },
    })
});