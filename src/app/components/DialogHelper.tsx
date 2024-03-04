import { 
    Dialog,
    Flex,
    Button
} from "@radix-ui/themes"
import { ReactNode } from "react"

export type DialogHelper = {
    title: string
    children: ReactNode
}

export const DialogHelper = ({
    title,
    children
}: DialogHelper) => {

    return (<>
    <Dialog.Root>
        <Dialog.Trigger>
        { children }
        </Dialog.Trigger>
        <Dialog.Content style={{ maxWidth: 450 }}>
            <Dialog.Title>{ title }</Dialog.Title>

            <Flex gap="3" mt="4" justify="end">
                <Dialog.Close>
                    <Button variant="soft" color="gray">
                        Cancel
                    </Button>
                </Dialog.Close>
                <Dialog.Close>
                    <Button>Save</Button>
                </Dialog.Close>
            </Flex>
        </Dialog.Content>
    </Dialog.Root>
    </>)
}