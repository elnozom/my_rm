import { Header } from '@/utils/datatable/datatableInterface';
import DatatableIntetrface from '@/utils/datatable/datatableInterface'
import Datatable  from '@/utils/datatable/datatable'
import i18n from '@/i18n'
const headers:Header[] = [
  {value:'Serial', text: i18n.t('Serial').toString() , isPrice : false , isTotal:false , total:0},
  {value:'EmpCode', text: i18n.t('EmpCode').toString() , isPrice : false , isTotal:false , total:0},
  {value:'EmpName', text: i18n.t('EmpName').toString() , isPrice : false , isTotal:false , total:0},
  {value:'OpenDate', text: i18n.t('OpenDate').toString() , isPrice : false , isTotal:false , total:0},
  {value:'OpenTime', text: i18n.t('OpenTime').toString() , isPrice : false , isTotal:false , total:0},
  {value:'ComputerName', text: i18n.t('ComputerName').toString() , isPrice : false , isTotal:false , total:0},
  {value:'actions', text: i18n.t('actions').toString() , isPrice : false , isTotal:false , total:0},
]

const url = "cashtray/paused"

const params:DatatableIntetrface = {
    title : "pasused_cashtray",
    headers ,
    description:"pasused_cashtray_desc",
    url,
    hasFooter:false,
}
const datatable = new Datatable(params)
export default datatable