import { test, expect } from "../POMObject//ElementsPOMObject";
import locator from "../Pages/swagLabspages";
import testdata from "../testdata/products.json";
import productsPagehelper from "../HelperClasses/productsPageHelper";

test("Verify_Products_visible", async ({
  page,
  loginHelper,
  productsPagehelper,
}) => {
  await productsPagehelper.verifySwaglabTitle();
  await productsPagehelper.verifyallProductsVisible();
  for (let i = 0; i < testdata.length; i++) {
    let obj = testdata[i];
    await productsPagehelper.verifyDescription(obj.name, obj.description);
  }
  await page.close();
});

test("Add_to_cart", async ({ page, loginHelper, productsPagehelper }) => {
  await productsPagehelper.addAllJsonProductsToCart();
  await productsPagehelper.clickCartIcon();
  await productsPagehelper.verifyAllJsonProductsInCart();
  await productsPagehelper.clickCheckout();
  await productsPagehelper.fillInformation("Test1", "TS", "12345");
  await productsPagehelper.clickContineBtn();
  await productsPagehelper.verifyAllJsonProductsInCart();
});
test("Full_Test_Flow", async ({ page, loginHelper, productsPagehelper }) => {
  await productsPagehelper.addAllJsonProductsToCart();
  await productsPagehelper.clickCartIcon();
  await productsPagehelper.verifyAllJsonProductsInCart();
  await productsPagehelper.clickCheckout();
  await productsPagehelper.fillInformation("Test1", "TS", "12345");
  await productsPagehelper.clickContineBtn();
  await productsPagehelper.verifyAllJsonProductsInCart();
  await productsPagehelper.verifyPriceTotal();
  await productsPagehelper.clickFinish();
  await productsPagehelper.orderConfirmationPage();
  await productsPagehelper.clickGoHomebtn();
  await productsPagehelper.clickMenuIcon();
  await productsPagehelper.clickLogout();
});

test("Adding Single item to cart", async ({
  page,
  loginHelper,
  productsPagehelper,
}) => {
  let obj = testdata[1];
  await productsPagehelper.verifySwaglabTitle();
  await productsPagehelper.clickProduct(obj.name);
  await productsPagehelper.verifyProductDetailsInProductPage(
    obj.name,
    obj.description,
    obj.price
  );
  await productsPagehelper.clickAddtoCartBtn();
  await productsPagehelper.verifyRemovebtnVisible();
  await productsPagehelper.clickCartIcon();
  await productsPagehelper.verifyProductInCart(
    obj.name,
    obj.description,
    obj.price
  );
  await productsPagehelper.verifyRemovebtnVisible();
  await productsPagehelper.clickCheckout();
  await productsPagehelper.fillInformation("Test1", "TS", "12345");
  await productsPagehelper.clickContineBtn();
  await productsPagehelper.verifyProductInCart(
    obj.name,
    obj.description,
    obj.price
  );
  await productsPagehelper.verifyPriceTotal();
  await productsPagehelper.clickFinish();
  await productsPagehelper.orderConfirmationPage();
  await productsPagehelper.clickGoHomebtn();
  await productsPagehelper.clickMenuIcon();
  await productsPagehelper.clickLogout();
  await page.close();
});

test("footer Link validations ", async ({
  page,
  loginHelper,productsPagehelper,context
}) => {
  //Twitter
  await productsPagehelper.VerifyFooterLinks();
  let pagePromise = context.waitForEvent('page');
  await productsPagehelper.clickTwitter();
  let newPage = await pagePromise;
  await newPage.waitForLoadState();
  await page.waitForTimeout(3000);
  let title = await newPage.title()
  expect(title).toBe("Sauce Labs (@saucelabs) / X")
  newPage.close()
  //facebook
  pagePromise = context.waitForEvent('page');
  await productsPagehelper.ClickFacebook()
  newPage = await pagePromise;
  await newPage.waitForLoadState();
  await page.waitForTimeout(3000);
  title = await newPage.title()
  expect(title).toContain("Sauce Labs")
  expect(title).toContain("Facebook")
  newPage.close()
  //LinkedIN
  pagePromise = context.waitForEvent('page');
  await productsPagehelper.clickLinkedIN()
  newPage = await pagePromise;
  await newPage.waitForLoadState();
  await page.waitForTimeout(3000);
  title = await newPage.title()
  expect(title).toBe("Sauce Labs | LinkedIn")
  newPage.close()
  page.close()
});