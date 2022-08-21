<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" lg="4" md="6">
        <v-card>
          <v-card-text>

          <v-form ref="form" :valid="valid">
                <v-row>
                    <v-col cols="12" class="my-8">
                        <h2 class="app-title">تسجيل الدخول</h2>
                    </v-col>
                <v-col cols="12">
                    <p class="app-error" v-show="error">{{$t('login_error')}}</p>
                    <v-text-field
                    :label="$t('username')"
                    @keyup.enter="$refs.password.focus()"
                    v-model="form.username"
                    :rules="rules.username"
                    :error-messages="errors.username"
                    outlined
                    ></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-text-field
                    ref="password"
                    v-model="form.password"
                    :rules="rules.password"
                    :label="$t('password')"
                    type="password"
                    :error-messages="errors.password"
                    outlined
                    ></v-text-field>
                    
                </v-col>
                <v-col cols="12">
                    <v-select
                    ref="store"
                    item-text="name"
                    item-value="value"
                    @keyup.enter="valid ? login : ''"
                    v-model="form.store"
                    :label="$t('store')"
                    :items="stores"
                    outlined
                    ></v-select>
                    
                </v-col>
                <v-col cols="12" class="text-center">
                    <v-btn :disabled="!valid" :loading="loading" @click.prevent="login" class="app-btn">{{$t('login')}}</v-btn>
                </v-col>
                
                </v-row>
                </v-form>
          </v-card-text>
        </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { Me } from "@/repositores/user";
import { Login } from "@/repositores/user";
import {required} from "@/utils/validation"
export default Vue.extend({
  data() {
    return {
      loading: false,
      error:false,
      stores:[
       {name:'wave premium' , value: 0},
       {name:'wave' , value: 1},
       {name:'smile' , value: 2},
       {name:'aboali', value: 3}
      ],
      errors:[],
      rules :{
        username : [
            (value:string) => required(value) ,
        ],
        password : [
            (value:string) => required(value) ,
        ]
      },
      valid:true,
      form: {
        username: "",
        store:0,
        password: "",
      },
    };
  },

  methods: {
    login() {
       const valid = (this.$refs.form as Vue & { validate: () => boolean }).validate()
        if(valid){
            this.loading = true;
            Login(this.form)
              .then((res:any) => {
                this.loading = false;
                this.$store.commit("ui/snackBar", {
                  active: true,
                  text: "logged_in",
                });
                localStorage.setItem('token' , res['token'])
                this.$router.push({ name: "Home" });

              })
              .catch((e) => {
                this.loading = false;
                this.error = true;
              });
          }
        }
  },
  created() {
    if (localStorage.getItem("token")) {
      Me()
        .then((res: any) => {
          this.$store.commit("user/email", res["email"]);
          localStorage.setItem('token' , res['token'])
          this.$router.push({ name: "Home" });
        })
        .catch((e: any) => {
          localStorage.removeItem("token");
        });
    }
  },
});
</script>