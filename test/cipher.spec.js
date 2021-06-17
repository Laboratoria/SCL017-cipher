// Importamos el objeto `cipher`, que contiene los métodos `encode` y `decode`

import cipher from "../src/cipher";

describe("cipher", () => {
  // Con It inicializo un test

  it("should be an object", () => {
    expect(typeof cipher).toBe("object");
  });

  describe("cipher.encode", () => {
    it('should return "B" for "A" with offset 1', () => {
      expect(cipher.encode(1, "A")).toBe("B");
    });
  });

  describe("cipher.decode", () => {
    it('should return "B" for "A" with offset 1', () => {
      expect(cipher.decode(1, "B")).toBe("A");
    });

    it('should return "YZ" for "AB" with offset 1', () => {
      expect(cipher.decode(1, "AB")).toBe("ZA");
    });

    it('should return "XW" for "AZ" with offset 3', () => {
      expect(cipher.decode(3, "AZ")).toBe("XW");
    });
  });
});
