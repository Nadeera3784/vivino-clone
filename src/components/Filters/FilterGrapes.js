function FilterGrapes() {

    return (
        <div className="app_filter mt-5">
        <div className="row">
            <div className="col-md-12">
              <h4 className="font-weight-bold">Grapes</h4>
            </div>
            <div className="col-md-12 mt-3">
              <div className="form-group has-filter">
                  <span className="fa fa-search form-control-feedback-filter"></span>
                  <input type="text" className="form-control filter" placeholder="Search grapes"/>
                  <hr style={{marginTop: '0'}} />
              </div>

              <button type="button" className="btn btn-outline-danger btn-round mr-2">Cabernet Franc</button>
              <button type="button" className="btn btn-outline-danger btn-round mr-2">Cabernet Sauvignon</button>
              <button type="button" className="btn btn-outline-danger btn-round mr-2">Chardonnay</button>
              <button type="button" className="btn btn-outline-danger btn-round mt-2 mr-2">Grenache</button>
              <button type="button" className="btn btn-outline-danger btn-round mt-2 mr-2">Malbec</button>
              <button type="button" className="btn btn-outline-danger btn-round mt-2 mr-2">Merlot</button>
              <button type="button" className="btn btn-outline-danger btn-round mt-2 mr-2">Pinot Noir</button>
              <button type="button" className="btn btn-outline-danger btn-round mt-2 mr-2">Riesling</button>
              <button type="button" className="btn btn-outline-danger btn-round mt-2 mr-2">Sauvignon Blanc</button>
              <button type="button" className="btn btn-outline-danger btn-round mt-2 mr-2">Shiraz/Syrah</button>
            </div>
        </div>
     </div>
    );
}

export default FilterGrapes;