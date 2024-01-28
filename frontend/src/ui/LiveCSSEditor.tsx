import {ReactNode, useState} from "react";
import AceEditor from "react-ace"
import {createGlobalStyle} from 'styled-components';

import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/ext-language_tools";
import {Card} from "@mui/joy";


const default_style = `.card-secrete-code {
  background-color: white;
  border: 2px solid darkblue;
  border-radius: 5px;
  padding: 10px;
}
`;

const DefaultGlobalStyle = createGlobalStyle`${default_style}`;

const LiveCSSEditor = () => {
    const [GlobalStyle, setGlobalStyle] = useState<ReactNode>(<DefaultGlobalStyle/>)

    const applyCSS = (value: string) => {
        const Style = createGlobalStyle`${value}`;
        setGlobalStyle(<Style/>)
    };

    return (
        <>
            {GlobalStyle}
            <Card sx={{mt: 8, p: 0}}>
                <AceEditor
                    height="150px"
                    mode="css"
                    theme="tomorrow"
                    name="blah2"
                    defaultValue={default_style}
                    onChange={applyCSS}
                    fontSize={14}
                    showPrintMargin={true}
                    showGutter={true}
                    highlightActiveLine={true}
                    setOptions={{
                        enableBasicAutocompletion: true,
                        enableLiveAutocompletion: true,
                        enableSnippets: true,
                        showLineNumbers: true,
                        tabSize: 2,
                        useWorker: true,
                    }}
                />
            </Card>
        </>
    );
};

export default LiveCSSEditor;
