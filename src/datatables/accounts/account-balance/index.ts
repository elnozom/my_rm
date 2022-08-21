import i18n from '@/i18n';
import { Header } from '@/utils/datatable/datatableInterface';
import DatatableIntetrface from '@/utils/datatable/datatableInterface'
import Datatable  from '@/utils/datatable/datatable'
import filters from './filter';
const headers:Header[] = [
  {value:'DocNo', text: i18n.t('DocNo').toString() , isPrice : false , isTotal:false , total:0},
  {value:'DocDate', text: i18n.t('DocDate').toString() , isPrice : false , isTotal:false , total:0},
  {value:'AccMoveName', text: i18n.t('AccMoveName').toString() , isPrice : false , isTotal:false , total:0},
  {value:'Dbt', text: i18n.t('Dbt').toString() , isPrice : true , isTotal:true , total:0},
  {value:'Crdt', text: i18n.t('Crdt').toString() , isPrice : true , isTotal:true , total:0},
  {value:'RaseedCrdt', text: i18n.t('RaseedCrdt').toString() , isPrice : true , isTotal:true , total:0},
  {value:'RaseedDbt', text: i18n.t('RaseedDbt').toString() , isPrice : true , isTotal:true , total:0}
]

const url = "get-account-balance"

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