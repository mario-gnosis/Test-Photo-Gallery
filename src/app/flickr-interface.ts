export interface FlickrList {
  title: string;
  url: string;
}

export interface FlickrInterface {
  page: number;
  pages: number;
  perpage: number;
  photos: FlickrList[];
  total: string;
}
