const {isArray} = Array;
const O = Object;
const Params = URLSearchParams;

const restoreEntries = (obj, [key, value]) => {
    obj[key] = value;
    return obj;
}

const foldParams = (params, [name, value]) => (params[name]
    ? restoreEntries(params, [name, isArray(params[name]) ? [...params[name], value] : [params[name], value]])
    : restoreEntries(params, [name, value])
  );
    
const fromEntries = foldable => foldable.reduce(foldParams, O.create(null));

const reduceParams = (params, [name, value]) => {
    for (let val of isArray(value) ? value : [value]) {
        params.append(name, val);
    }
    return params;
};

const parse = queryString => fromEntries([...new Params(queryString)]);
  
const stringify = params =>
    O.entries(params)
        .reduce(reduceParams, new Params())
        .toString();

module.exports = {
    parse,
    stringify
}