<template>
  <v-container>
    <v-card>
      <v-card-title>
        {{$t('close_cashtray')}}
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col
            cols="12"
            md="6"
            class="plus"
          >
            <v-card>
              <v-card-title v-if="plus != 0" class="success">{{$t('plus')}}</v-card-title>
              <v-card-title v-if="minus != 0" class="danger">{{$t('minus')}}</v-card-title>
            </v-card>
            <v-card-text class="">
              <h2  v-if="plus != 0">{{currency(plus)}}</h2>
              <h2  v-if="minus != 0">{{currency(minus)}}</h2>
            </v-card-text>
            <v-card>
              <v-card-title>
                {{$t('income')}}
              </v-card-title>

              <ul class="list">
                <li
                  v-for="item in Object.keys(income)"
                  :key="item"
                >
                  <span v-text="$t(item)" />
                  <span v-text="currency(income[item])" v-if="income[item] != null" />
                </li>
              </ul>

            </v-card>
          </v-col>
          <v-col
            cols="12"
            md="6"
            class="py-8"
          >
            <v-card>
              <v-card-title>
                {{$t('outcome')}}
              </v-card-title>
              <ul class="list">
                <li
                  v-for="item in Object.keys(outcome)"
                  :key="item"
                >
                  <span v-text="$t(item)" />
                  <span v-text="currency(outcome[item])" v-if="outcome[item] != null"/>
                </li>
              </ul>
            </v-card>
          </v-col>
          <v-col
            cols="12"
            class="py-8"
          >
            <v-btn class="app-btn" @click.prevent="close">{{$t('close')}}</v-btn>
          </v-col>
        </v-row>

      </v-card-text>
    </v-card>
  </v-container>
</template>
<script lang="ts">
import Vue from "vue";
import data from "@/datatables/pos/paused-cashtray";
import { currency } from "@/utils/helpers";
import datatable from "@/utils/datatable/components/datatable.vue";
import {getCashtrayData , closeCashtray} from "@/repositores/cashtray"
export default Vue.extend({
  name: "pos-cashtray",
  components: {
    datatable,
  },
  data() {
    return {
      currentAmount: null,
      income: {
        initialExchangeAmount: null,
        revenue: null,
        totalAmount: null,
        delivery: null,
        total: null,
      },
      outcome: {
        outcome: null,
        visa: null,
        endExchangeAmount: null,
        TotalVoidCash: null,
        discount: null,
        payLater: null,
        deliveryNoneReturn: null,
        total: null,
      },

      plus:0,
      minus:0,
      data,
    };
  },
  methods: {
    getCashtrayData(){
      getCashtrayData(parseInt(this.$route.params.serial)).then((resp:any) => {
        // incom

        this.income.initialExchangeAmount = resp['StartCash']
        this.income.revenue = resp['TotalIn']
        this.income.totalAmount = resp['TotalCash']
        this.income.delivery = resp['HomeOutCashTry']
        
        
        this.income.total = resp['StartCash'] + resp['TotalIn'] + resp['TotalCash'] + resp['HomeOutCashTry']




        // outcome
        this.outcome.outcome = resp['TotalOut']
        this.outcome.visa = resp['TotalVisa']
        this.outcome.endExchangeAmount = resp['EndCash']
        this.outcome.discount = resp['DiscValue']
        this.outcome.payLater = resp['PayLater']
        this.outcome.deliveryNoneReturn = resp['DeliveryNonReturn']
        this.outcome.TotalVoidCash = resp['TotalVoidCash']


        this.outcome.total = resp['TotalOut'] + resp['TotalVisa'] + resp['EndCash'] + resp['DiscValue']+ resp['PayLater'] + resp['DeliveryNonReturn'] + resp['TotalVoidCash']

        const calc = parseInt(this.$route.params.amount) - (this.income.total! - this.outcome.total! )
        calc > 0 ? this.plus = calc : this.minus = Math.abs(calc)
      })
    },
    currency,
    close() {
      closeCashtray(parseInt(this.$route.params.serial)).then(() => {
        this.$router.push({ name: "" });
      })
    },
  },

  created(){
    this.getCashtrayData()

  }
});
</script>
<style scoped src="@/scss/pages/closeCashtray.css"/>