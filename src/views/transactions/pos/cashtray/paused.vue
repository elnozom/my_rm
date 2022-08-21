<template>
<div>
  <datatable :table="data">
    <template v-slot:actions="{ item }">
     <v-btn class="app-btn" @click.prevent="openModal(item.Serial)">{{$t('close')}}</v-btn>
    </template>
  </datatable>
   <v-dialog
      v-model="modal"
      width="500"
    >
    <v-card>
      <v-card-title>
        {{$t('enter_current_cash')}}
      </v-card-title>
      <v-card-text>
      <v-form>
        <v-text-field v-model="amount" @keyup.enter="close" @keyup.enter.prevent="close" :label="$t('amount')"></v-text-field>
        <v-btn class="app-btn" @click.prevent="close">{{$t('close')}}</v-btn>
      </v-form>
      </v-card-text>

    </v-card>
   </v-dialog>

</div>
</template>
<script lang="ts">
import Vue from "vue";
import data from "@/datatables/pos/paused-cashtray";
import datatable from "@/utils/datatable/components/datatable.vue";
export default Vue.extend({
  name: "pos-cashtray",
  components: {
    datatable,
  },
  data() {
    return {
      modal:false,
      serial:0,
      amount : "",
      data,
    };
  },
  methods:{
    openModal(serial:number){
      this.serial = serial
      this.modal= true
    },
    close(){
      this.$router.push({name : "close-cashtray" , params:{serial:this.serial.toString() , amount: this.amount}})
    }
  }
});
</script>
