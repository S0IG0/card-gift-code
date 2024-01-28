import {AspectRatio} from "@mui/joy";
import {FC, useEffect, useState} from 'react';
import axios from "axios";
import {CSSTransition} from "react-transition-group";

interface ResponseImage {
    url: string
}

const API_KEY = "live_0PC4c4466HgwUO3qEt95YG5deLS10717CmXVeddRCffRm3qGu0GOHk7ereuQiZPA"
const API_URL = "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1"

const RandomCatUi: FC = () => {
    const [animate, setAnimate] = useState(false)
    const [urlImage, setUrlImage] = useState("https://cdn2.thecatapi.com/images/ShbKwvcD_.jpg")
    const [nextUrl, setNextUrl] = useState("https://cdn2.thecatapi.com/images/ShbKwvcD_.jpg")
    const fetchCat = () => {
        axios.get<ResponseImage[]>(API_URL, {
            headers: {
                "Content-Type": "application/json",
                "x-api-key": API_KEY
            }
        }).then(response => {
            setAnimate(true)
            setNextUrl(response.data[0].url)
        });
    }


    useEffect(() => {
        const intervalId = setInterval(() => {
            fetchCat()
        }, 5000)

        return () => {
            clearInterval(intervalId)
        }
    }, []);


    return (
        <AspectRatio>
            <CSSTransition
                in={animate}
                timeout={1000}
                classNames="image"
                onEntered={() => {
                    setTimeout(() => setAnimate(false), 200)
                    setUrlImage(nextUrl);
                }}
            >
                <img
                    src={urlImage}
                    alt=""
                />
            </CSSTransition>
        </AspectRatio>
    );
};

export default RandomCatUi;