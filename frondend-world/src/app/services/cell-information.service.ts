import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { People } from 'src/app/interfaces/people';
import { Person } from 'src/app/interfaces/person';
import { Resource } from '../interfaces/resource';
import { Terrain } from '../interfaces/terrain';

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
            {
                'id': 7,
                'name': 'John',
                'gender': 'male',
                'age': 19,
            },
            {
                'id': 8,
                'name': 'John',
                'gender': 'male',
                'age': 19,
            },
            {
                'id': 9,
                'name': 'John',
                'gender': 'male',
                'age': 19,
            },
            {
                'id': 10,
                'name': 'John',
                'gender': 'male',
                'age': 19,
            },
            {
                'id': 11,
                'name': 'John',
                'gender': 'male',
                'age': 19,
            },
            {
                'id': 12,
                'name': 'John',
                'gender': 'male',
                'age': 19,
            },
            {
                'id': 13,
                'name': 'John',
                'gender': 'male',
                'age': 20,
            }
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

const getDumpTerrainInfo = (): Terrain => {
    let result = {
        'terrain': 'Forest',
        'extremeLevel': 1
    };
    return result;
}

const getDumpResourceInfo = (): Resource => {
    let result = {
        'food': 100,
        'water': 100,
        'lumber': 100,
        'rock': 100,
        'metal': 100
    };
    return result;
}

@Injectable({
    providedIn: 'root',
})
export class CellInformationService {

    constructor() {}

    getPeopleInfo(local: string): Observable<People> {
        let peopleInfo = of(getDumpPeopleInfo());
        return peopleInfo;
    }

    getPersonInfo(local: string, id: number): Observable<Person> {
        let personInfo = of(getDumpPersonInfo(id));
        return personInfo;
    }

    getTerrainInfo(local: string): Observable<Terrain> {
        let terrainInfo = of(getDumpTerrainInfo());
        return terrainInfo;
    }

    getResourceInfo(local: string): Observable<Resource> {
        let resourceInfo = of(getDumpResourceInfo());
        return resourceInfo;
    }
}
