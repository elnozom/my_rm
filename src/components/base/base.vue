<template>
  <v-app>
    <drawer/>
    <v-main>
      <router-view />
      <snack-bar/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Drawer from "@/components/layouts/Drawer.vue";
import SnackBar from "@/components/layouts/SnackBar.vue";
import {Me} from '@/repositores/user'

export default Vue.extend({
  name: "App",
  components: {
    Drawer,
    SnackBar
  },
  created(){
    document.title = "MyNozom"
     // handle autthorization
      if(!localStorage.getItem('token')) {
        this.$router.replace({name : 'Login'})
        return
      }
      
      if(localStorage.getItem('token')){
        Me().catch((e:any) => {
          console.log(e)
          localStorage.removeItem('token')
          this.$store.commit("ui/appLoaded");
          this.$router.replace({name : 'Login'})

        })
      }
  }
});
</script>