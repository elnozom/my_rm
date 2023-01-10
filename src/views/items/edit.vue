<template>
  <v-container>
    <v-card>
      <v-card-title>
        <h3>{{$t('edit_item_image')}}</h3>
      </v-card-title>
      <v-card-text>
        <v-form class="py-8" ref="form" v-model="valid" lazy-validation>
          <v-row>
            <v-col cols="12" md="6">
              <v-combobox
                v-model="form.mainGroup"
                :items="mainGroup.items"
                item-text="GroupName"
                outlined
                :rules="[required]"
                :loading="mainGroup.loading"
                @change="mainGroupChanged"
                label="المجموعة الرئيسية"
                required
              ></v-combobox>
            </v-col>
            <v-col cols="12" md="6">
              <v-combobox
                v-model="form.subGroup"
                :items="subGroup.items"
                item-text="GroupName"

                :loading="subGroup.loading"
                outlined
                :rules="[required]"
                @change="subGroupChanged"
                label="المجموعة الفرعية"
                required
              ></v-combobox>
            </v-col>
            <v-col cols="12" >
              <v-combobox
                v-model="form.product"
                :messages="[productHint]"
                :items="product.items"
                item-text="ItemName"
                clearable
                outlined
                :loading="product.loading"
      
                @change="productChanged"
                label="المنتج"
                required
              ></v-combobox>
            </v-col>
            <v-col cols="12">
              <v-file-input
                accept="image/*"
                @change="upload"
                :rules="[required]"
                v-model="file"
                :loading="imageLoading"
                :disabled="imageDisabled"
                label="الصورة"
                outlined
              ></v-file-input>
            </v-col>
            <v-col md="12">
              <v-btn color="app-btn" :disabled="!valid" :loading="loading" @click.prevent="submit"> تاكيد </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
import { ListMainGroups,UpdateImage, ListSubGroups , ListProducts } from "@/repositores/group";
import { Upload } from "@/repositores/file.ts";
import { required , removeBasePathFromImage} from "@/utils/helpers";
// import {openSnack} from '@/utils/snack/snack'
export default {
  data: () => ({
    path : '',
    loading : false,
    imageLoading: false,
    imageDisabled : true,
    file: null,
    mainGroup: {
      items: [],
      loading: false,
    },
    valid: false,
    subGroup: {
      items: [],
      loading: false,
    },
    productHint:"اذا قمت باختيار منتج سيتم تعديل الصورة الخاصة بالمنتج  اذا تركت هذا الحقل خالي سيتم تحديث صورة المجموعة الفرعية",
    imageHint:"",
    product: {
      items: [],
      loading: false,
    },
    form: {},
    image: null,
  }),
  created() {
    this.getMainGroups();
  },
  methods: {
    required,
    validate() {
      return this.$refs.form.validate();
    },
    productChanged(val) {
      console.log(val);
      
    },
    submit(){
      // UpdateImage()
      let isValid = this.validate()
      if(!isValid)  return
      this.loading = true
      const form = {
        mainGroupCode : this.form.mainGroup.GroupCode,
        subGroupCode : this.form.subGroup.GroupCode,
        productCode : typeof this.form.product == 'undefined' || this.form.product == null  ? 0 : this.form.product.ItemCode,
        image : this.form.image
      }
      UpdateImage(form).then(res => {
        this.reset()
        // openSnack("success" , "updated" , "success")
        this.loading = false
      }).catch(e => {
        console.log(e)
        this.reset()
        // openSnack("failed" , "update failed" , "failed")
        this.loading = false

      })
      
    },
    upload(value){
      if(file == null) return
      this.imageLoading = true
       let formData = new FormData();
        formData.append("file", this.file);
        Upload(formData).then((d) => {
          this.removeImage = false
          this.imageLoading = false
          const value = removeBasePathFromImage(d)
          this.form.image = value
        });
    },
    mainGroupChanged(val) {
      console.log(val);
      this.form.subGroup = null;
      this.form.product = null;
      this.getSubGroups();
    },
    subGroupChanged(val) {
      console.log(val);
      this.imageDisabled = false
      this.form.product = null;
      this.getProducts()
    },
    getMainGroups() {
      this.mainGroup.loading = true;
      ListMainGroups().then((res) => {
        this.mainGroup.items = res;
        this.mainGroup.loading = false;
      });
    },
    getSubGroups() {
      this.subGroup.loading = true;
      ListSubGroups(this.form.mainGroup.GroupCode).then((res) => {
        this.subGroup.items = res;
        this.subGroup.loading = false;
      });
    },
    getProducts() {
      this.product.loading = true;
      ListProducts(this.form.mainGroup.GroupCode , this.form.subGroup.GroupCode).then((res) => {
        this.product.items = res;
        this.product.loading = false;
      });
    },
    reset() {
      this.imageDisabled = true
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>