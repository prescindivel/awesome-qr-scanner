import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';
var HomePage = /** @class */ (function () {
    function HomePage(qrScanner) {
        this.qrScanner = qrScanner;
    }
    HomePage.prototype.ionViewWillEnter = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, e_1;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.qrScanner.prepare()];
                    case 1:
                        _a.status = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _b.sent();
                        alert('qr code erro', e_1);
                        return [2 /*return*/];
                    case 3:
                        if (this.status.authorized) {
                            // this.scanSub = this.qrScanner.scan().subscribe((data: string) =>
                            //   this.getDocument(data));
                            this.qrScanner.show();
                        }
                        else if (this.status.denied) {
                            alert('Camera permission denied');
                        }
                        else {
                            alert('Permission denied for this runtime.');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [QRScanner])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map