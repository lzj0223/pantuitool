interface CreateDocumentSuccessResponse {
    id: string
    message: string
}

interface GetDocumentResponse {
    "@timestamp": string
    _id: string
    _index: string
    _score: number
    _source: unknown
    _type: string
    fields: unknown
    highlight: unknown
}

interface DeleteDocumentSuccessResponse {
    id: string,
    index: string,
    message: string
}

interface MultiDocumentResponse {
    message: string,
    record_count: number,
}


interface Docoment<T> {
    _index: string;
    _type: string;
    _id: string;
    _score: number;
    "@timestamp": string;
    _source: T[];
    fields: unknown;
}
