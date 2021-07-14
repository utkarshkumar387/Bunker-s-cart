import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#0BDA51',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#0BDA51',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
};
function Chatbotbox() {
    return (
        <ThemeProvider theme={theme}>
            <ChatBot
                headerTitle="Speech Recognition"
                recognitionEnable={true}
                floating={true}
                steps={[
                    {
                        id: '1',
                        message: 'What is your name?',
                        trigger: '2',
                    },
                    {
                        id: '2',
                        user: true,
                        trigger: '3',
                    },
                    {
                        id: '3',
                        message: 'Hi {previousValue}, nice to meet you!',
                        end: true,
                    },
                ]}
            />
        </ThemeProvider>
    )
}

export default Chatbotbox;
