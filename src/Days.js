import React, { Component } from "react";
import { Grid } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Thumbnail } from "react-bootstrap";
import { Button } from "react-bootstrap";

class Days extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={6} md={8}>
                        <Thumbnail >
                            <img height={160} width={160} src={this.props.src} />
                            <h4>{this.props.day}</h4>
                            <h3>{this.props.temp}</h3>
                            <p>
                                <Button bsStyle="primary"> See Hourly Update</Button>
                            </p>
                        </Thumbnail>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Days;