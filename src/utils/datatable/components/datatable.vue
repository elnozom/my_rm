<template>
  <div>
   
      <v-container>
        <v-row>
          <v-col cols="12">
            <h2 class="primary-text mb-4">{{$t(table.title)}}</h2>
            <!-- <p class="">{{$t(table.description)}}</p> -->
          </v-col>
          <v-col cols="12">
          <v-data-table
            :headers="table.headers"
            :items="table.data"
            :loading="table.loading"
            dense
            :search="table.search"
            class="elevation-4"
            fixed-header
            height="400px"
            >
            <template v-slot:top >
              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    {{$t('filters')}}
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <app-form :form="table.filters" @change="filter" v-if="table.hasFilters"/>
                    <div class="pa-4">
                      <v-btn v-if="!table.error && table.hasFooter && (!table.hasFilters || table.filters.valid)" color="primary" class="w-full my-4" @click.prevent="showTotals">{{$t('show_totals')}}</v-btn>
                    </div>
                    <v-container v-if="table.searchable">
                      <v-text-field
                        v-model="table.search"
                        prepend-icon="mdi-magnify"
                        :label="$t('search')"
                        single-line
                        hide-details
                      ></v-text-field>
                    </v-container>
                    
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </template>
            <template v-slot:body v-if="table.error">
              <tr class="text-center py-4">
                <td :colspan="table.headers.length">
                  {{ $t("error_getting_data") }}
                </td>
              </tr>
            </template>
             <template v-slot:no-data  v-if="table.hasFilters && !table.filters.valid">
                  {{ $t("select_data") }}
            </template>
            <template slot="body.append" v-if="table.hasFooter && table.data.length > 0">
              <tr class="text-center text-white md-hidden bg-gredient">
                <th
                  class="text-center"
                  v-for="(header, index) in table.headers"
                  :key="index"
                >
                  <span v-if="index == 0 && !header.total">
                    {{ $t("totals") }}
                  </span>
                  <span v-else-if="!header.isTotal"> </span>
                  <span v-else>
                    {{ currency(header.total) }}
                  </span>
                </th>
              </tr>
            </template>
            <template v-slot:[`item.actions`]="{ item }">
              <slot v-bind:item="item" name="actions"> </slot>
            </template>
             <template v-slot:[`item.DocDate`]="{ item }">
              <td>{{ parseDate(item.DocDate) }}</td>

            </template>
          </v-data-table>
          </v-col>
        </v-row>
      </v-container>
      <v-dialog
      v-model="dialog"
      width="400"
    >
      <v-card>
        <v-card-title class="text-h5 primary">
          {{$t('totals')}}
        </v-card-title>

        <v-card-text>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    {{$t('key')}}
                  </th>
                  <th class="text-left">
                    {{$t('total')}}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(header , index) in totalsHeaders"
                  :key="index"
                >
                  <td>{{ header.text }}</td>
                  <td>{{ currency(header.total) }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card-text>
      </v-card>
    </v-dialog>
    <!-- <v-btn @click.prevent="table.getData()">reload</v-btn> -->
  </div>
</template>

<script lang="ts">
import Datatable from "@/utils/datatable/datatable";
import { Header } from "@/utils/datatable/datatableInterface";
import { currency , parseDate} from "@/utils/helpers";
import AppForm from '@/utils/form/components/Form.vue'

import Vue from "vue";
import { InputInterface } from "@/utils/form/interface";
export default Vue.extend({
  props: {
    table: Datatable,
  },
  data() {
    return {
      dialog : false
    }
  },
  components:{
    AppForm
  },
  computed:{
    totalsHeaders(){
      return this.table.headers.filter((header:Header) => {
        return header.isTotal ? header : ''
      })
    }
  },
  methods: {
    parseDate,
    currency: (x: number) => currency(x),
    filter(val:any){
      // reset headers totals to avoid sum bug
      // if we dont do this the class will add the totals to thee preevios data totals
      this.table.headers.forEach((header:Header) => {
        header.total = 0
      })
        this.table.getData()
    },
    showTotals(){
      this.dialog=true
    }
  },
});
</script>