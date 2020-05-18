import React   from 'react';
import { OrbitSpinner } from 'react-epic-spinners'

const LoadingSpinner: React.FC = () => {
    return (
        <div >
                <OrbitSpinner
                  color="black"
                  size={60} />
                <p className={'please-wait-text'}>Please wait...</p>
        </div>
    )
}
export default LoadingSpinner;
