import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import FileSaver, { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class DownloadService {
    private apiServerUrl = environment.apiBaseUrl;
    constructor(private http: HttpClient) { }

    downloadFile(data) {
        const REQUEST_PARAMS = new HttpParams().set('id', data.id);


        return this.http.get(`${this.apiServerUrl}/VacancyAdmin/applicant/file/download?`, {
            params: REQUEST_PARAMS,
            responseType: 'arraybuffer'
        })
    }


}