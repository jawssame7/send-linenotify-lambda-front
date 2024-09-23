import { Container, Box, Stack, TextareaAutosize, Button } from "@mui/material";
import './App.css'

function App() {

  const onClickSend = () => {
    console.log('click send');
  };

  return (
    <>
      <Container maxWidth="sm">
        <Box>
          <Stack spacing={5}>
            <h1>Line NotifyへAWS Lambdaを使って送信</h1>
            <TextareaAutosize minRows={10} ></TextareaAutosize>
            <Button variant="contained" onClick={onClickSend}>Send!!</Button>
          </Stack>
        </Box>
      </Container>
    </>
  )
}

export default App
