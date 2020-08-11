import { t, Selector } from "testcafe";
import { config } from "../config";

class HomePage {
  popularProducts: Selector;
  brandLogo: Selector;
  addToCartBtn: Selector;
  productIframe: Selector;
  proceedToCheckoutBtn: Selector;
  summaryCheckoutBtn: Selector;
  termsCheckBox: Selector;
  bankwireBtn: Selector;
  confirmButton: Selector;
  confirmMessage: Selector;

  constructor() {
    this.brandLogo = Selector("#header_logo");
    this.popularProducts = Selector("#homefeatured a.product_img_link");
    this.addToCartBtn = Selector("#buy_block #add_to_cart");
    this.productIframe = Selector(".fancybox-iframe");
    this.proceedToCheckoutBtn = Selector(".btn").withText(
      "Proceed to checkout"
    );
    this.summaryCheckoutBtn = Selector(".cart_navigation .btn").withText(
      "Proceed to checkout"
    );
    this.termsCheckBox = Selector("#cgv");
    this.bankwireBtn = Selector("a.bankwire");
    this.confirmButton = Selector(".button").withText("I confirm my order");
    this.confirmMessage = Selector(".box .cheque-indent");
  }

  browse = async () => {
    await t.navigateTo(`${process.env.BASE_URL || config.baseUrl}/index.php`);
  };

  checkoutPopularItem = async () => {
    await t
      .hover(this.popularProducts.nth(0))
      .click(this.popularProducts.nth(0));
    await t.switchToIframe(this.productIframe);
    await t.click(this.addToCartBtn);
    await t.switchToMainWindow();
    await t.click(this.proceedToCheckoutBtn);
    await t.click(this.summaryCheckoutBtn);
    await t.click(this.summaryCheckoutBtn);
    await t.click(this.termsCheckBox);
    await t.click(this.summaryCheckoutBtn);
    await t.click(this.bankwireBtn);
    await t.click(this.confirmButton);
  };
}

export default new HomePage();
