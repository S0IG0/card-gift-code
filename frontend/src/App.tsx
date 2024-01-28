import {FC, useState} from 'react';
import {CssVarsProvider, ScopedCssBaseline, Typography} from "@mui/joy";
import CardUI from "./ui/CardUI.tsx";
import LiveCSSEditor from "./ui/LiveCSSEditor.tsx";
import SecretCardUi from "./ui/SecretCardUI.tsx";

import "./styles/Image.css"


const App: FC = () => {
    const [root, setRoot] = useState<HTMLDivElement | null>(null);
    return (
        <CssVarsProvider colorSchemeNode={root}>
            <ScopedCssBaseline ref={(element) => setRoot(element)}>
                <main style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column"
                }}>
                    <div style={{perspective: "1000px"}}>
                        <SecretCardUi/>
                        <CardUI/>
                    </div>
                    <LiveCSSEditor/>
                    <Typography variant="outlined" level="title-md" sx={{marginTop: 2, width: 500}} borderRadius={4}>
                        Все сделано так чтобы нельзя было найти ключ через просмотр кода-элемента, так что развлекайся.
                        Тебе нужно написать css свойства чтобы развернуть карточку
                    </Typography>
                </main>
            </ScopedCssBaseline>
        </CssVarsProvider>
    );
};

export default App;