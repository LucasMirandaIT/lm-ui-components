function checkHexIsLight(color: String) {
  const hex = color.replace('#', '');
  const c_r = parseInt(
    hex.length === 6 ? hex.substring(0, 2) : `${hex[0]}${hex[0]}`,
    16
  );
  const c_g = parseInt(
    hex.length === 6 ? hex.substring(2, 4) : `${hex[0]}${hex[0]}`,
    16
  );
  const c_b = parseInt(
    hex.length === 6 ? hex.substring(4, 6) : `${hex[0]}${hex[0]}`,
    16
  );
  const brightness = (c_r * 299 + c_g * 587 + c_b * 114) / 1000;
  return brightness > 155;
}

export { checkHexIsLight };
