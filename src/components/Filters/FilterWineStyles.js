function FilterWineStyles() {

    return (
        <div className="app_filter mt-5">
        <div className="row">
            <div className="col-md-12">
              <h4 className="font-weight-bold">Wine styles</h4>
            </div>
            <div className="col-md-12 mt-3">
              <div className="form-group has-filter">
                  <span className="fa fa-search form-control-feedback-filter"></span>
                  <input type="text" className="form-control filter" placeholder="Search wine styles"/>
                  <hr style={{marginTop: '0'}} />
              </div>
              <button type="button" className="btn btn-outline-danger btn-round mr-2">Argentinian Malbec</button>
              <button type="button" className="btn btn-outline-danger btn-round mr-2">Californian Cabernet Sauvignon</button>
              <button type="button" className="btn btn-outline-danger btn-round mt-2 mr-2">Central Italy Red</button>
              <button type="button" className="btn btn-outline-danger btn-round mt-2 mr-2">Spanish Red</button>
              <button type="button" className="btn btn-outline-danger btn-round mt-2 mr-2">Spanish Rioja Red</button>
            </div>
        </div>
     </div>
    );
}

export default FilterWineStyles;