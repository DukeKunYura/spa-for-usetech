import { FC } from "react";

const Person: FC = () => {
    const persons: Array<string> = ["Ivan", "Fedot", "Gustav"];
    console.log(import.meta.env.VITE_TOKEN)

    interface PersonOne {
        name: string,
        surname: string,
        age: number
    }

    const text: string = "В OC Windows подключение к удаленным серверам по SSH возможно, например, с помощью клиента Putty. Скачать его можно здесь (ссылка взята с официального сайта). Putty не требует установки — чтобы начать с ним работать, достаточно просто распаковать скачанный архив. По завершении распаковки запустите файл puttygen.exe. Выберите тип ключа SSH-2 RSA и длину 2048 бит, а затем нажмите на кнопку Generate:";

    const truncateTex = (text: string) => {
        if (text.length <= 120) {
            return text;
        }
        const truncated = text.substr(0, 120);
        // Check if the last character is a space
        if (truncated.charAt(truncated.length - 1) === ' ') {
            return truncated.trim() + '...';
        }
        // Find the last space and truncate at that
        const lastSpaceIndex = truncated.lastIndexOf(' ');
        return truncated.substr(0, lastSpaceIndex).trim() + '...';
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
            {truncateTex(text)}
        </div>
    )
}
export default Person;
