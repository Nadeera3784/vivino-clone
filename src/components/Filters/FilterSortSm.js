import {Row, Container} from 'react-bootstrap';
import {useState} from 'react';

import FilterWineTypeSm     from '../Filters/FilterWineTypeSm';
import FilterPriceRange   from '../Filters/FilterPriceRange';
import FilterFoodPairings from '../Filters/FilterFoodPairings';
import FilterWineStyles   from '../Filters/FilterWineStyles';
import FilterCountries    from '../Filters/FilterCountries';
import FilterRegions      from '../Filters/FilterRegions';
import FilterGrapes       from '../Filters/FilterGrapes';
import FilterUserRatingSm   from '../Filters/FilterUserRatingSm'

function FilterSortSm() {

    const [visibility, setVisibility] = useState(false);

    const [genericVisibility, setGenericVisibility] = useState(false);

    const onClickSortFilter = function(){ 
        setVisibility(!visibility);   
    }
    
    const onClickSortFilterClose = function(){ 
        setVisibility(false);
    }

    
    const onClickGenericFilter = function(){ 
        setGenericVisibility(!visibility);   
    }
    
    const onClickGenericFilterClose = function(){ 
        setGenericVisibility(false);
    }
      
    return (
        <div className="col-md-12 hide_on_md mb-5">
            <Row>
                <div className="col">
                    <button type="button" onClick={() => onClickGenericFilter()} className="btn btn-outline-danger btn-round btn-block">Filter</button>
                </div>

                <div className="col">
                    <button type="button" onClick={() => onClickSortFilter()} className="btn btn-outline-danger btn-round btn-block">Sort</button>
                </div>
            </Row>

            <div className={visibility ? 'ui_model__popup opened' : 'ui_model__popup'}  style={{zIndex:'9999'}}>
                <div className="ui_model__close" onClick={() => onClickSortFilterClose()}></div>
                <div className="ui_model__inner">
                    <div className="ui_model__inner_container">
                        <div className="ui_model_header">
                            <h3 className="text-center">Sort</h3>
                        </div>
                        <div className="sort_link_container">
                            <a href="#">Highest User Rating</a>
                        </div>
                        <div className="sort_link_container">
                            <a href="#">Discount</a>
                        </div>
                        <div className="sort_link_container">
                            <a href="#">Price: Low to High</a>
                        </div>
                        <div className="sort_link_container">
                            <a href="#">Price: High to Low</a>
                        </div>
                        <div className="sort_link_container">
                            <a href="#">Popular</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={genericVisibility ? 'ui_model__popup opened' : 'ui_model__popup'}  style={{zIndex:'9999'}}>
                <div className="ui_model__close" onClick={() => onClickGenericFilterClose()}></div>
                <div className="ui_model__inner">
                    <div className="ui_model__inner_container">
                        <div className="ui_model_header">
                            <h3 className="text-center">Filters</h3>
                        </div>
                        <Container>
                          <FilterWineTypeSm/>
                          <FilterPriceRange/>
                          <FilterUserRatingSm/>
                          <FilterGrapes/>
                          <FilterRegions/>
                          <FilterCountries/>
                          <FilterWineStyles/>
                          <FilterFoodPairings/>
                        </Container>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default FilterSortSm;