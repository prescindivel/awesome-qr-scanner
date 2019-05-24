import { Component } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  scanSub: Subscription;
  status: QRScannerStatus;

  constructor(
    private qrScanner: QRScanner
  ) { }

  async ionViewWillEnter() {
    try {
      this.status = await this.qrScanner.prepare();
    } catch (e) {
      alert(`qr code error: ${e}`);
      return;
    }
    if (this.status.authorized) {
      this.scanSub = this.qrScanner.scan().subscribe(data => {
        alert(data);
      });
      this.qrScanner.show();
    } else if (this.status.denied) {
      alert('Camera permission denied');
    } else {
      alert('Permission denied for this runtime.');
    }
  }

  ionViewWillLeave() {
    this.qrScanner.hide(); // hide camera preview
    this.scanSub && this.scanSub.unsubscribe(); // stop scanning
    this.qrScanner.destroy(); // destroy camera preview
  }
}
