exports.id = 936;
exports.ids = [936];
exports.modules = {

/***/ 88207:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Pagination)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pagination_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40573);
/* harmony import */ var _pagination_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pagination_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ default auto */ 


function Pagination({ page, hasPrev, hasNext }) {
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_pagination_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: (_pagination_module_css__WEBPACK_IMPORTED_MODULE_2___default().button),
                disabled: !hasPrev,
                onClick: ()=>router.push(`?page=${page - 1}`),
                children: "Previous"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                disabled: !hasNext,
                className: (_pagination_module_css__WEBPACK_IMPORTED_MODULE_2___default().button),
                onClick: ()=>router.push(`?page=${page + 1}`),
                children: "Next"
            })
        ]
    });
}


/***/ }),

/***/ 58028:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Card_container__Y9bZ2",
	"imageContainer": "Card_imageContainer__pTsyp",
	"image": "Card_image__dMxf8",
	"textContainer": "Card_textContainer__PSD9U",
	"date": "Card_date___dY_F",
	"category": "Card_category__IwyeW",
	"desc": "Card_desc__85W7c",
	"link": "Card_link__kx4yK"
};


/***/ }),

/***/ 19099:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "CardList_container__6_lxm",
	"title": "CardList_title__FUW5R"
};


/***/ }),

/***/ 40573:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "pagination_container__MjtB3",
	"button": "pagination_button__EHYZp"
};


/***/ }),

/***/ 74921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ CardList)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(14178);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./src/components/pagination/Pagination.jsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/dhanukesharwani/Desktop/blogApp/src/components/pagination/Pagination.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const Pagination = (__default__);
// EXTERNAL MODULE: ./src/components/cardList/CardList.module.css
var CardList_module = __webpack_require__(19099);
var CardList_module_default = /*#__PURE__*/__webpack_require__.n(CardList_module);
// EXTERNAL MODULE: ./src/components/card/Card.module.css
var Card_module = __webpack_require__(58028);
var Card_module_default = /*#__PURE__*/__webpack_require__.n(Card_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(25124);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/card/Card.jsx




function Card({ key, item }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Card_module_default()).container,
        children: [
            item.img && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Card_module_default()).imageContainer,
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: item.img,
                    alt: "",
                    fill: true,
                    className: (Card_module_default()).image
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Card_module_default()).textContainer,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Card_module_default()).detail,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: (Card_module_default()).date,
                                children: [
                                    item.createdAt.substring(0, 10),
                                    " -",
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: (Card_module_default()).category,
                                children: item.catSlug
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: `/posts/${item.slug}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            children: item.title
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Card_module_default()).desc,
                        dangerouslySetInnerHTML: {
                            __html: item?.desc.substring(0, 60)
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: `/posts/${item.slug}`,
                        className: (Card_module_default()).link,
                        children: "Read More"
                    })
                ]
            })
        ]
    }, key);
}

;// CONCATENATED MODULE: ./src/components/cardList/CardList.jsx





const getData = async (page, cat)=>{
    const res = await fetch(`http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`, {
        cache: "no-store"
    });
    if (!res.ok) {
        throw new Error("Failed");
    }
    return res.json();
};
async function CardList({ page, cat }) {
    const { posts, count } = await getData(page, cat);
    const POST_PER_PAGE = 2;
    const hasPrev = POST_PER_PAGE * (page - 1) > 0;
    const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (CardList_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: (CardList_module_default()).title,
                children: "Recent Posts"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (CardList_module_default()).posts,
                children: posts?.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(Card, {
                        item: item
                    }, item._id))
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Pagination, {
                page: page,
                hasPrev: hasPrev,
                hasNext: hasNext
            })
        ]
    });
}


/***/ }),

/***/ 57114:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(90696)


/***/ })

};
;