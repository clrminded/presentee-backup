import React, { useState } from 'react';
import QRCode from "react-qr-code";

export default function JoinPage() {

  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  const qrCodeValue = `www.presentee.net/join/${text}`; // construct the QR code value using the "www.presentee.net/join/" string and the text state variable
  const qrCodeUrl = `https://${qrCodeValue}`; // construct the URL linked to the QR code by adding the "https://" protocol

  return (
    <div className="App">
      <header className="App-header">
        <QRCode value={qrCodeValue} /> {/* use the constructed QR code value */}
        <br/>
        <a href={qrCodeUrl} target="_blank" rel="noopener noreferrer">{qrCodeUrl}</a> {/* add an "a" tag to display the URL linked to the QR code */}
        <div className="App-link">
          <p>Enter the code to encode</p>
          <input type="text" value={text} onChange={(e)=>{handleChange(e)}}/>
        </div>
      </header>
    </div>
  );
}