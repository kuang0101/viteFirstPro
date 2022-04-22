/**
 *  vue-router4.x 支持 typescript，配置路由的类型是 RouteRecordRaw，这里 meta 可以让我们有更多的发挥空间，这里提供一些参考：
 * 
    title:string; 页面标题，通常必选。
    icon?:string; 图标，一般配合菜单使用。
    auth?:boolean; 是否需要登录权限。
    ignoreAuth?:boolean; 是否忽略权限。
    roles?:RoleEnum[]; 可以访问的角色
    keepAlive?:boolean; 是否开启页面缓存
    hideMenu?:boolean; 有些路由我们并不想在菜单中显示，比如某些编辑页面。
    order?:number; 菜单排序。
    frameUrl?:string; 嵌套外链。
 */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Login",
    component: () => import("@/pages/login/Login.vue"), // 此处要带上 文件后缀 .vue
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
