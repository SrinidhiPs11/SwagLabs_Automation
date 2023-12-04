import { Locator, Page } from "@playwright/test";

export default class locator {
  constructor(public page: Page) {}
  swaglabtitle = () =>this.page.locator("//*[@class='app_logo']") as Locator;

  //Login Page
  loginForm = () => this.page.locator("//*[@class='form_column']") as Locator;
  username = () => this.page.locator("//*[@id='user-name']") as Locator;
  password = () => this.page.locator("//*[@id='password']") as Locator;
  loginbutton = () => this.page.locator("//*[@id='login-button']") as Locator;


  //Home or landing page
  singleInventoryItem = (x:number) =>this.page.locator("(//*[@class='inventory_item'])["+x+"]") as Locator
  allInventoryItem = () =>this.page.locator("//*[@class='inventory_list']") as Locator
  inventory_list = () =>this.page.locator("//*[@class='inventory_list']") as Locator
  inventory_item_name  = (text:string) =>this.page.locator("//*[contains(@class, 'inventory_item_name ') and text() = '"+text+"']") as Locator
  inventory_item_price  = (text:string) =>this.page.locator("//*[text()='"+text+"']//ancestor::div[@class='inventory_item_description']//*[@class='inventory_item_price']") as Locator
  inventory_item_desc  = (text:string) =>this.page.locator("//*[text()='"+text+"']//ancestor::div[@class='inventory_item_description']//*[@class='inventory_item_desc']") as Locator
  inventory_addToCart  = (text:string) =>this.page.locator("//*[text()='"+text+"']//ancestor::div[@class='inventory_item_description']//*[text()='Add to cart']") as Locator
  inventory_Item_removebutton = (text:string) =>this.page.locator("//*[text()='"+text+"']//ancestor::div[@class='inventory_item']//*[text()='Remove']") as Locator

  cart = () =>this.page.locator("//*[@class='shopping_cart_link']") as Locator
  sortButton = () =>this.page.locator("//*[@class='product_sort_container']") as Locator
  openMenu = () =>this.page.locator("//*[text()='Open Menu']") as Locator
  allItemsbtn = () =>this.page.locator("//*[text()='All Items']") as Locator
  aboutbtn = () =>this.page.locator("//*[text()='About']") as Locator
  logoutbtn = () =>this.page.locator("//*[text()='Logout']") as Locator


  //Product page
  productName = () =>this.page.locator("//*[contains(@class,'inventory_details_name')]") as Locator
  productPrice = () =>this.page.locator("//*[@class='inventory_details_price']") as Locator
  addToCart = () =>this.page.locator("//*[text()='Add to cart']") as Locator
  item_img = () =>this.page.locator("//*[@class='inventory_details_img']") as Locator
  backToProducts = () =>this.page.locator("//*[@id='back-to-products']") as Locator
  removebutton = () =>this.page.locator("//*[text()='Remove']") as Locator
  productDescription = () =>this.page.locator("//*[@class='inventory_details_desc large_size']") as Locator
  
  
  //yourcart page
  pgtitle = () =>this.page.locator("//*[@class='title']") as Locator
  checkoutbtn = () =>this.page.locator("//*[@id='checkout']") as Locator
  continueShoppingbtn = () =>this.page.locator("//*[@id='continue-shopping']") as Locator
  cart_item_name  = (text:string) =>this.page.locator("//*[contains(@class, 'inventory_item_name') and text() = '"+text+"']") as Locator
  cart_item_desc  = (text:string) =>this.page.locator("//*[text()='"+text+"']//ancestor::div[@class='cart_item']//*[@class='inventory_item_desc']") as Locator
  cart_item_price  = (text:string) =>this.page.locator("//*[text()='"+text+"']//ancestor::div[@class='cart_item']//*[@class='inventory_item_price']") as Locator
  cart_removebtn  = (text:string) =>this.page.locator("//*[text()='"+text+"']//ancestor::div[@class='cart_item']//*[text()='Remove']") as Locator


  //checkout page your information
  fName = () =>this.page.locator("//*[@id='first-name']") as Locator
  lName = () =>this.page.locator("//*[@id='last-name']") as Locator
  zipcode = () =>this.page.locator("//*[@id='postal-code']") as Locator
  continue = () =>this.page.locator("//*[@id='continue']") as Locator
  cancel = () =>this.page.locator("//*[@id='cancel']") as Locator
  
  
  //checkout page your information
  total = () =>this.page.locator("//*[contains(@class, 'summary_subtotal_label')]") as Locator
  tax = () =>this.page.locator("//*[contains(@class, 'summary_tax_label')]") as Locator
  finaltotal = () =>this.page.locator("//*[contains(@class, 'summary_total_label')]") as Locator
  finishbtn = () =>this.page.locator("//*[@id='finish']") as Locator

  //confirmation page
  msgheader = () =>this.page.locator("//*[@class='complete-header']") as Locator
  msgtext = () =>this.page.locator("//*[@class='complete-text']") as Locator
  goHomebtn = () =>this.page.locator("//*[text()='Back Home']") as Locator




}
