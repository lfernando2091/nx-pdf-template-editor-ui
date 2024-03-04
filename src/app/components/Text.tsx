import { Group, Rect, Text as KonvaText } from "react-konva"
import { COLOR_1, COLOR_2 } from "../utils/constants"
import { useAppContext } from "../states/AppContext"
import Konva from "konva"

type NxTextProps = {
    id: string
    text: string
    draggable: boolean
    w: number
    h: number
    align: string
    x: number
    y: number
    select?: boolean
}
// crypto.randomUUID()
export const NxText = ({
    id,
    text,
    draggable,
    w, h, align, x, y, select
}: NxTextProps) => {
    const { setComponentId } = useAppContext()

    const onClick = (ev: Konva.KonvaEventObject<MouseEvent | Event>) => {
        setComponentId(id)
        ev.cancelBubble = true
    }

    return (<>
        <Group
            x={x}
            y={y}
            onMouseDown={onClick}
            onTap={onClick}
            draggable={draggable}>
            <Rect
                stroke={COLOR_1}
                fill={COLOR_2}
                strokeWidth={select ? 1: 0}
                width={w}
                height={h}/>
            <KonvaText
                width={w}
                height={h}
                text={text}
                align={align}
                fill={COLOR_1}
            />
        </Group>
    </>)
}