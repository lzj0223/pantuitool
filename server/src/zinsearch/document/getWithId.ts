import Request from '../request';

export default async function GetWithId<T>(index: string, id: string): Promise<Docoment<T>> {
    const resp = await Request.get(`/api/${index}/_doc/${id}`)

    return resp.data as Docoment<T>;
}