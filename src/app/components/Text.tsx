import { Group, Rect, Text as KonvaText, Transformer } from "react-konva"
import { COLOR_1 } from "../utils/constants"
import { useAppContext } from "../states/AppContext"
import Konva from "konva"
import { useEffect, useRef, useState, ChangeEvent } from "react"
import { ComponentInfo, ComponentLocation, ComponentSchema, DEFAULT_POSITION, DEFAULT_SIZE, ParagraphSchema, getOrDefault } from "../models/pdf-jsonschema"

import { 
    Text,
    TextField,
    IconButton,
    TextArea
} from '@radix-ui/themes';
import { DialogHelper } from "./DialogHelper"
import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { ToolType } from "../models/tool.model"

type NxTextProps = {
    data: ParagraphSchema
    draggable: boolean
    select?: boolean
    onUpdate: (update: ComponentInfo) => void
    color: string,
    location: ComponentLocation
}
// crypto.randomUUID()
export const NxText = ({
    data,
    draggable,
    select,
    onUpdate,
    color,
    location
}: NxTextProps) => {
    const shapeRef = useRef<Konva.Group>(null)
    const transformRef = useRef<Konva.Transformer>(null)
    const [transform, setTransform] = useState(false)
    const { setComponent, tool } = useAppContext()
    const size = getOrDefault(DEFAULT_SIZE, data.size)
    const position = getOrDefault(DEFAULT_POSITION, data.position)

    const onTransformShape = () => {
        // we need to attach transformer manually
        if (transformRef.current !== null && shapeRef.current !== null) {
            transformRef.current.nodes([shapeRef.current]);
            transformRef.current.getLayer()?.batchDraw();
        }
    }

    const onClick = (ev: Konva.KonvaEventObject<MouseEvent | Event>) => {
        if (tool === ToolType.MoveCursor) {
            setComponent({
                data,
                location
            })
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
                    data: {
                        ...data,
                        position: {
                            x: parseFloat(e.target.x().toFixed(2)),
                            y: parseFloat(e.target.y().toFixed(2)),
                        }
                    }, 
                    location
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
                        data: {
                            ...data,
                            position: {
                                x: parseFloat(node.x().toFixed(2)),
                                y: parseFloat(node.y().toFixed(2)),
                            },
                            size: {
                                // set minimal value
                                width: parseFloat(Math.max(5, node.width() * scaleX).toFixed(2)),
                                height: parseFloat(Math.max(node.height() * scaleY).toFixed(2)),
                            }
                        },
                        location
                    });
                }
            }}>
            <Rect
                stroke={COLOR_1}
                fill={color}
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

type NxTextPropertyPanel = {
    data: ParagraphSchema,
    onUpdate: (component: ComponentSchema) => void
}

export const NxTextPropertyPanel = ({
    data,
    onUpdate
}: NxTextPropertyPanel) => {
    const [value, setValue] = useState<string>(data.value)
    const [valueStatic, setValueStatic] = useState<string>(data.value)

    const onUpdateValue = (ev: ChangeEvent<HTMLTextAreaElement>) => {
        const current = ev.target.value
        setValue(current)
    }
    const onConfirm = () => {
        onUpdate({
            ...data,
            value
        })
        setValueStatic(value)
    }
    return (<>
        <Text size="1" mb="2" weight="bold">Text</Text>
        <TextField.Root mb="1" size="1">
            <TextField.Input readOnly value={valueStatic} />
            <TextField.Slot>
                <DialogHelper
                title='Update data'
                trigger={
                    <IconButton size="1" variant="ghost">
                        <DotsHorizontalIcon />
                    </IconButton>
                }
                onConfirm={onConfirm}>
                    <Text size="1" mb="2" weight="bold">Value</Text>
                    <TextArea 
                        variant="soft" 
                        onChange={onUpdateValue}
                        rows={5} 
                        value={value}/>
                </DialogHelper>
            </TextField.Slot>
        </TextField.Root>
    </>)
}