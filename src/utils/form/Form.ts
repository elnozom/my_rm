import { FormInterface } from './interface';
import Input from './inputs/Input';

export default class Form  implements FormInterface {
    inputs: Input[]
    loading:boolean = false
    public state:Object = {} as any
    valid:boolean = true
    hasValidation:boolean = false
    submit:Function
    constructor(inputs: Input[] , submit:Function){
        this.inputs = inputs
        this.submit = submit
        this.initInputs()
    }

    // this function responsible for creating object of all inputs with key value to use it in submit or whatever
    // and if the input is select or combobox and needs to get the items from the server we get this from here too
    public initInputs(){
        let state = {} as any
        this.inputs.forEach((input:Input) => {
            if(input.field.required){
                this.valid = false
                this.hasValidation = true
            }
            input.field.val = input.field.initial || ''
            state[input.field.name] = input.field.initial || ''
        })
        this.state = state
    }
}