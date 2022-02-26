function Text({children, className="", onClick}) {
    return (
        <div className={`${className} truncate`} onClick={onClick}>
            {children}
        </div>
    )
}

export default Text