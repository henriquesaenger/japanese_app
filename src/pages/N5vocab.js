import React, { useEffect, useState } from "react";
import arquivocsv_vn5 from "../csv/vocabulario/vocabulary_n5.csv";
import Perguntas from "../components/Perguntas";



const N5vocab = () =>{

    const [vocabularioN5, setVocabularioN5] = useState("");

    const parseCSV= (text) => {
        var vocabulario= text.split("\n");
        console.log(vocabulario);
        return vocabulario;
    }

    useEffect(()=>{
        fetch(arquivocsv_vn5)
        .then((r) => r.text())
        .then((text) => {
            setVocabularioN5(parseCSV(text));
        });
    }, []);
   
    return(
        <div>
            <Perguntas texto={vocabularioN5} limite={vocabularioN5.length}/>
        </div>
    )

}


export default N5vocab;