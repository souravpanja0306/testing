import React, { useState } from "react";
import Layout from "../Components/Layout";
import { BiShare } from "react-icons/bi";

const Share = () => {
    const [code, setCode] = useState("");
    const [from, setFrom] = useState("");

    const shareInvitation = () => {
        if (!from) return alert("Please Select `From`");
        if (!code) return alert("Please Enter Code");

        const shareData = {
            title: "Wedding Invitation",
            text: "🎉🎊🎉 You're Invited! Join us in celebrating the wedding of Sourav Panja & Rina Halder. Click the link for details and share the joy! 🎉🎊🎉",
            url: `https://souravpanja0306.github.io/testing/#/?from=${from}&code=${code}`,
        };

        if (navigator.share) {
            navigator.share(shareData).then(() => {
            }).catch(console.error);
        } else {
            alert("Sharing is not supported on this browser.");
        };
    };

    return (
        <Layout>
            <div className="flex justify-center items-center min-h-screen w-full">
                <div className="grid gap-2">
                    <select className="text-center p-2 rounded-lg bg-[#141d31] text-white font-playwrite" onChange={(e) => setFrom(e.target.value)}>
                        <option disabled selected>Select Name</option>
                        <option value={"rina"}>Rina Halder</option>
                        <option value={"sourav"}>Sourav Panja</option>
                    </select>
                    <input className="text-center p-2 w-full rounded-lg bg-[#141d31] text-white font-playwrite" type="number" placeholder="Enter Code" onChange={(e) => setCode(e.target.value)} />
                    <button onClick={shareInvitation} className="bg-[#141d31] text-white font-bold p-2 font-playwrite flex justify-center items-center gap-2 rounded-lg">
                        <BiShare className="text-2xl" />Share
                    </button>
                </div>
            </div>
        </Layout >
    );
};

export default Share;
