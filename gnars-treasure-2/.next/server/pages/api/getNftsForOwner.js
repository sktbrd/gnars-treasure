"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/getNftsForOwner";
exports.ids = ["pages/api/getNftsForOwner"];
exports.modules = {

/***/ "alchemy-sdk":
/*!******************************!*\
  !*** external "alchemy-sdk" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("alchemy-sdk");

/***/ }),

/***/ "(api)/./pages/api/getNftsForOwner.js":
/*!**************************************!*\
  !*** ./pages/api/getNftsForOwner.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var alchemy_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! alchemy-sdk */ \"alchemy-sdk\");\n/* harmony import */ var alchemy_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(alchemy_sdk__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    const { address , pageSize , chain , excludeFilter , pageKey  } = JSON.parse(req.body);\n    if (req.method !== \"POST\") {\n        res.status(405).send({\n            message: \"Only POST requests allowed\"\n        });\n        return;\n    }\n    const settings = {\n        apiKey: process.env.ALCHEMY_API_KEY,\n        network: alchemy_sdk__WEBPACK_IMPORTED_MODULE_0__.Network[chain]\n    };\n    const alchemy = new alchemy_sdk__WEBPACK_IMPORTED_MODULE_0__.Alchemy(settings);\n    try {\n        const nfts = await alchemy.nft.getNftsForOwner(address, {\n            pageSize: pageSize ? pageSize : 100,\n            excludeFilters: excludeFilter && [\n                alchemy_sdk__WEBPACK_IMPORTED_MODULE_0__.NftFilters.SPAM\n            ],\n            pageKey: pageKey ? pageKey : \"\"\n        });\n        const formattedNfts = nfts.ownedNfts.map((nft)=>{\n            const { contract , title , tokenType , tokenId , description , media  } = nft;\n            console.log(nft.media);\n            return {\n                contract: contract.address,\n                symbol: contract.symbol,\n                collectionName: contract.openSea?.collectionName,\n                media: media[0]?.gateway ? media[0]?.gateway : \"https://via.placeholder.com/500\",\n                verified: contract.openSea?.safelistRequestStatus,\n                tokenType,\n                tokenId,\n                title,\n                description,\n                format: media[0]?.format ? media[0]?.format : \"png\"\n            };\n        });\n        if (excludeFilter) {\n            const filteredNfts = formattedNfts.filter((nft)=>nft.title.length && nft.description.length && nft.media);\n            if (filteredNfts) {\n                res.status(200).json({\n                    nfts: filteredNfts.length ? filteredNfts : null,\n                    pageKey: nfts.pageKey\n                });\n            }\n        } else {\n            res.status(200).json({\n                nfts: formattedNfts.length ? formattedNfts : null,\n                pageKey: nfts.pageKey\n            });\n        }\n    } catch (e) {\n        console.warn(e);\n        res.status(500).send({\n            message: \"something went wrong, check the log in your terminal\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0TmZ0c0Zvck93bmVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEyRDtBQUU1QyxlQUFlRyxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUMvQyxNQUFNLEVBQUVDLFFBQU8sRUFBRUMsU0FBUSxFQUFFQyxNQUFLLEVBQUVDLGNBQWEsRUFBRUMsUUFBTyxFQUFFLEdBQUdDLEtBQUtDLEtBQUssQ0FDdEVSLElBQUlTLElBQUk7SUFFVCxJQUFJVCxJQUFJVSxNQUFNLEtBQUssUUFBUTtRQUMxQlQsSUFBSVUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTO1FBQTZCO1FBQzdEO0lBQ0QsQ0FBQztJQUVELE1BQU1DLFdBQVc7UUFDaEJDLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsZUFBZTtRQUNuQ0MsU0FBU3ZCLGdEQUFPLENBQUNRLE1BQU07SUFDeEI7SUFFQSxNQUFNZ0IsVUFBVSxJQUFJdkIsZ0RBQU9BLENBQUNpQjtJQUU1QixJQUFJO1FBQ0gsTUFBTU8sT0FBTyxNQUFNRCxRQUFRRSxHQUFHLENBQUNDLGVBQWUsQ0FBQ3JCLFNBQVM7WUFDdkRDLFVBQVVBLFdBQVdBLFdBQVcsR0FBRztZQUNuQ3FCLGdCQUFnQm5CLGlCQUFpQjtnQkFBQ1Asd0RBQWU7YUFBQztZQUNsRFEsU0FBU0EsVUFBVUEsVUFBVSxFQUFFO1FBQ2hDO1FBRUEsTUFBTW9CLGdCQUFnQkwsS0FBS00sU0FBUyxDQUFDQyxHQUFHLENBQUMsQ0FBQ04sTUFBUTtZQUNqRCxNQUFNLEVBQUVPLFNBQVEsRUFBRUMsTUFBSyxFQUFFQyxVQUFTLEVBQUVDLFFBQU8sRUFBRUMsWUFBVyxFQUFFQyxNQUFLLEVBQUUsR0FDaEVaO1lBQ0RhLFFBQVFDLEdBQUcsQ0FBQ2QsSUFBSVksS0FBSztZQUNyQixPQUFPO2dCQUNOTCxVQUFVQSxTQUFTM0IsT0FBTztnQkFDMUJtQyxRQUFRUixTQUFTUSxNQUFNO2dCQUN2QkMsZ0JBQWdCVCxTQUFTVSxPQUFPLEVBQUVEO2dCQUNsQ0osT0FBT0EsS0FBSyxDQUFDLEVBQUUsRUFBRU0sVUFDZE4sS0FBSyxDQUFDLEVBQUUsRUFBRU0sVUFDVixpQ0FBaUM7Z0JBQ3BDQyxVQUFVWixTQUFTVSxPQUFPLEVBQUVHO2dCQUM1Qlg7Z0JBQ0FDO2dCQUNBRjtnQkFDQUc7Z0JBQ0FVLFFBQVFULEtBQUssQ0FBQyxFQUFFLEVBQUVTLFNBQVNULEtBQUssQ0FBQyxFQUFFLEVBQUVTLFNBQVMsS0FBSztZQUNwRDtRQUNEO1FBQ0EsSUFBSXRDLGVBQWU7WUFDbEIsTUFBTXVDLGVBQWVsQixjQUFjbUIsTUFBTSxDQUN4QyxDQUFDdkIsTUFBUUEsSUFBSVEsS0FBSyxDQUFDZ0IsTUFBTSxJQUFJeEIsSUFBSVcsV0FBVyxDQUFDYSxNQUFNLElBQUl4QixJQUFJWSxLQUFLO1lBRWpFLElBQUlVLGNBQWM7Z0JBQ2pCM0MsSUFBSVUsTUFBTSxDQUFDLEtBQUtvQyxJQUFJLENBQUM7b0JBQ3BCMUIsTUFBTXVCLGFBQWFFLE1BQU0sR0FBR0YsZUFBZSxJQUFJO29CQUMvQ3RDLFNBQVNlLEtBQUtmLE9BQU87Z0JBQ3RCO1lBQ0QsQ0FBQztRQUNGLE9BQU87WUFDTkwsSUFBSVUsTUFBTSxDQUFDLEtBQUtvQyxJQUFJLENBQUM7Z0JBQ3BCMUIsTUFBTUssY0FBY29CLE1BQU0sR0FBR3BCLGdCQUFnQixJQUFJO2dCQUNqRHBCLFNBQVNlLEtBQUtmLE9BQU87WUFDdEI7UUFDRCxDQUFDO0lBQ0YsRUFBRSxPQUFPMEMsR0FBRztRQUNYYixRQUFRYyxJQUFJLENBQUNEO1FBQ2IvQyxJQUFJVSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQ3BCQyxTQUFTO1FBQ1Y7SUFDRDtBQUNELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nbmFycy10cmVhc3VyZS0yLy4vcGFnZXMvYXBpL2dldE5mdHNGb3JPd25lci5qcz9mNDY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5ldHdvcmssIEFsY2hlbXksIE5mdEZpbHRlcnMgfSBmcm9tIFwiYWxjaGVteS1zZGtcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuXHRjb25zdCB7IGFkZHJlc3MsIHBhZ2VTaXplLCBjaGFpbiwgZXhjbHVkZUZpbHRlciwgcGFnZUtleSB9ID0gSlNPTi5wYXJzZShcblx0XHRyZXEuYm9keVxuXHQpO1xuXHRpZiAocmVxLm1ldGhvZCAhPT0gXCJQT1NUXCIpIHtcblx0XHRyZXMuc3RhdHVzKDQwNSkuc2VuZCh7IG1lc3NhZ2U6IFwiT25seSBQT1NUIHJlcXVlc3RzIGFsbG93ZWRcIiB9KTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBzZXR0aW5ncyA9IHtcblx0XHRhcGlLZXk6IHByb2Nlc3MuZW52LkFMQ0hFTVlfQVBJX0tFWSxcblx0XHRuZXR3b3JrOiBOZXR3b3JrW2NoYWluXSxcblx0fTtcblxuXHRjb25zdCBhbGNoZW15ID0gbmV3IEFsY2hlbXkoc2V0dGluZ3MpO1xuXG5cdHRyeSB7XG5cdFx0Y29uc3QgbmZ0cyA9IGF3YWl0IGFsY2hlbXkubmZ0LmdldE5mdHNGb3JPd25lcihhZGRyZXNzLCB7XG5cdFx0XHRwYWdlU2l6ZTogcGFnZVNpemUgPyBwYWdlU2l6ZSA6IDEwMCxcblx0XHRcdGV4Y2x1ZGVGaWx0ZXJzOiBleGNsdWRlRmlsdGVyICYmIFtOZnRGaWx0ZXJzLlNQQU1dLFxuXHRcdFx0cGFnZUtleTogcGFnZUtleSA/IHBhZ2VLZXkgOiBcIlwiLFxuXHRcdH0pO1xuXG5cdFx0Y29uc3QgZm9ybWF0dGVkTmZ0cyA9IG5mdHMub3duZWROZnRzLm1hcCgobmZ0KSA9PiB7XG5cdFx0XHRjb25zdCB7IGNvbnRyYWN0LCB0aXRsZSwgdG9rZW5UeXBlLCB0b2tlbklkLCBkZXNjcmlwdGlvbiwgbWVkaWEgfSA9XG5cdFx0XHRcdG5mdDtcblx0XHRcdGNvbnNvbGUubG9nKG5mdC5tZWRpYSk7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRjb250cmFjdDogY29udHJhY3QuYWRkcmVzcyxcblx0XHRcdFx0c3ltYm9sOiBjb250cmFjdC5zeW1ib2wsXG5cdFx0XHRcdGNvbGxlY3Rpb25OYW1lOiBjb250cmFjdC5vcGVuU2VhPy5jb2xsZWN0aW9uTmFtZSxcblx0XHRcdFx0bWVkaWE6IG1lZGlhWzBdPy5nYXRld2F5XG5cdFx0XHRcdFx0PyBtZWRpYVswXT8uZ2F0ZXdheVxuXHRcdFx0XHRcdDogXCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vNTAwXCIsXG5cdFx0XHRcdHZlcmlmaWVkOiBjb250cmFjdC5vcGVuU2VhPy5zYWZlbGlzdFJlcXVlc3RTdGF0dXMsXG5cdFx0XHRcdHRva2VuVHlwZSxcblx0XHRcdFx0dG9rZW5JZCxcblx0XHRcdFx0dGl0bGUsXG5cdFx0XHRcdGRlc2NyaXB0aW9uLFxuXHRcdFx0XHRmb3JtYXQ6IG1lZGlhWzBdPy5mb3JtYXQgPyBtZWRpYVswXT8uZm9ybWF0IDogXCJwbmdcIixcblx0XHRcdH07XG5cdFx0fSk7XG5cdFx0aWYgKGV4Y2x1ZGVGaWx0ZXIpIHtcblx0XHRcdGNvbnN0IGZpbHRlcmVkTmZ0cyA9IGZvcm1hdHRlZE5mdHMuZmlsdGVyKFxuXHRcdFx0XHQobmZ0KSA9PiBuZnQudGl0bGUubGVuZ3RoICYmIG5mdC5kZXNjcmlwdGlvbi5sZW5ndGggJiYgbmZ0Lm1lZGlhXG5cdFx0XHQpO1xuXHRcdFx0aWYgKGZpbHRlcmVkTmZ0cykge1xuXHRcdFx0XHRyZXMuc3RhdHVzKDIwMCkuanNvbih7XG5cdFx0XHRcdFx0bmZ0czogZmlsdGVyZWROZnRzLmxlbmd0aCA/IGZpbHRlcmVkTmZ0cyA6IG51bGwsXG5cdFx0XHRcdFx0cGFnZUtleTogbmZ0cy5wYWdlS2V5LFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVzLnN0YXR1cygyMDApLmpzb24oe1xuXHRcdFx0XHRuZnRzOiBmb3JtYXR0ZWROZnRzLmxlbmd0aCA/IGZvcm1hdHRlZE5mdHMgOiBudWxsLFxuXHRcdFx0XHRwYWdlS2V5OiBuZnRzLnBhZ2VLZXksXG5cdFx0XHR9KTtcblx0XHR9XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRjb25zb2xlLndhcm4oZSk7XG5cdFx0cmVzLnN0YXR1cyg1MDApLnNlbmQoe1xuXHRcdFx0bWVzc2FnZTogXCJzb21ldGhpbmcgd2VudCB3cm9uZywgY2hlY2sgdGhlIGxvZyBpbiB5b3VyIHRlcm1pbmFsXCIsXG5cdFx0fSk7XG5cdH1cbn1cbiJdLCJuYW1lcyI6WyJOZXR3b3JrIiwiQWxjaGVteSIsIk5mdEZpbHRlcnMiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiYWRkcmVzcyIsInBhZ2VTaXplIiwiY2hhaW4iLCJleGNsdWRlRmlsdGVyIiwicGFnZUtleSIsIkpTT04iLCJwYXJzZSIsImJvZHkiLCJtZXRob2QiLCJzdGF0dXMiLCJzZW5kIiwibWVzc2FnZSIsInNldHRpbmdzIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIkFMQ0hFTVlfQVBJX0tFWSIsIm5ldHdvcmsiLCJhbGNoZW15IiwibmZ0cyIsIm5mdCIsImdldE5mdHNGb3JPd25lciIsImV4Y2x1ZGVGaWx0ZXJzIiwiU1BBTSIsImZvcm1hdHRlZE5mdHMiLCJvd25lZE5mdHMiLCJtYXAiLCJjb250cmFjdCIsInRpdGxlIiwidG9rZW5UeXBlIiwidG9rZW5JZCIsImRlc2NyaXB0aW9uIiwibWVkaWEiLCJjb25zb2xlIiwibG9nIiwic3ltYm9sIiwiY29sbGVjdGlvbk5hbWUiLCJvcGVuU2VhIiwiZ2F0ZXdheSIsInZlcmlmaWVkIiwic2FmZWxpc3RSZXF1ZXN0U3RhdHVzIiwiZm9ybWF0IiwiZmlsdGVyZWROZnRzIiwiZmlsdGVyIiwibGVuZ3RoIiwianNvbiIsImUiLCJ3YXJuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/getNftsForOwner.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getNftsForOwner.js"));
module.exports = __webpack_exports__;

})();