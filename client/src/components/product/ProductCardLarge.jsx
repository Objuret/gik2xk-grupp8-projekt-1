import { Card, CardContent, CardMedia, Typography } from '@mui/material';

function ProductCardLarge({ product }) {
  return (
    <Card
      sx={{
        maxWidth: "100%",
        m: { xs: 1, sm: 2 },
        borderRadius: 2,
        bgcolor: "background.paper",
        boxShadow: 3,
      }}
    >
      <CardMedia
        component="img"
        sx={{
          height: { xs: "20vh", sm: "30vh", md: "40vh" },
          objectFit: "cover",
        }}
        image={product.imageUrl}
        alt={product.title}
      />
      <CardContent>
        <Typography variant="h5" component="h1" gutterBottom>
          {product.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            maxWidth: "300px", // Change this to your desired width
            wordWrap: "break-word",
          }}
        >
          {product.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ProductCardLarge;