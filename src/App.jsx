import axios from "axios";
import React, { useEffect, useState } from "react";
import AppBarDigimon from "./components/AppBarDigimon";
import CardDigimon from "./components/CardDigimon";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";

//https://digimon-api.vercel.app/api/digimon
//https://digimon-api.vercel.app/api/digimon/name/agumon

function App() {
  const [digimons, setDigimons] = useState([]);

  const getDigimons = () => {
    axios
      .get("https://digimon-api.vercel.app/api/digimon")
      .then((response) => setDigimons(response.data))
      .catch((response) => console.log(response));
  };

  useEffect(() => {
    getDigimons()
  }, [])

  return (
    <div>
      <AppBarDigimon />
      <Container maxWidth="false">
        <Grid container spacing={2}>
          {digimons.map((item, i) => (
            <Grid item xs={2}>
              <CardDigimon name={item.name} level={item.level} image={item.img}/>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default App;
