import {Container, Row, Col, Form, Nav} from 'react-bootstrap';

const HeroComponent = () => {
    return (
        <section id='hero'>
            <Container className='mt-2'>
                <Row>
                    <Col lg={3}>
                        <Form>
                           <Form.Control 
                                type="text" 
                                placeholder="Search Game" 
                                data-bs-theme="dark" />
                        </Form>
                    </Col>
                    <Col lg={9}>
                    {/* <Nav variant="pills" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link href="">Discover</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">Popular</Nav.Link>
                        </Nav.Item>
                    </Nav> */}
                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="pills-discover-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-discover" type="button" role="tab" aria-controls="pills-discover"
                            aria-selected="true">
                            Discover
                        </button>
                        </li>
                        <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-popular-tab" data-bs-toggle="pill" data-bs-target="#pills-popular"
                            type="button" role="tab" aria-controls="pills-popular" aria-selected="false">
                            Popular
                        </button>
                        </li>
                    </ul>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default HeroComponent