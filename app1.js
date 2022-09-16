import { useState, useEffect } from "https://cdn.skypack.dev/react";

    // Note: the empty deps array [] means
    // this useEffect will run once
    function App() {
        const [error, setError] = useState(null);
        const [isLoaded, setIsLoaded] = useState(false);
        const [items, setItems] = useState([]);

        useEffect(() => {
            fetch("enter the link to fetch the data from API")
                .then((res) => res.json())
                .then(
                    (result) => {
                        setIsLoaded(true);
                        setItems(result);
                    },
                    // Note: it's important to handle errors here
                    // instead of a catch() block so that we don't swallow
                    // exceptions from actual bugs in components.
                    (error) => {
                        setIsLoaded(true);
                        setError(error);
                    }
                );
        }, []);
