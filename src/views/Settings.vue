<template>
<v-container>
  <v-row>
    <v-col cols="12">
      <v-card>
        <v-card-text>
          <v-col cols="12">
            <v-select
            ref="store"
            item-text="name"
            item-value="value"
            @keyup.enter="submit"
            v-model="store"
            :label="$t('store')"
            :items="stores"
            outlined
            ></v-select>
            
        </v-col>
        <v-col cols="12" class="text-center">
            <v-btn  :loading="loading" @click.prevent="submit" class="app-btn">{{$t('submit')}}</v-btn>
        </v-col>
    
        </v-card-text>

      </v-card>

    </v-col>
  </v-row>
</v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home",
  data(){
    return {
      store:"",
      loading:false,
      stores:[
       {name:'wave premium' , value: 0},
       {name:'wave' , value: 1},
       {name:'smile' , value: 2},
       {name:'aboali', value: 3}
      ],
    }
  },
  methods: {
    submit() {
      
      console.log(this.store)
    }
  },
});
</script>
