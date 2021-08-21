import React, { Component } from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';


export default class App extends Component {
    
    state = {
        showRandomChar: true
    };

    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                showRandomChar : !state.showRandomChar
            }
        })
    }
    
    render() {

        const char = this.state.showRandomChar ? <RandomChar/> : null;

        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {char}
                            <Button 
                            color="primary" size="lg" block
                            onClick={this.toggleRandomChar}>Toggle Random</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
};

