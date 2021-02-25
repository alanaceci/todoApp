import '../css/Clear.css'

const Clear = ({clearList}) => {
    const handleClick = (e) => {
        e.preventDefault();
        clearList();
    }
    return (
        <div>
            <button onClick={handleClick} className="clear"> Clear </button>
        </div>
    );
}

export default Clear;