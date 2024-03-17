import Navbar from "../widgets/navbar";
import React, { useEffect, useState } from 'react';
import '../css/navbar.css';
import "../css/page.css";
import { Container, IconButton } from "@mui/material";
import Footer from "../widgets/footer";
import supabase from "../supabase/supabase_init";
import EditIcon from '@mui/icons-material/Edit';

const positions = {
    "pres": "President",
    "vpe": "Vice President of Education",
    "vpm": "Vice President of Membership",
    "vppr": "Vice President of Public Relations",
    "sec": "Secretary",
    "tres": "Treasurer",
    "saa": "Sergeant at Arms",
}

function AboutUs(params) {
    const [excom, setExcom] = useState([]);
    async function getExcomFromSupabase() {
        const { data, error } = await supabase.from('excom').select('*');
        if (error) {
            console.log(error);
            return [];
        }
        return data;
    }
    useEffect(() => {
        getExcomFromSupabase().then(data => setExcom(data));
    }, []);
    return (
        <div>
            <Navbar />
            <br />
            <br />
            <br />
            <Container>
                <p className="header">About Us</p>
                <p className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p className="header">Our EXCOM</p>
                <div className="table">
                    <table>
                        <tr>
                            <th style={{
                                width: '20px'
                            }}>
                            </th>
                            <th>
                                Name
                            </th>
                            <th>
                                Position
                            </th>
                        </tr>
                        {excom.map((row, index) => (
                            <tr key={index}>
                                <th>
                                    <IconButton style={{
                                        color: '#F2DF74'
                                    }}>
                                        <EditIcon />
                                    </IconButton>
                                </th>
                                <td>{row.name}</td>
                                <td>{positions[row.position]}</td>
                            </tr>
                        ))}
                    </table>
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default AboutUs;