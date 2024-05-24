import { Container } from 'react-bootstrap'
import NewCoasterForm from '../../components/NewCoasterForm/NewCoasterForm'

const NewCoasterPage = () => {

    return (
        <div className="NewCoasterPage">
            <Container>
                <h1>Nueva montaña rusa</h1>
                <hr></hr>
                <NewCoasterForm />
            </Container>
        </div>
    )
}

export default NewCoasterPage