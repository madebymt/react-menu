import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Menu from './components/Menu';
import Findus from './components/Findus';
import About from './components/About'
import BaseLayout from './components/Layout'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
      <BaseLayout>
         // dont need to put Link here
         <Route path="/menu" component={Menu} />
         <Route path="/findus" component={Findus} />
         <Route path= "/" component={About}/>

       </BaseLayout>
     </BrowserRouter>

,document.getElementById('root'));
registerServiceWorker();
