function Text({children, className=""}) {
    return (
        <div className={`${className} truncate`}>
            {children}
        </div>
    )
}

export default Text