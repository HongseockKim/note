// CommonJS 
const require = () => {
    const module = {export:{}};
    const exprots = module.export;

    exprots.add = (a,b) => a + b;
    exprots.multiply = (a,b) => a * b;

    return module.export;
}

const modules = require();
console.log(modules.add(2,3));


function testRequire(path) {
    const moduleCode = {
        './math':`
        exports.add = (a,b) => a + b;
        exports.multiply = (a,b) => a * b;
        `,
        './string':`
        module.exports = {
        reverse: (str) => str.split('').reverse().join('')
        };
        `
    };
    
    const module = {exports:{}};
    const exports = module.exports;
    const func = new Function('module','exports',moduleCode[path]);
    func(module,exports);
    return module.exports;
}

const math = testRequire('./math');
const string = testRequire('./string');

console.log(math.add(2,3));
console.log(string.reverse('hello'));



// AMD defin
const defin = (dependencies,factory) => {
    const modules = {};
    const loadedDeps = dependencies.map(dep=> modules[dep] || {});

    const moduleExports = factory.apply(null,loadedDeps);
    return moduleExports;
}

const mathModule =defin([],()=>{
    return{
        add:(a,b)=> a + b,
        multiply:(a,b)=> a * b
    };
});