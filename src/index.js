// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addVariant }) {
  addVariant("active-hover", ["&.active", "&:active", "&:hover"]);
});
