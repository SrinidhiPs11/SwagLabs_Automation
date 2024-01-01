import { test, Page, expect,Browser } from "@playwright/test";
import locator from "../Pages/swagLabspages";
import testdata from "../testdata/products.json";

export default class productsPagehelper {
  constructor(public page: Page) {}

  locator = new locator(this.page);

  async verifySwaglabTitle() {
    await this.page.waitForTimeout(2000);
    let pageTitle: string | null;
    pageTitle = await this.locator.swaglabtitle().textContent();
    expect(pageTitle).toEqual("Swag Labs");
  }
  async getpagetitle() {
    await this.page.waitForTimeout(3000)
    let title = await this.page.evaluate("document.title");
    return title;
  }

  async clickMenuIcon() {
    await this.locator.openMenu().isVisible();
    await this.locator.openMenu().click();
  }
  async clickAllItemsInMenu() {
    await this.locator.allItemsbtn().isVisible();
    await this.locator.allItemsbtn().click();
  }
  async clickAbout() {
    await this.locator.aboutbtn().isVisible();
    await this.locator.aboutbtn().click();
  }
  async clickLogout() {
    await this.locator.logoutbtn().isVisible();
    await this.locator.logoutbtn().click();
  }
  async clickProduct(productname: string) {
    await this.locator.inventory_item_name(productname).isVisible();
    await this.locator.inventory_item_name(productname).click();
  }
  //product page add to cart button click
  async clickAddtoCartBtn() {
    await this.locator.addToCart().isVisible();
    await this.locator.addToCart().click();
  }

  async ProductAddToCart(productname: string) {
    await this.locator.inventory_addToCart(productname).isVisible();
    await this.locator.inventory_addToCart(productname).click();
  }
  async checkproductPrice(productname: string, productPrice: any) {
    await this.locator.inventory_item_price(productname).isVisible();
    let expected = await this.locator
      .inventory_item_price(productname)
      .textContent();
    expect(expected).toBe(productPrice);
  }
  async verifyDescription(productname: string, description: string) {
    await this.locator.inventory_item_desc(productname).isVisible();
    let exp_description = await this.locator
      .inventory_item_desc(productname)
      .textContent();
    expect(exp_description).toBe(description);
  }
  async verifyallProductsVisible() {
    await this.locator.allInventoryItem().waitFor({ state: "visible" });
    await this.locator.allInventoryItem().isVisible();
  }
  async verifyPaticularProductVisible(x: number) {
    await this.locator.singleInventoryItem(x).waitFor({ state: "visible" });
    await this.locator.singleInventoryItem(x).isVisible();
  }

  async clickCartIcon() {
    await this.locator.cart().isVisible();
    await this.locator.cart().click();
  }
  async verifyAllJsonProductsInCart() {
    for (let i = 0; i < testdata.length; i++) {
      let obj = testdata[i];
      await this.verifyProdutctInCheckout(obj.name, obj.description, obj.price);
    }
  }
  async addAllJsonProductsToCart() {
    for (let i = 0; i < testdata.length; i++) {
      let obj = testdata[i];
      await this.ProductAddToCart(obj.name);
    }
  }

  async VerifyFooterLinks(){
    await this.locator.twitter().isVisible();
    await this.locator.Facebook().isVisible();
    await this.locator.LinkedIn().isVisible();
    await this.locator.footerText().isVisible();
    let footertext =  await this.locator.footerText().textContent();
    expect(footertext).toBe("© 2024 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy");

  }
  async clickTwitter(){
    await this.locator.twitter().waitFor({state: 'visible'})
    await this.locator.twitter().click();
  }
  async ClickFacebook(){
    await this.locator.Facebook().waitFor({state: 'visible'})
    await this.locator.Facebook().click();
  }
  async clickLinkedIN(){
    await this.locator.LinkedIn().waitFor({state: 'visible'})
    await this.locator.LinkedIn().click();
  }
  
