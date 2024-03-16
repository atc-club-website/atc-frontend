import Navbar from "../widgets/navbar";
import React, { useState } from 'react';
import '../css/navbar.css';
import "../css/page.css";
import { Container } from "@mui/material";
import Footer from "../widgets/footer";

var design_links = {
    "Toastmasters International Logo": "https://toastmasterscdn.azureedge.net/medias/images/brand-items/logos-and-wordmarks/toastmasters-logo-color-png.png",
    "Toastmasters International Cover Photo": "https://toastmasterscdn.azureedge.net/medias/images/brand-items/facebook-cover-photo-blue.png",
    "Toastmasters International Wordmark": "https://toastmasterscdn.azureedge.net/medias/images/brand-items/toastmasterswordmarkcolor.png",
    "Pathways Logo": "https://toastmasterscdn.azureedge.net/medias/images/pathways/logos/pathways-logo-final-rgb-png.png",
    "Pathways Badges": "https://toastmasterscdn.azureedge.net/medias/images/brand-items/pathways-badges-png.zip"
}

var video_links = {
    "Selecting a Path": "https://www.youtube.com/watch?v=KHgPjGgNtc8",
    "Navigating a Path": "https://www.youtube.com/watch?v=5jg32sw8pZM",
    "Submitting a Level": "https://www.youtube.com/watch?v=yrevskWIKE8",
    "Completing a Project": "https://www.youtube.com/watch?v=xZ-LGLSqZWk"
}

function Resources(params) {
    return (
        <div>
            <Navbar />
            <br />
            <br />
            <br />
            <Container>
                <p className="header">Resources</p>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                }}>
                    <div style={{
                        width: '100%'
                    }}>
                        <p className="subheader">Scripts</p>
                        <div className="table">
                            <table>
                                <tr>
                                    <td>
                                        Table Topics Master Script
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Timer Script
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Grammarian Script
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Ah-Counter Script
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        General Evaluator Script
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Evaluator Script
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Sergeant at Arms Script
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div style={{
                        width: '100%'
                    }}>
                        <p className="subheader">Design Elements</p>
                        <div className="table">
                            <table>
                                <tr onClick={
                                    () => {
                                        window.open(design_links["Toastmasters International Logo"]);
                                    }
                                }>
                                    <td>
                                        Toastmasters International Logo
                                    </td>
                                </tr>
                                <tr onClick={
                                    () => {
                                        window.open(design_links["Toastmasters International Cover Photo"]);
                                    }
                                }>
                                    <td>
                                        Toastmasters International Cover Photo
                                    </td>
                                </tr>
                                <tr onClick={
                                    () => {
                                        window.open(design_links["Toastmasters International Wordmark"]);
                                    }
                                }>
                                    <td>
                                        Toastmasters International Wordmark
                                    </td>
                                </tr>
                                <tr onClick={
                                    () => {
                                        window.open(design_links["Pathways Logo"]);
                                    }
                                }>
                                    <td>
                                        Pathways Logo
                                    </td>
                                </tr>
                                <tr onClick={
                                    () => {
                                        window.open(design_links["Pathways Badges"]);
                                    }
                                }>
                                    <td>
                                        Pathways Badges
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div style={{
                        width: '100%'
                    }}>
                        <p className="subheader">Videos</p>
                        <div className="table">
                            <table>
                                <tr onClick={
                                    () => {
                                        window.open(video_links["Selecting a Path"]);
                                    }
                                }>
                                    <td>
                                        Selecting a Path
                                    </td>
                                </tr>
                                <tr onClick={
                                    () => {
                                        window.open(video_links["Navigating a Path"]);
                                    }
                                }>
                                    <td>
                                        Navigating a Path
                                    </td>
                                </tr>
                                <tr onClick={
                                    () => {
                                        window.open(video_links["Submitting a Level"]);
                                    }
                                }>
                                    <td>
                                        Submitting a Level
                                    </td>
                                </tr>
                                <tr onClick={
                                    () => {
                                        window.open(video_links["Completing a Project"]);
                                    }
                                }>
                                    <td>
                                        Completing a Project
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default Resources;