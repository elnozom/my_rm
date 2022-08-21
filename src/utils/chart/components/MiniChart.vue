<template>
    <div class="mini-chart" :class="chart.label">
        <div class="wrapper">
            <div class="data">
                <span class="header">{{currency(total)}}</span>
                <span class="sub-header">{{$t(chart.label)}}</span>
                <span class="small"></span>
            </div>
            <div class="actions">
               <v-icon>mdi-reload</v-icon>
            </div>
        </div>
            <div class="chart">
                <canvas ref="chart"></canvas>
            </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import ChartMixin from '@/mixins/chartMixin'
export default Vue.extend({
  mixins: [ChartMixin],
});
</script>
<style src="@/scss/components/partials/mini-chart.css"  rel="stylesheet" type="text/css" />
