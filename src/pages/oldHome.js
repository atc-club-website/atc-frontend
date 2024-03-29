import Navbar from "../widgets/navbar";
import "../css/home.css";
import Footer from "../widgets/footer";
import { useEffect } from "react";
import groupPic from '../assets/group_pic.jpg';

function HomePageOld(params) {
    useEffect(() => {
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
                    <h2>President's Message</h2>
                    <p>
                    Dear Esteemed Toastmasters !!<br />
                    I hope this message finds you all in good health and high spirits. As we continue on our journey of personal and professional development through Toastmasters, it’s my honor to serve as the President of our Club.<br />
                    It is with a deep sense of pride and excitement that I would like to share that Aurora TM’s club has achieved a remarkable milestone this year. TM Sahitya Reddy has become the very first DTM from our club. Our talented and dedicated Toastmasters - Pradnya, Poornima and Chandra have taken up leadership roles as Area Directors. It’s a testament to their hard work, incredible capabilities, dedication and passion for Toastmasters. I’m immensely proud of their achievements, not just as the President but as a fellow member who has witnessed the incredible growth and transformation within our club. Together we will continue to reach new heights and inspire even more members to follow in their footsteps.<br />
                    I want to express my gratitude to our Dedicated EXCOM , mentors and every member who contributes to our club’s success. Your commitment is what makes our club Thrive.
                    </p>
                </div>
                <div className="about-content-home">
                    <h2>About Us</h2>
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
                <div className="meetinginfo-content">
                    <h2>Upcoming Meetings</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HomePage;