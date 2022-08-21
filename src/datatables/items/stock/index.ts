import { Header } from '@/utils/datatable/datatableInterface';
import DatatableIntetrface from '@/utils/datatable/datatableInterface'
import Datatable  from '@/utils/datatable/datatable'
import filters from './filter';
import i18n from '@/i18n'

const headers:Header[] = [
  {value:'ItemCode', text: i18n.t('ItemCode').toString() , isPrice : false , isTotal:false , total:0},
  {value:'ItemName', text: i18n.t('ItemName').toString() , isPrice : false , isTotal:false , total:0},
  {value:'Raseed', text: i18n.t('Raseed').toString() , isPrice : false , isTotal:false , total:0}
]

const url = "stock"

const params:DatatableIntetrface = {
    title : "stock",
    headers ,
    description:"stock_desc",
    filters,
    searchable:true,
    url,
    hasFooter:false,
}
const datatable = new Datatable(params)
export default datatable