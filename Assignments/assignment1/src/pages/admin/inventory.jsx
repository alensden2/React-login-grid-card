import { useState } from "react";
import Navbar from "../../components/Navbar/navbar";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import InfoIcon from "@mui/icons-material/Info";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
const InventoryPage = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const onInfoClick = () => {
    alert("Info Displayed as a pop-up card");
  };

  const onQueryStatsClick = () => {
    alert("Query Stats Displayed as a pop-up card");
  };

  const handleNavbarToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const products = [
    {
      id: 1,
      name: "Orange Blazer",
      category: "Men's Formal Wear",
      sku: "45638SDSY7493",
      ref: "REF002#",
      image:
        "https://t4.ftcdn.net/jpg/02/49/74/73/240_F_249747366_kn4j6KaeMctSSmEtiy5JRuZOV71ixkNY.jpg",
      price: "$89.99",
      remainingItems: 51,
      sizesAvailable: ["M", "XXL", "XL", "L"],
    },
    {
      id: 2,
      name: "Checkered Shirt",
      category: "Men's Casual Wear",
      sku: "638DFG4638222",
      ref: "REF003#",
      image:
        "https://t3.ftcdn.net/jpg/01/26/91/78/240_F_126917876_QVFao2TKEqQejDDvxSddOVUXwU0vsnd9.jpg",
      price: "$49.99",
      remainingItems: 121,
      sizesAvailable: ["M", "S", "XS", "L"],
    },
    {
      id: 3,
      name: "Checkered Crop Top",
      category: "Women's Casual Wear",
      sku: "73625GFR82763",
      ref: "REF022#",
      image:
        "https://t4.ftcdn.net/jpg/06/00/99/93/240_F_600999355_jWQw0ztYdv4NNpXjfffv0fBg3QrWijyQ.jpg",
      price: "$19.99",
      remainingItems: 41,
      sizesAvailable: ["S", "XXL", "XL", "L"],
    },
    {
      id: 4,
      name: "White jeans",
      category: "Women's Party Wear",
      sku: "5826578FD87S5",
      ref: "REF232#",
      image:
        "https://t3.ftcdn.net/jpg/03/42/77/10/240_F_342771046_4RKe6ZxAEbGCKlJJtXf3vOdAUI3deO8Y.jpg",
      price: "$89.99",
      remainingItems: 81,
      sizesAvailable: ["M", "XXL", "XL", "L"],
    },
    {
      id: 5,
      name: "Denim T-shirt",
      category: "Men's Party Wear",
      sku: "748392DFGJ783",
      ref: "REF342#",
      image:
        "https://t4.ftcdn.net/jpg/05/82/21/71/240_F_582217142_KYmYcRA3Zr55ntz0L5Uyf0urCekCctCQ.jpg",
      price: "$29.99",
      remainingItems: 65,
      sizesAvailable: ["M", "XXL", "XL", "L"],
    },
    {
      id: 6,
      name: "White Beach Shorts",
      category: "Men's Summer Specials",
      sku: "93928203UIY83",
      ref: "REF932#",
      image:
        "https://t4.ftcdn.net/jpg/03/96/15/95/240_F_396159547_BAROJGva7HePYCj79Slor26Zz0U93DX5.jpg",
      price: "$9.99",
      remainingItems: 1,
      sizesAvailable: ["M", "S", "XS", "L"],
    },
    {
      id: 7,
      name: "Beige blazer",
      category: "Men's Formal Wear",
      sku: "JSHDNW3821372",
      ref: "REF2302#",
      image:
        "https://t4.ftcdn.net/jpg/05/80/01/97/240_F_580019718_jtHUCYcPSz2qPP1BwyE62tAlB5q6z368.jpg",
      price: "$34.99",
      remainingItems: 56,
      sizesAvailable: ["M", "XXL", "XL", "L"],
    },
    {
      id: 8,
      name: "Blue smart formal",
      category: "Men's Formal Wear",
      sku: "KSJWIE88922345",
      ref: "REF022302#",
      image:
        "https://t4.ftcdn.net/jpg/02/86/47/09/240_F_286470965_viaHM6ZNjrcvLENe14yWQFi1jEm2jKeV.jpg",
      price: "$23.99",
      remainingItems: 1,
      sizesAvailable: ["M", "XXL", "XL", "L"],
    },
    {
      id: 9,
      name: "Plain Vanilla White",
      category: "Men's Formal Wear",
      sku: "45638SDSY7493",
      ref: "REF054302#",
      image:
        "https://t3.ftcdn.net/jpg/03/90/26/62/240_F_390266222_0zsJWkU9rXdlZCrpyfVpzrZxJyywoiPf.jpg",
      price: "$82.99",
      remainingItems: 5,
      sizesAvailable: ["M", "XXL", "XL", "L"],
    },
  ];

  return (
    <>
      <Navbar isOpen={isNavbarOpen} onToggle={handleNavbarToggle}></Navbar>

      <Box sx={{ ml: isNavbarOpen ? "240px" : 0, p: 3, marginTop: "64px" }}>
        <Typography variant="h6" component="div" sx={{ marginBottom: 2 }}>
          <b>Inventory</b>
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {products.map((product) => (
            <Card key={product.id} sx={{ maxWidth: 300, marginBottom: 3 }}>
              <CardMedia
                sx={{ height: 300 }}
                image={product.image}
                title={product.name}
              ></CardMedia>
              <CardContent>
                <Typography variant="h5" component="div">
                  <b>{product.name}</b>
                </Typography>
                <List sx={{ marginTop: 2 }}>
                  <ListItem>
                    <ListItemText primary={`Reference: ${product.ref}`} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={`SKU: ${product.sku}`} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={`Category: ${product.category}`} />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary={`Units: ${product.remainingItems}`}
                    />
                  </ListItem>

                  <ListItem>
                    <ListItemText
                      primary={`Total Remaining items: ${product.remainingItems}`}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary={`Sizes Available: ${product.sizesAvailable.join(
                        ", "
                      )}`}
                    />
                  </ListItem>
                </List>
                <Typography variant="h6" component="div" sx={{ marginTop: 2 }}>
                  {product.price}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "space-between" }}>
                <Button variant="text" startIcon={<InfoIcon />}onClick={onInfoClick}>
                  Info
                </Button>
                <Button
                  variant="text"
                  startIcon={<QueryStatsIcon />}
                  onClick={onQueryStatsClick}
                >
                  Query Stats
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default InventoryPage;

// reference
// card mui - https://mui.com/material-ui/react-card/
// photos - https://stock.adobe.com/ca/search?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bcontent_type%3Aimage%5D=1&k=mens+clothing+formal&order=relevance&safe_search=1&limit=100&search_page=1&search_type=usertyped&acp=&aco=mens+clothing+formal&get_facets=0
// how to iterate through a array in mui cards https://forum.freecodecamp.org/t/iterate-a-card-component-with-properties-from-an-array-of-objects/445211/2
