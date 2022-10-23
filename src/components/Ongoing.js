import { Card, Container, Row, Col, Image } from "react-bootstrap"
import blindImage from '../assets/image/ongoing/blindbg2.jpg'
import gemofwImage from '../assets/image/ongoing/gemofw.jpg'
import love_is_forImage from '../assets/image/ongoing/love_is_for.jpg'
import loveincontractImage from '../assets/image/ongoing/loveincontract.jpg'
import onedollarsImage from '../assets/image/ongoing/onedollars.jpg'
import thegoldenImage from '../assets/image/ongoing/thegolden.jpg'

const Ongoing = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white">ONGOING K-DRAMA</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper" id='ongoing'>
                    <Card className="movieImage">
            <Image src={blindImage} alt="Blind" className="images"/>
            <div className="bg-dark">
                <div className="p-2 m-1 text-white ">
            <Card.Title className="text-center">Blind</Card.Title>
            <Card.Text className="text-left">
            Ryu Sung Joon, Ryu Sung Hoon and Jo Eun Ki become involved in a serial murder case involving jury members as the victims. These three individuals try to uncover the truth behind the deaths.
            </Card.Text>
            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
            </div>
            </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
            <Image src={gemofwImage} alt="Blind" className="images"/>
            <div className="bg-dark">
                <div className="p-2 m-1 text-white ">
            <Card.Title className="text-center">Game Of Witches</Card.Title>
            <Card.Text className="text-left">
            Yu Kyung is a successful woman who is proficient enough to become an executive director of Chunha Group when she started as a secretary.
            </Card.Text>
            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
            </div>
            </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
            <Image src={love_is_forImage} alt="Blind" className="images"/>
            <div className="bg-dark">
                <div className="p-2 m-1 text-white ">
            <Card.Title className="text-center">Love Is For Suckers</Card.Title>
            <Card.Text className="text-left">
            Goo Yeo Reum is a television producer in the tenth year of her professional career. Although she works harder than most producers, the shows she makes all seem to flop.
            </Card.Text>
            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
            </div>
            </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
            <Image src={loveincontractImage} alt="Blind" className="images"/>
            <div className="bg-dark">
                <div className="p-2 m-1 text-white ">
            <Card.Title className="text-center">Love In Contract</Card.Title>
            <Card.Text className="text-left">
            Undeniably attractive, talented, and charming, Choi Sang Eun is the living definition of the perfect partner. This is exactly why instead of marrying, she chooses to employ her skills as a contract marriage master.
            </Card.Text>
            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
            </div>
            </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
            <Image src={onedollarsImage} alt="Blind" className="images"/>
            <div className="bg-dark">
                <div className="p-2 m-1 text-white ">
            <Card.Title className="text-center">One Dollars Laywers</Card.Title>
            <Card.Text className="text-left">
            Cheon Ji Hun is a lawyer with unusual flair. His hair has a stylish perm. His retainer is only 1,000 won despite being one of the most skilled lawyers around.
            </Card.Text>
            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
            </div>
            </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
            <Image src={thegoldenImage} alt="Blind" className="images"/>
            <div className="bg-dark">
                <div className="p-2 m-1 text-white ">
            <Card.Title className="text-center">The Golden Spoon</Card.Title>
            <Card.Text className="text-left">
            Would you trade your poor but loving family for a life of riches? When Seung Cheon gets his hands on a magical spoon that allows him to switch lives with his rich best friend, he thinks it’s a no-brainer.
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

export default Ongoing