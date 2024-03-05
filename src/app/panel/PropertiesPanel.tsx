import { 
    Text,
    Flex,
    TextField,
    IconButton,
    Callout
} from '@radix-ui/themes';
import { useAppContext } from '../states/AppContext';
import { ParagraphSchema } from '../models/pdf-jsonschema';
import { DotsHorizontalIcon, InfoCircledIcon } from '@radix-ui/react-icons';
import { DialogHelper } from '../components/DialogHelper';

export const PropertiesPanel = () => {
    const { component } = useAppContext()
    return (
        <>
        {component !== null &&
            <Flex direction="column">
                <Text size="1" mb="2" weight="bold">Id</Text>
                <Text size="1" mb="2" weight="light">{component.id}</Text>
                <Text size="1" mb="2" weight="bold">Size</Text>
                <TextField.Root mb="1" size="1">
                    <TextField.Slot>H</TextField.Slot>
                    <TextField.Input value={component.size?.height} />
                </TextField.Root>
                <TextField.Root mb="2" size="1">
                    <TextField.Slot>W</TextField.Slot>
                    <TextField.Input value={component.size?.width} />
                </TextField.Root>
                <Text size="1" mb="2" weight="bold">Position</Text>
                <TextField.Root mb="1" size="1">
                    <TextField.Slot>X</TextField.Slot>
                    <TextField.Input value={component.position?.x} />
                </TextField.Root>
                <TextField.Root mb="2" size="1">
                    <TextField.Slot>Y</TextField.Slot>
                    <TextField.Input value={component.position?.y} />
                </TextField.Root>

                {component['@type'] === "P" &&
                    <>
                        <Text size="1" mb="2" weight="bold">Text</Text>
                        <TextField.Root mb="1" size="1">
                            <TextField.Input readOnly value={(component as ParagraphSchema).value} />
                            <TextField.Slot>
                                <DialogHelper
                                title='Hola'>
                                    <IconButton size="1" variant="ghost">
                                        <DotsHorizontalIcon />
                                    </IconButton>
                                </DialogHelper>
                            </TextField.Slot>
                        </TextField.Root>
                    </>
                }
            </Flex>
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