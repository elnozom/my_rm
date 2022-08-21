
export const required = (val:string , msg = 'هذا الحقل مطلوب') => !!val || msg
export const email = (val:string , msg:string = 'تاكد من البريد الاكتروني') => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(val) || msg