import { Header } from '@/utils/datatable/datatableInterface';
import DatatableIntetrface from '@/utils/datatable/datatableInterface'
import Datatable  from '@/utils/datatable/datatable'
import filters from './filter';
import i18n from '@/i18n'
const headers:Header[] = [
  {value:'MonthNo', text: i18n.t('MonthNo').toString() , isPrice : false , isTotal:false , total:0},
  {value:'TotalOrder', text: i18n.t('TotalOrder').toString() , isPrice : false , isTotal:false , total:0},
  {value:'NoOfCashTry', text: i18n.t('NoOfCashTry').toString() , isPrice : false , isTotal:false , total:0},
  {value:'TotalCash', text: i18n.t('TotalCash').toString() , isPrice : true , isTotal:true , total:0},
  {value:'TVisa', text: i18n.t('TVisa').toString() , isPrice : true , isTotal:true , total:0},
  {value:'TVoid', text: i18n.t('TVoid').toString() , isPrice : true , isTotal:true , total:0},
  {value:'AverageCash', text: i18n.t('AverageCash').toString() , isPrice : true , isTotal:true , total:0},
  {value:'AvgBasket', text: i18n.t('AvgBasket').toString() , isPrice : true , isTotal:true , total:0},
]

const url = "cashtray"

const params:DatatableIntetrface = {
    title : "cashtray_report",
    headers ,
    description:"cashtray_desc",
    filters,
    url,
    hasFooter:true,
}
const datatable = new Datatable(params)
export default datatable