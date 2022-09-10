import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CreateBlog from '../CreateBlog';
import DetailBlog from '../DetailBlog';
import Home from '../Home';
import { Footer, Header, Jumbotron } from '../../components';
// import './mainApp.scss';

const MainApp = () => {
  return (
    <>
        <Header />
        <main>
        <Jumbotron />
        <Router>
            <Switch>
                <Route path="/create-blog/:id?" component={CreateBlog}/>
                <Route path="/detail-blog/:id" component={DetailBlog}/>
                <div className='album py-5 bg-light'>
                    <div className='container'>
                        <Route path="/" component={Home}/>
                    </div>
                </div>
            </Switch>
        </Router>
        </main>
        <Footer />
    </>
  )
}

export default MainApp