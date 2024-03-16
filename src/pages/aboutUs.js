import Navbar from "../widgets/navbar";
import React, { useState } from 'react';
import '../css/navbar.css';
import "../css/page.css";
import { Container } from "@mui/material";
import Footer from "../widgets/footer";

function AboutUs(params) {
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
                            <td>
                                President
                            </td>
                            <td>
                                Lorem Ipsum
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Vice-President Education
                            </td>
                            <td>
                                Lorem Ipsum
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Vice-President Membership
                            </td>
                            <td>
                                Lorem Ipsum
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Vice-President Public Relations
                            </td>
                            <td>
                                Lorem Ipsum
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Secretary
                            </td>
                            <td>
                                Lorem Ipsum
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Treasurer
                            </td>
                            <td>
                                Lorem Ipsum
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Sergeant at Arms
                            </td>
                            <td>
                                Lorem Ipsum
                            </td>
                        </tr>
                    </table>
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default AboutUs;