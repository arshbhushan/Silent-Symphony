import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './NewCard.css'; // Import the CSS file for custom styles

function NewCard() {
  return (
    <div className="card-grid">
      <Card className="card-item">
        <Card.Img variant="top" src="home_bg.jpg" className="card-img" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button className="custom-button">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card className="card-item">
        <Card.Img variant="top" src="home_bg.jpg" className="card-img" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button className="custom-button">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card className="card-item">
        <Card.Img variant="top" src="home_bg.jpg" className="card-img" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button className="custom-button">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default NewCard;
