import {Http, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs/Observable";

import {environment} from "../environments/environment";

export abstract class BaseService<T> {
  baseUrl: string;

  constructor(protected http: Http) {
    this.baseUrl = environment.apiUrl;
  }

  getList(page: number, limit: number): Observable<{ list: T[], totalCount: number }> {
    const queryParams: URLSearchParams = new URLSearchParams();
    queryParams.set('page', page.toString());
    queryParams.set('limit', limit.toString());

    return this.http.get(this.getListUrl(), {
      params: queryParams
    })
      .map(res => {
        const responseBody = res.json() || [];

        return {
          list: responseBody.map(entity => this.createNewInstance(entity)),
          totalCount: res.headers.get('X-total-count')
        };
      })
      .catch(this.errorHandler);
  }

  getOne(id: number): Observable<T> {
    return this.http.get(this.getOneUrl(id))
      .map(res => this.createNewInstance(res.json() || {}))
      .catch(this.errorHandler);
  }

  create(entity): Observable<T> {
    return this.http.post(this.createUrl(), entity)
      .map(res => this.createNewInstance(res.json() || {}))
      .catch(this.errorHandler);
  }

  update(id, _entity): Observable<T> {
    const entity = Object.assign({}, _entity);
    delete entity.id;

    return this.http.put(this.updateUrl(id), entity)
      .map(res => this.createNewInstance(res.json() || {}))
      .catch(this.errorHandler);
  }

  destroy(id): Observable<void> {
    return this.http.delete(this.destroyUrl(id))
      .map(res => res.json())
      .catch(this.errorHandler);
  }

  abstract createNewInstance(resElement): T;

  abstract getListUrl(): string;

  abstract getOneUrl(id: number): string;

  abstract updateUrl(id: number): string;

  abstract createUrl(): string;

  abstract destroyUrl(id: number): string;

  protected errorHandler(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body: any = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
