import Navbar from "../widgets/navbar";
import "../css/home.css";
import Footer from "../widgets/footer";
import { useEffect, useState } from "react";
import groupPic from '../assets/group_pic.jpg';

function HomePage(params) {
    const [meetingDates, setMeetingDates] = useState([]);
    function getMeetingDates() {
        const now = new Date();
        now.setHours(0, 0, 0, 0);
        const dates = [];

        for (let j = 0; j < 3; j++) {
            const month = new Date(now.getFullYear(), now.getMonth() + j).getMonth();
            const year = new Date(now.getFullYear(), now.getMonth() + j).getFullYear();

            const monthDates = [];
            for (let i = 1; i <= 31; i++) {
                const date = new Date(year, month, i);
                if (date.getMonth() === month && date.getDay() === 3 && date >= now) {
                    monthDates.push(date);
                }
            }

            dates.push(monthDates[1], monthDates[3]);
        }
        return dates.filter(date => date && date >= now).slice(0, 3).map(date => date.toLocaleDateString());
    }
    useEffect(() => {
        setMeetingDates(getMeetingDates());
        const handleScroll = () => {
            var scrollPosition = window.scrollY / window.innerHeight;
            var opacity = Math.min(scrollPosition / 0.9, 1);
            document.querySelector('.home-group-pic-container').style.backgroundImage =
                'linear-gradient(to bottom, rgba(255,255,255,' + opacity + '), rgba(0,65,101,' + opacity + ')), url(\'' + groupPic + '\')';
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div>
            <Navbar />
            <div className="home-group-pic-container" />
            <div className="president-about-content-home">
                <div className="president-message-home">
                    <h2 style={{
                        color: 'white'
                    }}>President's Message</h2>
                    <p>
                        Dear Esteemed Toastmasters !!<br />
                        I hope this message finds you all in good health and high spirits. As we continue on our journey of personal and professional development through Toastmasters, it’s my honor to serve as the President of our Club.<br />
                        It is with a deep sense of pride and excitement that I would like to share that Aurora TM’s club has achieved a remarkable milestone this year. TM Sahitya Reddy has become the very first DTM from our club.
                        Our talented and dedicated Toastmasters - Pradnya, Poornima and Chandra have taken up leadership roles as Area Directors. It’s a testament to their hard work, incredible capabilities, dedication and passion for Toastmasters.
                        I’m immensely proud of their achievements, not just as the President but as a fellow member who has witnessed the incredible growth and transformation within our club.  Together we will continue to reach new heights and inspire even more members to follow in their footsteps.<br />
                        I want to express my gratitude to our Dedicated EXCOM , mentors and every member who contributes to our club’s success. Your commitment is what makes our club Thrive.
                    </p>
                </div>
                <div className="about-content-home">
                    <h2 style={{
                        color: 'white'
                    }}>About Us</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
            <div className="mission-vision-objectives-meetinginfo">
                <div className="mission-vision-objectives">
                    <div className="mission-vision">
                        <div className="mission">
                            <h2>Mission</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        <div className="Vision">
                            <h2>Vision</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                    <div className="objectives">
                        <h2>Objectives</h2>
                        <p>
                            <li>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </li>
                        </p>
                    </div>
                </div>
                <div className="meetinginfo-content" style={{
                    marginLeft: '30px'
                }}>
                    <div className="upcomingMeetings" style={{ marginRight: '30px' }}>
                        <h2>Upcoming Meetings</h2>
                        {meetingDates.map((date, index) => (
                            <div className="meeting-card" key={index}>
                                <p>
                                    Date: {date}<br />
                                    Time: 00:00 PM<br />
                                    Venue: 000, 00th Lane, 00th Street, Colombo 00
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="upcomingEvents">
                        <h2>Upcoming Events</h2>
                        <p>
                            <div className="meeting-card">
                                <h3>Meeting 1</h3>
                                <p>
                                    Date: 00/00/0000<br />
                                    Time: 00:00 PM<br />
                                    Venue: 000, 00th Lane, 00th Street, Colombo 00
                                </p>
                            </div>
                            <div className="meeting-card">
                                <h3>Meeting 1</h3>
                                <p>
                                    Date: 00/00/0000<br />
                                    Time: 00:00 PM<br />
                                    Venue: 000, 00th Lane, 00th Street, Colombo 00
                                </p>
                            </div>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HomePage;