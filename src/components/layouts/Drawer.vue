<template>
  <div class="sidebar">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="false"
      :right="$vuetify.rtl"
      :mini-variant="variant"
      color="bgdarker"
      fixed
      app
    >
      <v-list class="pt-0">
        <v-list-item class="h-app-bar justify-between logo">
          <router-link :to="{ name: 'Home' }">
            <img src="../../assets/img/logo-light.png" />
          </router-link>
        </v-list-item>
        <v-list-item
          to="/"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>mdi-home-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="$t('dashboard')" />
          </v-list-item-content>
        </v-list-item>
        <v-list-group
          v-for="(item, i) in items"
          :key="i"
          exact
          :prepend-icon="item.icon"
        >
          <template v-slot:activator>
            <v-list-item-title v-text="$t(item.title)"></v-list-item-title>
          </template>
          <v-list-group
            v-for="(child, i) in item.children"
          :key="i"
          exact
          sub-group

        >
          <template v-slot:activator>
            <v-icon class="m-r-2">{{child.icon}}</v-icon>

            <v-list-item-title v-text="$t(child.title)"></v-list-item-title>
          </template>

          <v-list-item
            v-for="(grandChild, i) in child.children"
            :key="i"
            :to="grandChild.to"
            sub-group
            router
            exact
            class="sub"
          >
            <v-list-item-action>
              <v-icon>{{ grandChild.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="$t(grandChild.title)" />
            </v-list-item-content>
          </v-list-item>
          </v-list-group>
        </v-list-group>
        <!-- ///// -->
        <v-list-group
          exact
          prepend-icon="mdi-cog-outline"
        >
          <template v-slot:activator>
            <v-list-item-title v-text="$t('sidebar.settings')"></v-list-item-title>
          </template>
          
          <v-list-item
            to="/settings"
            sub-group
            router
            exact
            class="sub"
          >
            <v-list-item-action>
              <v-icon>mdi-store-outline</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="$t('store_settings')" />
            </v-list-item-content>
          </v-list-item>
          <v-list-item
            to="/items/edit"
            sub-group
            router
            exact
            class="sub"
          >
            <v-list-item-action>
              <v-icon>mdi-database-edit-outline</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="$t('edit_items')" />
            </v-list-item-content>
          </v-list-item>
         
        </v-list-group>
        <!-- ///// -->
       
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      color="bgdarker"
    >
    
        <router-link to="/"> <img  v-show="!drawer" src="../../assets/img/icon.png"  class="w-40 transition"/></router-link>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="d-flex align-center">
      </div>

      <v-spacer></v-spacer>

      <v-btn
        text
        @click.prevent="switchMode"
      >
        <v-icon class="">mdi-weather-sunny</v-icon>
        <!-- mdi-weather-sunny -->
      </v-btn>
      <v-btn
        text
        @click.prevent="switchLanguage"
      >
        <v-icon class="">mdi-earth</v-icon>
        <!-- mdi-weather-sunny -->
      </v-btn>
      <v-btn
        text
        @click.prevent="logout"
      >
        <v-icon class="">mdi-logout</v-icon>
        <!-- mdi-weather-sunny -->
      </v-btn>
    </v-app-bar>
    <!-- <div class="breadcrumbs"></div> -->
  </div>
</template>

<script>
import items from "@/utils/Sidebar.ts";
import { switchLanguage } from "@/utils/helpers";
export default {
  data() {
    return {
      drawer: true,
      variant: false,
      items,
    };
  },
  methods: {
    switchMode() {
      this.$vuetify.theme.dark
        ? localStorage.setItem("mode", "light")
        : localStorage.setItem("mode", "dark");

      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
    switchLanguage() {
      const locale = this.$vuetify.rtl ? "en" : "ar";
      switchLanguage(locale, this);
    },
    logout(){
      localStorage.removeItem('token')
      this.$router.replace({name :'Login'})
    }
  },
};
</script>
