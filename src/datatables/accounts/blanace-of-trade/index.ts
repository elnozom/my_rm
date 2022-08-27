import { Header } from '@/utils/datatable/datatableInterface';
import DatatableIntetrface from '@/utils/datatable/datatableInterface'
import Datatable  from '@/utils/datatable/datatable'
import filters from './filter';
import i18n from '@/i18n';
const headers:Header[] = [
  {value:'AccountCode', text: i18n.t('AccountCode').toString() , isPrice : false , isTotal:false , total:0},
  {value:'AccountName', text: i18n.t('AccountName').toString() , isPrice : false , isTotal:false , total:0},
  // {value:'AccNo', text: i18n.t('AccNo').toString() , isPrice : false , isTotal:false , total:0},
  {value:'BBC', text: i18n.t('BBC').toString() , isPrice : true , isTotal:true , total:0},
  {value:'BBD', text: i18n.t('BBD').toString() , isPrice : true , isTotal:true , total:0},
  {value:'BAC', text: i18n.t('BAC').toString() , isPrice : true , isTotal:true , total:0},
  {value:'BAD', text: i18n.t('BAD').toString() , isPrice : true , isTotal:true , total:0},
  {value:'Debit', text: i18n.t('Debit').toString() , isPrice : true , isTotal:true , total:0},
  {value:'Credit', text: i18n.t('Credit').toString() , isPrice : true , isTotal:true , total:0}
]

const url = "balance-of-trade"

const params:DatatableIntetrface = {
    title : "cash_flow",
    headers ,
    description:"cash_flow_desc",
    filters,
    url,
    hasFooter:true,
}
const datatable = new Datatable(params)
export default datatable