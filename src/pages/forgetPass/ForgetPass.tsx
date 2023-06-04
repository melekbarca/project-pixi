import { EListFunction, useForm } from '@piximind/custom-hook'
import React from 'react'
import ForgetPassword from '../../template/ForgetPassTemplate/ForgetPassword'

export default function ForgetPass() {
    const { state:form, onChange, onValidForm, isFormValid } = useForm({
        isRealTimeValidation: true,
        data: [
        {
            value: "",
            key: "email",
            rules: [
                { priority: 1, function: EListFunction.isNotEmpty, messageError: "this field is necessary" },
                { priority: 2, function: EListFunction.isMail, messageError: "email not valid" },

            ],

        }
        ]
    })
    const onSubmit=()=>{
        onValidForm(form)
     console.log(form);
     
    }

    return (
        <div>
            <ForgetPassword
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
            />
        </div>
    )
}
