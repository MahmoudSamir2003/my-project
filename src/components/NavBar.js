import { useState } from "react";
import { FormControl, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavScrollExample = ({ filterbySearch }) => {

    const [searchValue, setSearchValue] = useState('')
    const onSearch = () => {
        filterbySearch(searchValue)
        setSearchValue('')
    }
    return (
        <Row>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#">
                        <div className="brand-color">مطعم جديد</div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="text"
                                placeholder="ابحث.."
                                className="mx-2"
                                onChange={(e) => setSearchValue(e.target.value)}
                                value={searchValue}
                            />
                            <Button onClick={onSearch} className="btn-search">بحث</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Row>
    )
}

export default NavScrollExample;
