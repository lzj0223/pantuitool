import Request from '../request';

export default async function update<T>(index: string, id: string, body: T[]): Promise<CreateDocumentSuccessResponse | ErrorResponse> {

    const raws: string[] = []

    body.forEach((item) => {
        const raw = JSON.stringify(item)
        raws.push(raw)
    })

    return await Request.post(`/api/${index}/_update/${id}`, raws.join('\n'))
}