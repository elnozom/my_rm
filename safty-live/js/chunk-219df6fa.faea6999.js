(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-219df6fa"],{"32de":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("datatable",{attrs:{table:t.data}})},i=[],o=a("2b0e"),l=(a("d3b7"),a("25f0"),a("d6a2")),c=a("35f6"),r=a("ae4f"),u=a("370f"),s=[new u["a"](Object(r["d"])(r["h"])),new u["a"](r["j"])],d=function(){console.log("submitted")},m=new c["a"](s,d),f=m,p=a("88c3"),h=[{value:"ItemName",text:p["a"].t("ItemName").toString(),isPrice:!1,isTotal:!1,total:0},{value:"TotalQnt",text:p["a"].t("TotalQnt").toString(),isPrice:!1,isTotal:!1,total:0},{value:"TotalAmount",text:p["a"].t("TotalAmount").toString(),isPrice:!0,isTotal:!0,total:0},{value:"Profit",text:p["a"].t("Profit").toString(),isPrice:!0,isTotal:!0,total:0},{value:"Disc",text:p["a"].t("Disc").toString(),isPrice:!0,isTotal:!0,total:0}],b="top",y={title:"top_sales",headers:h,description:"top_sales_desc",filters:f,url:b,hasFooter:!0},v=new l["a"](y),g=v,x=a("7992"),_=o["a"].extend({name:"pos-cashtray",components:{datatable:x["a"]},data:function(){return{data:g}}}),k=_,w=a("2877"),T=Object(w["a"])(k,n,i,!1,null,null,null);e["default"]=T.exports},"370f":function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var n=a("d4ec"),i=a("bee2"),o=(a("d3b7"),a("28f3")),l=a("032a"),c=l["a"].getInstance(),r=function(){function t(e){Object(n["a"])(this,t),this.loading=!1,this.field=e,this._init()}return Object(i["a"])(t,[{key:"_init",value:function(){if("select"==this.field.type||"combo"==this.field.type){var t=this.field;"undefined"==typeof t.items&&(t.items=[]),t.initialFetch&&this.getInputItems()}}},{key:"getInputItems",value:function(){var t=this,e=this.field,a="".concat(e.url);return"undefined"!=typeof e.payload&&(a+="?".concat(Object(o["n"])(e.payload))),new Promise((function(){t.loading=!0,c.get(a).then((function(t){e.items=t}))}))}}]),t}()},ae4f:function(t,e,a){"use strict";a.d(e,"c",(function(){return o})),a.d(e,"n",(function(){return l})),a.d(e,"j",(function(){return c})),a.d(e,"g",(function(){return r})),a.d(e,"e",(function(){return u})),a.d(e,"i",(function(){return s})),a.d(e,"a",(function(){return d})),a.d(e,"k",(function(){return f})),a.d(e,"m",(function(){return p})),a.d(e,"b",(function(){return h})),a.d(e,"f",(function(){return b})),a.d(e,"h",(function(){return y})),a.d(e,"l",(function(){return v})),a.d(e,"d",(function(){return g}));var n=a("5530"),i=a("28f3"),o={name:"amount",label:"amount",type:"text",icon:"mdi-cash",cols:12,value:""},l={name:"year",cache:!0,loading:!1,text:"",initialFetch:!1,value:"",initial:i["f"],type:"select",items:Object(i["i"])(),icon:"mdi-clipboard-text-clock-outline",label:"year"},c={name:"store",cache:!1,loading:!1,text:"store_name",initialFetch:!0,clearable:!0,value:"store_code",type:"select",url:"cashtray/stores",icon:"mdi-store-settings-outline",label:"store"},r={name:"group",cache:!0,loading:!1,text:"GroupName",value:"GroupCode",initialFetch:!0,clearable:!0,type:"combo",items:[],url:"groups",icon:"mdi-format-list-group",label:"group"},u={name:"EmpCode",cache:!0,loading:!1,text:"EmpName",value:"EmpCode",initialFetch:!0,type:"combo",items:[],url:"get-drivers",icon:"mdi-motorbike",label:"drivers"},s={name:"payCheq",label:"payCheq",cols:6,type:"switch",val:!1},d={name:"AccSerial",cache:!1,loading:!1,text:"AccountName",value:"Serial",initialFetch:!0,type:"select",items:[],url:"get-account",icon:"mdi-account-outline",label:"account"},m=Object(n["a"])({},d);m.url+="?type=2",m.label="supplier";var f=m,p={name:"transactionType",cache:!0,loading:!1,text:"key",value:"value",initialFetch:!1,type:"select",items:[{key:"صرف",value:47},{key:"استلام",value:44}],icon:"mdi-credit-card-outline",label:"transaction_type"},h={name:"accType",cache:!0,loading:!1,text:"key",value:"value",initialFetch:!1,type:"select",items:i["a"],icon:"mdi-account-cog-outline",label:"account_type"},b={name:"fromDate",label:"from_date",limit:"date",min:"",max:i["c"],type:"date",value:""},y={name:"date",label:"date",min:"",max:i["c"],type:"date",limit:"month",value:""},v={name:"toDate",label:"to_date",min:"",limit:"date",max:i["c"],type:"date",value:""},g=function(t){var e=Object(n["a"])({},t);return e.required=!0,e}}}]);
//# sourceMappingURL=chunk-219df6fa.faea6999.js.map