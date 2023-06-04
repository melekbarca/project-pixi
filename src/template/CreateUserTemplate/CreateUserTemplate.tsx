import React, { useContext } from 'react'
import { IPublicTemplate } from '../../interfaces'
import PublicOrganism from '../../organism/PublicOrganism/PublicOrganism'
import { LangContext } from '../../providers/LangueProvider/LangueProvider'

export default function CreateUserTemplate({ form, onChange, onSubmit,title,...props}: IPublicTemplate) {
    const lang = useContext(LangContext)
    

    return (
        <PublicOrganism
            form={form}
            isRegister={true}
            onChange={onChange}
            onSubmit={onSubmit}
            title={lang.signup.title}
            getIsValidConfirmPassword={props.getIsValidConfirmPassword}
            getIsinValidConfirmPassword={props.getIsinValidConfirmPassword}
        />
    )
}
