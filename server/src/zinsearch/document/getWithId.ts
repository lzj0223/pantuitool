import Request from '../request';

export default async function getWithId<T>(index: string, id: string): Promise<Docoment<T> | ErrorResponse> {
    return await Request.get(`/api/${index}/_doc/${id}`)
}