import React, {FC, useState} from "react";
import './styles.scss';
import {useDispatch} from "react-redux";
import {Alert, Button, Snackbar} from "@mui/material";

type Props = {
    items: Array<string>;
    disabled?: boolean;
}
export const ButtonTest: FC<Props> = ({items, disabled}) => {
    const [animateHearts, setAnimateHearts] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [openErr, setOpenErr] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };
    const handleButtonClick = async () => {
        await fetch('https://api.telegram.org/bot7684259040:AAGl9pE2JLWG6x2ESmnTQuNiMBxGYi0MKhM/sendMessage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id:433123439,
                text: JSON.stringify(items ?? '')
            })

        }).then((res) => {

        }).then(() => {
            setOpen(true);
        }).catch(() => {
            setOpenErr(true);
        });
    };

    return (
        <div>
            <Button sx={{
                backgroundColor: '#000'
            }} variant={'contained'} disabled={disabled} onClick={handleButtonClick}>Заказать</Button>
            <Snackbar
                open={open}
                autoHideDuration={5000}
                onClose={() => {
                    setOpen(false);
                }}
            >
                <Alert
                    onClose={() => {
                        setOpen(false);
                    }}
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    Заказ успешно отправлен!
                </Alert>
            </Snackbar>
            <Snackbar
                open={openErr}
                autoHideDuration={5000}
                onClose={() => {
                    setOpenErr(false);
                }}
            >
                <Alert
                    onClose={() => {
                        setOpenErr(false);
                    }}
                    severity="error"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    Ошибка при отправке(( Повторите заказ снова или отправьте повару письмо в телеграмм
                </Alert>
            </Snackbar>
        </div>
    );
}
