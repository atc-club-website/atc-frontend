import { Container, IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import supabase from '../../supabase/supabase_init';
import Navbar from '../../widgets/navbar';
import '../../css/page.css';
import AddBoxTwoToneIcon from '@mui/icons-material/AddBoxTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';

function PastPresidentsTable(params) {
    const [members, setMembers] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showAddMemberBox, setShowAddMemberBox] = useState(false);

    const checkLoginStatus = async () => {
        const { data, error } = await supabase.auth.getSession()
        console.log(data.session != null);
        if (data.session != null) {
            return true;
        }
        return false;
    }

    async function getMembersFromSupabase() {
        const { data, error } = await supabase.from('past_presidents').select('*').order('start_year', { ascending: false });
        if (error) {
            console.log(error);
            return [];
        }
        return data;
    }

    async function addMemberToSupabase(name, desg, start_year, end_year) {
        const { data, error } = await supabase.from('past_presidents').insert([{ name: name, desg: desg, start_year: start_year, end_year: end_year }]);
        if (error) {
            console.error(error);
            throw error;
        }
        return data;
    }

    async function deleteMemberFromSupabase(id) {
        const confirm = window.confirm('Are you sure you want to delete this president?');
        if (!confirm) {
            return;
        }
        const { data, error } = await supabase.from('past_presidents').delete().eq('id', id);
        if (error) {
            console.error(error);
            throw error;
        }
        return data;
    }

    useEffect(() => {
        getMembersFromSupabase().then(data => setMembers(data));
        const checkStatus = async () => {
            const status = await checkLoginStatus();
            setIsLoggedIn(status);
        };

        checkStatus();
    }, []);

    return (
        <div>
            <Container>
                <tr>
                    <td>
                        <p className="header">Past Presidents</p>
                    </td>
                    {
                        isLoggedIn ? (
                            <td valign='middle'>
                                <IconButton onClick={() => {
                                    setShowAddMemberBox(true);
                                }}>
                                    <AddBoxTwoToneIcon style={{
                                        color: '#CD202C'
                                    }} />
                                </IconButton>
                            </td>
                        ) : null
                    }
                    {
                        showAddMemberBox && (
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
                                    <h2>Add Member</h2>
                                    <input
                                        className="form-control mt-1"
                                        id='name'
                                        placeholder="Enter Name"
                                        style={{
                                            marginBottom: '10px',
                                        }}
                                    />
                                    <select className="form-control mt-1" id='desg' style={{ marginBottom: '10px' }}>
                                        <option value="TM">TM</option>
                                        <option value="DTM">DTM</option>
                                    </select>
                                    <input
                                        className="form-control mt-1"
                                        id='start_year'
                                        placeholder="Enter Start Year"
                                        style={{
                                            marginBottom: '10px',
                                        }}
                                    />
                                    <input
                                        className="form-control mt-1"
                                        id='end_year'
                                        placeholder="Enter End Year"
                                        style={{
                                            marginBottom: '10px',
                                        }}
                                    />
                                    <button onClick={() => setShowAddMemberBox(false)} className="add-no-btn" style={{
                                        marginBottom: '10px'
                                    }}>Cancel</button>
                                    <button onClick={() => {
                                        let name = document.getElementById('name').value;
                                        let desg = document.getElementById('desg').value;
                                        let start_year = document.getElementById('start_year').value;
                                        let end_year = document.getElementById('end_year').value;
                                        addMemberToSupabase(name, desg, start_year, end_year).then(() => {
                                            setShowAddMemberBox(false);
                                        });
                                    }} className="add-yes-btn">Add</button>
                                </div>
                            </div>
                        )
                    }
                </tr>
                <div className='table'>
                    <table>
                        <thead>
                            <tr>
                                {
                                    isLoggedIn ? (
                                        <th style={{
                                            width: '10px'
                                        }} />
                                    ) : null
                                }
                                <th>Name</th>
                                <th>Tenure</th>
                            </tr>
                        </thead>
                        <tbody>
                            {members.map((member, index) => (
                                <tr key={index}>
                                    {
                                        isLoggedIn ? (
                                            <td>
                                                <DeleteTwoToneIcon onClick={() => deleteMemberFromSupabase(member.id)} style={{
                                                    color: '#CD202C',
                                                    cursor: 'pointer'
                                                }} />
                                            </td>
                                        ) : null
                                    }
                                    <td>{
                                        member.desg === 'DTM' ? member.name + ', DTM' : member.name
                                    }</td>
                                    <td>{member.start_year} - {member.end_year}</td>
                                </tr>
                            ))}
                            <tr>
                                <td />
                                <td>
                                    Sunita Saini, DTM
                                </td>
                                <td>
                                    Founder
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Container>
        </div>
    );
}

export default PastPresidentsTable;