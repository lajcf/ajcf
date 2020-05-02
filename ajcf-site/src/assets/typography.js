import Typography from "typography";
import funstonTheme from 'typography-theme-funston';

funstonTheme.googleFonts = [
  {
    name: 'Solway',
    styles: [
      "400",
      '700',
    ],
  },
  {
    name: 'PT Sans',
    styles: [
      '400',
      '400i',
      '700',
      '700i',
    ],
  },
];
funstonTheme.headerFontFamily = ["Solway", "sans-serif"];
funstonTheme.bodyFontFamily = ["PT Sans", "sans-serif"];
funstonTheme.overrideThemeStyles = () => ({
  ".main-link": {
    "font-family": "Solway",
    "font-weight": "bolder"
  }
})
const typography = new Typography(funstonTheme);

export default typography;
