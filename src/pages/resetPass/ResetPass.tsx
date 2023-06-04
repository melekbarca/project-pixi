import { EListFunction, useForm } from '@piximind/custom-hook'
import React from 'react'
import ResetPassword from '../../template/ResetPassword/ResetPassword'

export default function ResetPass() {

    const { state: form, onChange, onValidForm, isFormValid } = useForm({
        isRealTimeValidation: true,
        data: [{
            value: "",
            key: "password",
            rules: [{ priority: 1, function: EListFunction.isNotEmpty, messageError: "this field is necessary" },
            { priority: 2, function: EListFunction.hasNumber, messageError: "password must include at least one number" },
            { priority: 3, function: EListFunction.hasUperCase, messageError: "password must include at least one upperCase" },
            { priority: 4, function: EListFunction.hasLowerCase, messageError: "password must include at least one LowerCase" }

            ]

        },
        {
            value: "",
            key: "confirmPassword",
            rules: [{ priority: 1, function: EListFunction.isNotEmpty, messageError: "this field is necessary" },
            { priority: 2, function: EListFunction.hasNumber, messageError: "password must include at least one number" },
            { priority: 3, function: EListFunction.hasUperCase, messageError: "password must include at least one upperCase" },
            { priority: 4, function: EListFunction.hasLowerCase, messageError: "password must include at least one LowerCase" }

            ]

        },
        {
            value: "",
            key: "newPassword",
            rules: [{ priority: 1, function: EListFunction.isNotEmpty, messageError: "this field is necessary" },
            { priority: 2, function: EListFunction.hasNumber, messageError: "password must include at least one number" },
            { priority: 3, function: EListFunction.hasUperCase, messageError: "password must include at least one upperCase" },
            { priority: 4, function: EListFunction.hasLowerCase, messageError: "password must include at least one LowerCase" }

            ]

        }
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
        <div>
            <ResetPassword
                form={form}
                onChange={onChange}
                onSubmit={onSubmit}
                getIsValidConfirmPassword={getIsValidConfirmPassword()}
                getIsinValidConfirmPassword={getIsinValidConfirmPassword()}
            />
        </div>
    )
}
