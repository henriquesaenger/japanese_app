import React, { useEffect, useState } from "react";
import arquivocsv_vn1 from "../csv/vocabulario/vocabulary_n1.csv";
import Perguntas from "../components/Perguntas";



const N1vocab = () =>{

    const [vocabularioN1, setVocabularioN1] = useState("");

    const parseCSV= (text) => {
        var vocabulario= text.split("\n");
        console.log(vocabulario);
        return vocabulario;
    }

    useEffect(()=>{
        fetch(arquivocsv_vn1)
        .then((r) => r.text())
        .then((text) => {
            setVocabularioN1(parseCSV(text));
        });
    }, []);
   
    return(
        <div>
            <Perguntas texto={vocabularioN1} limite={vocabularioN1.length}/>
        </div>
    )

}


export default N1vocab;