import { createClient } from 'contentful';
import React from 'react';
import { useState, useEffect } from 'react';
const client = createClient({
    space: 'dlrxol35l8vd',
    // accessToken: import.meta.env.VITE_API_KEY,
    accessToken: process.env.REACT_APP_API_KEY,
    environment: 'master',
});

export const useFetchProjects = () => {
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState([]);

    const getData = async () => {
        try {
            const response = await client.getEntries({
                content_type: 'projects',
            });
            const projects = response.items.map((item) => {
                const { title, url, image } = item.fields;
                const id = item.sys.id;
                const img = image?.fields?.file?.url;
                return { title, url, id, img };
            });
            setProjects(projects);
            setLoading(false);
            console.log('testing: ');
        } catch (error) {
            console.log('error: ', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return { loading, projects };
};
