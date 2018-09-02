import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { triggerLogout } from '../../redux/actions/loginActions';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import { Row, Col } from 'react-material-responsive-grid';

// client side routes

class AdminNav extends Component {

  logOutUser = () => {
    this.props.dispatch(triggerLogout());
  }

  render() {
    return (
      <div className="navbar">
        <Header />
        <Row
          end={['md', 'lg']}
          center={['xs4']}
        >
          <Col xs4={1} md={12} lg={12}>
            <ul>
              <li>
                <Link to="/home"
                  onClick={() => this.logOutUser()}
                >
                  Log Out
                </Link>
              </li>
              <li>
                <Link to="/profile">
                  Profile
            </Link>
              </li>
              <li>
                <Link to="/volunteers">
                  Manage Volunteers
            </Link>
              </li>
              <li>
                <Link to="/events">
                  Manage Events
            </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    )
  }
}

export default connect()(AdminNav);