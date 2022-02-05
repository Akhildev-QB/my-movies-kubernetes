const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'data', 'movie.json');

exports.listMovie = (req, res, next) => {
  try {
    const jsonString = fs.readFileSync(filePath);
    const movie = JSON.parse(jsonString);
    res.status(200).json({ success: true, movie });
  } catch (err) {
    console.log(err);
    res
      .status(404)
      .json({ success: false, message: 'Error in reading data file' });
  }
};

exports.addMovie = (req, res, next) => {
  try {
    const movie = {
      name: 'Spider Man',
      year: 2021,
      genre: 'Sci-fi',
      rating: 4.5
    };

    const jsonString = JSON.stringify(movie);
    fs.writeFileSync(filePath, jsonString);
    res.status(201).json({ success: true, message: 'Added movie succesfully' });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false, message: 'Error in writing data' });
  }
};
