import Navbar from "../widgets/navbar";
import React, { useEffect, useState } from 'react';
import '../css/navbar.css';
import "../css/page.css";
import { Container } from "@mui/material";
import Footer from "../widgets/footer";
import supabase from "../supabase/supabase_init";
import SaveTwoToneIcon from '@mui/icons-material/SaveTwoTone';

function ClubMeetingFormat(params) {
    const [meetingRoles, setMeetingRoles] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const checkLoginStatus = async () => {
        const { data, error } = await supabase.auth.getSession()
        console.log(data.session != null);
        if (data.session != null) {
            return true;
        }
        return false;
    }

    const getMeetingRoles = async () => {
        const { data, error } = await supabase.from('meeting_roles').select('*');
        if (error) {
            console.log(error);
            return [];
        }
        return data;
    }

    const updateMeetingRole = async (role, desc, id) => {
        const { data, error } = await supabase.from('meeting_roles').update({ role: role, desc: desc }).eq('id', id);
        if (error) {
            console.error(error);
            throw error;
        }
        const updatedData = await getMeetingRoles();
        setMeetingRoles(updatedData);
        alert('Meeting role updated successfully');
        return data;
    }

    useEffect(() => {
        checkLoginStatus().then(status => setIsLoggedIn(status));
        getMeetingRoles().then(data => setMeetingRoles(data));
    }, []);

    return (
        <div>
            <Navbar />
            <br />
            <br />
            <br />
            <Container>
                <p className="header">A typical Club Meeting</p>
                <p className="content">
                    A typical club meeting is a learn-by-doing workshop in which participants hone their speaking and leadership skills in a no-pressure atmosphere. There is no instructor in a Toastmasters meeting. Instead, members evaluate one another’s presentations. This feedback process is a key part of the program’s success. Meeting participants also give impromptu talks on assigned topics, conduct meetings and develop skills related to timekeeping, grammar and parliamentary procedure.
                    The meetings are held on a regular basis, usually once a week or once a fortnight. The duration of the meeting is usually 2 hours to 2.5 hours. The meeting is divided into several segments, each of which has a specific purpose and role. The segments are as follows:
                    <p>
                        <b>Prepared Speeches</b><br />
                        Members present prepared speeches based on projects from the Pathways program. Each project in a Pathways' path has a specific objective in an area that helps members practice different speaking techniques.<br />
                        The speeches are evaluated by a fellow member. The duration of the speech is usually 5-7 minutes. The number of speeches presented at a meeting can vary based on the number of speakers and the time available.
                    </p>
                    <p>
                        <b>Table Topics</b><br />
                        The Table Topics session is usually conducted by the Table Topics Master. Members present impromptu speeches on a given topic. The duration of the speech is usually 1-2 minutes. This sesion is designed to help members think on their feet and practice speaking without preparation.
                    </p>
                    <p>
                        <b>Evaluations</b><br />
                        During this portion, members practice their listening and evaluation skills. Assigned members will give evaluations of the prepared speeches and of the meeting as a whole. These evaluations provide feedback of how the evaluators saw the presenters and will point out the positive aspects of the speech and some possible areas for improvement. Good evaluations are the hallmark of skilled Toastmasters.
                    </p>
                </p>
                <p className="subheader">Meeting Roles</p>
                <div className="table">
                    <table>
                        <tr>
                            {
                                isLoggedIn && (
                                    <th style={{
                                        width: '20px'
                                    }} />
                                )
                            }
                            <th>
                                Role
                            </th>
                            <th>
                                Description
                            </th>
                        </tr>
                        {meetingRoles.map(role => (
                            <tr>
                                {
                                    isLoggedIn && (
                                        <td>
                                            <SaveTwoToneIcon style={{
                                                color: 'var(--red)',
                                                cursor: 'pointer',
                                            }} onClick={() => updateMeetingRole(role.role, role.desc, role.id)} />
                                        </td>
                                    )
                                }
                                <td>
                                    {
                                        isLoggedIn ? (
                                            <input
                                                className="form-control mt-1"
                                                type="text"
                                                value={role.role}
                                                onChange={(e) => {
                                                    const newRole = e.target.value;
                                                    setMeetingRoles(meetingRoles.map(item => item.role === role.role ? { ...item, role: newRole } : item));
                                                }}
                                            />
                                        ) : (
                                            role.role
                                        )
                                    }
                                </td>
                                <td>
                                    {
                                        isLoggedIn ? (
                                            <textarea
                                                className="form-control mt-1"
                                                value={role.desc}
                                                onChange={(e) => {
                                                    const newDesc = e.target.value;
                                                    setMeetingRoles(meetingRoles.map(item => item.role === role.role ? { ...item, desc: newDesc } : item));
                                                }}
                                            />
                                        ) : (
                                            role.desc
                                        )
                                    }
                                </td>
                            </tr>
                        ))}
                    </table>
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

export default ClubMeetingFormat;