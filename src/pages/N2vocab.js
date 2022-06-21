import React, { useEffect, useState } from "react";
import arquivocsv_vn2 from "../csv/vocabulario/vocabulary_n2.csv";
import Perguntas from "../components/Perguntas";



const N2vocab = () =>{

    const [vocabularioN2, setVocabularioN2] = useState("");

    const parseCSV= (text) => {
        var vocabulario= text.split("\n");
        console.log(vocabulario);
        return vocabulario;
    }

    useEffect(()=>{
        fetch(arquivocsv_vn2)
        .then((r) => r.text())
        .then((text) => {
            setVocabularioN2(parseCSV(text));
        });
    }, []);
   
    return(
        <div>
            <Perguntas texto={vocabularioN2} limite={vocabularioN2.length}/>
        </div>
    )

}


export default N2vocab;