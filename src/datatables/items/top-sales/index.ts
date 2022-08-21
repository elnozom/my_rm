import { Header } from '@/utils/datatable/datatableInterface';
import DatatableIntetrface from '@/utils/datatable/datatableInterface'
import Datatable  from '@/utils/datatable/datatable'
import filters from './filter';
import i18n from '@/i18n'
const headers:Header[] = [
  {value:'ItemName', text: i18n.t('ItemName').toString() , isPrice : false , isTotal:false , total:0},
  {value:'TotalQnt', text: i18n.t('TotalQnt').toString() , isPrice : false , isTotal:false , total:0},
  {value:'TotalAmount', text: i18n.t('TotalAmount').toString() , isPrice : true , isTotal:true , total:0},
  {value:'Profit', text: i18n.t('Profit').toString() , isPrice : true , isTotal:true , total:0},
  {value:'Disc', text: i18n.t('Disc').toString() , isPrice : true , isTotal:true , total:0}
]

const url = "top"

const params:DatatableIntetrface = {
    title : "top_sales",
    headers ,
    description:"top_sales_desc",
    filters,
    url,
    hasFooter:true,
}
const datatable = new Datatable(params)
export default datatable