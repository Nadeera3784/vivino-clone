
function FilterWineTypeSm() {
    return (
        <div className="app_filter">
        <div className="row">
            <div className="col mt-3">
              <h4 className="float-left font-weight-bold">Wine Types</h4>
            </div>
            <div className="col mt-3">
               <span className="float-right">Select multiple</span>
            </div>
            <div className="clearfix"></div>
            <div className="col-md-12 mt-3">
                <div className="row">
                    <div className="col-4 col-sm-4">
                        <button className="btn btn-outline-danger btn-block btn-sm btn-round">Red</button>
                    </div>
                    <div className="col-4 col-sm-4">
                        <button className="btn btn-outline-danger btn-sm btn-block btn-round">White</button>
                    </div>
                    <div className="col-4 col-sm-4">
                        <button className="btn btn-outline-danger btn-sm btn-block btn-round">Sparkling</button>
                    </div>
                    <div className="col-4 col-sm-4">
                        <button className="btn btn-outline-danger btn-sm btn-block btn-round mt-3">Rosé</button>
                    </div>
                    <div className="col-4 col-sm-4">
                        <button className="btn btn-outline-danger btn-sm btn-block btn-round mt-3">Dessert</button>
                    </div>
                    <div className="col-4 col-sm-4">
                        <button className="btn btn-outline-danger btn-sm btn-block btn-round mt-3">Fortified</button>
                    </div>
                </div>
            </div>
        </div>
     </div>
    );
}

export default FilterWineTypeSm;