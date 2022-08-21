import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Base from "../components/base/base.vue";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/login",
    name: "Login",
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/',
    component: Base,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
      },
     
      // pos rotues
      {
        path: "/cashtray",
        name: "pos-cashtray",
        component: () => import('../views/reports/pos/cashtray.vue'),
      },
      {
        path: "/open-cashtray",
        name: "pos-open-cashtray",
        component: () => import('../views/reports/pos/openCashtray.vue'),
      },
      {
        path: "/driver-totals",
        name: "driver-totals",
        component: () => import('../views/reports/pos/driverTotals.vue'),
      },

      // accounts routes
      {
        path: "/cashflow",
        name: "cashflow",
        component: () => import('../views/reports/accounts/cashflow.vue'),
      },
      {
        path: "/account-balance",
        name: "account-balance",
        component: () => import('../views/reports/accounts/accountBalance.vue'),
      },
      {
        path: "/balance-of-trade",
        name: "balance-of-trade",
        component: () => import('../views/reports/accounts/balanceOfTrade.vue'),
      },
      {
        path: "/suppliers-balance",
        name: "suppliers-balance",
        component: () => import('../views/reports/accounts/suppliersBalance.vue'),
      },

      // items routes
      {
        path: "/top-sales",
        name: "top-sales",
        component: () => import('../views/reports/items/topSales.vue'),
      },
      {
        path: "/stock",
        name: "stock",
        component: () => import('../views/reports/items/stock.vue'),
      },
      {
        path: "/trans-cycle",
        name: "trans-cycle",
        component: () => import('../views/reports/items/transCycle.vue'),
      },

      // transactions routes
      //safe
      {
        path: "/safe",
        name: "safe",
        component: () => import('../views/transactions/accounts/safe.vue'),
      },

      //cashtray
      {
        path: "/cashtray/paused",
        name: "paused-cashtray",
        component: () => import('../views/transactions/pos/cashtray/paused.vue'),
      },
      {
        path: "/cashtray/close/:serial/:amount",
        name: "close-cashtray",
        component: () => import('../views/transactions/pos/cashtray/close.vue'),
      },
    ]
  },
  {
    path: '/server-error',
    component: () => import('../views/errors/server.vue'),
  }
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
