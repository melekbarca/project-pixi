import React, { useContext } from 'react'
import { ESizeInput, ETypesInput } from '@piximind/ds-p-23/lib/esn/Interfaces/Atoms/IAtomInput/IAtomInput'
import { Container, Col, Row, Input, Button, Text, TextType } from '@piximind/ds-p-23'
import { Link, } from 'react-router-dom'
import { CommonFunction } from '../../common/Function/Function'
import { IPulicOragnism } from '../../interfaces'
import { LangContext } from '../../providers/LangueProvider/LangueProvider'
import image from '../../assets/login_image.jpg'

export default function PublicOrganism({ form, isLogin, isRegister, onChange, title, ...props }: IPulicOragnism) {
    const lang = useContext(LangContext)
 console.log(lang.signin.endTitle);
 
    const renderSubmitButtonText = (): string | undefined => {
        if (isLogin) return "login"
        if (isRegister) return lang.signup.signup
        if (props.isForgetPass) return "envoyer"
        if (props.isResetPass) return "reinstaller password"
    }

    const renderEndTitle = () => {
        let result = {} as { path: string, link: string, endTitle: string }
        if (isLogin) {
            result.endTitle = lang.signin.endTitle
            result.link = lang.signin.signUpLink
            result.path = '/signup'
        }
        if (isRegister) {
            result.endTitle = lang.signup.endTitle
            result.link = lang.signup.loginLink
            result.path = '/login'
        }
        if (props.isForgetPass || props.isResetPass) {
            result.endTitle = lang.signup.endTitle
            result.link = lang.signup.loginLink
            result.path = '/login'
        }


        return result

    }
    return (
        <Container style={{ padding: '0px' }}>
            <Row className='ds-hv-100'>
                <Col col={12} xs={12} md={12} xl={7} lg={6} >
                    <img src={image} alt="" width={"100%"} height={"100%"} />
                </Col>
                <Col col={12} xs={12} md={12} xl={5} lg={6} className={"ds-flex ds-center ds-pt-16"} >
                    <div className='wrapper ds-p-34  ds-borad-10 ds-box-shadow-white max-width-430'>
                        <Text
                            type={TextType['type-5']}
                            text={title}
                            className={"login__title text-weight-600 ds-relative ds-color-333"}
                        />
                        {isRegister &&
                            <Input
                                containerClassName='ds-hp-52 ds-my-35'
                                type={ETypesInput.text}
                                name={'firstName'}
                                placeholder={'firstName'}
                                {...CommonFunction.getInputProps(form?.firstName)}
                                className={"ds-w-100 ds-h-100 ds-p-24"}
                                inputSize={ESizeInput.small}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    onChange({
                                        key: "firstName",
                                        value: e.target.value
                                    })}
                            />
                        }

                        {isRegister &&
                            <Input
                                containerClassName='ds-hp-52 ds-my-35'
                                type={ETypesInput.text}
                                name={'lastName'}
                                placeholder={'lastName'}
                                {...CommonFunction.getInputProps(form?.lastName)}
                                className={"ds-w-100 ds-h-100 ds-p-24"}
                                inputSize={ESizeInput.small}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    onChange({
                                        key: "email",
                                        value: e.target.value
                                    })}
                            />
                        }
                        {(isLogin || isRegister || props.isForgetPass) &&
                            <Input
                                containerClassName='ds-hp-52 ds-my-35'
                                type={ETypesInput.text}
                                name={'email'}
                                placeholder={'Email'}
                                {...CommonFunction.getInputProps(form?.email)}
                                className={"ds-w-100 ds-h-100 ds-p-24"}
                                inputSize={ESizeInput.small}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    onChange({
                                        key: "email",
                                        value: e.target.value
                                    })}
                            />}
                        {(isLogin || isRegister || props.isResetPass) &&
                            <Input
                                containerClassName='ds-hp-52 ds-my-35'
                                type={ETypesInput.text}
                                name={'password'}
                                placeholder={'password'}
                                {...CommonFunction.getInputProps(form?.password)}
                                className={"ds-w-100 ds-h-100 ds-p-24"}
                                inputSize={ESizeInput.small}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    onChange({
                                        key: "password",
                                        value: e.target.value
                                    })}
                                isPassword
                            />
                        }
                        {(isRegister || props.isResetPass) && !isLogin &&
                            <Input
                                containerClassName='ds-hp-52 ds-my-35'
                                type={ETypesInput.text}
                                name={'confirmPassword'}
                                placeholder={'ConfirmPassword'}
                                {...CommonFunction.getInputProps(form?.confirmPassword)}
                                className={"ds-w-100 ds-h-100 ds-p-24"}
                                inputSize={ESizeInput.small}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    onChange({
                                        key: "confirmPassword",
                                        value: e.target.value
                                    })}
                                 isValid={props.getIsValidConfirmPassword}
                                 isInvalid={props.getIsinValidConfirmPassword}
                                 error={props.getIsinValidConfirmPassword?"password does not match":form?.confirmPassword.errorMessage}
                                isPassword
                            />}

                        {props.isResetPass &&
                            <Input
                                containerClassName='ds-hp-52 ds-my-35'
                                type={ETypesInput.text}
                                name={'newPassword'}
                                placeholder={'NewPassword'}
                                {...CommonFunction.getInputProps(form?.newPassword)}
                                className={"ds-w-100 ds-h-100 ds-p-24"}
                                inputSize={ESizeInput.small}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    onChange({
                                        key: "newPassword",
                                        value: e.target.value
                                    })}
                                isPassword    
                            />
                        }
                        <div className='ds-hp-52 ds-my-35'>
                            <Button
                                text={renderSubmitButtonText()}
                                className={"ds-text-size-20 font-weight-400 ds-p-24 ds-w-100 "}
                                onClick={props.onSubmit}
                            />
                        </div>
                        <div className='ds-w-100 ds-flex'>
                            <Text
                                type={TextType['body-2']}
                                text={renderEndTitle().endTitle}
                                className={"text-weight-600  ds-color-333 ds-ml-12"}
                            />
                            <Link to={renderEndTitle().path} className='ds-decorator-none ds-text-line-20 text-weight-600 ds-text-blue ds-text-size-14 ds-my-14 ds-ml-4'>
                                {renderEndTitle().link}
                            </Link>
                            {isLogin &&
                                <>
                                    <Text
                                        type={TextType['body-2']}
                                        text={"vous avez oublié votre mot de passe ?"}
                                        className={"text-weight-600  ds-color-333 ds-ml-12"}
                                    />
                                    <Link to={"/forget"} className='ds-decorator-none ds-text-line-20 text-weight-600 ds-text-blue ds-text-size-14 ds-my-14 ds-ml-4'>
                                        forget
                                    </Link>
                                </>}

                        </div>

                    </div>

                </Col>


            </Row>
        </Container>
    )
}
