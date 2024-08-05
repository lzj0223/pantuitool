import Request from '../request';

export default async function Multi<T>(index: string, body: T[]): Promise<MultiDocumentResponse | ErrorResponse> {

    const raws: string[] = []

    body.forEach((item) => {
        const raw = JSON.stringify(item)
        raws.push(raw)
    })

    const resp = await Request.post(`/api/${index}/_multi`, raws.join('\n'), { headers: { 'Content-Type': 'application/plain' } });

    return resp.data as MultiDocumentResponse | ErrorResponse;
}