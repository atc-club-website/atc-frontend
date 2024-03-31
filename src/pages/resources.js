import Navbar from "../widgets/navbar";
import React, { useState, useEffect } from 'react';
import '../css/navbar.css';
import "../css/page.css";
import { Container, IconButton } from "@mui/material";
import Footer from "../widgets/footer";
import supabase from "../supabase/supabase_init";
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import AddBoxTwoToneIcon from '@mui/icons-material/AddBoxTwoTone';

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
    const [newsletters, setNewsletters] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [addNewsletterDialog, setAddNewsletterDialog] = useState(false);

    async function getNewsletters() {
        const { data, error } = await supabase
            .from('newsletters')
            .select('*');
        if (error) {
            console.error(error);
            return;
        }
        return data;
    }

    async function addNewsletter(title, url) {
        const { data, error } = await supabase
            .from('newsletters')
            .insert([{ title: title, url: url }]);
        if (error) {
            console.error(error);
            return;
        }
        return data;
    }

    async function deleteNewsletter(id) {
        const { data, error } = await supabase
            .from('newsletters')
            .delete()
            .eq('id', id);
        if (error) {
            console.error(error);
            return;
        }
        return data;
    }

    async function checkLoginStatus() {
        const { data, error } = await supabase.auth.getSession();
        if (data.session != null) {
            return true;
        }
        return false;
    }

    useEffect(() => {
        const checkStatus = async () => {
            const status = await checkLoginStatus();
            setIsLoggedIn(status);
        };
        checkStatus();
        getNewsletters().then(data => {
            setNewsletters(data);
        });
    }, []);

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
                        <span className="subheader">Scripts</span>
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
                        <tr>
                            <td>
                                <span className="subheader">Newsletters</span>
                            </td>
                            {
                                isLoggedIn && (
                                    <td valign="middle">
                                        <IconButton onClick={
                                            () => {
                                                setAddNewsletterDialog(true);
                                            }
                                        }>
                                            <AddBoxTwoToneIcon sx={{
                                                color: '#CD202C'
                                            }} />
                                        </IconButton>
                                    </td>
                                )
                            }
                            {
                                addNewsletterDialog && (
                                    <div style={{
                                        position: 'fixed',
                                        top: '20%',
                                        left: '40%',
                                        width: '400px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        zIndex: 1000,
                                    }}>
                                        <div style={{
                                            backgroundColor: 'white',
                                            padding: '25px',
                                            width: '80%',
                                            overflow: 'auto',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
                                            border: '3.5px solid #004165',
                                        }}>
                                            <h2>Add Newsletter</h2>
                                            <input
                                                className="form-control mt-1"
                                                id='title'
                                                placeholder="Enter Title"
                                                style={{
                                                    marginBottom: '10px',
                                                }}
                                            />
                                            <input
                                                className="form-control mt-1"
                                                id='url'
                                                placeholder='Enter url'
                                                style={{
                                                    marginBottom: '10px'
                                                }}
                                            />
                                            <button onClick={() => setAddNewsletterDialog(false)} className="add-no-btn" style={{
                                                marginBottom: '10px'
                                            }}>Cancel</button>
                                            <button onClick={() => {
                                                let title = document.getElementById('title').value;
                                                let url = document.getElementById('url').value;
                                                addNewsletter(title, url).then(() => {
                                                    setAddNewsletterDialog(false);
                                                });
                                            }} className="add-yes-btn">Add</button>
                                        </div>
                                    </div>
                                )
                            }
                        </tr>
                        <div className="table links-table">
                            <table>
                                {
                                    newsletters.map((row, index) => (
                                        <tr key={index}>
                                            <td onClick={() => window.open(row.url)}>
                                                {row.title}
                                            </td>
                                            {
                                                isLoggedIn && (
                                                    <td style={{
                                                        width: '10px'
                                                    }}>
                                                        <DeleteTwoToneIcon onClick={() => {
                                                            deleteNewsletter(row.id).then(() => {
                                                                getNewsletters().then(data => {
                                                                    setNewsletters(data);
                                                                });
                                                            });
                                                        }} />
                                                    </td>
                                                )
                                            }
                                        </tr>
                                    ))
                                }
                            </table>
                        </div>
                    </div>
                    <div style={{
                        width: '100%'
                    }}>
                        <span className="subheader">Design Elements</span>
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
                        <span className="subheader">Videos</span>
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