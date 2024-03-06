import { 
    Text,
    Flex,
    TextField,
    Callout
} from '@radix-ui/themes';
import { useAppContext } from '../states/AppContext';
import { ComponentInfo, ComponentLocation, ComponentSchema, DEFAULT_POSITION, DEFAULT_SIZE, ParagraphSchema, PositionSchema, SizeSchema, getOrDefault } from '../models/pdf-jsonschema';
import { InfoCircledIcon } from '@radix-ui/react-icons';
import { NxTextPropertyPanel } from '../components/Text';
import { useEffect, useState, ChangeEvent } from 'react';

type PropertiesProps = {
    component: ComponentInfo
    onUpdate: (newData: ComponentInfo) => void
}

const Properties = ({
    component,
    onUpdate
}: PropertiesProps) => {
    const [size, setSize] = useState<SizeSchema>(getOrDefault(DEFAULT_SIZE, component.data.size))
    const [position, setPosition] = useState<PositionSchema>(getOrDefault(DEFAULT_POSITION, component.data.position))
    const [height, setHeight] = useState<number>(size.height)
    const [width, setWidth] = useState<number>(size.width)
    const [x, setX] = useState<number>(position.x)
    const [y, setY] = useState<number>(position.y)
    useEffect(() => {
        setSize(getOrDefault(DEFAULT_SIZE, component.data.size))
        setPosition(getOrDefault(DEFAULT_POSITION, component.data.position))
    }, [component])

    useEffect(() => {
        setHeight(size.height)
        setWidth(size.width)
        setX(position.x)
        setY(position.y)
    }, [size, position])

    const onUpdateHeight = (ev: ChangeEvent<HTMLInputElement>) => {
        const current = Number(ev.target.value)
        const h = parseFloat(current.toFixed(2))
        const currentValue = component.data
        if (currentValue.size) {
            currentValue.size.height = h
        } else {
            currentValue.size = {
                height: h,
                width: width
            }
        }
        setHeight(h)
        onUpdate({
            ...component,
            data: {
                ...currentValue
            }
        })
    }

    const onUpdateWidth = (ev: ChangeEvent<HTMLInputElement>) => {
        const current = Number(ev.target.value)
        const w = parseFloat(current.toFixed(2))
        const currentValue = component.data
        if (currentValue.size) {
            currentValue.size.width = w
        } else {
            currentValue.size = {
                height: height,
                width: w
            }
        }
        setWidth(w)
        onUpdate({
            ...component,
            data: {
                ...currentValue
            }
        })
    }

    const onUpdateX = (ev: ChangeEvent<HTMLInputElement>) => {
        const current = Number(ev.target.value)
        const currentX = parseFloat(current.toFixed(2))
        const currentValue = component.data
        if (currentValue.position) {
            currentValue.position.x = currentX
        } else {
            currentValue.position = {
                x: currentX,
                y
            }
        }
        setX(currentX)
        onUpdate({
            ...component,
            data: {
                ...currentValue
            }
        })
    }

    const onUpdateY = (ev: ChangeEvent<HTMLInputElement>) => {
        const current = Number(ev.target.value)
        const currentY = parseFloat(current.toFixed(2))
        const currentValue = component.data
        if (currentValue.position) {
            currentValue.position.y = currentY
        } else {
            currentValue.position = {
                x: x,
                y: currentY
            }
        }
        setY(currentY)
        onUpdate({
            ...component,
            data: {
                ...currentValue
            }
        })
    }

    const onUpdateExtra = (newComponent: ComponentSchema) => {
        onUpdate({
            ...component,
            data: newComponent,
        })
    }       

    return (
        <>
            <Flex direction="column">
                <Text size="1" mb="2" weight="bold">Id</Text>
                <Text size="1" mb="2" weight="light">{component.data.id}</Text>
                <Text size="1" mb="2" weight="bold">Size</Text>
                <TextField.Root mb="1" size="1">
                    <TextField.Slot>H</TextField.Slot>
                    <TextField.Input 
                        type='number'
                        onChange={onUpdateHeight}
                        value={height} />
                </TextField.Root>
                <TextField.Root mb="2" size="1">
                    <TextField.Slot>W</TextField.Slot>
                    <TextField.Input 
                        type='number'
                        onChange={onUpdateWidth}
                        value={width} />
                </TextField.Root>
                <Text size="1" mb="2" weight="bold">Position</Text>
                <TextField.Root mb="1" size="1">
                    <TextField.Slot>X</TextField.Slot>
                    <TextField.Input 
                        type='number'
                        onChange={onUpdateX}
                        value={x} />
                </TextField.Root>
                <TextField.Root mb="2" size="1">
                    <TextField.Slot>Y</TextField.Slot>
                    <TextField.Input 
                        type='number'
                        onChange={onUpdateY}
                        value={y} />
                </TextField.Root>

                {component.data['@type'] === "P" &&
                    <>
                        <NxTextPropertyPanel 
                        onUpdate={onUpdateExtra}
                        data={component.data as ParagraphSchema}/>
                    </>
                }
            </Flex>
        </>
    )
}

export const PropertiesPanel = () => {
    const { component, template, setTemplate } = useAppContext()
    const onUpdate = (newData: ComponentInfo) => {
        const newTemplate = Object.assign({}, template)
        switch(newData.location) {
            case ComponentLocation.HEADER:
                newTemplate.content.header.content = newTemplate.content.header.content.map((e) => {
                    if (e.id === newData.data.id) {
                        return newData.data
                    }
                    return e
                })
                break
            case ComponentLocation.BODY:
                newTemplate.content.body.pages = newTemplate.content.body.pages.map((e) => {
                    e.content = e.content.map((el) => {
                        if (el.id === newData.data.id) {
                            return newData.data
                        }
                        return el
                    })
                    return e
                })
                break
            case ComponentLocation.FOOTER:
                newTemplate.content.footer.content = newTemplate.content.footer.content.map((e) => {
                    if (e.id === newData.data.id) {
                        return newData.data
                    }
                    return e
                })
                break
        }
        setTemplate(newTemplate)
    }

    return (
        <>
        {component !== null &&
            <Properties onUpdate={onUpdate} component={component}/>
        }
        {component === null &&
            <Flex direction="column">
                <Callout.Root>
                    <Callout.Icon>
                        <InfoCircledIcon />
                    </Callout.Icon>
                    <Callout.Text>
                    Select one element on the page editor.
                    </Callout.Text>
                </Callout.Root>
            </Flex>
        }
        </>
    )
}