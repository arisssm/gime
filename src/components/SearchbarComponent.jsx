import {Container, Row, Col, Form, FormControl, Button} from 'react-bootstrap';

const SearchbarComponent = () => {
    return (
        <section 
            id='news'>
            <Container 
                className='mt-3'>
                <Row>
                    <Col 
                        lg={4} 
                        className='d-flex'>
                        <Form 
                            className='me-2'>
                            <FormControl
                                type='text'
                                placeholder='Search News'
                                data-bs-theme='dark'
                            />
                        </Form>
                        <Button
                            type='submit' 
                            className='btn'> 
                            Search 
                        </Button>
                    </Col>
                </Row>
            </Container>
        </section>   
    )
}

export default SearchbarComponent