import { Header } from '@/utils/datatable/datatableInterface';
import DatatableIntetrface from '@/utils/datatable/datatableInterface'
import Datatable  from '@/utils/datatable/datatable'
import filters from './filter';
import i18n from '@/i18n';
const headers:Header[] = [
  {value:'DocDate', text:i18n.t('DocDate').toString() , isPrice : false , isTotal:false , total:0},
  {value:'Supplier', text:i18n.t('supplier').toString() , isPrice : false , isTotal:false , total:0},
  {value:'Income', text:i18n.t('Income').toString() , isPrice : true , isTotal:true , total:0},
  {value:'Expensis', text:i18n.t('Expensis').toString() , isPrice : true , isTotal:true , total:0},
  {value:'Others', text:i18n.t('Others').toString() , isPrice : true , isTotal:true , total:0},
  {value:'Bankin', text:i18n.t('Bankin').toString() , isPrice : true , isTotal:true , total:0},
  {value:'Cheqin', text:i18n.t('Cheqin').toString() , isPrice : true , isTotal:true , total:0},
  {value:'Cheqout', text:i18n.t('Cheqout').toString() , isPrice : true , isTotal:true , total:0},
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