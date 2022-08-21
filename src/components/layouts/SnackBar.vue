<template>
    <div class="text-center">
    <v-snackbar
      v-model="snackbar.active"
      :timeout="3000"
    >
      {{ snackbar.text }}

    
    </v-snackbar>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {mapGetters} from 'vuex'

export default Vue.extend({
  name: "SnackBar",
  computed:{
     ...mapGetters({
      snackBar: 'ui/snackBar'
    })
  },
   data: () => ({
      multiLine: true,
      snackbar: false,
      text: `I'm a multi-line snackbar.`,
    }),
  
});
</script>


