import { 
    Text,
    Box
  } from '@radix-ui/themes';
import { FillContent } from '../components/FillContent';

export const DocumentPanel = () => {
    return (
        <>
        <Text size="2">Preview.</Text>
        <Box width="9" height="9">
            <FillContent />
        </Box>
        </>
    )
}