import { t } from "testcafe";
import { config } from "../config";

class HomePage {
  constructor() {}

  async browse() {
    await t.navigateTo(`${process.env.BASE_URL || config.baseUrl}/index.php`);
  }
}

export default new HomePage();
