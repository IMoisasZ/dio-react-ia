interface ImgOptions {
    source: string,
    alternative: string,
    width: number,
    style?: React.CSSProperties //optional
}

export function MarketImage() {

    const imageOptions: ImgOptions = {
        source: "https://images.unsplash.com/photo-1593260085573-8c27e72cdd79?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alternative: 'Market',
        width: 300,
        style: {borderRadius: 8}
    }
    
    return (
        <img src={imageOptions.source} alt={imageOptions.alternative} width={`${imageOptions.width}px`} style={imageOptions.style}/>
    )
}