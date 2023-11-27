import { test, expect } from "../POMObject//ElementsPOMObject";
import testdata from "../testdata/products.json";

test("Verify_Products_visible", async ({
  page,
  loginHelper,
  productsPagehelper,
}) => {
  for(let i = 0; i < testdata.length; i++) {
    let obj = testdata[i];
    await productsPagehelper.verifyPageTitle();
    await productsPagehelper.verifyDescription(
      obj.name,
      obj.description,
    );
  }
  await page.close();
});

test("Add_to_cart", async ({
  page,
  loginHelper,
  productsPagehelper,
}) => {
  await productsPagehelper.addAllJsonProductsToCart();
  await productsPagehelper.clickCartIcon();
  await productsPagehelper.verifyAllJsonProductsInCart();
  await productsPagehelper.clickCheckout();
  await productsPagehelper.fillInformation("Test1", "TS","12345");
  await productsPagehelper.clickContineBtn();
  await productsPagehelper.verifyAllJsonProductsInCart();
  
 });
test("Full_Test_Flow", async ({
  page,
  loginHelper,
  productsPagehelper,
}) => {
  await productsPagehelper.addAllJsonProductsToCart();
  await productsPagehelper.clickCartIcon();
  await productsPagehelper.verifyAllJsonProductsInCart();
  await productsPagehelper.clickCheckout();
  await productsPagehelper.fillInformation("Test1", "TS","12345");
  await productsPagehelper.clickContineBtn();
  await productsPagehelper.verifyAllJsonProductsInCart();
  await productsPagehelper.verifyPriceTotal();
  await productsPagehelper.clickFinish();
  await productsPagehelper.orderConfirmationPage();
  await productsPagehelper.clickGoHomebtn();
  await productsPagehelper.clickMenuIcon();
  await productsPagehelper.clickLogout();


 });







