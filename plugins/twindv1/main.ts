import {
  cssom,
  getSheet,
  setup,
  TwindConfig,
} from "https://esm.sh/@twind/core@1.1.3";
import { STYLE_ELEMENT_ID } from "./shared.ts";

export default function hydrate(options: TwindConfig) {
  const elem = document.getElementById(STYLE_ELEMENT_ID) as HTMLStyleElement;
  const sheet = cssom(elem);

  sheet.resume = getSheet().resume.bind(sheet);
  document.querySelector('[data-twind="claimed"]')?.remove();

  setup(options, sheet);
}
