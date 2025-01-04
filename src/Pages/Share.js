import React, { useState } from "react";
import Layout from "../Components/Layout";
import { BiShare } from "react-icons/bi";

const Share = () => {
    const [code, setCode] = useState("");
    const [from, setFrom] = useState("");
    const [family, setFamily] = useState("");
    const [address, setAddress] = useState("");
    const [name, setName] = useState("");

    const shareInvitation = () => {
        // if (!from) return alert("Please Select `From`");
        // if (!code) return alert("Please Enter Code");

        const shareData = {
            title: "Wedding Invitation",
            text: "🎉🎊🎉 You're Invited! Join us in celebrating the wedding of Sourav Panja & Rina Halder. Click the link for details and share the joy! 🎉🎊🎉",
            url: `https://souravpanja0306.github.io/testing/#/?f=${from}&a=${encodeURIComponent(address)}&n=${encodeURIComponent(name)}&w=${family}`,
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
                        <option disabled selected>Invitation Send From</option>
                        <option value={"0"}>Rina Halder</option>
                        <option value={"1"}>Sourav Panja</option>
                    </select>
                    <select className="text-center p-2 rounded-lg bg-[#141d31] text-white font-playwrite" onChange={(e) => setFamily(e.target.value)}>
                        <option disabled selected>Family/Single</option>
                        <option value={"1"}>With Family</option>
                        <option value={"0"}>Self</option>
                    </select>
                    <input className="text-center p-2 w-full rounded-lg bg-[#141d31] text-white font-playwrite"
                        type="text"
                        placeholder="Invitation Send To"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        className="text-center p-2 w-full rounded-lg bg-[#141d31] text-white font-playwrite"
                        type="text"
                        placeholder="Enter Address Here..."
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <button onClick={shareInvitation} className="bg-[#141d31] text-white font-bold p-2 font-playwrite flex justify-center items-center gap-2 rounded-lg">
                        <BiShare className="text-2xl" />Share
                    </button>
                </div>
            </div>
        </Layout >
    );
};

export default Share;
