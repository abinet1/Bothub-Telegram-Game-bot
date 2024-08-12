export const makeCall = async (url: string, method: string, data?: any) => {
    try {
        const body = data && {body: JSON.stringify(data)};
        const response = await fetch(`https://bot-backend-1y6p.onrender.com${url}`, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            ...body
        });
        return await response.json();
    } catch (error) {
        console.log(error, 'errorerrorerrorerrorerrorerrorerrorerrorerrorerrorerrorerrorerrorerrorerrorerror');
        console.error(error);
    }
}