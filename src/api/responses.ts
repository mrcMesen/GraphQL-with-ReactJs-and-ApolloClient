export interface Person {
  id: string;
  name?: string;
  birthYear?: string;
  eyeColor?: string;
  height?: number;
  species?: {
    name: string;
  };
  homeworld?: {
    name: string;
  };
}
export interface AllPeople {
  allPeople: {
    people: Person[];
  };
}
