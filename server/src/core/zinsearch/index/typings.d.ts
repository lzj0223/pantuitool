interface IZMappingProperties {
    type: string;
    index: boolean;
    store: boolean;
    highlightable?: boolean;
    sortable?: boolean;
    aggregatable?: boolean;
}



interface IZSettingsAnalysis {
    analysis: {
        analyzer: {
            default?: {
                type: string;
            };

            // [key: string]: {
            //     tokenizer: string;
            //     char_filter: string[];
            // };
        };
    }

    char_filter?: {
        [key: string]: {
            type: string;
            mappings: string[],
        };
    };
}



interface IZIndex {
    name: string;
    storage_type?: string;
    shard_num?: number;
    mappings: {
        properties: {
            [key: string]: IZMappingProperties
        }
    };

    settings?: IZSettingsAnalysis;
}


interface IZIndexCreateResponse {
    index: string,
    message: string;
    storage_type: string;
}