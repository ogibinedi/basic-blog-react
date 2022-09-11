import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CreateBlog from '../CreateBlog';
import DetailBlog from '../DetailBlog';
import Home from '../Home';
import { Footer, Header, Jumbotron} from '../../components';

const MainApp = () => {
  return (
    <React.Fragment>
        <Header />
        <Jumbotron />
        <Router>
            <Switch>
                <Route path="/create-blog/:id?" component={CreateBlog}/>
                <Route path="/detail-blog/:id" component={DetailBlog}/>
                        <Route path="/" component={Home}/>
            </Switch>
        </Router>
        <Footer />
    </React.Fragment>
  )
}

export default MainApp