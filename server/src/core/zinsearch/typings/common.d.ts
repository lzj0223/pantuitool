

interface ErrorResponse {
    error: string
}


interface ZincHighlight {
    pre_tags?: string[];
    post_tags?: string[];
    fields?: {
        [key: string]: {
            pre_tags?: string[];
            post_tags?: string[];
        };
    };
}



interface ZincSearchShards {
    total: number;
    successful: number;
    skipped: number;
    failed: number;
}