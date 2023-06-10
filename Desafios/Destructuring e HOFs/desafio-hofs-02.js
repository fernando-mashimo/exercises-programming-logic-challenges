const data = require('./data');

/* 2 - Através do destructuring, acesse o nome e os melhores álbuns primeira banda, 
retornando uma string no seguinte formato: "os melhores álbuns do Radiohead: In Rainbows,Kid A,OK Computer,Pablo Honey"
*/

const getBestAlbuns = (data) => {
  const { bands } = data;
  const { bandName, bestAlbuns } = bands[0];
  const bestAlbumsName = bestAlbuns.map((album) => album.name);

  return `os melhores álbuns do ${bandName}: ${bestAlbumsName}`;
}

console.log(getBestAlbuns(data));

module.exports = getBestAlbuns;
