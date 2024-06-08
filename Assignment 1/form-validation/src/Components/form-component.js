import React, { useState } from "react";
// import { BrowserRouter, Route, Link } from "react-router-dom";

const emailValidator =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

const phoneNumberValidator =
    /^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;

const countries = [
    { value: "India", label: "India" },
    { value: "USA", label: "USA" },
    { value: "UK", label: "UK" },
    // Add more countries here
];

const cities = {
    India: [
        { value: "Mumbai", label: "Mumbai" },
        { value: "Delhi", label: "Delhi" },
        { value: "Bangalore", label: "Bangalore" },
        // Add more cities for India here
    ],
    USA: [
        { value: "New York", label: "New York" },
        { value: "Los Angeles", label: "Los Angeles" },
        { value: "Chicago", label: "Chicago" },
        // Add more cities for USA here
    ],
    UK: [
        { value: "London", label: "London" },
        { value: "Manchester", label: "Manchester" },
        { value: "Birmingham", label: "Birmingham" },
        // Add more cities for UK here
    ],
    // Add more countries and cities here
};

function FormComponent() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [phoneNumber, setPhoneNumber] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [panNumber, setPanNumber] = useState("");
    const [aadharNumber, setAadharNumber] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [phoneNumberError, setPhoneNumberError] = useState("");
    const [countryError, setCountryError] = useState("");
    const [cityError, setCityError] = useState("");
    const [panNumberError, setPanNumberError] = useState("");
    const [aadharNumberError, setAadharNumberError] = useState("");
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case "firstName":
                setFirstName(value);
                break;
            case "lastName":
                setLastName(value);
                break;
            case "username":
                setUsername(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;

            case "phoneNumber":
                setPhoneNumber(value);
                break;
            case "country":
                setCountry(value);
                break;
            case "city":
                setCity(value);
                break;
            case "panNumber":
                setPanNumber(value);
                break;
            case "aadharNumber":
                setAadharNumber(value);
                break;
            default:
                break;
        }
    };

    const handleBlur = (event) => {
        const { name } = event.target;
        switch (name) {
            case "firstName":
                validateFirstName();
                break;
            case "lastName":
                validateLastName();
                break;
            case "username":
                validateUsername();
                break;
            case "email":
                validateEmail();
                break;
            case "password":
                validatePassword();
                break;

            case "phoneNumber":
                validatePhoneNumber();
                break;
            case "country":
                validateCountry();
                break;
            case "city":
                validateCity();
                break;
            case "panNumber":
                validatePanNumber();
                break;
            case "aadharNumber":
                validateAadharNumber();
                break;
            default:
                break;
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let isValid = true;
        const fields = [
            "firstName",
            "lastName",
            "username",
            "email",
            "password",
            "confirmPassword",
            "phoneNumber",
            "country",
            "city",
            "panNumber",
            "aadharNumber",
        ];
        fields.forEach((field) => {
            isValid = validateField(field) && isValid;
        });

        if (isValid) {
            setIsFormSubmitted(true);
        }
    };

    const validateField = (name) => {
        let isValid = true;
        switch (name) {
            case "firstName":
                isValid = validateFirstName();
                console.log(isValid);
                break;
            case "lastName":
                isValid = validateLastName();
                console.log(isValid);
                break;
            case "username":
                isValid = validateUsername();
                console.log(isValid);
                break;
            case "email":
                isValid = validateEmail();
                console.log(isValid);
                break;
            case "password":
                isValid = validatePassword();
                console.log(isValid);
                break;

            case "phoneNumber":
                isValid = validatePhoneNumber();
                console.log(isValid);
                break;
            case "country":
                isValid = validateCountry();
                console.log(isValid);
                break;
            case "city":
                isValid = validateCity();
                console.log(isValid);
                break;
            case "panNumber":
                isValid = validatePanNumber();
                console.log(isValid);
                break;
            case "aadharNumber":
                isValid = validateAadharNumber();
                console.log(isValid);
                break;
            default:
                break;
        }
        return isValid;
    };

    const validateFirstName = () => {
        let firstNameError = "";
        if (firstName.trim() === "") {
            firstNameError = "First Name is required";
        }
        setFirstNameError(firstNameError);
        return firstNameError === "";
    };

    const validateLastName = () => {
        let lastNameError = "";
        if (lastName.trim() === "") {
            lastNameError = "Last Name is required";
        }
        setLastNameError(lastNameError);
        return lastNameError === "";
    };

    const validateUsername = () => {
        let usernameError = "";
        if (username.trim() === "") {
            usernameError = "Username is required";
        }
        setUsernameError(usernameError);
        return usernameError === "";
    };

    const validateEmail = () => {
        let emailError = "";
        if (email.trim() === "") {
            emailError = "Email is required";
        } else if (!emailValidator.test(email)) {
            emailError = "Email is not valid";
        }
        setEmailError(emailError);
        return emailError === "";
    };

    const validatePassword = () => {
        let passwordError = "";
        if (password.trim() === "") {
            passwordError = "Password is required";
        } else if (!passwordValidator.test(password)) {
            passwordError =
                "Password must contain at least 8 characters, 1 number, 1 upper and 1 lowercase!";
        }
        setPasswordError(passwordError);
        return passwordError === "";
    };

    const validatePhoneNumber = () => {
        let phoneNumberError = "";
        if (phoneNumber.trim() === "") {
            phoneNumberError = "Phone Number is required";
        } else if (!phoneNumberValidator.test(phoneNumber)) {
            phoneNumberError = "Phone Number is not valid";
        }
        setPhoneNumberError(phoneNumberError);
        return phoneNumberError === "";
    };

    const validateCountry = () => {
        let countryError = "";
        if (country.trim() === "") {
            countryError = "Country is required";
        }
        setCountryError(countryError);
        return countryError === "";
    };

    const validateCity = () => {
        let cityError = "";
        if (city.trim() === "") {
            cityError = "City is required";
        }
        setCityError(cityError);
        return cityError === "";
    };

    const validatePanNumber = () => {
        let panNumberError = "";
        if (panNumber.trim() === "") {
            panNumberError = "PAN Number is required";
        }
        setPanNumberError(panNumberError);
        return panNumberError === "";
    };

    const validateAadharNumber = () => {
        let aadharNumberError = "";
        if (aadharNumber.trim() === "") {
            aadharNumberError = "Aadhar Number is required";
        }
        setAadharNumberError(aadharNumberError);
        return aadharNumberError === "";
    };

    return (
        <div>
            {isFormSubmitted ? (
                <div className="font-sans antialiased bg-grey-lightest">
                    <div className="w-full bg-grey-lightest">
                        <div className="container mx-auto py-8">
                            <div className="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
                                <div className="py-4 px-8 text-black text-xl border-b border-grey-lighter text-center">
                                    Form Submitted Successfully!
                                </div>
                                <p>First Name: {firstName}</p>
                                <p>Last Name: {lastName}</p>
                                <p>Username: {username}</p>
                                <p>Email: {email}</p>
                                <p>Phone Number: {phoneNumber}</p>
                                <p>Country: {country}</p>
                                <p>City: {city}</p>
                                <p>PAN Number: {panNumber}</p>
                                <p>Aadhar Number: {aadharNumber}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div>
                        <div className="font-sans antialiased bg-grey-lightest">
                            <div className="w-full bg-grey-lightest">
                                <div className="container mx-auto py-8">
                                    <div className="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
                                        <div className="py-4 px-8 text-black text-xl border-b border-grey-lighter text-center">
                                            Registration Form
                                        </div>
                                        <div className="py-4 px-8">
                                            <div className="flex mb-4">
                                                <div className="w-1/2 mr-1">
                                                    <label
                                                        className="block text-grey-darker text-sm font-bold mb-2"
                                                        htmlFor="first_name"
                                                    >
                                                        First Name
                                                    </label>
                                                    <input
                                                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                                        type="text"
                                                        name="firstName"
                                                        value={firstName}
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        onBlur={handleBlur}
                                                        placeholder="First Name"
                                                    />
                                                    {firstNameError && (
                                                        <div
                                                            style={{
                                                                color: "red",
                                                            }}
                                                        >
                                                            {firstNameError}
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="w-1/2 ml-1">
                                                    <label
                                                        className="block text-grey-darker text-sm font-bold mb-2"
                                                        htmlFor="last_name"
                                                    >
                                                        Last Name
                                                    </label>
                                                    <input
                                                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                                        id="last_name"
                                                        type="text"
                                                        name="lastName"
                                                        value={lastName}
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        onBlur={handleBlur}
                                                        placeholder="Your last name"
                                                    />
                                                    {lastNameError && (
                                                        <div
                                                            style={{
                                                                color: "red",
                                                            }}
                                                        >
                                                            {lastNameError}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="mb-4">
                                                <label
                                                    className="block text-grey-darker text-sm font-bold mb-2"
                                                    htmlFor="username"
                                                >
                                                    UserName
                                                </label>
                                                <input
                                                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                                    id="username"
                                                    type="text"
                                                    name="username"
                                                    value={username}
                                                    onChange={handleInputChange}
                                                    onBlur={handleBlur}
                                                    placeholder="Username"
                                                />
                                                {usernameError && (
                                                    <div
                                                        style={{ color: "red" }}
                                                    >
                                                        {usernameError}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="mb-4">
                                                <label
                                                    className="block text-grey-darker text-sm font-bold mb-2"
                                                    htmlFor="email"
                                                >
                                                    Email Address
                                                </label>
                                                <input
                                                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                                    id="email"
                                                    type="email"
                                                    name="email"
                                                    value={email}
                                                    onChange={handleInputChange}
                                                    onBlur={handleBlur}
                                                    placeholder="Your email address"
                                                />
                                                {emailError && (
                                                    <div
                                                        style={{ color: "red" }}
                                                    >
                                                        {emailError}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="mb-4 relative">
                                                <label
                                                    className="block text-grey-darker text-sm font-bold mb-2"
                                                    htmlFor="password"
                                                >
                                                    Password
                                                </label>
                                                <input
                                                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                                    id="password"
                                                    type="password"
                                                    name="password"
                                                    value={password}
                                                    onChange={handleInputChange}
                                                    onBlur={handleBlur}
                                                    placeholder="Your secure password"
                                                />

                                                {passwordError && (
                                                    <div
                                                        style={{ color: "red" }}
                                                    >
                                                        {passwordError}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="mb-4">
                                                <label
                                                    className="block text-grey-darker text-sm font-bold mb-2"
                                                    htmlFor="phonenumber"
                                                >
                                                    Phone Number
                                                </label>
                                                <input
                                                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                                    id="phonenumber"
                                                    type="tel"
                                                    name="phoneNumber"
                                                    value={phoneNumber}
                                                    onChange={handleInputChange}
                                                    onBlur={handleBlur}
                                                    placeholder="Your email address"
                                                />
                                                {phoneNumberError && (
                                                    <div
                                                        style={{ color: "red" }}
                                                    >
                                                        {phoneNumberError}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="flex mb-4">
                                                <div className="w-1/2 mr-1">
                                                    <label
                                                        className="block text-grey-darker text-sm font-bold mb-2"
                                                        htmlFor="country"
                                                    >
                                                        Country
                                                    </label>
                                                    <select
                                                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                                        name="country"
                                                        value={country}
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        onBlur={handleBlur}
                                                    >
                                                        {countries.map(
                                                            (country) => (
                                                                <option
                                                                    value={
                                                                        country.value
                                                                    }
                                                                >
                                                                    {
                                                                        country.label
                                                                    }
                                                                </option>
                                                            )
                                                        )}
                                                    </select>
                                                    {countryError && (
                                                        <div
                                                            style={{
                                                                color: "red",
                                                            }}
                                                        >
                                                            {countryError}
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="w-1/2 ml-1">
                                                    <label
                                                        className="block text-grey-darker text-sm font-bold mb-2"
                                                        htmlFor="city"
                                                    >
                                                        City
                                                    </label>
                                                    <select
                                                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                                        name="city"
                                                        value={city}
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        onBlur={handleBlur}
                                                    >
                                                        {cities[country] &&
                                                            cities[country].map(
                                                                (city) => (
                                                                    <option
                                                                        value={
                                                                            city.value
                                                                        }
                                                                    >
                                                                        {
                                                                            city.label
                                                                        }
                                                                    </option>
                                                                )
                                                            )}
                                                    </select>
                                                    {cityError && (
                                                        <div
                                                            style={{
                                                                color: "red",
                                                            }}
                                                        >
                                                            {cityError}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="mb-4">
                                                <label
                                                    className="block text-grey-darker text-sm font-bold mb-2"
                                                    htmlFor="pannumber"
                                                >
                                                    Pan No.
                                                </label>
                                                <input
                                                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                                    id="pan_no"
                                                    type="text"
                                                    name="panNumber"
                                                    value={panNumber}
                                                    onChange={handleInputChange}
                                                    onBlur={handleBlur}
                                                />
                                                {panNumberError && (
                                                    <div
                                                        style={{ color: "red" }}
                                                    >
                                                        {panNumberError}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="mb-4">
                                                <label
                                                    className="block text-grey-darker text-sm font-bold mb-2"
                                                    htmlFor="aadharnumber"
                                                >
                                                    Aadhar No.
                                                </label>
                                                <input
                                                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                                    id="aadhar_no"
                                                    name="aadharNumber"
                                                    value={aadharNumber}
                                                    onChange={handleInputChange}
                                                    onBlur={handleBlur}
                                                />
                                                {aadharNumberError && (
                                                    <div
                                                        style={{ color: "red" }}
                                                    >
                                                        {aadharNumberError}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="flex items-center justify-between mt-8">
                                                <button
                                                    onClick={handleSubmit}
                                                    className="w-full p-3 mt-4 bg-indigo-600 text-white rounded shadow hover:bg-green-700"
                                                    type="submit"
                                                >
                                                    Submit
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            )}
        </div>
    );
}
export default FormComponent;
