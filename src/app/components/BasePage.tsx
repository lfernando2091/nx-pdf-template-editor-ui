import { ReactNode } from 'react'

export type Size = {
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