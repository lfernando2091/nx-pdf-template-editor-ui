import { 
    SquareIcon,
    CircleIcon, 
    DotsVerticalIcon, 
    DividerHorizontalIcon,
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
    IconButton
} from '@radix-ui/themes';
import { ToolHelper } from '../components/ToolHelper';
import { CenterContent } from '../components/Center';
import { DialogHelper } from '../components/DialogHelper';

export enum ToolType {
  Cursor,
  MoveCursor,
  Text,
  InputText,
  Square,
  Circle,
  Line,
  Table,
  BarChar,
  PieChar
}

type ToolsPanelProps = {
  current: ToolType
  onChangeTool: (select: ToolType) => void
}

export const ToolsPanel = ({
  current,
  onChangeTool
}: ToolsPanelProps) => {
    return (
        <>
        <div style={{ display:"flex", flexDirection: "column" }}>
            <ToolHelper
              title='Cursor'
              subtitle='Use this tool to close edition mode.'
              icon={<CursorArrowIcon 
                width="12" 
                height="12"/>}>
              <IconButton 
                  onClick={() => onChangeTool(ToolType.Cursor)} 
                  variant={current === ToolType.Cursor ? "solid": "soft"}>
                  <CursorArrowIcon/>
                </IconButton>
            </ToolHelper>
            <ToolHelper
              title='Move'
              subtitle='Use this tool for moving elements.'
              icon={<MoveIcon 
                width="12" 
                height="12"/>}>
              <IconButton 
              onClick={() => onChangeTool(ToolType.MoveCursor)} 
              variant={current === ToolType.MoveCursor ? "solid": "soft"}
              mb="1"><MoveIcon/>
              </IconButton>
            </ToolHelper>
            <CenterContent>
              <DividerHorizontalIcon color="var(--gray-a5)"/>
            </CenterContent>
            <ToolHelper
              title='Text'
              subtitle='Add a text element.'
              icon={<TextIcon 
                width="12" 
                height="12"/>}>
              <IconButton 
              onClick={() => onChangeTool(ToolType.Text)} 
              variant={current === ToolType.Text ? "solid": "soft"}
              mt="1"><TextIcon/>
              </IconButton>
            </ToolHelper>
            <ToolHelper
              title='Input text'
              subtitle='Add input text field element.'
              icon={<InputIcon 
                width="12" 
                height="12"/>}>
              <IconButton 
              onClick={() => onChangeTool(ToolType.InputText)} 
              variant={current === ToolType.InputText ? "solid": "soft"}>
                <InputIcon/>
              </IconButton>
            </ToolHelper>
            <ToolHelper
              title='Table'
              subtitle='Add table element.'
              icon={<ViewGridIcon 
                width="12" 
                height="12"/>}>
              <IconButton 
              mb="1"
              onClick={() => onChangeTool(ToolType.Table)} 
              variant={current === ToolType.Table ? "solid": "soft"}>
                <ViewGridIcon/>
              </IconButton>
            </ToolHelper>
            <CenterContent>
              <DividerHorizontalIcon color="var(--gray-a5)"/>
            </CenterContent>
            <ToolHelper
              title='Square'
              subtitle='Add an square/ rectangle element.'
              icon={<SquareIcon 
                width="12" 
                height="12"/>}>
              <IconButton 
              mt="1"
              onClick={() => onChangeTool(ToolType.Square)} 
              variant={current === ToolType.Square ? "solid": "soft"}>
                <SquareIcon/>
              </IconButton>
            </ToolHelper>
            <ToolHelper
              title='Circle'
              subtitle='Add a circle element.'
              icon={<CircleIcon 
                width="12" 
                height="12"/>}>
              <IconButton 
              onClick={() => onChangeTool(ToolType.Circle)} 
              variant={current === ToolType.Circle ? "solid": "soft"}>
                <CircleIcon/>
              </IconButton>
            </ToolHelper>
            <ToolHelper
              title='Line'
              subtitle='Add a simple line element.'
              icon={<BorderSolidIcon 
                width="12" 
                height="12"/>}>
              <IconButton 
              mb="1"
              onClick={() => onChangeTool(ToolType.Line)} 
              variant={current === ToolType.Line ? "solid": "soft"}>
                <BorderSolidIcon/>
              </IconButton>
            </ToolHelper>
            <CenterContent>
              <DividerHorizontalIcon color="var(--gray-a5)"/>
            </CenterContent>
            <IconButton variant="soft" mt="1"><BarChartIcon/></IconButton>
            <IconButton variant="soft"><PieChartIcon/></IconButton>
          </div>
          <div>
            <DialogHelper
              title='Hola'>
              <IconButton variant="soft"><DotsVerticalIcon/></IconButton>
            </DialogHelper>
          </div>
        </>
    )
}