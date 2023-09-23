exports.id = 969;
exports.ids = [969];
exports.modules = {

/***/ 20055:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 31232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 52987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 56926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 44282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 16505, 23))

/***/ }),

/***/ 42481:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 24883));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8438));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5694));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 73380, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50954, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 56107));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 67173))

/***/ }),

/***/ 67173:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AuthLinks)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _authLinks_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16450);
/* harmony import */ var _authLinks_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_authLinks_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74284);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);
/* __next_internal_client_entry_do_not_use__ default auto */ 




function AuthLinks() {
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            status === "unauthenticated" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: "/login",
                className: (_authLinks_module_css__WEBPACK_IMPORTED_MODULE_4___default().link),
                children: "Login"
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/write",
                        className: (_authLinks_module_css__WEBPACK_IMPORTED_MODULE_4___default().link),
                        children: "Write"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: (_authLinks_module_css__WEBPACK_IMPORTED_MODULE_4___default().link),
                        onClick: next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signOut,
                        children: "Logout"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_authLinks_module_css__WEBPACK_IMPORTED_MODULE_4___default().burger),
                onClick: ()=>setOpen(!open),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_authLinks_module_css__WEBPACK_IMPORTED_MODULE_4___default().line)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_authLinks_module_css__WEBPACK_IMPORTED_MODULE_4___default().line)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_authLinks_module_css__WEBPACK_IMPORTED_MODULE_4___default().line)
                    })
                ]
            }),
            open && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_authLinks_module_css__WEBPACK_IMPORTED_MODULE_4___default().responsiveMenu),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/",
                        children: "Homepage"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/",
                        children: "About"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/",
                        children: "Contact"
                    }),
                    status === "notauthenticated" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/login",
                        children: "Login"
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "/write",
                                children: "Write"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: (_authLinks_module_css__WEBPACK_IMPORTED_MODULE_4___default().link),
                                children: "Logout"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 56107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ThemeToogle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _themeToggle_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81490);
/* harmony import */ var _themeToggle_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_themeToggle_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_ThemeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24883);
/* __next_internal_client_entry_do_not_use__ default auto */ 




function ThemeToogle() {
    const { toggle, theme } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_ThemeContext__WEBPACK_IMPORTED_MODULE_3__.ThemeContext);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_themeToggle_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),
        onClick: toggle,
        style: theme === "dark" ? {
            backgroundColor: "white"
        } : {
            backgroundColor: "#0f172a"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                src: "/moon.png",
                alt: "",
                width: 14,
                height: 14
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_themeToggle_module_css__WEBPACK_IMPORTED_MODULE_4___default().ball),
                style: theme === "dark" ? {
                    left: 1,
                    background: "#0f172a"
                } : {
                    right: 1,
                    background: "white"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                src: "/sun.png",
                alt: "",
                width: 14,
                height: 14
            })
        ]
    });
}


/***/ }),

/***/ 24883:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeContext: () => (/* binding */ ThemeContext),
/* harmony export */   ThemeContextProvider: () => (/* binding */ ThemeContextProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ ThemeContext,ThemeContextProvider auto */ 

const ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const getFromLocalStorage = ()=>{
    if (false) {}
};
const ThemeContextProvider = ({ children })=>{
    const [theme, setTheme] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>{
        return getFromLocalStorage();
    });
    const toggle = ()=>{
        setTheme(theme === "light" ? "dark" : "light");
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        localStorage.setItem("theme", theme);
    }, [
        theme
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ThemeContext.Provider, {
        value: {
            theme,
            toggle
        },
        children: children
    });
};


/***/ }),

/***/ 5694:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AuthProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74284);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ default auto */ 

function AuthProvider({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_auth_react__WEBPACK_IMPORTED_MODULE_1__.SessionProvider, {
        children: children
    });
}


/***/ }),

/***/ 8438:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ThemeProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_ThemeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24883);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 


function ThemeProvider({ children }) {
    const { theme } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_ThemeContext__WEBPACK_IMPORTED_MODULE_1__.ThemeContext);
    const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setMounted(true);
    }, []);
    if (mounted) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: theme,
            children: children
        });
    }
}


/***/ }),

/***/ 16450:
/***/ ((module) => {

// Exports
module.exports = {
	"link": "authLinks_link__yirEv",
	"burger": "authLinks_burger__pRjeS",
	"line": "authLinks_line__hpTU5",
	"responsiveMenu": "authLinks_responsiveMenu__nnHTP"
};


/***/ }),

/***/ 13650:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "footer_container__cL_uA",
	"info": "footer_info__uKSJc",
	"logo": "footer_logo__pe9i3",
	"logoText": "footer_logoText__QUSlJ",
	"desc": "footer_desc__4TFpC",
	"icons": "footer_icons__owG1o",
	"links": "footer_links__t81SU",
	"list": "footer_list__TA6Rj",
	"listTitle": "footer_listTitle__wUBPu"
};


/***/ }),

/***/ 87598:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "navbar_container__CZncu",
	"social": "navbar_social__Zhp3T",
	"logo": "navbar_logo__uZP7g",
	"links": "navbar_links__zwFDW",
	"link": "navbar_link__AyfKG"
};


/***/ }),

/***/ 81490:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "themeToggle_container__qFM4I",
	"ball": "themeToggle_ball__I_org"
};


/***/ }),

