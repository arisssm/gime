import { Container, Row, Col, Card, CardImg, CardBody, CardText, CardTitle, CardLink, Button} from 'react-bootstrap'
import imageNews from '../../assets/image-news.png'
import imageNews2 from '../../assets/image-news2.png'
import imageNews3 from '../../assets/image-news3.png'
import imageNews4 from '../../assets/image-news4.png'
import { Link } from 'react-router-dom'
const NewsComponent = () => {
    return (
        <div 
            className="content-news mt-3">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <Card 
                                className='mt-3' 
                                style={{width:'100%',border:'none', background:'none', color:'white'}}>
                                <CardImg 
                                    style={{borderRadius:'20px'}} variant="top" src={imageNews} />
                                <CardBody>
                                    <h6><small>Friday, 1 September 2023</small></h6>
                                    <CardLink href="#">
                                        <CardTitle style={{color:'#a555ed'}}>Modern Warfare III Release Date</CardTitle>
                                    </CardLink>
                                    <CardText style={{textAlign:'justify'}}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores exercitationem libero voluptate, asperiores in aperiam id cumque pariatur iste voluptas, voluptatum, corporis blanditiis nihil molestiae!
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg={6}>
                            <Card 
                                className='mt-3' 
                                style={{width:'100%',border:'none', background:'none', color:'white'}}>
                                <CardImg 
                                    style={{borderRadius:'20px'}} variant="top" src={imageNews2} />
                                <CardBody>
                                    <h6><small>Friday, 1 September 2023</small></h6>
                                    <CardLink href="#">
                                        <CardTitle style={{color:'#a555ed'}}>EA Sports FC 24: cut to the chase</CardTitle>
                                    </CardLink>
                                    <CardText style={{textAlign:'justify'}}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores exercitationem libero voluptate, asperiores in aperiam id cumque pariatur iste voluptas, voluptatum, corporis blanditiis nihil molestiae!
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6}>
                            <Card 
                                className='mt-3' 
                                style={{width:'100%',border:'none', background:'none', color:'white'}}>
                                <CardImg 
                                    style={{borderRadius:'20px'}} variant="top" src={imageNews3} />
                                <CardBody>
                                    <h6><small>Friday, 1 September 2023</small></h6>
                                    <CardLink href="#">
                                        <CardTitle style={{color:'#a555ed'}}>Resident Evil 4 PS5 Playthrough</CardTitle>
                                    </CardLink>
                                    <CardText style={{textAlign:'justify'}}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores exercitationem libero voluptate, asperiores in aperiam id cumque pariatur iste voluptas, voluptatum, corporis blanditiis nihil molestiae!
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg={6}>
                            <Card 
                                className='mt-3' 
                                style={{width:'100%',border:'none', background:'none', color:'white'}}>
                                <CardImg 
                                    style={{borderRadius:'20px'}} variant="top" src={imageNews4} />
                                <CardBody>
                                    <h6><small>Friday, 1 September 2023</small></h6>
                                    <CardLink href="#">
                                        <CardTitle style={{color:'#a555ed'}}>Konami Apologizes for eFootball’s Disastrous Launch</CardTitle>
                                    </CardLink>
                                    <CardText style={{textAlign:'justify'}}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores exercitationem libero voluptate, asperiores in aperiam id cumque pariatur iste voluptas, voluptatum, corporis blanditiis nihil molestiae!
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
        </div>
    )
}

export default NewsComponent