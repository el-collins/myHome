import React, { useState, useEffect } from 'react';

const UserProfile = () => {
    const [propertyId, setPropertyId] = useState('');
    const [wishlist, setWishlist] = useState([]);
    const [error, setError] = useState('');

    // Function to fetch wishlist items

    const getWishlist = async () => {
        try {
            const response = await fetch(' https://b820-197-210-226-113.ngrok-free.app/wishlist/', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`, // Retrieve access token from localStorage
                    'Content-Type': 'application/json'
                }
            });
            console.log(response);
            if (response.ok) {
                const data = await response.json();
                setWishlist(data);
            } else {
                throw new Error('Failed to fetch wishlist');
            }
        } catch (error) {
            setError(error.message);
        }
    };

    // Function to add an item to the wishlist
    const addToWishlist = async () => {
        try {
            const response = await fetch('/wishlist/', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`, // Retrieve access token from localStorage
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ property_id: propertyId })
            });
            if (response.ok) {
                getWishlist(); // Refresh wishlist after adding item
            } else {
                throw new Error('Failed to add to wishlist');
            }
        } catch (error) {
            setError(error.message);
        }
    };

    // Function to remove an item from the wishlist
    const removeFromWishlist = async (propertyIdToRemove) => {
        try {
            const response = await fetch(`/wishlist/${propertyIdToRemove}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}` // Retrieve access token from localStorage
                }
            });
            if (response.ok) {
                setWishlist(wishlist.filter(item => item.property_id !== propertyIdToRemove));
            } else {
                throw new Error('Failed to remove from wishlist');
            }
        } catch (error) {
            setError(error.message);
        }
    };

    // Load wishlist on component mount
    useEffect(() => {
        // Check if user is authenticated
        const accessToken = localStorage.getItem('access_token');
        if (accessToken) {
            getWishlist();
        } else {
            // Redirect to login page or handle authentication flow
            // Example: history.push('/login');
        }
    }, []); // Empty dependency array to run only once on mount

    return (
        <div>
            <h1>Wishlist Management</h1>
            <button onClick={getWishlist}>Get Wishlist</button>
            <br />
            <input type="text" placeholder="Enter Property ID" value={propertyId} onChange={(e) => setPropertyId(e.target.value)} />
            <button onClick={addToWishlist}>Add to Wishlist</button>
            <br />
            {wishlist.length > 0 && (
                <ul>
                    {wishlist.map(item => (
                        <li key={item.property_id}>
                            {item.property_id}
                            <button onClick={() => removeFromWishlist(item.property_id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            {error && <p>{error}</p>}
        </div>
    );
};

export default UserProfile;
