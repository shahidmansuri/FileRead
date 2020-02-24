import React, { ReactElement, useState } from "react";

interface Props {
  loadinig: (isLoading: boolean) => void
}
function compare(a: { [key: string]: any }, b: { [key: string]: any }) {
  let keya = Object.keys(a)[0];
  let keyb = Object.keys(b)[0];
  return b[keyb] - a[keya];
}
export default function FilesInput({ loadinig }: Props): ReactElement {
  const [error, seterror] = useState<String | Boolean>(false);
  const [resultStrings, setResultStrings] = useState<
    { [x: string]: number }[]
  >();

  let obj: { [key: string]: any } = {};
  let tempCountObj: { [key: string]: any } = {};
  let countWord = () => {
    loadinig(true);
    let input1: string[] = JSON.parse(localStorage.getItem("item1") as string);
    console.time("temp");
    input1.map(name => name && handleAlphabeticallySearch(name));
    let result = Object.keys(tempCountObj)
      .map(i => ({ [i]: tempCountObj[i] }))
      .sort(compare);
    console.log("result", result);
    console.timeEnd("temp");
    loadinig(false);
    setResultStrings(result);
  };
  let handleFileRead = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      let files = event.target.files;
      let reader = new FileReader();
      let setString: Function;

      if (files?.length && files[0].type.match(/text.*/)) {
        seterror(false);
        if (event.target.id == "names") {
          setString = (result: string) =>
            localStorage.setItem("item1", JSON.stringify(result)); //setfile2Strings;
          reader.onload = function load(e) {
            if (e.target?.readyState == FileReader.DONE) {
              let result = e.target?.result?.toString().split(/\n|\t|\r|!" "/);
              setString(result);
            }
          };
        } else {
          setString = (result: string) =>
            localStorage.setItem("item2", JSON.stringify(result)); //setfile1Strings;
          reader.onload = function load(e) {
            if (e.target?.readyState == FileReader.DONE) {
              let result = e.target?.result?.toString().split(/\n|\t|\r|!" "/);
              console.time("total render time");
              result?.map(d => {
                d.split(" ").map(i => i[0] && handleAlphabeticallyOrder(i));
              });

              console.timeEnd("total render time");
              // console.log("total render", obj);
              setString(result);
            }
          };
        }

        let blob = files[0].slice(0, files[0].size - 1);
        reader.readAsBinaryString(blob);
      } else {
        seterror("File is not supported");
      }
    } else {
      alert("file not supported by browser");
    }
  };

  let handleAlphabeticallyOrder = (key: string) => {
    key = key.toLowerCase();
    key = key.replace("'s", "");
    key = key.replace(/[,;.:'"!?<>@#$%^&()]/g, "");
    switch (key[0].toLocaleLowerCase()) {
      case "a":
        obj = { ...obj, a: obj["a"] ? [...obj["a"], key] : [key] };
        return obj;
      case "b":
        obj = { ...obj, b: obj["b"] ? [...obj["b"], key] : [key] };
        return obj;
      case "c":
        obj = { ...obj, c: obj["c"] ? [...obj["c"], key] : [key] };
        return obj;
      case "d":
        obj = { ...obj, d: obj["d"] ? [...obj["d"], key] : [key] };
        return obj;
      case "e":
        obj = { ...obj, e: obj["e"] ? [...obj["e"], key] : [key] };
        return obj;
      case "f":
        obj = { ...obj, f: obj["f"] ? [...obj["f"], key] : [key] };
        return obj;
      case "g":
        obj = { ...obj, g: obj["g"] ? [...obj["g"], key] : [key] };
        return obj;
      case "h":
        obj = { ...obj, h: obj["h"] ? [...obj["h"], key] : [key] };
        return obj;
      case "i":
        obj = { ...obj, i: obj["i"] ? [...obj["i"], key] : [key] };
        return obj;
      case "j":
        obj = { ...obj, j: obj["j"] ? [...obj["j"], key] : [key] };
        return obj;
      case "k":
        obj = { ...obj, k: obj["k"] ? [...obj["k"], key] : [key] };
        return obj;
      case "l":
        obj = { ...obj, l: obj["l"] ? [...obj["l"], key] : [key] };
        return obj;
      case "m":
        obj = { ...obj, m: obj["m"] ? [...obj["m"], key] : [key] };
        return obj;
      case "n":
        obj = { ...obj, n: obj["n"] ? [...obj["n"], key] : [key] };
        return obj;
      case "o":
        obj = { ...obj, o: obj["o"] ? [...obj["o"], key] : [key] };
        return obj;
      case "p":
        obj = { ...obj, p: obj["p"] ? [...obj["p"], key] : [key] };
        return obj;
      case "q":
        obj = { ...obj, q: obj["q"] ? [...obj["q"], key] : [key] };
        return obj;
      case "r":
        obj = { ...obj, r: obj["r"] ? [...obj["r"], key] : [key] };
        return obj;
      case "s":
        obj = { ...obj, s: obj["s"] ? [...obj["s"], key] : [key] };
        return obj;
      case "t":
        obj = { ...obj, t: obj["t"] ? [...obj["t"], key] : [key] };
        return obj;
      case "u":
        obj = { ...obj, u: obj["u"] ? [...obj["u"], key] : [key] };
        return obj;
      case "v":
        obj = { ...obj, v: obj["v"] ? [...obj["v"], key] : [key] };
        return obj;
      case "w":
        obj = { ...obj, w: obj["w"] ? [...obj["w"], key] : [key] };
        return obj;
      case "x":
        obj = { ...obj, x: obj["x"] ? [...obj["x"], key] : [key] };
        return obj;
      case "y":
        obj = { ...obj, y: obj["y"] ? [...obj["y"], key] : [key] };
        return obj;
      case "z":
        obj = { ...obj, z: obj["z"] ? [...obj["z"], key] : [key] };
        return obj;
      default:
        obj = { ...obj, spc: obj["spc"] ? [...obj["spc"], key] : [key] };
        return obj;
    }
  };

  let searchCount = (arr: string[], search: string) =>
    arr.reduce(function(n, val) {
      return val == search.toLowerCase() ? n + 1 : n;
    }, 0);
  let handleAlphabeticallySearch = (key: string) => {
    switch (key[0].toLowerCase()) {
      case "a":
        if (obj["a"] && obj["a"].length) {
          tempCountObj = searchCount(obj.a, key.toLowerCase())
            ? { ...tempCountObj, [key]: searchCount(obj.a, key) }
            : { ...tempCountObj };
        }
        return tempCountObj;
      case "b":
        if (obj["b"] && obj["b"].length) {
          tempCountObj = searchCount(obj["b"], key.toLowerCase())
            ? { ...tempCountObj, [key]: searchCount(obj["b"], key) }
            : { ...tempCountObj };
        }
      case "c":
        if (obj["c"] && obj["c"].length) {
          tempCountObj = searchCount(obj["c"], key.toLowerCase())
            ? { ...tempCountObj, [key]: searchCount(obj["c"], key) }
            : { ...tempCountObj };
        }
      case "d":
        if (obj["d"] && obj["d"].length) {
          tempCountObj = searchCount(obj["d"], key.toLowerCase())
            ? { ...tempCountObj, [key]: searchCount(obj["d"], key) }
            : { ...tempCountObj };
        }
      case "e":
        if (obj["e"] && obj["e"].length) {
          tempCountObj = searchCount(obj["e"], key.toLowerCase())
            ? { ...tempCountObj, [key]: searchCount(obj["e"], key) }
            : { ...tempCountObj };
        }
      case "f":
        if (obj["f"] && obj["f"].length) {
          tempCountObj = searchCount(obj["f"], key.toLowerCase())
            ? { ...tempCountObj, [key]: searchCount(obj["f"], key) }
            : { ...tempCountObj };
        }
      case "g":
        if (obj["g"] && obj["g"].length) {
          tempCountObj = searchCount(obj["g"], key.toLowerCase())
            ? { ...tempCountObj, [key]: searchCount(obj["g"], key) }
            : { ...tempCountObj };
        }
      case "h":
        if (obj["h"] && obj["h"].length) {
          tempCountObj = searchCount(obj["h"], key.toLowerCase())
            ? { ...tempCountObj, [key]: searchCount(obj["h"], key) }
            : { ...tempCountObj };
        }
      case "i":
        if (obj["i"] && obj["i"].length) {
          tempCountObj = searchCount(obj["i"], key.toLowerCase())
            ? { ...tempCountObj, [key]: searchCount(obj["i"], key) }
            : { ...tempCountObj };
        }
      case "j":
        if (obj["j"] && obj["j"].length) {
          tempCountObj = searchCount(obj["j"], key.toLowerCase())
            ? { ...tempCountObj, [key]: searchCount(obj["j"], key) }
            : { ...tempCountObj };
        }
      case "k":
        if (obj["k"] && obj["k"].length) {
          tempCountObj = searchCount(obj["k"], key.toLowerCase())
            ? { ...tempCountObj, [key]: searchCount(obj["k"], key) }
            : { ...tempCountObj };
        }
      case "l":
        if (obj["l"] && obj["l"].length) {
          tempCountObj = searchCount(obj["l"], key.toLowerCase())
            ? { ...tempCountObj, [key]: searchCount(obj["l"], key) }
            : { ...tempCountObj };
        }
      case "m":
        if (obj["m"] && obj["m"].length) {
          tempCountObj = searchCount(obj["m"], key.toLowerCase())
            ? { ...tempCountObj, [key]: searchCount(obj["m"], key) }
            : { ...tempCountObj };
        }
      case "n":
        if (obj["n"] && obj["n"].length) {
          tempCountObj = searchCount(obj["n"], key.toLowerCase())
            ? { ...tempCountObj, [key]: searchCount(obj["n"], key) }
            : { ...tempCountObj };
        }
      case "o":
        if (obj["o"] && obj["o"].length) {
          tempCountObj = searchCount(obj["o"], key.toLowerCase())
            ? { ...tempCountObj, [key]: searchCount(obj["o"], key) }
            : { ...tempCountObj };
        }
      case "p":
        if (obj["p"] && obj["p"].length) {
          tempCountObj = searchCount(obj["p"], key.toLowerCase())
            ? { ...tempCountObj, [key]: searchCount(obj["p"], key) }
            : { ...tempCountObj };
        }
      case "q":
        if (obj["q"] && obj["q"].length) {
          tempCountObj = searchCount(obj["q"], key.toLowerCase())
            ? { ...tempCountObj, [key]: searchCount(obj["q"], key) }
            : { ...tempCountObj };
        }
      case "r":
        if (obj["r"] && obj["r"].length) {
          tempCountObj = searchCount(obj["r"], key.toLowerCase())
            ? { ...tempCountObj, [key]: searchCount(obj["r"], key) }
            : { ...tempCountObj };
        }
      case "s":
        if (obj["s"] && obj["s"].length) {
          tempCountObj = searchCount(obj["s"], key.toLowerCase())
            ? { ...tempCountObj, [key]: searchCount(obj["s"], key) }
            : { ...tempCountObj };
        }
      case "t":
        if (obj["t"] && obj["t"].length) {
          tempCountObj = searchCount(obj["t"], key.toLowerCase())
            ? { ...tempCountObj, [key]: searchCount(obj["t"], key) }
            : { ...tempCountObj };
        }
      case "u":
        if (obj["u"] && obj["u"].length) {
          tempCountObj = searchCount(obj["u"], key.toLowerCase())
            ? { ...tempCountObj, [key]: searchCount(obj["u"], key) }
            : { ...tempCountObj };
        }
      case "v":
        if (obj["v"] && obj["v"].length) {
          tempCountObj = searchCount(obj["v"], key.toLowerCase())
            ? { ...tempCountObj, [key]: searchCount(obj["v"], key) }
            : { ...tempCountObj };
        }
      case "w":
        if (obj["w"] && obj["w"].length) {
          tempCountObj = searchCount(obj["w"], key.toLowerCase())
            ? { ...tempCountObj, [key]: searchCount(obj["w"], key) }
            : { ...tempCountObj };
        }
      case "x":
        if (obj["x"] && obj["x"].length) {
          tempCountObj = searchCount(obj["x"], key.toLowerCase())
            ? { ...tempCountObj, [key]: searchCount(obj["x"], key) }
            : { ...tempCountObj };
        }
      case "y":
        if (obj["y"] && obj["y"].length) {
          tempCountObj = searchCount(obj["y"], key.toLowerCase())
            ? { ...tempCountObj, [key]: searchCount(obj["y"], key) }
            : { ...tempCountObj };
        }
      case "z":
        if (obj["z"] && obj["z"].length) {
          tempCountObj = searchCount(obj["z"], key.toLowerCase())
            ? { ...tempCountObj, [key]: searchCount(obj["z"], key) }
            : { ...tempCountObj };
        }
      default:
        if (obj["spc"] && obj["spc"].length) {
          tempCountObj = searchCount(obj["spc"], key.toLowerCase())
            ? { ...tempCountObj, [key]: searchCount(obj["spc"], key) }
            : { ...tempCountObj };
        }
    }
  };
  return (
    <div className="form-signin">
      <div>
        <label htmlFor="names" className="d-block">
          Names file :{" "}
        </label>
        {/* <input id="names" type="file" onChange={handleFileRead} /> */}
        <div className="input-group mb-3">
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              id="names"
              onChange={handleFileRead}
            />
          </div>
          <div className="input-group-append">
            <span className="input-group-text" id="">
              <label className="custom-file-label">Choose file</label>
            </span>
          </div>
        </div>
      </div>
      <div>
        <label htmlFor="main" className="d-block">
          Main file :{" "}
        </label>
        <div className="input-group mb-3">
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              id="main"
              onChange={handleFileRead}
            />
          </div>
          <div className="input-group-append">
            <span className="input-group-text" id="">
              <label className="custom-file-label">Choose file</label>
            </span>
          </div>
        </div>
        {/* <input id="main" type="file" onChange={handleFileRead} /> */}
      </div>
      {/* <button onClick={countWord}>result</button> */}
      <div className="text-center">
        <button
          type="button"
          onClick={countWord}
          className="btn btn-primary w-100 mt-2"
        >
          Result
        </button>
      </div>
      
      {resultStrings && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Names</th>
              <th scope="col">count</th>
            </tr>
          </thead>
          <tbody>
            {resultStrings.map(result =>
              Object.keys(result).map(d => (
                <tr key={d + "-" + result[d]}>
                  <th scope="row">{d}</th>
                  <td> {result[d]}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}

      {error && <p>{error}</p>}
      {/* {file1Strings && console.log(file1Strings)} */}
    </div>
  );
}
