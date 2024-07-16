import Request from '../request';

export default async function deleteWithId(index: string, id: string): Promise<DeleteDocumentSuccessResponse | ErrorResponse> {
    return await Request.delete(`/api/${index}/_doc/${id}`)
}