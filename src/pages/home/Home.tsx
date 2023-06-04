import React, { useContext, useState } from 'react'
import { Button, Col, Container, Row, TypeButton } from '@piximind/ds-p-23'
import { useDispatch, useSelector } from 'react-redux'
import { setLang } from '../../redux/Reducers'
import { Elang, RootState } from '../../interfaces'
import { LangContext } from '../../providers/LangueProvider/LangueProvider'

export default function Home() {
    console.log("mm");
    
    const [showLangue, setShowLangue] = useState(false)
    const lang = useContext(LangContext)
    const dispatch = useDispatch()
    let languageList = ['fr', 'en', 'ar']

    return (
        <Container>
            <Row>
                <Col col={12} xs={12} md={12} xl={7} lg={6}>
                    <div style={{ width: "90px", display: "flex", flexDirection: "column" }}>
                        <Button style={{ width: "100%", marginBottom: "8px" }} onClick={() => { setShowLangue(!showLangue) }} text={"click"} />
                        {showLangue &&
                            languageList.map((language, index) => (
                                <div key={index} style={{ width: "100%", height: "40px", border: "1px solid black", textAlign: "center", marginBottom: "8px" }} onClick={() => { dispatch(setLang({ lang: language })) }}>
                                    {language}
                                </div>
                            ))}
                    </div>
                    <div>{lang.home.title}</div>
                </Col>
                <Col col={12} xs={12} md={12} xl={2} lg={6}>
                    lmklmklmklmlkl
                </Col>
            </Row>
        </Container >


    )
}
