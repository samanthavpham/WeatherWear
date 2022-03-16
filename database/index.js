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
  tops: [String],
  bottoms: [String],
  outerwear: [String],
  footwear: [String]
});

const Outfit = mongoose.model('Outfit', outfitSchema);
module.exports = Outfit;