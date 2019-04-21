import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string;
  pais: string;
  body: string;

  options: object[] = [
    {'title':'Home', 'body':'Body of Home'},
    {'title':'Option 1', 'body':'Body of Option 1'},
    {'title':'Option 2', 'body':'Body of Option 2'}
  ];

  public pdfUrl: string;
  private dataPdf: any;
  private file: any;

  constructor(private sanitizer: DomSanitizer, private httpClient: HttpClient) {
    this.title = 'First App 2';
    this.body = 'This is home body';
    
  }

  ngOnInit() {
    //this.loadpdf();  
  }

  navBarOptionHandler(e) {
    console.log('Oprion Press', e);
    this.pais = e.title;
    this.title = e.title;
    this.body = e.body;
  }
//npm install ng2-pdf-viewer@3.0.8
  getPdfUrl(){
    return this.sanitizer.bypassSecurityTrustResourceUrl('http://localhost:8080/download/pdf'); 
  }

  loadpdf() {
    console.log("sss");
    this.httpClient.get('http://localhost:8080/download/pdf', {responseType: 'arraybuffer' as 'json'})
      .subscribe(
        res => {
          this.dataPdf = res;
        },
        err => {
          console.log('err');
        }
      );
  }

  printpdf(){
    this.httpClient.get('http://localhost:8080/download/pdf', {responseType: 'blob' })
    .subscribe(
      res => {
        console.log(res);
        this.file = new Blob([res], {type: 'application/pdf'});
        console.log(this.file);
      },
      err => {
        console.log('err');
      }
    );

    //const blobUrl = URL.createObjectURL(this.file);
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = this.file;
    document.body.appendChild(iframe);
    iframe.contentWindow.print(); 
  }


}
