import { Header } from '@/utils/datatable/datatableInterface';
import DatatableIntetrface from '@/utils/datatable/datatableInterface'
import Datatable  from '@/utils/datatable/datatable'
import filters from './filter';
import i18n from '@/i18n'

const headers:Header[] = [
  {value:'EmpCode', text: i18n.t('EmpCode').toString() , isPrice : false , isTotal:false , total:0},
  {value:'EmpName', text: i18n.t('EmpName').toString() , isPrice : false , isTotal:false , total:0},
  {value:'Orders', text: i18n.t('Orders').toString() , isPrice : false , isTotal:false , total:0},
  {value:'ROrders', text: i18n.t('ROrders').toString() , isPrice : false , isTotal:false , total:0},
  {value:'Amount', text: i18n.t('Amount').toString() , isPrice : true , isTotal:true , total:0},
  {value:'RAmount', text: i18n.t('RAmount').toString() , isPrice : true , isTotal:true , total:0},
]


const url = "get-emp-totals"

const params:DatatableIntetrface = {
    title : "driver_totals",
    headers ,
    description:"driver_totals_desc",
    filters,
    url,
    hasFooter:true,
}
const datatable = new Datatable(params)
export default datatable