import React, { useEffect, useState } from "react";
import arquivocsv_kn2 from "../csv/vocabulario/KanjiN2.csv";
import Perguntas from "../components/Perguntas";



const N2kanji = () =>{

    const [kanjiN2, setKanjiN2] = useState("");

    const parseCSV= (text) => {
        var vocabulario= text.split("\n");
        console.log(vocabulario);
        return vocabulario;
    }

    useEffect(()=>{
        fetch(arquivocsv_kn2)
        .then((r) => r.text())
        .then((text) => {
            setKanjiN2(parseCSV(text));
            console.log(parseCSV(text));
        });
    }, []);
   
    return(
        <div>
            <Perguntas texto={kanjiN2} limite={kanjiN2.length}/>
        </div>
    )

}


export default N2kanji;