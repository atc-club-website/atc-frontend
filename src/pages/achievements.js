import Navbar from "../widgets/navbar";
import React, { useState } from 'react';
import '../css/navbar.css';
import "../css/page.css";
import { Container } from "@mui/material";
import Footer from "../widgets/footer";

function ClubAchievements(params) {
    return (
        <div>
            <Navbar />
            <br />
            <br />
            <br />
            <Container>
                <p className="header">Our Achievements</p>
                <div className="table">
                    <table>
                        <tr>
                            <td>
                                Club of the Year
                            </td>
                            <td>
                                2023
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Club of the Year
                            </td>
                            <td>
                                2022
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Club of the Year
                            </td>
                            <td>
                                2021
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Club of the Year
                            </td>
                            <td>
                                2020
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Club of the Year
                            </td>
                            <td>
                                2019
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Club of the Year
                            </td>
                            <td>
                                2018
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Club of the Year
                            </td>
                            <td>
                                2017
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Club of the Year
                            </td>
                            <td>
                                2016
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Club of the Year
                            </td>
                            <td>
                                2015
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Club of the Year
                            </td>
                            <td>
                                2014
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Club of the Year
                            </td>
                            <td>
                                2013
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Club of the Year
                            </td>
                            <td>
                                2012
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Club of the Year
                            </td>
                            <td>
                                2011
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Club of the Year
                            </td>
                            <td>
                                2010
                            </td>
                        </tr>
                    </table>
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default ClubAchievements;