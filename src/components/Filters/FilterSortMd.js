import {Dropdown} from 'react-bootstrap';

function FilterSortMd() {

    return (
        <div className="col-md-12 mb-3 mt-2 hide_on_sm">
        <Dropdown>
         <Dropdown.Toggle variant="light" id="dropdown-sort" className="float-right sort-dropdown">
           Sort :
         </Dropdown.Toggle>
           <Dropdown.Menu style={{borderRadius: '10px', border : 'none', boxShadow:' 0px 4px 30px rgba(22, 33, 74, 0.08)'}}>
             <Dropdown.Header>Sort:</Dropdown.Header>
             <Dropdown.Item href="#/action-1">Highest User Rating</Dropdown.Item>
             <Dropdown.Item href="#/action-2">Discount</Dropdown.Item>
             <Dropdown.Item href="#/action-3">Price: Low to High</Dropdown.Item>
             <Dropdown.Item href="#/action-3">Price: High to Low</Dropdown.Item>
             <Dropdown.Item href="#/action-3">Popular</Dropdown.Item>
           </Dropdown.Menu>
        </Dropdown>
       </div>

    );
}

export default FilterSortMd;