import React from 'react'
import { IPublicTemplate } from '../../interfaces'
import PublicOrganism from '../../organism/PublicOrganism/PublicOrganism'

export default function ResetPassword({form,onChange,onSubmit,getIsValidConfirmPassword,getIsinValidConfirmPassword}:IPublicTemplate) {
  return (
    <div>
        <PublicOrganism
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
            title={"reistaller mot de passe"}
            isResetPass={true}
            getIsValidConfirmPassword={getIsValidConfirmPassword}
            getIsinValidConfirmPassword={getIsinValidConfirmPassword}

        />
    </div>
  )
}
