import React from 'react';

function OutfitList ({ outfit }) {
  return (
    <div>
      <h3>Outfit Suggestions:</h3>
      <div>
        Tops:
        <ul>
          {outfit.tops.map((top) => (
            <li>{top}</li>
          ))}
        </ul>
      </div>
      <div>
        Bottoms:
        <ul>
          {outfit.bottoms.map((bottom) => (
            <li>{bottom}</li>
          ))}
        </ul>
      </div>
      <div>
        Outerwear:
        <ul>
          {outfit.outerwear.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        Footwear:
        <ul>
          {outfit.footwear.map((shoe) => (
            <li>{shoe}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default OutfitList;