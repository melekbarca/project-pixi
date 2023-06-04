import React, { useContext } from 'react'
import { IPublicTemplate } from '../../interfaces'
import PublicOrganism from '../../organism/PublicOrganism/PublicOrganism'
import { LangContext } from '../../providers/LangueProvider/LangueProvider'

export default function LoginTemplate({form,onChange,onSubmit,...props}: IPublicTemplate) {
    const lang=useContext(LangContext)
    
    return (
        <PublicOrganism
          form={form}
          isLogin={true}
          onChange={onChange}
          onSubmit={onSubmit}
          title={lang.signin.title}
        />
    )
}
