import '../VerCliente.css'

function FilaDetalles(props) {
    return (
        <div className="row">
            <div className="col-2 mx-0 ps-3 pe-0">
                <span className="input-group-text bg-spanv ">{ props.text1 }</span>
            </div>
            <div className="col mx-0 px-0">
                <span className="input-group-text bg-textv border-text">{props.text2}</span>
            </div>
            <div className="col-2 mx-0 px-0">
                <span className="input-group-text bg-spanv">{props.text3}</span>
            </div>
            <div className="col mx-0 ps-0 pe-3">
                <span className="input-group-text bg-textv border-text">{props.text4}</span>
            </div>
        </div>
    );
}

export default FilaDetalles;