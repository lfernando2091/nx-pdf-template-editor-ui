import * as data from '../../assets/example.json';

import { 
    Text,
    Code
  } from '@radix-ui/themes';
export const SourcePanel = () => {
    console.log("data", data)
    return  (
        <>
        <Text size="2">Source.</Text>
        <Code>
        <pre>
        { JSON.stringify(data, null, 2) }
        </pre>
        </Code>
        </>
    )
}