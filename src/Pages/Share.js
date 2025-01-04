import React from "react";
import Layout from "../Components/Layout";

const Share = () => {


    const shareInvitation = () => {
        const shareData = {
            title: "Wedding Invitation",
            text: "You're invited to our wedding! 🎉",
            url: "https://your-wedding-invitation-link.com",
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
            <div className="p-4">
                <button
                    onClick={shareInvitation}
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Share Invitation
                </button>
            </div>
        </Layout>
    );
};

export default Share;
