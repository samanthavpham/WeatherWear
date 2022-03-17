const mongoose = require('mongoose');

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(
    'mongodb://localhost:27017/weatherweardb', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  console.log(mongoose.connection.readyState);
}

const outfitSchema = new mongoose.Schema({
  _id: Number,
  tops: {
    items: [String],
    img: String
  },
  bottoms: {
    items: [String],
    img: String
  },
  outerwear: {
    items: [String],
    img: String
  },
  footwear: {
    items: [String],
    img: String
  }
});

const Outfit = mongoose.model('Outfit', outfitSchema);
module.exports = Outfit;