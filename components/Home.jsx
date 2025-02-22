import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import axios from 'axios';

const Home = () => {
    const [products, setProducts] = useState([]);

    // Fetching data from external API
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then((res) => {
            setProducts(res.data);
        });
    }, []);

    // Style object for hover effect
    const cardStyle = {
        transition: 'transform 0.3s ease',
    };

    const cardHoverStyle = {
        transform: 'scale(1.1)',
    };

    return (
        <div style={{ padding: '20px' }}>
            <Grid container spacing={3}>
                {products.map((product) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                        <Card
                            style={cardStyle}
                            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                        >
                            <CardMedia
                                component="img"
                                alt={product.title}
                                height="200"
                                image={product.image}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    {product.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Price: {product.price}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Rating: {product.rating.rate} / 5
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Home;
