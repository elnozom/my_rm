<template>
<v-card class="h-full">
  <v-card-text>
    <!-- <h2 v-if="total == 0" class="text-center mb-4">{{$t(chart.label)}}</h2>
    <p v-if="total == 0" class="text-center">لا يوجد بيانات</p> -->
    <canvas ref="chart"/>
  </v-card-text>
</v-card>
</template>
<script lang="ts">
import Vue from "vue";
import ChartMixin from '@/mixins/chartMixin'
export default Vue.extend({
  mixins: [ChartMixin],

});
</script>