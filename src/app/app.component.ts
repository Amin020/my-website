import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  response: { name: string, series: any[], value: number, type: string }[] = [];
  colSpans: any[] = [];

  ngOnInit() {
    this.simulateResponse();
    console.log('Response: ', this.response);
    this.getColSpan(this.response);
    console.log('Col span: ', this.colSpans);
  }

  private simulateResponse() {
    this.response.push(this.getElement('Enterprise', 10, 'column'));
    this.response[0].series.push(this.getElement('X', 1, 'column'));
    this.response[0].series.push(this.getElement('Y', 2, 'column'));
    this.response[0].series.push(this.getElement('Z', 3, 'column'));
    this.response[0].series[0].series.push(this.getElement('a', 11, 'column'));
    this.response[0].series[0].series.push(this.getElement('b', 11, 'column'));
    this.response[0].series[0].series.push(this.getElement('c', 11, 'column'));
    this.response[0].series[1].series.push(this.getElement('a', 12, 'column'));
    this.response[0].series[1].series.push(this.getElement('b', 12, 'column'));
    this.response[0].series[1].series.push(this.getElement('c', 12, 'column'));
    this.response[0].series[2].series.push(this.getElement('a', 13, 'column'));
    this.response[0].series[2].series.push(this.getElement('b', 13, 'column'));
    this.response[0].series[2].series.push(this.getElement('c', 13, 'column'));
    this.response[0].series[2].series.push(this.getElement('d', 13, 'column'));
    delete this.response[0].series[0].series[0].series;
    delete this.response[0].series[0].series[1].series;
    delete this.response[0].series[0].series[2].series;
    delete this.response[0].series[1].series[0].series;
    delete this.response[0].series[1].series[1].series;
    delete this.response[0].series[1].series[2].series;
    delete this.response[0].series[2].series[0].series;
    delete this.response[0].series[2].series[1].series;
    delete this.response[0].series[2].series[2].series;
    delete this.response[0].series[2].series[3].series;

    // this.response.push(this.getElement('Prepaid', 20, 'column'));
    // this.response[1].series.push(this.getElement('X', 4, 'column'));
    // this.response[1].series.push(this.getElement('Y', 5, 'column'));
    // this.response[1].series.push(this.getElement('Z', 6, 'column'));
    // delete this.response[1].series[0].series;
    // delete this.response[1].series[1].series;
    // delete this.response[1].series[2].series;

    // this.response.push(this.getElement('Postpaid', 30, 'column'));
    // this.response[2].series.push(this.getElement('X', 7, 'column'));
    // this.response[2].series.push(this.getElement('Y', 8, 'column'));
    // this.response[2].series.push(this.getElement('Z', 9, 'column'));
    // delete this.response[2].series[0].series;
    // delete this.response[2].series[1].series;
    // delete this.response[2].series[2].series;
  }

  private getElement(name: string, value: number, type: string) {
    return { name: name, series: [], value: value, type: type };
  }

  private getColSpan(response: any) {
    for (let i = 0; i < response.length; i++) {
      if (!response[i].series) {
        return response.length;
      }
      if (response[i].type === 'column') {
        const x = this.getColSpan(response[i].series);
        debugger
        this.response[i]['childreNum'] = x;
        this.colSpans.push(response[i]['childreNum']);
      }
    }
  }

}
