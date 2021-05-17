import { Range } from 'rc-slider';

function FilterPriceRange() {

    return (
        <div className="app_filter mt-5">
        <div className="row">
            <div className="col-md-12">
              <h4 className="font-weight-bold">Price Range</h4>
            </div>
            <div className="col-md-12 mt-3">
               <div className="row mb-3">
                  <div className="col-md-6">
                      $0
                  </div>
                  <div className="col-md-6">
                      <span className="float-right">$500+</span>
                  </div>
               </div>
               <div className="row">
                  <div className="col-md-12">
                    <Range allowCross={false} defaultValue={[0, 500]} min={0} max={500}/>
                  </div>
               </div>
            </div>
        </div>
     </div>
    );
}

export default FilterPriceRange;