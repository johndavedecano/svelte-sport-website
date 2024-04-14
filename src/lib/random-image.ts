export const getRandomImageUrl = (w: number = 200, h: number = 300) => {
  const num = Math.floor(Math.random() * 100) + 1;
  return `https://picsum.photos/id/${num}/${w}/${h}`;
};

export const getRandomBgImage = (w: number = 200, h: number = 300) => {
  const url = getRandomImageUrl(w, h);
  return `background-image: url('${url}');`;
};
