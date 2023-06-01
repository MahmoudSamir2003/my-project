import React from "react";
import { Button, Col, Row } from "react-bootstrap";

import Roll from 'react-reveal/Roll';

const Hi = ({ filterbyCategory, allCategory }) => {

    //to filter by category
    const onFilter = (cat) => {
        filterbyCategory(cat)
    }
    return (
        <Row className="my-2 mb-5">
            <Col className="d-flex justify-content-center">
                <Roll>
                    {
                        allCategory.length >= 1 ? (allCategory.map((cat) => {
                            return (
                                <div>
                                    <Button onClick={() => onFilter(cat)} style={{ border: "1px solid #b45b35" }} className="btn mx-2">{cat}</Button>
                                </div>
                            )
                        })) : <h4>لا يوجد تصنيفات لاان</h4>
                    }
                </Roll>
            </Col>
        </Row>
    )
}


export default Hi;
