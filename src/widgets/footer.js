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
        <div className='footer-wrapper'>
            <div className="footer">
                <div className="meeting-info-footer">
                    <p>
                        Club No. 06488017, Area 26, Division G, District 116
                    </p>
                    <p>
                        Meetings are held on every 2nd and 4th Wednesday of the month
                    </p>
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
                </div>
            </div>
            <div className="disclaimer" style={{
                backgroundColor: 'var(--dark_blue)',
                color: 'var(--yellow)',
                marginTop: '-10px',
            }}>
                “The information on this website is for the sole use of Toastmasters’ members, for Toastmasters business only.
                It is not to be used for solicitation and distribution of non-Toastmasters material or information.”
                <br />
                <br />
            </div>
        </div>
    )
}

export default Footer;