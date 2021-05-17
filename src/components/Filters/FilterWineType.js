
function FilterWineType() {
    return (
        <div className="app_filter">
        <div className="row">
            <div className="col-md-6">
              <h4 className="font-weight-bold">Wine Types</h4>
            </div>
            <div className="col-md-6">
               <span className="float-right">Select multiple</span>
            </div>
            <div className="col-md-12 mt-3">
                <div className="row">
                    <div className="col-md-4">
                        <button className="btn btn-red btn-block btn-round">Red</button>
                    </div>
                    <div className="col-md-4">
                        <button className="btn btn-outline-danger btn-block btn-round">White</button>
                    </div>
                    <div className="col-md-4">
                        <button className="btn btn-outline-danger btn-block btn-round">Sparkling</button>
                    </div>
                    <div className="col-md-4">
                        <button className="btn btn-outline-danger btn-block btn-round mt-3">Rosé</button>
                    </div>
                    <div className="col-md-4">
                        <button className="btn btn-outline-danger btn-block btn-round mt-3">Dessert</button>
                    </div>
                    <div className="col-md-4">
                        <button className="btn btn-outline-danger btn-block btn-round mt-3">Fortified</button>
                    </div>
                </div>
            </div>
        </div>
     </div>
    );
}

export default FilterWineType;