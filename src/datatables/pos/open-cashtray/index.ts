import { Header } from '@/utils/datatable/datatableInterface';
import DatatableIntetrface from '@/utils/datatable/datatableInterface'
import Datatable  from '@/utils/datatable/datatable'
import i18n from '@/i18n'
import filters from './filter'
const headers:Header[] = [
  {value:'EmpCode', text: i18n.t('EmpCode').toString() , isPrice : false , isTotal:false , total:0},
  {value:'StoreName', text: i18n.t('StoreName').toString() , isPrice : false , isTotal:false , total:0},
  {value:'OpenDate', text: i18n.t('OpenDate').toString() , isPrice : false , isTotal:false , total:0},
  {value:'CompouterName', text: i18n.t('CompouterName').toString() , isPrice : false , isTotal:false , total:0},
  {value:'TotalOrder', text: i18n.t('TotalOrder').toString() , isPrice : false , isTotal:false , total:0},
  {value:'StartCash', text: i18n.t('StartCash').toString() , isPrice : true , isTotal:true , total:0},
  {value:'TotalCash', text: i18n.t('TotalCash').toString() , isPrice : true , isTotal:true , total:0},
  {value:'TotalVisa', text: i18n.t('TotalVisa').toString() , isPrice : true , isTotal:true , total:0},
]

const url = "cashtray/open"

const params:DatatableIntetrface = {
    title : "open_cashtray",
    filters,
    headers ,
    description:"ope_cashtray_desc",
    url,
    hasFooter:true,
}
const datatable = new Datatable(params)
export default datatable