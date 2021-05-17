import {Row, Container, Dropdown} from 'react-bootstrap';
import {Helmet} from "react-helmet";

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/font-awesome.min.css';
import './styles/app.css';
import './styles/checkbox.css';
import './styles/star-rating.css';
import 'rc-slider/assets/index.css';
import "@fremtind/jkl-radio-button/radio-button.min.css";

import DropDownProvider  from './providers/DropDownProvider';

import BottomBar      from './components/Header/BottomBar';
import TopBar         from './components/Header/TopBar';
import Footer         from './components/Footer/Footer';
import Products       from './components/Products/Products';
import Sidebar        from './components/Sidebar/Sidebar';
import FilterSortSm   from './components/Filters/FilterSortSm';
import FilterSortMd   from './components/Filters/FilterSortMd';
import FilterStatus   from './components/Filters/FilterStatus';
import FilterDrawer   from './components/Filters/FilterDrawer';

function App() {

  return (
    <div className="app_container">
       <Helmet>
          <title>Red Wine, above $0, rated 3.5 or more</title>
        </Helmet>
       <DropDownProvider>
           <TopBar/>
           <BottomBar/>
       </DropDownProvider>
       <FilterDrawer/>
       <div className="app_wrapper">
          <Container>
              <Row>
                  <FilterSortSm/>
                  <FilterStatus/>
                  <FilterSortMd/>
                  <Sidebar/>
                  <Products/>          
              </Row>
          </Container>
       </div>
      <Footer/>
    </div>
  );
}

export default App;
