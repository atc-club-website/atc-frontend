import { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import Navbar from '../../widgets/navbar';
import Footer from '../../widgets/footer';
import supabase from '../../supabase/supabase_init';

function Flyers(params) {
    const [data, setData] = useState([]);
    async function getData() {
        const { data, error } = await supabase.from('meetings').select('*');
        if (error) {
            console.error(error);
            return [];
        }
        return data;
    }
    useEffect(() => {
        getData().then(data => setData(data));
    }, []);

    return (
        <div>
            <Navbar />
            <br />
            <br />
            <br />
            <br />
            <div className='flyer-cards'>
                {
                    data.map((meeting, index) => {
                        return (
                            <Card
                                onClick={() => {
                                    window.open(meeting.flyerUrl);
                                }}
                                className='flyer-card'
                                key={index}
                                sx={{
                                    height: 'min-content',
                                    borderRadius: '0px',
                                    boxShadow: '0px 0px 0px 0px',
                                    backgroundColor: '#004168',
                                    color: 'white',
                                    cursor: 'pointer',
                                    marginBottom: '20px',
                                    fontFamily: 'myriad-pro-r'
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="350"
                                    image={meeting.flyerUrl}
                                />
                                <CardContent>
                                    <Typography variant="h6" component="div" sx={{
                                        textAlign: 'center'
                                    }}>
                                        {meeting.date}
                                    </Typography>
                                </CardContent>
                            </Card>
                        );
                    })
                }
            </div>
            <Footer />
        </div>
    );
}

export default Flyers;