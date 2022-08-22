import Form from '../../../utils/form/Form';
import { convertToRequred, yearInput , monthDate} from '../../../utils/form/inputs/InputStore'
import Input from '@/utils/form/inputs/Input';

const inputs:Input[] = [
    // new Input(convertToRequred(yearInput)),
    new Input(convertToRequred(monthDate)),
]

const submit:Function = () => {
    console.log('submitted')
}

const cashtrayFilter = new Form(inputs , submit)

export default cashtrayFilter