/***/ 33950:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src/app/layout.js","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var layout_js_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(67647);
var layout_js_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(layout_js_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./src/components/navbar/navbar.module.css
var navbar_module = __webpack_require__(87598);
var navbar_module_default = /*#__PURE__*/__webpack_require__.n(navbar_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(14178);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(25124);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./src/components/themeToggle/ThemeToogle.jsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/dhanukesharwani/Desktop/blogApp/src/components/themeToggle/ThemeToogle.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const ThemeToogle = (__default__);
;// CONCATENATED MODULE: ./src/components/authLinks/AuthLinks.jsx

const AuthLinks_proxy = (0,module_proxy.createProxy)(String.raw`/Users/dhanukesharwani/Desktop/blogApp/src/components/authLinks/AuthLinks.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: AuthLinks_esModule, $$typeof: AuthLinks_$$typeof } = AuthLinks_proxy;
const AuthLinks_default_ = AuthLinks_proxy.default;


/* harmony default export */ const AuthLinks = (AuthLinks_default_);
;// CONCATENATED MODULE: ./src/components/navbar/Navbar.jsx






function Navbar() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (navbar_module_default()).container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (navbar_module_default()).social,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: "/facebook.png",
                        alt: "facebook",
                        width: 24,
                        height: 24
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: "/instagram.png",
                        alt: "instagram",
                        width: 24,
                        height: 24
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: "/youtube.png",
                        alt: "youtube",
                        width: 24,
                        height: 24
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (navbar_module_default()).logo,
                children: "BlogSpot"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (navbar_module_default()).links,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(ThemeToogle, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        className: (navbar_module_default()).link,
                        children: "Homepage"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        className: (navbar_module_default()).link,
                        children: "Contact"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        className: (navbar_module_default()).link,
                        children: "About"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(AuthLinks, {})
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(5023);
// EXTERNAL MODULE: ./src/components/footer/footer.module.css
var footer_module = __webpack_require__(13650);
var footer_module_default = /*#__PURE__*/__webpack_require__.n(footer_module);
;// CONCATENATED MODULE: ./src/components/footer/Footer.jsx




function Footer() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (footer_module_default()).container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (footer_module_default()).info,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (footer_module_default()).logo,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "/logo.png",
                                alt: "lama blog",
                                width: 50,
                                height: 50
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: (footer_module_default()).logoText,
                                children: "BlogSpot"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (footer_module_default()).desc,
                        children: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim necessitatibus similique aspernatur obcaecati veritatis. Aperiam cum porro sequi, totam minima consequuntur, aspernatur deleniti vero repellendus dorales."
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (footer_module_default()).icons,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "/facebook.png",
                                alt: "",
                                width: 18,
                                height: 18
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "/instagram.png",
                                alt: "",
                                width: 18,
                                height: 18
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "/youtube.png",
                                alt: "",
                                width: 18,
                                height: 18
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (footer_module_default()).links,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (footer_module_default()).list,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: (footer_module_default()).listTitle,
                                children: "Links"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: "Homepage"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: "Blog"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: "About"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: "Contact"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (footer_module_default()).list,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: (footer_module_default()).listTitle,
                                children: "Tags"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: "Style"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: "Fashion"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: "Coding"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: "Travel"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (footer_module_default()).list,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: (footer_module_default()).listTitle,
                                children: "Social"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: "Facebook"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: "Instagram"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: "Youtube"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/context/ThemeContext.jsx

const ThemeContext_proxy = (0,module_proxy.createProxy)(String.raw`/Users/dhanukesharwani/Desktop/blogApp/src/context/ThemeContext.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: ThemeContext_esModule, $$typeof: ThemeContext_$$typeof } = ThemeContext_proxy;
const ThemeContext_default_ = ThemeContext_proxy.default;

const e0 = ThemeContext_proxy["ThemeContext"];

const e1 = ThemeContext_proxy["ThemeContextProvider"];

;// CONCATENATED MODULE: ./src/providers/ThemeProvider.jsx

const ThemeProvider_proxy = (0,module_proxy.createProxy)(String.raw`/Users/dhanukesharwani/Desktop/blogApp/src/providers/ThemeProvider.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: ThemeProvider_esModule, $$typeof: ThemeProvider_$$typeof } = ThemeProvider_proxy;
const ThemeProvider_default_ = ThemeProvider_proxy.default;


/* harmony default export */ const ThemeProvider = (ThemeProvider_default_);
;// CONCATENATED MODULE: ./src/providers/AuthProvider.jsx

const AuthProvider_proxy = (0,module_proxy.createProxy)(String.raw`/Users/dhanukesharwani/Desktop/blogApp/src/providers/AuthProvider.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: AuthProvider_esModule, $$typeof: AuthProvider_$$typeof } = AuthProvider_proxy;
const AuthProvider_default_ = AuthProvider_proxy.default;


/* harmony default export */ const AuthProvider = (AuthProvider_default_);
;// CONCATENATED MODULE: ./src/app/layout.js








const metadata = {
    title: "Blog App",
    description: "The best blog app!"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            className: (layout_js_import_Inter_arguments_subsets_latin_variableName_inter_default()).className,
            children: /*#__PURE__*/ jsx_runtime_.jsx(AuthProvider, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(e1, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(ThemeProvider, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "wrapper",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
                                    children,
                                    /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
                                ]
                            })
                        })
                    })
                })
            })
        })
    });
}


/***/ }),

/***/ 73881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80085);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"16x16"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 5023:
/***/ (() => {



/***/ })

};
;