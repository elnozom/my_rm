import {  groupsHierarchyResponse} from '@/models/group';
import { mainGroupResponse , subGroupResponse , productResponse } from '@/models/groupCodeModel';
import Api from '@/utils/axios/Api';
const Http = Api.getInstance();


export const ListHierarchy = () :Promise<groupsHierarchyResponse[]> => {
    return new Promise((resolve, reject) => {
        Http.get(`group/hierarchy?lang=${localStorage.getItem("locale")}`)
        .then((d:any) => {
            resolve(d)
        }).catch((e:any) => {
            reject(e)
        })
    })
}


export const ListMainGroups = () :Promise<mainGroupResponse[]> => {
    return new Promise((resolve, reject) => {
        Http.get(`group`)
        .then((d:any) => {
            resolve(d)
        }).catch((e:any) => {
            reject(e)
        })
    })
}
export const ListProducts =  (main:number, sub:number) :Promise<productResponse[]> => {
    return new Promise((resolve, reject) => {
        Http.get(`item/${sub}/${main}`)
        .then((d:any) => {
            resolve(d)
        }).catch((e:any) => {
            reject(e)
        })
    })
}

export const ListSubGroups = (id:number) :Promise<subGroupResponse[]> => {
    return new Promise((resolve, reject) => {
        Http.get(`group/${id}`)
        .then((d:any) => {
            resolve(d)
        }).catch((e:any) => {
            reject(e)
        })
    })
}



export const UpdateImage = (payload : object) :Promise<boolean> => {
    return new Promise((resolve, reject) => {
        Http.put(`item/image` , payload)
        .then((d:any) => {
            resolve(d)
        }).catch((e:any) => {
            reject(e)
        })
    })
}