
import Api from '@/utils/axios/Api';
const Http = Api.getInstance();
export const Upload = (payload:Object) => {
    return new Promise((resolve, reject) => {
        Http.post('upload' , payload , {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
          })
        .then((d:any) => {
            resolve(d)
        }).catch((e:any) => {
            reject(e)
        })
    })
}