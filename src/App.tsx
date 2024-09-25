import { Container, Box, Stack, TextareaAutosize, Button } from "@mui/material";
import './App.css'
import {useState} from "react";

function App() {

  const [message, setMessage] = useState('')

  const onClickSend = async () => {
    await fetch('https://xxxxxxxxxx.execute-api.ap-northeast-1.amazonaws.com/xxxxxxxxx',
        {
          method: 'POST',
          mode: 'no-cors',
          body: JSON.stringify({message: message}),
        }
    );
  };

  return (
    <>
      <Container maxWidth="sm">
        <Box>
          <Stack spacing={5}>
            <h1>Line NotifyへAWS Lambdaを使って送信</h1>
            <TextareaAutosize minRows={10} onChange={e => setMessage(e.target.value)} value={message}></TextareaAutosize>
            <Button variant="contained" onClick={onClickSend}>Send!!</Button>
          </Stack>
        </Box>
      </Container>
    </>
  )
}

export default App
