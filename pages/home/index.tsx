import React, { useState } from 'react';
import { Container ,Row, Col} from 'react-bootstrap';

import { ILocation } from '../../interfaces';

import Map from "../../components/map/index";
import UploadFile from '../../components/uploadFile';
import NavbarComponent from '../../components/navbar';

const Home = () => {
 
  const [locations, setLocations] = useState<ILocation[]>([]);

    return(
      <div className="App topNavbar">
        <NavbarComponent/>
        <Container className="mainContainer">
          <Row>
            <Col>
              <UploadFile setLocations={setLocations}/>
            </Col>
          </Row>
          <Map locations={locations}/>
        </Container>
      </div>
    )
  }

export default Home;