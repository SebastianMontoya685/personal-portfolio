import React from "react";

function ShowCaseVideo() {
    return (
        <div>
            <video
                src="/coding_video_1.mp4"
                autoPlay
                loop
                style={{ width: "100%", borderRadius: "12px" }}
            />
        </div>
    );
}

export default ShowCaseVideo;