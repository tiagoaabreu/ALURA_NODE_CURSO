


export function contaPalavras(text){
    const paragrafos = extraiParagrafo(text)
    const contagem = paragrafos.flatMap((paragrafo)=>{
        if(!paragrafo) return[]
        return verificarPalavraDuplicada(paragrafo)
    })
    return(contagem)
}


function extraiParagrafo(texto){
    return texto.toLowerCase().split('\n')
}



function limpaPalavras(palavra){
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-`~()]/g,'');
}


function verificarPalavraDuplicada(texto){
    const listaPalavra=texto.split(' ')
    const resultado={}
    listaPalavra.forEach(palavra => {
        if(palavra.length >=3){
        const palavraLimpa = limpaPalavras(palavra);
        resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) +1            
        }
        
    })
    return resultado
}
