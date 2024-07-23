import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    sendEmailVerification,
} from "firebase/auth";
import { auth } from "../firebase/setup";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EmailSignup = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const Signup = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            toast.success("Please verify the mail Id!");
            onAuthStateChanged(auth, (user) => {
                sendEmailVerification(user);
            });
        } catch (error) {
            console.error(error);
        }
    };
    console.log(auth);
    return (
        <>
            <ToastContainer />
            <div
                className="relative z-10"
                aria-labelledby="modal-title"
                role="dialog"
                aria-modal="true"
            >
                <div
                    className="fixed inset-0 bg-gray-950 bg-opacity-80 transition-opacity"
                    aria-hidden="true"
                ></div>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div className="sm:items-start ">
                                    <h1
                                        onClick={() => {
                                            props?.setEmailSignup(false);
                                        }}
                                        className="cursor-pointer fixed right-5 top-3"
                                    >
                                        X
                                    </h1>
                                    <h1 className="mt-3 font-semibold text-lg text-center">
                                        Signup
                                    </h1>
                                    <h1 className="mt-3 text-sm font-semibold">
                                        Email
                                    </h1>
                                    <input
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}
                                        type="text"
                                        placeholder="Your Email"
                                        className="mt-3  outline-blue-400 border border-spacing-1 p-2 w-full"
                                    />
                                    <h1 className="mt-3 text-sm font-semibold">
                                        Password
                                    </h1>
                                    <input
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                        }}
                                        type="password"
                                        placeholder="Your Password"
                                        className="mt-3 outline-blue-400 border border-spacing-1 p-2 w-full"
                                    />
                                </div>
                                <hr className="mt-20" />
                                <div className="w-full grid justify-items-end">
                                    <button
                                        onClick={Signup}
                                        className="bg-blue-500 text-white rounded-full p-2 w-20 mt-3 "
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EmailSignup;
