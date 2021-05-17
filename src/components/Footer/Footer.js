import google_play_icon from '../../images/google-play.svg';
import app_store_icon from '../../images/app-store.svg';
import visa_icon from '../../images/visa-icon.svg';
import american_express_icon from '../../images/american-express-icon.svg';
import master_card_icon from '../../images/master-card-icon.svg';
import discover_icon from '../../images/discover-icon.svg';
import ipay_icon from '../../images/ipay-icon.svg';
import google_pay_icon from '../../images/google-pay-icon.svg';
import paypal_icon from '../../images/paypal-icon.svg';

const payment_icon_style = {
    margin: "0 0 0 16px",
    width: "48"
};

const footer_social_icons = {
    margin: "0 0 0 16px",
    width: "48",
    color : "#1e1e1e"
}

  
function Footer() {
    return (
        <footer>
        <div className="app_footer_top pb-5 pt-5">
          <div className="container">
              <h2 className="font-weight-bold">Trusted by millions to discover and buy the right wine every time.</h2>
              <div className="row">
                  <div className="col-md-3 p20">
                    <div className="d-flex">
                      <div className="app_footer_icon">
                        <i className="fa fa-circle-o fa-lg" aria-hidden="true"></i>
                      </div>
                      <div className="app_footer_text">
                         Shop the world’s largest wine marketplace
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 p20">
                    <div className="d-flex">
                      <div className="app_footer_icon">
                        <i className="fa fa-circle-o fa-lg" aria-hidden="true"></i>
                      </div>
                      <div className="app_footer_text">
                        Our support team is always here to help
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 p20">
                    <div className="d-flex">
                      <div className="app_footer_icon">
                        <i className="fa fa-circle-o fa-lg" aria-hidden="true"></i>
                      </div>
                      <div className="app_footer_text">
                        Careful delivery right to your doorstep
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 p20">
                    <div className="d-flex">
                      <div className="app_footer_icon">
                        <i className="fa fa-circle-o fa-lg" aria-hidden="true"></i>
                      </div>
                      <div className="app_footer_text">
                        Check honest reviews of any wine before purchase
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mt-3 display_on_sm hide_on_md">
                     <div className="text-center">
                        <img src={visa_icon} style={payment_icon_style}/>
                        <img src={american_express_icon} style={payment_icon_style}/>
                        <img src={master_card_icon} style={payment_icon_style}/>
                        <img src={discover_icon} style={payment_icon_style}/>
                        <img src={ipay_icon} style={payment_icon_style}/>
                        <img src={google_pay_icon} style={payment_icon_style}/>
                        <img src={paypal_icon} style={payment_icon_style}/>
                        <div><small>Payment options will vary by merchant</small></div>
                     </div>
                 </div>
              </div>
          </div>
        </div>
        <div className="app_footer_bottom pb-5 pt-4">
          <div className="container">
              <div className="row">
                 <div className="col-md-6 hide_on_sm">
                   <a href="#">
                     <img src={google_play_icon} className="mr-2"/>
                   </a>
                   <a href="#">
                    <img src={app_store_icon}/>
                    </a>
                 </div>
                 <div className="col-md-6 hide_on_sm">
                     <div className="float-right">
                        <img src={visa_icon} style={payment_icon_style}/>
                        <img src={american_express_icon} style={payment_icon_style}/>
                        <img src={master_card_icon} style={payment_icon_style}/>
                        <img src={discover_icon} style={payment_icon_style}/>
                        <img src={ipay_icon} style={payment_icon_style}/>
                        <img src={google_pay_icon} style={payment_icon_style}/>
                        <img src={paypal_icon} style={payment_icon_style}/>
                        <div className="text-right"><small>Payment options will vary by merchant</small></div>
                     </div>
                 </div>
                 <div className="col-md-10 mt-sm-5">
                   <div className="app_footer_container">
                     <a className="app_footer_link" href="#" title="App">App</a>
                     <a className="app_footer_link" href="#" title="About">About</a>
                     <a className="app_footer_link" href="#" title="Contact">Contact</a>
                     <a className="app_footer_link" href="#" title="Press">Press</a>
                     <a className="app_footer_link" href="#" title="Wine News">Wine News</a>
                     <a className="app_footer_link" href="#" title="Wine Style Awards">Wine Style Awards</a>
                     <a className="app_footer_link" href="#" title="Merchants">Merchants</a>
                     <a className="app_footer_link" href="#" title="Sponsorships">Sponsorships</a>
                     <a className="app_footer_link" href="#" title="Become an Affiliate">Become an Affiliate</a>
                     <a className="app_footer_link" href="#" title="Jobs">Jobs</a>
                     <a className="app_footer_link" href="#" title="Terms of Use">Terms of Use</a>
                     <a className="app_footer_link" href="#" title="Privacy Policy">Privacy Policy</a>
                     <a className="app_footer_link" href="#" title="Content Policy">Content Policy</a>
                     <a className="app_footer_link" href="#" title="Sitemap">Sitemap</a>
                    </div>
                 </div>
                 <div className="col-md-6 display_on_sm hide_on_md">
                   <a href="#" className="float-left">
                     <img src={google_play_icon} className="mr-2"/>
                   </a>
                   <a href="#" className="float-right">
                    <img src={app_store_icon}/>
                    </a>
                 </div>
                 <div className="col-md-2 mt-5">
                    <div className="app_footer_social_icon_container">
                        <a  style={footer_social_icons}  href="#"><i className="fa fa-instagram fa-lg"></i></a>
                        <a  style={footer_social_icons} href="#"><i className="fa fa-facebook fa-lg"></i></a>
                        <a  style={footer_social_icons} href="#"><i className="fa fa-twitter fa-lg"></i></a>
                    </div>
                    <small className="float-right">© Vivino 2021</small>
                 </div>
              </div>
          </div>
        </div>
     </footer>
    );
}

export default Footer;