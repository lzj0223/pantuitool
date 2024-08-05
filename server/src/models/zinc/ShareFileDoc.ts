// **** Types **** //
import zinsearch from '../../core/zinsearch';


const INDEX = 'pan_share_files';

export interface IZShareFileDoc {
  _id: number;
  title: string;
  files: string[];
  site: number;
  state: number;
  keywords: string[];
}


export const Insert = async (doc: IZShareFileDoc | IZShareFileDoc[]) => {
  let docs: IZShareFileDoc[] = [];
  if (Array.isArray(doc)) {
    docs = doc;
  } else {
    docs = [doc];
  }

  return await zinsearch.Document.Bulkv2<IZShareFileDoc>(INDEX, docs);
}


export const Delete = async (_id: string) => {
  return await zinsearch.Document.Delete(INDEX, _id);
}



export const Search = async (from: number, size: number, keyword: string = '', status: number | null = 1) => {
  const query: ZincSearch2BoolQuery = {
    bool: {
      must: []
    }
  };


  if (status !== null) {
    (query.bool.must as ZincSearch2QueryTypes[]).push({
      term: {
        status: {
          value: `${status}`,
        }
      }
    });
  }

  if (keyword) {
    (query.bool.must as ZincSearch2QueryTypes[]).push({
      match: {
        content: {
          query: keyword,
          analyzer: "gse_search"
        }
      }
    });
    (query.bool.must as ZincSearch2QueryTypes[]).push({
      match: {
        title: {
          query: keyword,
          analyzer: "gse_search"
        }
      }
    });
  }

  const highlight = {
    fields: {
      content: {},
      files: {},
    }
  };

  return await zinsearch.Searchv2(INDEX, { from, size, query, highlight });
};

export const Get = async (_id: number) => {
  return await zinsearch.Document.GetWithId<IZShareFileDoc>(INDEX, `${_id}`);
}
