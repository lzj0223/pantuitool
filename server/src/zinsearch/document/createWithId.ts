import Request from '../request';

export default async function createWithId<T>(index: string, id: string, body: T): Promise<CreateDocumentSuccessResponse | ErrorResponse> {
    return await Request.put(`/api/${index}/_doc/${id}`, body)
}