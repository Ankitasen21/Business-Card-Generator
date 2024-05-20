/* eslint-disable react/prop-types */
import React, { useState, useCallback } from "react";
import { useDropzone } from 'react-dropzone';
import "./Form.css";

const Form = ({ onSubmit }) => {
  const [formState, setFormState] = useState({
    name: "",
    bio: "",
    interest: "",
    email: "",
    phone: "",
    address: "",
    linkedin: "",
    github: "",
    photo: "",
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhotoChange = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormState({
        ...formState,
        photo: reader.result,
      });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = useCallback((acceptedFiles) => {
    handlePhotoChange(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    accept: 'image/*'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formState);
    setFormState({
      name: "",
      bio: "",
      interest: "",
      email: "",
      phone: "",
      address: "",
      linkedin: "",
      github: "",
      photo: "",
    });
  };

  return (
    <>
      <form className="form-container">
        <div className="form-field">
          <label htmlFor="name">Name </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange} required
          />
        </div>
        <div className="form-field">
          <label htmlFor="bio">Bio </label>
          <textarea
            id="bio"
            name="bio"
            rows="3"
            cols="30"
            value={formState.bio}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-field">
          <label htmlFor="interest">Interest </label>
          <textarea
            id="interest"
            name="interest"
            rows="3"
            cols="30"
            value={formState.interest}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-field">
          <label htmlFor="email">Email </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange} required
          />
        </div>
        <div className="form-field">
          <label htmlFor="phone">Phone </label>
          <input
            type="number"
            id="phone"
            name="phone"
            value={formState.phone}
            onChange={handleChange} required
          />
        </div>
        <div className="form-field">
          <label htmlFor="address">Address </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formState.address}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="linkedin">LinkedIn </label>
          <input
            type="url"
            id="linkedin"
            name="linkedin"
            value={formState.linkedin}
            onChange={handleChange} required
          />
          <label htmlFor="github">Github </label>
          <input
            type="url"
            id="github"
            name="github"
            value={formState.github}
            onChange={handleChange} required
          />
        </div>
        <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drop a profile picture here, or click to select one</p>
          )}
        </div>
        <button type="submit" onClick={handleSubmit}>Generate Business Card</button>
      </form>
    </>
  );
};

export default Form;
