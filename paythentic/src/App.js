
import AppI from "./AppI";
 import AppT from "./AppT";
 import {BrowserRouter, Route} from 'react-router-dom';

export default function App(){



    return(
        <BrowserRouter>
        <Route path='/' exact component={AppT}/>
     <Route path='/mdirfan.code' component={AppI}/>
        </BrowserRouter>
        
    )

}

