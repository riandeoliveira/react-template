import { faker } from "@faker-js/faker";

export abstract class FakeData {
  public static email(): string {
    return faker.internet.email();
  }

  public static strongPassword(): string {
    return faker.internet.password({ prefix: "$0" });
  }
}
