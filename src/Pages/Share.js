import React, { useState } from "react";
import Layout from "../Components/Layout";
import { BiShare } from "react-icons/bi";

const Share = () => {
    const [code, setCode] = useState("");
    const [from, setFrom] = useState("");
    console.log("🚀 ~ Share ~ from:", from)

    const shareInvitation = () => {
        if (!from) return alert("Please Select `From`");
        if (!code) return alert("Please Enter Code");

        const shareData = {
            title: "Wedding Invitation",
            text: "You're invited to our wedding! 🎉",
            url: `https://souravpanja0306.github.io/testing/#/?from=${from}&code=${code}`,
        };

        if (navigator.share) {
            navigator.share(shareData).then(() => {
                console.log("Shared successfully!");
            }).catch(console.error);
        } else {
            alert("Sharing is not supported on this browser.");
        }
    };

    return (
        <Layout>
            <div className="flex justify-center items-center min-h-screen w-full">
                <div className="grid gap-2">
                    <select className="p-2 rounded-lg" onChange={(e) => setFrom(e.target.value)}>
                        <option disabled selected>Select Name</option>
                        <option value={"rina"}>Rina</option>
                        <option value={"sourav"}>Sourav</option>
                    </select>
                    <input className="p-2 w-full rounded-lg" type="number" placeholder="Enter Code" onChange={(e) => setCode(e.target.value)} />
                    <button onClick={shareInvitation} className="flex gap-2 justify-center items-center rounded-lg p-2 bg-blue-500 text-white">
                        <BiShare /> Share
                    </button>
                </div>
            </div>
        </Layout >
    );
};

export default Share;
