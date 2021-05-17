import {useState} from 'react';
import Product from './Product';

import wine_image_01 from '../../images/wine01.png';
import wine_image_02 from '../../images/wine02.png';
import wine_image_03 from '../../images/wine03.png';
import wine_image_04 from '../../images/wine04.png';
import wine_image_05 from '../../images/wine05.png';


function Products() {

    const [products, setProducts] = useState([
        {
        id: 1,
        title: 'Pêra-Manca Tinto 1990',
        category : 'Cartuxa',
        made : 'Red wine from Napa Valley - United States',
        reviews : 245,
        Availability : 18,
        image : wine_image_01
        },
        {
        id: 2,
        title: 'Rattrapante Grenache 2012',
        category : 'Hundred Acre',
        made : 'Red wine from Napa Valley - United States',
        reviews : 174,
        Availability : 22,
        image : wine_image_02
        },
        {
        id: 3,
        title: 'The Absurd 2014',
        category : 'Realm',
        made : 'Red wine from Napa Valley - United States',
        reviews : 198,
        Availability : 8,
        image : wine_image_03
        },
        {
        id: 4,
        title: 'Minden Évlen 2007',
        category : 'Takler',
        made : 'Red wine from Szekszárd - Hungary',
        reviews : 165,
        Availability : 31,
        image : wine_image_04
        },
        {
        id: 5,
        title: 'Barolo Cascina Francia 2016',
        category : 'Giacomo Conterno',
        made : 'Red wine from Barolo - Italy',
        reviews : 98,
        Availability : 44,
        image : wine_image_05
        },
        {
        id: 6,
        title: 'Pêra-Manca Tinto 1990',
        category : 'Cartuxa',
        made : 'Red wine from Napa Valley - United States',
        reviews : 245,
        Availability : 18,
        image : wine_image_01
        },
        {
        id: 7,
        title: 'Rattrapante Grenache 2012',
        category : 'Hundred Acre',
        made : 'Red wine from Napa Valley - United States',
        reviews : 174,
        Availability : 22,
        image : wine_image_02
        },
        {
        id: 8,
        title: 'The Absurd 2014',
        category : 'Realm',
        made : 'Red wine from Napa Valley - United States',
        reviews : 198,
        Availability : 8,
        image : wine_image_03
        },
        {
        id: 9,
        title: 'Minden Évlen 2007',
        category : 'Takler',
        made : 'Red wine from Szekszárd - Hungary',
        reviews : 165,
        Availability : 31,
        image : wine_image_04
        },
        {
        id: 10,
        title: 'Barolo Cascina Francia 2016',
        category : 'Giacomo Conterno',
        made : 'Red wine from Barolo - Italy',
        reviews : 98,
        Availability : 44,
        image : wine_image_05
        },
    ]);

    return (
        <div className="col-md-8">
          <Product products={products}/>
       </div>
    );
}

export default Products;