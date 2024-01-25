import {FC, useState} from 'react';
import {Button, Card, Typography} from "@mui/joy";

const CODE = "5435-4523-9874-4234";


const SecretCardUi: FC = () => {
    const [value, setValue] = useState("")
    return (
        <Card
            id="card-image1"
            sx={{
                transition: "1s",
                width: 500,
                height: 350,
                position: "absolute",
            }}
        >
            <div
                style={{
                    transform: "scaleX(-1)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-around",
                    width: "100%",
                    height: "100%",
                }}
            >
                <Button onClick={() => setValue(CODE)}>Нажми чтобы получить код</Button>
                <Typography
                    textAlign="center"
                    level="h1"
                >
                    {value}
                </Typography>
            </div>
        </Card>
    );
};

export default SecretCardUi;