import React, { useEffect, useState } from "react";
import arquivocsv_vn4 from "../csv/vocabulario/vocabulary_n4.csv";
import Perguntas from "../components/Perguntas";



const N4vocab = () =>{

    const [vocabularioN4, setVocabularioN4] = useState("");

    const parseCSV= (text) => {
        var vocabulario= text.split("\n");
        console.log(vocabulario);
        return vocabulario;
    }

    useEffect(()=>{
        fetch(arquivocsv_vn4)
        .then((r) => r.text())
        .then((text) => {
            setVocabularioN4(parseCSV(text));
        });
    }, []);
   
    return(
        <div>
            <Perguntas texto={vocabularioN4} limite={vocabularioN4.length}/>
        </div>
    )

}


export default N4vocab;