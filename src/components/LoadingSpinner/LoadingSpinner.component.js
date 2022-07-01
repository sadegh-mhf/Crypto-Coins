import React from 'react';
import './spinnerStyle.scss';

const LoadingSpinner = () => {
    return (
        <div className={'loadingMain'}>
            <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export {LoadingSpinner};