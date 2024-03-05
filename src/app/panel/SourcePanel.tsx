import Editor from '@monaco-editor/react';
import { useAppContext } from '../states/AppContext';
export const SourcePanel = () => {
    const { template, setTemplate } = useAppContext()

    const changeHandler = (evt: string | undefined, newText: any) => {
        if (evt) {
            setTemplate(JSON.parse(evt))
        }
    }
    return  (
        <>
        <Editor 
            height="90vh" 
            width="100%" 
            defaultLanguage="json" 
            theme="vs-dark"
            onChange={changeHandler}
            value={JSON.stringify(template, null, 2)} />
        </>
    )
}