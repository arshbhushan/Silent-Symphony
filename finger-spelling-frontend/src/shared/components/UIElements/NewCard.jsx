import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './NewCard.css'; // Import the CSS file for custom styles

function NewCard() {
  return (
    
    <div title='welcome here' className="card-grid">
      <Card className="card-item">
        <Card.Img variant="top" src="home_bg.jpg" className="card-img" />
        <Card.Body>
          <Card.Title><b>Sign Language Lessons</b></Card.Title>
          <br></br>
          <Card.Text>
          Learn sign language with our comprehensive lessons designed for all skill levels. 
          Start communicating effectively with the deaf community today.
          </Card.Text>
          <Button className="custom-button">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card className="card-item">
        <Card.Img variant="top" src="cardImage2.png" className="card-img" />
        <Card.Body>
          <Card.Title><b>AI-Powered Translation</b></Card.Title>
          <br></br>
          <Card.Text>
          Experience our cutting-edge AI technology that translates sign language in real-time,
          making communication seamless and accessible for everyone.
          </Card.Text>
          <Button className="custom-button">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card className="card-item">
        <Card.Img variant="top" src="cardImage3.jpg" className="card-img" />
        <Card.Body>
          <Card.Title><b>Community and Support</b></Card.Title>
          <br></br>
          <Card.Text>
          Join our supportive community of learners and experts. Share your experiences, ask questions, and grow together.
          </Card.Text>
          <Button className="custom-button">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default NewCard;
