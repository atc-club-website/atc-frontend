import Navbar from "../widgets/navbar";
import React, { useState } from 'react';
import '../css/navbar.css';
import "../css/pathways.css";
import { Container } from "@mui/material";
import Footer from "../widgets/footer";

var path_links = {
    "Dynamic Leadership": "https://www.toastmasters.org/pathways-overview/pathways-dynamic-leadership-path",
    "Effective Coaching": "https://www.toastmasters.org/pathways-overview/pathways-effective-coaching-path",
    "Engaging Humor": "https://www.toastmasters.org/pathways-overview/pathways-engaging-humor-path",
    "Innovative Planning": "https://www.toastmasters.org/pathways-overview/pathways-innovative-planning-path",
    "Leadership Development": "https://www.toastmasters.org/pathways-overview/pathways-leadership-development-path",
    "Motivational Strategies": "https://www.toastmasters.org/pathways-overview/pathways-motivational-strategies-path",
    "Persuasive Influence": "https://www.toastmasters.org/pathways-overview/pathways-persuasive-influence-path",
    "Presentation Mastery": "https://www.toastmasters.org/pathways-overview/pathways-presentation-mastery-path",
    "Strategic Relationships": "https://www.toastmasters.org/pathways-overview/pathways-strategic-relationships-path",
    "Team Collaboration": "https://www.toastmasters.org/pathways-overview/pathways-team-collaboration-path",
    "Visionary Communication": "https://www.toastmasters.org/pathways-overview/pathways-visionary-communication-path"
}

function Pathways(params) {
    return (
        <div>
            <Navbar />
            <br />
            <br />
            <br />
            <Container>
                <p className="pathways-header">Pathways</p>
                <p className="pathways-content">
                    Toastmasters’ education system is called Pathways. It is a modern, flexible and interactive way to develop your skills and help you reach your goals. It is designed to help you build the competencies you need to communicate and lead. It is comprised of 11 paths that teach more than 300 unique competencies.
                    A path is a series of 14 projects across five levels that you follow at your own pace. Examples of projects are learning to ‘negotiate the best outcome’, ‘understanding your leadership style’ and ‘delivering social speeches’. Each project contains at least one speech. Your path functions as a roadmap in your personal communication and leadership journey and provides you with useful information, instructions and learning tools to help you prepare each project and speech.
                </p>
                <p className="pathways-subheader">Paths you can choose</p>
                <div className="pathways-table">
                    <table>
                        <tr>
                            <th>
                                Path Name
                            </th>
                            <th>
                                Core Competencies
                            </th>
                        </tr>
                        <tr onClick={
                            () => {
                                window.open(path_links["Dynamic Leadership"]);
                            }
                        }>
                            <td>
                                Dynamic Leadership
                            </td>
                            <td>
                                Public Speaking, Interpersonal Communication, Strategic Leadership, Confidence
                            </td>
                        </tr>
                        <tr onClick={
                            () => {
                                window.open(path_links["Effective Coaching"]);
                            }
                        }>
                            <td>
                                Effective Coaching
                            </td>
                            <td>
                                Public Speaking, Interpersonal Communication, Management, Confidence
                            </td>
                        </tr>
                        <tr onClick={
                            () => {
                                window.open(path_links["Engaging Humor"]);
                            }
                        }>
                            <td>
                                Engaging Humor
                            </td>
                            <td>
                                Public Speaking, Confidence
                            </td>
                        </tr>
                        <tr onClick={
                            () => {
                                window.open(path_links["Innovative Planning"]);
                            }
                        }>
                            <td>
                                Innovative Planning
                            </td>
                            <td>
                                Public Speaking, Interpersonal Communication, Management, Confidence
                            </td>
                        </tr>
                        <tr onClick={
                            () => {
                                window.open(path_links["Leadership Development"]);
                            }
                        }>
                            <td>
                                Leadership Development
                            </td>
                            <td>
                                Public Speaking, Interpersonal Communication, Management, Confidence
                            </td>
                        </tr>
                        <tr onClick={
                            () => {
                                window.open(path_links["Motivational Strategies"]);
                            }
                        }>
                            <td>
                                Motivational Strategies
                            </td>
                            <td>
                                Public Speaking, Interpersonal Communication, Strategic Leadership, Confidence
                            </td>
                        </tr>
                        <tr onClick={
                            () => {
                                window.open(path_links["Persuasive Influence"]);
                            }
                        }>
                            <td>
                                Persuasive Influence
                            </td>
                            <td>
                                Public Speaking, Interpersonal Communication, Strategic Leadership, Confidence
                            </td>
                        </tr>
                        <tr onClick={
                            () => {
                                window.open(path_links["Presentation Mastery"]);
                            }
                        }>
                            <td>
                                Presentation Mastery
                            </td>
                            <td>
                                Public Speaking, Confidence
                            </td>
                        </tr>
                        <tr onClick={
                            () => {
                                window.open(path_links["Strategic Relationships"]);
                            }
                        }>
                            <td>
                                Strategic Relationships
                            </td>
                            <td>
                                Public Speaking, Interpersonal Communication, Strategic Leadership, Confidence
                            </td>
                        </tr>
                        <tr onClick={
                            () => {
                                window.open(path_links["Team Collaboration"]);
                            }
                        }>
                            <td>
                                Team Collaboration
                            </td>
                            <td>
                                Public Speaking, Interpersonal Communication, Management, Confidence
                            </td>
                        </tr>
                        <tr onClick={
                            () => {
                                window.open(path_links["Visionary Communication"]);
                            }
                        }>
                            <td>
                                Visionary Communication
                            </td>
                            <td>
                                Public Speaking, Interpersonal Communication, Strategic Leadership, Confidence
                            </td>
                        </tr>
                    </table>
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default Pathways;