import styled from '@emotion/styled'
import { ReactNode } from 'react'

type PageBaseProps = {
    h: number
    w: number
}

type Size = {
    h: number
    w: number
}

export enum PageType {
    LETTER = "LETTER",
    LETTER_LANDSCAPE = "LETTER_LANDSCAPE",
    NOTE = "NOTE",
    LEGAL = "LEGAL",
    TABLOID = "TABLOID",
    EXECUTIVE = "EXECUTIVE",
    HALFLETTER = "HALFLETTER",
    A0 = "A0",
    A1 = "A1",
    A2 = "A2", 
    A3 = "A3",
    A4 = "A4"
}

type PageProps = {
    type: PageType
    children: ReactNode
}

export const PageBase = styled('div')<PageBaseProps>`
    height: ${props => props.h }px;
    width: ${props => props.w }px;
    border: 2px solid var(--gray-a5);
`

export const getSize = (type: PageType): Size => {
    switch(type) {
        case PageType.LETTER:
            return { h: 792, w: 612 }
        case PageType.LETTER_LANDSCAPE:
            return { h: 612, w: 792 }
        case PageType.HALFLETTER:
            return { h: 612, w: 396 }
        case PageType.NOTE:
            return { h: 720, w: 540 }
        case PageType.LEGAL:
            return { h: 1008, w: 612 }
        case PageType.TABLOID:
            return { h: 1224, w: 792 }
        case PageType.EXECUTIVE:
            return { h: 756, w: 522 }
        case PageType.A0:
            return { h: 3370, w: 2384 }
        case PageType.A1:
            return { h: 2384, w: 1684 }
        case PageType.A2:
            return { h: 1684, w: 1191 }
        case PageType.A3:
            return { h: 1191, w: 842 }
        case PageType.A4:
            return { h: 842, w: 595 }
        default:
            return { h: 842, w: 595 }
    } 
}

export const Page = ({ type, children }: PageProps) => {
    switch(type) {
        case PageType.LETTER:
            return <PageBase h={792} w={612}>{children}</PageBase>;
        case PageType.LETTER_LANDSCAPE:
            return <PageBase h={612} w={792}>{children}</PageBase>;
        case PageType.HALFLETTER:
            return <PageBase h={612} w={396}>{children}</PageBase>;
        case PageType.NOTE:
            return <PageBase h={720} w={540}>{children}</PageBase>;
        case PageType.LEGAL:
            return <PageBase h={1008} w={612}>{children}</PageBase>;
        case PageType.TABLOID:
            return <PageBase h={1224} w={792}>{children}</PageBase>;
        case PageType.EXECUTIVE:
            return <PageBase h={756} w={522}>{children}</PageBase>;
        case PageType.A0:
            return <PageBase h={3370} w={2384}>{children}</PageBase>;
        case PageType.A1:
            return <PageBase h={2384} w={1684}>{children}</PageBase>;
        case PageType.A2:
            return <PageBase h={1684} w={1191}>{children}</PageBase>;
        case PageType.A3:
            return <PageBase h={1191} w={842}>{children}</PageBase>;
        case PageType.A4:
            return <PageBase h={842} w={595}>{children}</PageBase>;
        default:
            return <PageBase h={842} w={595}>{children}</PageBase>;
    }
}