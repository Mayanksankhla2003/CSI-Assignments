import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { auth, storage } from "../firebase/setup";

const PostPopup = (props) => {
    const questionRef = collection(storage, "questions");
    const [quest, setQuest] = useState("");

    const addQuestion = () => {
        addDoc(questionRef, {
            question: quest,
            email: auth?.currentUser?.email,
        });
    };

    return (
        <div
            class="relative z-10"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            <div
                class="fixed inset-0 bg-zinc-950 bg-opacity-75 transition-opacity"
                aria-hidden="true"
            ></div>

            <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div class="sm:items-start">
                                <h1
                                    onClick={() => {
                                        props?.setPost(false);
                                    }}
                                    className="cursor-pointer"
                                >
                                    X
                                </h1>
                                <input
                                    onChange={(e) => setQuest(e.target.value)}
                                    placeholder="Start your question with Why, What, How, etc."
                                    className="w-full outline-none h-30"
                                />
                                <div
                                    onClick={() => {
                                        props?.setPost(false);
                                    }}
                                >
                                    <button
                                        onClick={addQuestion}
                                        className="bg-blue-500 text-white rounded-full p-2 w-40 ml-80 mt-3"
                                    >
                                        Add question
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostPopup;
