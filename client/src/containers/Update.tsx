import React from "react";
import Loader from "react-loader-spinner";
import { BookForm } from "./BookForm";
import { useParams, useHistory } from "react-router-dom";
import { useQuery, useMutation } from "react-query";
import { getOneBook, updateBook } from "../global/FetchAPI";
import { IBook } from "../models/IBook";

export const Update = (): JSX.Element => {
    const history = useHistory();
    const { id }: IBook = useParams();
    const { error, isLoading, data } = 
        useQuery("book", getOneBook);
    const { mutateAsync, isLoading: isMutating } = 
        useMutation(updateBook);

    const handleSubmit = async (data: IBook) => {
        await mutateAsync({...data, id});
        history.push("/");    };

    if (isLoading) {
        <Loader 
            type="ThreeDots" 
            color="#ccc" 
            height={30} 
        />
    };

    if (error) return <span>Error: {`${error}`}</span>

    return (
        <React.Fragment>
            <h1>Update Book</h1>
            <BookForm 
                isLoading={isMutating}
                defaultValues={data}
                onFormSubmit={handleSubmit}
            />
        </React.Fragment>
    );
};






