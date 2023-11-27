import { test, Page, expect } from "@playwright/test";
import locator from "../Pages/swagLabspages";

export default class loginHelper {
    constructor(public page:Page){}

locator = new locator(this.page);

async Login(username:any, password:any){
    await this.page.waitForTimeout(2000);
    await this.locator.loginForm().isVisible();
    await this.locator.username().isVisible();
    await this.locator.password().isVisible();
    await this.locator.loginbutton().isVisible();
    await this.locator.username().fill(username);
    await this.locator.password().fill(password);
    await this.locator.loginbutton().click();
}
}