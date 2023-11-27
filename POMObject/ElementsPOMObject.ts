import { test as Elementsobjects,defineConfig  } from "@playwright/test";
import loginHelper from "../HelperClasses/LoginHelper";
import productsPagehelper from "../HelperClasses/productsPageHelper";
import dotenv from 'dotenv';
dotenv.config({
  path:'.env.test'
})
type Elementsobj = {
  loginHelper: loginHelper,
  productsPagehelper:productsPagehelper

};
const testPages = Elementsobjects.extend<Elementsobj>({
  loginHelper: async ({ page }, use) => {
    
    const login = new loginHelper(page);
    await page.goto(String(process.env.SL_URL));
    login.Login(String(process.env.SL_USERNAME),String(process.env.SL_PASSWORD));
    await use(login);
  },
  productsPagehelper:async ({page}, use) => {
    await use(new productsPagehelper(page));
  }
});

export const test = testPages;
export const expect = testPages.expect;
