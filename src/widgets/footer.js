function Footer(params) {
    return (
        <div className="footer">
            <div>
                <table style={{
                    width: "100%"
                }}>
                    <tr>
                        <td>
                            <p className="footer-header">Aurora Toastmasters Club</p>
                            <p>
                                Club No. 0000000, Area 00, Division A, District 82
                            </p>
                            <p>
                                Meeting Venue: 000, 00th Lane, 00th Street, Colombo 00
                            </p>
                            <p>
                                <a href="mailto"><img src="https://img.shields.io/badge/Gmail-C71610?style=for-the-badge&logo=gmail&logoColor=white" /></a>
                                <a href="https://www.facebook.com">
                                    <img src="https://img.shields.io/badge/Facebook-316FF6?style=for-the-badge&logo=facebook&logoColor=white" />
                                </a>
                                <a href="https://www.instagram.com">
                                    <img src="https://img.shields.io/badge/Instagram-E1306C?style=for-the-badge&logo=instagram&logoColor=white" />
                                </a>
                            </p>
                        </td>
                        <td>
                            <div>
                                “The information on this website is for the sole use of<br /> Toastmasters’ members, for Toastmasters business only.<br />
                                It is not to be used for solicitation and distribution<br /> of non-Toastmasters material or information.”<br />
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Footer;