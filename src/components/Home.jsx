import React, { useEffect } from 'react'
const { v4: uuidv4 } = require('uuid');

const Home = () => {

    const sendAnalyticsEvent = () => {
        const firebase_app_id = `1:85526522120:web:e639ae3970638839c8e4bd`;
        const api_secret = `1tGybMxXRJ`;
        let app_instance_id = uuidv4();

        fetch(`https://www.google-analytics.com/mp/collect?firebase_app_id=${firebase_app_id}&api_secret=${api_secret}`, {
            method: "POST",
            body: JSON.stringify({
                app_instance_id: app_instance_id,
                events: [{
                    name: 'tutorial_test',
                    params: {
                        "campaign": "Analytics_test",
                        "source": "sttm",
                    },
                }]
            })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                console.log('Event sent successfully');
            })
            .catch(error => {
                console.error('Error sending event:', error);
            });

        //logEvent(analytics, 'button_click', { label: 'Test Button Click' });
        console.log('Button click event');
    };

    useEffect(() => {
        const button = document.getElementById('testButton');
        if (button) {
            button.addEventListener('click', sendAnalyticsEvent);
        }
    }, []);


    return (
        <div>
            <div>Home</div>
            <button id="testButton">Click Me</button>
        </div>
    )
}

export default Home
