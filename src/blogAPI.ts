import { notFound } from "next/navigation";
import { Article } from "./types";

export const getAllArticles = async (): Promise<Article[]> => {
    const res = await fetch(`http://localhost:3001/posts`, { cache: "no-store" }); //SSR

    if(!res.ok){
        // show error.tsx as the error pages
    throw new Error("Error happened");
    };

    // Check if the Loading page works
    // await new Promise((resolve) => setTimeout(resolve, 1500));

    // convert to json type
    const articles = await res.json();
    return articles;
}

export const getDetailArticle = async (id: string): Promise<Article> => {
    const res = await fetch(`http://localhost:3001/posts/${id}`, { next: { revalidate: 60 }, }); //ISR

    if(res.status === 404) {
        // leads to the not-found.tsx
        notFound();
    }

    if(!res.ok){
        // show error.tsx as the error pages
    throw new Error("Error happened");
    };

    // Check if the Loading page works
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // convert to json type
    const articles = await res.json();
    return articles;
}

export const createArticle = async (
    id: string, 
    title: string,
    content: string
    ): Promise<Article> => {
        //Obtain the current date time when post API is activated
        const currentDateTime = new Date().toISOString();
    const res = await fetch(`http://localhost:3001/posts/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, title, content, createdAt: currentDateTime })
    }); 

    if(!res.ok){
        // show error.tsx as the error pages
    throw new Error("Error happened");
    };

    // Check if the Loading page works
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // convert to json type
    const newArticles = await res.json();
    return newArticles;
}

export const deleteArticle = async (
    id: string, 
    ): Promise<Article> => {

    const res = await fetch(`http://localhost:3001/posts/${id}`, {
        method: "DELETE",
    }); 

    if(!res.ok){
        // show error.tsx as the error pages
    throw new Error("Error happened");
    };

    // Check if the Loading page works
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // convert to json type
    const deleteArticle = await res.json();
    return deleteArticle;
}