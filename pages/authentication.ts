import { Selector, t } from "testcafe";

class AuthenticationPage {
  registerEmailInput: Selector;
  registerNewBtn: Selector;
  firstNameInput: Selector;
  lastNameInput: Selector;
  passwordInput: Selector;
  address1Input: Selector;
  cityInput: Selector;
  stateSelect: Selector;
  mobilePhoneInput: Selector;
  registerSubmitBtn: Selector;
  zipCodeInput: Selector;
  createAccountError: Selector;

  constructor() {
    this.registerEmailInput = Selector("#email_create");
    this.registerNewBtn = Selector("#SubmitCreate");

    this.firstNameInput = Selector("#customer_firstname");
    this.lastNameInput = Selector("#customer_lastname");
    this.passwordInput = Selector("#passwd");
    this.address1Input = Selector("#address1");
    this.cityInput = Selector("#city");
    this.stateSelect = Selector("#id_state");
    this.zipCodeInput = Selector("#postcode");
    this.mobilePhoneInput = Selector("#phone_mobile");
    this.registerSubmitBtn = Selector("#submitAccount");

    this.createAccountError = Selector("#create_account_error");
  }

  selectOption = async (selectElement: Selector, option: string) => {
    await t
      .click(selectElement)
      .click(selectElement.find("option").withText(option));
  };

  registerUser = async (
    email: string,
    firstName: string,
    lastName: string,
    password: string,
    address1: string,
    city: string,
    state: string,
    zipCode: string,
    mobile: string
  ) => {
    await t.typeText(this.registerEmailInput, email);
    await t.click(this.registerNewBtn);

    await t.typeText(this.firstNameInput, firstName);
    await t.typeText(this.lastNameInput, lastName);
    await t.typeText(this.passwordInput, password);
    await t.typeText(this.address1Input, address1);
    await t.typeText(this.cityInput, city);

    await this.selectOption(this.stateSelect, state);

    await t.typeText(this.mobilePhoneInput, mobile);
    await t.typeText(this.zipCodeInput, zipCode);

    await t.click(this.registerSubmitBtn);
  };
}

export default new AuthenticationPage();
