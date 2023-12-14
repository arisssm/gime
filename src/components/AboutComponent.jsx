import { 
    Container, 
    Row, 
    Col, 
    Accordion
} from "react-bootstrap"

const AboutComponent = () => {
    return (
        <div id="">
            <Container className="mt-3">
                <Row>
                    <Col>
                        <div class="bio">
                            <h1><b>ABOUT GIME</b></h1>
                            <hr />
                            <h5><b>Corporate Headquarters</b></h5>
                            <h6><b>Palembang, Indonesia</b></h6>
                            <p>
                            Founded in 2023, Gime is an Indonesian company founded by CEO
                            Joni. The company is headquartered in Rajawali, Palembang and
                            has more than 40 offices worldwide. Today Gime is a leading
                            interactive entertainment company and provider of 3D engine
                            technology.
                            </p>
                        </div>
                        <div class="contact">
                            <hr />
                            <h5><b>Contact</b></h5>
                            <h6><b>Gime Inc</b></h6>
                            <p>Street Rajawali. Palembang, Indonesia, Tel +1 234 567</p>
                        </div>
                        <div class="faq">
                            <hr />
                            <h5><b>Frequently Ask Question</b></h5>
                            <Accordion defaultActiveKey="0" className="mt-3" data-bs-theme="dark" id="accordionExample">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header data-bs-toggle="collapse" data-bs-target="#collapseOne">
                                      Does Gime have any job opening?
                                    </Accordion.Header>
                                    <Accordion.Body id="collapseOne" data-bs-parent="#accordionExample">
                                    Yes! Our current openings will be posted on our career
                                    portal. Once registered, you may apply for open positions
                                    and/or submit your resume.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                                        I am having trouble with my game. Where do I go for support?
                                    </Accordion.Header>
                                    <Accordion.Body id="collapseTwo" data-bs-parent="#accordionExample">
                                    Please Contact us at email support@gime.com for support on
                                    all of our current products.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header data-bs-toggle="collapse" data-bs-target="#collapseThree">
                                        I am having trouble with my game. Where do I go for support?Does the Gime Games Store support regional pricing?
                                    </Accordion.Header>
                                    <Accordion.Body id="collapseThree" data-bs-parent="#accordionExample">
                                    <strong>This is the third item's accordion body.</strong>
                                    Yes, we do support regional pricing in more than 190
                                    countries and over 30 territories. We also provide
                                    suggested regional prices for developers based on regional
                                    exchange rates, local purchasing power, and industry
                                    experience.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default AboutComponent