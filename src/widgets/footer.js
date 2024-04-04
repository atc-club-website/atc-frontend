import React, { useState, useEffect } from 'react';
import supabase from '../supabase/supabase_init';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';

function Footer(params) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [phone, setPhone] = useState(0);
    const [showDeveloperModal, setShowDeveloperModal] = useState(false);

    async function checkLoginStatus() {
        const { data, error } = await supabase.auth.getSession()
        if (data.session != null) {
            return true;
        }
        return false;
    }

    async function getPhone() {
        const { data, error } = await supabase
            .from('excom')
            .select('phone')
            .eq('position', 'vpm')
        if (error) {
            console.log(error)
        } else {
            setPhone(data[0].phone)
        }
    }

    async function updatePhone(phone) {
        const { data, error } = await supabase
            .from('excom')
            .update({ phone: phone })
            .eq('position', 'vpm')
        if (error) {
            console.log(error)
        } else {
            console.log(data)
        }
    }

    useEffect(() => {
        checkLoginStatus().then((res) => {
            setIsLoggedIn(res)
        })
        getPhone();
    }, [])

    return (
        <div className="footer">
            <div className="meeting-info-footer">
                <p>
                    Club No. 06488017, Area 26, Division G, District 116
                </p>
                <p>
                    Meetings are held on every 2nd and 4th Wednesday of the month
                </p>
                <div className="developer" style={{
                    textDecoration: 'underline',
                    cursor: 'pointer',
                }} onClick={
                    () => {
                        setShowDeveloperModal(true)
                    }
                }>
                    Developed by Aadi Umrani
                </div>
                {
                    showDeveloperModal && (
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
                                boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
                                border: '3.5px solid #004165',
                            }}>
                                <h2>Emails</h2>
                                <li style={{ color: 'black' }}>aadi.p.um@gmail.com</li>
                                <li style={{ color: 'black' }}>aadi.fall22@gmail.com</li>
                                <h2>Phone Numbers</h2>
                                <li style={{ color: 'black' }}>+1 437 665 1790</li>
                                <li style={{ color: 'black' }}>+974 5563 2157</li>
                                <br />
                                <button onClick={() => setShowDeveloperModal(false)} className="add-no-btn" >Close</button>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className="club-banner-footer">
                <p>
                    VPM contact number: +974 {phone} {
                        isLoggedIn ?
                            <EditTwoToneIcon style={{
                                cursor: 'pointer',
                                color: 'var(--yellow)',
                            }} onClick={() => {
                                let newPhone = prompt("Enter new phone number")
                                if (newPhone) {
                                    updatePhone(parseInt(newPhone))
                                }
                            }} />
                            : null
                    }
                    <br />
                    <a href="mailto:auroratoastmastersclub123@gmail.com" target="_blank"><img src="https://img.shields.io/badge/Gmail-C71610?style=for-the-badge&logo=gmail&logoColor=white" /></a>
                    <a href="https://www.facebook.com/profile.php?id=100068840050696" target="_blank">
                        <img src="https://img.shields.io/badge/Facebook-316FF6?style=for-the-badge&logo=facebook&logoColor=white" />
                    </a>
                    <a href="https://www.instagram.com/auroratoastmasterclub/" target="_blank">
                        <img src="https://img.shields.io/badge/Instagram-E1306C?style=for-the-badge&logo=instagram&logoColor=white" />
                    </a>
                </p>
                <p className="disclaimer">
                    “The information on this website is for the sole use of Toastmasters’ members, for Toastmasters business only.
                    It is not to be used for solicitation and distribution of non-Toastmasters material or information.”
                </p>
            </div>
        </div>
    )
}

export default Footer;