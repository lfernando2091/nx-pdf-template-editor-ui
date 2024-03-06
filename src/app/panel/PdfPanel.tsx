import { 
    Box,
    Grid,
    Select,
    Text,
    TextField
} from '@radix-ui/themes';
import { useAppContext } from '../states/AppContext';
import { PinTopIcon, PinLeftIcon, PinRightIcon, PinBottomIcon } from '@radix-ui/react-icons';
import { useState, ChangeEvent } from 'react';

type PdfPanelProps = {
    
}

export const PdfPanel = ({ }: PdfPanelProps) => {
    const { template, setTemplate } = useAppContext()
    const [title, setTitle] = useState(template.document?.title ?? "")
    const [author, setAuthor] = useState(template.document?.author ?? "")
    const [creator, setCreator] = useState(template.document?.creator ?? "")
    const [keyWords, setKeyWords] = useState(template.document?.key_words ?? "")
    const [language, setLanguage] = useState(template.document?.language ?? "")
    const [subject, setSubject] = useState(template.document?.subject ?? "")
    const [pageSize, setPageSize] = useState(template.document?.page_size ?? "A4")
    const [mTop, setMTop] = useState(template.document?.margins?.top ?? "0")
    const [mLeft, setMLeft] = useState(template.document?.margins?.left ?? "0")
    const [mRight, setMRight] = useState(template.document?.margins?.right ?? "0")
    const [mBottom, setMBottom] = useState(template.document?.margins?.bottom ?? "0")

    const onUpdateTitle = (ev: ChangeEvent<HTMLInputElement>) => {
        const current = ev.target.value
        let newData = template.document
        if (newData) {
            newData.title = current
        } else {
            newData = {
                title: current
            }
        }
        setTitle(current)
        setTemplate({
            ...template,
            document: newData
        })
    }

    const onUpdateAuthor = (ev: ChangeEvent<HTMLInputElement>) => {
        const current = ev.target.value
        let newData = template.document
        if (newData) {
            newData.author = current
        } else {
            newData = {
                author: current
            }
        }
        setAuthor(current)
        setTemplate({
            ...template,
            document: newData
        })
    }

    const onUpdateMTop = (ev: ChangeEvent<HTMLInputElement>) => {
        const current = Number(ev.target.value)
        const top = parseFloat(current.toFixed(2))
        let newData = template.document
        if (newData && newData.margins) {
            newData.margins.top = top
        } else if (newData && newData.margins === undefined){
            newData.margins = {
                top
            }
        } else {
            newData = {
                margins: {
                    top
                }
            }
        }
        setMTop(top)
        setTemplate({
            ...template,
            document: newData
        })
    }

    const onUpdateMLeft = (ev: ChangeEvent<HTMLInputElement>) => {
        const current = Number(ev.target.value)
        const left = parseFloat(current.toFixed(2))
        let newData = template.document
        if (newData && newData.margins) {
            newData.margins.left = left
        } else if (newData && newData.margins === undefined){
            newData.margins = {
                left
            }
        } else {
            newData = {
                margins: {
                    left
                }
            }
        }
        setMLeft(left)
        setTemplate({
            ...template,
            document: newData
        })
    }

    const onUpdateMRight = (ev: ChangeEvent<HTMLInputElement>) => {
        const current = Number(ev.target.value)
        const right = parseFloat(current.toFixed(2))
        let newData = template.document
        if (newData && newData.margins) {
            newData.margins.right = right
        } else if (newData && newData.margins === undefined){
            newData.margins = {
                right
            }
        } else {
            newData = {
                margins: {
                    right
                }
            }
        }
        setMRight(right)
        setTemplate({
            ...template,
            document: newData
        })
    }

    const onUpdateMBottom = (ev: ChangeEvent<HTMLInputElement>) => {
        const current = Number(ev.target.value)
        const bottom = parseFloat(current.toFixed(2))
        let newData = template.document
        if (newData && newData.margins) {
            newData.margins.bottom = bottom
        } else if (newData && newData.margins === undefined){
            newData.margins = {
                bottom
            }
        } else {
            newData = {
                margins: {
                    bottom
                }
            }
        }
        setMBottom(bottom)
        setTemplate({
            ...template,
            document: newData
        })
    }
    
    return (
        <>
            <Text size="1" mb="2" weight="bold">Title</Text>
            <TextField.Root mb="1" size="1">
                <TextField.Input value={title} onChange={onUpdateTitle}/>
            </TextField.Root>
            <Text size="1" mb="2" weight="bold">Author</Text>
            <TextField.Root mb="1" size="1">
                <TextField.Input value={author} onChange={onUpdateAuthor}/>
            </TextField.Root>
            <Text size="1" mb="2" weight="bold">Creator</Text>
            <TextField.Root mb="1" size="1">
                <TextField.Input value={creator}/>
            </TextField.Root>
            <Text size="1" mb="2" weight="bold">Key Words</Text>
            <TextField.Root mb="1" size="1">
                <TextField.Input value={keyWords}/>
            </TextField.Root>
            <Text size="1" mb="2" weight="bold">Language</Text>
            <TextField.Root mb="1" size="1">
                <TextField.Input value={language}/>
            </TextField.Root>
            <Text size="1" mb="2" weight="bold">Subject</Text>
            <TextField.Root mb="1" size="1">
                <TextField.Input value={subject}/>
            </TextField.Root>
            <Text size="1" mb="2" weight="bold">Page Size</Text>
            <Box>
                <Select.Root size="1"
                value={pageSize}>
                    <Select.Trigger ml="2" mt="1"/>
                    <Select.Content>
                        <Select.Item value="A3">A3</Select.Item>
                        <Select.Item value="A4">A4</Select.Item>
                    </Select.Content>
                </Select.Root>
            </Box>
            <Text size="1" mb="2" mt="2" weight="bold">Margins</Text>
            <Grid columns="3" gap="0" mb="0" width="auto">
                <Box/>
                <Box>
                    <TextField.Root mb="1" size="1">
                        <TextField.Slot><PinTopIcon/></TextField.Slot>
                        <TextField.Input type='number' value={mTop} onChange={onUpdateMTop}/>
                    </TextField.Root>
                </Box>
                <Box/>
                <Box>
                    <TextField.Root mb="1" size="1">
                        <TextField.Slot><PinLeftIcon/></TextField.Slot>
                        <TextField.Input type='number' value={mLeft} onChange={onUpdateMLeft}/>
                    </TextField.Root>
                </Box>
                <Box/>
                <Box>
                    <TextField.Root mb="1" size="1">
                        <TextField.Input type='number' value={mRight} onChange={onUpdateMRight}/>
                        <TextField.Slot><PinRightIcon/></TextField.Slot>
                    </TextField.Root>
                </Box>
                <Box/>
                <Box>
                    <TextField.Root mb="1" size="1">
                        <TextField.Slot><PinBottomIcon/></TextField.Slot>
                        <TextField.Input type='number' value={mBottom} onChange={onUpdateMBottom}/>
                    </TextField.Root>
                </Box>
                <Box/>
            </Grid>
        </>
    )
}