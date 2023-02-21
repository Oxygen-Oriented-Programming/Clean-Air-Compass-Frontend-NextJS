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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/github":
/*!*********************************************!*\
  !*** external "next-auth/providers/github" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].js":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar user_credential = [];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    // Configure one or more authentication providers\n    providers: [\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: \"17d5029590375e19691d\",\n            clientSecret: \"eb37239e1eae70213a98ee3d67376b9becd9ed0e\"\n        })\n    ],\n    callbacks: {\n        async jwt (token, user, account, profile, isNewUser) {\n            //google token\n            var user_token = token.token.account;\n            return token;\n        },\n        async session ({ session , token , user  }) {\n            user_credential = {\n                provider: \"github\"\n            };\n            if (token.token.account.access_token) {\n                user_credential[\"auth_token\"] = token.token.account.access_token;\n            }\n            if (token.token.account.id_token) {\n                user_credential[\"auth_token\"] = token.token.account.id_token;\n            }\n            // Send properties to the client, like an access_token from a provider.\n            // session.accessToken = token\n            return user_credential;\n        }\n    },\n    secret: \"G98di5p1KYGycZRa9wOhULNe0uwEv9JwPOv1Nw+wWZI=\",\n    jwt: {\n        secret: \"G98di5p1KYGycZRa9wOhULNe0uwEv9JwPOv1Nw+wWZI=\",\n        encryption: true\n    },\n    pages: {\n        signIn: \"/api/auth/sigin\"\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFpQztBQUN1QjtBQUV4RCxJQUFJRSxrQkFBa0IsRUFBRTtBQUN4QixpRUFBZUYsZ0RBQVFBLENBQUM7SUFDdEIsaURBQWlEO0lBQ2pERyxXQUFXO1FBQ1RGLGlFQUFjQSxDQUFDO1lBQ2JHLFVBQVU7WUFDVkMsY0FBYztRQUNoQjtLQUNEO0lBRURDLFdBQVc7UUFDVCxNQUFNQyxLQUFJQyxLQUFLLEVBQUVDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQUVDLFNBQVMsRUFBRTtZQUNsRCxjQUFjO1lBQ2QsSUFBSUMsYUFBYUwsTUFBTUEsS0FBSyxDQUFDRSxPQUFPO1lBRXBDLE9BQU9GO1FBQ1Q7UUFDQSxNQUFNTSxTQUFRLEVBQUVBLFFBQU8sRUFBRU4sTUFBSyxFQUFFQyxLQUFJLEVBQUUsRUFBRTtZQUN0Q1Asa0JBQWtCO2dCQUNoQmEsVUFBVTtZQUVaO1lBQ0EsSUFBSVAsTUFBTUEsS0FBSyxDQUFDRSxPQUFPLENBQUNNLFlBQVksRUFBRTtnQkFDcENkLGVBQWUsQ0FBQyxhQUFhLEdBQUdNLE1BQU1BLEtBQUssQ0FBQ0UsT0FBTyxDQUFDTSxZQUFZO1lBQ2xFLENBQUM7WUFDRCxJQUFJUixNQUFNQSxLQUFLLENBQUNFLE9BQU8sQ0FBQ08sUUFBUSxFQUFFO2dCQUNoQ2YsZUFBZSxDQUFDLGFBQWEsR0FBR00sTUFBTUEsS0FBSyxDQUFDRSxPQUFPLENBQUNPLFFBQVE7WUFDOUQsQ0FBQztZQUNELHVFQUF1RTtZQUN2RSw4QkFBOEI7WUFDOUIsT0FBT2Y7UUFDVDtJQUNGO0lBQ0FnQixRQUFRO0lBQ1JYLEtBQUs7UUFDSFcsUUFBUTtRQUNSQyxZQUFZLElBQUk7SUFDbEI7SUFDQUMsT0FBTztRQUNMQyxRQUFRO0lBQ1Y7QUFDRixFQUFFLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzc4YWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gJ25leHQtYXV0aCc7XG5pbXBvcnQgR2l0SHViUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9naXRodWInO1xuXG52YXIgdXNlcl9jcmVkZW50aWFsID0gW107XG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XG4gIC8vIENvbmZpZ3VyZSBvbmUgb3IgbW9yZSBhdXRoZW50aWNhdGlvbiBwcm92aWRlcnNcbiAgcHJvdmlkZXJzOiBbXG4gICAgR2l0SHViUHJvdmlkZXIoe1xuICAgICAgY2xpZW50SWQ6ICcxN2Q1MDI5NTkwMzc1ZTE5NjkxZCcsXG4gICAgICBjbGllbnRTZWNyZXQ6ICdlYjM3MjM5ZTFlYWU3MDIxM2E5OGVlM2Q2NzM3NmI5YmVjZDllZDBlJyxcbiAgICB9KSxcbiAgXSxcblxuICBjYWxsYmFja3M6IHtcbiAgICBhc3luYyBqd3QodG9rZW4sIHVzZXIsIGFjY291bnQsIHByb2ZpbGUsIGlzTmV3VXNlcikge1xuICAgICAgLy9nb29nbGUgdG9rZW5cbiAgICAgIHZhciB1c2VyX3Rva2VuID0gdG9rZW4udG9rZW4uYWNjb3VudDtcblxuICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH0sXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuLCB1c2VyIH0pIHtcbiAgICAgIHVzZXJfY3JlZGVudGlhbCA9IHtcbiAgICAgICAgcHJvdmlkZXI6ICdnaXRodWInLFxuICAgICAgICAvLyBcImF1dGhfdG9rZW5cIjp0b2tlbi50b2tlbi5hY2NvdW50LmlkX3Rva2VuLFxuICAgICAgfTtcbiAgICAgIGlmICh0b2tlbi50b2tlbi5hY2NvdW50LmFjY2Vzc190b2tlbikge1xuICAgICAgICB1c2VyX2NyZWRlbnRpYWxbJ2F1dGhfdG9rZW4nXSA9IHRva2VuLnRva2VuLmFjY291bnQuYWNjZXNzX3Rva2VuO1xuICAgICAgfVxuICAgICAgaWYgKHRva2VuLnRva2VuLmFjY291bnQuaWRfdG9rZW4pIHtcbiAgICAgICAgdXNlcl9jcmVkZW50aWFsWydhdXRoX3Rva2VuJ10gPSB0b2tlbi50b2tlbi5hY2NvdW50LmlkX3Rva2VuO1xuICAgICAgfVxuICAgICAgLy8gU2VuZCBwcm9wZXJ0aWVzIHRvIHRoZSBjbGllbnQsIGxpa2UgYW4gYWNjZXNzX3Rva2VuIGZyb20gYSBwcm92aWRlci5cbiAgICAgIC8vIHNlc3Npb24uYWNjZXNzVG9rZW4gPSB0b2tlblxuICAgICAgcmV0dXJuIHVzZXJfY3JlZGVudGlhbDtcbiAgICB9LFxuICB9LFxuICBzZWNyZXQ6ICdHOThkaTVwMUtZR3ljWlJhOXdPaFVMTmUwdXdFdjlKd1BPdjFOdyt3V1pJPScsXG4gIGp3dDoge1xuICAgIHNlY3JldDogJ0c5OGRpNXAxS1lHeWNaUmE5d09oVUxOZTB1d0V2OUp3UE92MU53K3dXWkk9JyxcbiAgICBlbmNyeXB0aW9uOiB0cnVlLFxuICB9LFxuICBwYWdlczoge1xuICAgIHNpZ25JbjogJy9hcGkvYXV0aC9zaWdpbicsXG4gIH0sXG59KTtcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkdpdEh1YlByb3ZpZGVyIiwidXNlcl9jcmVkZW50aWFsIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJjbGllbnRTZWNyZXQiLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsInVzZXIiLCJhY2NvdW50IiwicHJvZmlsZSIsImlzTmV3VXNlciIsInVzZXJfdG9rZW4iLCJzZXNzaW9uIiwicHJvdmlkZXIiLCJhY2Nlc3NfdG9rZW4iLCJpZF90b2tlbiIsInNlY3JldCIsImVuY3J5cHRpb24iLCJwYWdlcyIsInNpZ25JbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();