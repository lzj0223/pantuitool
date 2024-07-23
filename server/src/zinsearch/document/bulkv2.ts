import Request from '../request';

export default async function Bulkv2<T>(index: string, records: T[]): Promise<MultiDocumentResponse | ErrorResponse> {
    const resp = await Request.post(`/api/_bulkv2`, {
        index: index,
        records: records
    });
    return resp.data as MultiDocumentResponse | ErrorResponse;
}