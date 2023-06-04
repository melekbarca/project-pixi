import { useForm } from '@piximind/custom-hook'
import { EListFunction } from '@piximind/custom-hook/lib/esn/interfaces'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setLogin } from '../../redux/Reducers'
import LoginTemplate from '../../template/LoginTemplate/LoginTemplate'

export default function Login() {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const { state:form, onChange, onValidForm, isFormValid } = useForm({
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
        dispatch(setLogin({user:{name:"melek"},accessToken:"kefnknel",refreshToken:"kenzkfker"}))
        navigate('/')
     
    }
    return (
        <LoginTemplate
            form={form}
            onSubmit={onSubmit}
            onChange={onChange} 
        />
    )
}
