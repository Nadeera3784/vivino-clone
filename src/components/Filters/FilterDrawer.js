import {Row, Container} from 'react-bootstrap';
import { useContext } from 'react';

import {DrawerContext}  from '../../providers/DrawerProvider';

function FilterDrawer() {

    
  const { isOpen , setIsOpen} = useContext(DrawerContext);
  
  const onClickWineFilterClose = function(){ 
    setIsOpen(true);
  }

    return (
       <div className={isOpen ? 'app_sidebar_drawer show' : 'app_sidebar_drawer'}>
         <div className="card-header">
              <a  href="#" onClick={() => onClickWineFilterClose()} className="text-muted">
                <i className="fa fa-arrow-left fa-lg mr-4"></i>
                  Back
              </a>
          </div>
            <Container>
                <Row>
                    <div className="col-md-12">
                        <Row>
                            <div className="col-6 col-sm-6">
                            <div className="drawer_link_container">
                                <h2 className="title"><a href="#" className="text-dark">Red</a></h2>
                                    <ul className="list-unstyled">
                                        <li><a href="#" title=""> Southern Italy Red</a></li>
                                        <li><a href="#" title=""> Tuscan Red</a></li>
                                        <li><a href="#" title=""> Spanish Rioja Red</a></li>
                                        <li><a href="#" title=""> South African Pinotag</a></li>  
                                        <li><a href="#" title=""> Italian Amarone</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-6 col-sm-6">
                            <div className="drawer_link_container">
                                <h2 className="title"><a href="#" className="text-dark">White</a></h2>
                                    <ul className="list-unstyled">
                                        <li><a href="#" title=""> German Riesling</a></li>
                                        <li><a href="#" title=""> Northern Italy White</a></li>
                                        <li><a href="#" title=""> German Sauvignon Bl</a></li>
                                        <li><a href="#" title=""> German Grauburgund</a></li>  
                                        <li><a href="#" title=""> New Zealand Sauvig</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-12">
                            <div className="drawer_link_container">
                                <h2 className="title"><a href="#" className="text-dark">Sparkling</a></h2>
                                </div>
                            </div>
                            <div className="col-md-12">
                            <div className="drawer_link_container">
                                <h2 className="title"><a href="#" className="text-dark">Rosé</a></h2>
                                </div>
                            </div>
                            <div className="col-md-12">
                            <div className="drawer_link_container">
                                <h2 className="title"><a href="#" className="text-dark">Port</a></h2>
                                </div>
                            </div>
                            <div className="col-md-12">
                            <div className="drawer_link_container">
                                <h2 className="title"><a href="#" className="text-dark">Dessert</a></h2>
                                </div>
                            </div>
                        </Row>
                    </div>
                </Row>
            </Container>
       </div>
    );
}

export default FilterDrawer;