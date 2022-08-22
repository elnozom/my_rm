import DatatableIntetrface , { Header }  from '@/utils/datatable/datatableInterface'
import Datatable  from '@/utils/datatable/datatable'
import filters from './filters'
import i18n from '@/i18n';
const headers:Header[] = [
    {value:'DocDay', text: i18n.t('DocDay').toString() , isPrice : false , isTotal:false , total:0},
    {value:'SessionNo', text: i18n.t('SessionNo').toString() , isPrice : false , isTotal:false , total:0},
    {value:'TotalCash', text: i18n.t('TotalCash').toString() , isPrice : true , isTotal:true , total:0},
    {value:'CashierMoney', text: i18n.t('CashierMoney').toString() , isPrice : true , isTotal:true , total:0},
    {value:'AmountIn', text: i18n.t('AmountIn').toString() , isPrice : true , isTotal:true , total:0},
    {value:'Supplier', text: i18n.t('Supplier').toString() , isPrice : true , isTotal:true , total:0},
    {value:'Expenses', text: i18n.t('Expenses').toString() , isPrice : true , isTotal:true , total:0},
    {value:'BankIn', text: i18n.t('BankIn').toString() , isPrice : true , isTotal:true , total:0},
    {value:'TotalVisa', text: i18n.t('TotalVisa').toString() , isPrice : true , isTotal:true , total:0},
    {value:'Net', text: i18n.t('Net').toString() , isPrice : true , isTotal:true , total:0}
]
const url = "monthly-report"
const params:DatatableIntetrface = {
  title : "monthly-report",
  description:"monthly-report_desc",
  headers ,
  searchable:true,
  filters,
  url,
  hasFooter:true,
}
const datatable = new Datatable(params)
export default datatable