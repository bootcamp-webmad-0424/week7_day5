import { Button, Container } from 'react-bootstrap'
import CoastersList from '../../components/CoastersList/CoastersList'
import { useContext, useEffect, useState } from 'react'
import coasterServices from '../../services/coaster.services'
import { AuthContext } from '../../contexts/auth.context'
import { Link } from 'react-router-dom'


const CoastersGalleryPage = () => {

    const [coasters, setCoasters] = useState([])

    const { loggedUser } = useContext(AuthContext)

    useEffect(() => {
        loadCoasters()
    }, [])

    const loadCoasters = () => {
        coasterServices
            .getAllCoasters()
            .then(({ data }) => setCoasters(data))
            .catch(err => console.log(err))
    }

    return (
        <div className="CoastersGalleryPage">
            <Container>
                <h1>Galería de montañas rusas</h1>
                {
                    loggedUser && <Link className="btn btn-sm btn-dark" to={'/crear'}>Crear nueva</Link>
                }
                <hr />
                <CoastersList coasters={coasters} />
            </Container>
        </div>
    )
}

export default CoastersGalleryPage