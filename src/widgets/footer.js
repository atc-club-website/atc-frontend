function Footer(params) {
    return (
        <div className="footer">
            <div className="meeting-info-footer">
                <p className="footer-header">Aurora Toastmasters Club</p>
                <p>
                    Club No. 0000000, Area 00, Division A, District 82
                </p>
                <p>
                    Meeting Venue: 000, 00th Lane, 00th Street, Colombo 00
                </p>
                <p>
                    Meetings are held on every 2nd and 4th Wednesday of the month
                </p>
                <p>
                    <a href="mailto" target="_blank"><img src="https://img.shields.io/badge/Gmail-C71610?style=for-the-badge&logo=gmail&logoColor=white" /></a>
                    <a href="https://www.facebook.com" target="_blank">
                        <img src="https://img.shields.io/badge/Facebook-316FF6?style=for-the-badge&logo=facebook&logoColor=white" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank">
                        <img src="https://img.shields.io/badge/Instagram-E1306C?style=for-the-badge&logo=instagram&logoColor=white" />
                    </a>
                </p>
            </div>
            <div className="club-banner-footer">
                <p>
                    “The information on this website is for the sole use of Toastmasters’ members, for Toastmasters business only.
                    It is not to be used for solicitation and distribution of non-Toastmasters material or information.”
                </p>
            </div>
        </div>
    )
}

export default Footer;