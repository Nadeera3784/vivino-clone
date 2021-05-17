function FilterCountries() {

    return (
        <div className="app_filter mt-5">
        <div className="row">
            <div className="col-md-12">
              <h4 className="font-weight-bold">Countries</h4>
            </div>
            <div className="col-md-12 mt-3">
              <div className="form-group has-filter">
                  <span className="fa fa-search form-control-feedback-filter"></span>
                  <input type="text" className="form-control filter" placeholder="Search countries"/>
                  <hr style={{marginTop: '0'}} />
              </div>
              <button type="button" className="btn btn-outline-danger btn-round mr-2">Argentina</button>
              <button type="button" className="btn btn-outline-danger btn-round mr-2">Australia</button>
              <button type="button" className="btn btn-outline-danger btn-round mr-2">Austria</button>
              <button type="button" className="btn btn-outline-danger btn-round mt-2 mr-2">Chile</button>
              <button type="button" className="btn btn-outline-danger btn-round mt-2 mr-2">France</button>
              <button type="button" className="btn btn-outline-danger btn-round mt-2 mr-2">Germany</button>
              <button type="button" className="btn btn-outline-danger btn-round mt-2 mr-2">Italy</button>
              <button type="button" className="btn btn-outline-danger btn-round mt-2 mr-2">Portugal</button>
              <button type="button" className="btn btn-outline-danger btn-round mt-2 mr-2">Spain</button>
              <button type="button" className="btn btn-outline-danger btn-round mt-2 mr-2">United States</button>
            </div>
        </div>
     </div>
    );
}

export default FilterCountries;