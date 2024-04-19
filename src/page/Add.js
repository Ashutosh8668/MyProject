import React, { useState, useRef, useEffect } from 'react';
import Swal from 'sweetalert2';

function Add({ employees, setEmployees, setIsAdding }) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [description, setDescription] = useState('');
    const [phone, setPhone] = useState('');
    const [selectedImage, setSelectedImage] = useState(null); // New state for selected image

    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, []);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setSelectedImage(file);
    };

    const handleAdd = e => {
        e.preventDefault();
        if (!firstName || !lastName || !email || !address || !description || !phone) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const id = employees.length + 1;
        const newEmployee = {
            id,
            firstName,
            lastName,
            email,
            address,
            description,
            contacts: {
                phone
            },
            photo: URL.createObjectURL(selectedImage) // Save image URL in photo field
        }
        // Create a new array with the existing employees plus the new one
        const updatedEmployees = [...employees, newEmployee];
        setEmployees(updatedEmployees);
        setIsAdding(false);

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${firstName} ${lastName}'s data has been Added.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <div className="small-container">
            <form onSubmit={handleAdd}>
                <h1>Add User</h1>
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    type="text"
                    ref={textInput}
                    name="firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="address">Address</label>
                <input
                    id="address"
                    type="text"
                    name="address"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                />
                <label htmlFor="description">Description</label>
                <input
                    id="description"
                    type="text"
                    name="description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <label htmlFor="phone">Phone</label>
                <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                />
                {/* Input for selecting image */}
                <label htmlFor="image">Select Image</label>
                <input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                />
                {/* Preview selected image */}
                {selectedImage && (
                    <img src={URL.createObjectURL(selectedImage)} alt="Selected" style={{ width: '100px', height: '100px' }} />
                )}
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Add" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsAdding(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Add;
