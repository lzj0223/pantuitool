
import '../../pre-start';
import zinsearch from "../../zinsearch";




zinsearch.Document.GetWithId('pantuitool_files', '29XwbtcCJri').then((doc) => {
    console.log(doc);
}).catch((err) => {
    console.error(err);
})