import React from 'react';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
    // const history = useHistory();
    const navigate = useNavigate();

    const redirectToHome = () => {
        // history.push('/');
        navigate('/');
        console.log('Redirecting to Home');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
            <p className="text-xl text-gray-600 mb-8">Page Not Found</p>
            <button
                onClick={redirectToHome}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
                Go to Home
            </button>
        </div>
    );
};

export default PageNotFound;