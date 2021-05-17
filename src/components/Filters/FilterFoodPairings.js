function FilterFoodPairings() {

    return (
        <div className="app_filter mt-5">
        <div className="row">
            <div className="col-md-12">
              <h4 className="font-weight-bold">Food pairings</h4>
            </div>
            <div className="col-md-12 mt-3">
              <div className="form-group has-filter">
                  <span className="fa fa-search form-control-feedback-filter"></span>
                  <input type="text" className="form-control filter" placeholder="Search food pairings"/>
                  <hr style={{marginTop: '0'}} />
              </div>
              <button type="button" className="btn btn-outline-danger btn-round mr-2">Poultry</button>
              <button type="button" className="btn btn-outline-danger btn-round mr-2">Rich fish (salmon, tuna etc)</button>
              <button type="button" className="btn btn-outline-danger btn-round mr-2">Spicy food</button>
              <button type="button" className="btn btn-outline-danger btn-round mt-2 mr-2">Sweet desserts</button>
              <button type="button" className="btn btn-outline-danger btn-round mt-2 mr-2">Veal</button>
            </div>
            <div className="col-md-12 mt-2">
              <a href="#">Show All</a>
            </div>
        </div>
     </div>
    );
}

export default FilterFoodPairings;