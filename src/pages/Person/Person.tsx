import { FC } from "react";

const Person: FC = () => {
    const persons: Array<string> = ["Ivan", "Fedot", "Gustav"];

    interface PersonOne {
        name: string,
        surname: string,
        age: number
    }

    const setName = (name: string) => {

        const newPerson: PersonOne = {
            name,
            surname: "Ivanov",
            age: 30
        };
        return newPerson;
    }

    const personsList: Array<PersonOne> = [];
    for (let i = 0; i < persons.length; i++) {
        personsList.push(setName(persons[i]));
    }
    console.log(personsList);





    return (
        <div>Person Page
            {personsList.length > 0 && personsList.map(item => <div key={item.name}>{item.name}</div>)}
        </div>
    )
}
export default Person;
