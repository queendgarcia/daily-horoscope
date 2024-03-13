import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';

import moment from 'moment';
import "./app.css";
import DisplayHoroscope from './Horoscope/DisplayHoroscope';

const ApplicationComponent = () => {
  
  let dateToday = moment().format("MMM D YYYY");

  return (
    <>
      <Container className="background-blue">
        <Row className="pt-5">
          <Col>
            <div className="title-format">
              <p className="text1">DAILY</p>
              <p className="text2">({dateToday})</p>
            </div>
            <div className="text1">HOROSCOPE</div>
          </Col>
        </Row>
        <DisplayHoroscope />
      </Container>
    </>
  )
}

export default ApplicationComponent;