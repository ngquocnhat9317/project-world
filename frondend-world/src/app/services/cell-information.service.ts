import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { People } from 'src/app/interfaces/people';
import { Person } from 'src/app/interfaces/person';

const getDumpPeopleInfo = (): People => {
    let result = {
        'peopleList': [
            {
                'id': 1,
                'name': 'Jame',
                'gender': 'male',
                'age': 25,
            },
            {
                'id': 2,
                'name': 'Rose',
                'gender': 'female',
                'age': 27,
            },
            {
                'id': 3,
                'name': 'Jane',
                'gender': 'female',
                'age': 21,
            },
            {
                'id': 4,
                'name': 'Victor',
                'gender': 'male',
                'age': 26,
            },
            {
                'id': 5,
                'name': 'Violet',
                'gender': 'female',
                'age': 16,
            },
            {
                'id': 6,
                'name': 'John',
                'gender': 'male',
                'age': 19,
            },
        ],
        'level': 1,
        'happy': 100
    };
    return result;
};

const getDumpPersonInfo = (id: number): Person => {
    let result = {
        'id': id,
        'name': 'Victor',
        'gender': 'male',
        'age': 20,
        'status': 'Hungry',
        'happy': 100,
        'relationship': [
            {
                'id': id + 1,
                'name': 'Rose',
                'gender': 'female',
                'age': 18,
                'position': 'wife'
            }
        ]
    }
    return result;
}

@Injectable({
    providedIn: 'root',
})
export class CellInformationService {

    constructor() {}

    getPeopleInfo(local: string): Observable<People> {
        const peopleInfo = of(getDumpPeopleInfo());
        return peopleInfo;
    }

    getPersonInfo(local: string, id: number): Observable<Person> {
        const personInfo = of(getDumpPersonInfo(id));
        return personInfo;
    }
}
