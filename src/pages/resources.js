import Navbar from "../widgets/navbar";
import React, { useState } from 'react';
import '../css/navbar.css';
import "../css/page.css";
import { Container } from "@mui/material";
import Footer from "../widgets/footer";

var design_links = {
    "Toastmasters International Logo": "https://kxwuplxrsjipwfludoao.supabase.co/storage/v1/object/public/design_elements/tm_logo.png?t=2024-03-21T18%3A15%3A43.840Z",
    "Toastmasters International Cover Photo": "https://kxwuplxrsjipwfludoao.supabase.co/storage/v1/object/public/design_elements/tm_cover.png?t=2024-03-21T18%3A16%3A06.658Z",
    "Toastmasters International Wordmark": "https://kxwuplxrsjipwfludoao.supabase.co/storage/v1/object/public/design_elements/tm_wmark.png?t=2024-03-21T18%3A16%3A14.442Z",
    "Pathways Logo": "https://kxwuplxrsjipwfludoao.supabase.co/storage/v1/object/public/design_elements/path_logo.png?t=2024-03-21T18%3A16%3A24.105Z",
    "Pathways Badges": "https://kxwuplxrsjipwfludoao.supabase.co/storage/v1/object/public/design_elements/pathways-badges-png.zip?t=2024-03-21T18%3A16%3A33.425Z"
}

var video_links = {
    "Selecting a Path": "https://www.youtube.com/watch?v=KHgPjGgNtc8",
    "Navigating a Path": "https://www.youtube.com/watch?v=5jg32sw8pZM",
    "Submitting a Level": "https://www.youtube.com/watch?v=yrevskWIKE8",
    "Completing a Project": "https://www.youtube.com/watch?v=xZ-LGLSqZWk"
}

var script_links = {
    "Toastmaster of the Day Script": "https://kxwuplxrsjipwfludoao.supabase.co/storage/v1/object/public/scripts/toastmasters-675G-toastmaster-script-and-checklist-letter-size.pdf",
    "Table Topics Master Script": "https://kxwuplxrsjipwfludoao.supabase.co/storage/v1/object/public/scripts/toastmasters-675F-topicsmaster-script-and-log-letter-size.pdf",
    "Timer Script": "https://kxwuplxrsjipwfludoao.supabase.co/storage/v1/object/public/scripts/toastmasters-675E-timer-script-and-log-letter-size.pdf",
    "Grammarian Script": "https://kxwuplxrsjipwfludoao.supabase.co/storage/v1/object/public/scripts/toastmasters-675C-grammarian-script-and-log-letter-size.pdf",
    "Ah-Counter Script": "https://kxwuplxrsjipwfludoao.supabase.co/storage/v1/object/public/scripts/toastmasters-675A-ah-counter-script-and-log-letter-size.pdf",
    "General Evaluator Script": "https://kxwuplxrsjipwfludoao.supabase.co/storage/v1/object/public/scripts/toastmasters-675B-general-evaluator-checklist-letter-size.pdf",
    "Sergeant at Arms Script": "https://kxwuplxrsjipwfludoao.supabase.co/storage/v1/object/public/scripts/SAA-Script.pdf"
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
                        <div className="table links-table">
                            <table>
                                <tr onClick={
                                    () => {
                                        window.open(script_links["Toastmaster of the Day Script"]);
                                    }
                                }>
                                    <td>
                                        Toastmaster of the Day Script
                                    </td>
                                </tr>
                                <tr onClick={
                                    () => {
                                        window.open(script_links["Table Topics Master Script"]);
                                    }
                                }>
                                    <td>
                                        Table Topics Master Script
                                    </td>
                                </tr>
                                <tr onClick={
                                    () => {
                                        window.open(script_links["Timer Script"]);
                                    }
                                }>
                                    <td>
                                        Timer Script
                                    </td>
                                </tr>
                                <tr onClick={
                                    () => {
                                        window.open(script_links["Grammarian Script"]);
                                    }
                                }>
                                    <td>
                                        Grammarian Script
                                    </td>
                                </tr>
                                <tr onClick={
                                    () => {
                                        window.open(script_links["Ah-Counter Script"]);
                                    }
                                }>
                                    <td>
                                        Ah-Counter Script
                                    </td>
                                </tr>
                                <tr onClick={
                                    () => {
                                        window.open(script_links["General Evaluator Script"]);
                                    }
                                }>
                                    <td>
                                        General Evaluator Script
                                    </td>
                                </tr>
                                <tr onClick={
                                    () => {
                                        window.open(script_links["Sergeant at Arms Script"]);
                                    }
                                }>
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
                        <p className="subheader">Newsletters</p>
                        <div className="table links-table">
                            <table>
                                <tr>
                                    <td>
                                        Toastmasters International Newsletter
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        District 116 Newsletter
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Aurora Toastmasters Club Newsletter
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div style={{
                        width: '100%'
                    }}>
                        <p className="subheader">Design Elements</p>
                        <div className="table links-table">
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
                        <div className="table links-table">
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