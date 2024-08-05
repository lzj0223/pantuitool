import Request from '../request';


export default async function Searchv2(index: string, params: ZincSearch2QueryRequest): Promise<ZincSearch2SearchResponse> {
    const resp = await Request.post(`/es/${index}/_search`, params)
    return resp.data as ZincSearch2SearchResponse
}