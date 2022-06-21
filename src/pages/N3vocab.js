import React, { useEffect, useState } from "react";
import arquivocsv_vn3 from "../csv/vocabulario/vocabulary_n3.csv";
import Perguntas from "../components/Perguntas";



const N3vocab = () =>{

    const [vocabularioN3, setVocabularioN3] = useState("");

    const parseCSV= (text) => {
        var vocabulario= text.split("\n");
        console.log(vocabulario);
        return vocabulario;
    }

    useEffect(()=>{
        fetch(arquivocsv_vn3)
        .then((r) => r.text())
        .then((text) => {
            setVocabularioN3(parseCSV(text));
        });
    }, []);
   
    return(
        <div>
            <Perguntas texto={vocabularioN3} limite={vocabularioN3.length}/>
        </div>
    )

}


export default N3vocab;