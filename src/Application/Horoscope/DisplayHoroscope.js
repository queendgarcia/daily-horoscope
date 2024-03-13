import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import {horoscopeData} from "./HoroscopeData";

const DisplayHoroscope = () => {

  return (
    <Row className="pb-5">
      {
        horoscopeData && horoscopeData.length > 0 ?
        horoscopeData.map( data => {
          return (
            <Col className="my-3" md={6} lg={4}>
              <Card>
                <Card.Title className="text2">{data.zodiacSign}</Card.Title>
                <Card.Body>{data.reading}</Card.Body>
                <Card.Footer>{data.dates}</Card.Footer>
              </Card>
            </Col>
          )
        })
        :
        <h1>NO DATA AVAILABLE RIGHT NOW</h1>
      }
    </Row>
  )
}

export default DisplayHoroscope