import React, { useState } from 'react';


import { CopyToClipboard } from "react-copy-to-clipboard";


export default function Copy({copyText}) {
  const [text, setText] = useState(copyText);
  const [isCopied, setIsCopied] = useState(false);

    
 
  const onCopyText = () => {
      console.log("copied");
      //setText(copyText);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    
      <CopyToClipboard text={text} onCopy={onCopyText}>
        <div className="copy-area">
          <button>Copy to Clipboard</button>
          {isCopied && <span> copied</span>}
        </div>
      </CopyToClipboard>
    
  );
}