import Navbar from "../widgets/navbar";
import React, { useState, useEffect } from 'react';
import '../css/navbar.css';
import "../css/page.css";
import { Container, IconButton, Button } from "@mui/material";
import Footer from "../widgets/footer";
import supabase from "../supabase/supabase_init";
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import AddBoxTwoToneIcon from '@mui/icons-material/AddBoxTwoTone';
import CloudUploadTwoToneIcon from '@mui/icons-material/CloudUploadTwoTone';

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

function Resources(params) {
    const [newsletters, setNewsletters] = useState([]);
    const [scripts, setScripts] = useState([]);
    const [newScriptUrl, setNewScriptUrl] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [addNewsletterDialog, setAddNewsletterDialog] = useState(false);
    const [addScriptDialog, setAddScriptDialog] = useState(false);

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

    async function getScripts() {
        const { data, error } = await supabase
            .from('scripts')
            .select('*');
        if (error) {
            console.error(error);
            return;
        }
        return data;
    }

    async function uploadScript(file) {
        const { data, error } = await supabase
            .storage
            .from('scripts')
            .upload(file.name, file, {
                cacheControl: '3600',
                upsert: true,
            });
        if (error) {
            console.error(error);
            return;
        }
        const publicURLData = supabase.storage
            .from('scripts')
            .getPublicUrl(file.name);
        setNewScriptUrl(publicURLData.data.publicUrl);
    }

    async function addScript(title, url) {
        const { data, error } = await supabase
            .from('scripts')
            .insert([{ title: title, url: url }]);
        if (error) {
            console.error(error);
            return;
        }
        return data;
    }

    async function getScriptUrl(id) {
        const { data, error } = await supabase
            .from('scripts')
            .select('url')
            .eq('id', id);
        if (error) {
            console.error(error);
            return;
        }
        return data[0].url;
    }

    async function deleteScript(id) {
        const confirm = window.confirm('Are you sure you want to delete this script?');
        if (!confirm) {
            return;
        }
        const url = await getScriptUrl(id);
        const { data, error } = await supabase
            .storage
            .from('scripts')
            .remove([url]);
        if (error) {
            console.error(error);
            return;
        }
        const { data1, error1 } = await supabase
            .from('scripts')
            .delete()
            .eq('id', id);
        if (error1) {
            console.error(error);
            return;
        }
        return [data, data1];
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
        getScripts().then(data => {
            setScripts(data);
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
                <div className="resources-page">
                    <div style={{
                        width: '100%'
                    }}>
                        <tr>
                            <td>
                                <span className="subheader">Scripts</span>
                            </td>
                            {
                                isLoggedIn && (
                                    <td valign="middle">
                                        <IconButton onClick={
                                            () => {
                                                setAddScriptDialog(true);
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
                                addScriptDialog && (
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
                                            <h2>Add Script</h2>
                                            <input
                                                className="form-control mt-1"
                                                id='title'
                                                placeholder="Enter Title"
                                                style={{
                                                    marginBottom: '10px',
                                                }}
                                            />
                                            <label htmlFor="script-button" style={{
                                                marginBottom: '10px'
                                            }}>
                                                <input
                                                    style={{ display: 'none' }}
                                                    accept="pdf/*"
                                                    id="script-button"
                                                    type="file"
                                                    onChange={(e) => uploadScript(e.target.files[0])}
                                                />
                                                <Button style={{
                                                    border: 'none',
                                                    backgroundColor: 'white',
                                                    color: '#004165',
                                                    fontFamily: 'myriad-pro-b'
                                                }} variant="contained" component="span" startIcon={
                                                    <CloudUploadTwoToneIcon style={{
                                                        color: '#004165'
                                                    }} />
                                                }>
                                                    Upload Script
                                                </Button>
                                            </label>
                                            <button onClick={() => setAddScriptDialog(false)} className="add-no-btn" style={{
                                                marginBottom: '10px'
                                            }}>Cancel</button>
                                            <button onClick={() => {
                                                let title = document.getElementById('title').value;
                                                let url = newScriptUrl;
                                                addScript(title, url).then(() => {
                                                    setAddScriptDialog(false);
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
                                    scripts.map((row, index) => (
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
                                                            deleteScript(row.id).then(() => {
                                                                getScripts().then(data => {
                                                                    setScripts(data);
                                                                });
                                                            });
                                                        }} style={{
                                                            cursor: 'pointer',
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
                                                        }} style={{
                                                            cursor: 'pointer',
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
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Footer />
        </div>
    )
}

export default Resources;