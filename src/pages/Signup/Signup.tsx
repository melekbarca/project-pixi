import { EListFunction, useForm } from '@piximind/custom-hook'
import React from 'react'
import CreateUserTemplate from '../../template/CreateUserTemplate/CreateUserTemplate'

export default function Signup() {
    const { state: form, onChange, onValidForm, isFormValid } = useForm({
        isRealTimeValidation: true,
        data: [{
            value: "",
            key: "password",
            rules: [{ priority: 1, function: EListFunction.isNotEmpty, messageError: "this field is necessary" },
            { priority: 2, function: EListFunction.hasNumber, messageError: "password must include at least one number" },
            { priority: 3, function: EListFunction.hasUperCase, messageError: "password must include at least one upperCase" },
            { priority: 4, function: EListFunction.hasLowerCase, messageError: "password must include at least one LowerCase" }

            ],
            isRealTimeValidation: true

        },
        {
            value: "",
            key: "confirmPassword",
            rules: [{ priority: 1, function: EListFunction.isNotEmpty, messageError: "this field is necessary" },
            { priority: 2, function: EListFunction.hasNumber, messageError: "password must include at least one number" },
            { priority: 3, function: EListFunction.hasUperCase, messageError: "password must include at least one upperCase" },
            { priority: 4, function: EListFunction.hasLowerCase, messageError: "password must include at least one LowerCase" }

            ],
            isRealTimeValidation: true

        },
        {
            value: "",
            key: "email",
            rules: [
                { priority: 1, function: EListFunction.isNotEmpty, messageError: "this field is necessary" },
                { priority: 2, function: EListFunction.isMail, messageError: "email not valid" },

            ],
            isRealTimeValidation: true

        },
        {
            value: "",
            key: "firstName",
            rules: [
                { priority: 1, function: EListFunction.isNotEmpty, messageError: "this field is necessary" },],
            isRealTimeValidation: true

        },
        {
            value: "",
            key: "lastName",
            rules: [
                { priority: 1, function: EListFunction.isNotEmpty, messageError: "this field is necessary" },],

            isRealTimeValidation: true

        },
        ]
    })
    const onSubmit = () => {
        onValidForm(form)
        console.log(form);

    }

    const getIsinValidConfirmPassword = () => {
        return form?.password.isInvalid || form?.confirmPassword.isInvalid || (form?.password.value !== form?.confirmPassword.value)
    }
    const getIsValidConfirmPassword = () => {
        return form?.password.isValid && form?.confirmPassword.isValid && (form?.password.value === form?.confirmPassword.value)
    }

    return (
        <CreateUserTemplate
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
            getIsValidConfirmPassword={getIsValidConfirmPassword()}
            getIsinValidConfirmPassword={getIsinValidConfirmPassword()}

        />
    )
}
