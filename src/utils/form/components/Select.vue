<template>
  <v-select
    @change="change"
    :cache-items="input.cache"
    :item-text="input.text"
    v-model="input.val"
    :item-value="input.value"
    :value="input.initial || null"
    :items="input.items"
    :clearable="input.clearable"
    :loading="input.loading"
    :append-icon="input.required ? 'mdi-asterisk' : ''"
    :prepend-icon="input.icon"
    hide-details
    :label="$t(input.label)"
    single-line
  ></v-select>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    input: Object,
  },
  methods:{
      change(val:any){
        if(typeof this.input.change != 'undefined'){
          this.input.change(val)
        }
        this.input.val = val
        this.$emit('change')
      }
  }
});
</script>