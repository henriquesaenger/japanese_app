import React, { useEffect, useState } from "react";
import arquivocsv_kn5 from "../csv/vocabulario/KanjiN5.csv";
import Perguntas from "../components/Perguntas";



const N5kanji = () =>{

    const [kanjiN5, setKanjiN5] = useState("");

    const parseCSV= (text) => {
        var vocabulario= text.split("\n");
        console.log(vocabulario);
        return vocabulario;
    }

    useEffect(()=>{
        fetch(arquivocsv_kn5)
        .then((r) => r.text())
        .then((text) => {
            setKanjiN5(parseCSV(text));
            console.log(parseCSV(text));
        });
    }, []);
   
    return(
        <div>
            <Perguntas texto={kanjiN5} limite={kanjiN5.length}/>
        </div>
    )

}


export default N5kanji;