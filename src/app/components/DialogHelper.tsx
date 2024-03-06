import { 
    Dialog,
    Flex,
    Button
} from "@radix-ui/themes"
import { ReactNode } from "react"

export type DialogHelper = {
    title?: string
    description?: string
    trigger: ReactNode
    children: ReactNode
    footer?: ReactNode
    onConfirm?: () => void
    onOpenChange?: (open: boolean) => void
}

export const DialogHelper = ({
    title,
    description,
    trigger,
    children,
    footer,
    onConfirm,
    onOpenChange
}: DialogHelper) => {
    return (<>
    <Dialog.Root onOpenChange={onOpenChange}>
        <Dialog.Trigger>
        { trigger }
        </Dialog.Trigger>
        <Dialog.Content style={{ maxWidth: 450 }}>
            {title &&
                <Dialog.Title>{ title }</Dialog.Title>
            }
            {description &&
                <Dialog.Description>{ description }</Dialog.Description>
            }
            {children}
            <Flex gap="3" mt="4" justify="end">
                {footer &&
                    <>{footer}</>
                }
                {footer === undefined &&
                    <>
                    <Dialog.Close>
                        <Button variant="soft" color="gray">
                            Cancel
                        </Button>
                    </Dialog.Close>
                    <Dialog.Close>
                        <Button onClick={onConfirm}>Save</Button>
                    </Dialog.Close>
                    </>
                }
            </Flex>
        </Dialog.Content>
    </Dialog.Root>
    </>)
}