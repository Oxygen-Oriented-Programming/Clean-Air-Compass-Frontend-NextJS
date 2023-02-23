import useSWR from 'swr';
export const apiUrl = process.env.NEXT_PUBLIC_RESOURCE_SMS_ALERT_URL;
import { useSession } from 'next-auth/react';

export default function useResource() {

    const { data: session} = useSession();
    const tokens = session.auth_token.tokens
    const { data, error, mutate } = useSWR([apiUrl, tokens], fetchResource);

    async function fetchResource(url) {

        if (!tokens) {
            return;
        }

        try {
            const response = await fetch(`${apiUrl}create/`, config());

            const responseJSON = await response.json();

            return responseJSON;

        } catch (err) {
            handleError(err);
        }
    }

    async function createResource(info) {

        try {
            const options = config();
            options.method = "POST",
            options.body = JSON.stringify(info);
            await fetch(`${apiUrl}create/`, options);
            mutate(); // mutate causes complete collection to be refetched
        } catch (err) {
            handleError(err);
        }
    }

    async function deleteResource(id) {

        try {
            const url = apiUrl + id;
            const options = config();
            options.method = "DELETE";
            await fetch(url, options);
            mutate(); // mutate causes complete collection to be refetched
        } catch (err) {
            handleError(err);
        }
    }

    async function updateResource(id, info) {
        try {
            const url = apiUrl + id;
            const options = config();
            options.method = "PATCH";
            options.body = JSON.stringify(info);
            await fetch(url, options);
            mutate(); // mutate causes complete collection to be refetched
        } catch (err) {
            handleError(err);
        }
    }

    function config() {

        return {
            headers: {
                'Authorization': 'Token ' + tokens,
                'Content-Type': 'application/json',
            }
        };
    }

    function handleError(err) {
        console.error(err);
    }

    return {
        resources: data,
        error,
        loading: tokens && !error && !data,
        createResource,
        deleteResource,
        updateResource,
    };
}
