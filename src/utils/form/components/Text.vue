<template>
    <v-text-field
      :label="$t(input.label)"
      :prepend-icon="input.icon"
      :append-icon="input.required ? 'mdi-asterisk' : ''"
      v-model="input.val"
      @input="change"
    ></v-text-field>
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
        console.log(this.input)
        this.$emit('change' )
      }
  }
});
</script>