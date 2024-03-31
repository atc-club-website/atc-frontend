import { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Container, Typography } from '@mui/material';
import Navbar from '../../widgets/navbar';
import Footer from '../../widgets/footer';
import supabase from '../../supabase/supabase_init';

function Agendas(params) {
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
        <Container>
            <p className='header'>Agendas</p>
            <div className='flyer-cards'>
            {
                    data.map((meeting, index) => {
                        return (
                            <Card
                                onClick={() => {
                                    window.open(meeting.agendaUrl);
                                }}
                                className='flyer-card'
                                key={index}
                                sx={{
                                    height: 'min-content',
                                    borderRadius: '0px',
                                    boxShadow: '0px 0px 0px 0px',
                                    color: 'white',
                                    cursor: 'pointer',
                                    marginBottom: '20px',
                                    fontFamily: 'myriad-pro-r'
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="350"
                                    image={meeting.agendaUrl}
                                />
                                <CardContent style={{
                                    textAlign: 'center',
                                    color: '#004168',
                                    fontFamily: 'montserrat-r'
                                }}>
                                    {meeting.date}
                                </CardContent>
                            </Card>
                        );
                    })
                }
            </div>
        </Container>
    );
}

export default Agendas;