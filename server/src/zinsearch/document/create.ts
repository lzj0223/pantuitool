import Request from '../request';

export default async function create<T>(index: string, body: T): Promise<CreateDocumentSuccessResponse | ErrorResponse> {
    return await Request.post(`/api/${index}/_doc`, body)
}