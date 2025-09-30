function Bouton({type, classe, valeur}){

    return(
        <>
            <button type={type} className={classe}>{valeur}</button>
        </>
    )
}

export default Bouton;