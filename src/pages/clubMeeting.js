import Navbar from "../widgets/navbar";
import React, { useState } from 'react';
import '../css/navbar.css';
import "../css/clubMeeting.css";
import { Container } from "@mui/material";
import Footer from "../widgets/footer";

function ClubMeetingFormat(params) {
    return (
        <div>
            <Navbar />
            <br />
            <br />
            <br />
            <Container>
                <p className="clubmeetings-header">A typical Club Meeting</p>
                <p className="clubmeetings-content">
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
                <p className="clubmeetings-subheader">Meeting Roles</p>
                <div className="clubmeetings-table">
                    <table>
                        <tr>
                            <th>
                                Role
                            </th>
                            <th>
                                Description
                            </th>
                        </tr>
                        <tr>
                            <td>
                                Toastmaster
                            </td>
                            <td>
                                The Toastmaster is the meeting's director and host. The Toastmaster is responsible for ensuring that the meeting runs smoothly and on time. The Toastmaster also introduces the participants and the speakers.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Table Topics Master
                            </td>
                            <td>
                                The Table Topics Master prepares topics for the Table Topics session. The Table Topics Master also conducts the Table Topics session.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                General Evaluator
                            </td>
                            <td>
                                The General Evaluator evaluates everything that takes place during the meeting. The General Evaluator also evaluates the evaluators.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Timer
                            </td>
                            <td>
                                The Timer is responsible for monitoring the time for each segment of the meeting.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Grammarian
                            </td>
                            <td>
                                The Grammarian is responsible for monitoring the use of language during the meeting. The Grammarian also introduces the word of the day.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Ah-Counter
                            </td>
                            <td>
                                The Ah-Counter is responsible for monitoring the use of filler words such as "ah", "um", "so", etc. during the meeting.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Evaluators
                            </td>
                            <td>
                                The Evaluators are responsible for evaluating the prepared speeches and the meeting as a whole.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Sergeant at Arms
                            </td>
                            <td>
                                The Sergeant at Arms is responsible for setting up the meeting venue and ensuring that the meeting runs smoothly.
                            </td>
                        </tr>
                    </table>
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default ClubMeetingFormat;