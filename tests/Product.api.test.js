const dotenv = require("dotenv");
dotenv.config();

const request = require("supertest");
const app = require("../server");

// unit testing
// const AuthMiddlewares = require('../middlewares/authenticate')

// before() => run 1x diawal test case, utk semua test case
// beforeEach() => run SETIAP diawal test case, utk semua test case
// after() => run 1x diakhir test case
// afterEach() => run SETIAP diakhir test case, utk semua test case

describe("PRODUCT CRUD TEST", () => {
  it("success create product", async () => {
    const product = {
      name: "Dummy Product",
      price: 5000,
      stock: 1,
    };
    const response = await request(app).post("/api/v1/products").send(product);
    expect(response.statusCode).toBe(200);
    //   expect(response.body)
  });
});
