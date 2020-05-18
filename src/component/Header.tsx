import React, { useState } from 'react';

import FacebookLogin from 'react-facebook-login';
import { Card } from 'react-bootstrap';
import { createBrowserHistory } from 'history';
import {FBActions} from '../store/actions';
import {useDispatch} from 'react-redux';



const Header: React.FC = () => {

    const history = createBrowserHistory();
    const dispatch = useDispatch();
   const [login, setLogin] = useState(false);

    const responseFacebook = (response: any) => {
      if(response.accessToken) {
        setLogin(true);
      }
      dispatch(FBActions.dispatchFBDeatils(response));
      history.push('/login');
    }
    return (
    <Card>
      { !login && <Card.Header>
      
          <FacebookLogin
            appId="177810798928136"
            autoLoad={true}
            fields="name,email,picture"
            scope="public_profile"
            callback={responseFacebook}
            icon="fa-facebook" />
     
      </Card.Header>
       }
    </Card>
    )
}

export default Header;
