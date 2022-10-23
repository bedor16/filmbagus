import { Card, Container, Row, Col, Image } from "react-bootstrap"
import bigmouthImage from '../assets/image/end/bigmouth.jpg'
import goldmaskImage from '../assets/image/end/goldmask.jpg'
import goodjobImage from '../assets/image/end/goodjob.jpg'
import littlewomenImage from '../assets/image/end/littlewomen.jpg'
import onceuponImage from '../assets/image/end/onceupon.jpg'
import thesecrethouseImage from '../assets/image/end/thesecrethouse.jpg'

const End = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white">END K-DRAMA</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper" id='end'>
                    <Card className="movieImage">
            <Image src={bigmouthImage} alt="Blind" className="images"/>
            <div className="bg-dark">
                <div className="p-2 m-1 text-white ">
            <Card.Title className="text-center">Big Mouth</Card.Title>
            <Card.Text className="text-left">
            Park Chang Ho is known since his school days as "Big Mouth" because he talks big and promises big things but can not follow it up.
            </Card.Text>
            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
            </div>
            </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
            <Image src={goldmaskImage} alt="Blind" className="images"/>
            <div className="bg-dark">
                <div className="p-2 m-1 text-white ">
            <Card.Title className="text-center">Gold Mask</Card.Title>
            <Card.Text className="text-left">
            Yoo Soo Yeon grew up with ordinary parents. She falls in love with a man from a chaebol family and marries him....
            </Card.Text>
            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
            </div>
            </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
            <Image src={goodjobImage} alt="Blind" className="images"/>
            <div className="bg-dark">
                <div className="p-2 m-1 text-white ">
            <Card.Title className="text-center">Good Job</Card.Title>
            <Card.Text className="text-left">
            Follows the joint investigation and romance story of a chaebol who leads a second life as a detective and a woman with super vision.
            </Card.Text>
            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
            </div>
            </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
            <Image src={littlewomenImage} alt="Blind" className="images"/>
            <div className="bg-dark">
                <div className="p-2 m-1 text-white ">
            <Card.Title className="text-center">Little Women</Card.Title>
            <Card.Text className="text-left">
            About three sisters with a close bond who grew up in poverty. It is the exciting story of the sisters as they get embroiled in a major incident and face off against the wealthiest family in the nation.
            </Card.Text>
            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
            </div>
            </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
            <Image src={onceuponImage} alt="Blind" className="images"/>
            <div className="bg-dark">
                <div className="p-2 m-1 text-white ">
            <Card.Title className="text-center">Once Upon a Small Town</Card.Title>
            <Card.Text className="text-left">
            Han Ji Yool works as a veterinarian in Seoul. One day, he receives a phone call from his grandfather. His grandfather doesn’t mention specifics, but his voice sounds serious.
            </Card.Text>
            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
            </div>
            </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
            <Image src={thesecrethouseImage} alt="Blind" className="images"/>
            <div className="bg-dark">
                <div className="p-2 m-1 text-white ">
            <Card.Title className="text-center">The Secret House</Card.Title>
            <Card.Text className="text-left">
            A lawyer who is chasing traces of his missing mother walks into the secret surrounding him in order to fight the world. 
            </Card.Text>
            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
            </div>
            </Card>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default End