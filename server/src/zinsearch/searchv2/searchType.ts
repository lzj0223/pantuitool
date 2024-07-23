// 枚举类型：SearchType
enum SearchTypeV2 {
    MatchAll = "match_all", // 返回索引中的所有文档
    Match = "match", // 类似于术语查询，但首先对输入文本进行分析
    MatchPhrase = "match_phrase", // 类似于短语查询，对输入文本进行分析并构建短语查询
    Term = "term", // 搜索精确术语
    QueryString = "querystring", // 允许使用简单语法描述复杂查询
    Prefix = "prefix", // 查找包含以提供的前缀开头的术语的文档
    Wildcard = "wildcard", // 查找包含以提供的通配符开头的术语的文档
    Fuzzy = "fuzzy", // 匹配指定编辑距离内的术语
    Range = "range" // 查找包含指定范围内日期值、或者数字值的文档
}

export default SearchTypeV2