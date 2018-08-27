import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http: HttpClient, private galleryService: GalleryService) { }

   getPhotos(queryParams) {
    let params = new HttpParams().set('_limit', queryParams.limit);
    params = params.append('_start', queryParams.offset);  
    return this.http.get<any[]>(environment.apiUrl + '/photos', { params: params });
  }
  getPhotoById(queryParams) {
    let params = new HttpParams().set('id', queryParams.id);
    return this.http.get<any[]>(environment.apiUrl + '/photos', { params: params });
  }
}
