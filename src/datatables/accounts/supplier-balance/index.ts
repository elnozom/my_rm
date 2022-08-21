import DatatableIntetrface , { Header }  from '@/utils/datatable/datatableInterface'
import Datatable  from '@/utils/datatable/datatable'
import i18n from '@/i18n';
const headers:Header[] = [
    {value:'AccountCode', text: i18n.t('AccountCode').toString() , isPrice : false , isTotal:false , total:0},
    {value:'AccountName', text: i18n.t('AccountName').toString() , isPrice : false , isTotal:false , total:0},
    {value:'DBT', text: i18n.t('DBT').toString() , isPrice : true , isTotal:true , total:0},
    {value:'CRDT', text: i18n.t('CRDT').toString() , isPrice : true , isTotal:true , total:0},
    {value:'Buy', text: i18n.t('Buy').toString() , isPrice : true , isTotal:true , total:0},
    {value:'ReturnBuy', text: i18n.t('ReturnBuy').toString() , isPrice : true , isTotal:true , total:0},
    {value:'Discount', text: i18n.t('Discount').toString() , isPrice : true , isTotal:true , total:0},
    {value:'NetBuy', text: i18n.t('NetBuy').toString() , isPrice : true , isTotal:true , total:0},
    {value:'Paid', text: i18n.t('Paid').toString() , isPrice : true , isTotal:true , total:0},
    {value:'CHEQUE', text: i18n.t('CHEQUE').toString() , isPrice : true , isTotal:true , total:0},
    {value:'CHQUnderCollec', text: i18n.t('CHQUnderCollec').toString() , isPrice : true , isTotal:true , total:0},
    {value:'BalanceDebit', text: i18n.t('BalanceDebit').toString() , isPrice : true , isTotal:true , total:0},
    {value:'BalanceCredit', text: i18n.t('BalanceCredit').toString() , isPrice : true , isTotal:true , total:0}
]
const url = "supplier-balance"
const params:DatatableIntetrface = {
  title : "supplier_balance",
  description:"supplier_balance_desc",
  headers ,
  searchable:true,
  url,
  hasFooter:true,
}
const datatable = new Datatable(params)
export default datatable