import Form from '@/utils/form/Form';
import { storeInput} from '@/utils/form/inputs/InputStore'
import Input from '@/utils/form/inputs/Input';

const inputs:Input[] = [
    new Input(storeInput)
]

const submit:Function = () => {
    console.log('submitted')
}

const cashtrayFilter = new Form(inputs , submit)

export default cashtrayFilter