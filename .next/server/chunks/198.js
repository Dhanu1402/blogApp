"use strict";
exports.id = 198;
exports.ids = [198];
exports.modules = {

/***/ 31198:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ authOptions),
/* harmony export */   P: () => (/* binding */ getAuthSession)
/* harmony export */ });
/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26199);
/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51989);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49861);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _connect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49101);
/* harmony import */ var _auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27181);





const authOptions = {
    adapter: (0,_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_4__/* .PrismaAdapter */ .N)(_connect__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z),
    providers: [
        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        (0,next_auth_providers_github__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        })
    ]
};
const getAuthSession = ()=>(0,next_auth__WEBPACK_IMPORTED_MODULE_2__.getServerSession)(authOptions);


/***/ })

};
;