interface ZincSearch2QueryRequest {
    _source?: string[];
    aggs?: {
        [key: string]: ZincSearch2Aggregation;
    };
    explain?: boolean;
    fields?: string[];
    from?: number;
    highlight?: ZincSearch2Highlight;
    query?: ZincSearch2QueryTypes;
    size?: number;
    sort?: string[];
    timeout?: number;
    track_total_hits?: boolean;
}

interface ZincSearch2Aggregation {
    aggs?: {
        [key: string]: string;
    };
    auto_date_histogram?: ZincSearch2AutoDateHistogram;
    avg?: ZincSearch2FieldWeight;
    cardinality?: ZincSearch2FieldWeight;
    count?: ZincSearch2FieldWeight;
    date_histogram?: ZincSearch2DateHistogram;
    date_range?: ZincSearch2DateRange;
    histogram?: ZincSearch2Histogram;
    ip_range?: ZincSearch2IpRange;
    max?: ZincSearch2FieldWeight;
    min?: ZincSearch2FieldWeight;
    range?: ZincSearch2Range;
    sum?: ZincSearch2FieldWeight;
    terms?: ZincSearch2Terms;
    weighted_avg?: ZincSearch2FieldWeight;
}

interface ZincSearch2AutoDateHistogram {
    buckets: number;
    field: string;
    format?: string;
    keyed?: boolean;
    minimum_interval?: string;
    time_zone?: string;
}

interface ZincSearch2FieldWeight {
    field: string;
    weight_field?: string;
}

interface ZincSearch2DateHistogram {
    calendar_interval?: string;
    extended_bounds?: ZincSearch2Bounds;
    field: string;
    fixed_interval?: string;
    format?: string;
    hard_bounds?: ZincSearch2Bounds;
    interval?: string;
    keyed?: boolean;
    min_doc_count?: number;
    size?: number;
    time_zone?: string;
}
interface ZincSearch2Empty { }

interface ZincSearch2Bounds {
    max: number;
    min: number;
}

interface ZincSearch2DateRange {
    field: string;
    format?: string;
    keyed?: boolean;
    ranges: ZincSearch2DateRangeItem[];
    time_zone?: string;
}

interface ZincSearch2DateRangeItem {
    from?: string;
    to?: string;
}

interface ZincSearch2Histogram {
    extended_bounds?: ZincSearch2Bounds;
    field: string;
    hard_bounds?: ZincSearch2Bounds;
    interval: number;
    keyed?: boolean;
    min_doc_count?: number;
    offset?: number;
    size?: number;
}

interface ZincSearch2IpRange {
    field: string;
    keyed?: boolean;
    ranges: ZincSearch2IpRangeItem[];
}

interface ZincSearch2IpRangeItem {
    from?: string;
    to?: string;
}

interface ZincSearch2Range {
    field: string;
    keyed?: boolean;
    ranges: ZincSearch2RangeItem[];
}

interface ZincSearch2RangeItem {
    from?: number;
    to?: number;
}

interface ZincSearch2Terms {
    field: string;
    order?: {
        [key: string]: string;
    };
    size?: number;
}

interface ZincSearch2Highlight {
    fields?: {
        [key: string]: ZincSearch2Highlight;
    };
    fragment_size?: number;
    number_of_fragments?: number;
    post_tags?: string[];
    pre_tags?: string[];
}

type ZincSearch2QueryTypes = ZincSearch2BoolQuery | ZincSearch2ExistsQuery | ZincSearch2FuzzyQuery | ZincSearch2IdsQuery | ZincSearch2MatchQuery | ZincSearch2MatchAllQuery |
    ZincSearch2MatchBoolPrefixQuery | ZincSearch2MatchNoneQuery | ZincSearch2MatchPhraseQuery | ZincSearch2MatchPhrasePrefixQuery | ZincSearch2MultiMatchQuery | ZincSearch2PrefixQuery |
    ZincSearch2QueryStringQuery | ZincSearch2RangeQuery | ZincSearch2RegexpQuery | ZincSearch2SimpleQueryStringQuery |
    ZincSearch2TermQuery | ZincSearch2TermsQuery | ZincSearch2WildcardQuery;

interface ZincSearch2BoolQuery {
    bool: {
        filter?: ZincSearch2QueryTypes | ZincSearch2QueryTypes[];
        minimum_should_match?: number; // only for should
        must?: ZincSearch2QueryTypes | ZincSearch2QueryTypes[];
        must_not?: ZincSearch2QueryTypes | ZincSearch2QueryTypes[];
        should?: ZincSearch2QueryTypes | ZincSearch2QueryTypes[];
    };
}

// ExistsQuery
// {"exists":{"field":"field_name"}}
interface ZincSearch2ExistsQuery {
    exists: {
        field: string;
    };
}

