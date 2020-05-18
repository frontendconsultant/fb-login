import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { useTypedSelector } from '../store/fbLoginReducer';
import { RootState } from '../store/store';



const UserHome = () => {   
    const fbData = useTypedSelector( (state:RootState) => state.fbLoginReducer);
    console.log(fbData);
    return (
        <div className="container">
            <Card style={{ width: '600px' }}>
           
            <Card.Header>
             <Image src={fbData.picture} roundedCircle />
            </Card.Header>
                    <Card.Body>
                        <Card.Title>{fbData.data.name}</Card.Title>
                        <Card.Text>
                        {fbData.data.email}
                        </Card.Text>
                    </Card.Body>
            
            </Card>
    </div>
    )
}

export default UserHome;