module.exports = function (api) {
  const presets = [
    "@babel/preset-env"
  ];
  const plugins =  [
  ];
  
  api.cache(false);
  
  return {
    presets,
    plugins
  };
}
