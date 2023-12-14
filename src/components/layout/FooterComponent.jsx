import { Container, Row, Col, NavLink, CardLink} from 'react-bootstrap'

const FooterComponent = () => {
    return (
        <footer class="bg-dark mt-5" data-bs-theme="dark">
            <Container>
                <Row>
                    <Col lg={6}>
                    <div class="link">
                        <h6 class="subtitle">quick link</h6>
                        <ul>
                        <li><CardLink href="#">About</CardLink></li>
                        <li><CardLink href="/news">News</CardLink></li>
                        <li><CardLink href="/home">Discover</CardLink></li>
                        <li><CardLink href="/home">Popular</CardLink></li>
                        <li><CardLink href="#">Sales & Special</CardLink></li>
                        <li><CardLink href="#">Free Games</CardLink></li>
                        </ul>
                    </div>
                    </Col>
                    <Col lg={6}>
                    <h6 class="copyright-text">
                        &copy;Copyright Gime, 2023 All Rights Reserved
                    </h6>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default FooterComponent