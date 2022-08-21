
import Api from '@/utils/axios/Api';
const Http = Api.getInstance();
export const Me = () => {
    return new Promise((resolve) => {
        Http.get(`user`)
        .then((res:any) => {
            resolve(res)
        })
    })
}

export const Login = (form:Object) => {
    return new Promise((resolve ,reject) => {
        Http.post(`login` , form)
        .then((res:any) => {
            resolve(res)
        }).catch((e) => {
            reject(e)
        })
    })
}