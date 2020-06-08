import { HttpResponse, HttpRequest } from '../protocols/http';

export interface Controller {
    handle (httpReques: HttpRequest): HttpResponse
}