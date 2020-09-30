import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Navbar, Grid, Row, Col } from 'react-bootstrap';
import ProductList from '../AppComponents/productList';
import ShoppingCart from '../AppComponents/shoppingCart';
import { userActions } from '../_actions';
import { loadProducts } from '../_actions/actionCreators';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.getUsers();
        this.props.loadProducts();
    }

    render() {
        const { user } = this.props;
        return (
            <div className="col-md-6 col-md-offset-3" id='homepageComponent'>
                <h1>Hi {user.firstName}!</h1>
                <p>
                    <Link to="/login">Logout</Link>
                </p>
                <Navbar>
                    <Row>
                    <Col sm={8}>
                        <ProductList />
                    </Col>
                    <Col sm={4}>
                        <ShoppingCart />
                    </Col>
                </Row>
              </Navbar>
            </div>
        );
    }
}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
    loadProducts: userActions.loadProducts
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };