import { Inject,Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
@Injectable()
export class PersonService {
    private headers = new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'x-access-token': localStorage.getItem('t'),
    });
    
    constructor(@Inject('BASE_CONFIG') private config,
                private http: Http) {
                 }

    // 获取所有人员 @returns {Promise<any>}
    getAllPerson(): Promise<any> {
        const body = {
            'data': {
                'userid': localStorage.getItem(`userid`),
            },
            'sign': '1234'
        };
        console.log(JSON.stringify(body));
        const uri = `${this.config.uri}/person/query`;
        return this.http
        .post(uri, JSON.stringify(body), {headers: this.headers})
        .toPromise();
    }

    // 新建所有人员  @param {string} role
                 // @param {number} count
                 // @returns {Promise<any>}
    createPerson(role: string, count: number): Promise<any> {
        const body = {
            'data': {
                'userid': localStorage.getItem(`userid`),
                'role': role,
                'count': Number(count)
            },
            'sign': '1234'
        };
        console.log(JSON.stringify(body));
        const uri = `${this.config.uri}/person/create`;
        return this.http
        .post(uri, JSON.stringify(body), {headers: this.headers})
        .toPromise();
    }
}