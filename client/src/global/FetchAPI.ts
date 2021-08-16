import { IBook } from "../models/IBook";
const URL = "http://localhost:9000/api";

export const createBook = 
async ({...data}: IBook): Promise<IBook> => {
    const res = await fetch(URL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    });
    if (!res.ok) {
        throw new Error("Something is Wrong!");
    };
    return res.json();
};

export const getAllBooks = async (): Promise<IBook[]> => {
    const res = await fetch(URL);
    if (!res.ok) {
        throw new Error("Something is Wrong!");
    };
    return res.json();
};

export const getOneBook = 
async ({ queryKey }: any): Promise<IBook> => {
    const [_key, { id }] = queryKey;
    const res = await fetch(`${URL}/${id}`);
    if (!res.ok) {
        throw new Error("Something is Wrong!");
    };
    return res.json();
};

export const updateBook = 
async ({id, ...data}: IBook): Promise<IBook> => {
    const res = await fetch(`${URL}/${id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data),
    });
    if (!res.ok) {
        throw new Error("Something is Wrong!");
    };
    return res.json();
};

export const deleteBook = async (id: string) => {
    const res = await fetch(`${URL}/${id}`, {
        method: "DELETE",
    });
    if (!res.ok) {
        throw new Error("Something is Wrong!");
    };
    return true;
};





