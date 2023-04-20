var express = require('express');
var router = express.Router();



//stockage de l'url de l'api dans une constante et utilisation de la variable d'environnement
const DISCOVER_MOVIES_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}`;

// Route pour récupérer les dernières découvertes
router.get('/movies', async (req, res) => {
    const response = await fetch(DISCOVER_MOVIES_URL);
    const data = await response.json();
    res.json({movies: data.results});
  });
  
  
module.exports = router;
