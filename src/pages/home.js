import Navbar from "../widgets/navbar";
import Footer from "../widgets/footer";
import { useEffect, useState } from "react";
import groupPic from '../assets/group_pic.jpg';
import presidentPic from '../assets/presidentPic.jpeg';
import { useNavigate } from "react-router-dom";
import supabase from "../supabase/supabase_init";
import Button from '@mui/material/Button';
import "../css/home.css";
import { IconButton, TextField } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUploadTwoTone';
import AddBoxTwoToneIcon from '@mui/icons-material/AddBoxTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';

function HomePage() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [meetingDate, setMeetingDate] = useState('');
    const [newMeetingDate, setNewMeetingDate] = useState('');
    const [flyerUrl, setFlyerUrl] = useState('');
    const [agendaUrl, setAgendaUrl] = useState('');
    const [newFlyerUrl, setNewFlyerUrl] = useState('');
    const [newAgendaUrl, setNewAgendaUrl] = useState('');
    const [showFlyerImage, setShowFlyerImage] = useState(false);
    const [showAgendaImage, setShowAgendaImage] = useState(false);
    const [showPresidentMessage, setShowPresidentMessage] = useState(false);
    const [showAddMeeting, setShowAddMeeting] = useState(false);
    const [showUpdateMeeting, setShowUpdateMeeting] = useState(false);
    const [showAddEvent, setShowAddEvent] = useState(false);
    const [events, setEvents] = useState([]);
    async function checkLoginStatus() {
        const { data, error } = await supabase.auth.getSession()
        if (data.session != null) {
            return true;
        }
        return false;
    }
    async function getlatestMeeting() {
        const { data, error } = await supabase
            .from('meetings')
            .select('*')
            .order('date', { ascending: false })
            .limit(1);
        if (error) {
            console.error(error);
            throw error;
        }
        return data;
    }
    async function getUpcomingEvents() {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const { data, error } = await supabase
            .from('events')
            .select('*')
            .filter('date', 'gt', today.toISOString().split('T')[0])
            .order('date', { ascending: true })
            .limit(3);
        if (error) {
            console.error(error);
            throw error;
        }
        return data;
    }
    async function addUpcomingEvent(title, desc, date) {
        if (date < new Date().toISOString().split('T')[0]) {
            throw new Error('Date cannot be in the past');
        }
        const { data, error } = await supabase.from('events').insert([{ title: title, desc: desc, date: date }]);
        if (error) {
            console.error(error);
            throw error;
        }
        return data;
    }
    async function deleteUpcomingEvent(id) {
        if (window.confirm('Are you sure you want to delete this event?')) {
            const { data, error } = await supabase.from('events').delete().match({ id: id });
            if (error) {
                console.error(error);
                throw error;
            }
            return data;
        }
    }
    async function uploadFlyer(file) {
        console.log(file.name);
        const { data, error } = await supabase.storage
            .from('flyers')
            .upload(file.name, file, {
                cacheControl: '3600',
                upsert: true,
            });
        if (error) {
            console.error(error);
            throw error;
        }

        const publicURLData = supabase.storage
            .from('flyers')
            .getPublicUrl(file.name);
        setNewFlyerUrl(publicURLData.data.publicUrl);
    }
    async function uploadAgenda(file) {
        const { data, error } = await supabase.storage
            .from('agendas')
            .upload(file.name, file, {
                cacheControl: '3600',
                upsert: true,
            });
        if (error) {
            console.error(error);
            throw error;
        }

        const publicURLData = supabase.storage
            .from('agendas')
            .getPublicUrl(file.name);
        setNewAgendaUrl(publicURLData.data.publicUrl);
    }
    async function addMeeting(date, flyerUrl, agendaUrl) {
        const { data, error } = await supabase.from('meetings').insert([{ date: date, flyerUrl: flyerUrl, agendaUrl: agendaUrl }]);
        if (error) {
            console.error(error);
            throw error;
        }
        return data;
    }
    async function updateMeeting(date, flyerUrl, agendaUrl) {
        const { data, error } = await supabase
            .from('meetings')
            .update({ date: date, flyerUrl: flyerUrl, agendaUrl: agendaUrl })
            .match({ date: date });
        if (error) {
            console.error(error);
            throw error;
        }
        return data;
    }
    useEffect(() => {
        getlatestMeeting().then(data => {
            if (data.length > 0) {
                let date = new Date(data[0].date);
                let day = date.getDate();
                let month = date.getMonth() + 1;
                let year = date.getFullYear();
                let formattedDate = `${day < 10 ? '0' + day : day}-${month < 10 ? '0' + month : month}-${year}`;
                setMeetingDate(formattedDate);
                setFlyerUrl(data[0].flyerUrl);
                setAgendaUrl(data[0].agendaUrl);
            }
        });
        const checkStatus = async () => {
            const status = await checkLoginStatus();
            setIsLoggedIn(status);
        };
        checkStatus();
        getUpcomingEvents().then(data => {
            setEvents(data);
        });
    }, []);
    return (
        <div>
            <Navbar />
            <br />
            <br />
            <br />
            <br />
            <div className='home-top-half'>
                <div className='home-pic-container'>
                    <img src={groupPic} alt='group pic' />
                </div>
                <div className='home-pres-about-container'>
                    <div className='home-president-message-container'>
                        <h2>President's message</h2>
                        <div style={
                            {
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                            }
                        }>
                            <img src={presidentPic} style={{
                                width: '100px',
                                marginRight: '25px',
                            }} alt='person pic' />
                            <p>
                                Dear Esteemed Toastmasters !!<br />
                                I hope this message finds you all in good health and high spirits. As we continue on our journey of personal and professional development through Toastmasters, it’s my honor to serve as the President of our Club.<br />
                                It is with a deep sense of pride and excitement that I would like to share that Aurora TM’s club has achieved a remarkable milestone this year.<br />
                                <span className="read-more" onClick={() => setShowPresidentMessage(true)}>Read More</span>
                            </p>
                        </div>
                    </div>
                    {
                        showPresidentMessage && (
                            <div style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                zIndex: 1000,
                            }}>
                                <div onClick={() => setShowPresidentMessage(false)} style={{
                                    backgroundColor: 'white',
                                    padding: '25px',
                                    width: '80%',
                                    overflow: 'auto',
                                }}>
                                    <h2>President's message</h2>
                                    <img src={presidentPic} style={{
                                        width: '100px',
                                    }} alt='person pic' />
                                    <p>
                                        Dear Esteemed Toastmasters !!<br />
                                        I hope this message finds you all in good health and high spirits. As we continue on our journey of personal and professional development through Toastmasters, it’s my honor to serve as the President of our Club.<br />
                                        It is with a deep sense of pride and excitement that I would like to share that Aurora TM’s club has achieved a remarkable milestone this year. TM Sahitya Reddy has become the very first DTM from our club. Our talented and dedicated Toastmasters - Pradnya, Poornima and Chandra have taken up leadership roles as Area Directors. It’s a testament to their hard work, incredible capabilities, dedication and passion for Toastmasters. I’m immensely proud of their achievements, not just as the President but as a fellow member who has witnessed the incredible growth and transformation within our club. Together we will continue to reach new heights and inspire even more members to follow in their footsteps.<br />
                                        I want to express my gratitude to our Dedicated EXCOM , mentors and every member who contributes to our club’s success. Your commitment is what makes our club Thrive.<br />
                                        Kudos to our Dynamic VPPR; TM Suchitra and the editorial team comprising of TM Vijayalata, TM Rajashree and TM Muna for this latest edition of the Newsletter- “The Rise - Achievers“<br />
                                        Thank you all for being a part of this amazing journey of achievement. I look forward to witnessing even more remarkable milestones and accomplishments form our members.<br />
                                        Together, we can continue to create an environment that welcomes, encourages and inspires all those who enter. Let us strive for excellence in every meeting, let us challenge ourselves to step outside of our comfort zones and embrace the growth that comes from pushing our boundaries.<br />
                                        Let’s continue to thrive, break new barriers and set new standards of excellence.<br />
                                        Aurorians - let’s Rise, Achieve and Shine.
                                    </p>
                                </div>
                            </div>
                        )
                    }
                    <div className='home-about-us-container'>
                        <h2>About Us</h2>
                        <p>
                            Welcome to Aurora Toastmasters Club, a vibrant community dedicated to nurturing communication and leadership skills in women. Our club, named after the Latin word for "dawn," symbolizes the promise of new beginnings and the radiant potential within each of our members.<br />
                            Founded on October 15th, 2017, by the visionary leader Sunita Saini, Aurora Toastmasters Club was born from a profound belief in the power of women to transform themselves and their communities. Inspired by her vision, our club stands as a testament to the unwavering commitment to personal and professional development.<br />
                            <span className="read-more" onClick={() => navigate('/aboutUs')}>Read More</span>
                        </p>
                    </div>
                </div>
            </div>
            <p className='home-bottom-half'>
                <div>
                    <div className="home-upcoming-meeting-container">
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            textAlign: 'center',
                            verticalAlign: 'baseline',
                            padding: '25px',
                        }}>
                            <h2 style={{
                                color: 'white',
                                textAlign: 'center'
                            }}>Upcoming<br />Meeting</h2>
                            <h3 style={{
                                color: 'white',
                                textAlign: 'center'
                            }}>{meetingDate}</h3>
                            {
                                showAddMeeting && (
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
                                            <h2>Add Meeting</h2>
                                            <label htmlFor='date' style={{ fontFamily: 'myriad-pro-b', color: '#004165' }}>Date</label>
                                            <TextField
                                                type='date'
                                                id='date'
                                                value={newMeetingDate}
                                                onChange={(e) => setNewMeetingDate(e.target.value)}
                                            />
                                            <br />
                                            <label htmlFor="flyer-button" style={{
                                                marginBottom: '10px'
                                            }}>
                                                <input
                                                    style={{ display: 'none' }}
                                                    accept="image/*"
                                                    id="flyer-button"
                                                    type="file"
                                                    onChange={(e) => uploadFlyer(e.target.files[0])}
                                                />
                                                <Button style={{
                                                    border: 'none',
                                                    backgroundColor: 'white',
                                                    color: '#004165',
                                                    fontFamily: 'myriad-pro-b'
                                                }} variant="contained" component="span" startIcon={
                                                    <CloudUploadIcon style={{
                                                        color: '#004165'
                                                    }} />
                                                }>
                                                    Upload Flyer
                                                </Button>
                                            </label>
                                            <label htmlFor="agenda-button">
                                                <input
                                                    style={{ display: 'none' }}
                                                    accept="image/*"
                                                    id="agenda-button"
                                                    type="file"
                                                    onChange={(e) => uploadAgenda(e.target.files[0])}
                                                />
                                                <Button style={{
                                                    border: 'none',
                                                    backgroundColor: 'white',
                                                    color: '#004165',
                                                    fontFamily: 'myriad-pro-b'
                                                }} variant="contained" component="span" startIcon={
                                                    <CloudUploadIcon style={{
                                                        color: '#004165'
                                                    }} />
                                                }>
                                                    Upload Agenda
                                                </Button>
                                            </label>
                                            <br />
                                            <button onClick={() => setShowAddMeeting(false)} className="add-no-btn" style={{
                                                marginBottom: '10px'
                                            }}>Cancel</button>
                                            <button onClick={() => {
                                                console.log("Adding meeting")
                                                function convertDate(inputFormat) {
                                                    function pad(s) { return (s < 10) ? '0' + s : s; }
                                                    var parts = inputFormat.split('-');
                                                    var d = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
                                                    return [d.getFullYear(), pad(d.getMonth() + 1), pad(d.getDate())].join('-');
                                                }
                                                let convertedDate = convertDate(newMeetingDate);
                                                addMeeting(convertedDate, newFlyerUrl, newAgendaUrl).then(() => {
                                                    setShowAddMeeting(false);
                                                    setNewMeetingDate('');
                                                    setNewFlyerUrl('');
                                                    setNewAgendaUrl('');
                                                });
                                            }} className="add-yes-btn">Add</button>
                                        </div>
                                    </div>
                                )
                            }
                            {
                                showUpdateMeeting && (
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
                                            <h2>Update Upcoming Meeting</h2>
                                            <label htmlFor='date' style={{ fontFamily: 'myriad-pro-b', color: '#004165' }}>Date: {meetingDate}</label>
                                            <br />
                                            <label htmlFor="flyer-button" style={{
                                                marginBottom: '10px'
                                            }}>
                                                <input
                                                    style={{ display: 'none' }}
                                                    accept="image/*"
                                                    id="flyer-button"
                                                    type="file"
                                                    onChange={(e) => uploadFlyer(e.target.files[0])}
                                                />
                                                <Button style={{
                                                    border: 'none',
                                                    backgroundColor: 'white',
                                                    color: '#004165',
                                                    fontFamily: 'myriad-pro-b'
                                                }} variant="contained" component="span" startIcon={
                                                    <CloudUploadIcon style={{
                                                        color: '#004165'
                                                    }} />
                                                }>
                                                    Upload Flyer
                                                </Button>
                                            </label>
                                            <label htmlFor="agenda-button">
                                                <input
                                                    style={{ display: 'none' }}
                                                    accept="image/*"
                                                    id="agenda-button"
                                                    type="file"
                                                    onChange={(e) => uploadAgenda(e.target.files[0])}
                                                />
                                                <Button style={{
                                                    border: 'none',
                                                    backgroundColor: 'white',
                                                    color: '#004165',
                                                    fontFamily: 'myriad-pro-b'
                                                }} variant="contained" component="span" startIcon={
                                                    <CloudUploadIcon style={{
                                                        color: '#004165'
                                                    }} />
                                                }>
                                                    Upload Agenda
                                                </Button>
                                            </label>
                                            <br />
                                            <button onClick={() => setShowUpdateMeeting(false)} className="add-no-btn" style={{
                                                marginBottom: '10px'
                                            }}>Cancel</button>
                                            <button onClick={() => {
                                                console.log("Updating meeting")
                                                function convertDate(inputFormat) {
                                                    function pad(s) { return (s < 10) ? '0' + s : s; }
                                                    var parts = inputFormat.split('-');
                                                    var d = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
                                                    return [d.getFullYear(), pad(d.getMonth() + 1), pad(d.getDate())].join('-');
                                                }
                                                let convertedDate = convertDate(meetingDate);
                                                updateMeeting(convertedDate, newFlyerUrl, newAgendaUrl).then(() => {
                                                    setShowUpdateMeeting(false);
                                                    setNewMeetingDate('');
                                                    setNewFlyerUrl('');
                                                    setNewAgendaUrl('');
                                                });
                                            }} className="add-yes-btn">Update</button>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        <div className='home-flyer-container'>
                            <img
                                src={flyerUrl}
                                alt='flyer pic'
                                onClick={() => setShowFlyerImage(true)}
                            />
                            {showFlyerImage && (
                                <div style={{
                                    position: 'fixed',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    zIndex: 1000,
                                }}>
                                    <img
                                        src={flyerUrl}
                                        alt='flyer pic'
                                        style={{ maxHeight: '80%', maxWidth: '80%' }}
                                        onClick={() => setShowFlyerImage(false)}
                                    />
                                </div>
                            )}
                        </div>
                        <div className='home-agenda-container'>
                            <img
                                src={agendaUrl}
                                alt='agenda pic'
                                onClick={() => setShowAgendaImage(true)}
                            />
                            {showAgendaImage && (
                                <div style={{
                                    position: 'fixed',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    zIndex: 1000,
                                }}>
                                    <img
                                        src={agendaUrl}
                                        alt='agenda pic'
                                        style={{ maxHeight: '80%', maxWidth: '80%' }}
                                        onClick={() => setShowAgendaImage(false)}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                    {
                        isLoggedIn && (
                            <div className="home-meeting-buttons-container">
                                <button className="addMeetingButton" onClick={() => setShowUpdateMeeting(true)}>Update Meeting</button>
                                <button className="addMeetingButton" onClick={() => setShowAddMeeting(true)}>Add Meeting</button>
                            </div>
                        )
                    }
                </div>
                <div className='home-upcoming-events-container'>
                    <tr>
                        <th>
                            <h2 style={{
                                color: 'white'
                            }}>Upcoming Events</h2>
                        </th>
                        {
                            isLoggedIn && (
                                <td align="right" valign="middle">
                                    <IconButton onClick={
                                        () => setShowAddEvent(true)
                                    }>
                                        <AddBoxTwoToneIcon style={{
                                            color: '#F2DF74'
                                        }} />
                                    </IconButton>
                                </td>
                            )
                        }
                    </tr>
                    {
                        events.map(event => {
                            let date = new Date(event.date);
                            let day = date.getDate();
                            let month = date.getMonth() + 1;
                            let year = date.getFullYear();
                            let formattedDate = `${day < 10 ? '0' + day : day}-${month < 10 ? '0' + month : month}-${year}`;
                            return (
                                <table className='home-event-container'>
                                    <tr>
                                        <th style={{
                                            fontFamily: 'montserrat-sb',
                                        }}>{event.title}</th>
                                        <td align="right" style={{
                                            fontFamily: 'montserrat-sb',
                                        }}>{formattedDate}</td>
                                        {
                                            isLoggedIn && (
                                                <td rowSpan={2} align="right" style={{
                                                    width: '10px',
                                                }}>
                                                    <IconButton onClick={() => deleteUpcomingEvent(event.id)}>
                                                        <DeleteTwoToneIcon style={{
                                                            color: '#F2DF74'
                                                        }} />
                                                    </IconButton>
                                                </td>
                                            )
                                        }
                                    </tr>
                                    <tr>
                                        <td colSpan={2} style={{
                                            fontFamily: 'myriad-pro-r',
                                        }}>{event.desc}</td>
                                    </tr>
                                </table>
                            )
                        })
                    }
                    {
                        showAddEvent && (
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
                                    <h2>Add Event</h2>
                                    <label htmlFor='date' style={{ fontFamily: 'myriad-pro-b', color: '#004165' }}>Date</label>
                                    <TextField
                                        id='date'
                                        type='date'
                                        variant='outlined'
                                    />
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
                                        id='desc'
                                        placeholder='Enter Description'
                                        variant='outlined'
                                        style={{
                                            marginBottom: '10px'
                                        }}
                                    />
                                    <button onClick={() => setShowAddEvent(false)} className="add-no-btn" style={{
                                        marginBottom: '10px'
                                    }}>Cancel</button>
                                    <button onClick={() => {
                                        let title = document.getElementById('title').value;
                                        let desc = document.getElementById('desc').value;
                                        let date = document.getElementById('date').value;
                                        addUpcomingEvent(title, desc, date).then(() => {
                                            setShowAddEvent(false);
                                        });
                                    }} className="add-yes-btn">Add</button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </p>
            <Footer />
        </div>
    )
}

export default HomePage;