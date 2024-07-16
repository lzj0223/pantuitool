

interface ErrorResponse {
    error: string
}


interface Highlight {
    pre_tags?: string[];
    post_tags?: string[];
    fields: {
        [key: string]: {
            pre_tags?: string[];
            post_tags?: string[];
        };
    };
}
