import { Header } from '@/utils/datatable/datatableInterface';
import DatatableIntetrface from '@/utils/datatable/datatableInterface'
import Datatable  from '@/utils/datatable/datatable'
import filters from './filter';
import i18n from '@/i18n'
const headers:Header[] = [
  {value:'ItemName', text:i18n.t('ItemName').toString() , isPrice : false , isTotal:false , total:0},
  {value:'ItemCode', text:i18n.t('ItemCode').toString() , isPrice : false , isTotal:false , total:0},
  {value:'LastBuyDate', text:i18n.t('LastBuyDate').toString() , isPrice : false , isTotal:false , total:0},
  {value:'LastSellDate', text:i18n.t('LastSellDate').toString() , isPrice : false , isTotal:false , total:0},
  {value:'GroupCode', text:i18n.t('GroupCode').toString() , isPrice : false , isTotal:false , total:0},
  {value:'ByWeight', text:i18n.t('ByWeight').toString() , isPrice : false , isTotal:false , total:0},
  {value:'MinorPerMajor', text:i18n.t('MinorPerMajor').toString() , isPrice : false , isTotal:false , total:0},
  {value:'BuyWhole', text:i18n.t('BuyWhole').toString() , isPrice : false , isTotal:false , total:0},
  {value:'RaseedPart', text:i18n.t('RaseedPart').toString() , isPrice : false , isTotal:false , total:0},
  {value:'RaseedWhole', text:i18n.t('RaseedWhole').toString() , isPrice : false , isTotal:false , total:0},
  {value:'BuyPart', text:i18n.t('BuyPart').toString() , isPrice : false , isTotal:false , total:0},
  {value:'SaleWhole', text:i18n.t('SaleWhole').toString() , isPrice : false , isTotal:false , total:0},
  {value:'SalePart', text:i18n.t('SalePart').toString() , isPrice : false , isTotal:false , total:0},
  {value:'TransOutWhole', text:i18n.t('TransOutWhole').toString() , isPrice : false , isTotal:false , total:0},
  {value:'TransOutPart', text:i18n.t('TransOutPart').toString() , isPrice : false , isTotal:false , total:0},
  {value:'TransInWhole', text:i18n.t('TransInWhole').toString() , isPrice : false , isTotal:false , total:0},
  {value:'TransInPart', text:i18n.t('TransInPart').toString() , isPrice : false , isTotal:false , total:0},
  {value:'IndusInWhole', text:i18n.t('IndusInWhole').toString() , isPrice : false , isTotal:false , total:0},
  {value:'IndusInPart', text:i18n.t('IndusInPart').toString() , isPrice : false , isTotal:false , total:0},
  {value:'IndusOutWhole', text:i18n.t('IndusOutWhole').toString() , isPrice : false , isTotal:false , total:0},
  {value:'IndusOutPart', text:i18n.t('IndusOutPart').toString() , isPrice : false , isTotal:false , total:0},
  {value:'RaseedbeforePart', text:i18n.t('RaseedbeforePart').toString() , isPrice : false , isTotal:false , total:0},
  {value:'RaseedbeforeWhole', text:i18n.t('RaseedbeforeWhole').toString() , isPrice : false , isTotal:false , total:0},
  {value:'CycleRate', text:i18n.t('CycleRate').toString() , isPrice : false , isTotal:false , total:0},
]
const url = "trans-cycle-acc"

const params:DatatableIntetrface = {
    title : "trans_cycle_acc",
    headers ,
    description:"trans_cycle_acc_desc",
    filters,
    url,
    hasFooter:false,
}
const datatable = new Datatable(params)
export default datatable