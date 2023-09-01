import { LoggerService } from "../../services/logger.service";
import { MathService } from "./math.service";

/* let loggerSpy: jasmine.Spy; */
let mathService: MathService;
let loggerService: LoggerService;
fdescribe("MathService", () => {
  beforeEach(() => {
    let loggerSpy = jasmine.createSpyObj("LoggerService", ["logger"]);
    mathService = new MathService(loggerSpy);
  });
  it("should work", () => {
    // Todo : Test if the service is well instanciated
    expect(1).toBe(1);
  });
  /* Il doit bien additionner */
  it("should add two numbers", () => {
    /* Act */
    const result = mathService.add(1, 2);
    /* Assert */
    expect(result).toBe(3);
  });
  it("should substract two numbers", () => {
    /* Act */
    const result = mathService.substract(1, 2);
    /* Assert */
    expect(result).toBe(-1);
  });
});
