function Image({type, url, alt}){

    return(
        <div className={type}>
            <img src={url} alt={alt} />
        </div>
    )
}

export default Image;