// FuzzyQuery
// {"fuzzy":{"field":"value"}}
// {"fuzzy":{"field":{"value":"value","fuzziness":"auto"}}}
interface ZincSearch2FuzzyQuery {
    fuzzy: {
        [key: string]: {
            boost?: number;
            fuzziness?: string; // auto, 1,2,3,n
            prefix_length?: number;
            value: string;
        };
    };
}

// IdsQuery
// {"ids":{"values":["1","2","3"]}}
interface ZincSearch2IdsQuery {
    ids: {
        values: string[];
    };
}

interface ZincSearch2MatchQuery {
    match: {
        [key: string]: {
            analyzer?: string;
            boost?: number;
            fuzziness?: string;
            operator?: string; // or(default), and
            prefix_length?: number; // auto, 1,2,3,n
            query: string;
        } | string;
    };
}

interface ZincSearch2MatchAllQuery {
    match_all: ZincSearch2Empty;
}

interface ZincSearch2MatchBoolPrefixQuery {
    match_bool_prefix: {
        [key: string]: {
            analyzer?: string;
            boost?: number;
            query: string;
        };
    };
}

interface ZincSearch2MatchNoneQuery {
    match_none: ZincSearch2Empty;
}

interface ZincSearch2MatchPhraseQuery {
    match_phrase: {
        [key: string]: {
            analyzer?: string;
            boost?: number;
            query: string;
        };
    };
}

interface ZincSearch2MatchPhrasePrefixQuery {
    match_phrase_prefix: {
        [key: string]: {
            analyzer?: string;
            boost?: number;
            query: string;
        };
    };
}

interface ZincSearch2MultiMatchQuery {
    multi_match: {
        analyzer?: string;
        boost?: number;
        fields: string[];
        minimum_should_match?: number;
        operator?: string; // or(default), and
        query: string;
        type?: string; // best_fields(default), most_fields, cross_fields, phrase, phrase_prefix, bool_prefix
    };
}

// PrefixQuery
// {"prefix":{"field":"value"}}
// {"prefix":{"field":{"value":"value","boost":1.0}}}
interface ZincSearch2PrefixQuery {
    prefix: {
        [key: string]: string | {
            boost?: number;
            value: string; //You can speed up prefix queries using the index_prefixes mapping parameter.
        };
    };
}

interface ZincSearch2QueryStringQuery {
    query_string: {
        analyzer?: string;
        boost?: number;
        default_field?: string;
        default_operator?: string; // or(default), and
        fields?: string[];
        query: string;
    };
}

// RangeQuery
// {"range":{"field":{"gte":10,"lte":20}}}
interface ZincSearch2RangeQuery {
    range: {
        [key: string]: {
            boost?: number;
            format?: string; // Date format used to convert date values in the query.
            gt?: string;
            gte?: string;
            lt?: string;
            lte?: string;
            time_zone?: string; // used to convert date values in the query to UTC.
        };
    };
}

// RegexpQuery
// {"regexp":{"field":{"value":"[0-9]*"}}}
interface ZincSearch2RegexpQuery {
    regexp: {
        [key: string]: {
            boost?: number;
            flags?: string;
            value: string;
        };
    };
}

interface ZincSearch2SimpleQueryStringQuery {
    simple_query_string: {
        all_fields?: boolean;
        analyzer?: string;
        boost?: number;
        default_operator?: string; // and(default), or
        fields?: string[];
        query: string;
    };
}

interface ZincSearch2TermQuery {
    term: {
        [key: string]: string | {
            boost?: number;
            case_insensitive?: boolean;
            value: string;
        };
    };
}

interface ZincSearch2TermsQuery {
    terms: {
        [key: string]: string[] | string;
        boost?: number;
    };
}

// WildcardQuery
// {"wildcard": {"field": "*query*"}}
// {"wildcard": {"field": {"value": "*query*", "boost": 1.0}}}
interface ZincSearch2WildcardQuery {
    wildcard: {
        [key: string]: {
            boost?: number;
            value: string;
        };
    };
}




interface ZincSearch2SearchResponse {
    took: number;
    timed_out: boolean;
    _shards: ZincSearch2Shards;
    hits: ZincSearch2Hits;
    aggregations?: { [key: string]: ZincSearch2RespAgg };
    error?: string;
}


interface ZincSearch2Hits {
    total: {
        value: number;
    };
    max_score: number;
    hits: ZincSearch2Hit[];
}

interface ZincSearch2Hit {
    _index: string;
    _type: string;
    _id: string;
    _score: number;
    '@timestamp': string; // 使用字符串表示时间，因为TypeScript没有内置的时间类型
    _source?: T[];
    fields?: { [key: string]: string[] };
    highlight?: { [key: string]: string[] };
}



interface ZincSearch2RespAgg {
    value?: number;
    buckets?: ZincSearch2RespAggBucket[]; // 可以是数组或对象
    interval?: string; // support for auto_date_histogram_aggregation
}


interface ZincSearch2RespAggBucket {
    key: string;
    doc_count: number;
}