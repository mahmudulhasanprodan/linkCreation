import React, { useState } from 'react'

const Shorteen = () => {

    const[ShortLink,setShortLink] = useState();
    const[ShortenValue,setShortenValue] = useState();
    const[CopyValue,setCopyValue]= useState();


    // HandleLink function start here 
    const HandleLink = (e) => {
        setShortLink(e.target.value);    
    };

    // HandleShorten function start here 
    const HandleShorten = () => {
        setShortenValue(ShortLink);
            
    };
    
    // HandleCopyLink function start here 

    const HandleCopyLink = () => {
        console.log(window.Clipboard);         
    };


  return (
    <>
      <div>
        <div className="container">
          <div className="flex flex-col items-center justify-cente gap-y-6">
            <div>
              <h2 className="font-bold text-xl py-4">URL SHORTER</h2>
            </div>
            <div className="flex items-center">
              <input
                type="text"
                id="LinkShort"
                name="LinkShort"
                placeholder="copy link paste here"
                className="w-48 h-10 pl-3 border-2 border-gray-500"
                onChange={HandleLink}
              />
              <button className="h-10 bg-green-400 px-10 font-bold text-white" onClick={HandleShorten}>
                Shorten
              </button>
            </div>
            <div className="flex items-center">
              <input
                type="text"
                id="ShortLink"
                name="ShortLink"
                value={ShortenValue}
                className="w-48 h-6 pl-3 border-2 border-gray-500"
              />
              <button className="h-6 bg-green-400 px-10 font-bold text-white" onClick={HandleCopyLink}>
                Copy Link
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shorteen
