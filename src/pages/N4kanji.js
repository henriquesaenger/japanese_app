import React, { useEffect, useState } from "react";
import arquivocsv_kn4 from "../csv/vocabulario/KanjiN4.csv";
import Perguntas from "../components/Perguntas";



const N4kanji = () =>{

    const [kanjiN4, setKanjiN4] = useState("");

    const parseCSV= (text) => {
        var vocabulario= text.split("\n");
        console.log(vocabulario);
        return vocabulario;
    }

    useEffect(()=>{
        fetch(arquivocsv_kn4)
        .then((r) => r.text())
        .then((text) => {
            setKanjiN4(parseCSV(text));
            console.log(parseCSV(text));
        });
    }, []);
   
    return(
        <div>
            <Perguntas texto={kanjiN4} limite={kanjiN4.length}/>
        </div>
    )

}


export default N4kanji;