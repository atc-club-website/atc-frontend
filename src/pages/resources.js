import Navbar from "../widgets/navbar";
import React, { useState } from 'react';
import '../css/navbar.css';
import "../css/resources.css";
import { Container } from "@mui/material";
import Footer from "../widgets/footer";

function Resources(params) {
    return (
        <div>
            <Navbar />
            <br />
            <br />
            <br />
            <Container>
                <p className="resources-header">Resources</p>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                }}>
                    <div style={{
                        width: '100%'
                    }}>
                        <p className="resources-subheader">Scripts</p>
                        <div className="resources-table">
                            <table>
                                <tr>
                                    <td>
                                        Table Topics Master Script
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Timer Script
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Grammarian Script
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Ah-Counter Script
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        General Evaluator Script
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Evaluator Script
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Sergeant at Arms Script
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div style={{
                        width: '100%'
                    }}>
                        <p className="resources-subheader">Design Elements</p>
                        <div className="resources-table">
                            <table>
                                <tr>
                                    <td>
                                        Toastmasters International Logo
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Toastmasters International Banner
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Toastmasters International Wordmark
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Pathways Logo
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default Resources;