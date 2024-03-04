import { 
    SquareIcon,
    CircleIcon, 
    GroupIcon, 
    TextIcon, 
    CursorArrowIcon, 
    MoveIcon,
    ViewGridIcon,
    BarChartIcon,
    PieChartIcon,
    InputIcon,
    BorderSolidIcon
} from '@radix-ui/react-icons'
import { 
    Separator,
    IconButton,
    HoverCard
} from '@radix-ui/themes';

export const ToolsPanel = () => {

    return (
        <>
        <div style={{ display:"flex", flexDirection: "column" }}>
            <HoverCard.Root>
              <HoverCard.Trigger>
                <IconButton variant="solid">
                  <CursorArrowIcon/>
                </IconButton>
              </HoverCard.Trigger>
              <HoverCard.Content>
                  <h1>Hola mundo</h1>
              </HoverCard.Content>
            </HoverCard.Root>
            <IconButton variant="soft" mb="2"><MoveIcon/></IconButton>
            <Separator orientation="horizontal" />
            <IconButton variant="soft" mt="2"><TextIcon/></IconButton>
            <IconButton variant="soft" mb="2"><InputIcon/></IconButton>
            <Separator orientation="horizontal" />
            <IconButton variant="soft" mt="2"><SquareIcon/></IconButton>
            <IconButton variant="soft"><CircleIcon/></IconButton>
            <IconButton variant="soft"><BorderSolidIcon/></IconButton>
            <IconButton variant="soft" mb="2"><ViewGridIcon/></IconButton>
            <Separator orientation="horizontal" />
            <IconButton variant="soft" mt="2"><BarChartIcon/></IconButton>
            <IconButton variant="soft"><PieChartIcon/></IconButton>
          </div>
          <div>
            <IconButton variant="soft"><GroupIcon/></IconButton>
          </div>
        </>
    )
}