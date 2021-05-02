import React from 'react';
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import {Link} from "react-router-dom"
import "./Home.css"

const Home = () => {
    return (
        <div className="Home">
            ALGORITHM VISUALIZER
        <div className="Home1">
          <Link to="/sort">
      <div className="sorting">
      <Card style={{ width: '40rem' }}>
  <Card.Img variant="top" style={{ width: '40rem' }} src="https://cdn.shortpixel.ai/client/q_lossy,ret_img,w_600,h_338/https://therohanbhatia.com/wp-content/uploads/2020/08/Sorting-Visualizer.jpg" />
  <Card.Body>
    <Card.Title style={{ alignItems: 'center'}}> SORTING VISUALIZER</Card.Title>
    <Card.Text>
     
    </Card.Text>
    
    {/* <Button variant="primary">Go to Sorting Visualizer</Button> */}
  </Card.Body>
</Card>

</div>
</Link>
<Link to="/path">
<div className="sorting">
<Card style={{ width: '40rem' }}>
  <Card.Img variant="top" style={{ width: '33.5rem' }} src="https://miro.medium.com/max/446/1*X0JmdE2g25qt0nRvnztbQw.png" />
  <Card.Body>
    <Card.Title>PATHFINDING VISUALIZER</Card.Title>
    <Card.Text>
      
    </Card.Text>
    {/* <Button variant="primary">Go to Pathfinding Visualizer</Button> */}
  </Card.Body>
</Card>
</div>
</Link>
        </div>
        </div>
    )
}

export default Home
