import VueRouter from 'vue-router';
import index from '../../components/index.vue';
import my from '../../components/my.vue';
import activite from '../../components/activite.vue';
import nav from '../../components/nav.vue';
import shoping from '../../components/shoping.vue';
import type from '../../components/type.vue';
import login from '../../components/login.vue';
import list from '../../components/list.vue';
import detail from'../../components/detail.vue'
import register from'../../components/register.vue'



var router = new VueRouter({
    routes: [{
        path: '/',
        component: nav,
        children: [{
            path: '/index',
            component: index
        }, {
            path: '/type',
            component: type
        }, {
            path: '/shoping',
            component: shoping
        },
        {
            path: '/type',
            component: type
        }, {
            path: '/activite',
            component: activite
        }
        , {
            path: '/my',
            component: my
        }
        ],
        redirect: '/index'
    }, {
        path: '/list',
        component: list
    }
        ,
    {
        path: '/login',
        component: login
    },{
        path: '/detail',
        component: detail
    },{
        path: '/register',
        component: register
    }
    ]
})

export default router;