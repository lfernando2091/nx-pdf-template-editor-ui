import { Group, Rect, Text as KonvaText, Transformer } from "react-konva"
import { COLOR_1, COLOR_2 } from "../utils/constants"
import { useAppContext } from "../states/AppContext"
import Konva from "konva"
import { useEffect, useRef, useState } from "react"
import { ComponentLocation, ComponentSchema, DEFAULT_POSITION, DEFAULT_SIZE, ParagraphSchema, getOrDefault } from "../models/pdf-jsonschema"
import { ToolType } from "../section/ToolsPanel"

type NxTextProps = {
    data: ParagraphSchema
    draggable: boolean
    select?: boolean
    onUpdate: (update: ComponentSchema) => void
}
// crypto.randomUUID()
export const NxText = ({
    data,
    draggable,
    select,
    onUpdate
}: NxTextProps) => {
    const shapeRef = useRef<Konva.Group>(null)
    const transformRef = useRef<Konva.Transformer>(null)
    const [transform, setTransform] = useState(false)
    const { setComponent, template, setTemplate, tool } = useAppContext()
    const [size, setSize] = useState(getOrDefault(DEFAULT_SIZE, data.size))
    const [position, setPosition] = useState(getOrDefault(DEFAULT_POSITION, data.position))

    const onTransformShape = () => {
        // we need to attach transformer manually
        if (transformRef.current !== null && shapeRef.current !== null) {
            transformRef.current.nodes([shapeRef.current]);
            transformRef.current.getLayer()?.batchDraw();
        }
    }

    const onClick = (ev: Konva.KonvaEventObject<MouseEvent | Event>) => {
        if (tool === ToolType.MoveCursor) {
            setComponent(data)
            ev.cancelBubble = true
        }
    }

    const onDoubleClickEvent = (_ev: Konva.KonvaEventObject<MouseEvent | Event>) => {
        if (tool === ToolType.MoveCursor) {
            setTransform(!transform)
        }
    }

    useEffect(() => {
        if (!select) {
            setTransform(false)
        }
    }, [select]);

    useEffect(() => {
        if (transform && select) {
            onTransformShape()
        }
    }, [transform, select]);

    useEffect(() => {
        setSize(getOrDefault(DEFAULT_SIZE, data.size))
        setPosition(getOrDefault(DEFAULT_POSITION, data.position))
    }, [data]);

    return (<>
        <Group
            ref={shapeRef}
            id={data.id}
            x={position.x}
            y={position.y}
            width={size.width}
            height={size.height}
            onMouseDown={onClick}
            onTap={onClick}
            onDblClick={onDoubleClickEvent}
            onDblTap={onDoubleClickEvent}
            draggable={draggable}
            onDragEnd={(e) => {
                onUpdate({
                    ...data,
                    position: {
                        x: e.target.x(),
                        y: e.target.y(),
                    }
                })
            }}
            onTransformEnd={(e) => {
                // transformer is changing scale of the node
                // and NOT its width or height
                // but in the store we have only width and height
                // to match the data better we will reset scale on transform end
                const node = shapeRef.current;
                if (node !== null) {
                    const scaleX = node.scaleX();
                    const scaleY = node.scaleY();
                    // we will reset it back
                    node.scaleX(1);
                    node.scaleY(1);
                    onUpdate({
                        ...data,
                        position: {
                            x: node.x(),
                            y: node.y(),
                        },
                        size: {
                            // set minimal value
                            width: Math.max(5, node.width() * scaleX),
                            height: Math.max(node.height() * scaleY),
                        }
                    });
                }
            }}>
            <Rect
                stroke={COLOR_1}
                fill={COLOR_2}
                strokeWidth={select ? 1: 0}
                width={size.width}
                height={size.height}/>
            <KonvaText
                width={size.width}
                height={size.height}
                text={data.value}
                align={data.alignment}
                fill={COLOR_1}
            />
        </Group>
        {transform &&
            <Transformer
                ref={transformRef}
                keepRatio={false}
                flipEnabled={false}
                rotateEnabled={false}
                boundBoxFunc={(oldBox, newBox) => {
                    // limit resize
                    if (Math.abs(newBox.width) < 10 || Math.abs(newBox.height) < 10) {
                        return oldBox;
                    }
                    return newBox;
                }}>

            </Transformer>
        }
    </>)
}