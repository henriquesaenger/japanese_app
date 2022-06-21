import React, { useEffect, useState } from "react";
import arquivocsv_kn1 from "../csv/vocabulario/KanjiN1.csv";
import Perguntas from "../components/Perguntas";



const N1kanji = () =>{

    const [kanjiN1, setKanjiN1] = useState("");

    const parseCSV= (text) => {
        var vocabulario= text.split("\n");
        console.log(vocabulario);
        return vocabulario;
    }

    useEffect(()=>{
        fetch(arquivocsv_kn1)
        .then((r) => r.text())
        .then((text) => {
            setKanjiN1(parseCSV(text));
            console.log(parseCSV(text));
        });
    }, []);
   
    return(
        <div>
            <Perguntas texto={kanjiN1} limite={kanjiN1.length}/>
        </div>
    )

}


export default N1kanji;