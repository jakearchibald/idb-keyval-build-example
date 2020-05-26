import { get } from "idb-keyval";

get("foo").then((val) => {
  console.log(val);
});
