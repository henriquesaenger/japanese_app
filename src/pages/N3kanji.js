import React, { useEffect, useState } from "react";
import arquivocsv_kn3 from "../csv/vocabulario/KanjiN3.csv";
import Perguntas from "../components/Perguntas";



const N3kanji = () =>{

    const [kanjiN3, setKanjiN3] = useState("");

    const parseCSV= (text) => {
        var vocabulario= text.split("\n");
        console.log(vocabulario);
        return vocabulario;
    }

    useEffect(()=>{
        fetch(arquivocsv_kn3)
        .then((r) => r.text())
        .then((text) => {
            setKanjiN3(parseCSV(text));
            console.log(parseCSV(text));
        });
    }, []);
   
    return(
        <div>
            <Perguntas texto={kanjiN3} limite={kanjiN3.length}/>
        </div>
    )

}


export default N3kanji;