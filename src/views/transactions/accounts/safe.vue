<template>
  <v-container>
    <v-card>
      <v-card-title>
        {{$t('safe_form')}}
      </v-card-title>
      <v-card-text>
        <v-tabs
          v-model="tab"
          fixed-tabs
        >
          <v-tab
            href="#mobile-tabs-5-1"
            class="primary--text"
            @click.prevent="changeType(1)"
          >
            <v-icon class="mr-4">mdi-account</v-icon>
            {{$t('customer')}}
          </v-tab>

          <v-tab
            href="#mobile-tabs-5-2"
            class="primary--text"
            @click.prevent="changeType(2)"
          >
            <v-icon class="mr-4">mdi-shield-account-outline</v-icon>
            {{$t('supplier')}}

          </v-tab>

          <v-tab
            href="#mobile-tabs-5-3"
            class="primary--text"
            @click.prevent="changeType(3)"
          >
            <v-icon class="mr-4">mdi-cash-minus</v-icon>
            {{$t('expense')}}
            
          </v-tab>
        </v-tabs>
        <app-form :form="form" @submit="submit"/>
      </v-card-text>
    </v-card>
  </v-container>
</template>


<script lang="ts">
import AppForm from "@/utils/form/components/Form.vue";
import {inputs , submit } from "@/forms/accounts/safe/index";

import Vue from "vue";
import Form  from "@/utils/form/Form";
import { SelectInputInterface } from "@/utils/form/interface";
import Api from '@/utils/axios/Api';
import { AnyObject } from "chart.js/types/basic";
const Http = Api.getInstance();
export default Vue.extend({
  data() {
    const form = new Form(inputs , submit)
    return {
    inputs,
      form,
      type : 1,
       tab: null,
    };
  },
  components: {
    AppForm,
  },
  methods:{
    changeType(type:number){
      this.type = type
        for (let index = 0; index < this.inputs.length; index++) {
            const input = this.inputs[index]
            const field = this.inputs[index].field as SelectInputInterface;
            if(field.name === 'AccSerial'){
                field.url = `get-account?type=${type}`
                input.getInputItems()
              break 
            }
        }
      
    },
    submit(){
      let form:AnyObject = {...this.form.state}
      form.AccType = this.type
      form.amount = parseInt(form.amount as string)
      this.form.loading = true
      Http.post('pay' , form)
      .then(() => {
        this.form.loading = false
        this.$store.commit("ui/snackBar" , {active : true , text:"success"});
        this.form.initInputs()
      })
    }
  }
});
</script>
