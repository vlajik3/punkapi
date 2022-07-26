import React from "react";
import Page404 from "../assets/404.jpg";

const NotFound = () => {
    return (
        <div className="page_404">
            <img
                style={{ backgroundImage: `url(${Page404}) no-repeat center`, maxHeight: "100vh" }}
                src={Page404}
                alt="404 page"
            />
        </div>
    );
};

export default NotFound;
