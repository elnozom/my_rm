import { serializeQuery } from '@/utils/helpers';

import { currency } from '@/utils/helpers'
import Api from '@/utils/axios/Api';

const Http = Api.getInstance();


export const getCashtrayData = (serial:number) => {
    return new Promise((resolve) => {
        Http.get(`cashtray/data/${serial}`)
        .then((res:any) => {
            resolve(res)
        })
    })
}

export const closeCashtray = (serial:number) => {
    return new Promise((resolve) => {
        Http.post(`cashtray/close/${serial}`)
        .then((res:any) => {
            resolve(res)
        })
    })
}

