import Request from '../request';

export default async function CreateWithId<T>(index: string, id: string, body: T): Promise<CreateDocumentSuccessResponse | ErrorResponse> {
    const resp = await Request.put(`/api/${index}/_doc/${id}`, body)
    return resp.data as (CreateDocumentSuccessResponse | ErrorResponse)
}