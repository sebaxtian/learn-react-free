import React from "react";
import ImgParentChild from "../img/parent-child-components.png";

function MainContent() {
    return (
        <main>
            <p>This is the place where you can put the content ...</p>
            <h4>Parent Child Components</h4>
            <img
                src={ImgParentChild}
                width="90%"
                alt="parent-child-components.png"
                title="Parent Child Components"
            ></img>
            <br />
            <a href="https://scrimba.com/p/p7P5Hd/cQ726Sr" target="_blank">
                Scrimba: React Parent/Child Components
            </a>
        </main>
    );
}

export default MainContent;
