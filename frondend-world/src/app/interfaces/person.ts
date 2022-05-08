export interface Relational {
    id: number,
    name: string,
    gender: string,
    age: number,
    position: string
}

export interface Person {
    id: number,
    name: string,
    gender: string,
    age: number,
    status: string,
    happy: number,
    relationship: Relational[]
}