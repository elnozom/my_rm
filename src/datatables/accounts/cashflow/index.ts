import { Header } from '@/utils/datatable/datatableInterface';
import DatatableIntetrface from '@/utils/datatable/datatableInterface'
import Datatable  from '@/utils/datatable/datatable'
import filters from './filter';
import i18n from '@/i18n';
const headers:Header[] = [
  {value:'DocDate', text:i18n.t('DocDate').toString() , isPrice : false , isTotal:false , total:0},
  {value:'Customer', text:i18n.t('Customer').toString() , isPrice : true , isTotal:true , total:0},
  {value:'OtherIn', text:i18n.t('OtherIn').toString() , isPrice : true , isTotal:true , total:0},
  {value:'FromBank', text:i18n.t('FromBank').toString() , isPrice : true , isTotal:true , total:0},
  {value:'Supplier', text:i18n.t('Supplier').toString() , isPrice : true , isTotal:true , total:0},
  {value:'Expenses', text:i18n.t('Expenses').toString() , isPrice : true , isTotal:true , total:0},
  {value:'OtherOut', text:i18n.t('OtherOut').toString() , isPrice : true , isTotal:true , total:0},
  {value:'ToBank', text:i18n.t('ToBank').toString() , isPrice : true , isTotal:true , total:0},
  {value:'TotalDebit', text:i18n.t('TotalDebit').toString() , isPrice : true , isTotal:true , total:0},
  {value:'TotalCredit', text:i18n.t('TotalCredit').toString() , isPrice : true , isTotal:true , total:0},
]
const url = "cash-flow"
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