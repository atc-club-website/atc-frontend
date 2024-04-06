import { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import supabase from '../../supabase/supabase_init';

function Flyers(params) {
    const [data, setData] = useState([]);
    async function getData() {
        const { data, error } = await supabase.from('meetings').select('*').order('date', { ascending: false });
        if (error) {
            console.error(error);
            return [];
        }
        return data;
    }
    function convertDate(inputFormat) {
        function pad(s) { return (s < 10) ? '0' + s : s; }
        var parts = inputFormat.split('-');
        return [parts[2], parts[1], parts[0]].join('-');
    }
    useEffect(() => {
        getData().then(data => setData(data));
    }, []);

    return (
        <Container>
            <p className='header'>Flyers</p>
            <div className="table links-table">
                <table>
                    {
                        data.map((meeting, index) => (
                            <tr key={index} onClick={() => window.open(meeting.flyerUrl)}>
                                <td>
                                    Meeting # {meeting.meetingNum}
                                </td>
                                <td>
                                    {convertDate(meeting.date)}
                                </td>
                            </tr>
                        ))
                    }
                </table>
            </div>
        </Container>
    );
}

export default Flyers;