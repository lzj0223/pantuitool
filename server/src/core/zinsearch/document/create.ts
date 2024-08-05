import Request from '../request';

export default async function Create<T>(index: string, body: T): Promise<CreateDocumentSuccessResponse | ErrorResponse> {
    const resp = await Request.post(`/api/${index}/_doc`, body)
    return resp.data as (CreateDocumentSuccessResponse | ErrorResponse)
}