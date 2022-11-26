import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("Clicked Up button");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleDownClick = () => {
        // console.log("Clicked down button");
        let newText = text.toLowerCase();
        setText(newText);
    }

    const clearText = () => {
        // console.log("Clear button");
        let newText = text.toLowerCase();
        setText("");
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }


    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }


    const handleSpeak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }


    const downloadTxtFile = () => {
        const element = document.createElement("a");
        const file = new Blob([text], {
            type: "text/plain"
        });
        element.href = URL.createObjectURL(file);
        element.download = "myFile.txt";
        element.click();
    }

    const handleReverse = (event) => {
        /* Convert string to array*/
        let strArr = text.split("");
        /* Reverse array*/
        strArr = strArr.reverse();
        /* Convert array to string*/
        let newText = strArr.join("");
        setText(newText);
    };


    const replaceString = () => {
        let repval = prompt("Enter the word to be replaced:")
        let tobereplaced = new RegExp(repval, 'g');

        let toreplace = prompt("Enter the text that you want to replace with:");

        let newText = text.replace(tobereplaced, toreplace);
        setText(newText);
    }

    function handleDuplicates() {
        let wordArr = text.split(" ");
        let newText = wordArr.filter((item, pos) => {
            return wordArr.indexOf(item) === pos;
        })
        newText = newText.join(" ");
        setText(newText);
    }

    const capitalFirstLetter = () => {
        let words = text.split(" ")
        let uppercaseword = ' '
        words.forEach(element => {
            uppercaseword += element.charAt(0).toUpperCase() + element.slice(1) + " "
        });
        setText(uppercaseword)
    }



    const handleRemoveSpecialCharcters = () => {
        let newText = text.replace(/[^a-zA-Z ]/g, "");
        setText(newText);
    }


    const handleconverter = () => {
        let newtext = text.replace("class=", "className=");
        setText(newtext);
    };



    const [text, setText] = useState("");
    return (
        <>
            <div className="container">
                <h2 className='my-4'>{props.heading} </h2>
                <div className="mb-3 my-3 " >
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="7" ></textarea>
                </div>
                {/* Button................................ */}
                <button disabled={text.length === 0} className="btn btn-primary mx-1" onClick={handleUpClick} mx-2 >Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-2" onClick={handleDownClick} mx-2 >Convert to Lowercase</button>

                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-2" onClick={clearText} mx-2 >Clear Text</button>

                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-2" onClick={handleCopy} mx-2 >Copy Text</button>

                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-2" onClick={handleExtraSpaces} mx-2 >Remove Extra Space</button>

                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-2" onClick={handleSpeak} mx-2 >Speak</button>

                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-2" onClick={downloadTxtFile} mx-2 >Download Text</button>

                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-2" onClick={handleReverse} mx-2 >Reverse Text</button>

                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-2" onClick={replaceString} mx-2 >Replace Text</button>

                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-2" onClick={handleDuplicates} mx-2 >Remove Duplicates Text</button>

                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-2" onClick={capitalFirstLetter} mx-2 >First Letter Capital</button>

                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-2" onClick={handleRemoveSpecialCharcters} mx-2 >Remove Special Character</button>

                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-2" onClick={handleconverter} mx-2 >Convert class to className</button>



            </div>

            <div className="container my-3" >
                <h2>Your text Sumarry</h2>
                <p><b><i>{text.split(" ").filter((element) => { return element.length != 0 }).length} words & {text.length} characters</i></b></p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}
