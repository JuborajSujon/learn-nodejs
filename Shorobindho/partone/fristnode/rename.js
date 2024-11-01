import { renameSync, unlinkSync, } from "fs"
import { parse } from "url"
import { basename, dirname,  } from "path";

// renameSync("./db.json", "data.json");

// unlinkSync("index.html")

const url = parse('https://sujon.com?name=kasem');
const url2 = basename('https://sujon.com/box/fox/');
const url3 = dirname('https://sujon.com/box/fox/');

console.log(url)
console.log(url2)
console.log(url3)
