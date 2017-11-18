import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CanvasTools from '@/components/CanvasTools'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'CanvasTools',
            component: CanvasTools
        },
        {
            path: '/hello',
            name: 'HelloWorld',
            component: HelloWorld
        }
    ]
})
