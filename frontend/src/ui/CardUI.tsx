import {FC} from 'react';
import {Card, Typography} from "@mui/joy";
import RandomCatUI from "./RandomCatUI.tsx";

const CardUi: FC = () => {
    return (
        <Card
            id="card-image2"
            sx={{
                transition: "1s",
                width: 500,
                height: 350,
                backfaceVisibility: "hidden",
            }}

        >
            <Typography
                textAlign="center"
                level="title-lg"
            >
                Переверни меня и получи код
            </Typography>
            <RandomCatUI/>
        </Card>
    );
};

export default CardUi;