import Navbar from "../widgets/navbar";
import React, { useEffect, useState } from 'react';
import '../css/navbar.css';
import "../css/page.css";
import { Container, IconButton } from "@mui/material";
import Footer from "../widgets/footer";
import supabase from "../supabase/supabase_init";
import SaveTwoToneIcon from '@mui/icons-material/SaveTwoTone';

const positions = {
    "pres": "President",
    "vpe": "Vice President of Education",
    "vpm": "Vice President of Membership",
    "vppr": "Vice President of Public Relations",
    "sec": "Secretary",
    "tres": "Treasurer",
    "saa": "Sergeant at Arms",
    "ipp": "Immediate Past President"
}

function AboutUs(params) {
    const [excom, setExcom] = useState([]);
    const [name, setName] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const checkLoginStatus = async () => {
        const { data, error } = await supabase.auth.getSession()
        console.log(data.session != null);
        if (data.session != null) {
            return true;
        }
        return false;
    }
    async function getExcomFromSupabase() {
        const { data, error } = await supabase.from('excom').select('*');
        if (error) {
            console.log(error);
            return [];
        }
        return data;
    }
    async function editExcomInSupabase(name, position, id) {
        const { data, error } = await supabase.from('excom').update({ name: name, position: position }).eq('id', id);
        if (error) {
            console.error(error);
            throw error;
        }
        const updatedData = await getExcomFromSupabase();
        setExcom(updatedData);
        alert('EXCOM member updated successfully');
        return data;
    }
    useEffect(() => {
        getExcomFromSupabase().then(data => setExcom(data));
        const checkStatus = async () => {
            const status = await checkLoginStatus();
            setIsLoggedIn(status);
        };

        checkStatus();
    }, []);
    const positionOrder = ['pres', 'vpe', 'vpm', 'vppr', 'sec', 'tres', 'saa', 'ipp'];
    const sortedExcom = [...excom].sort((a, b) => positionOrder.indexOf(a.position) - positionOrder.indexOf(b.position));
    return (
        <div>
            <Navbar />
            <br />
            <br />
            <br />
            <Container>
                <p className="header">About Us</p>
                <p className="content">
                    Welcome to Aurora Toastmasters Club, a vibrant community dedicated to nurturing communication and leadership skills in women. Our club, named after the Latin word for "dawn," symbolizes the promise of new beginnings and the radiant potential within each of our members.<br />
                    Founded on October 15th, 2017, by the visionary leader Sunita Saini, DTM, Aurora Toastmasters Club was born from a profound belief in the power of women to transform themselves and their communities. Inspired by her vision, our club stands as a testament to the unwavering commitment to personal and professional development.<br />
                    At Aurora Toastmasters Club, we believe in the boundless potential of every woman, regardless of her background or aspirations. Our mission is to provide a supportive and inclusive environment where women can hone their communication and leadership skills, unlock their full potential, and shine brightly in all aspects of their lives.<br />
                    Since our inception, Aurora Toastmasters Club has flourished, becoming a distinguished presence within District 116. Our success is rooted in a winning formula of mentorship, encouragement, and continuous learning. Through our diverse range of activities, including speeches, evaluations, impromptu speaking sessions, and leadership roles, we empower our members to overcome their fears, embrace their strengths, and achieve their goals.<br />
                    As we look to the future, our commitment to excellence remains unwavering. We invite you to join us on this journey of self-discovery, empowerment, and growth. Whether you're taking your first steps into public speaking or seeking to refine your leadership skills, Aurora Toastmasters Club offers a supportive and nurturing environment where you can thrive.
                </p>
                <p className="header">Our EXCOM</p>
                <div className="table">
                    <table>
                        <tr>
                            {isLoggedIn && (
                                <th style={{
                                    width: '20px'
                                }} />
                            )}
                            <th>
                                Name
                            </th>
                            <th>
                                Position
                            </th>
                        </tr>
                        {sortedExcom.map((row, index) => (
                            <tr key={index}>
                                {
                                    isLoggedIn && (
                                        <td>
                                            <SaveTwoToneIcon onClick={() => editExcomInSupabase(row.name, row.position, row.id)} style={{ color: '#CD202C', cursor: 'pointer' }} />
                                        </td>
                                    )
                                }
                                {
                                    isLoggedIn ? (
                                        <td>
                                            <input
                                                className="form-control mt-1"
                                                type="text"
                                                value={row.name}
                                                onChange={(e) => {
                                                    const newName = e.target.value;
                                                    setExcom(excom.map((item) => item.id === row.id ? { ...item, name: newName } : item));
                                                }}
                                            />
                                        </td>
                                    ) : (
                                        <td>
                                            {row.name}
                                        </td>
                                    )
                                }
                                <td>{positions[row.position]}</td>
                            </tr>
                        ))}
                    </table>
                    <p>
                        <a className="members-list-link" target="_blank" href="/aboutUs/members">Members List</a>
                    </p>
                    <p>
                        <a className="members-list-link" target="_blank" href="/aboutUs/pastPresidents">Past Presidents</a>
                    </p>
                    <br />
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default AboutUs;