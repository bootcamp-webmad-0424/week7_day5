import CoasterCard from '../CoasterCard/CoasterCard'
import { Row, Col } from 'react-bootstrap'

const CoastersList = ({ coasters }) => {

    return (
        !coasters ?
            <h1>cargando</h1>
            :
            <>
                <Row>
                    {
                        coasters.map(elm => {
                            return (
                                <Col lg={{ span: 3 }} md={{ span: 6 }}>
                                    <CoasterCard {...elm} key={elm._id} />
                                </Col>
                            )
                        })
                    }
                </Row>
            </>
    )

}

export default CoastersList