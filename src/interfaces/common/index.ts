import { ReactNode } from "react"

export interface IKeys {
    [key: string]: string
}
export enum Elang {
    fr = "fr",
    en = "en",
    ar = "ar",
}
export interface IPageProps {
    children: JSX.Element | null | undefined | ReactNode
}