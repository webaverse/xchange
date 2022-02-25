function Alert({children}) {
    return (
        <div className="alert-toast fixed bottom-4 backdrop-blur-sm bg-neutral-850/90  text-white flex flex-col md:w-2/5 w-4/5 p-4 z-10">{children}</div>
    )    
}

export default Alert