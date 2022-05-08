export interface PeopleInfo {
    id: number,
    name: string,
    gender: string,
    age: number
}

export interface People {
    peopleList: PeopleInfo[],
    level: number,
    happy: number
}