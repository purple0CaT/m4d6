import SingBook from './MyCard'

import { Container ,Row, Col } from "react-bootstrap"


const Category= ({categor, showThisCom, showCom})=>{
    return(
        <Row key={categor[0].category}>
            <Col xs="12 mt-5">
                <h2>{categor[0].category.charAt(0).toUpperCase() + categor[0].category.slice(1)}</h2>
                <hr />
            </Col>
            {
            categor.slice(1,7).map(book => <SingBook showCom={showCom} showThisCom={showThisCom} book = {book}/>)
            }
        </Row>
    )
}
export default Category