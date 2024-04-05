import Navbar from "../widgets/navbar";
import React, { useEffect, useState } from 'react';
import '../css/navbar.css';
import "../css/page.css";
import { Container } from "@mui/material";
import Footer from "../widgets/footer";
import supabase from "../supabase/supabase_init";
import SaveTwoToneIcon from '@mui/icons-material/SaveTwoTone';
import content from './aboutUsTables/aboutUsContent'

const positions = {
    "pres": "President",
    "vpe": "Vice President - Education",
    "vpm": "Vice President - Membership",
    "vppr": "Vice President - Public Relations",
    "sec": "Secretary",
    "tres": "Treasurer",
    "saa": "Sergeant at Arms",
    "ipp": "Immediate Past President"
}

function AboutUs(params) {
    const [excom, setExcom] = useState([]);
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
                <p className="content" style={{whiteSpace: "pre-line"}}>
                    {
                        content
                    }
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