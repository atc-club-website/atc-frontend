import Navbar from "../widgets/navbar";
import React, { useEffect, useState } from 'react';
import '../css/navbar.css';
import "../css/page.css";
import { Container } from "@mui/material";
import Footer from "../widgets/footer";
import supabase from "../supabase/supabase_init";
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';

function ClubAchievements(params) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [type, setType] = useState('club');
    const [clubAchievements, setClubAchievements] = useState([]);
    const [memberAchievements, setMemberAchievements] = useState([]);
    const [showAddAchievementDialog, setShowAddAchievementDialog] = useState(false);

    async function checkLoginStatus() {
        const { data, error } = await supabase.auth.getSession()
        if (data.session != null) {
            return true;
        }
        return false;
    }

    async function fetchClubAchievements() {
        let { data, error } = await supabase
            .from('achievements')
            .select('*')
            .eq('type', 'club');
        if (error) {
            console.log(error);
        } else {
            setClubAchievements(data);
        }
    }

    async function fetchMemberAchievements() {
        let { data, error } = await supabase
            .from('achievements')
            .select('*')
            .eq('type', 'member');
        if (error) {
            console.log(error);
        } else {
            setMemberAchievements(data);
        }
    }

    async function addAchievement(type, name, year, member) {
        switch (type) {
            case 'club':
                const { data1, error1 } = await supabase
                    .from('achievements')
                    .insert([{ type: type, name: name, year: year }]);
                if (error1) {
                    console.error(error1);
                    return;
                }
                break;

            case 'member':
                const { data2, error2 } = await supabase
                    .from('achievements')
                    .insert([{ type: type, name: name, year: year, person: member }]);
                if (error2) {
                    console.error(error2);
                    return;
                }
                break;

            default:
                break;
        }
    }

    async function deleteAchievement(id) {
        const confirm = window.confirm('Are you sure you want to delete this achievement?');
        if (!confirm) {
            return;
        }
        const { data, error } = await supabase
            .from('achievements')
            .delete()
            .eq('id', id);
        if (error) {
            console.error(error);
            return;
        }
        return data;
    }

    useEffect(() => {
        fetchClubAchievements();
        fetchMemberAchievements();
        const checkStatus = async () => {
            const status = await checkLoginStatus();
            setIsLoggedIn(status);
        };
        checkStatus();
    }, []);

    return (
        <div>
            <Navbar />
            <br />
            <br />
            <br />
            <br />
            <Container>
                {
                    isLoggedIn ? (
                        <button className="danger-btn" onClick={
                            () => setShowAddAchievementDialog(true)
                        }>Add Achievement</button>
                    ) : null
                }
                {
                    showAddAchievementDialog && (
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
                                <h2>Add Achievement</h2>
                                <input
                                    className="form-control mt-1"
                                    id='name'
                                    placeholder="Enter Name"
                                    style={{
                                        marginBottom: '10px',
                                    }}
                                />
                                <select className="form-control mt-1" id='type' style={{ marginBottom: '10px' }} value={type} onChange={(e) => setType(e.target.value)}>
                                    <option value="club">Club-level</option>
                                    <option value="member">Member-level</option>
                                </select>
                                <input
                                    className="form-control mt-1"
                                    id='year'
                                    placeholder="Enter Year"
                                    style={{
                                        marginBottom: '10px',
                                    }}
                                />
                                {
                                    type === 'member' ? (
                                        <input
                                            className="form-control mt-1"
                                            id='member'
                                            placeholder="Enter Member Name"
                                            style={{
                                                marginBottom: '10px',
                                            }}
                                        />
                                    ) : null
                                }
                                <button onClick={() => setShowAddAchievementDialog(false)} className="add-no-btn" style={{
                                    marginBottom: '10px'
                                }}>Cancel</button>
                                <button onClick={() => {
                                    let name = document.getElementById('name').value;
                                    let year = document.getElementById('year').value;
                                    let member = '';
                                    if (type === 'member') {
                                        member = document.getElementById('member').value;
                                    }
                                    addAchievement(type, name, year, member);
                                    setShowAddAchievementDialog(false);
                                }} className="add-yes-btn">Add</button>
                            </div>
                        </div>
                    )
                }
                <div className="achievements-page">
                    <div>
                        <p className="header">Club Achievements</p>
                        <div className="table">
                            <table>
                                {
                                    clubAchievements.map((achievement) => {
                                        return (
                                            <tr>
                                                {
                                                    isLoggedIn ? (
                                                        <td>
                                                            <DeleteTwoToneIcon onClick={() => deleteAchievement(achievement.id)} style={{
                                                                color: '#CD202C',
                                                                cursor: 'pointer'
                                                            }} />
                                                        </td>
                                                    ) : null
                                                }
                                                <td>
                                                    {achievement.name}
                                                </td>
                                                <td>
                                                    {achievement.year}
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </table>
                        </div>
                    </div>
                    <div>
                        <p className="header">Member Achievements</p>
                        <div className="table">
                            <table>
                                {
                                    memberAchievements.map((achievement) => {
                                        return (
                                            <tr>
                                                {
                                                    isLoggedIn ? (
                                                        <td>
                                                            <DeleteTwoToneIcon onClick={() => deleteAchievement(achievement.id)} style={{
                                                                color: '#CD202C',
                                                                cursor: 'pointer'
                                                            }} />
                                                        </td>
                                                    ) : null
                                                }
                                                <td>
                                                    {achievement.name}
                                                </td>
                                                <td>
                                                    {achievement.person}
                                                </td>
                                                <td>
                                                    {achievement.year}
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </table>
                        </div>
                    </div>
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default ClubAchievements;