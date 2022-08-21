<template>
  <datatable :table="data"></datatable>
</template>
<script lang="ts">
import Vue from "vue";
import data from "@/datatables/accounts/account-balance";
import datatable from "@/utils/datatable/components/datatable.vue";
import Api from '@/utils/axios/Api';
const Http = Api.getInstance();

export default Vue.extend({
  name: "account-balance",
  components:{
    datatable
  },
  data(){
    return {
        data,
        balanceBefore:0,
    }
  },
  created(){
    Http.get("balance/before").then((res) => this.balanceBefore = res as unknown as number)
  }
});
</script>
