import React, { Component } from 'react';
import { Tabs } from 'react-bootstrap';
import { Tab } from 'react-bootstrap';
import Days from './Days';
import cloudy from './cloudy.png';
import sunny from './sunny.png';
import { Well } from "react-bootstrap";
import rainy from './rainy.png';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Tabs defaultActiveKey={1} animation={false}>
          <Tab eventKey={1} title="Sunday">
            <Well>    </Well>
            <Days day="Sunday"
              temp="27 C | 23 C  ~  Cloudy"
              src={cloudy} />
          </Tab>
          <Tab eventKey={2} title="Monday">
            <Well>    </Well>
            <Days day="Monday"
              temp="32 C | 30 C  ~  Sunny"
              src={sunny} />
          </Tab>
          <Tab eventKey={3} title="Tuesday">
            <Well>    </Well>
            <Days day="Tuesday"
              temp="22 C | 18 C  ~  Rain"
              src={rainy} />
          </Tab>
          <Tab eventKey={4} title="Wednesday">
            <Well>    </Well>
            <Days day="Wednesday"
              temp="38 C | 33 C ~  Sunny"
              src={sunny} />
          </Tab>
          <Tab eventKey={5} title="Thursday">
            <Well>    </Well>
            <Days day="Thursday"
              temp="26  C | 23 C  ~ Rain"
              src={rainy} />
          </Tab>
          <Tab eventKey={6} title="Friday">
            <Well>    </Well>
            <Days day="Friday"
              temp="38 C | 35 C ~ Sunny"
              src={sunny} />
          </Tab>
          <Tab eventKey={7} title="Saturday">
            <Well>    </Well>
            <Days day="Saturday"
              temp="25 C | 23 C ~ Cloudy"
              src={cloudy} />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default App;
