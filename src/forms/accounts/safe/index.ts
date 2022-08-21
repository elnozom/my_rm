import { convertToRequred , storeInput, accountInput , amountInput , transactionType} from '@/utils/form/inputs/InputStore'
import Input from '@/utils/form/inputs/Input';
import Api from '@/utils/axios/Api';

const Http = Api.getInstance();

let safe = {...accountInput}
safe.url = 'get-account?type=5'
safe.label = 'safe'
safe.name = "safe"
safe.icon = 'mdi-safe-square-outline'
let acc = {...accountInput}
acc.url = 'get-account?type=1'
export const inputs:Input[] = [
    new Input(convertToRequred(transactionType)),
    new Input(convertToRequred(safe)),
    new Input(convertToRequred(acc)),
    new Input(convertToRequred(storeInput)),
    new Input(convertToRequred(amountInput))
]

export const submit:Function = () => {
    
    // Http.pos('pay' , )
}

// const cashtrayFilter = new Form(inputs , submit)

// export default cashtrayFilter