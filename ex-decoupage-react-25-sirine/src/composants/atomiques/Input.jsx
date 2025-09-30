function Input({type, classe, placeholder}){

    return(
        <>
            <input type={type} className={classe} placeholder={placeholder} />
        </>
    )
}

export default Input;