import { convertToRequred ,emailInput,passwordInput } from '@/utils/form/inputs/InputStore'
import Input from '@/utils/form/inputs/Input';
export const inputs:Input[] = [
    new Input(convertToRequred(emailInput)),
    new Input(convertToRequred(passwordInput)),
]

export const submit:Function = () => {
    
    // Http.pos('pay' , )
}

// const cashtrayFilter = new Form(inputs , submit)

// export default cashtrayFilter