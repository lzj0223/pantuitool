import Request from '../request';

export default async function Update<T>(index: string, id: string, body: T): Promise<CreateDocumentSuccessResponse | ErrorResponse> {
    const resp = await Request.post(`/api/${index}/_update/${id}`, body);

    return resp.data as (CreateDocumentSuccessResponse | ErrorResponse);
}