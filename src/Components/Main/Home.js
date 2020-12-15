import React, { useState, useEffect } from 'react'
import cvpdf from '../../items/imgs/MarcoDominguesCV.pdf'

export const Home = () => {
    const [paragraph, setParagraph] = useState("")
    let tempSentence = "";
    let sentences = new Array("Hi, I'm Marco");
    let index = 0;
    let writerMark = false;
    let markerTimer = 0;
    let arrayIndex = 0;


    let textEffect = ()=>{
        
        let sentence = sentences[arrayIndex];
        if(index < sentence.length){
            tempSentence += sentence[index];
            index ++;
            setParagraph(tempSentence + "|"); 
        }else{
            
            if(arrayIndex < (sentences.length-1)){
                tempSentence += "";
                arrayIndex+=1;
                index = 0;
            }else{
                if(writerMark && markerTimer > 3){
                    setParagraph(tempSentence)
                    //writerMark = false;
                    markerTimer = 0;
                }else if (!writerMark && markerTimer > 3){
                    setParagraph(tempSentence + "|")
                    writerMark = true;
                    markerTimer = 0;
                }else{
                    markerTimer++;
                }
            }
        }        
    }

    useEffect(() => {
        const timer = setInterval(()=> {
            textEffect();
        }, 100);
        return()=> clearInterval(timer)
      },[]);


    return (
        <div id="home">
            <div id="hometext">
                <h1>{paragraph}</h1>
                <h4 id="subtitle">WELCOME TO MY PORTFOLIO.</h4>
                <p>I'm a software development passionate with a 
                    curious mind who likes to think outside of the box.
                </p> 
                <p>I've been learning the technologies presented in my
                    portfolio through tutorials and internet 
                    research for the past two years.
                    I've recently decided that it was time to dedicate
                    my professional life to my passion and started a
                    software developer course with The Training 
                    Room.
                </p>
                <p>
                    Here you can find some of my personal projects.
                </p>
                <a href={cvpdf} download="MarcoDominguesCV"  className="button">Download CV</a>
            </div>
            
            <div id="homepic" ></div>
        </div>
    )
    
}

export default Home;