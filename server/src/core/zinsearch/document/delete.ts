import Request from '../request';

export default async function Delete(index: string, id: string): Promise<DeleteDocumentSuccessResponse | ErrorResponse> {
    const resp = await Request.delete(`/api/${index}/_doc/${id}`)
    return resp.data as (DeleteDocumentSuccessResponse | ErrorResponse)
}