  async verifyProductInCart(
    productname: string,
    description: string,
    price: string
  ) {
    await this.locator.cart_item_name(productname).isVisible();
    await this.locator.cart_item_desc(productname).isVisible();
    await this.locator.cart_item_price(productname).isVisible();
    let exp_description = await this.locator
      .cart_item_desc(productname)
      .textContent();
    let exp_price = await this.locator
      .cart_item_price(productname)
      .textContent();
    expect(exp_description).toBe(description);
    expect(exp_price).toBe(price);
  }

  async clickRemovebtn(productname: string) {
    await this.locator.cart_removebtn(productname).isVisible();
    await this.locator.cart_removebtn(productname).click();
  }
  async verifyRemovebtnVisible() {
    await this.locator.removebutton().waitFor({ state: "visible" });
    await this.locator.removebutton().isVisible();
  }

  async clickCheckout() {
    await this.locator.checkoutbtn().isVisible();
    await this.locator.checkoutbtn().click();
  }

  async clickContinueshopping() {
    await this.locator.continueShoppingbtn().isVisible();
    await this.locator.continueShoppingbtn().click();
  }

  async fillInformation(firstName: string, lastName: string, zipcode: string) {
    await this.locator.fName().isVisible();
    await this.locator.lName().isVisible();
    await this.locator.zipcode().isVisible();
    await this.locator.fName().fill(firstName);
    await this.locator.lName().fill(lastName);
    await this.locator.zipcode().fill(zipcode);
  }
  async clickContineBtn() {
    await this.locator.continue().isVisible();
    await this.locator.continue().click();
  }

  async verifyProdutctInCheckout(
    productname: string,
    description: string,
    price: string
  ) {
    await this.locator.cart_item_name(productname).isVisible();
    await this.locator.cart_item_desc(productname).isVisible();
    await this.locator.cart_item_price(productname).isVisible();
    let exp_description = await this.locator
      .cart_item_desc(productname)
      .textContent();
    let exp_price = await this.locator
      .cart_item_price(productname)
      .textContent();
    expect(exp_description).toBe(description);
    expect(exp_price).toBe(price);
  }
  async verifyPriceTotal() {
    let count = await this.page
      .locator("(//*[@class='inventory_item_price'])")
      .count();
    var totalprice: number = 0;
    for (let i = 1; i <= count; i++) {
      let dollars = String(
        await this.page
          .locator("(//*[@class='inventory_item_price'])[" + i + "]")
          .textContent()
      );
      let price = parseFloat(dollars.replace("$", ""));
      totalprice = totalprice + price;
    }
    let dispPrice = parseFloat(
      String(await this.locator.finaltotal().textContent()).replace(
        "Total: $",
        ""
      )
    );
    let tax = parseFloat(
      String(await this.locator.tax().textContent()).replace("Tax: $", "")
    );
    let calculatedprice = totalprice + tax;
    expect(dispPrice.toFixed(2)).toBe(calculatedprice.toFixed(2));
  }

  async orderConfirmationPage() {
    expect(await this.locator.pgtitle().textContent()).toBe(
      "Checkout: Complete!"
    );
    await this.locator.msgheader().isVisible();
    await this.locator.msgtext().isVisible();
    await this.locator.goHomebtn().isVisible();
    expect(await this.locator.msgheader().textContent()).toBe(
      "Thank you for your order!"
    );
    expect(await this.locator.msgtext().textContent()).toBe(
      "Your order has been dispatched, and will arrive just as fast as the pony can get there!"
    );
  }

  async clickGoHomebtn() {
    await this.locator.goHomebtn().click();
  }
  async clickFinish() {
    await this.locator.finishbtn().click();
  }
  async verifyProductDetailsInProductPage(
    productname: string,
    description: string,
    price: string
  ) {
    await this.locator.productName().isVisible();
    await this.locator.productDescription().isVisible();
    await this.locator.productPrice().isVisible();
    await this.locator.item_img().isVisible();
    let productName = await this.locator.productName().textContent();
    let productDesc = await this.locator.productDescription().textContent();
    let productprice = await this.locator.productPrice().textContent();
    expect(productName).toBe(productname);
    expect(productDesc).toBe(description);
    expect(productprice).toBe(price);
  }
}
