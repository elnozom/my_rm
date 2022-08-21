<template>
<v-container>
    <v-form>
        <slot name="title" />
        <v-row>
            <v-col cols="6" v-for="(input , index) in form.inputs" :key="index">
                <text-input @change="change(input.field)" v-if="input.field.type=='text'" :input="input.field"/>
                <select-input  @change="change(input.field)" v-if="input.field.type=='select'" :input="input.field"/>
                <combo-input  @change="change(input.field)" v-if="input.field.type=='combo'" :input="input.field"/>
                <date-input  @change="change(input.field)" v-if="input.field.type=='date'" :input="input.field"/>
                <switch-input  @change="change(input.field)" v-if="input.field.type=='switch'" :input="input.field"/>
            </v-col>
            <v-col cols="12">
                <v-btn color="primary" :loading="form.loading" :disabled="!form.valid" @click.prevent="submit" class="app-btn form-btn">{{$t('submit')}}</v-btn>
            </v-col>
        </v-row>
    </v-form>
</v-container>
</template>

<script lang="ts">
import Form from '../Form'
import SelectInput from './Select.vue'
import TextInput from './Text.vue'
import ComboInput from './Combo.vue'
import SwitchInput from './Switch.vue'
import DateInput from './Date.vue'
import Vue from 'vue'
import { InputInterface } from '../interface'
export default Vue.extend({
    components:{
        SelectInput ,
        ComboInput,
        SwitchInput,
        DateInput,
        TextInput
    },
    props:{
        form:Form
    },
    methods:{
        validate():boolean{
            if(this.form.hasValidation == false){
                return true
            }
            for (let index = 0; index < this.form.inputs.length; index++) {
                const input = this.form.inputs[index];
                if(input.field.required == true && ( input.field.val == null ||input.field.val == "" || typeof input.field.val == 'undefined')){
                    return false
                }
                
            }
            return true
        },
        // this method will be code when any input in the form changed
        change(input:InputInterface) {
            this.form.valid = false
            let form =  this.form.state
            console.log('input')
            form[input.name as keyof typeof form] = input.val
            if(this.validate()){
                this.form.valid = true
                this.$emit('change' , input.val)
            }
        },
        submit(){
            this.form.valid = false
            if(this.validate()){
                this.form.valid = true
                this.$emit('submit')
            }
        }
    }
})
</script>