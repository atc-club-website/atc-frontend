import { useEffect, useState } from 'react';
import supabase from '../supabase/supabase_init';
import '../css/page.css';
import Navbar from '../widgets/navbar';
import { Container } from '@mui/material';

function MembersTable(params) {
    const [members, setMembers] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const checkLoginStatus = async () => {
        const { data, error } = await supabase.auth.getSession()
        console.log(data.session != null);
        if (data.session != null) {
            return true;
        }
        return false;
    }

    async function getMembersFromSupabase() {
        const { data, error } = await supabase.from('members').select('*');
        if (error) {
            console.log(error);
            return [];
        }
        return data;
    }

    useEffect(() => {
        getMembersFromSupabase().then(data => setMembers(data));
        const checkStatus = async () => {
            const status = await checkLoginStatus();
            setIsLoggedIn(status);
        };

        checkStatus();
    }, []);

    return (
        <div>
            <Navbar />
            <br />
            <br />
            <br />
            <Container>
                <h1>Members</h1>
                <div className='table'>    
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {members.map((member, index) => (
                                <tr key={index}>
                                    <td>{member.name}</td>
                                    <td>{member.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Container>
        </div>
    );
}

export default MembersTable;