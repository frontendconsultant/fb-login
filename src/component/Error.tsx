import React from 'react';
import Cover from './Cover';
import Banner from './Banner';
import { Link } from 'react-router-dom';

const ErrorPage: React.FC = () => {
    return (
        <Cover>
            <Banner 
            title="404"
            subtitle="page not found"
            >
            <Link to="/" className="btn-primary">return home</Link>
            </Banner>
        </Cover>
    )
}

export default ErrorPage