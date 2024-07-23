import React from "react";
import Avatar from "react-avatar";
import account from "../assets/account.png";
import { auth, storage } from "../firebase/setup";
import question from "../assets/question.png";
import pen from "../assets/pen.png";
import edit from "../assets/edit.png";
import paper from "../assets/paper.jpg";
import { addDoc, collection, doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import comment from "../assets/comment.png";
import { Link } from "react-router-dom";
import PostPopup from "./PostPopup";

const Rightbar = (props) => {
    const questionRef = collection(storage, "questions");
    const [questionData, setQuestionData] = useState([]);
    const [commentToggle, setCommentToggle] = useState(false);
    const [questionId, setQuestionId] = useState("");
    const [answers, setAnswers] = useState("");
    const [post, setPost] = useState(false);

    const getQuestion = async () => {
        try {
            const data = await getDocs(questionRef);
            const filteredData = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            setQuestionData(filteredData);
        } catch (error) {
            console.error(error);
        }
    };

    const answerDoc = doc(
        storage,
        "questions",
        `${questionId ? questionId : Math.random()}`
    );
    const answerRef = collection(answerDoc, "answers");

    const addAnswer = async () => {
        try {
            await addDoc(answerRef, {
                ans: answers,
                email: auth?.currentUser?.email,
            });
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getQuestion();
    }, []);

    return (
        <div className="p-2 rounded-sm">
            <div className="bg-white p-2 h-20 border border-spacing-1">
                <div className="flex">
                    {auth?.currentUser?.emailVerified ? (
                        <Avatar
                            round
                            size="30"
                            className="mt-0.5 ml-2 cursor-pointer"
                            name={auth?.currentUser?.email ?? account}
                        />
                    ) : (
                        <Avatar
                            round
                            size="30"
                            className="mt-0.5 ml-2 cursor-pointer"
                            src={account}
                        />
                    )}
                    <input
                        onClick={() => setPost(true)}
                        className="bg-zinc-100 p-1 ml-4 placeholder-gray-600 border border-spacing-1 rounded-full w-full cursor-pointer"
                        type="text"
                        placeholder="What do you want to ask or share?"
                    />
                </div>
                <div className="flex pt-2">
                    <div
                        onClick={() => setPost(true)}
                        className="ml-16 flex cursor-pointer"
                    >
                        <img src={question} className="w-5 h-5" />
                        <h1 className="ml-2 text-sm">Ask</h1>
                    </div>
                    <h1 className="ml-20">|</h1>
                    <div className="ml-16 flex">
                        <img src={edit} alt="" className="w-5 h-5" />
                        <h1 className="ml-2 text-sm">Answer</h1>
                    </div>
                    <h1 className="ml-20">|</h1>
                    <div
                        onClick={() => setPost(true)}
                        className="ml-16 flex cursor-pointer"
                    >
                        <img src={pen} alt="" className="w-5 h-5" />
                        <h1 className="ml-2 text-sm">Post</h1>
                    </div>
                </div>
            </div>
            {questionData
                .filter((data) =>
                    props?.search
                        ? data?.question?.includes(props?.search)
                        : data?.question?.includes(props?.menu)
                )
                .map((data) => {
                    return (
                        <>
                            <div className="bg-white mt-2 p-2 ">
                                <div className="flex">
                                    {auth?.currentUser?.emailVerified ? (
                                        <Avatar
                                            round
                                            size="30"
                                            className="mt-0.5 ml-2 cursor-pointer"
                                            name={data?.email ?? account}
                                        />
                                    ) : (
                                        <Avatar
                                            round
                                            size="30"
                                            className="mt-0.5 ml-2 cursor-pointer"
                                            src={account}
                                        />
                                    )}
                                    <h1 className="ml-3 font-bold mt-1.5">
                                        {data?.email?.substring(
                                            0,
                                            data?.email?.indexOf("@")
                                        )}
                                    </h1>
                                </div>
                                <h1 className="mt-4 font-bold ml-4">
                                    {data?.question}
                                    {data?.question.includes("?") ? "" : "?"}
                                </h1>
                                <hr className="mt-3" />
                                <div className="flex">
                                    <img
                                        onClick={() => {
                                            setQuestionId(data.id);
                                            setCommentToggle(!commentToggle);
                                        }}
                                        src={comment}
                                        alt=""
                                        className="h-5 w-5 mt-3 cursor-pointer ml-3"
                                    />
                                    <Link
                                        to="/answers"
                                        state={{ id: data?.id }}
                                    >
                                        <button className="border border-spacing-1 p-1 mt-2 rounded-full ml-3">
                                            Answers
                                        </button>
                                    </Link>
                                </div>

                                {commentToggle && (
                                    <div className="flex mt-3">
                                        {auth?.currentUser?.emailVerified ? (
                                            <Avatar
                                                round
                                                size="35"
                                                className="mt-0.5 ml-2 cursor-pointer"
                                                name={
                                                    auth?.currentUser?.email ??
                                                    account
                                                }
                                            />
                                        ) : (
                                            <Avatar
                                                round
                                                size="30"
                                                className="mt-0.5 ml-2 cursor-pointer"
                                                src={account}
                                            />
                                        )}
                                        <input
                                            onChange={(e) =>
                                                setAnswers(e.target.value)
                                            }
                                            className="bg-zinc-100 p-1 ml-4 placeholder-gray-600 border border-spacing-1 rounded-full w-full cursor-pointer h-10"
                                            type="text"
                                            placeholder="Add a comment"
                                        />
                                        <Link
                                            to="/answers"
                                            state={{ id: data?.id }}
                                        >
                                            <button
                                                onClick={() => {
                                                    addAnswer();
                                                    setCommentToggle(false);
                                                }}
                                                className="bg-blue-500 text-white rounded-full p-2 w-60 ml-3 "
                                            >
                                                Add Comment
                                            </button>
                                        </Link>
                                    </div>
                                )}
                            </div>
                            {/* <img src={paper} alt="" /> */}
                        </>
                    );
                })}
            {post && <PostPopup setPost={setPost} />}
        </div>
    );
};

export default Rightbar;
