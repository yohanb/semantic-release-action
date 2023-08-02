import { createRequire as __WEBPACK_EXTERNAL_createRequire } from "module";
/******/ var __webpack_modules__ = ({

/***/ 110:
/***/ ((module) => {

module.exports = eval("require")("./src/_exec");


/***/ }),

/***/ 35:
/***/ ((module) => {

module.exports = eval("require")("./src/index");


/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __nccwpck_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	var threw = true;
/******/ 	try {
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 		threw = false;
/******/ 	} finally {
/******/ 		if(threw) delete __webpack_module_cache__[moduleId];
/******/ 	}
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat */
/******/ 
/******/ if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = new URL('.', import.meta.url).pathname.slice(import.meta.url.match(/^file:\/\/\/\w:/) ? 1 : 0, -1) + "/";
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXTERNAL MODULE: ./node_modules/@vercel/ncc/dist/ncc/@@notfound.js?./src/_exec
var _exec = __nccwpck_require__(110);
;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("path");
// EXTERNAL MODULE: ./node_modules/@vercel/ncc/dist/ncc/@@notfound.js?./src/index
var index = __nccwpck_require__(35);
;// CONCATENATED MODULE: ./index.js




const run = async () => {
  // Install Dependencies
  {
    const {stdout, stderr} = await _exec('npm --loglevel error ci --only=prod', {
      cwd: external_path_namespaceObject.resolve(__dirname)
    });
    console.log(stdout);
    if (stderr) {
      return Promise.reject(stderr);
    }
  }

  index();
};

run().catch(console.error);

})();

