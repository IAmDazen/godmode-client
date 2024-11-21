function openGodModeClient() {
    const popupWindow = window.open(
        '', // Replace with a URL if needed, e.g., 'https://example.com'
        'GodModeClient', // Window name
        'width=500,height=400,left=200,top=200,resizable=yes,scrollbars=yes'
    );

    // Set content for the popup window
    if (popupWindow) {
        popupWindow.document.write(`
            <html>
            <head>
                <title>GodMode Client</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        text-align: center;
                        padding: 20px;
                        background-color: #282c34;
                        color: white;
                    }
                    button {
                        margin-top: 20px;
                        padding: 10px 20px;
                        font-size: 16px;
                        cursor: pointer;
                        background-color: #61dafb;
                        border: none;
                        border-radius: 5px;
                    }
                </style>
            </head>
            <body>
                <h1>Welcome to GodMode Client</h1>
                <p>Unleash the full potential of your browser session.</p>
                <button onclick="window.close()">Close GodMode Client</button>
            </body>
            </html>
        `);
        popupWindow.document.close(); // Close the document stream
    } else {
        alert('Popup blocked! Please allow popups for this site.');
    }
}

// Call the function to open the popup
openGodModeClient();
