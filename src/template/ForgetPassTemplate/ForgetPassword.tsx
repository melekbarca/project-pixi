import React from 'react'
import { IPublicTemplate } from '../../interfaces'
import PublicOrganism from '../../organism/PublicOrganism/PublicOrganism'

export default function ForgetPassword({form,onChange,onSubmit}:IPublicTemplate) {
  return (
    <div>
        <PublicOrganism
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
            title={"mot de passe oublié?"}
            isForgetPass={true}
        />
    </div>
  )
}
