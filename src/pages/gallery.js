import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Navbar from '../widgets/navbar';
import { Box, CardMedia, Container } from '@mui/material';
import GroupPic from '../assets/group_pic.jpg';
import Footer from '../widgets/footer';
import { useNavigate } from 'react-router-dom';

function Gallery() {
    const navigate = useNavigate();
    return (
        <div>
            <Navbar />
            <br />
            <br />
            <br />
            <br />
            <div className='gallery-cards'>
                <Card onClick={
                    () => {
                        window.open('https://drive.google.com/drive/folders/1jUY8w39Cw5lsgX-PwEV2rwE5XXjdQVyz?usp=sharing');
                    }
                } className='gallery-card' sx={{ maxWidth: 400, marginRight: '50px', height: 'min-content', borderRadius: '0px', boxShadow: '0px 0px 0px 0px', backgroundColor: '#004168', color: 'white', cursor: 'pointer' }}>
                    <CardMedia
                        component="img"
                        height="170"
                        image={GroupPic}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{
                            fontFamily: 'montserrat-r',
                            textAlign: 'center'
                        }}>
                            Meeting Photos
                        </Typography>
                    </CardContent>
                </Card>
                <Card onClick={
                    () => {
                        navigate('/gallery/flyers');
                    }
                } className='gallery-card' sx={{ maxWidth: 400, marginRight: '50px', height: 'min-content', borderRadius: '0px', boxShadow: '0px 0px 0px 0px', backgroundColor: '#004168', color: 'white' }}>
                    <CardMedia
                        component="img"
                        height="170"
                        image={GroupPic}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{
                            fontFamily: 'montserrat-r',
                            textAlign: 'center'
                        }}>
                            Flyers
                        </Typography>
                    </CardContent>
                </Card>
                <Card className='gallery-card' sx={{ maxWidth: 400, height: 'min-content', borderRadius: '0px', boxShadow: '0px 0px 0px 0px', backgroundColor: '#004168', color: 'white' }}>
                    <CardMedia
                        component="img"
                        height="170"
                        image={GroupPic}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{
                            fontFamily: 'montserrat-r',
                            textAlign: 'center'
                        }}>
                            Agendas
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            <Footer />
        </div>
    );
}

export default Gallery;