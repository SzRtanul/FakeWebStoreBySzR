function Termek(props){
    return <div className="col">
                <div className="card h-100">
                    <div className="card-header bg-transparent border-success">
                        {props.termek.title}
                    </div>
                    <div className="card-body"> ... </div>
                    <div className="card-footer"> 
                        <button className="btn btn-primary card-link" onclick>Kosárba</button>
                    </div>
                </div>
            </div>;
}

export default Termek;