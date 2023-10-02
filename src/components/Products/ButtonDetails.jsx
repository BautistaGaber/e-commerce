const ButtonDetails = ({buttonName}) => {

    return(
        <div className="button-details">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                {buttonName}
            </button>
        </div>
    ) 
}

export default ButtonDetails