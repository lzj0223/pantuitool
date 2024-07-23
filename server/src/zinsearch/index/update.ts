import Request from '../request';



export default async function Create(conf: IZIndex): Promise<IZIndexCreateResponse> {
    const resp = await Request.put('/api/index', conf)
    return resp.data as IZIndexCreateResponse
}