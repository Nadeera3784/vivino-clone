import {useState, forwardRef, useContext} from 'react';
import {Popover, Button, OverlayTrigger, Modal, Dropdown} from 'react-bootstrap';

import {DropDownContext}  from '../../providers/DropDownProvider';

import login_image from '../../images/login.jpg';
import logo from '../../images/logo.png';

function TopBar() {

   const { show , setShow} = useContext(DropDownContext);
  
   const [visibility, setVisibility] = useState(false);

   const [searchBarvisibility, setSearchBarVisibility] = useState(false);
 
   const [loginModeVisibilityl, setLoginModeVisibilityl] = useState(false);
 
   const handleClose = () => setLoginModeVisibilityl(false);
   const handleShow = () => setLoginModeVisibilityl(true);
 
   const onClickUserFilter = function(){ 
     setVisibility(!visibility);   
   }
 
   const onClickUserFilterClose = function(){ 
     setVisibility(false);
   }
 
   const onClickSearchBar = function(){ 
     setSearchBarVisibility(true);   
   }
 
   const onClickSearchBarClose = function(){ 
     setSearchBarVisibility(false);
   }

  const onClickDropDown = function(){ 
    setShow(true);   
  }
 
   
   
  const shipping_popover = (
   <Popover  className="ship_popover">
     <Popover.Content>
      <div className="ship_popover_container">
           <ul className="ship_popover_list">
               <li className="ship_popover_item">
                 <a className="ship_popover_item_link" href="#">Australia</a>
               </li>
               <li className="ship_popover_item">
                 <a className="ship_popover_item_link" href="#">Belgium</a>
               </li>
               <li className="ship_popover_item">
                 <a className="ship_popover_item_link" href="#">Brazil</a>
               </li>
               <li className="ship_popover_item">
                 <a className="ship_popover_item_link" href="#">Canada</a>
               </li>
               <li className="ship_popover_item">
                 <a className="ship_popover_item_link" href="#">Denmark</a>
               </li>
               <li className="ship_popover_item">
                 <a className="ship_popover_item_link" href="#">France</a>
               </li>
               <li className="ship_popover_item">
                 <a className="ship_popover_item_link" href="#">Germany</a>
               </li>
               <li className="ship_popover_item">
                 <a className="ship_popover_item_link" href="#">Hong Kong</a>
               </li>
               <li className="ship_popover_item">
                 <a className="ship_popover_item_link" href="#">Ireland</a>
               </li>
               <li className="ship_popover_item">
                 <a className="ship_popover_item_link" href="#">Italy</a>
               </li>
               <li className="ship_popover_item">
                 <a className="ship_popover_item_link" href="#">Monaco</a>
               </li>
               <li className="ship_popover_item">
                 <a className="ship_popover_item_link" href="#">Netherlands</a>
               </li>
           </ul>
      </div>
     </Popover.Content>
   </Popover>
 );

 const language_popover = (
   <Popover  className="ship_popover">
     <Popover.Content>
      <div className="ship_popover_container">
           <ul className="ship_popover_list">
               <li className="ship_popover_item">
                 <a className="ship_popover_item_link" href="#">Dansk</a>
               </li>
               <li className="ship_popover_item">
                 <a className="ship_popover_item_link" href="#">Deutsch</a>
               </li>
               <li className="ship_popover_item">
                 <a className="ship_popover_item_link" href="#">English</a>
               </li>
               <li className="ship_popover_item">
                 <a className="ship_popover_item_link" href="#">Español</a>
               </li>
               <li className="ship_popover_item">
                 <a className="ship_popover_item_link" href="#">Français</a>
               </li>
               <li className="ship_popover_item">
                 <a className="ship_popover_item_link" href="#">Italiano</a>
               </li>
               <li className="ship_popover_item">
                 <a className="ship_popover_item_link" href="#">Nederlands</a>
               </li>
               <li className="ship_popover_item">
                 <a className="ship_popover_item_link" href="#">Português</a>
               </li>
               <li className="ship_popover_item">
                 <a className="ship_popover_item_link" href="#">Svenska</a>
               </li>
           </ul>
      </div>
     </Popover.Content>
   </Popover>
 );
 

    return (
       <nav className="navbar navbar-expand-md navbar-light bg-white fixed-top" style={{marginTop : '0px'}}>

        <div className="container">
            <button className="navbar-toggler" type="button" onClick={() => onClickDropDown()}  aria-controls="main-dropdown-collapse"  aria-expanded={show}>
                <div className={show ? 'hamburger-menu-icon open' : 'hamburger-menu-icon'}><span></span><span></span><span></span></div>
            </button>   
            <a className="navbar-brand" href="#">
              vivino
            </a>

            <div className="form-group has-search">
                <span className="fa fa-search form-control-feedback"></span>
                <input type="text" className="form-control" placeholder="Search any wine"/>
            </div>

            <div className="navbar_right">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown">
                      <OverlayTrigger trigger="click" placement="bottom" rootClose overlay={shipping_popover}>
                        <a className="nav-link dropdown-toggle" href="#" style={{fontSize : '13px'}}>Ship to</a>
                      </OverlayTrigger>
                    </li>

                    <li className="nav-item dropdown">
                        <div className="dropdown_container">
                          <OverlayTrigger trigger="click" placement="bottom" rootClose overlay={language_popover}>
                          <a className="nav-link dropdown-toggle" href="#" style={{fontSize : '13px', padding: '0px 1rem'}}>
                          Language
                          </a>
                          </OverlayTrigger>
                          <span className="selected_option">English</span>
                        </div>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={() => handleShow()}><span className="fa fa-user-o fa-lg"></span></a>
                    </li>
                </ul>
            </div>

            <div className="navbar_right_mobile">
                <div className="ml-auto">
                    <button type="button" onClick={() => handleShow()} className="btn btn-default"><span className="fa fa-user-o fa-lg"></span></button>
                    <button type="button" className="btn btn-default" onClick={() => onClickSearchBar()}><span className="fa fa-search fa-lg"></span></button>
                </div>

                <form  role="search"  className={searchBarvisibility ? 'top-nav-search' : 'collapse'}>
                  <div className="input-group">
                    <input type="text" name="example-input1-group2" className="form-control" placeholder="Search"/>
                    <span className="input-group-btn">
                    <button type="button" onClick={() => onClickSearchBarClose()} className="btn btn-default"><i className="fa fa-remove fa-36x"></i></button>
                    </span>
                  </div>
				        </form>

            </div>

            <div className={visibility ? 'ui_model__popup opened' : 'ui_model__popup'}>
                <div className="ui_model__close" onClick={() => onClickUserFilterClose()}></div>
                <div className="ui_model__inner">
                    <div className="ui_model__inner_container">
                        <div className="vehicle-filter accordion vehicle_filter_onliy_side">
                            <h3 className="text-center">Filter Vehicles</h3>
                        </div>
                    </div>
                </div>
            </div>

            
            <Modal show={loginModeVisibilityl} onHide={handleClose}>
            <Modal.Header closeButton>
            </Modal.Header>
            <div className="contianer">
              <div className="row no-gutters">
                <div className="col-md-5 login_img">
                  <div className="d-flex">
                      <img src={login_image} style={{borderRadius: "10px 0 0 10px"}}/>
                  </div>
              </div>
                <div className="col-md-7 mt-5 p-md-5 p-xs-4">
                  <div className="container">
                    <h3 className="mb-4"><span className="text-red">Join Vivino</span> | Log in</h3>
                    <form>
                      <div className="form-group">
                        <input type="email" className="form-control form-control-lg" placeholder="Type your emaill"></input>
                      </div>
                      <button type="submit" className="btn btn-lg btn-red btn-round btn-block">Continue</button>
                    </form>
                    
                    <div className="text-center mt-3 mb-3">
                        <h5>or</h5>
                    </div>
                    <button type="button" className="btn btn-lg btn-black btn-round btn-block text-left mb-4"><span className="fa fa-apple mr-2"></span>  Continue with Apple</button>
                    <button type="button" className="btn btn-lg btn-blue btn-round btn-block text-left  mb-4"><span className="fa fa-facebook mr-2"></span>  Continue with Facebook</button>
                    <button type="button" className="btn btn-lg btn-white btn-round btn-block text-left"><span className="fa fa-google mr-2"></span>  Continue with Google</button>

                    <div className="float-right text-right mt-3">
                      <p>Don't have a profile? <br/>
                        <a className="text-right" href="#">Join Vivino</a>
                      </p>
                    </div>
                    </div>
                </div>
              </div>
              </div>
          </Modal>
          <br/>  


        </div>
       </nav>
    );
}

export default TopBar;