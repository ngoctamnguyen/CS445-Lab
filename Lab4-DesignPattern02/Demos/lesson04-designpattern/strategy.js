class UPS {
    calculate(product) { return "$45.95" }
}

class USPS {
    calculate(product) { return "$39.40" }
}

class Fedex {
    calculate(product) { return "$43.20" }
}


class Shipping {
    shippingCompany = "";

    setStrategy(shippingCompany) {
        this.shippingCompany = shippingCompany;
    }

    calculate(product) {
        return this.shippingCompany.calculate(product);
    }
}

const product = { from: "52556", to: "10012", weight: "1kg" };

const ups = new UPS();
const usps = new USPS();
const fedex = new Fedex();

const shipping = new Shipping();

shipping.setStrategy(ups);
console.log("UPS Strategy: " + shipping.calculate(product));
shipping.setStrategy(usps);
console.log("USPS Strategy: " + shipping.calculate(product));
shipping.setStrategy(fedex);
console.log("Fedex Strategy: " + shipping.calculate(product));