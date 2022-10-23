import {Navbar, Container, Nav} from "react-bootstrap"

const NavigationBar = () => {
    return (
        <div>
        <Navbar variant="dark">
            <Container>
                <Navbar.Brand href='/'>FILMBAGUS</Navbar.Brand>
                <Nav>
                    <Nav.Link href='#ongoing'>ONGOING</Nav.Link>
                    <Nav.Link href='#end'>END</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </div>
    )
}

export default NavigationBar