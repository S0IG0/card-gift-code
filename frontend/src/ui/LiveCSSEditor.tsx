import {ChangeEvent, useEffect} from "react";
import {Textarea} from "@mui/joy";

const styles = "background-color: white;\n" +
    "border: 2px solid darkblue;\n" +
    "border-radius: 5px;\n" +
    "padding: 10px;\n" +
    "transform: perspective(1000px) rotateY(-20deg) rotateX(10deg);"

const LiveCSSEditor = () => {
    const applyCSS = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const element1 = document.getElementById('card-image1');
        const element2 = document.getElementById('card-image2');
        if (element1 && element2) {
            element1.style.cssText = event.target.value;
            element2.style.cssText = event.target.value;
        }
    };

    useEffect(() => {
        const element1 = document.getElementById('card-image1');
        const element2 = document.getElementById('card-image2');
        if (element1 && element2) {
            element1.style.cssText = styles;
            element2.style.cssText = styles;
        }
    }, []);

    return (
        <Textarea
            sx={{
                marginTop: 15,
                width: 500,
            }}
            minRows={5}
            onChange={applyCSS}
            defaultValue={styles}
        />
    );
};

export default LiveCSSEditor;
