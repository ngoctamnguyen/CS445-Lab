class GeoCoder {
    getLatLng(address) {
        if (address === "Fairfield") {
            return "41.006630 Latitude, -91.965050 Longitude";
        } else if (address === "London") {
            return "51.5171° N, 0.1062° W";
        } else {
            return ""
        }
    };
}

class GeoProxy {

    constructor() {
        this.geocoder = new GeoCoder();
        this.geocache = {};
    }

    getLatLng(address) {
        if (!this.geocache[address]) {
            this.geocache[address] = this.geocoder.getLatLng(address);
        }
        console.log(address + ": " + this.geocache[address]);
        return this.geocache[address];
    }
}

let geo = new GeoProxy();

// geolocation requests
console.log(geo.getLatLng("Fairfield"));
console.log(geo.getLatLng("Fairfield"))
console.log(geo.getLatLng("London"));