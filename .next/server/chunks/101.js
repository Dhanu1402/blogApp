"use strict";
exports.id = 101;
exports.ids = [101];
exports.modules = {

/***/ 94612:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const { PrismaClientKnownRequestError, PrismaClientUnknownRequestError, PrismaClientRustPanicError, PrismaClientInitializationError, PrismaClientValidationError, NotFoundError, getPrismaClient, sqltag, empty, join, raw, Decimal, Debug, objectEnumValues, makeStrictEnum, Extensions, warnOnce, defineDmmfProperty, Public } = __webpack_require__(25664);
const Prisma = {};
exports.Prisma = Prisma;
exports.$Enums = {};
/**
 * Prisma Client JS version: 5.3.1
 * Query Engine version: 61e140623197a131c2a6189271ffee05a7aa9a59
 */ Prisma.prismaVersion = {
    client: "5.3.1",
    engine: "61e140623197a131c2a6189271ffee05a7aa9a59"
};
Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError;
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError;
Prisma.PrismaClientInitializationError = PrismaClientInitializationError;
Prisma.PrismaClientValidationError = PrismaClientValidationError;
Prisma.NotFoundError = NotFoundError;
Prisma.Decimal = Decimal;
/**
 * Re-export of sql-template-tag
 */ Prisma.sql = sqltag;
Prisma.empty = empty;
Prisma.join = join;
Prisma.raw = raw;
Prisma.validator = Public.validator;
/**
* Extensions
*/ Prisma.getExtensionContext = Extensions.getExtensionContext;
Prisma.defineExtension = Extensions.defineExtension;
/**
 * Shorthand utilities for JSON filtering
 */ Prisma.DbNull = objectEnumValues.instances.DbNull;
Prisma.JsonNull = objectEnumValues.instances.JsonNull;
Prisma.AnyNull = objectEnumValues.instances.AnyNull;
Prisma.NullTypes = {
    DbNull: objectEnumValues.classes.DbNull,
    JsonNull: objectEnumValues.classes.JsonNull,
    AnyNull: objectEnumValues.classes.AnyNull
};
const path = __webpack_require__(71017);
/**
 * Enums
 */ exports.Prisma.AccountScalarFieldEnum = {
    id: "id",
    userId: "userId",
    type: "type",
    provider: "provider",
    providerAccountId: "providerAccountId",
    refresh_token: "refresh_token",
    access_token: "access_token",
    expires_at: "expires_at",
    token_type: "token_type",
    scope: "scope",
    id_token: "id_token",
    session_state: "session_state"
};
exports.Prisma.SessionScalarFieldEnum = {
    id: "id",
    sessionToken: "sessionToken",
    userId: "userId",
    expires: "expires"
};
exports.Prisma.UserScalarFieldEnum = {
    id: "id",
    name: "name",
    email: "email",
    emailVerified: "emailVerified",
    image: "image"
};
exports.Prisma.VerificationTokenScalarFieldEnum = {
    identifier: "identifier",
    token: "token",
    expires: "expires"
};
exports.Prisma.CategoryScalarFieldEnum = {
    id: "id",
    slug: "slug",
    title: "title",
    img: "img"
};
exports.Prisma.PostScalarFieldEnum = {
    id: "id",
    createdAt: "createdAt",
    slug: "slug",
    title: "title",
    desc: "desc",
    img: "img",
    views: "views",
    catSlug: "catSlug",
    userEmail: "userEmail"
};
exports.Prisma.CommentScalarFieldEnum = {
    id: "id",
    createdAt: "createdAt",
    desc: "desc",
    userEmail: "userEmail",
    postSlug: "postSlug"
};
exports.Prisma.SortOrder = {
    asc: "asc",
    desc: "desc"
};
exports.Prisma.QueryMode = {
    default: "default",
    insensitive: "insensitive"
};
exports.Prisma.ModelName = {
    Account: "Account",
    Session: "Session",
    User: "User",
    VerificationToken: "VerificationToken",
    Category: "Category",
    Post: "Post",
    Comment: "Comment"
};
/**
 * Create the Client
 */ const config = {
    "generator": {
        "name": "client",
        "provider": {
            "fromEnvVar": null,
            "value": "prisma-client-js"
        },
        "output": {
            "value": "/Users/dhanukesharwani/Desktop/blogApp/prisma/generated/client",
            "fromEnvVar": null
        },
        "config": {
            "engineType": "library"
        },
        "binaryTargets": [
            {
                "fromEnvVar": null,
                "value": "darwin-arm64",
                "native": true
            }
        ],
        "previewFeatures": [],
        "isCustomOutput": true
    },
    "relativeEnvPaths": {
        "rootEnvPath": "../../../.env",
        "schemaEnvPath": "../../../.env"
    },
    "relativePath": "../..",
    "clientVersion": "5.3.1",
    "engineVersion": "61e140623197a131c2a6189271ffee05a7aa9a59",
    "datasourceNames": [
        "db"
    ],
    "activeProvider": "mongodb",
    "postinstall": false,
    "inlineDatasources": {
        "db": {
            "url": {
                "fromEnvVar": "DATABASE_URL",
                "value": null
            }
        }
    },
    "inlineSchema": "Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICIuL2dlbmVyYXRlZC9jbGllbnQiCn0KCmRhdGFzb3VyY2UgZGIgewogIHByb3ZpZGVyID0gIm1vbmdvZGIiCiAgdXJsICAgICAgPSBlbnYoIkRBVEFCQVNFX1VSTCIpCn0KCm1vZGVsIEFjY291bnQgewogIGlkICAgICAgICAgICAgICAgIFN0cmluZyAgQGlkIEBkZWZhdWx0KGN1aWQoKSkgQG1hcCgiX2lkIikKICB1c2VySWQgICAgICAgICAgICBTdHJpbmcKICB0eXBlICAgICAgICAgICAgICBTdHJpbmcKICBwcm92aWRlciAgICAgICAgICBTdHJpbmcKICBwcm92aWRlckFjY291bnRJZCBTdHJpbmcKICByZWZyZXNoX3Rva2VuICAgICBTdHJpbmc/CiAgYWNjZXNzX3Rva2VuICAgICAgU3RyaW5nPwogIGV4cGlyZXNfYXQgICAgICAgIEludD8KICB0b2tlbl90eXBlICAgICAgICBTdHJpbmc/CiAgc2NvcGUgICAgICAgICAgICAgU3RyaW5nPwogIGlkX3Rva2VuICAgICAgICAgIFN0cmluZz8KICBzZXNzaW9uX3N0YXRlICAgICBTdHJpbmc/CgogIHVzZXIgVXNlciBAcmVsYXRpb24oZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUpCgogIEBAdW5pcXVlKFtwcm92aWRlciwgcHJvdmlkZXJBY2NvdW50SWRdKQp9Cgptb2RlbCBTZXNzaW9uIHsKICBpZCAgICAgICAgICAgU3RyaW5nICAgQGlkIEBkZWZhdWx0KGN1aWQoKSkgQG1hcCgiX2lkIikKICBzZXNzaW9uVG9rZW4gU3RyaW5nICAgQHVuaXF1ZQogIHVzZXJJZCAgICAgICBTdHJpbmcKICBleHBpcmVzICAgICAgRGF0ZVRpbWUKICB1c2VyICAgICAgICAgVXNlciAgICAgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlKQp9Cgptb2RlbCBVc2VyIHsKICBpZCAgICAgICAgICAgIFN0cmluZyAgICBAaWQgQGRlZmF1bHQoY3VpZCgpKSBAbWFwKCJfaWQiKQogIG5hbWUgICAgICAgICAgU3RyaW5nPwogIGVtYWlsICAgICAgICAgU3RyaW5nICAgIEB1bmlxdWUKICBlbWFpbFZlcmlmaWVkIERhdGVUaW1lPwogIGltYWdlICAgICAgICAgU3RyaW5nPwogIGFjY291bnRzICAgICAgQWNjb3VudFtdCiAgc2Vzc2lvbnMgICAgICBTZXNzaW9uW10KICBQb3N0ICAgICAgICAgIFBvc3RbXQogIENvbW1lbnQgICAgICAgQ29tbWVudFtdCn0KCm1vZGVsIFZlcmlmaWNhdGlvblRva2VuIHsKICBpZGVudGlmaWVyIFN0cmluZyAgIEBpZCBAbWFwKCJfaWQiKQogIHRva2VuICAgICAgU3RyaW5nICAgQHVuaXF1ZQogIGV4cGlyZXMgICAgRGF0ZVRpbWUKCiAgQEB1bmlxdWUoW2lkZW50aWZpZXIsIHRva2VuXSkKfQoKbW9kZWwgQ2F0ZWdvcnkgewogIGlkICAgIFN0cmluZyAgQGlkIEBkZWZhdWx0KGN1aWQoKSkgQG1hcCgiX2lkIikKICBzbHVnICBTdHJpbmcgIEB1bmlxdWUKICB0aXRsZSBTdHJpbmcKICBpbWcgICBTdHJpbmc/CiAgUG9zdHMgUG9zdFtdCn0KCm1vZGVsIFBvc3QgewogIGlkICAgICAgICBTdHJpbmcgICAgQGlkIEBkZWZhdWx0KGN1aWQoKSkgQG1hcCgiX2lkIikKICBjcmVhdGVkQXQgRGF0ZVRpbWUgIEBkZWZhdWx0KG5vdygpKQogIHNsdWcgICAgICBTdHJpbmcgICAgQHVuaXF1ZQogIHRpdGxlICAgICBTdHJpbmcKICBkZXNjICAgICAgU3RyaW5nCiAgaW1nICAgICAgIFN0cmluZz8KICB2aWV3cyAgICAgSW50ICAgICAgIEBkZWZhdWx0KDApCiAgY2F0U2x1ZyAgIFN0cmluZwogIGNhdCAgICAgICBDYXRlZ29yeSAgQHJlbGF0aW9uKGZpZWxkczogW2NhdFNsdWddLCByZWZlcmVuY2VzOiBbc2x1Z10pCiAgdXNlckVtYWlsIFN0cmluZwogIHVzZXIgICAgICBVc2VyICAgICAgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJFbWFpbF0sIHJlZmVyZW5jZXM6IFtlbWFpbF0pCiAgY29tbWVudHMgIENvbW1lbnRbXQp9Cgptb2RlbCBDb21tZW50IHsKICBpZCAgICAgICAgU3RyaW5nICAgQGlkIEBkZWZhdWx0KGN1aWQoKSkgQG1hcCgiX2lkIikKICBjcmVhdGVkQXQgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpCiAgZGVzYyAgICAgIFN0cmluZwogIHVzZXJFbWFpbCBTdHJpbmcKICB1c2VyICAgICAgVXNlciAgICAgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJFbWFpbF0sIHJlZmVyZW5jZXM6IFtlbWFpbF0pCiAgcG9zdFNsdWcgIFN0cmluZwogIHBvc3QgICAgICBQb3N0ICAgICBAcmVsYXRpb24oZmllbGRzOiBbcG9zdFNsdWddLCByZWZlcmVuY2VzOiBbc2x1Z10pCn0=",
    "inlineSchemaHash": "7bb14fde4804214ac53f4f801af2c24ed6efd45cba2dbefd749bae0f379358f0",
    "noEngine": false
};
const fs = __webpack_require__(57147);
config.dirname = __dirname;
if (!fs.existsSync(path.join(__dirname, "schema.prisma"))) {
    const alternativePaths = [
        "prisma/generated/client",
        "generated/client"
    ];
    const alternativePath = alternativePaths.find((altPath)=>{
        return fs.existsSync(path.join(process.cwd(), altPath, "schema.prisma"));
    }) ?? alternativePaths[0];
    config.dirname = path.join(process.cwd(), alternativePath);
    config.isBundled = true;
}
config.runtimeDataModel = JSON.parse('{"models":{"Account":{"dbName":null,"fields":[{"name":"id","dbName":"_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"cuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"userId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"type","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"provider","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"providerAccountId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"refresh_token","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"access_token","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"expires_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"token_type","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"scope","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"id_token","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"session_state","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"user","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"User","relationName":"AccountToUser","relationFromFields":["userId"],"relationToFields":["id"],"relationOnDelete":"Cascade","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[["provider","providerAccountId"]],"uniqueIndexes":[{"name":null,"fields":["provider","providerAccountId"]}],"isGenerated":false},"Session":{"dbName":null,"fields":[{"name":"id","dbName":"_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"cuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"sessionToken","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"userId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"expires","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"user","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"User","relationName":"SessionToUser","relationFromFields":["userId"],"relationToFields":["id"],"relationOnDelete":"Cascade","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"User":{"dbName":null,"fields":[{"name":"id","dbName":"_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"cuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"email","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"emailVerified","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"image","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"accounts","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Account","relationName":"AccountToUser","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"sessions","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Session","relationName":"SessionToUser","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"Post","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Post","relationName":"PostToUser","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"Comment","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Comment","relationName":"CommentToUser","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"VerificationToken":{"dbName":null,"fields":[{"name":"identifier","dbName":"_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"token","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"expires","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[["identifier","token"]],"uniqueIndexes":[{"name":null,"fields":["identifier","token"]}],"isGenerated":false},"Category":{"dbName":null,"fields":[{"name":"id","dbName":"_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"cuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"slug","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"title","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"img","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"Posts","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Post","relationName":"CategoryToPost","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Post":{"dbName":null,"fields":[{"name":"id","dbName":"_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"cuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"slug","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"title","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"desc","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"img","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"views","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":0,"isGenerated":false,"isUpdatedAt":false},{"name":"catSlug","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"cat","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Category","relationName":"CategoryToPost","relationFromFields":["catSlug"],"relationToFields":["slug"],"isGenerated":false,"isUpdatedAt":false},{"name":"userEmail","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"user","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"User","relationName":"PostToUser","relationFromFields":["userEmail"],"relationToFields":["email"],"isGenerated":false,"isUpdatedAt":false},{"name":"comments","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Comment","relationName":"CommentToPost","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Comment":{"dbName":null,"fields":[{"name":"id","dbName":"_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"cuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"desc","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"userEmail","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"user","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"User","relationName":"CommentToUser","relationFromFields":["userEmail"],"relationToFields":["email"],"isGenerated":false,"isUpdatedAt":false},{"name":"postSlug","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"post","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Post","relationName":"CommentToPost","relationFromFields":["postSlug"],"relationToFields":["slug"],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}},"enums":{},"types":{}}');
defineDmmfProperty(exports.Prisma, config.runtimeDataModel);
const { warnEnvConflicts } = __webpack_require__(25664);
warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
});
const PrismaClient = getPrismaClient(config);
exports.PrismaClient = PrismaClient;
Object.assign(exports, Prisma);
// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-darwin-arm64.dylib.node");
path.join(process.cwd(), "prisma/generated/client/libquery_engine-darwin-arm64.dylib.node");
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/generated/client/schema.prisma");


/***/ }),

/***/ 25664:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var Fl = Object.create;
var yr = Object.defineProperty;
var kl = Object.getOwnPropertyDescriptor;
var Ol = Object.getOwnPropertyNames;
var Dl = Object.getPrototypeOf, _l = Object.prototype.hasOwnProperty;
var q = (e1, t1)=>()=>(t1 || e1((t1 = {
            exports: {}
        }).exports, t1), t1.exports), Rt = (e1, t1)=>{
    for(var r1 in t1)yr(e1, r1, {
        get: t1[r1],
        enumerable: !0
    });
}, Gi = (e1, t1, r1, n1)=>{
    if (t1 && typeof t1 == "object" || typeof t1 == "function") for (let i1 of Ol(t1))!_l.call(e1, i1) && i1 !== r1 && yr(e1, i1, {
        get: ()=>t1[i1],
        enumerable: !(n1 = kl(t1, i1)) || n1.enumerable
    });
    return e1;
};
var S = (e1, t1, r1)=>(r1 = e1 != null ? Fl(Dl(e1)) : {}, Gi(t1 || !e1 || !e1.__esModule ? yr(r1, "default", {
        value: e1,
        enumerable: !0
    }) : r1, e1)), Nl = (e1)=>Gi(yr({}, "__esModule", {
        value: !0
    }), e1);
var no = q((om1, ro1)=>{
    "use strict";
    var tt1 = 1e3, rt1 = tt1 * 60, nt1 = rt1 * 60, Ke1 = nt1 * 24, Ll1 = Ke1 * 7, $l1 = Ke1 * 365.25;
    ro1.exports = function(e1, t1) {
        t1 = t1 || {};
        var r1 = typeof e1;
        if (r1 === "string" && e1.length > 0) return ql1(e1);
        if (r1 === "number" && isFinite(e1)) return t1.long ? jl1(e1) : Vl1(e1);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e1));
    };
    function ql1(e1) {
        if (e1 = String(e1), !(e1.length > 100)) {
            var t1 = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e1);
            if (t1) {
                var r1 = parseFloat(t1[1]), n1 = (t1[2] || "ms").toLowerCase();
                switch(n1){
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                        return r1 * $l1;
                    case "weeks":
                    case "week":
                    case "w":
                        return r1 * Ll1;
                    case "days":
                    case "day":
                    case "d":
                        return r1 * Ke1;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                        return r1 * nt1;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                        return r1 * rt1;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                        return r1 * tt1;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                        return r1;
                    default:
                        return;
                }
            }
        }
    }
    function Vl1(e1) {
        var t1 = Math.abs(e1);
        return t1 >= Ke1 ? Math.round(e1 / Ke1) + "d" : t1 >= nt1 ? Math.round(e1 / nt1) + "h" : t1 >= rt1 ? Math.round(e1 / rt1) + "m" : t1 >= tt1 ? Math.round(e1 / tt1) + "s" : e1 + "ms";
    }
    function jl1(e1) {
        var t1 = Math.abs(e1);
        return t1 >= Ke1 ? xr1(e1, t1, Ke1, "day") : t1 >= nt1 ? xr1(e1, t1, nt1, "hour") : t1 >= rt1 ? xr1(e1, t1, rt1, "minute") : t1 >= tt1 ? xr1(e1, t1, tt1, "second") : e1 + " ms";
    }
    function xr1(e1, t1, r1, n1) {
        var i1 = t1 >= r1 * 1.5;
        return Math.round(e1 / r1) + " " + n1 + (i1 ? "s" : "");
    }
});
var Rn = q((sm1, io1)=>{
    "use strict";
    function Bl1(e1) {
        r1.debug = r1, r1.default = r1, r1.coerce = l1, r1.disable = o1, r1.enable = i1, r1.enabled = s1, r1.humanize = no(), r1.destroy = u1, Object.keys(e1).forEach((c1)=>{
            r1[c1] = e1[c1];
        }), r1.names = [], r1.skips = [], r1.formatters = {};
        function t1(c1) {
            let p1 = 0;
            for(let d1 = 0; d1 < c1.length; d1++)p1 = (p1 << 5) - p1 + c1.charCodeAt(d1), p1 |= 0;
            return r1.colors[Math.abs(p1) % r1.colors.length];
        }
        r1.selectColor = t1;
        function r1(c1) {
            let p1, d1 = null, f1, y1;
            function g1(...P1) {
                if (!g1.enabled) return;
                let T1 = g1, C1 = Number(new Date), x1 = C1 - (p1 || C1);
                T1.diff = x1, T1.prev = p1, T1.curr = C1, p1 = C1, P1[0] = r1.coerce(P1[0]), typeof P1[0] != "string" && P1.unshift("%O");
                let R1 = 0;
                P1[0] = P1[0].replace(/%([a-zA-Z%])/g, (G1, Ue1)=>{
                    if (G1 === "%%") return "%";
                    R1++;
                    let $1 = r1.formatters[Ue1];
                    if (typeof $1 == "function") {
                        let z1 = P1[R1];
                        G1 = $1.call(T1, z1), P1.splice(R1, 1), R1--;
                    }
                    return G1;
                }), r1.formatArgs.call(T1, P1), (T1.log || r1.log).apply(T1, P1);
            }
            return g1.namespace = c1, g1.useColors = r1.useColors(), g1.color = r1.selectColor(c1), g1.extend = n1, g1.destroy = r1.destroy, Object.defineProperty(g1, "enabled", {
                enumerable: !0,
                configurable: !1,
                get: ()=>d1 !== null ? d1 : (f1 !== r1.namespaces && (f1 = r1.namespaces, y1 = r1.enabled(c1)), y1),
                set: (P1)=>{
                    d1 = P1;
                }
            }), typeof r1.init == "function" && r1.init(g1), g1;
        }
        function n1(c1, p1) {
            let d1 = r1(this.namespace + (typeof p1 > "u" ? ":" : p1) + c1);
            return d1.log = this.log, d1;
        }
        function i1(c1) {
            r1.save(c1), r1.namespaces = c1, r1.names = [], r1.skips = [];
            let p1, d1 = (typeof c1 == "string" ? c1 : "").split(/[\s,]+/), f1 = d1.length;
            for(p1 = 0; p1 < f1; p1++)d1[p1] && (c1 = d1[p1].replace(/\*/g, ".*?"), c1[0] === "-" ? r1.skips.push(new RegExp("^" + c1.slice(1) + "$")) : r1.names.push(new RegExp("^" + c1 + "$")));
        }
        function o1() {
            let c1 = [
                ...r1.names.map(a1),
                ...r1.skips.map(a1).map((p1)=>"-" + p1)
            ].join(",");
            return r1.enable(""), c1;
        }
        function s1(c1) {
            if (c1[c1.length - 1] === "*") return !0;
            let p1, d1;
            for(p1 = 0, d1 = r1.skips.length; p1 < d1; p1++)if (r1.skips[p1].test(c1)) return !1;
            for(p1 = 0, d1 = r1.names.length; p1 < d1; p1++)if (r1.names[p1].test(c1)) return !0;
            return !1;
        }
        function a1(c1) {
            return c1.toString().substring(2, c1.toString().length - 2).replace(/\.\*\?$/, "*");
        }
        function l1(c1) {
            return c1 instanceof Error ? c1.stack || c1.message : c1;
        }
        function u1() {
            console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
        return r1.enable(r1.load()), r1;
    }
    io1.exports = Bl1;
});
var oo = q((le1, br1)=>{
    "use strict";
    le1.formatArgs = Kl1;
    le1.save = Ql1;
    le1.load = Jl1;
    le1.useColors = Ul1;
    le1.storage = Gl1();
    le1.destroy = (()=>{
        let e1 = !1;
        return ()=>{
            e1 || (e1 = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
        };
    })();
    le1.colors = [
        "#0000CC",
        "#0000FF",
        "#0033CC",
        "#0033FF",
        "#0066CC",
        "#0066FF",
        "#0099CC",
        "#0099FF",
        "#00CC00",
        "#00CC33",
        "#00CC66",
        "#00CC99",
        "#00CCCC",
        "#00CCFF",
        "#3300CC",
        "#3300FF",
        "#3333CC",
        "#3333FF",
        "#3366CC",
        "#3366FF",
        "#3399CC",
        "#3399FF",
        "#33CC00",
        "#33CC33",
        "#33CC66",
        "#33CC99",
        "#33CCCC",
        "#33CCFF",
        "#6600CC",
        "#6600FF",
        "#6633CC",
        "#6633FF",
        "#66CC00",
        "#66CC33",
        "#9900CC",
        "#9900FF",
        "#9933CC",
        "#9933FF",
        "#99CC00",
        "#99CC33",
        "#CC0000",
        "#CC0033",
        "#CC0066",
        "#CC0099",
        "#CC00CC",
        "#CC00FF",
        "#CC3300",
        "#CC3333",
        "#CC3366",
        "#CC3399",
        "#CC33CC",
        "#CC33FF",
        "#CC6600",
        "#CC6633",
        "#CC9900",
        "#CC9933",
        "#CCCC00",
        "#CCCC33",
        "#FF0000",
        "#FF0033",
        "#FF0066",
        "#FF0099",
        "#FF00CC",
        "#FF00FF",
        "#FF3300",
        "#FF3333",
        "#FF3366",
        "#FF3399",
        "#FF33CC",
        "#FF33FF",
        "#FF6600",
        "#FF6633",
        "#FF9900",
        "#FF9933",
        "#FFCC00",
        "#FFCC33"
    ];
    function Ul1() {
        return  false ? 0 : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance ||  false && (0) || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function Kl1(e1) {
        if (e1[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e1[0] + (this.useColors ? "%c " : " ") + "+" + br1.exports.humanize(this.diff), !this.useColors) return;
        let t1 = "color: " + this.color;
        e1.splice(1, 0, t1, "color: inherit");
        let r1 = 0, n1 = 0;
        e1[0].replace(/%[a-zA-Z%]/g, (i1)=>{
            i1 !== "%%" && (r1++, i1 === "%c" && (n1 = r1));
        }), e1.splice(n1, 0, t1);
    }
    le1.log = console.debug || console.log || (()=>{});
    function Ql1(e1) {
        try {
            e1 ? le1.storage.setItem("debug", e1) : le1.storage.removeItem("debug");
        } catch  {}
    }
    function Jl1() {
        let e1;
        try {
            e1 = le1.storage.getItem("debug");
        } catch  {}
        return !e1 && typeof process < "u" && "env" in process && (e1 = process.env.DEBUG), e1;
    }
    function Gl1() {
        try {
            return localStorage;
        } catch  {}
    }
    br1.exports = Rn()(le1);
    var { formatters: Hl1 } = br1.exports;
    Hl1.j = function(e1) {
        try {
            return JSON.stringify(e1);
        } catch (t1) {
            return "[UnexpectedJSONParseError]: " + t1.message;
        }
    };
});
var Mn = q((am1, so1)=>{
    "use strict";
    so1.exports = (e1, t1 = process.argv)=>{
        let r1 = e1.startsWith("-") ? "" : e1.length === 1 ? "-" : "--", n1 = t1.indexOf(r1 + e1), i1 = t1.indexOf("--");
        return n1 !== -1 && (i1 === -1 || n1 < i1);
    };
});
var Fn = q((lm1, lo1)=>{
    "use strict";
    var Wl1 = __webpack_require__(22037), ao1 = __webpack_require__(76224), de1 = Mn(), { env: B1 } = process, Fe1;
    de1("no-color") || de1("no-colors") || de1("color=false") || de1("color=never") ? Fe1 = 0 : (de1("color") || de1("colors") || de1("color=true") || de1("color=always")) && (Fe1 = 1);
    "FORCE_COLOR" in B1 && (B1.FORCE_COLOR === "true" ? Fe1 = 1 : B1.FORCE_COLOR === "false" ? Fe1 = 0 : Fe1 = B1.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(B1.FORCE_COLOR, 10), 3));
    function Sn1(e1) {
        return e1 === 0 ? !1 : {
            level: e1,
            hasBasic: !0,
            has256: e1 >= 2,
            has16m: e1 >= 3
        };
    }
    function In1(e1, t1) {
        if (Fe1 === 0) return 0;
        if (de1("color=16m") || de1("color=full") || de1("color=truecolor")) return 3;
        if (de1("color=256")) return 2;
        if (e1 && !t1 && Fe1 === void 0) return 0;
        let r1 = Fe1 || 0;
        if (B1.TERM === "dumb") return r1;
        if (process.platform === "win32") {
            let n1 = Wl1.release().split(".");
            return Number(n1[0]) >= 10 && Number(n1[2]) >= 10586 ? Number(n1[2]) >= 14931 ? 3 : 2 : 1;
        }
        if ("CI" in B1) return [
            "TRAVIS",
            "CIRCLECI",
            "APPVEYOR",
            "GITLAB_CI",
            "GITHUB_ACTIONS",
            "BUILDKITE"
        ].some((n1)=>n1 in B1) || B1.CI_NAME === "codeship" ? 1 : r1;
        if ("TEAMCITY_VERSION" in B1) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(B1.TEAMCITY_VERSION) ? 1 : 0;
        if (B1.COLORTERM === "truecolor") return 3;
        if ("TERM_PROGRAM" in B1) {
            let n1 = parseInt((B1.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
            switch(B1.TERM_PROGRAM){
                case "iTerm.app":
                    return n1 >= 3 ? 3 : 2;
                case "Apple_Terminal":
                    return 2;
            }
        }
        return /-256(color)?$/i.test(B1.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(B1.TERM) || "COLORTERM" in B1 ? 1 : r1;
    }
    function zl1(e1) {
        let t1 = In1(e1, e1 && e1.isTTY);
        return Sn1(t1);
    }
    lo1.exports = {
        supportsColor: zl1,
        stdout: Sn1(In1(!0, ao1.isatty(1))),
        stderr: Sn1(In1(!0, ao1.isatty(2)))
    };
});
var co = q((H1, wr1)=>{
    "use strict";
    var Yl1 = __webpack_require__(76224), Er1 = __webpack_require__(73837);
    H1.init = iu1;
    H1.log = tu1;
    H1.formatArgs = Xl1;
    H1.save = ru1;
    H1.load = nu1;
    H1.useColors = Zl1;
    H1.destroy = Er1.deprecate(()=>{}, "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    H1.colors = [
        6,
        2,
        3,
        4,
        5,
        1
    ];
    try {
        let e1 = Fn();
        e1 && (e1.stderr || e1).level >= 2 && (H1.colors = [
            20,
            21,
            26,
            27,
            32,
            33,
            38,
            39,
            40,
            41,
            42,
            43,
            44,
            45,
            56,
            57,
            62,
            63,
            68,
            69,
            74,
            75,
            76,
            77,
            78,
            79,
            80,
            81,
            92,
            93,
            98,
            99,
            112,
            113,
            128,
            129,
            134,
            135,
            148,
            149,
            160,
            161,
            162,
            163,
            164,
            165,
            166,
            167,
            168,
            169,
            170,
            171,
            172,
            173,
            178,
            179,
            184,
            185,
            196,
            197,
            198,
            199,
            200,
            201,
            202,
            203,
            204,
            205,
            206,
            207,
            208,
            209,
            214,
            215,
            220,
            221
        ]);
    } catch  {}
    H1.inspectOpts = Object.keys(process.env).filter((e1)=>/^debug_/i.test(e1)).reduce((e1, t1)=>{
        let r1 = t1.substring(6).toLowerCase().replace(/_([a-z])/g, (i1, o1)=>o1.toUpperCase()), n1 = process.env[t1];
        return /^(yes|on|true|enabled)$/i.test(n1) ? n1 = !0 : /^(no|off|false|disabled)$/i.test(n1) ? n1 = !1 : n1 === "null" ? n1 = null : n1 = Number(n1), e1[r1] = n1, e1;
    }, {});
    function Zl1() {
        return "colors" in H1.inspectOpts ? !!H1.inspectOpts.colors : Yl1.isatty(process.stderr.fd);
    }
    function Xl1(e1) {
        let { namespace: t1, useColors: r1 } = this;
        if (r1) {
            let n1 = this.color, i1 = "\x1b[3" + (n1 < 8 ? n1 : "8;5;" + n1), o1 = `  ${i1};1m${t1} \x1B[0m`;
            e1[0] = o1 + e1[0].split(`
`).join(`
` + o1), e1.push(i1 + "m+" + wr1.exports.humanize(this.diff) + "\x1b[0m");
        } else e1[0] = eu1() + t1 + " " + e1[0];
    }
    function eu1() {
        return H1.inspectOpts.hideDate ? "" : new Date().toISOString() + " ";
    }
    function tu1(...e1) {
        return process.stderr.write(Er1.format(...e1) + `
`);
    }
    function ru1(e1) {
        e1 ? process.env.DEBUG = e1 : delete process.env.DEBUG;
    }
    function nu1() {
        return process.env.DEBUG;
    }
    function iu1(e1) {
        e1.inspectOpts = {};
        let t1 = Object.keys(H1.inspectOpts);
        for(let r1 = 0; r1 < t1.length; r1++)e1.inspectOpts[t1[r1]] = H1.inspectOpts[t1[r1]];
    }
    wr1.exports = Rn()(H1);
    var { formatters: uo1 } = wr1.exports;
    uo1.o = function(e1) {
        return this.inspectOpts.colors = this.useColors, Er1.inspect(e1, this.inspectOpts).split(`
`).map((t1)=>t1.trim()).join(" ");
    };
    uo1.O = function(e1) {
        return this.inspectOpts.colors = this.useColors, Er1.inspect(e1, this.inspectOpts);
    };
});
var po = q((um1, kn1)=>{
    "use strict";
    typeof process > "u" || process.type === "renderer" || false === !0 || process.__nwjs ? kn1.exports = oo() : kn1.exports = co();
});
var vo = q((jm1, $n1)=>{
    "use strict";
    var A1 = $n1.exports;
    $n1.exports.default = A1;
    var I1 = "\x1b[", St1 = "\x1b]", st1 = "\x07", Ar1 = ";", Po1 = process.env.TERM_PROGRAM === "Apple_Terminal";
    A1.cursorTo = (e1, t1)=>{
        if (typeof e1 != "number") throw new TypeError("The `x` argument is required");
        return typeof t1 != "number" ? I1 + (e1 + 1) + "G" : I1 + (t1 + 1) + ";" + (e1 + 1) + "H";
    };
    A1.cursorMove = (e1, t1)=>{
        if (typeof e1 != "number") throw new TypeError("The `x` argument is required");
        let r1 = "";
        return e1 < 0 ? r1 += I1 + -e1 + "D" : e1 > 0 && (r1 += I1 + e1 + "C"), t1 < 0 ? r1 += I1 + -t1 + "A" : t1 > 0 && (r1 += I1 + t1 + "B"), r1;
    };
    A1.cursorUp = (e1 = 1)=>I1 + e1 + "A";
    A1.cursorDown = (e1 = 1)=>I1 + e1 + "B";
    A1.cursorForward = (e1 = 1)=>I1 + e1 + "C";
    A1.cursorBackward = (e1 = 1)=>I1 + e1 + "D";
    A1.cursorLeft = I1 + "G";
    A1.cursorSavePosition = Po1 ? "\x1b7" : I1 + "s";
    A1.cursorRestorePosition = Po1 ? "\x1b8" : I1 + "u";
    A1.cursorGetPosition = I1 + "6n";
    A1.cursorNextLine = I1 + "E";
    A1.cursorPrevLine = I1 + "F";
    A1.cursorHide = I1 + "?25l";
    A1.cursorShow = I1 + "?25h";
    A1.eraseLines = (e1)=>{
        let t1 = "";
        for(let r1 = 0; r1 < e1; r1++)t1 += A1.eraseLine + (r1 < e1 - 1 ? A1.cursorUp() : "");
        return e1 && (t1 += A1.cursorLeft), t1;
    };
    A1.eraseEndLine = I1 + "K";
    A1.eraseStartLine = I1 + "1K";
    A1.eraseLine = I1 + "2K";
    A1.eraseDown = I1 + "J";
    A1.eraseUp = I1 + "1J";
    A1.eraseScreen = I1 + "2J";
    A1.scrollUp = I1 + "S";
    A1.scrollDown = I1 + "T";
    A1.clearScreen = "\x1bc";
    A1.clearTerminal = process.platform === "win32" ? `${A1.eraseScreen}${I1}0f` : `${A1.eraseScreen}${I1}3J${I1}H`;
    A1.beep = st1;
    A1.link = (e1, t1)=>[
            St1,
            "8",
            Ar1,
            Ar1,
            t1,
            st1,
            e1,
            St1,
            "8",
            Ar1,
            Ar1,
            st1
        ].join("");
    A1.image = (e1, t1 = {})=>{
        let r1 = `${St1}1337;File=inline=1`;
        return t1.width && (r1 += `;width=${t1.width}`), t1.height && (r1 += `;height=${t1.height}`), t1.preserveAspectRatio === !1 && (r1 += ";preserveAspectRatio=0"), r1 + ":" + e1.toString("base64") + st1;
    };
    A1.iTerm = {
        setCwd: (e1 = process.cwd())=>`${St1}50;CurrentDir=${e1}${st1}`,
        annotation: (e1, t1 = {})=>{
            let r1 = `${St1}1337;`, n1 = typeof t1.x < "u", i1 = typeof t1.y < "u";
            if ((n1 || i1) && !(n1 && i1 && typeof t1.length < "u")) throw new Error("`x`, `y` and `length` must be defined when `x` or `y` is defined");
            return e1 = e1.replace(/\|/g, ""), r1 += t1.isHidden ? "AddHiddenAnnotation=" : "AddAnnotation=", t1.length > 0 ? r1 += (n1 ? [
                e1,
                t1.length,
                t1.x,
                t1.y
            ] : [
                t1.length,
                e1
            ]).join("|") : r1 += e1, r1 + st1;
        }
    };
});
var Ao = q((Bm1, Co1)=>{
    "use strict";
    var cu1 = Fn(), at1 = Mn();
    function To1(e1) {
        if (/^\d{3,4}$/.test(e1)) {
            let r1 = /(\d{1,2})(\d{2})/.exec(e1);
            return {
                major: 0,
                minor: parseInt(r1[1], 10),
                patch: parseInt(r1[2], 10)
            };
        }
        let t1 = (e1 || "").split(".").map((r1)=>parseInt(r1, 10));
        return {
            major: t1[0],
            minor: t1[1],
            patch: t1[2]
        };
    }
    function qn1(e1) {
        let { env: t1 } = process;
        if ("FORCE_HYPERLINK" in t1) return !(t1.FORCE_HYPERLINK.length > 0 && parseInt(t1.FORCE_HYPERLINK, 10) === 0);
        if (at1("no-hyperlink") || at1("no-hyperlinks") || at1("hyperlink=false") || at1("hyperlink=never")) return !1;
        if (at1("hyperlink=true") || at1("hyperlink=always") || "NETLIFY" in t1) return !0;
        if (!cu1.supportsColor(e1) || e1 && !e1.isTTY || process.platform === "win32" || "CI" in t1 || "TEAMCITY_VERSION" in t1) return !1;
        if ("TERM_PROGRAM" in t1) {
            let r1 = To1(t1.TERM_PROGRAM_VERSION);
            switch(t1.TERM_PROGRAM){
                case "iTerm.app":
                    return r1.major === 3 ? r1.minor >= 1 : r1.major > 3;
                case "WezTerm":
                    return r1.major >= 20200620;
                case "vscode":
                    return r1.major > 1 || r1.major === 1 && r1.minor >= 72;
            }
        }
        if ("VTE_VERSION" in t1) {
            if (t1.VTE_VERSION === "0.50.0") return !1;
            let r1 = To1(t1.VTE_VERSION);
            return r1.major > 0 || r1.minor >= 50;
        }
        return !1;
    }
    Co1.exports = {
        supportsHyperlink: qn1,
        stdout: qn1(process.stdout),
        stderr: qn1(process.stderr)
    };
});
var Mo = q((Um1, It1)=>{
    "use strict";
    var pu1 = vo(), Vn1 = Ao(), Ro1 = (e1, t1, { target: r1 = "stdout", ...n1 } = {})=>Vn1[r1] ? pu1.link(e1, t1) : n1.fallback === !1 ? e1 : typeof n1.fallback == "function" ? n1.fallback(e1, t1) : `${e1} (\u200B${t1}\u200B)`;
    It1.exports = (e1, t1, r1 = {})=>Ro1(e1, t1, r1);
    It1.exports.stderr = (e1, t1, r1 = {})=>Ro1(e1, t1, {
            target: "stderr",
            ...r1
        });
    It1.exports.isSupported = Vn1.stdout;
    It1.exports.stderr.isSupported = Vn1.stderr;
});
var $o = q((lf1, Au1)=>{
    Au1.exports = {
        name: "dotenv",
        version: "16.0.3",
        description: "Loads environment variables from .env file",
        main: "lib/main.js",
        types: "lib/main.d.ts",
        exports: {
            ".": {
                require: "./lib/main.js",
                types: "./lib/main.d.ts",
                default: "./lib/main.js"
            },
            "./config": "./config.js",
            "./config.js": "./config.js",
            "./lib/env-options": "./lib/env-options.js",
            "./lib/env-options.js": "./lib/env-options.js",
            "./lib/cli-options": "./lib/cli-options.js",
            "./lib/cli-options.js": "./lib/cli-options.js",
            "./package.json": "./package.json"
        },
        scripts: {
            "dts-check": "tsc --project tests/types/tsconfig.json",
            lint: "standard",
            "lint-readme": "standard-markdown",
            pretest: "npm run lint && npm run dts-check",
            test: "tap tests/*.js --100 -Rspec",
            prerelease: "npm test",
            release: "standard-version"
        },
        repository: {
            type: "git",
            url: "git://github.com/motdotla/dotenv.git"
        },
        keywords: [
            "dotenv",
            "env",
            ".env",
            "environment",
            "variables",
            "config",
            "settings"
        ],
        readmeFilename: "README.md",
        license: "BSD-2-Clause",
        devDependencies: {
            "@types/node": "^17.0.9",
            decache: "^4.6.1",
            dtslint: "^3.7.0",
            sinon: "^12.0.1",
            standard: "^16.0.4",
            "standard-markdown": "^7.1.0",
            "standard-version": "^9.3.2",
            tap: "^15.1.6",
            tar: "^6.1.11",
            typescript: "^4.5.4"
        },
        engines: {
            node: ">=12"
        }
    };
});
var Vo = q((uf1, Fr1)=>{
    "use strict";
    var Ru1 = __webpack_require__(57147), qo1 = __webpack_require__(71017), Mu1 = __webpack_require__(22037), Su1 = $o(), Iu1 = Su1.version, Fu1 = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;
    function ku1(e1) {
        let t1 = {}, r1 = e1.toString();
        r1 = r1.replace(/\r\n?/mg, `
`);
        let n1;
        for(; (n1 = Fu1.exec(r1)) != null;){
            let i1 = n1[1], o1 = n1[2] || "";
            o1 = o1.trim();
            let s1 = o1[0];
            o1 = o1.replace(/^(['"`])([\s\S]*)\1$/mg, "$2"), s1 === '"' && (o1 = o1.replace(/\\n/g, `
`), o1 = o1.replace(/\\r/g, "\r")), t1[i1] = o1;
        }
        return t1;
    }
    function Kn1(e1) {
        console.log(`[dotenv@${Iu1}][DEBUG] ${e1}`);
    }
    function Ou1(e1) {
        return e1[0] === "~" ? qo1.join(Mu1.homedir(), e1.slice(1)) : e1;
    }
    function Du1(e1) {
        let t1 = qo1.resolve(process.cwd(), ".env"), r1 = "utf8", n1 = !!(e1 && e1.debug), i1 = !!(e1 && e1.override);
        e1 && (e1.path != null && (t1 = Ou1(e1.path)), e1.encoding != null && (r1 = e1.encoding));
        try {
            let o1 = Ir1.parse(Ru1.readFileSync(t1, {
                encoding: r1
            }));
            return Object.keys(o1).forEach(function(s1) {
                Object.prototype.hasOwnProperty.call(process.env, s1) ? (i1 === !0 && (process.env[s1] = o1[s1]), n1 && Kn1(i1 === !0 ? `"${s1}" is already defined in \`process.env\` and WAS overwritten` : `"${s1}" is already defined in \`process.env\` and was NOT overwritten`)) : process.env[s1] = o1[s1];
            }), {
                parsed: o1
            };
        } catch (o1) {
            return n1 && Kn1(`Failed to load ${t1} ${o1.message}`), {
                error: o1
            };
        }
    }
    var Ir1 = {
        config: Du1,
        parse: ku1
    };
    Fr1.exports.config = Ir1.config;
    Fr1.exports.parse = Ir1.parse;
    Fr1.exports = Ir1;
});
var Jo = q((yf1, Qo1)=>{
    "use strict";
    Qo1.exports = (e1)=>{
        let t1 = e1.match(/^[ \t]*(?=\S)/gm);
        return t1 ? t1.reduce((r1, n1)=>Math.min(r1, n1.length), 1 / 0) : 0;
    };
});
var Ho = q((hf1, Go1)=>{
    "use strict";
    var $u1 = Jo();
    Go1.exports = (e1)=>{
        let t1 = $u1(e1);
        if (t1 === 0) return e1;
        let r1 = new RegExp(`^[ \\t]{${t1}}`, "gm");
        return e1.replace(r1, "");
    };
});
var Wo = q((xf1, qu1)=>{
    qu1.exports = {
        name: "@prisma/engines-version",
        version: "5.3.1-2.61e140623197a131c2a6189271ffee05a7aa9a59",
        main: "index.js",
        types: "index.d.ts",
        license: "Apache-2.0",
        author: "Tim Suchanek <suchanek@prisma.io>",
        prisma: {
            enginesVersion: "61e140623197a131c2a6189271ffee05a7aa9a59"
        },
        repository: {
            type: "git",
            url: "https://github.com/prisma/engines-wrapper.git",
            directory: "packages/engines-version"
        },
        devDependencies: {
            "@types/node": "18.17.15",
            typescript: "4.9.5"
        },
        files: [
            "index.js",
            "index.d.ts"
        ],
        scripts: {
            build: "tsc -d"
        }
    };
});
var Hn = q((Or1)=>{
    "use strict";
    Object.defineProperty(Or1, "__esModule", {
        value: !0
    });
    Or1.enginesVersion = void 0;
    Or1.enginesVersion = Wo().prisma.enginesVersion;
});
var Xn = q((Ff1, Zo1)=>{
    "use strict";
    Zo1.exports = (e1, t1 = 1, r1)=>{
        if (r1 = {
            indent: " ",
            includeEmptyLines: !1,
            ...r1
        }, typeof e1 != "string") throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e1}\``);
        if (typeof t1 != "number") throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof t1}\``);
        if (typeof r1.indent != "string") throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof r1.indent}\``);
        if (t1 === 0) return e1;
        let n1 = r1.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
        return e1.replace(n1, r1.indent.repeat(t1));
    };
});
var rs = q((Df1, ts1)=>{
    "use strict";
    ts1.exports = ({ onlyFirst: e1 = !1 } = {})=>{
        let t1 = [
            "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
            "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"
        ].join("|");
        return new RegExp(t1, e1 ? void 0 : "g");
    };
});
var ni = q((_f1, ns1)=>{
    "use strict";
    var Wu1 = rs();
    ns1.exports = (e1)=>typeof e1 == "string" ? e1.replace(Wu1(), "") : e1;
});
var is = q((Lf1, Dr1)=>{
    "use strict";
    Dr1.exports = (e1 = {})=>{
        let t1;
        if (e1.repoUrl) t1 = e1.repoUrl;
        else if (e1.user && e1.repo) t1 = `https://github.com/${e1.user}/${e1.repo}`;
        else throw new Error("You need to specify either the `repoUrl` option or both the `user` and `repo` options");
        let r1 = new URL(`${t1}/issues/new`), n1 = [
            "body",
            "title",
            "labels",
            "template",
            "milestone",
            "assignee",
            "projects"
        ];
        for (let i1 of n1){
            let o1 = e1[i1];
            if (o1 !== void 0) {
                if (i1 === "labels" || i1 === "projects") {
                    if (!Array.isArray(o1)) throw new TypeError(`The \`${i1}\` option should be an array`);
                    o1 = o1.join(",");
                }
                r1.searchParams.set(i1, o1);
            }
        }
        return r1.toString();
    };
    Dr1.exports.default = Dr1.exports;
});
var $i = q((iP1, La1)=>{
    "use strict";
    La1.exports = function() {
        function e1(t1, r1, n1, i1, o1) {
            return t1 < r1 || n1 < r1 ? t1 > n1 ? n1 + 1 : t1 + 1 : i1 === o1 ? r1 : r1 + 1;
        }
        return function(t1, r1) {
            if (t1 === r1) return 0;
            if (t1.length > r1.length) {
                var n1 = t1;
                t1 = r1, r1 = n1;
            }
            for(var i1 = t1.length, o1 = r1.length; i1 > 0 && t1.charCodeAt(i1 - 1) === r1.charCodeAt(o1 - 1);)i1--, o1--;
            for(var s1 = 0; s1 < i1 && t1.charCodeAt(s1) === r1.charCodeAt(s1);)s1++;
            if (i1 -= s1, o1 -= s1, i1 === 0 || o1 < 3) return o1;
            var a1 = 0, l1, u1, c1, p1, d1, f1, y1, g1, P1, T1, C1, x1, R1 = [];
            for(l1 = 0; l1 < i1; l1++)R1.push(l1 + 1), R1.push(t1.charCodeAt(s1 + l1));
            for(var ce1 = R1.length - 1; a1 < o1 - 3;)for(P1 = r1.charCodeAt(s1 + (u1 = a1)), T1 = r1.charCodeAt(s1 + (c1 = a1 + 1)), C1 = r1.charCodeAt(s1 + (p1 = a1 + 2)), x1 = r1.charCodeAt(s1 + (d1 = a1 + 3)), f1 = a1 += 4, l1 = 0; l1 < ce1; l1 += 2)y1 = R1[l1], g1 = R1[l1 + 1], u1 = e1(y1, u1, c1, P1, g1), c1 = e1(u1, c1, p1, T1, g1), p1 = e1(c1, p1, d1, C1, g1), f1 = e1(p1, d1, f1, x1, g1), R1[l1] = f1, d1 = p1, p1 = c1, c1 = u1, u1 = y1;
            for(; a1 < o1;)for(P1 = r1.charCodeAt(s1 + (u1 = a1)), f1 = ++a1, l1 = 0; l1 < ce1; l1 += 2)y1 = R1[l1], R1[l1] = f1 = e1(y1, u1, f1, P1, R1[l1 + 1]), u1 = y1;
            return f1;
        };
    }();
});
var Gd = {};
Rt(Gd, {
    DMMF: ()=>pe,
    DMMFClass: ()=>hr,
    Debug: ()=>On,
    Decimal: ()=>we,
    Extensions: ()=>vn,
    MetricsClient: ()=>pt,
    NotFoundError: ()=>Ce,
    PrismaClientInitializationError: ()=>k,
    PrismaClientKnownRequestError: ()=>U,
    PrismaClientRustPanicError: ()=>ue,
    PrismaClientUnknownRequestError: ()=>K,
    PrismaClientValidationError: ()=>X,
    Public: ()=>Tn,
    Sql: ()=>oe,
    Types: ()=>Cn,
    defineDmmfProperty: ()=>as,
    empty: ()=>us,
    getPrismaClient: ()=>Ml,
    join: ()=>ls,
    makeStrictEnum: ()=>Sl,
    objectEnumValues: ()=>$r,
    raw: ()=>li,
    sqltag: ()=>ui,
    warnEnvConflicts: ()=>Il,
    warnOnce: ()=>Lt
});
module.exports = Nl(Gd);
var vn = {};
Rt(vn, {
    defineExtension: ()=>Hi,
    getExtensionContext: ()=>Wi
});
function Hi(e1) {
    return typeof e1 == "function" ? e1 : (t1)=>t1.$extends(e1);
}
function Wi(e1) {
    return e1;
}
var Tn = {};
Rt(Tn, {
    validator: ()=>zi
});
function zi(...e1) {
    return (t1)=>t1;
}
var Cn = {};
Rt(Cn, {
    Extensions: ()=>Yi,
    Public: ()=>Zi,
    Result: ()=>Xi,
    Utils: ()=>eo
});
var Yi = {};
var Zi = {};
var Xi = {};
var eo = {};
var Ie = (e1, t1)=>{
    let r1 = {};
    for (let n1 of e1){
        let i1 = n1[t1];
        r1[i1] = n1;
    }
    return r1;
};
function to(e1) {
    return e1.substring(0, 1).toLowerCase() + e1.substring(1);
}
var hr = class {
    constructor(t1){
        this.document = t1;
        this.compositeNames = new Set(this.datamodel.types.map((r1)=>r1.name)), this.typeAndModelMap = this.buildTypeModelMap(), this.mappingsMap = this.buildMappingsMap(), this.outputTypeMap = this.buildMergedOutputTypeMap(), this.rootFieldMap = this.buildRootFieldMap(), this.inputTypesByName = this.buildInputTypesMap();
    }
    get datamodel() {
        return this.document.datamodel;
    }
    get mappings() {
        return this.document.mappings;
    }
    get schema() {
        return this.document.schema;
    }
    get inputObjectTypes() {
        return this.schema.inputObjectTypes;
    }
    get outputObjectTypes() {
        return this.schema.outputObjectTypes;
    }
    isComposite(t1) {
        return this.compositeNames.has(t1);
    }
    getOtherOperationNames() {
        return [
            Object.values(this.mappings.otherOperations.write),
            Object.values(this.mappings.otherOperations.read)
        ].flat();
    }
    hasEnumInNamespace(t1, r1) {
        return this.schema.enumTypes[r1]?.find((n1)=>n1.name === t1) !== void 0;
    }
    resolveInputObjectType(t1) {
        return this.inputTypesByName.get(An(t1.type, t1.namespace));
    }
    resolveOutputObjectType(t1) {
        if (t1.location === "outputObjectTypes") return this.outputObjectTypes[t1.namespace ?? "prisma"].find((r1)=>r1.name === t1.type);
    }
    buildModelMap() {
        return Ie(this.datamodel.models, "name");
    }
    buildTypeMap() {
        return Ie(this.datamodel.types, "name");
    }
    buildTypeModelMap() {
        return {
            ...this.buildTypeMap(),
            ...this.buildModelMap()
        };
    }
    buildMappingsMap() {
        return Ie(this.mappings.modelOperations, "model");
    }
    buildMergedOutputTypeMap() {
        return {
            model: Ie(this.schema.outputObjectTypes.model, "name"),
            prisma: Ie(this.schema.outputObjectTypes.prisma, "name")
        };
    }
    buildRootFieldMap() {
        return {
            ...Ie(this.outputTypeMap.prisma.Query.fields, "name"),
            ...Ie(this.outputTypeMap.prisma.Mutation.fields, "name")
        };
    }
    buildInputTypesMap() {
        let t1 = new Map;
        for (let r1 of this.inputObjectTypes.prisma)t1.set(An(r1.name, "prisma"), r1);
        if (!this.inputObjectTypes.model) return t1;
        for (let r1 of this.inputObjectTypes.model)t1.set(An(r1.name, "model"), r1);
        return t1;
    }
};
function An(e1, t1) {
    return t1 ? `${t1}.${e1}` : e1;
}
var pe;
((t1)=>{
    let e1;
    ((x1)=>(x1.findUnique = "findUnique", x1.findUniqueOrThrow = "findUniqueOrThrow", x1.findFirst = "findFirst", x1.findFirstOrThrow = "findFirstOrThrow", x1.findMany = "findMany", x1.create = "create", x1.createMany = "createMany", x1.update = "update", x1.updateMany = "updateMany", x1.upsert = "upsert", x1.delete = "delete", x1.deleteMany = "deleteMany", x1.groupBy = "groupBy", x1.count = "count", x1.aggregate = "aggregate", x1.findRaw = "findRaw", x1.aggregateRaw = "aggregateRaw"))(e1 = t1.ModelAction || (t1.ModelAction = {}));
})(pe || (pe = {}));
var Pr = S(po()), ou = 100, Mt = [];
typeof process < "u" && typeof process.stderr?.write != "function" && (Pr.default.log = console.debug ?? console.log);
function su(e1) {
    let t1 = (0, Pr.default)(e1), r1 = Object.assign((...n1)=>(t1.log = r1.log, n1.length !== 0 && Mt.push([
            e1,
            ...n1
        ]), Mt.length > ou && Mt.shift(), t1("", ...n1)), t1);
    return r1;
}
var On = Object.assign(su, Pr.default);
function mo(e1 = 7500) {
    let t1 = Mt.map((r1)=>r1.map((n1)=>typeof n1 == "string" ? n1 : JSON.stringify(n1)).join(" ")).join(`
`);
    return t1.length < e1 ? t1 : t1.slice(-e1);
}
function fo() {
    Mt.length = 0;
}
var D = On;
var Dn, go, yo, ho, xo = !0;
typeof process < "u" && ({ FORCE_COLOR: Dn, NODE_DISABLE_COLORS: go, NO_COLOR: yo, TERM: ho } = process.env || {}, xo = process.stdout && process.stdout.isTTY);
var au = {
    enabled: !go && yo == null && ho !== "dumb" && (Dn != null && Dn !== "0" || xo)
};
function _(e1, t1) {
    let r1 = new RegExp(`\\x1b\\[${t1}m`, "g"), n1 = `\x1B[${e1}m`, i1 = `\x1B[${t1}m`;
    return function(o1) {
        return !au.enabled || o1 == null ? o1 : n1 + (~("" + o1).indexOf(i1) ? o1.replace(r1, i1 + n1) : o1) + i1;
    };
}
var pm = _(0, 0), ne = _(1, 22), ke = _(2, 22), dm = _(3, 23), te = _(4, 24), mm = _(7, 27), fm = _(8, 28), gm = _(9, 29), ym = _(30, 39), me = _(31, 39), Qe = _(32, 39), he = _(33, 39), it = _(34, 39), hm = _(35, 39), Oe = _(36, 39), xm = _(37, 39), vr = _(90, 39), bm = _(90, 39), Em = _(40, 49), wm = _(41, 49), Pm = _(42, 49), vm = _(43, 49), Tm = _(44, 49), Cm = _(45, 49), Am = _(46, 49), Rm = _(47, 49);
var bo = S(__webpack_require__(57147));
function _n() {
    let e1 = process.env.PRISMA_QUERY_ENGINE_LIBRARY;
    if (!(e1 && bo.default.existsSync(e1)) && process.arch === "ia32") throw new Error('The default query engine type (Node-API, "library") is currently not supported for 32bit Node. Please set `engineType = "binary"` in the "generator" block of your "schema.prisma" file (or use the environment variables "PRISMA_CLIENT_ENGINE_TYPE=binary" and/or "PRISMA_CLI_QUERY_ENGINE_TYPE=binary".)');
}
var Tr = "libquery_engine";
function Nn(e1, t1) {
    let r1 = t1 === "url";
    return e1.includes("windows") ? r1 ? "query_engine.dll.node" : `query_engine-${e1}.dll.node` : e1.includes("darwin") ? r1 ? `${Tr}.dylib.node` : `${Tr}-${e1}.dylib.node` : r1 ? `${Tr}.so.node` : `${Tr}-${e1}.so.node`;
}
var ko = S(__webpack_require__(32081)), jn = S(__webpack_require__(73292)), Mr = S(__webpack_require__(22037));
var Cr = Symbol("@ts-pattern/matcher"), Eo = "@ts-pattern/anonymous-select-key", wo = function(e1) {
    return !!(e1 && typeof e1 == "object");
}, Ln = function(e1) {
    return e1 && !!e1[Cr];
}, lu = function e1(t1, r1, n1) {
    if (wo(t1)) {
        if (Ln(t1)) {
            var i1 = t1[Cr]().match(r1), o1 = i1.matched, s1 = i1.selections;
            return o1 && s1 && Object.keys(s1).forEach(function(l1) {
                return n1(l1, s1[l1]);
            }), o1;
        }
        if (!wo(r1)) return !1;
        if (Array.isArray(t1)) return !!Array.isArray(r1) && t1.length === r1.length && t1.every(function(l1, u1) {
            return e1(l1, r1[u1], n1);
        });
        if (t1 instanceof Map) return r1 instanceof Map && Array.from(t1.keys()).every(function(l1) {
            return e1(t1.get(l1), r1.get(l1), n1);
        });
        if (t1 instanceof Set) {
            if (!(r1 instanceof Set)) return !1;
            if (t1.size === 0) return r1.size === 0;
            if (t1.size === 1) {
                var a1 = Array.from(t1.values())[0];
                return Ln(a1) ? Array.from(r1.values()).every(function(l1) {
                    return e1(a1, l1, n1);
                }) : r1.has(a1);
            }
            return Array.from(t1.values()).every(function(l1) {
                return r1.has(l1);
            });
        }
        return Object.keys(t1).every(function(l1) {
            var u1, c1 = t1[l1];
            return (l1 in r1 || Ln(u1 = c1) && u1[Cr]().matcherType === "optional") && e1(c1, r1[l1], n1);
        });
    }
    return Object.is(r1, t1);
};
function Je(e1) {
    var t1;
    return (t1 = {})[Cr] = function() {
        return {
            match: function(r1) {
                return {
                    matched: !!e1(r1)
                };
            }
        };
    }, t1;
}
var Om = Je(function(e1) {
    return !0;
});
var Dm = Je(function(e1) {
    return typeof e1 == "string";
}), _m = Je(function(e1) {
    return typeof e1 == "number";
}), Nm = Je(function(e1) {
    return typeof e1 == "boolean";
}), Lm = Je(function(e1) {
    return typeof e1 == "bigint";
}), $m = Je(function(e1) {
    return typeof e1 == "symbol";
}), qm = Je(function(e1) {
    return e1 == null;
});
function ot(e1) {
    return new uu(e1, []);
}
var uu = function() {
    function e1(r1, n1) {
        this.value = void 0, this.cases = void 0, this.value = r1, this.cases = n1;
    }
    var t1 = e1.prototype;
    return t1.with = function() {
        var r1 = [].slice.call(arguments), n1 = r1[r1.length - 1], i1 = [
            r1[0]
        ], o1 = [];
        return r1.length === 3 && typeof r1[1] == "function" ? (i1.push(r1[0]), o1.push(r1[1])) : r1.length > 2 && i1.push.apply(i1, r1.slice(1, r1.length - 1)), new e1(this.value, this.cases.concat([
            {
                match: function(s1) {
                    var a1 = {}, l1 = !!(i1.some(function(u1) {
                        return lu(u1, s1, function(c1, p1) {
                            a1[c1] = p1;
                        });
                    }) && o1.every(function(u1) {
                        return u1(s1);
                    }));
                    return {
                        matched: l1,
                        value: l1 && Object.keys(a1).length ? Eo in a1 ? a1[Eo] : a1 : s1
                    };
                },
                handler: n1
            }
        ]));
    }, t1.when = function(r1, n1) {
        return new e1(this.value, this.cases.concat([
            {
                match: function(i1) {
                    return {
                        matched: !!r1(i1),
                        value: i1
                    };
                },
                handler: n1
            }
        ]));
    }, t1.otherwise = function(r1) {
        return new e1(this.value, this.cases.concat([
            {
                match: function(n1) {
                    return {
                        matched: !0,
                        value: n1
                    };
                },
                handler: r1
            }
        ])).run();
    }, t1.exhaustive = function() {
        return this.run();
    }, t1.run = function() {
        for(var r1 = this.value, n1 = void 0, i1 = 0; i1 < this.cases.length; i1++){
            var o1 = this.cases[i1], s1 = o1.match(this.value);
            if (s1.matched) {
                r1 = s1.value, n1 = o1.handler;
                break;
            }
        }
        if (!n1) {
            var a1;
            try {
                a1 = JSON.stringify(this.value);
            } catch  {
                a1 = this.value;
            }
            throw new Error("Pattern matching error: no pattern matches value " + a1);
        }
        return n1(r1, this.value);
    }, e1;
}();
var Oo = __webpack_require__(73837);
var So = S(Mo());
function Ft(e1) {
    return (0, So.default)(e1, e1, {
        fallback: te
    });
}
var du = {
    warn: he("prisma:warn")
}, mu = {
    warn: ()=>!process.env.PRISMA_DISABLE_WARNINGS
};
function kt(e1, ...t1) {
    mu.warn() && console.warn(`${du.warn} ${e1}`, ...t1);
}
var fu = (0, Oo.promisify)(ko.default.exec), ie = D("prisma:get-platform"), gu = [
    "1.0.x",
    "1.1.x",
    "3.0.x"
];
async function Do() {
    let e1 = Mr.default.platform(), t1 = process.arch;
    if (e1 === "freebsd") {
        let s1 = await Sr("freebsd-version");
        if (s1 && s1.trim().length > 0) {
            let l1 = /^(\d+)\.?/.exec(s1);
            if (l1) return {
                platform: "freebsd",
                targetDistro: `freebsd${l1[1]}`,
                arch: t1
            };
        }
    }
    if (e1 !== "linux") return {
        platform: e1,
        arch: t1
    };
    let r1 = await hu(), n1 = await Cu(), i1 = bu({
        arch: t1,
        archFromUname: n1,
        familyDistro: r1.familyDistro
    }), { libssl: o1 } = await Eu(i1);
    return {
        platform: "linux",
        libssl: o1,
        arch: t1,
        archFromUname: n1,
        ...r1
    };
}
function yu(e1) {
    let t1 = /^ID="?([^"\n]*)"?$/im, r1 = /^ID_LIKE="?([^"\n]*)"?$/im, n1 = t1.exec(e1), i1 = n1 && n1[1] && n1[1].toLowerCase() || "", o1 = r1.exec(e1), s1 = o1 && o1[1] && o1[1].toLowerCase() || "", a1 = ot({
        id: i1,
        idLike: s1
    }).with({
        id: "alpine"
    }, ({ id: l1 })=>({
            targetDistro: "musl",
            familyDistro: l1,
            originalDistro: l1
        })).with({
        id: "raspbian"
    }, ({ id: l1 })=>({
            targetDistro: "arm",
            familyDistro: "debian",
            originalDistro: l1
        })).with({
        id: "nixos"
    }, ({ id: l1 })=>({
            targetDistro: "nixos",
            originalDistro: l1,
            familyDistro: "nixos"
        })).with({
        id: "debian"
    }, {
        id: "ubuntu"
    }, ({ id: l1 })=>({
            targetDistro: "debian",
            familyDistro: "debian",
            originalDistro: l1
        })).with({
        id: "rhel"
    }, {
        id: "centos"
    }, {
        id: "fedora"
    }, ({ id: l1 })=>({
            targetDistro: "rhel",
            familyDistro: "rhel",
            originalDistro: l1
        })).when(({ idLike: l1 })=>l1.includes("debian") || l1.includes("ubuntu"), ({ id: l1 })=>({
            targetDistro: "debian",
            familyDistro: "debian",
            originalDistro: l1
        })).when(({ idLike: l1 })=>i1 === "arch" || l1.includes("arch"), ({ id: l1 })=>({
            targetDistro: "debian",
            familyDistro: "arch",
            originalDistro: l1
        })).when(({ idLike: l1 })=>l1.includes("centos") || l1.includes("fedora") || l1.includes("rhel") || l1.includes("suse"), ({ id: l1 })=>({
            targetDistro: "rhel",
            familyDistro: "rhel",
            originalDistro: l1
        })).otherwise(({ id: l1 })=>({
            targetDistro: void 0,
            familyDistro: void 0,
            originalDistro: l1
        }));
    return ie(`Found distro info:
${JSON.stringify(a1, null, 2)}`), a1;
}
async function hu() {
    let e1 = "/etc/os-release";
    try {
        let t1 = await jn.default.readFile(e1, {
            encoding: "utf-8"
        });
        return yu(t1);
    } catch  {
        return {
            targetDistro: void 0,
            familyDistro: void 0,
            originalDistro: void 0
        };
    }
}
function xu(e1) {
    let t1 = /^OpenSSL\s(\d+\.\d+)\.\d+/.exec(e1);
    if (t1) {
        let r1 = `${t1[1]}.x`;
        return _o(r1);
    }
}
function Io(e1) {
    let t1 = /libssl\.so\.(\d)(\.\d)?/.exec(e1);
    if (t1) {
        let r1 = `${t1[1]}${t1[2] ?? ".0"}.x`;
        return _o(r1);
    }
}
function _o(e1) {
    let t1 = (()=>{
        if (Lo(e1)) return e1;
        let r1 = e1.split(".");
        return r1[1] = "0", r1.join(".");
    })();
    if (gu.includes(t1)) return t1;
}
function bu(e1) {
    return ot(e1).with({
        familyDistro: "musl"
    }, ()=>(ie('Trying platform-specific paths for "alpine"'), [
            "/lib"
        ])).with({
        familyDistro: "debian"
    }, ({ archFromUname: t1 })=>(ie('Trying platform-specific paths for "debian" (and "ubuntu")'), [
            `/usr/lib/${t1}-linux-gnu`,
            `/lib/${t1}-linux-gnu`
        ])).with({
        familyDistro: "rhel"
    }, ()=>(ie('Trying platform-specific paths for "rhel"'), [
            "/lib64",
            "/usr/lib64"
        ])).otherwise(({ familyDistro: t1, arch: r1, archFromUname: n1 })=>(ie(`Don't know any platform-specific paths for "${t1}" on ${r1} (${n1})`), []));
}
async function Eu(e1) {
    let t1 = 'grep -v "libssl.so.0"', r1 = await Fo(e1);
    if (r1) {
        ie(`Found libssl.so file using platform-specific paths: ${r1}`);
        let o1 = Io(r1);
        if (ie(`The parsed libssl version is: ${o1}`), o1) return {
            libssl: o1,
            strategy: "libssl-specific-path"
        };
    }
    ie('Falling back to "ldconfig" and other generic paths');
    let n1 = await Sr(`ldconfig -p | sed "s/.*=>s*//" | sed "s|.*/||" | grep libssl | sort | ${t1}`);
    if (n1 || (n1 = await Fo([
        "/lib64",
        "/usr/lib64",
        "/lib"
    ])), n1) {
        ie(`Found libssl.so file using "ldconfig" or other generic paths: ${n1}`);
        let o1 = Io(n1);
        if (ie(`The parsed libssl version is: ${o1}`), o1) return {
            libssl: o1,
            strategy: "ldconfig"
        };
    }
    let i1 = await Sr("openssl version -v");
    if (i1) {
        ie(`Found openssl binary with version: ${i1}`);
        let o1 = xu(i1);
        if (ie(`The parsed openssl version is: ${o1}`), o1) return {
            libssl: o1,
            strategy: "openssl-binary"
        };
    }
    return ie("Couldn't find any version of libssl or OpenSSL in the system"), {};
}
async function Fo(e1) {
    for (let t1 of e1){
        let r1 = await wu(t1);
        if (r1) return r1;
    }
}
async function wu(e1) {
    try {
        return (await jn.default.readdir(e1)).find((r1)=>r1.startsWith("libssl.so.") && !r1.startsWith("libssl.so.0"));
    } catch (t1) {
        if (t1.code === "ENOENT") return;
        throw t1;
    }
}
async function lt() {
    let { binaryTarget: e1 } = await No();
    return e1;
}
function Pu(e1) {
    return e1.binaryTarget !== void 0;
}
async function Bn() {
    let { memoized: e1, ...t1 } = await No();
    return t1;
}
var Rr = {};
async function No() {
    if (Pu(Rr)) return Promise.resolve({
        ...Rr,
        memoized: !0
    });
    let e1 = await Do(), t1 = vu(e1);
    return Rr = {
        ...e1,
        binaryTarget: t1
    }, {
        ...Rr,
        memoized: !1
    };
}
function vu(e1) {
    let { platform: t1, arch: r1, archFromUname: n1, libssl: i1, targetDistro: o1, familyDistro: s1, originalDistro: a1 } = e1;
    t1 === "linux" && ![
        "x64",
        "arm64"
    ].includes(r1) && kt(`Prisma only officially supports Linux on amd64 (x86_64) and arm64 (aarch64) system architectures. If you are using your own custom Prisma engines, you can ignore this warning, as long as you've compiled the engines for your system architecture "${n1}".`);
    let l1 = "1.1.x";
    if (t1 === "linux" && i1 === void 0) {
        let c1 = ot({
            familyDistro: s1
        }).with({
            familyDistro: "debian"
        }, ()=>"Please manually install OpenSSL via `apt-get update -y && apt-get install -y openssl` and try installing Prisma again. If you're running Prisma on Docker, add this command to your Dockerfile, or switch to an image that already has OpenSSL installed.").otherwise(()=>"Please manually install OpenSSL and try installing Prisma again.");
        kt(`Prisma failed to detect the libssl/openssl version to use, and may not work as expected. Defaulting to "openssl-${l1}".
${c1}`);
    }
    let u1 = "debian";
    if (t1 === "linux" && o1 === void 0 && kt(`Prisma doesn't know which engines to download for the Linux distro "${a1}". Falling back to Prisma engines built "${u1}".
Please report your experience by creating an issue at ${Ft("https://github.com/prisma/prisma/issues")} so we can add your distro to the list of known supported distros.`), t1 === "darwin" && r1 === "arm64") return "darwin-arm64";
    if (t1 === "darwin") return "darwin";
    if (t1 === "win32") return "windows";
    if (t1 === "freebsd") return o1;
    if (t1 === "openbsd") return "openbsd";
    if (t1 === "netbsd") return "netbsd";
    if (t1 === "linux" && o1 === "nixos") return "linux-nixos";
    if (t1 === "linux" && r1 === "arm64") return `${o1 === "musl" ? "linux-musl-arm64" : "linux-arm64"}-openssl-${i1 || l1}`;
    if (t1 === "linux" && r1 === "arm") return `linux-arm-openssl-${i1 || l1}`;
    if (t1 === "linux" && o1 === "musl") {
        let c1 = "linux-musl";
        return !i1 || Lo(i1) ? c1 : `${c1}-openssl-${i1}`;
    }
    return t1 === "linux" && o1 && i1 ? `${o1}-openssl-${i1}` : (t1 !== "linux" && kt(`Prisma detected unknown OS "${t1}" and may not work as expected. Defaulting to "linux".`), i1 ? `${u1}-openssl-${i1}` : o1 ? `${o1}-openssl-${l1}` : `${u1}-openssl-${l1}`);
}
async function Tu(e1) {
    try {
        return await e1();
    } catch  {
        return;
    }
}
function Sr(e1) {
    return Tu(async ()=>{
        let t1 = await fu(e1);
        return ie(`Command "${e1}" successfully returned "${t1.stdout}"`), t1.stdout;
    });
}
async function Cu() {
    return typeof Mr.default.machine == "function" ? Mr.default.machine() : (await Sr("uname -m"))?.trim();
}
function Lo(e1) {
    return e1.startsWith("1.");
}
var Un = [
    "darwin",
    "darwin-arm64",
    "debian-openssl-1.0.x",
    "debian-openssl-1.1.x",
    "debian-openssl-3.0.x",
    "rhel-openssl-1.0.x",
    "rhel-openssl-1.1.x",
    "rhel-openssl-3.0.x",
    "linux-arm64-openssl-1.1.x",
    "linux-arm64-openssl-1.0.x",
    "linux-arm64-openssl-3.0.x",
    "linux-arm-openssl-1.1.x",
    "linux-arm-openssl-1.0.x",
    "linux-arm-openssl-3.0.x",
    "linux-musl",
    "linux-musl-openssl-3.0.x",
    "linux-musl-arm64-openssl-1.1.x",
    "linux-musl-arm64-openssl-3.0.x",
    "linux-nixos",
    "linux-static-x64",
    "linux-static-arm64",
    "windows",
    "freebsd11",
    "freebsd12",
    "freebsd13",
    "openbsd",
    "netbsd",
    "arm"
];
var Jn = S(Vo()), kr = S(__webpack_require__(57147));
var ut = S(__webpack_require__(71017));
function jo(e1) {
    let t1 = e1.ignoreProcessEnv ? {} : process.env, r1 = (n1)=>n1.match(/(.?\${(?:[a-zA-Z0-9_]+)?})/g)?.reduce(function(o1, s1) {
            let a1 = /(.?)\${([a-zA-Z0-9_]+)?}/g.exec(s1);
            if (!a1) return o1;
            let l1 = a1[1], u1, c1;
            if (l1 === "\\") c1 = a1[0], u1 = c1.replace("\\$", "$");
            else {
                let p1 = a1[2];
                c1 = a1[0].substring(l1.length), u1 = Object.hasOwnProperty.call(t1, p1) ? t1[p1] : e1.parsed[p1] || "", u1 = r1(u1);
            }
            return o1.replace(c1, u1);
        }, n1) ?? n1;
    for(let n1 in e1.parsed){
        let i1 = Object.hasOwnProperty.call(t1, n1) ? t1[n1] : e1.parsed[n1];
        e1.parsed[n1] = r1(i1);
    }
    for(let n1 in e1.parsed)t1[n1] = e1.parsed[n1];
    return e1;
}
var Qn = D("prisma:tryLoadEnv");
function Ot({ rootEnvPath: e1, schemaEnvPath: t1 }, r1 = {
    conflictCheck: "none"
}) {
    let n1 = Bo(e1);
    r1.conflictCheck !== "none" && _u(n1, t1, r1.conflictCheck);
    let i1 = null;
    return Uo(n1?.path, t1) || (i1 = Bo(t1)), !n1 && !i1 && Qn("No Environment variables loaded"), i1?.dotenvResult.error ? console.error(me(ne("Schema Env Error: ")) + i1.dotenvResult.error) : {
        message: [
            n1?.message,
            i1?.message
        ].filter(Boolean).join(`
`),
        parsed: {
            ...n1?.dotenvResult?.parsed,
            ...i1?.dotenvResult?.parsed
        }
    };
}
function _u(e1, t1, r1) {
    let n1 = e1?.dotenvResult.parsed, i1 = !Uo(e1?.path, t1);
    if (n1 && t1 && i1 && kr.default.existsSync(t1)) {
        let o1 = Jn.default.parse(kr.default.readFileSync(t1)), s1 = [];
        for(let a1 in o1)n1[a1] === o1[a1] && s1.push(a1);
        if (s1.length > 0) {
            let a1 = ut.default.relative(process.cwd(), e1.path), l1 = ut.default.relative(process.cwd(), t1);
            if (r1 === "error") {
                let u1 = `There is a conflict between env var${s1.length > 1 ? "s" : ""} in ${te(a1)} and ${te(l1)}
Conflicting env vars:
${s1.map((c1)=>`  ${ne(c1)}`).join(`
`)}

We suggest to move the contents of ${te(l1)} to ${te(a1)} to consolidate your env vars.
`;
                throw new Error(u1);
            } else if (r1 === "warn") {
                let u1 = `Conflict for env var${s1.length > 1 ? "s" : ""} ${s1.map((c1)=>ne(c1)).join(", ")} in ${te(a1)} and ${te(l1)}
Env vars from ${te(l1)} overwrite the ones from ${te(a1)}
      `;
                console.warn(`${he("warn(prisma)")} ${u1}`);
            }
        }
    }
}
function Bo(e1) {
    return Nu(e1) ? (Qn(`Environment variables loaded from ${e1}`), {
        dotenvResult: jo(Jn.default.config({
            path: e1,
            debug: process.env.DOTENV_CONFIG_DEBUG ? !0 : void 0
        })),
        message: ke(`Environment variables loaded from ${ut.default.relative(process.cwd(), e1)}`),
        path: e1
    }) : (Qn(`Environment variables not found at ${e1}`), null);
}
function Uo(e1, t1) {
    return e1 && t1 && ut.default.resolve(e1) === ut.default.resolve(t1);
}
function Nu(e1) {
    return !!(e1 && kr.default.existsSync(e1));
}
var Ko = "library";
function Gn(e1) {
    let t1 = Lu();
    return t1 || (e1?.config.engineType === "library" ? "library" : e1?.config.engineType === "binary" ? "binary" : Ko);
}
function Lu() {
    let e1 = process.env.PRISMA_CLIENT_ENGINE_TYPE;
    return e1 === "library" ? "library" : e1 === "binary" ? "binary" : void 0;
}
var Vu = S(Hn());
var N = S(__webpack_require__(71017)), ju = S(Hn()), wf = D("prisma:engines");
function zo() {
    return N.default.join(__dirname, "../");
}
var Pf = "libquery-engine";
N.default.join(__dirname, "../query-engine-darwin");
N.default.join(__dirname, "../query-engine-darwin-arm64");
N.default.join(__dirname, "../query-engine-debian-openssl-1.0.x");
N.default.join(__dirname, "../query-engine-debian-openssl-1.1.x");
N.default.join(__dirname, "../query-engine-debian-openssl-3.0.x");
N.default.join(__dirname, "../query-engine-linux-static-x64");
N.default.join(__dirname, "../query-engine-linux-static-arm64");
N.default.join(__dirname, "../query-engine-rhel-openssl-1.0.x");
N.default.join(__dirname, "../query-engine-rhel-openssl-1.1.x");
N.default.join(__dirname, "../query-engine-rhel-openssl-3.0.x");
N.default.join(__dirname, "../libquery_engine-darwin.dylib.node");
N.default.join(__dirname, "../libquery_engine-darwin-arm64.dylib.node");
N.default.join(__dirname, "../libquery_engine-debian-openssl-1.0.x.so.node");
N.default.join(__dirname, "../libquery_engine-debian-openssl-1.1.x.so.node");
N.default.join(__dirname, "../libquery_engine-debian-openssl-3.0.x.so.node");
N.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-1.0.x.so.node");
N.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-1.1.x.so.node");
N.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-3.0.x.so.node");
N.default.join(__dirname, "../libquery_engine-linux-musl.so.node");
N.default.join(__dirname, "../libquery_engine-linux-musl-openssl-3.0.x.so.node");
N.default.join(__dirname, "../libquery_engine-rhel-openssl-1.0.x.so.node");
N.default.join(__dirname, "../libquery_engine-rhel-openssl-1.1.x.so.node");
N.default.join(__dirname, "../libquery_engine-rhel-openssl-3.0.x.so.node");
N.default.join(__dirname, "../query_engine-windows.dll.node");
var Wn = S(__webpack_require__(57147)), Yo = D("chmodPlusX");
function zn(e1) {
    if (process.platform === "win32") return;
    let t1 = Wn.default.statSync(e1), r1 = t1.mode | 64 | 8 | 1;
    if (t1.mode === r1) {
        Yo(`Execution permissions of ${e1} are fine`);
        return;
    }
    let n1 = r1.toString(8).slice(-3);
    Yo(`Have to call chmodPlusX on ${e1}`), Wn.default.chmodSync(e1, n1);
}
function Yn(e1) {
    let t1 = e1.e, r1 = (a1)=>`Prisma cannot find the required \`${a1}\` system library in your system`, n1 = t1.message.includes("cannot open shared object file"), i1 = `Please refer to the documentation about Prisma's system requirements: ${Ft("https://pris.ly/d/system-requirements")}`, o1 = `Unable to require(\`${ke(e1.id)}\`).`, s1 = ot({
        message: t1.message,
        code: t1.code
    }).with({
        code: "ENOENT"
    }, ()=>"File does not exist.").when(({ message: a1 })=>n1 && a1.includes("libz"), ()=>`${r1("libz")}. Please install it and try again.`).when(({ message: a1 })=>n1 && a1.includes("libgcc_s"), ()=>`${r1("libgcc_s")}. Please install it and try again.`).when(({ message: a1 })=>n1 && a1.includes("libssl"), ()=>{
        let a1 = e1.platformInfo.libssl ? `openssl-${e1.platformInfo.libssl}` : "openssl";
        return `${r1("libssl")}. Please install ${a1} and try again.`;
    }).when(({ message: a1 })=>a1.includes("GLIBC"), ()=>`Prisma has detected an incompatible version of the \`glibc\` C standard library installed in your system. This probably means your system may be too old to run Prisma. ${i1}`).when(({ message: a1 })=>e1.platformInfo.platform === "linux" && a1.includes("symbol not found"), ()=>`The Prisma engines are not compatible with your system ${e1.platformInfo.originalDistro} on (${e1.platformInfo.archFromUname}) which uses the \`${e1.platformInfo.binaryTarget}\` binaryTarget by default. ${i1}`).otherwise(()=>`The Prisma engines do not seem to be compatible with your system. ${i1}`);
    return `${o1}
${s1}

Details: ${t1.message}`;
}
var Dt = S(__webpack_require__(71017));
function Zn(e1) {
    return Dt.default.sep === Dt.default.posix.sep ? e1 : e1.split(Dt.default.sep).join(Dt.default.posix.sep);
}
var Xo = S(Xn());
function ti(e1) {
    return String(new ei(e1));
}
var ei = class {
    constructor(t1){
        this.config = t1;
    }
    toString() {
        let { config: t1 } = this, r1 = t1.provider.fromEnvVar ? `env("${t1.provider.fromEnvVar}")` : t1.provider.value, n1 = JSON.parse(JSON.stringify({
            provider: r1,
            binaryTargets: Bu(t1.binaryTargets)
        }));
        return `generator ${t1.name} {
${(0, Xo.default)(Uu(n1), 2)}
}`;
    }
};
function Bu(e1) {
    let t1;
    if (e1.length > 0) {
        let r1 = e1.find((n1)=>n1.fromEnvVar !== null);
        r1 ? t1 = `env("${r1.fromEnvVar}")` : t1 = e1.map((n1)=>n1.native ? "native" : n1.value);
    } else t1 = void 0;
    return t1;
}
function Uu(e1) {
    let t1 = Object.keys(e1).reduce((r1, n1)=>Math.max(r1, n1.length), 0);
    return Object.entries(e1).map(([r1, n1])=>`${r1.padEnd(t1)} = ${Ku(n1)}`).join(`
`);
}
function Ku(e1) {
    return JSON.parse(JSON.stringify(e1, (t1, r1)=>Array.isArray(r1) ? `[${r1.map((n1)=>JSON.stringify(n1)).join(", ")}]` : JSON.stringify(r1)));
}
var Nt = {};
Rt(Nt, {
    error: ()=>Gu,
    info: ()=>Ju,
    log: ()=>Qu,
    query: ()=>Hu,
    should: ()=>es,
    tags: ()=>_t,
    warn: ()=>ri
});
var _t = {
    error: me("prisma:error"),
    warn: he("prisma:warn"),
    info: Oe("prisma:info"),
    query: it("prisma:query")
}, es = {
    warn: ()=>!process.env.PRISMA_DISABLE_WARNINGS
};
function Qu(...e1) {
    console.log(...e1);
}
function ri(e1, ...t1) {
    es.warn() && console.warn(`${_t.warn} ${e1}`, ...t1);
}
function Ju(e1, ...t1) {
    console.info(`${_t.info} ${e1}`, ...t1);
}
function Gu(e1, ...t1) {
    console.error(`${_t.error} ${e1}`, ...t1);
}
function Hu(e1, ...t1) {
    console.log(`${_t.query} ${e1}`, ...t1);
}
function Ge(e1, t1) {
    throw new Error(t1);
}
function ii(e1, t1) {
    return Object.prototype.hasOwnProperty.call(e1, t1);
}
var oi = (e1, t1)=>e1.reduce((r1, n1)=>(r1[t1(n1)] = n1, r1), {});
function ct(e1, t1) {
    let r1 = {};
    for (let n1 of Object.keys(e1))r1[n1] = t1(e1[n1], n1);
    return r1;
}
function si(e1, t1) {
    if (e1.length === 0) return;
    let r1 = e1[0];
    for(let n1 = 1; n1 < e1.length; n1++)t1(r1, e1[n1]) < 0 && (r1 = e1[n1]);
    return r1;
}
function E(e1, t1) {
    Object.defineProperty(e1, "name", {
        value: t1,
        configurable: !0
    });
}
var os = new Set, Lt = (e1, t1, ...r1)=>{
    os.has(e1) || (os.add(e1), ri(t1, ...r1));
};
var U = class extends Error {
    constructor(r1, { code: n1, clientVersion: i1, meta: o1, batchRequestIdx: s1 }){
        super(r1);
        this.name = "PrismaClientKnownRequestError", this.code = n1, this.clientVersion = i1, this.meta = o1, Object.defineProperty(this, "batchRequestIdx", {
            value: s1,
            enumerable: !1,
            writable: !0
        });
    }
    get [Symbol.toStringTag]() {
        return "PrismaClientKnownRequestError";
    }
};
E(U, "PrismaClientKnownRequestError");
var Ce = class extends U {
    constructor(t1, r1){
        super(t1, {
            code: "P2025",
            clientVersion: r1
        }), this.name = "NotFoundError";
    }
};
E(Ce, "NotFoundError");
var k = class e extends Error {
    constructor(r1, n1, i1){
        super(r1);
        this.name = "PrismaClientInitializationError", this.clientVersion = n1, this.errorCode = i1, Error.captureStackTrace(e);
    }
    get [Symbol.toStringTag]() {
        return "PrismaClientInitializationError";
    }
};
E(k, "PrismaClientInitializationError");
var ue = class extends Error {
    constructor(r1, n1){
        super(r1);
        this.name = "PrismaClientRustPanicError", this.clientVersion = n1;
    }
    get [Symbol.toStringTag]() {
        return "PrismaClientRustPanicError";
    }
};
E(ue, "PrismaClientRustPanicError");
var K = class extends Error {
    constructor(r1, { clientVersion: n1, batchRequestIdx: i1 }){
        super(r1);
        this.name = "PrismaClientUnknownRequestError", this.clientVersion = n1, Object.defineProperty(this, "batchRequestIdx", {
            value: i1,
            writable: !0,
            enumerable: !1
        });
    }
    get [Symbol.toStringTag]() {
        return "PrismaClientUnknownRequestError";
    }
};
E(K, "PrismaClientUnknownRequestError");
var X = class extends Error {
    constructor(r1, { clientVersion: n1 }){
        super(r1);
        this.name = "PrismaClientValidationError";
        this.clientVersion = n1;
    }
    get [Symbol.toStringTag]() {
        return "PrismaClientValidationError";
    }
};
E(X, "PrismaClientValidationError");
var pt = class {
    constructor(t1){
        this._engine = t1;
    }
    prometheus(t1) {
        return this._engine.metrics({
            format: "prometheus",
            ...t1
        });
    }
    json(t1) {
        return this._engine.metrics({
            format: "json",
            ...t1
        });
    }
};
function $t(e1) {
    let t1;
    return {
        get () {
            return t1 || (t1 = {
                value: e1()
            }), t1.value;
        }
    };
}
function as(e1, t1) {
    let r1 = $t(()=>zu(t1));
    Object.defineProperty(e1, "dmmf", {
        get: ()=>r1.get()
    });
}
function zu(e1) {
    return {
        datamodel: {
            models: ai(e1.models),
            enums: ai(e1.enums),
            types: ai(e1.types)
        }
    };
}
function ai(e1) {
    return Object.entries(e1).map(([t1, r1])=>({
            name: t1,
            ...r1
        }));
}
var Cl = __webpack_require__(50852), Al = __webpack_require__(82361), Rl = S(__webpack_require__(57147)), fr = S(__webpack_require__(71017));
var oe = class e {
    constructor(t1, r1){
        if (t1.length - 1 !== r1.length) throw t1.length === 0 ? new TypeError("Expected at least 1 string") : new TypeError(`Expected ${t1.length} strings to have ${t1.length - 1} values`);
        let n1 = r1.reduce((s1, a1)=>s1 + (a1 instanceof e ? a1.values.length : 1), 0);
        this.values = new Array(n1), this.strings = new Array(n1 + 1), this.strings[0] = t1[0];
        let i1 = 0, o1 = 0;
        for(; i1 < r1.length;){
            let s1 = r1[i1++], a1 = t1[i1];
            if (s1 instanceof e) {
                this.strings[o1] += s1.strings[0];
                let l1 = 0;
                for(; l1 < s1.values.length;)this.values[o1++] = s1.values[l1++], this.strings[o1] = s1.strings[l1];
                this.strings[o1] += a1;
            } else this.values[o1++] = s1, this.strings[o1] = a1;
        }
    }
    get text() {
        let t1 = 1, r1 = this.strings[0];
        for(; t1 < this.strings.length;)r1 += `$${t1}${this.strings[t1++]}`;
        return r1;
    }
    get sql() {
        let t1 = 1, r1 = this.strings[0];
        for(; t1 < this.strings.length;)r1 += `?${this.strings[t1++]}`;
        return r1;
    }
    inspect() {
        return {
            text: this.text,
            sql: this.sql,
            values: this.values
        };
    }
};
function ls(e1, t1 = ",", r1 = "", n1 = "") {
    if (e1.length === 0) throw new TypeError("Expected `join([])` to be called with an array of multiple elements, but got an empty array");
    return new oe([
        r1,
        ...Array(e1.length - 1).fill(t1),
        n1
    ], e1);
}
function li(e1) {
    return new oe([
        e1
    ], []);
}
var us = li("");
function ui(e1, ...t1) {
    return new oe(e1, t1);
}
function qt(e1) {
    return {
        getKeys () {
            return Object.keys(e1);
        },
        getPropertyValue (t1) {
            return e1[t1];
        }
    };
}
function re(e1, t1) {
    return {
        getKeys () {
            return [
                e1
            ];
        },
        getPropertyValue () {
            return t1();
        }
    };
}
var xe = class {
    constructor(){
        this._map = new Map;
    }
    get(t1) {
        return this._map.get(t1)?.value;
    }
    set(t1, r1) {
        this._map.set(t1, {
            value: r1
        });
    }
    getOrCreate(t1, r1) {
        let n1 = this._map.get(t1);
        if (n1) return n1.value;
        let i1 = r1();
        return this.set(t1, i1), i1;
    }
};
function He(e1) {
    let t1 = new xe;
    return {
        getKeys () {
            return e1.getKeys();
        },
        getPropertyValue (r1) {
            return t1.getOrCreate(r1, ()=>e1.getPropertyValue(r1));
        },
        getPropertyDescriptor (r1) {
            return e1.getPropertyDescriptor?.(r1);
        }
    };
}
var ds = __webpack_require__(73837);
var _r = {
    enumerable: !0,
    configurable: !0,
    writable: !0
};
function Nr(e1) {
    let t1 = new Set(e1);
    return {
        getOwnPropertyDescriptor: ()=>_r,
        has: (r1, n1)=>t1.has(n1),
        set: (r1, n1, i1)=>t1.add(n1) && Reflect.set(r1, n1, i1),
        ownKeys: ()=>[
                ...t1
            ]
    };
}
var cs = Symbol.for("nodejs.util.inspect.custom");
function be(e1, t1) {
    let r1 = Yu(t1), n1 = new Set, i1 = new Proxy(e1, {
        get (o1, s1) {
            if (n1.has(s1)) return o1[s1];
            let a1 = r1.get(s1);
            return a1 ? a1.getPropertyValue(s1) : o1[s1];
        },
        has (o1, s1) {
            if (n1.has(s1)) return !0;
            let a1 = r1.get(s1);
            return a1 ? a1.has?.(s1) ?? !0 : Reflect.has(o1, s1);
        },
        ownKeys (o1) {
            let s1 = ps(Reflect.ownKeys(o1), r1), a1 = ps(Array.from(r1.keys()), r1);
            return [
                ...new Set([
                    ...s1,
                    ...a1,
                    ...n1
                ])
            ];
        },
        set (o1, s1, a1) {
            return r1.get(s1)?.getPropertyDescriptor?.(s1)?.writable === !1 ? !1 : (n1.add(s1), Reflect.set(o1, s1, a1));
        },
        getOwnPropertyDescriptor (o1, s1) {
            let a1 = Reflect.getOwnPropertyDescriptor(o1, s1);
            if (a1 && !a1.configurable) return a1;
            let l1 = r1.get(s1);
            return l1 ? l1.getPropertyDescriptor ? {
                ..._r,
                ...l1?.getPropertyDescriptor(s1)
            } : _r : a1;
        },
        defineProperty (o1, s1, a1) {
            return n1.add(s1), Reflect.defineProperty(o1, s1, a1);
        }
    });
    return i1[cs] = function(o1, s1, a1 = ds.inspect) {
        let l1 = {
            ...this
        };
        return delete l1[cs], a1(l1, s1);
    }, i1;
}
function Yu(e1) {
    let t1 = new Map;
    for (let r1 of e1){
        let n1 = r1.getKeys();
        for (let i1 of n1)t1.set(i1, r1);
    }
    return t1;
}
function ps(e1, t1) {
    return e1.filter((r1)=>t1.get(r1)?.has?.(r1) ?? !0);
}
function Vt(e1) {
    return {
        getKeys () {
            return e1;
        },
        has () {
            return !1;
        },
        getPropertyValue () {}
    };
}
var dt = class {
    constructor(t1 = 0, r1){
        this.context = r1;
        this.lines = [];
        this.currentLine = "";
        this.currentIndent = 0;
        this.currentIndent = t1;
    }
    write(t1) {
        return typeof t1 == "string" ? this.currentLine += t1 : t1.write(this), this;
    }
    writeJoined(t1, r1) {
        let n1 = r1.length - 1;
        for(let i1 = 0; i1 < r1.length; i1++)this.write(r1[i1]), i1 !== n1 && this.write(t1);
        return this;
    }
    writeLine(t1) {
        return this.write(t1).newLine();
    }
    newLine() {
        this.lines.push(this.indentedCurrentLine()), this.currentLine = "", this.marginSymbol = void 0;
        let t1 = this.afterNextNewLineCallback;
        return this.afterNextNewLineCallback = void 0, t1?.(), this;
    }
    withIndent(t1) {
        return this.indent(), t1(this), this.unindent(), this;
    }
    afterNextNewline(t1) {
        return this.afterNextNewLineCallback = t1, this;
    }
    indent() {
        return this.currentIndent++, this;
    }
    unindent() {
        return this.currentIndent > 0 && this.currentIndent--, this;
    }
    addMarginSymbol(t1) {
        return this.marginSymbol = t1, this;
    }
    toString() {
        return this.lines.concat(this.indentedCurrentLine()).join(`
`);
    }
    getCurrentLineLength() {
        return this.currentLine.length;
    }
    indentedCurrentLine() {
        let t1 = this.currentLine.padStart(this.currentLine.length + 2 * this.currentIndent);
        return this.marginSymbol ? this.marginSymbol + t1.slice(1) : t1;
    }
};
var Lr = Symbol(), ci = new WeakMap, Ae = class {
    constructor(t1){
        t1 === Lr ? ci.set(this, `Prisma.${this._getName()}`) : ci.set(this, `new Prisma.${this._getNamespace()}.${this._getName()}()`);
    }
    _getName() {
        return this.constructor.name;
    }
    toString() {
        return ci.get(this);
    }
}, jt = class extends Ae {
    _getNamespace() {
        return "NullTypes";
    }
}, Bt = class extends jt {
};
pi(Bt, "DbNull");
var Ut = class extends jt {
};
pi(Ut, "JsonNull");
var Kt = class extends jt {
};
pi(Kt, "AnyNull");
var $r = {
    classes: {
        DbNull: Bt,
        JsonNull: Ut,
        AnyNull: Kt
    },
    instances: {
        DbNull: new Bt(Lr),
        JsonNull: new Ut(Lr),
        AnyNull: new Kt(Lr)
    }
};
function pi(e1, t1) {
    Object.defineProperty(e1, "name", {
        value: t1,
        configurable: !0
    });
}
function mt(e1) {
    return e1 instanceof Date || Object.prototype.toString.call(e1) === "[object Date]";
}
function qr(e1) {
    return e1.toString() !== "Invalid Date";
}
var ft = 9e15, Le = 1e9, di = "0123456789abcdef", jr = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", Br = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", mi = {
    precision: 20,
    rounding: 4,
    modulo: 1,
    toExpNeg: -7,
    toExpPos: 21,
    minE: -ft,
    maxE: ft,
    crypto: !1
}, ys, Re, w = !0, Kr = "[DecimalError] ", Ne = Kr + "Invalid argument: ", hs = Kr + "Precision limit exceeded", xs = Kr + "crypto unavailable", bs = "[object Decimal]", ee = Math.floor, j = Math.pow, Zu = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, Xu = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, ec = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Es = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, ge = 1e7, b = 7, tc = 9007199254740991, rc = jr.length - 1, fi = Br.length - 1, m = {
    toStringTag: bs
};
m.absoluteValue = m.abs = function() {
    var e1 = new this.constructor(this);
    return e1.s < 0 && (e1.s = 1), h(e1);
};
m.ceil = function() {
    return h(new this.constructor(this), this.e + 1, 2);
};
m.clampedTo = m.clamp = function(e1, t1) {
    var r1, n1 = this, i1 = n1.constructor;
    if (e1 = new i1(e1), t1 = new i1(t1), !e1.s || !t1.s) return new i1(NaN);
    if (e1.gt(t1)) throw Error(Ne + t1);
    return r1 = n1.cmp(e1), r1 < 0 ? e1 : n1.cmp(t1) > 0 ? t1 : new i1(n1);
};
m.comparedTo = m.cmp = function(e1) {
    var t1, r1, n1, i1, o1 = this, s1 = o1.d, a1 = (e1 = new o1.constructor(e1)).d, l1 = o1.s, u1 = e1.s;
    if (!s1 || !a1) return !l1 || !u1 ? NaN : l1 !== u1 ? l1 : s1 === a1 ? 0 : !s1 ^ l1 < 0 ? 1 : -1;
    if (!s1[0] || !a1[0]) return s1[0] ? l1 : a1[0] ? -u1 : 0;
    if (l1 !== u1) return l1;
    if (o1.e !== e1.e) return o1.e > e1.e ^ l1 < 0 ? 1 : -1;
    for(n1 = s1.length, i1 = a1.length, t1 = 0, r1 = n1 < i1 ? n1 : i1; t1 < r1; ++t1)if (s1[t1] !== a1[t1]) return s1[t1] > a1[t1] ^ l1 < 0 ? 1 : -1;
    return n1 === i1 ? 0 : n1 > i1 ^ l1 < 0 ? 1 : -1;
};
m.cosine = m.cos = function() {
    var e1, t1, r1 = this, n1 = r1.constructor;
    return r1.d ? r1.d[0] ? (e1 = n1.precision, t1 = n1.rounding, n1.precision = e1 + Math.max(r1.e, r1.sd()) + b, n1.rounding = 1, r1 = nc(n1, Cs(n1, r1)), n1.precision = e1, n1.rounding = t1, h(Re == 2 || Re == 3 ? r1.neg() : r1, e1, t1, !0)) : new n1(1) : new n1(NaN);
};
m.cubeRoot = m.cbrt = function() {
    var e1, t1, r1, n1, i1, o1, s1, a1, l1, u1, c1 = this, p1 = c1.constructor;
    if (!c1.isFinite() || c1.isZero()) return new p1(c1);
    for(w = !1, o1 = c1.s * j(c1.s * c1, 1 / 3), !o1 || Math.abs(o1) == 1 / 0 ? (r1 = W(c1.d), e1 = c1.e, (o1 = (e1 - r1.length + 1) % 3) && (r1 += o1 == 1 || o1 == -2 ? "0" : "00"), o1 = j(r1, 1 / 3), e1 = ee((e1 + 1) / 3) - (e1 % 3 == (e1 < 0 ? -1 : 2)), o1 == 1 / 0 ? r1 = "5e" + e1 : (r1 = o1.toExponential(), r1 = r1.slice(0, r1.indexOf("e") + 1) + e1), n1 = new p1(r1), n1.s = c1.s) : n1 = new p1(o1.toString()), s1 = (e1 = p1.precision) + 3;;)if (a1 = n1, l1 = a1.times(a1).times(a1), u1 = l1.plus(c1), n1 = O(u1.plus(c1).times(a1), u1.plus(l1), s1 + 2, 1), W(a1.d).slice(0, s1) === (r1 = W(n1.d)).slice(0, s1)) if (r1 = r1.slice(s1 - 3, s1 + 1), r1 == "9999" || !i1 && r1 == "4999") {
        if (!i1 && (h(a1, e1 + 1, 0), a1.times(a1).times(a1).eq(c1))) {
            n1 = a1;
            break;
        }
        s1 += 4, i1 = 1;
    } else {
        (!+r1 || !+r1.slice(1) && r1.charAt(0) == "5") && (h(n1, e1 + 1, 1), t1 = !n1.times(n1).times(n1).eq(c1));
        break;
    }
    return w = !0, h(n1, e1, p1.rounding, t1);
};
m.decimalPlaces = m.dp = function() {
    var e1, t1 = this.d, r1 = NaN;
    if (t1) {
        if (e1 = t1.length - 1, r1 = (e1 - ee(this.e / b)) * b, e1 = t1[e1], e1) for(; e1 % 10 == 0; e1 /= 10)r1--;
        r1 < 0 && (r1 = 0);
    }
    return r1;
};
m.dividedBy = m.div = function(e1) {
    return O(this, new this.constructor(e1));
};
m.dividedToIntegerBy = m.divToInt = function(e1) {
    var t1 = this, r1 = t1.constructor;
    return h(O(t1, new r1(e1), 0, 1, 1), r1.precision, r1.rounding);
};
m.equals = m.eq = function(e1) {
    return this.cmp(e1) === 0;
};
m.floor = function() {
    return h(new this.constructor(this), this.e + 1, 3);
};
m.greaterThan = m.gt = function(e1) {
    return this.cmp(e1) > 0;
};
m.greaterThanOrEqualTo = m.gte = function(e1) {
    var t1 = this.cmp(e1);
    return t1 == 1 || t1 === 0;
};
m.hyperbolicCosine = m.cosh = function() {
    var e1, t1, r1, n1, i1, o1 = this, s1 = o1.constructor, a1 = new s1(1);
    if (!o1.isFinite()) return new s1(o1.s ? 1 / 0 : NaN);
    if (o1.isZero()) return a1;
    r1 = s1.precision, n1 = s1.rounding, s1.precision = r1 + Math.max(o1.e, o1.sd()) + 4, s1.rounding = 1, i1 = o1.d.length, i1 < 32 ? (e1 = Math.ceil(i1 / 3), t1 = (1 / Jr(4, e1)).toString()) : (e1 = 16, t1 = "2.3283064365386962890625e-10"), o1 = gt(s1, 1, o1.times(t1), new s1(1), !0);
    for(var l1, u1 = e1, c1 = new s1(8); u1--;)l1 = o1.times(o1), o1 = a1.minus(l1.times(c1.minus(l1.times(c1))));
    return h(o1, s1.precision = r1, s1.rounding = n1, !0);
};
m.hyperbolicSine = m.sinh = function() {
    var e1, t1, r1, n1, i1 = this, o1 = i1.constructor;
    if (!i1.isFinite() || i1.isZero()) return new o1(i1);
    if (t1 = o1.precision, r1 = o1.rounding, o1.precision = t1 + Math.max(i1.e, i1.sd()) + 4, o1.rounding = 1, n1 = i1.d.length, n1 < 3) i1 = gt(o1, 2, i1, i1, !0);
    else {
        e1 = 1.4 * Math.sqrt(n1), e1 = e1 > 16 ? 16 : e1 | 0, i1 = i1.times(1 / Jr(5, e1)), i1 = gt(o1, 2, i1, i1, !0);
        for(var s1, a1 = new o1(5), l1 = new o1(16), u1 = new o1(20); e1--;)s1 = i1.times(i1), i1 = i1.times(a1.plus(s1.times(l1.times(s1).plus(u1))));
    }
    return o1.precision = t1, o1.rounding = r1, h(i1, t1, r1, !0);
};
m.hyperbolicTangent = m.tanh = function() {
    var e1, t1, r1 = this, n1 = r1.constructor;
    return r1.isFinite() ? r1.isZero() ? new n1(r1) : (e1 = n1.precision, t1 = n1.rounding, n1.precision = e1 + 7, n1.rounding = 1, O(r1.sinh(), r1.cosh(), n1.precision = e1, n1.rounding = t1)) : new n1(r1.s);
};
m.inverseCosine = m.acos = function() {
    var e1, t1 = this, r1 = t1.constructor, n1 = t1.abs().cmp(1), i1 = r1.precision, o1 = r1.rounding;
    return n1 !== -1 ? n1 === 0 ? t1.isNeg() ? fe(r1, i1, o1) : new r1(0) : new r1(NaN) : t1.isZero() ? fe(r1, i1 + 4, o1).times(.5) : (r1.precision = i1 + 6, r1.rounding = 1, t1 = t1.asin(), e1 = fe(r1, i1 + 4, o1).times(.5), r1.precision = i1, r1.rounding = o1, e1.minus(t1));
};
m.inverseHyperbolicCosine = m.acosh = function() {
    var e1, t1, r1 = this, n1 = r1.constructor;
    return r1.lte(1) ? new n1(r1.eq(1) ? 0 : NaN) : r1.isFinite() ? (e1 = n1.precision, t1 = n1.rounding, n1.precision = e1 + Math.max(Math.abs(r1.e), r1.sd()) + 4, n1.rounding = 1, w = !1, r1 = r1.times(r1).minus(1).sqrt().plus(r1), w = !0, n1.precision = e1, n1.rounding = t1, r1.ln()) : new n1(r1);
};
m.inverseHyperbolicSine = m.asinh = function() {
    var e1, t1, r1 = this, n1 = r1.constructor;
    return !r1.isFinite() || r1.isZero() ? new n1(r1) : (e1 = n1.precision, t1 = n1.rounding, n1.precision = e1 + 2 * Math.max(Math.abs(r1.e), r1.sd()) + 6, n1.rounding = 1, w = !1, r1 = r1.times(r1).plus(1).sqrt().plus(r1), w = !0, n1.precision = e1, n1.rounding = t1, r1.ln());
};
m.inverseHyperbolicTangent = m.atanh = function() {
    var e1, t1, r1, n1, i1 = this, o1 = i1.constructor;
    return i1.isFinite() ? i1.e >= 0 ? new o1(i1.abs().eq(1) ? i1.s / 0 : i1.isZero() ? i1 : NaN) : (e1 = o1.precision, t1 = o1.rounding, n1 = i1.sd(), Math.max(n1, e1) < 2 * -i1.e - 1 ? h(new o1(i1), e1, t1, !0) : (o1.precision = r1 = n1 - i1.e, i1 = O(i1.plus(1), new o1(1).minus(i1), r1 + e1, 1), o1.precision = e1 + 4, o1.rounding = 1, i1 = i1.ln(), o1.precision = e1, o1.rounding = t1, i1.times(.5))) : new o1(NaN);
};
m.inverseSine = m.asin = function() {
    var e1, t1, r1, n1, i1 = this, o1 = i1.constructor;
    return i1.isZero() ? new o1(i1) : (t1 = i1.abs().cmp(1), r1 = o1.precision, n1 = o1.rounding, t1 !== -1 ? t1 === 0 ? (e1 = fe(o1, r1 + 4, n1).times(.5), e1.s = i1.s, e1) : new o1(NaN) : (o1.precision = r1 + 6, o1.rounding = 1, i1 = i1.div(new o1(1).minus(i1.times(i1)).sqrt().plus(1)).atan(), o1.precision = r1, o1.rounding = n1, i1.times(2)));
};
m.inverseTangent = m.atan = function() {
    var e1, t1, r1, n1, i1, o1, s1, a1, l1, u1 = this, c1 = u1.constructor, p1 = c1.precision, d1 = c1.rounding;
    if (u1.isFinite()) {
        if (u1.isZero()) return new c1(u1);
        if (u1.abs().eq(1) && p1 + 4 <= fi) return s1 = fe(c1, p1 + 4, d1).times(.25), s1.s = u1.s, s1;
    } else {
        if (!u1.s) return new c1(NaN);
        if (p1 + 4 <= fi) return s1 = fe(c1, p1 + 4, d1).times(.5), s1.s = u1.s, s1;
    }
    for(c1.precision = a1 = p1 + 10, c1.rounding = 1, r1 = Math.min(28, a1 / b + 2 | 0), e1 = r1; e1; --e1)u1 = u1.div(u1.times(u1).plus(1).sqrt().plus(1));
    for(w = !1, t1 = Math.ceil(a1 / b), n1 = 1, l1 = u1.times(u1), s1 = new c1(u1), i1 = u1; e1 !== -1;)if (i1 = i1.times(l1), o1 = s1.minus(i1.div(n1 += 2)), i1 = i1.times(l1), s1 = o1.plus(i1.div(n1 += 2)), s1.d[t1] !== void 0) for(e1 = t1; s1.d[e1] === o1.d[e1] && e1--;);
    return r1 && (s1 = s1.times(2 << r1 - 1)), w = !0, h(s1, c1.precision = p1, c1.rounding = d1, !0);
};
m.isFinite = function() {
    return !!this.d;
};
m.isInteger = m.isInt = function() {
    return !!this.d && ee(this.e / b) > this.d.length - 2;
};
m.isNaN = function() {
    return !this.s;
};
m.isNegative = m.isNeg = function() {
    return this.s < 0;
};
m.isPositive = m.isPos = function() {
    return this.s > 0;
};
m.isZero = function() {
    return !!this.d && this.d[0] === 0;
};
m.lessThan = m.lt = function(e1) {
    return this.cmp(e1) < 0;
};
m.lessThanOrEqualTo = m.lte = function(e1) {
    return this.cmp(e1) < 1;
};
m.logarithm = m.log = function(e1) {
    var t1, r1, n1, i1, o1, s1, a1, l1, u1 = this, c1 = u1.constructor, p1 = c1.precision, d1 = c1.rounding, f1 = 5;
    if (e1 == null) e1 = new c1(10), t1 = !0;
    else {
        if (e1 = new c1(e1), r1 = e1.d, e1.s < 0 || !r1 || !r1[0] || e1.eq(1)) return new c1(NaN);
        t1 = e1.eq(10);
    }
    if (r1 = u1.d, u1.s < 0 || !r1 || !r1[0] || u1.eq(1)) return new c1(r1 && !r1[0] ? -1 / 0 : u1.s != 1 ? NaN : r1 ? 0 : 1 / 0);
    if (t1) if (r1.length > 1) o1 = !0;
    else {
        for(i1 = r1[0]; i1 % 10 === 0;)i1 /= 10;
        o1 = i1 !== 1;
    }
    if (w = !1, a1 = p1 + f1, s1 = _e(u1, a1), n1 = t1 ? Ur(c1, a1 + 10) : _e(e1, a1), l1 = O(s1, n1, a1, 1), Qt(l1.d, i1 = p1, d1)) do if (a1 += 10, s1 = _e(u1, a1), n1 = t1 ? Ur(c1, a1 + 10) : _e(e1, a1), l1 = O(s1, n1, a1, 1), !o1) {
        +W(l1.d).slice(i1 + 1, i1 + 15) + 1 == 1e14 && (l1 = h(l1, p1 + 1, 0));
        break;
    }
    while (Qt(l1.d, i1 += 10, d1));
    return w = !0, h(l1, p1, d1);
};
m.minus = m.sub = function(e1) {
    var t1, r1, n1, i1, o1, s1, a1, l1, u1, c1, p1, d1, f1 = this, y1 = f1.constructor;
    if (e1 = new y1(e1), !f1.d || !e1.d) return !f1.s || !e1.s ? e1 = new y1(NaN) : f1.d ? e1.s = -e1.s : e1 = new y1(e1.d || f1.s !== e1.s ? f1 : NaN), e1;
    if (f1.s != e1.s) return e1.s = -e1.s, f1.plus(e1);
    if (u1 = f1.d, d1 = e1.d, a1 = y1.precision, l1 = y1.rounding, !u1[0] || !d1[0]) {
        if (d1[0]) e1.s = -e1.s;
        else if (u1[0]) e1 = new y1(f1);
        else return new y1(l1 === 3 ? -0 : 0);
        return w ? h(e1, a1, l1) : e1;
    }
    if (r1 = ee(e1.e / b), c1 = ee(f1.e / b), u1 = u1.slice(), o1 = c1 - r1, o1) {
        for(p1 = o1 < 0, p1 ? (t1 = u1, o1 = -o1, s1 = d1.length) : (t1 = d1, r1 = c1, s1 = u1.length), n1 = Math.max(Math.ceil(a1 / b), s1) + 2, o1 > n1 && (o1 = n1, t1.length = 1), t1.reverse(), n1 = o1; n1--;)t1.push(0);
        t1.reverse();
    } else {
        for(n1 = u1.length, s1 = d1.length, p1 = n1 < s1, p1 && (s1 = n1), n1 = 0; n1 < s1; n1++)if (u1[n1] != d1[n1]) {
            p1 = u1[n1] < d1[n1];
            break;
        }
        o1 = 0;
    }
    for(p1 && (t1 = u1, u1 = d1, d1 = t1, e1.s = -e1.s), s1 = u1.length, n1 = d1.length - s1; n1 > 0; --n1)u1[s1++] = 0;
    for(n1 = d1.length; n1 > o1;){
        if (u1[--n1] < d1[n1]) {
            for(i1 = n1; i1 && u1[--i1] === 0;)u1[i1] = ge - 1;
            --u1[i1], u1[n1] += ge;
        }
        u1[n1] -= d1[n1];
    }
    for(; u1[--s1] === 0;)u1.pop();
    for(; u1[0] === 0; u1.shift())--r1;
    return u1[0] ? (e1.d = u1, e1.e = Qr(u1, r1), w ? h(e1, a1, l1) : e1) : new y1(l1 === 3 ? -0 : 0);
};
m.modulo = m.mod = function(e1) {
    var t1, r1 = this, n1 = r1.constructor;
    return e1 = new n1(e1), !r1.d || !e1.s || e1.d && !e1.d[0] ? new n1(NaN) : !e1.d || r1.d && !r1.d[0] ? h(new n1(r1), n1.precision, n1.rounding) : (w = !1, n1.modulo == 9 ? (t1 = O(r1, e1.abs(), 0, 3, 1), t1.s *= e1.s) : t1 = O(r1, e1, 0, n1.modulo, 1), t1 = t1.times(e1), w = !0, r1.minus(t1));
};
m.naturalExponential = m.exp = function() {
    return gi(this);
};
m.naturalLogarithm = m.ln = function() {
    return _e(this);
};
m.negated = m.neg = function() {
    var e1 = new this.constructor(this);
    return e1.s = -e1.s, h(e1);
};
m.plus = m.add = function(e1) {
    var t1, r1, n1, i1, o1, s1, a1, l1, u1, c1, p1 = this, d1 = p1.constructor;
    if (e1 = new d1(e1), !p1.d || !e1.d) return !p1.s || !e1.s ? e1 = new d1(NaN) : p1.d || (e1 = new d1(e1.d || p1.s === e1.s ? p1 : NaN)), e1;
    if (p1.s != e1.s) return e1.s = -e1.s, p1.minus(e1);
    if (u1 = p1.d, c1 = e1.d, a1 = d1.precision, l1 = d1.rounding, !u1[0] || !c1[0]) return c1[0] || (e1 = new d1(p1)), w ? h(e1, a1, l1) : e1;
    if (o1 = ee(p1.e / b), n1 = ee(e1.e / b), u1 = u1.slice(), i1 = o1 - n1, i1) {
        for(i1 < 0 ? (r1 = u1, i1 = -i1, s1 = c1.length) : (r1 = c1, n1 = o1, s1 = u1.length), o1 = Math.ceil(a1 / b), s1 = o1 > s1 ? o1 + 1 : s1 + 1, i1 > s1 && (i1 = s1, r1.length = 1), r1.reverse(); i1--;)r1.push(0);
        r1.reverse();
    }
    for(s1 = u1.length, i1 = c1.length, s1 - i1 < 0 && (i1 = s1, r1 = c1, c1 = u1, u1 = r1), t1 = 0; i1;)t1 = (u1[--i1] = u1[i1] + c1[i1] + t1) / ge | 0, u1[i1] %= ge;
    for(t1 && (u1.unshift(t1), ++n1), s1 = u1.length; u1[--s1] == 0;)u1.pop();
    return e1.d = u1, e1.e = Qr(u1, n1), w ? h(e1, a1, l1) : e1;
};
m.precision = m.sd = function(e1) {
    var t1, r1 = this;
    if (e1 !== void 0 && e1 !== !!e1 && e1 !== 1 && e1 !== 0) throw Error(Ne + e1);
    return r1.d ? (t1 = ws(r1.d), e1 && r1.e + 1 > t1 && (t1 = r1.e + 1)) : t1 = NaN, t1;
};
m.round = function() {
    var e1 = this, t1 = e1.constructor;
    return h(new t1(e1), e1.e + 1, t1.rounding);
};
m.sine = m.sin = function() {
    var e1, t1, r1 = this, n1 = r1.constructor;
    return r1.isFinite() ? r1.isZero() ? new n1(r1) : (e1 = n1.precision, t1 = n1.rounding, n1.precision = e1 + Math.max(r1.e, r1.sd()) + b, n1.rounding = 1, r1 = oc(n1, Cs(n1, r1)), n1.precision = e1, n1.rounding = t1, h(Re > 2 ? r1.neg() : r1, e1, t1, !0)) : new n1(NaN);
};
m.squareRoot = m.sqrt = function() {
    var e1, t1, r1, n1, i1, o1, s1 = this, a1 = s1.d, l1 = s1.e, u1 = s1.s, c1 = s1.constructor;
    if (u1 !== 1 || !a1 || !a1[0]) return new c1(!u1 || u1 < 0 && (!a1 || a1[0]) ? NaN : a1 ? s1 : 1 / 0);
    for(w = !1, u1 = Math.sqrt(+s1), u1 == 0 || u1 == 1 / 0 ? (t1 = W(a1), (t1.length + l1) % 2 == 0 && (t1 += "0"), u1 = Math.sqrt(t1), l1 = ee((l1 + 1) / 2) - (l1 < 0 || l1 % 2), u1 == 1 / 0 ? t1 = "5e" + l1 : (t1 = u1.toExponential(), t1 = t1.slice(0, t1.indexOf("e") + 1) + l1), n1 = new c1(t1)) : n1 = new c1(u1.toString()), r1 = (l1 = c1.precision) + 3;;)if (o1 = n1, n1 = o1.plus(O(s1, o1, r1 + 2, 1)).times(.5), W(o1.d).slice(0, r1) === (t1 = W(n1.d)).slice(0, r1)) if (t1 = t1.slice(r1 - 3, r1 + 1), t1 == "9999" || !i1 && t1 == "4999") {
        if (!i1 && (h(o1, l1 + 1, 0), o1.times(o1).eq(s1))) {
            n1 = o1;
            break;
        }
        r1 += 4, i1 = 1;
    } else {
        (!+t1 || !+t1.slice(1) && t1.charAt(0) == "5") && (h(n1, l1 + 1, 1), e1 = !n1.times(n1).eq(s1));
        break;
    }
    return w = !0, h(n1, l1, c1.rounding, e1);
};
m.tangent = m.tan = function() {
    var e1, t1, r1 = this, n1 = r1.constructor;
    return r1.isFinite() ? r1.isZero() ? new n1(r1) : (e1 = n1.precision, t1 = n1.rounding, n1.precision = e1 + 10, n1.rounding = 1, r1 = r1.sin(), r1.s = 1, r1 = O(r1, new n1(1).minus(r1.times(r1)).sqrt(), e1 + 10, 0), n1.precision = e1, n1.rounding = t1, h(Re == 2 || Re == 4 ? r1.neg() : r1, e1, t1, !0)) : new n1(NaN);
};
m.times = m.mul = function(e1) {
    var t1, r1, n1, i1, o1, s1, a1, l1, u1, c1 = this, p1 = c1.constructor, d1 = c1.d, f1 = (e1 = new p1(e1)).d;
    if (e1.s *= c1.s, !d1 || !d1[0] || !f1 || !f1[0]) return new p1(!e1.s || d1 && !d1[0] && !f1 || f1 && !f1[0] && !d1 ? NaN : !d1 || !f1 ? e1.s / 0 : e1.s * 0);
    for(r1 = ee(c1.e / b) + ee(e1.e / b), l1 = d1.length, u1 = f1.length, l1 < u1 && (o1 = d1, d1 = f1, f1 = o1, s1 = l1, l1 = u1, u1 = s1), o1 = [], s1 = l1 + u1, n1 = s1; n1--;)o1.push(0);
    for(n1 = u1; --n1 >= 0;){
        for(t1 = 0, i1 = l1 + n1; i1 > n1;)a1 = o1[i1] + f1[n1] * d1[i1 - n1 - 1] + t1, o1[i1--] = a1 % ge | 0, t1 = a1 / ge | 0;
        o1[i1] = (o1[i1] + t1) % ge | 0;
    }
    for(; !o1[--s1];)o1.pop();
    return t1 ? ++r1 : o1.shift(), e1.d = o1, e1.e = Qr(o1, r1), w ? h(e1, p1.precision, p1.rounding) : e1;
};
m.toBinary = function(e1, t1) {
    return hi(this, 2, e1, t1);
};
m.toDecimalPlaces = m.toDP = function(e1, t1) {
    var r1 = this, n1 = r1.constructor;
    return r1 = new n1(r1), e1 === void 0 ? r1 : (se(e1, 0, Le), t1 === void 0 ? t1 = n1.rounding : se(t1, 0, 8), h(r1, e1 + r1.e + 1, t1));
};
m.toExponential = function(e1, t1) {
    var r1, n1 = this, i1 = n1.constructor;
    return e1 === void 0 ? r1 = Ee(n1, !0) : (se(e1, 0, Le), t1 === void 0 ? t1 = i1.rounding : se(t1, 0, 8), n1 = h(new i1(n1), e1 + 1, t1), r1 = Ee(n1, !0, e1 + 1)), n1.isNeg() && !n1.isZero() ? "-" + r1 : r1;
};
m.toFixed = function(e1, t1) {
    var r1, n1, i1 = this, o1 = i1.constructor;
    return e1 === void 0 ? r1 = Ee(i1) : (se(e1, 0, Le), t1 === void 0 ? t1 = o1.rounding : se(t1, 0, 8), n1 = h(new o1(i1), e1 + i1.e + 1, t1), r1 = Ee(n1, !1, e1 + n1.e + 1)), i1.isNeg() && !i1.isZero() ? "-" + r1 : r1;
};
m.toFraction = function(e1) {
    var t1, r1, n1, i1, o1, s1, a1, l1, u1, c1, p1, d1, f1 = this, y1 = f1.d, g1 = f1.constructor;
    if (!y1) return new g1(f1);
    if (u1 = r1 = new g1(1), n1 = l1 = new g1(0), t1 = new g1(n1), o1 = t1.e = ws(y1) - f1.e - 1, s1 = o1 % b, t1.d[0] = j(10, s1 < 0 ? b + s1 : s1), e1 == null) e1 = o1 > 0 ? t1 : u1;
    else {
        if (a1 = new g1(e1), !a1.isInt() || a1.lt(u1)) throw Error(Ne + a1);
        e1 = a1.gt(t1) ? o1 > 0 ? t1 : u1 : a1;
    }
    for(w = !1, a1 = new g1(W(y1)), c1 = g1.precision, g1.precision = o1 = y1.length * b * 2; p1 = O(a1, t1, 0, 1, 1), i1 = r1.plus(p1.times(n1)), i1.cmp(e1) != 1;)r1 = n1, n1 = i1, i1 = u1, u1 = l1.plus(p1.times(i1)), l1 = i1, i1 = t1, t1 = a1.minus(p1.times(i1)), a1 = i1;
    return i1 = O(e1.minus(r1), n1, 0, 1, 1), l1 = l1.plus(i1.times(u1)), r1 = r1.plus(i1.times(n1)), l1.s = u1.s = f1.s, d1 = O(u1, n1, o1, 1).minus(f1).abs().cmp(O(l1, r1, o1, 1).minus(f1).abs()) < 1 ? [
        u1,
        n1
    ] : [
        l1,
        r1
    ], g1.precision = c1, w = !0, d1;
};
m.toHexadecimal = m.toHex = function(e1, t1) {
    return hi(this, 16, e1, t1);
};
m.toNearest = function(e1, t1) {
    var r1 = this, n1 = r1.constructor;
    if (r1 = new n1(r1), e1 == null) {
        if (!r1.d) return r1;
        e1 = new n1(1), t1 = n1.rounding;
    } else {
        if (e1 = new n1(e1), t1 === void 0 ? t1 = n1.rounding : se(t1, 0, 8), !r1.d) return e1.s ? r1 : e1;
        if (!e1.d) return e1.s && (e1.s = r1.s), e1;
    }
    return e1.d[0] ? (w = !1, r1 = O(r1, e1, 0, t1, 1).times(e1), w = !0, h(r1)) : (e1.s = r1.s, r1 = e1), r1;
};
m.toNumber = function() {
    return +this;
};
m.toOctal = function(e1, t1) {
    return hi(this, 8, e1, t1);
};
m.toPower = m.pow = function(e1) {
    var t1, r1, n1, i1, o1, s1, a1 = this, l1 = a1.constructor, u1 = +(e1 = new l1(e1));
    if (!a1.d || !e1.d || !a1.d[0] || !e1.d[0]) return new l1(j(+a1, u1));
    if (a1 = new l1(a1), a1.eq(1)) return a1;
    if (n1 = l1.precision, o1 = l1.rounding, e1.eq(1)) return h(a1, n1, o1);
    if (t1 = ee(e1.e / b), t1 >= e1.d.length - 1 && (r1 = u1 < 0 ? -u1 : u1) <= tc) return i1 = Ps(l1, a1, r1, n1), e1.s < 0 ? new l1(1).div(i1) : h(i1, n1, o1);
    if (s1 = a1.s, s1 < 0) {
        if (t1 < e1.d.length - 1) return new l1(NaN);
        if (e1.d[t1] & 1 || (s1 = 1), a1.e == 0 && a1.d[0] == 1 && a1.d.length == 1) return a1.s = s1, a1;
    }
    return r1 = j(+a1, u1), t1 = r1 == 0 || !isFinite(r1) ? ee(u1 * (Math.log("0." + W(a1.d)) / Math.LN10 + a1.e + 1)) : new l1(r1 + "").e, t1 > l1.maxE + 1 || t1 < l1.minE - 1 ? new l1(t1 > 0 ? s1 / 0 : 0) : (w = !1, l1.rounding = a1.s = 1, r1 = Math.min(12, (t1 + "").length), i1 = gi(e1.times(_e(a1, n1 + r1)), n1), i1.d && (i1 = h(i1, n1 + 5, 1), Qt(i1.d, n1, o1) && (t1 = n1 + 10, i1 = h(gi(e1.times(_e(a1, t1 + r1)), t1), t1 + 5, 1), +W(i1.d).slice(n1 + 1, n1 + 15) + 1 == 1e14 && (i1 = h(i1, n1 + 1, 0)))), i1.s = s1, w = !0, l1.rounding = o1, h(i1, n1, o1));
};
m.toPrecision = function(e1, t1) {
    var r1, n1 = this, i1 = n1.constructor;
    return e1 === void 0 ? r1 = Ee(n1, n1.e <= i1.toExpNeg || n1.e >= i1.toExpPos) : (se(e1, 1, Le), t1 === void 0 ? t1 = i1.rounding : se(t1, 0, 8), n1 = h(new i1(n1), e1, t1), r1 = Ee(n1, e1 <= n1.e || n1.e <= i1.toExpNeg, e1)), n1.isNeg() && !n1.isZero() ? "-" + r1 : r1;
};
m.toSignificantDigits = m.toSD = function(e1, t1) {
    var r1 = this, n1 = r1.constructor;
    return e1 === void 0 ? (e1 = n1.precision, t1 = n1.rounding) : (se(e1, 1, Le), t1 === void 0 ? t1 = n1.rounding : se(t1, 0, 8)), h(new n1(r1), e1, t1);
};
m.toString = function() {
    var e1 = this, t1 = e1.constructor, r1 = Ee(e1, e1.e <= t1.toExpNeg || e1.e >= t1.toExpPos);
    return e1.isNeg() && !e1.isZero() ? "-" + r1 : r1;
};
m.truncated = m.trunc = function() {
    return h(new this.constructor(this), this.e + 1, 1);
};
m.valueOf = m.toJSON = function() {
    var e1 = this, t1 = e1.constructor, r1 = Ee(e1, e1.e <= t1.toExpNeg || e1.e >= t1.toExpPos);
    return e1.isNeg() ? "-" + r1 : r1;
};
function W(e1) {
    var t1, r1, n1, i1 = e1.length - 1, o1 = "", s1 = e1[0];
    if (i1 > 0) {
        for(o1 += s1, t1 = 1; t1 < i1; t1++)n1 = e1[t1] + "", r1 = b - n1.length, r1 && (o1 += De(r1)), o1 += n1;
        s1 = e1[t1], n1 = s1 + "", r1 = b - n1.length, r1 && (o1 += De(r1));
    } else if (s1 === 0) return "0";
    for(; s1 % 10 === 0;)s1 /= 10;
    return o1 + s1;
}
function se(e1, t1, r1) {
    if (e1 !== ~~e1 || e1 < t1 || e1 > r1) throw Error(Ne + e1);
}
function Qt(e1, t1, r1, n1) {
    var i1, o1, s1, a1;
    for(o1 = e1[0]; o1 >= 10; o1 /= 10)--t1;
    return --t1 < 0 ? (t1 += b, i1 = 0) : (i1 = Math.ceil((t1 + 1) / b), t1 %= b), o1 = j(10, b - t1), a1 = e1[i1] % o1 | 0, n1 == null ? t1 < 3 ? (t1 == 0 ? a1 = a1 / 100 | 0 : t1 == 1 && (a1 = a1 / 10 | 0), s1 = r1 < 4 && a1 == 99999 || r1 > 3 && a1 == 49999 || a1 == 5e4 || a1 == 0) : s1 = (r1 < 4 && a1 + 1 == o1 || r1 > 3 && a1 + 1 == o1 / 2) && (e1[i1 + 1] / o1 / 100 | 0) == j(10, t1 - 2) - 1 || (a1 == o1 / 2 || a1 == 0) && (e1[i1 + 1] / o1 / 100 | 0) == 0 : t1 < 4 ? (t1 == 0 ? a1 = a1 / 1e3 | 0 : t1 == 1 ? a1 = a1 / 100 | 0 : t1 == 2 && (a1 = a1 / 10 | 0), s1 = (n1 || r1 < 4) && a1 == 9999 || !n1 && r1 > 3 && a1 == 4999) : s1 = ((n1 || r1 < 4) && a1 + 1 == o1 || !n1 && r1 > 3 && a1 + 1 == o1 / 2) && (e1[i1 + 1] / o1 / 1e3 | 0) == j(10, t1 - 3) - 1, s1;
}
function Vr(e1, t1, r1) {
    for(var n1, i1 = [
        0
    ], o1, s1 = 0, a1 = e1.length; s1 < a1;){
        for(o1 = i1.length; o1--;)i1[o1] *= t1;
        for(i1[0] += di.indexOf(e1.charAt(s1++)), n1 = 0; n1 < i1.length; n1++)i1[n1] > r1 - 1 && (i1[n1 + 1] === void 0 && (i1[n1 + 1] = 0), i1[n1 + 1] += i1[n1] / r1 | 0, i1[n1] %= r1);
    }
    return i1.reverse();
}
function nc(e1, t1) {
    var r1, n1, i1;
    if (t1.isZero()) return t1;
    n1 = t1.d.length, n1 < 32 ? (r1 = Math.ceil(n1 / 3), i1 = (1 / Jr(4, r1)).toString()) : (r1 = 16, i1 = "2.3283064365386962890625e-10"), e1.precision += r1, t1 = gt(e1, 1, t1.times(i1), new e1(1));
    for(var o1 = r1; o1--;){
        var s1 = t1.times(t1);
        t1 = s1.times(s1).minus(s1).times(8).plus(1);
    }
    return e1.precision -= r1, t1;
}
var O = function() {
    function e1(n1, i1, o1) {
        var s1, a1 = 0, l1 = n1.length;
        for(n1 = n1.slice(); l1--;)s1 = n1[l1] * i1 + a1, n1[l1] = s1 % o1 | 0, a1 = s1 / o1 | 0;
        return a1 && n1.unshift(a1), n1;
    }
    function t1(n1, i1, o1, s1) {
        var a1, l1;
        if (o1 != s1) l1 = o1 > s1 ? 1 : -1;
        else for(a1 = l1 = 0; a1 < o1; a1++)if (n1[a1] != i1[a1]) {
            l1 = n1[a1] > i1[a1] ? 1 : -1;
            break;
        }
        return l1;
    }
    function r1(n1, i1, o1, s1) {
        for(var a1 = 0; o1--;)n1[o1] -= a1, a1 = n1[o1] < i1[o1] ? 1 : 0, n1[o1] = a1 * s1 + n1[o1] - i1[o1];
        for(; !n1[0] && n1.length > 1;)n1.shift();
    }
    return function(n1, i1, o1, s1, a1, l1) {
        var u1, c1, p1, d1, f1, y1, g1, P1, T1, C1, x1, R1, ce1, G1, Ue1, $1, z1, Te1, Y1, et1, gr1 = n1.constructor, Pn1 = n1.s == i1.s ? 1 : -1, Z1 = n1.d, F1 = i1.d;
        if (!Z1 || !Z1[0] || !F1 || !F1[0]) return new gr1(!n1.s || !i1.s || (Z1 ? F1 && Z1[0] == F1[0] : !F1) ? NaN : Z1 && Z1[0] == 0 || !F1 ? Pn1 * 0 : Pn1 / 0);
        for(l1 ? (f1 = 1, c1 = n1.e - i1.e) : (l1 = ge, f1 = b, c1 = ee(n1.e / f1) - ee(i1.e / f1)), Y1 = F1.length, z1 = Z1.length, T1 = new gr1(Pn1), C1 = T1.d = [], p1 = 0; F1[p1] == (Z1[p1] || 0); p1++);
        if (F1[p1] > (Z1[p1] || 0) && c1--, o1 == null ? (G1 = o1 = gr1.precision, s1 = gr1.rounding) : a1 ? G1 = o1 + (n1.e - i1.e) + 1 : G1 = o1, G1 < 0) C1.push(1), y1 = !0;
        else {
            if (G1 = G1 / f1 + 2 | 0, p1 = 0, Y1 == 1) {
                for(d1 = 0, F1 = F1[0], G1++; (p1 < z1 || d1) && G1--; p1++)Ue1 = d1 * l1 + (Z1[p1] || 0), C1[p1] = Ue1 / F1 | 0, d1 = Ue1 % F1 | 0;
                y1 = d1 || p1 < z1;
            } else {
                for(d1 = l1 / (F1[0] + 1) | 0, d1 > 1 && (F1 = e1(F1, d1, l1), Z1 = e1(Z1, d1, l1), Y1 = F1.length, z1 = Z1.length), $1 = Y1, x1 = Z1.slice(0, Y1), R1 = x1.length; R1 < Y1;)x1[R1++] = 0;
                et1 = F1.slice(), et1.unshift(0), Te1 = F1[0], F1[1] >= l1 / 2 && ++Te1;
                do d1 = 0, u1 = t1(F1, x1, Y1, R1), u1 < 0 ? (ce1 = x1[0], Y1 != R1 && (ce1 = ce1 * l1 + (x1[1] || 0)), d1 = ce1 / Te1 | 0, d1 > 1 ? (d1 >= l1 && (d1 = l1 - 1), g1 = e1(F1, d1, l1), P1 = g1.length, R1 = x1.length, u1 = t1(g1, x1, P1, R1), u1 == 1 && (d1--, r1(g1, Y1 < P1 ? et1 : F1, P1, l1))) : (d1 == 0 && (u1 = d1 = 1), g1 = F1.slice()), P1 = g1.length, P1 < R1 && g1.unshift(0), r1(x1, g1, R1, l1), u1 == -1 && (R1 = x1.length, u1 = t1(F1, x1, Y1, R1), u1 < 1 && (d1++, r1(x1, Y1 < R1 ? et1 : F1, R1, l1))), R1 = x1.length) : u1 === 0 && (d1++, x1 = [
                    0
                ]), C1[p1++] = d1, u1 && x1[0] ? x1[R1++] = Z1[$1] || 0 : (x1 = [
                    Z1[$1]
                ], R1 = 1);
                while (($1++ < z1 || x1[0] !== void 0) && G1--);
                y1 = x1[0] !== void 0;
            }
            C1[0] || C1.shift();
        }
        if (f1 == 1) T1.e = c1, ys = y1;
        else {
            for(p1 = 1, d1 = C1[0]; d1 >= 10; d1 /= 10)p1++;
            T1.e = p1 + c1 * f1 - 1, h(T1, a1 ? o1 + T1.e + 1 : o1, s1, y1);
        }
        return T1;
    };
}();
function h(e1, t1, r1, n1) {
    var i1, o1, s1, a1, l1, u1, c1, p1, d1, f1 = e1.constructor;
    e: if (t1 != null) {
        if (p1 = e1.d, !p1) return e1;
        for(i1 = 1, a1 = p1[0]; a1 >= 10; a1 /= 10)i1++;
        if (o1 = t1 - i1, o1 < 0) o1 += b, s1 = t1, c1 = p1[d1 = 0], l1 = c1 / j(10, i1 - s1 - 1) % 10 | 0;
        else if (d1 = Math.ceil((o1 + 1) / b), a1 = p1.length, d1 >= a1) if (n1) {
            for(; a1++ <= d1;)p1.push(0);
            c1 = l1 = 0, i1 = 1, o1 %= b, s1 = o1 - b + 1;
        } else break e;
        else {
            for(c1 = a1 = p1[d1], i1 = 1; a1 >= 10; a1 /= 10)i1++;
            o1 %= b, s1 = o1 - b + i1, l1 = s1 < 0 ? 0 : c1 / j(10, i1 - s1 - 1) % 10 | 0;
        }
        if (n1 = n1 || t1 < 0 || p1[d1 + 1] !== void 0 || (s1 < 0 ? c1 : c1 % j(10, i1 - s1 - 1)), u1 = r1 < 4 ? (l1 || n1) && (r1 == 0 || r1 == (e1.s < 0 ? 3 : 2)) : l1 > 5 || l1 == 5 && (r1 == 4 || n1 || r1 == 6 && (o1 > 0 ? s1 > 0 ? c1 / j(10, i1 - s1) : 0 : p1[d1 - 1]) % 10 & 1 || r1 == (e1.s < 0 ? 8 : 7)), t1 < 1 || !p1[0]) return p1.length = 0, u1 ? (t1 -= e1.e + 1, p1[0] = j(10, (b - t1 % b) % b), e1.e = -t1 || 0) : p1[0] = e1.e = 0, e1;
        if (o1 == 0 ? (p1.length = d1, a1 = 1, d1--) : (p1.length = d1 + 1, a1 = j(10, b - o1), p1[d1] = s1 > 0 ? (c1 / j(10, i1 - s1) % j(10, s1) | 0) * a1 : 0), u1) for(;;)if (d1 == 0) {
            for(o1 = 1, s1 = p1[0]; s1 >= 10; s1 /= 10)o1++;
            for(s1 = p1[0] += a1, a1 = 1; s1 >= 10; s1 /= 10)a1++;
            o1 != a1 && (e1.e++, p1[0] == ge && (p1[0] = 1));
            break;
        } else {
            if (p1[d1] += a1, p1[d1] != ge) break;
            p1[d1--] = 0, a1 = 1;
        }
        for(o1 = p1.length; p1[--o1] === 0;)p1.pop();
    }
    return w && (e1.e > f1.maxE ? (e1.d = null, e1.e = NaN) : e1.e < f1.minE && (e1.e = 0, e1.d = [
        0
    ])), e1;
}
function Ee(e1, t1, r1) {
    if (!e1.isFinite()) return Ts(e1);
    var n1, i1 = e1.e, o1 = W(e1.d), s1 = o1.length;
    return t1 ? (r1 && (n1 = r1 - s1) > 0 ? o1 = o1.charAt(0) + "." + o1.slice(1) + De(n1) : s1 > 1 && (o1 = o1.charAt(0) + "." + o1.slice(1)), o1 = o1 + (e1.e < 0 ? "e" : "e+") + e1.e) : i1 < 0 ? (o1 = "0." + De(-i1 - 1) + o1, r1 && (n1 = r1 - s1) > 0 && (o1 += De(n1))) : i1 >= s1 ? (o1 += De(i1 + 1 - s1), r1 && (n1 = r1 - i1 - 1) > 0 && (o1 = o1 + "." + De(n1))) : ((n1 = i1 + 1) < s1 && (o1 = o1.slice(0, n1) + "." + o1.slice(n1)), r1 && (n1 = r1 - s1) > 0 && (i1 + 1 === s1 && (o1 += "."), o1 += De(n1))), o1;
}
function Qr(e1, t1) {
    var r1 = e1[0];
    for(t1 *= b; r1 >= 10; r1 /= 10)t1++;
    return t1;
}
function Ur(e1, t1, r1) {
    if (t1 > rc) throw w = !0, r1 && (e1.precision = r1), Error(hs);
    return h(new e1(jr), t1, 1, !0);
}
function fe(e1, t1, r1) {
    if (t1 > fi) throw Error(hs);
    return h(new e1(Br), t1, r1, !0);
}
function ws(e1) {
    var t1 = e1.length - 1, r1 = t1 * b + 1;
    if (t1 = e1[t1], t1) {
        for(; t1 % 10 == 0; t1 /= 10)r1--;
        for(t1 = e1[0]; t1 >= 10; t1 /= 10)r1++;
    }
    return r1;
}
function De(e1) {
    for(var t1 = ""; e1--;)t1 += "0";
    return t1;
}
function Ps(e1, t1, r1, n1) {
    var i1, o1 = new e1(1), s1 = Math.ceil(n1 / b + 4);
    for(w = !1;;){
        if (r1 % 2 && (o1 = o1.times(t1), fs(o1.d, s1) && (i1 = !0)), r1 = ee(r1 / 2), r1 === 0) {
            r1 = o1.d.length - 1, i1 && o1.d[r1] === 0 && ++o1.d[r1];
            break;
        }
        t1 = t1.times(t1), fs(t1.d, s1);
    }
    return w = !0, o1;
}
function ms(e1) {
    return e1.d[e1.d.length - 1] & 1;
}
function vs(e1, t1, r1) {
    for(var n1, i1 = new e1(t1[0]), o1 = 0; ++o1 < t1.length;)if (n1 = new e1(t1[o1]), n1.s) i1[r1](n1) && (i1 = n1);
    else {
        i1 = n1;
        break;
    }
    return i1;
}
function gi(e1, t1) {
    var r1, n1, i1, o1, s1, a1, l1, u1 = 0, c1 = 0, p1 = 0, d1 = e1.constructor, f1 = d1.rounding, y1 = d1.precision;
    if (!e1.d || !e1.d[0] || e1.e > 17) return new d1(e1.d ? e1.d[0] ? e1.s < 0 ? 0 : 1 / 0 : 1 : e1.s ? e1.s < 0 ? 0 : e1 : 0 / 0);
    for(t1 == null ? (w = !1, l1 = y1) : l1 = t1, a1 = new d1(.03125); e1.e > -2;)e1 = e1.times(a1), p1 += 5;
    for(n1 = Math.log(j(2, p1)) / Math.LN10 * 2 + 5 | 0, l1 += n1, r1 = o1 = s1 = new d1(1), d1.precision = l1;;){
        if (o1 = h(o1.times(e1), l1, 1), r1 = r1.times(++c1), a1 = s1.plus(O(o1, r1, l1, 1)), W(a1.d).slice(0, l1) === W(s1.d).slice(0, l1)) {
            for(i1 = p1; i1--;)s1 = h(s1.times(s1), l1, 1);
            if (t1 == null) if (u1 < 3 && Qt(s1.d, l1 - n1, f1, u1)) d1.precision = l1 += 10, r1 = o1 = a1 = new d1(1), c1 = 0, u1++;
            else return h(s1, d1.precision = y1, f1, w = !0);
            else return d1.precision = y1, s1;
        }
        s1 = a1;
    }
}
function _e(e1, t1) {
    var r1, n1, i1, o1, s1, a1, l1, u1, c1, p1, d1, f1 = 1, y1 = 10, g1 = e1, P1 = g1.d, T1 = g1.constructor, C1 = T1.rounding, x1 = T1.precision;
    if (g1.s < 0 || !P1 || !P1[0] || !g1.e && P1[0] == 1 && P1.length == 1) return new T1(P1 && !P1[0] ? -1 / 0 : g1.s != 1 ? NaN : P1 ? 0 : g1);
    if (t1 == null ? (w = !1, c1 = x1) : c1 = t1, T1.precision = c1 += y1, r1 = W(P1), n1 = r1.charAt(0), Math.abs(o1 = g1.e) < 15e14) {
        for(; n1 < 7 && n1 != 1 || n1 == 1 && r1.charAt(1) > 3;)g1 = g1.times(e1), r1 = W(g1.d), n1 = r1.charAt(0), f1++;
        o1 = g1.e, n1 > 1 ? (g1 = new T1("0." + r1), o1++) : g1 = new T1(n1 + "." + r1.slice(1));
    } else return u1 = Ur(T1, c1 + 2, x1).times(o1 + ""), g1 = _e(new T1(n1 + "." + r1.slice(1)), c1 - y1).plus(u1), T1.precision = x1, t1 == null ? h(g1, x1, C1, w = !0) : g1;
    for(p1 = g1, l1 = s1 = g1 = O(g1.minus(1), g1.plus(1), c1, 1), d1 = h(g1.times(g1), c1, 1), i1 = 3;;){
        if (s1 = h(s1.times(d1), c1, 1), u1 = l1.plus(O(s1, new T1(i1), c1, 1)), W(u1.d).slice(0, c1) === W(l1.d).slice(0, c1)) if (l1 = l1.times(2), o1 !== 0 && (l1 = l1.plus(Ur(T1, c1 + 2, x1).times(o1 + ""))), l1 = O(l1, new T1(f1), c1, 1), t1 == null) if (Qt(l1.d, c1 - y1, C1, a1)) T1.precision = c1 += y1, u1 = s1 = g1 = O(p1.minus(1), p1.plus(1), c1, 1), d1 = h(g1.times(g1), c1, 1), i1 = a1 = 1;
        else return h(l1, T1.precision = x1, C1, w = !0);
        else return T1.precision = x1, l1;
        l1 = u1, i1 += 2;
    }
}
function Ts(e1) {
    return String(e1.s * e1.s / 0);
}
function yi(e1, t1) {
    var r1, n1, i1;
    for((r1 = t1.indexOf(".")) > -1 && (t1 = t1.replace(".", "")), (n1 = t1.search(/e/i)) > 0 ? (r1 < 0 && (r1 = n1), r1 += +t1.slice(n1 + 1), t1 = t1.substring(0, n1)) : r1 < 0 && (r1 = t1.length), n1 = 0; t1.charCodeAt(n1) === 48; n1++);
    for(i1 = t1.length; t1.charCodeAt(i1 - 1) === 48; --i1);
    if (t1 = t1.slice(n1, i1), t1) {
        if (i1 -= n1, e1.e = r1 = r1 - n1 - 1, e1.d = [], n1 = (r1 + 1) % b, r1 < 0 && (n1 += b), n1 < i1) {
            for(n1 && e1.d.push(+t1.slice(0, n1)), i1 -= b; n1 < i1;)e1.d.push(+t1.slice(n1, n1 += b));
            t1 = t1.slice(n1), n1 = b - t1.length;
        } else n1 -= i1;
        for(; n1--;)t1 += "0";
        e1.d.push(+t1), w && (e1.e > e1.constructor.maxE ? (e1.d = null, e1.e = NaN) : e1.e < e1.constructor.minE && (e1.e = 0, e1.d = [
            0
        ]));
    } else e1.e = 0, e1.d = [
        0
    ];
    return e1;
}
function ic(e1, t1) {
    var r1, n1, i1, o1, s1, a1, l1, u1, c1;
    if (t1.indexOf("_") > -1) {
        if (t1 = t1.replace(/(\d)_(?=\d)/g, "$1"), Es.test(t1)) return yi(e1, t1);
    } else if (t1 === "Infinity" || t1 === "NaN") return +t1 || (e1.s = NaN), e1.e = NaN, e1.d = null, e1;
    if (Xu.test(t1)) r1 = 16, t1 = t1.toLowerCase();
    else if (Zu.test(t1)) r1 = 2;
    else if (ec.test(t1)) r1 = 8;
    else throw Error(Ne + t1);
    for(o1 = t1.search(/p/i), o1 > 0 ? (l1 = +t1.slice(o1 + 1), t1 = t1.substring(2, o1)) : t1 = t1.slice(2), o1 = t1.indexOf("."), s1 = o1 >= 0, n1 = e1.constructor, s1 && (t1 = t1.replace(".", ""), a1 = t1.length, o1 = a1 - o1, i1 = Ps(n1, new n1(r1), o1, o1 * 2)), u1 = Vr(t1, r1, ge), c1 = u1.length - 1, o1 = c1; u1[o1] === 0; --o1)u1.pop();
    return o1 < 0 ? new n1(e1.s * 0) : (e1.e = Qr(u1, c1), e1.d = u1, w = !1, s1 && (e1 = O(e1, i1, a1 * 4)), l1 && (e1 = e1.times(Math.abs(l1) < 54 ? j(2, l1) : We.pow(2, l1))), w = !0, e1);
}
function oc(e1, t1) {
    var r1, n1 = t1.d.length;
    if (n1 < 3) return t1.isZero() ? t1 : gt(e1, 2, t1, t1);
    r1 = 1.4 * Math.sqrt(n1), r1 = r1 > 16 ? 16 : r1 | 0, t1 = t1.times(1 / Jr(5, r1)), t1 = gt(e1, 2, t1, t1);
    for(var i1, o1 = new e1(5), s1 = new e1(16), a1 = new e1(20); r1--;)i1 = t1.times(t1), t1 = t1.times(o1.plus(i1.times(s1.times(i1).minus(a1))));
    return t1;
}
function gt(e1, t1, r1, n1, i1) {
    var o1, s1, a1, l1, u1 = 1, c1 = e1.precision, p1 = Math.ceil(c1 / b);
    for(w = !1, l1 = r1.times(r1), a1 = new e1(n1);;){
        if (s1 = O(a1.times(l1), new e1(t1++ * t1++), c1, 1), a1 = i1 ? n1.plus(s1) : n1.minus(s1), n1 = O(s1.times(l1), new e1(t1++ * t1++), c1, 1), s1 = a1.plus(n1), s1.d[p1] !== void 0) {
            for(o1 = p1; s1.d[o1] === a1.d[o1] && o1--;);
            if (o1 == -1) break;
        }
        o1 = a1, a1 = n1, n1 = s1, s1 = o1, u1++;
    }
    return w = !0, s1.d.length = p1 + 1, s1;
}
function Jr(e1, t1) {
    for(var r1 = e1; --t1;)r1 *= e1;
    return r1;
}
function Cs(e1, t1) {
    var r1, n1 = t1.s < 0, i1 = fe(e1, e1.precision, 1), o1 = i1.times(.5);
    if (t1 = t1.abs(), t1.lte(o1)) return Re = n1 ? 4 : 1, t1;
    if (r1 = t1.divToInt(i1), r1.isZero()) Re = n1 ? 3 : 2;
    else {
        if (t1 = t1.minus(r1.times(i1)), t1.lte(o1)) return Re = ms(r1) ? n1 ? 2 : 3 : n1 ? 4 : 1, t1;
        Re = ms(r1) ? n1 ? 1 : 4 : n1 ? 3 : 2;
    }
    return t1.minus(i1).abs();
}
function hi(e1, t1, r1, n1) {
    var i1, o1, s1, a1, l1, u1, c1, p1, d1, f1 = e1.constructor, y1 = r1 !== void 0;
    if (y1 ? (se(r1, 1, Le), n1 === void 0 ? n1 = f1.rounding : se(n1, 0, 8)) : (r1 = f1.precision, n1 = f1.rounding), !e1.isFinite()) c1 = Ts(e1);
    else {
        for(c1 = Ee(e1), s1 = c1.indexOf("."), y1 ? (i1 = 2, t1 == 16 ? r1 = r1 * 4 - 3 : t1 == 8 && (r1 = r1 * 3 - 2)) : i1 = t1, s1 >= 0 && (c1 = c1.replace(".", ""), d1 = new f1(1), d1.e = c1.length - s1, d1.d = Vr(Ee(d1), 10, i1), d1.e = d1.d.length), p1 = Vr(c1, 10, i1), o1 = l1 = p1.length; p1[--l1] == 0;)p1.pop();
        if (!p1[0]) c1 = y1 ? "0p+0" : "0";
        else {
            if (s1 < 0 ? o1-- : (e1 = new f1(e1), e1.d = p1, e1.e = o1, e1 = O(e1, d1, r1, n1, 0, i1), p1 = e1.d, o1 = e1.e, u1 = ys), s1 = p1[r1], a1 = i1 / 2, u1 = u1 || p1[r1 + 1] !== void 0, u1 = n1 < 4 ? (s1 !== void 0 || u1) && (n1 === 0 || n1 === (e1.s < 0 ? 3 : 2)) : s1 > a1 || s1 === a1 && (n1 === 4 || u1 || n1 === 6 && p1[r1 - 1] & 1 || n1 === (e1.s < 0 ? 8 : 7)), p1.length = r1, u1) for(; ++p1[--r1] > i1 - 1;)p1[r1] = 0, r1 || (++o1, p1.unshift(1));
            for(l1 = p1.length; !p1[l1 - 1]; --l1);
            for(s1 = 0, c1 = ""; s1 < l1; s1++)c1 += di.charAt(p1[s1]);
            if (y1) {
                if (l1 > 1) if (t1 == 16 || t1 == 8) {
                    for(s1 = t1 == 16 ? 4 : 3, --l1; l1 % s1; l1++)c1 += "0";
                    for(p1 = Vr(c1, i1, t1), l1 = p1.length; !p1[l1 - 1]; --l1);
                    for(s1 = 1, c1 = "1."; s1 < l1; s1++)c1 += di.charAt(p1[s1]);
                } else c1 = c1.charAt(0) + "." + c1.slice(1);
                c1 = c1 + (o1 < 0 ? "p" : "p+") + o1;
            } else if (o1 < 0) {
                for(; ++o1;)c1 = "0" + c1;
                c1 = "0." + c1;
            } else if (++o1 > l1) for(o1 -= l1; o1--;)c1 += "0";
            else o1 < l1 && (c1 = c1.slice(0, o1) + "." + c1.slice(o1));
        }
        c1 = (t1 == 16 ? "0x" : t1 == 2 ? "0b" : t1 == 8 ? "0o" : "") + c1;
    }
    return e1.s < 0 ? "-" + c1 : c1;
}
function fs(e1, t1) {
    if (e1.length > t1) return e1.length = t1, !0;
}
function sc(e1) {
    return new this(e1).abs();
}
function ac(e1) {
    return new this(e1).acos();
}
function lc(e1) {
    return new this(e1).acosh();
}
function uc(e1, t1) {
    return new this(e1).plus(t1);
}
function cc(e1) {
    return new this(e1).asin();
}
function pc(e1) {
    return new this(e1).asinh();
}
function dc(e1) {
    return new this(e1).atan();
}
function mc(e1) {
    return new this(e1).atanh();
}
function fc(e1, t1) {
    e1 = new this(e1), t1 = new this(t1);
    var r1, n1 = this.precision, i1 = this.rounding, o1 = n1 + 4;
    return !e1.s || !t1.s ? r1 = new this(NaN) : !e1.d && !t1.d ? (r1 = fe(this, o1, 1).times(t1.s > 0 ? .25 : .75), r1.s = e1.s) : !t1.d || e1.isZero() ? (r1 = t1.s < 0 ? fe(this, n1, i1) : new this(0), r1.s = e1.s) : !e1.d || t1.isZero() ? (r1 = fe(this, o1, 1).times(.5), r1.s = e1.s) : t1.s < 0 ? (this.precision = o1, this.rounding = 1, r1 = this.atan(O(e1, t1, o1, 1)), t1 = fe(this, o1, 1), this.precision = n1, this.rounding = i1, r1 = e1.s < 0 ? r1.minus(t1) : r1.plus(t1)) : r1 = this.atan(O(e1, t1, o1, 1)), r1;
}
function gc(e1) {
    return new this(e1).cbrt();
}
function yc(e1) {
    return h(e1 = new this(e1), e1.e + 1, 2);
}
function hc(e1, t1, r1) {
    return new this(e1).clamp(t1, r1);
}
function xc(e1) {
    if (!e1 || typeof e1 != "object") throw Error(Kr + "Object expected");
    var t1, r1, n1, i1 = e1.defaults === !0, o1 = [
        "precision",
        1,
        Le,
        "rounding",
        0,
        8,
        "toExpNeg",
        -ft,
        0,
        "toExpPos",
        0,
        ft,
        "maxE",
        0,
        ft,
        "minE",
        -ft,
        0,
        "modulo",
        0,
        9
    ];
    for(t1 = 0; t1 < o1.length; t1 += 3)if (r1 = o1[t1], i1 && (this[r1] = mi[r1]), (n1 = e1[r1]) !== void 0) if (ee(n1) === n1 && n1 >= o1[t1 + 1] && n1 <= o1[t1 + 2]) this[r1] = n1;
    else throw Error(Ne + r1 + ": " + n1);
    if (r1 = "crypto", i1 && (this[r1] = mi[r1]), (n1 = e1[r1]) !== void 0) if (n1 === !0 || n1 === !1 || n1 === 0 || n1 === 1) if (n1) if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes)) this[r1] = !0;
    else throw Error(xs);
    else this[r1] = !1;
    else throw Error(Ne + r1 + ": " + n1);
    return this;
}
function bc(e1) {
    return new this(e1).cos();
}
function Ec(e1) {
    return new this(e1).cosh();
}
function As(e1) {
    var t1, r1, n1;
    function i1(o1) {
        var s1, a1, l1, u1 = this;
        if (!(u1 instanceof i1)) return new i1(o1);
        if (u1.constructor = i1, gs(o1)) {
            u1.s = o1.s, w ? !o1.d || o1.e > i1.maxE ? (u1.e = NaN, u1.d = null) : o1.e < i1.minE ? (u1.e = 0, u1.d = [
                0
            ]) : (u1.e = o1.e, u1.d = o1.d.slice()) : (u1.e = o1.e, u1.d = o1.d ? o1.d.slice() : o1.d);
            return;
        }
        if (l1 = typeof o1, l1 === "number") {
            if (o1 === 0) {
                u1.s = 1 / o1 < 0 ? -1 : 1, u1.e = 0, u1.d = [
                    0
                ];
                return;
            }
            if (o1 < 0 ? (o1 = -o1, u1.s = -1) : u1.s = 1, o1 === ~~o1 && o1 < 1e7) {
                for(s1 = 0, a1 = o1; a1 >= 10; a1 /= 10)s1++;
                w ? s1 > i1.maxE ? (u1.e = NaN, u1.d = null) : s1 < i1.minE ? (u1.e = 0, u1.d = [
                    0
                ]) : (u1.e = s1, u1.d = [
                    o1
                ]) : (u1.e = s1, u1.d = [
                    o1
                ]);
                return;
            } else if (o1 * 0 !== 0) {
                o1 || (u1.s = NaN), u1.e = NaN, u1.d = null;
                return;
            }
            return yi(u1, o1.toString());
        } else if (l1 !== "string") throw Error(Ne + o1);
        return (a1 = o1.charCodeAt(0)) === 45 ? (o1 = o1.slice(1), u1.s = -1) : (a1 === 43 && (o1 = o1.slice(1)), u1.s = 1), Es.test(o1) ? yi(u1, o1) : ic(u1, o1);
    }
    if (i1.prototype = m, i1.ROUND_UP = 0, i1.ROUND_DOWN = 1, i1.ROUND_CEIL = 2, i1.ROUND_FLOOR = 3, i1.ROUND_HALF_UP = 4, i1.ROUND_HALF_DOWN = 5, i1.ROUND_HALF_EVEN = 6, i1.ROUND_HALF_CEIL = 7, i1.ROUND_HALF_FLOOR = 8, i1.EUCLID = 9, i1.config = i1.set = xc, i1.clone = As, i1.isDecimal = gs, i1.abs = sc, i1.acos = ac, i1.acosh = lc, i1.add = uc, i1.asin = cc, i1.asinh = pc, i1.atan = dc, i1.atanh = mc, i1.atan2 = fc, i1.cbrt = gc, i1.ceil = yc, i1.clamp = hc, i1.cos = bc, i1.cosh = Ec, i1.div = wc, i1.exp = Pc, i1.floor = vc, i1.hypot = Tc, i1.ln = Cc, i1.log = Ac, i1.log10 = Mc, i1.log2 = Rc, i1.max = Sc, i1.min = Ic, i1.mod = Fc, i1.mul = kc, i1.pow = Oc, i1.random = Dc, i1.round = _c, i1.sign = Nc, i1.sin = Lc, i1.sinh = $c, i1.sqrt = qc, i1.sub = Vc, i1.sum = jc, i1.tan = Bc, i1.tanh = Uc, i1.trunc = Kc, e1 === void 0 && (e1 = {}), e1 && e1.defaults !== !0) for(n1 = [
        "precision",
        "rounding",
        "toExpNeg",
        "toExpPos",
        "maxE",
        "minE",
        "modulo",
        "crypto"
    ], t1 = 0; t1 < n1.length;)e1.hasOwnProperty(r1 = n1[t1++]) || (e1[r1] = this[r1]);
    return i1.config(e1), i1;
}
function wc(e1, t1) {
    return new this(e1).div(t1);
}
function Pc(e1) {
    return new this(e1).exp();
}
function vc(e1) {
    return h(e1 = new this(e1), e1.e + 1, 3);
}
function Tc() {
    var e1, t1, r1 = new this(0);
    for(w = !1, e1 = 0; e1 < arguments.length;)if (t1 = new this(arguments[e1++]), t1.d) r1.d && (r1 = r1.plus(t1.times(t1)));
    else {
        if (t1.s) return w = !0, new this(1 / 0);
        r1 = t1;
    }
    return w = !0, r1.sqrt();
}
function gs(e1) {
    return e1 instanceof We || e1 && e1.toStringTag === bs || !1;
}
function Cc(e1) {
    return new this(e1).ln();
}
function Ac(e1, t1) {
    return new this(e1).log(t1);
}
function Rc(e1) {
    return new this(e1).log(2);
}
function Mc(e1) {
    return new this(e1).log(10);
}
function Sc() {
    return vs(this, arguments, "lt");
}
function Ic() {
    return vs(this, arguments, "gt");
}
function Fc(e1, t1) {
    return new this(e1).mod(t1);
}
function kc(e1, t1) {
    return new this(e1).mul(t1);
}
function Oc(e1, t1) {
    return new this(e1).pow(t1);
}
function Dc(e1) {
    var t1, r1, n1, i1, o1 = 0, s1 = new this(1), a1 = [];
    if (e1 === void 0 ? e1 = this.precision : se(e1, 1, Le), n1 = Math.ceil(e1 / b), this.crypto) if (crypto.getRandomValues) for(t1 = crypto.getRandomValues(new Uint32Array(n1)); o1 < n1;)i1 = t1[o1], i1 >= 429e7 ? t1[o1] = crypto.getRandomValues(new Uint32Array(1))[0] : a1[o1++] = i1 % 1e7;
    else if (crypto.randomBytes) {
        for(t1 = crypto.randomBytes(n1 *= 4); o1 < n1;)i1 = t1[o1] + (t1[o1 + 1] << 8) + (t1[o1 + 2] << 16) + ((t1[o1 + 3] & 127) << 24), i1 >= 214e7 ? crypto.randomBytes(4).copy(t1, o1) : (a1.push(i1 % 1e7), o1 += 4);
        o1 = n1 / 4;
    } else throw Error(xs);
    else for(; o1 < n1;)a1[o1++] = Math.random() * 1e7 | 0;
    for(n1 = a1[--o1], e1 %= b, n1 && e1 && (i1 = j(10, b - e1), a1[o1] = (n1 / i1 | 0) * i1); a1[o1] === 0; o1--)a1.pop();
    if (o1 < 0) r1 = 0, a1 = [
        0
    ];
    else {
        for(r1 = -1; a1[0] === 0; r1 -= b)a1.shift();
        for(n1 = 1, i1 = a1[0]; i1 >= 10; i1 /= 10)n1++;
        n1 < b && (r1 -= b - n1);
    }
    return s1.e = r1, s1.d = a1, s1;
}
function _c(e1) {
    return h(e1 = new this(e1), e1.e + 1, this.rounding);
}
function Nc(e1) {
    return e1 = new this(e1), e1.d ? e1.d[0] ? e1.s : 0 * e1.s : e1.s || NaN;
}
function Lc(e1) {
    return new this(e1).sin();
}
function $c(e1) {
    return new this(e1).sinh();
}
function qc(e1) {
    return new this(e1).sqrt();
}
function Vc(e1, t1) {
    return new this(e1).sub(t1);
}
function jc() {
    var e1 = 0, t1 = arguments, r1 = new this(t1[e1]);
    for(w = !1; r1.s && ++e1 < t1.length;)r1 = r1.plus(t1[e1]);
    return w = !0, h(r1, this.precision, this.rounding);
}
function Bc(e1) {
    return new this(e1).tan();
}
function Uc(e1) {
    return new this(e1).tanh();
}
function Kc(e1) {
    return h(e1 = new this(e1), e1.e + 1, 1);
}
m[Symbol.for("nodejs.util.inspect.custom")] = m.toString;
m[Symbol.toStringTag] = "Decimal";
var We = m.constructor = As(mi);
jr = new We(jr);
Br = new We(Br);
var we = We;
function yt(e1) {
    return We.isDecimal(e1) ? !0 : e1 !== null && typeof e1 == "object" && typeof e1.s == "number" && typeof e1.e == "number" && typeof e1.toFixed == "function" && Array.isArray(e1.d);
}
var Jt = class {
    constructor(t1, r1, n1, i1, o1){
        this.modelName = t1, this.name = r1, this.typeName = n1, this.isList = i1, this.isEnum = o1;
    }
    _toGraphQLInputType() {
        let t1 = this.isList ? "List" : "", r1 = this.isEnum ? "Enum" : "";
        return `${t1}${r1}${this.typeName}FieldRefInput<${this.modelName}>`;
    }
};
function ht(e1) {
    return e1 instanceof Jt;
}
var Gr = class {
    constructor(t1){
        this.value = t1;
    }
    write(t1) {
        t1.write(this.value);
    }
    markAsError() {
        this.value.markAsError();
    }
};
var Hr = (e1)=>e1, Wr = {
    bold: Hr,
    red: Hr,
    green: Hr,
    dim: Hr
}, Rs = {
    bold: ne,
    red: me,
    green: Qe,
    dim: ke
}, xt = {
    write (e1) {
        e1.writeLine(",");
    }
};
var Pe = class {
    constructor(t1){
        this.contents = t1;
        this.isUnderlined = !1;
        this.color = (t1)=>t1;
    }
    underline() {
        return this.isUnderlined = !0, this;
    }
    setColor(t1) {
        return this.color = t1, this;
    }
    write(t1) {
        let r1 = t1.getCurrentLineLength();
        t1.write(this.color(this.contents)), this.isUnderlined && t1.afterNextNewline(()=>{
            t1.write(" ".repeat(r1)).writeLine(this.color("~".repeat(this.contents.length)));
        });
    }
};
var $e = class {
    constructor(){
        this.hasError = !1;
    }
    markAsError() {
        return this.hasError = !0, this;
    }
};
var bt = class extends $e {
    constructor(){
        super(...arguments);
        this.items = [];
    }
    addItem(r1) {
        return this.items.push(new Gr(r1)), this;
    }
    getField(r1) {
        return this.items[r1];
    }
    getPrintWidth() {
        return this.items.length === 0 ? 2 : Math.max(...this.items.map((n1)=>n1.value.getPrintWidth())) + 2;
    }
    write(r1) {
        if (this.items.length === 0) {
            this.writeEmpty(r1);
            return;
        }
        this.writeWithItems(r1);
    }
    writeEmpty(r1) {
        let n1 = new Pe("[]");
        this.hasError && n1.setColor(r1.context.colors.red).underline(), r1.write(n1);
    }
    writeWithItems(r1) {
        let { colors: n1 } = r1.context;
        r1.writeLine("[").withIndent(()=>r1.writeJoined(xt, this.items).newLine()).write("]"), this.hasError && r1.afterNextNewline(()=>{
            r1.writeLine(n1.red("~".repeat(this.getPrintWidth())));
        });
    }
};
var Ms = ": ", zr = class {
    constructor(t1, r1){
        this.name = t1;
        this.value = r1;
        this.hasError = !1;
    }
    markAsError() {
        this.hasError = !0;
    }
    getPrintWidth() {
        return this.name.length + this.value.getPrintWidth() + Ms.length;
    }
    write(t1) {
        let r1 = new Pe(this.name);
        this.hasError && r1.underline().setColor(t1.context.colors.red), t1.write(r1).write(Ms).write(this.value);
    }
};
var Q = class e extends $e {
    constructor(){
        super(...arguments);
        this.fields = {};
        this.suggestions = [];
    }
    addField(r1) {
        this.fields[r1.name] = r1;
    }
    addSuggestion(r1) {
        this.suggestions.push(r1);
    }
    getField(r1) {
        return this.fields[r1];
    }
    getDeepField(r1) {
        let [n1, ...i1] = r1, o1 = this.getField(n1);
        if (!o1) return;
        let s1 = o1;
        for (let a1 of i1){
            let l1;
            if (s1.value instanceof e ? l1 = s1.value.getField(a1) : s1.value instanceof bt && (l1 = s1.value.getField(Number(a1))), !l1) return;
            s1 = l1;
        }
        return s1;
    }
    getDeepFieldValue(r1) {
        return r1.length === 0 ? this : this.getDeepField(r1)?.value;
    }
    hasField(r1) {
        return !!this.getField(r1);
    }
    removeAllFields() {
        this.fields = {};
    }
    removeField(r1) {
        delete this.fields[r1];
    }
    getFields() {
        return this.fields;
    }
    isEmpty() {
        return Object.keys(this.fields).length === 0;
    }
    getFieldValue(r1) {
        return this.getField(r1)?.value;
    }
    getDeepSubSelectionValue(r1) {
        let n1 = this;
        for (let i1 of r1){
            if (!(n1 instanceof e)) return;
            let o1 = n1.getSubSelectionValue(i1);
            if (!o1) return;
            n1 = o1;
        }
        return n1;
    }
    getDeepSelectionParent(r1) {
        let n1 = this.getSelectionParent();
        if (!n1) return;
        let i1 = n1;
        for (let o1 of r1){
            let s1 = i1.value.getFieldValue(o1);
            if (!s1 || !(s1 instanceof e)) return;
            let a1 = s1.getSelectionParent();
            if (!a1) return;
            i1 = a1;
        }
        return i1;
    }
    getSelectionParent() {
        let r1 = this.getField("select");
        if (r1?.value instanceof e) return {
            kind: "select",
            value: r1.value
        };
        let n1 = this.getField("include");
        if (n1?.value instanceof e) return {
            kind: "include",
            value: n1.value
        };
    }
    getSubSelectionValue(r1) {
        return this.getSelectionParent()?.value.fields[r1].value;
    }
    getPrintWidth() {
        let r1 = Object.values(this.fields);
        return r1.length == 0 ? 2 : Math.max(...r1.map((i1)=>i1.getPrintWidth())) + 2;
    }
    write(r1) {
        let n1 = Object.values(this.fields);
        if (n1.length === 0 && this.suggestions.length === 0) {
            this.writeEmpty(r1);
            return;
        }
        this.writeWithContents(r1, n1);
    }
    writeEmpty(r1) {
        let n1 = new Pe("{}");
        this.hasError && n1.setColor(r1.context.colors.red).underline(), r1.write(n1);
    }
    writeWithContents(r1, n1) {
        r1.writeLine("{").withIndent(()=>{
            r1.writeJoined(xt, [
                ...n1,
                ...this.suggestions
            ]).newLine();
        }), r1.write("}"), this.hasError && r1.afterNextNewline(()=>{
            r1.writeLine(r1.context.colors.red("~".repeat(this.getPrintWidth())));
        });
    }
};
var J = class extends $e {
    constructor(r1){
        super();
        this.text = r1;
    }
    getPrintWidth() {
        return this.text.length;
    }
    write(r1) {
        let n1 = new Pe(this.text);
        this.hasError && n1.underline().setColor(r1.context.colors.red), r1.write(n1);
    }
};
var xi = class {
    constructor(t1){
        this.errorMessages = [];
        this.arguments = t1;
    }
    write(t1) {
        t1.write(this.arguments);
    }
    addErrorMessage(t1) {
        this.errorMessages.push(t1);
    }
    renderAllMessages(t1) {
        return this.errorMessages.map((r1)=>r1(t1)).join(`
`);
    }
};
function Yr(e1) {
    return new xi(Ss(e1));
}
function Ss(e1) {
    let t1 = new Q;
    for (let [r1, n1] of Object.entries(e1)){
        let i1 = new zr(r1, Is(n1));
        t1.addField(i1);
    }
    return t1;
}
function Is(e1) {
    if (typeof e1 == "string") return new J(JSON.stringify(e1));
    if (typeof e1 == "number" || typeof e1 == "boolean") return new J(String(e1));
    if (typeof e1 == "bigint") return new J(`${e1}n`);
    if (e1 === null) return new J("null");
    if (e1 === void 0) return new J("undefined");
    if (yt(e1)) return new J(`new Prisma.Decimal("${e1.toFixed()}")`);
    if (e1 instanceof Uint8Array) return Buffer.isBuffer(e1) ? new J(`Buffer.alloc(${e1.byteLength})`) : new J(`new Uint8Array(${e1.byteLength})`);
    if (e1 instanceof Date) {
        let t1 = qr(e1) ? e1.toISOString() : "Invalid Date";
        return new J(`new Date("${t1}")`);
    }
    return e1 instanceof Ae ? new J(`Prisma.${e1._getName()}`) : ht(e1) ? new J(`prisma.${to(e1.modelName)}.$fields.${e1.name}`) : Array.isArray(e1) ? Jc(e1) : typeof e1 == "object" ? Ss(e1) : new J(Object.prototype.toString.call(e1));
}
function Jc(e1) {
    let t1 = new bt;
    for (let r1 of e1)t1.addItem(Is(r1));
    return t1;
}
function Fs(e1) {
    if (e1 === void 0) return "";
    let t1 = Yr(e1);
    return new dt(0, {
        colors: Wr
    }).write(t1).toString();
}
var Gt = "<unknown>";
function ks(e1) {
    var t1 = e1.split(`
`);
    return t1.reduce(function(r1, n1) {
        var i1 = Wc(n1) || Yc(n1) || ep(n1) || ip(n1) || rp(n1);
        return i1 && r1.push(i1), r1;
    }, []);
}
var Gc = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, Hc = /\((\S*)(?::(\d+))(?::(\d+))\)/;
function Wc(e1) {
    var t1 = Gc.exec(e1);
    if (!t1) return null;
    var r1 = t1[2] && t1[2].indexOf("native") === 0, n1 = t1[2] && t1[2].indexOf("eval") === 0, i1 = Hc.exec(t1[2]);
    return n1 && i1 != null && (t1[2] = i1[1], t1[3] = i1[2], t1[4] = i1[3]), {
        file: r1 ? null : t1[2],
        methodName: t1[1] || Gt,
        arguments: r1 ? [
            t1[2]
        ] : [],
        lineNumber: t1[3] ? +t1[3] : null,
        column: t1[4] ? +t1[4] : null
    };
}
var zc = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
function Yc(e1) {
    var t1 = zc.exec(e1);
    return t1 ? {
        file: t1[2],
        methodName: t1[1] || Gt,
        arguments: [],
        lineNumber: +t1[3],
        column: t1[4] ? +t1[4] : null
    } : null;
}
var Zc = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i, Xc = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
function ep(e1) {
    var t1 = Zc.exec(e1);
    if (!t1) return null;
    var r1 = t1[3] && t1[3].indexOf(" > eval") > -1, n1 = Xc.exec(t1[3]);
    return r1 && n1 != null && (t1[3] = n1[1], t1[4] = n1[2], t1[5] = null), {
        file: t1[3],
        methodName: t1[1] || Gt,
        arguments: t1[2] ? t1[2].split(",") : [],
        lineNumber: t1[4] ? +t1[4] : null,
        column: t1[5] ? +t1[5] : null
    };
}
var tp = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
function rp(e1) {
    var t1 = tp.exec(e1);
    return t1 ? {
        file: t1[3],
        methodName: t1[1] || Gt,
        arguments: [],
        lineNumber: +t1[4],
        column: t1[5] ? +t1[5] : null
    } : null;
}
var np = /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;
function ip(e1) {
    var t1 = np.exec(e1);
    return t1 ? {
        file: t1[2],
        methodName: t1[1] || Gt,
        arguments: [],
        lineNumber: +t1[3],
        column: t1[4] ? +t1[4] : null
    } : null;
}
var bi = class {
    getLocation() {
        return null;
    }
}, Ei = class {
    constructor(){
        this._error = new Error;
    }
    getLocation() {
        let t1 = this._error.stack;
        if (!t1) return null;
        let n1 = ks(t1).find((i1)=>{
            if (!i1.file) return !1;
            let o1 = Zn(i1.file);
            return o1 !== "<anonymous>" && !o1.includes("@prisma") && !o1.includes("/packages/client/src/runtime/") && !o1.endsWith("/runtime/binary.js") && !o1.endsWith("/runtime/library.js") && !o1.endsWith("/runtime/edge.js") && !o1.endsWith("/runtime/edge-esm.js") && !o1.startsWith("internal/") && !i1.methodName.includes("new ") && !i1.methodName.includes("getCallSite") && !i1.methodName.includes("Proxy.") && i1.methodName.split(".").length < 4;
        });
        return !n1 || !n1.file ? null : {
            fileName: n1.file,
            lineNumber: n1.lineNumber,
            columnNumber: n1.column
        };
    }
};
function qe(e1) {
    return e1 === "minimal" ? new bi : new Ei;
}
var Os = {
    _avg: !0,
    _count: !0,
    _sum: !0,
    _min: !0,
    _max: !0
};
function Et(e1 = {}) {
    let t1 = sp(e1);
    return Object.entries(t1).reduce((n1, [i1, o1])=>(Os[i1] !== void 0 ? n1.select[i1] = {
            select: o1
        } : n1[i1] = o1, n1), {
        select: {}
    });
}
function sp(e1 = {}) {
    return typeof e1._count == "boolean" ? {
        ...e1,
        _count: {
            _all: e1._count
        }
    } : e1;
}
function Zr(e1 = {}) {
    return (t1)=>(typeof e1._count == "boolean" && (t1._count = t1._count._all), t1);
}
function Ds(e1, t1) {
    let r1 = Zr(e1);
    return t1({
        action: "aggregate",
        unpacker: r1,
        argsMapper: Et
    })(e1);
}
function ap(e1 = {}) {
    let { select: t1, ...r1 } = e1;
    return typeof t1 == "object" ? Et({
        ...r1,
        _count: t1
    }) : Et({
        ...r1,
        _count: {
            _all: !0
        }
    });
}
function lp(e1 = {}) {
    return typeof e1.select == "object" ? (t1)=>Zr(e1)(t1)._count : (t1)=>Zr(e1)(t1)._count._all;
}
function _s(e1, t1) {
    return t1({
        action: "count",
        unpacker: lp(e1),
        argsMapper: ap
    })(e1);
}
function up(e1 = {}) {
    let t1 = Et(e1);
    if (Array.isArray(t1.by)) for (let r1 of t1.by)typeof r1 == "string" && (t1.select[r1] = !0);
    else typeof t1.by == "string" && (t1.select[t1.by] = !0);
    return t1;
}
function cp(e1 = {}) {
    return (t1)=>(typeof e1?._count == "boolean" && t1.forEach((r1)=>{
            r1._count = r1._count._all;
        }), t1);
}
function Ns(e1, t1) {
    return t1({
        action: "groupBy",
        unpacker: cp(e1),
        argsMapper: up
    })(e1);
}
function Ls(e1, t1, r1) {
    if (t1 === "aggregate") return (n1)=>Ds(n1, r1);
    if (t1 === "count") return (n1)=>_s(n1, r1);
    if (t1 === "groupBy") return (n1)=>Ns(n1, r1);
}
function $s(e1, t1) {
    let r1 = t1.fields.filter((i1)=>!i1.relationName), n1 = oi(r1, (i1)=>i1.name);
    return new Proxy({}, {
        get (i1, o1) {
            if (o1 in i1 || typeof o1 == "symbol") return i1[o1];
            let s1 = n1[o1];
            if (s1) return new Jt(e1, o1, s1.type, s1.isList, s1.kind === "enum");
        },
        ...Nr(Object.keys(n1))
    });
}
var qs = (e1)=>Array.isArray(e1) ? e1 : e1.split("."), wi = (e1, t1)=>qs(t1).reduce((r1, n1)=>r1 && r1[n1], e1), Vs = (e1, t1, r1)=>qs(t1).reduceRight((n1, i1, o1, s1)=>Object.assign({}, wi(e1, s1.slice(0, o1)), {
            [i1]: n1
        }), r1);
function pp(e1, t1) {
    return e1 === void 0 || t1 === void 0 ? [] : [
        ...t1,
        "select",
        e1
    ];
}
function dp(e1, t1, r1) {
    return t1 === void 0 ? e1 ?? {} : Vs(t1, r1, e1 || !0);
}
function Pi(e1, t1, r1, n1, i1, o1) {
    let a1 = e1._runtimeDataModel.models[t1].fields.reduce((l1, u1)=>({
            ...l1,
            [u1.name]: u1
        }), {});
    return (l1)=>{
        let u1 = qe(e1._errorFormat), c1 = pp(n1, i1), p1 = dp(l1, o1, c1), d1 = r1({
            dataPath: c1,
            callsite: u1
        })(p1), f1 = mp(e1, t1);
        return new Proxy(d1, {
            get (y1, g1) {
                if (!f1.includes(g1)) return y1[g1];
                let T1 = [
                    a1[g1].type,
                    r1,
                    g1
                ], C1 = [
                    c1,
                    p1
                ];
                return Pi(e1, ...T1, ...C1);
            },
            ...Nr([
                ...f1,
                ...Object.getOwnPropertyNames(d1)
            ])
        });
    };
}
function mp(e1, t1) {
    return e1._runtimeDataModel.models[t1].fields.filter((r1)=>r1.kind === "object").map((r1)=>r1.name);
}
var Js = S(Xn());
var Qs = S(__webpack_require__(57147));
var js = {
    keyword: Oe,
    entity: Oe,
    value: (e1)=>ne(it(e1)),
    punctuation: it,
    directive: Oe,
    function: Oe,
    variable: (e1)=>ne(it(e1)),
    string: (e1)=>ne(Qe(e1)),
    boolean: he,
    number: Oe,
    comment: vr
};
var fp = (e1)=>e1, Xr = {}, gp = 0, v = {
    manual: Xr.Prism && Xr.Prism.manual,
    disableWorkerMessageHandler: Xr.Prism && Xr.Prism.disableWorkerMessageHandler,
    util: {
        encode: function(e1) {
            if (e1 instanceof ye) {
                let t1 = e1;
                return new ye(t1.type, v.util.encode(t1.content), t1.alias);
            } else return Array.isArray(e1) ? e1.map(v.util.encode) : e1.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
        },
        type: function(e1) {
            return Object.prototype.toString.call(e1).slice(8, -1);
        },
        objId: function(e1) {
            return e1.__id || Object.defineProperty(e1, "__id", {
                value: ++gp
            }), e1.__id;
        },
        clone: function e1(t1, r1) {
            let n1, i1, o1 = v.util.type(t1);
            switch(r1 = r1 || {}, o1){
                case "Object":
                    if (i1 = v.util.objId(t1), r1[i1]) return r1[i1];
                    n1 = {}, r1[i1] = n1;
                    for(let s1 in t1)t1.hasOwnProperty(s1) && (n1[s1] = e1(t1[s1], r1));
                    return n1;
                case "Array":
                    return i1 = v.util.objId(t1), r1[i1] ? r1[i1] : (n1 = [], r1[i1] = n1, t1.forEach(function(s1, a1) {
                        n1[a1] = e1(s1, r1);
                    }), n1);
                default:
                    return t1;
            }
        }
    },
    languages: {
        extend: function(e1, t1) {
            let r1 = v.util.clone(v.languages[e1]);
            for(let n1 in t1)r1[n1] = t1[n1];
            return r1;
        },
        insertBefore: function(e1, t1, r1, n1) {
            n1 = n1 || v.languages;
            let i1 = n1[e1], o1 = {};
            for(let a1 in i1)if (i1.hasOwnProperty(a1)) {
                if (a1 == t1) for(let l1 in r1)r1.hasOwnProperty(l1) && (o1[l1] = r1[l1]);
                r1.hasOwnProperty(a1) || (o1[a1] = i1[a1]);
            }
            let s1 = n1[e1];
            return n1[e1] = o1, v.languages.DFS(v.languages, function(a1, l1) {
                l1 === s1 && a1 != e1 && (this[a1] = o1);
            }), o1;
        },
        DFS: function e1(t1, r1, n1, i1) {
            i1 = i1 || {};
            let o1 = v.util.objId;
            for(let s1 in t1)if (t1.hasOwnProperty(s1)) {
                r1.call(t1, s1, t1[s1], n1 || s1);
                let a1 = t1[s1], l1 = v.util.type(a1);
                l1 === "Object" && !i1[o1(a1)] ? (i1[o1(a1)] = !0, e1(a1, r1, null, i1)) : l1 === "Array" && !i1[o1(a1)] && (i1[o1(a1)] = !0, e1(a1, r1, s1, i1));
            }
        }
    },
    plugins: {},
    highlight: function(e1, t1, r1) {
        let n1 = {
            code: e1,
            grammar: t1,
            language: r1
        };
        return v.hooks.run("before-tokenize", n1), n1.tokens = v.tokenize(n1.code, n1.grammar), v.hooks.run("after-tokenize", n1), ye.stringify(v.util.encode(n1.tokens), n1.language);
    },
    matchGrammar: function(e1, t1, r1, n1, i1, o1, s1) {
        for(let g1 in r1){
            if (!r1.hasOwnProperty(g1) || !r1[g1]) continue;
            if (g1 == s1) return;
            let P1 = r1[g1];
            P1 = v.util.type(P1) === "Array" ? P1 : [
                P1
            ];
            for(let T1 = 0; T1 < P1.length; ++T1){
                let C1 = P1[T1], x1 = C1.inside, R1 = !!C1.lookbehind, ce1 = !!C1.greedy, G1 = 0, Ue1 = C1.alias;
                if (ce1 && !C1.pattern.global) {
                    let $1 = C1.pattern.toString().match(/[imuy]*$/)[0];
                    C1.pattern = RegExp(C1.pattern.source, $1 + "g");
                }
                C1 = C1.pattern || C1;
                for(let $1 = n1, z1 = i1; $1 < t1.length; z1 += t1[$1].length, ++$1){
                    let Te1 = t1[$1];
                    if (t1.length > e1.length) return;
                    if (Te1 instanceof ye) continue;
                    if (ce1 && $1 != t1.length - 1) {
                        C1.lastIndex = z1;
                        var p1 = C1.exec(e1);
                        if (!p1) break;
                        var c1 = p1.index + (R1 ? p1[1].length : 0), d1 = p1.index + p1[0].length, a1 = $1, l1 = z1;
                        for(let F1 = t1.length; a1 < F1 && (l1 < d1 || !t1[a1].type && !t1[a1 - 1].greedy); ++a1)l1 += t1[a1].length, c1 >= l1 && (++$1, z1 = l1);
                        if (t1[$1] instanceof ye) continue;
                        u1 = a1 - $1, Te1 = e1.slice(z1, l1), p1.index -= z1;
                    } else {
                        C1.lastIndex = 0;
                        var p1 = C1.exec(Te1), u1 = 1;
                    }
                    if (!p1) {
                        if (o1) break;
                        continue;
                    }
                    R1 && (G1 = p1[1] ? p1[1].length : 0);
                    var c1 = p1.index + G1, p1 = p1[0].slice(G1), d1 = c1 + p1.length, f1 = Te1.slice(0, c1), y1 = Te1.slice(d1);
                    let Y1 = [
                        $1,
                        u1
                    ];
                    f1 && (++$1, z1 += f1.length, Y1.push(f1));
                    let et1 = new ye(g1, x1 ? v.tokenize(p1, x1) : p1, Ue1, p1, ce1);
                    if (Y1.push(et1), y1 && Y1.push(y1), Array.prototype.splice.apply(t1, Y1), u1 != 1 && v.matchGrammar(e1, t1, r1, $1, z1, !0, g1), o1) break;
                }
            }
        }
    },
    tokenize: function(e1, t1) {
        let r1 = [
            e1
        ], n1 = t1.rest;
        if (n1) {
            for(let i1 in n1)t1[i1] = n1[i1];
            delete t1.rest;
        }
        return v.matchGrammar(e1, r1, t1, 0, 0, !1), r1;
    },
    hooks: {
        all: {},
        add: function(e1, t1) {
            let r1 = v.hooks.all;
            r1[e1] = r1[e1] || [], r1[e1].push(t1);
        },
        run: function(e1, t1) {
            let r1 = v.hooks.all[e1];
            if (!(!r1 || !r1.length)) for(var n1 = 0, i1; i1 = r1[n1++];)i1(t1);
        }
    },
    Token: ye
};
v.languages.clike = {
    comment: [
        {
            pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
            lookbehind: !0
        },
        {
            pattern: /(^|[^\\:])\/\/.*/,
            lookbehind: !0,
            greedy: !0
        }
    ],
    string: {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0
    },
    "class-name": {
        pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
        lookbehind: !0,
        inside: {
            punctuation: /[.\\]/
        }
    },
    keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
    boolean: /\b(?:true|false)\b/,
    function: /\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
    punctuation: /[{}[\];(),.:]/
};
v.languages.javascript = v.languages.extend("clike", {
    "class-name": [
        v.languages.clike["class-name"],
        {
            pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
            lookbehind: !0
        }
    ],
    keyword: [
        {
            pattern: /((?:^|})\s*)(?:catch|finally)\b/,
            lookbehind: !0
        },
        {
            pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
            lookbehind: !0
        }
    ],
    number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
    function: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
});
v.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
v.languages.insertBefore("javascript", "keyword", {
    regex: {
        pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,
        lookbehind: !0,
        greedy: !0
    },
    "function-variable": {
        pattern: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
        alias: "function"
    },
    parameter: [
        {
            pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
            lookbehind: !0,
            inside: v.languages.javascript
        },
        {
            pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
            inside: v.languages.javascript
        },
        {
            pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
            lookbehind: !0,
            inside: v.languages.javascript
        },
        {
            pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
            lookbehind: !0,
            inside: v.languages.javascript
        }
    ],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});
v.languages.markup && v.languages.markup.tag.addInlined("script", "javascript");
v.languages.js = v.languages.javascript;
v.languages.typescript = v.languages.extend("javascript", {
    keyword: /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/,
    builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/
});
v.languages.ts = v.languages.typescript;
function ye(e1, t1, r1, n1, i1) {
    this.type = e1, this.content = t1, this.alias = r1, this.length = (n1 || "").length | 0, this.greedy = !!i1;
}
ye.stringify = function(e1, t1) {
    return typeof e1 == "string" ? e1 : Array.isArray(e1) ? e1.map(function(r1) {
        return ye.stringify(r1, t1);
    }).join("") : yp(e1.type)(e1.content);
};
function yp(e1) {
    return js[e1] || fp;
}
function Bs(e1) {
    return hp(e1, v.languages.javascript);
}
function hp(e1, t1) {
    return v.tokenize(e1, t1).map((n1)=>ye.stringify(n1)).join("");
}
var Us = S(Ho());
function Ks(e1) {
    return (0, Us.default)(e1);
}
var en = class e {
    static read(t1) {
        let r1;
        try {
            r1 = Qs.default.readFileSync(t1, "utf-8");
        } catch  {
            return null;
        }
        return e.fromContent(r1);
    }
    static fromContent(t1) {
        let r1 = t1.split(/\r?\n/);
        return new e(1, r1);
    }
    constructor(t1, r1){
        this.firstLineNumber = t1, this.lines = r1;
    }
    get lastLineNumber() {
        return this.firstLineNumber + this.lines.length - 1;
    }
    mapLineAt(t1, r1) {
        if (t1 < this.firstLineNumber || t1 > this.lines.length + this.firstLineNumber) return this;
        let n1 = t1 - this.firstLineNumber, i1 = [
            ...this.lines
        ];
        return i1[n1] = r1(i1[n1]), new e(this.firstLineNumber, i1);
    }
    mapLines(t1) {
        return new e(this.firstLineNumber, this.lines.map((r1, n1)=>t1(r1, this.firstLineNumber + n1)));
    }
    lineAt(t1) {
        return this.lines[t1 - this.firstLineNumber];
    }
    prependSymbolAt(t1, r1) {
        return this.mapLines((n1, i1)=>i1 === t1 ? `${r1} ${n1}` : `  ${n1}`);
    }
    slice(t1, r1) {
        let n1 = this.lines.slice(t1 - 1, r1).join(`
`);
        return new e(t1, Ks(n1).split(`
`));
    }
    highlight() {
        let t1 = Bs(this.toString());
        return new e(this.firstLineNumber, t1.split(`
`));
    }
    toString() {
        return this.lines.join(`
`);
    }
};
var xp = {
    red: me,
    gray: vr,
    dim: ke,
    bold: ne,
    underline: te,
    highlightSource: (e1)=>e1.highlight()
}, bp = {
    red: (e1)=>e1,
    gray: (e1)=>e1,
    dim: (e1)=>e1,
    bold: (e1)=>e1,
    underline: (e1)=>e1,
    highlightSource: (e1)=>e1
};
function Ep({ callsite: e1, message: t1, originalMethod: r1, isPanic: n1, callArguments: i1 }, o1) {
    let s1 = {
        functionName: `prisma.${r1}()`,
        message: t1,
        isPanic: n1 ?? !1,
        callArguments: i1
    };
    if (!e1 || "undefined" < "u" || "production" === "production") return s1;
    let a1 = e1.getLocation();
    if (!a1 || !a1.lineNumber || !a1.columnNumber) return s1;
    let l1 = Math.max(1, a1.lineNumber - 3), u1 = en.read(a1.fileName)?.slice(l1, a1.lineNumber), c1 = u1?.lineAt(a1.lineNumber);
    if (u1 && c1) {
        let p1 = Pp(c1), d1 = wp(c1);
        if (!d1) return s1;
        s1.functionName = `${d1.code})`, s1.location = a1, n1 || (u1 = u1.mapLineAt(a1.lineNumber, (y1)=>y1.slice(0, d1.openingBraceIndex))), u1 = o1.highlightSource(u1);
        let f1 = String(u1.lastLineNumber).length;
        if (s1.contextLines = u1.mapLines((y1, g1)=>o1.gray(String(g1).padStart(f1)) + " " + y1).mapLines((y1)=>o1.dim(y1)).prependSymbolAt(a1.lineNumber, o1.bold(o1.red("→"))), i1) {
            let y1 = p1 + f1 + 1;
            y1 += 2, s1.callArguments = (0, Js.default)(i1, y1).slice(y1);
        }
    }
    return s1;
}
function wp(e1) {
    let t1 = Object.keys(pe.ModelAction).join("|"), n1 = new RegExp(String.raw`\.(${t1})\(`).exec(e1);
    if (n1) {
        let i1 = n1.index + n1[0].length, o1 = e1.lastIndexOf(" ", n1.index) + 1;
        return {
            code: e1.slice(o1, i1),
            openingBraceIndex: i1
        };
    }
    return null;
}
function Pp(e1) {
    let t1 = 0;
    for(let r1 = 0; r1 < e1.length; r1++){
        if (e1.charAt(r1) !== " ") return t1;
        t1++;
    }
    return t1;
}
function vp({ functionName: e1, location: t1, message: r1, isPanic: n1, contextLines: i1, callArguments: o1 }, s1) {
    let a1 = [
        ""
    ], l1 = t1 ? " in" : ":";
    if (n1 ? (a1.push(s1.red(`Oops, an unknown error occurred! This is ${s1.bold("on us")}, you did nothing wrong.`)), a1.push(s1.red(`It occurred in the ${s1.bold(`\`${e1}\``)} invocation${l1}`))) : a1.push(s1.red(`Invalid ${s1.bold(`\`${e1}\``)} invocation${l1}`)), t1 && a1.push(s1.underline(Tp(t1))), i1) {
        a1.push("");
        let u1 = [
            i1.toString()
        ];
        o1 && (u1.push(o1), u1.push(s1.dim(")"))), a1.push(u1.join("")), o1 && a1.push("");
    } else a1.push(""), o1 && a1.push(o1), a1.push("");
    return a1.push(r1), a1.join(`
`);
}
function Tp(e1) {
    let t1 = [
        e1.fileName
    ];
    return e1.lineNumber && t1.push(String(e1.lineNumber)), e1.columnNumber && t1.push(String(e1.columnNumber)), t1.join(":");
}
function wt(e1) {
    let t1 = e1.showColors ? xp : bp, r1 = Ep(e1, t1);
    return vp(r1, t1);
}
function Gs(e1, t1, r1, n1) {
    return e1 === pe.ModelAction.findFirstOrThrow || e1 === pe.ModelAction.findUniqueOrThrow ? Cp(t1, r1, n1) : n1;
}
function Cp(e1, t1, r1) {
    return async (n1)=>{
        if ("rejectOnNotFound" in n1.args) {
            let o1 = wt({
                originalMethod: n1.clientMethod,
                callsite: n1.callsite,
                message: "'rejectOnNotFound' option is not supported"
            });
            throw new X(o1, {
                clientVersion: t1
            });
        }
        return await r1(n1).catch((o1)=>{
            throw o1 instanceof U && o1.code === "P2025" ? new Ce(`No ${e1} found`, t1) : o1;
        });
    };
}
function ve(e1) {
    return e1.replace(/^./, (t1)=>t1.toLowerCase());
}
var Ap = [
    "findUnique",
    "findUniqueOrThrow",
    "findFirst",
    "findFirstOrThrow",
    "create",
    "update",
    "upsert",
    "delete"
], Rp = [
    "aggregate",
    "count",
    "groupBy"
];
function vi(e1, t1) {
    let r1 = e1._extensions.getAllModelExtensions(t1) ?? {}, n1 = [
        Mp(e1, t1),
        Ip(e1, t1),
        qt(r1),
        re("name", ()=>t1),
        re("$name", ()=>t1),
        re("$parent", ()=>e1._appliedParent)
    ];
    return be({}, n1);
}
function Mp(e1, t1) {
    let r1 = ve(t1), n1 = Object.keys(pe.ModelAction).concat("count");
    return {
        getKeys () {
            return n1;
        },
        getPropertyValue (i1) {
            let o1 = i1, s1 = (l1)=>e1._request(l1);
            s1 = Gs(o1, t1, e1._clientVersion, s1);
            let a1 = (l1)=>(u1)=>{
                    let c1 = qe(e1._errorFormat);
                    return e1._createPrismaPromise((p1)=>{
                        let d1 = {
                            args: u1,
                            dataPath: [],
                            action: o1,
                            model: t1,
                            clientMethod: `${r1}.${i1}`,
                            jsModelName: r1,
                            transaction: p1,
                            callsite: c1
                        };
                        return s1({
                            ...d1,
                            ...l1
                        });
                    });
                };
            return Ap.includes(o1) ? Pi(e1, t1, a1) : Sp(i1) ? Ls(e1, i1, a1) : a1({});
        }
    };
}
function Sp(e1) {
    return Rp.includes(e1);
}
function Ip(e1, t1) {
    return He(re("fields", ()=>{
        let r1 = e1._runtimeDataModel.models[t1];
        return $s(t1, r1);
    }));
}
function Hs(e1) {
    return e1.replace(/^./, (t1)=>t1.toUpperCase());
}
var Ti = Symbol();
function Ht(e1) {
    let t1 = [
        Fp(e1),
        re(Ti, ()=>e1),
        re("$parent", ()=>e1._appliedParent)
    ], r1 = e1._extensions.getAllClientExtensions();
    return r1 && t1.push(qt(r1)), be(e1, t1);
}
function Fp(e1) {
    let t1 = Object.keys(e1._runtimeDataModel.models), r1 = t1.map(ve), n1 = [
        ...new Set(t1.concat(r1))
    ];
    return He({
        getKeys () {
            return n1;
        },
        getPropertyValue (i1) {
            let o1 = Hs(i1);
            if (e1._runtimeDataModel.models[o1] !== void 0) return vi(e1, o1);
            if (e1._runtimeDataModel.models[i1] !== void 0) return vi(e1, i1);
        },
        getPropertyDescriptor (i1) {
            if (!r1.includes(i1)) return {
                enumerable: !1
            };
        }
    });
}
function tn(e1) {
    return e1[Ti] ? e1[Ti] : e1;
}
function Ws(e1) {
    if (typeof e1 == "function") return e1(this);
    let t1 = tn(this), r1 = Object.create(t1, {
        _extensions: {
            value: this._extensions.append(e1)
        },
        _appliedParent: {
            value: this,
            configurable: !0
        },
        $use: {
            value: void 0
        },
        $on: {
            value: void 0
        }
    });
    return Ht(r1);
}
function zs({ result: e1, modelName: t1, select: r1, extensions: n1 }) {
    let i1 = n1.getAllComputedFields(t1);
    if (!i1) return e1;
    let o1 = [], s1 = [];
    for (let a1 of Object.values(i1)){
        if (r1) {
            if (!r1[a1.name]) continue;
            let l1 = a1.needs.filter((u1)=>!r1[u1]);
            l1.length > 0 && s1.push(Vt(l1));
        }
        kp(e1, a1.needs) && o1.push(Op(a1, be(e1, o1)));
    }
    return o1.length > 0 || s1.length > 0 ? be(e1, [
        ...o1,
        ...s1
    ]) : e1;
}
function kp(e1, t1) {
    return t1.every((r1)=>ii(e1, r1));
}
function Op(e1, t1) {
    return He(re(e1.name, ()=>e1.compute(t1)));
}
function rn({ visitor: e1, result: t1, args: r1, runtimeDataModel: n1, modelName: i1 }) {
    if (Array.isArray(t1)) {
        for(let s1 = 0; s1 < t1.length; s1++)t1[s1] = rn({
            result: t1[s1],
            args: r1,
            modelName: i1,
            runtimeDataModel: n1,
            visitor: e1
        });
        return t1;
    }
    let o1 = e1(t1, i1, r1) ?? t1;
    return r1.include && Ys({
        includeOrSelect: r1.include,
        result: o1,
        parentModelName: i1,
        runtimeDataModel: n1,
        visitor: e1
    }), r1.select && Ys({
        includeOrSelect: r1.select,
        result: o1,
        parentModelName: i1,
        runtimeDataModel: n1,
        visitor: e1
    }), o1;
}
function Ys({ includeOrSelect: e1, result: t1, parentModelName: r1, runtimeDataModel: n1, visitor: i1 }) {
    for (let [o1, s1] of Object.entries(e1)){
        if (!s1 || t1[o1] == null) continue;
        let l1 = n1.models[r1].fields.find((c1)=>c1.name === o1);
        if (!l1 || l1.kind !== "object" || !l1.relationName) continue;
        let u1 = typeof s1 == "object" ? s1 : {};
        t1[o1] = rn({
            visitor: i1,
            result: t1[o1],
            args: u1,
            modelName: l1.type,
            runtimeDataModel: n1
        });
    }
}
function Zs({ result: e1, modelName: t1, args: r1, extensions: n1, runtimeDataModel: i1 }) {
    return n1.isEmpty() || e1 == null || typeof e1 != "object" || !i1.models[t1] ? e1 : rn({
        result: e1,
        args: r1 ?? {},
        modelName: t1,
        runtimeDataModel: i1,
        visitor: (s1, a1, l1)=>zs({
                result: s1,
                modelName: ve(a1),
                select: l1.select,
                extensions: n1
            })
    });
}
function Xs(e1) {
    if (e1 instanceof oe) return Dp(e1);
    if (Array.isArray(e1)) {
        let r1 = [
            e1[0]
        ];
        for(let n1 = 1; n1 < e1.length; n1++)r1[n1] = Wt(e1[n1]);
        return r1;
    }
    let t1 = {};
    for(let r1 in e1)t1[r1] = Wt(e1[r1]);
    return t1;
}
function Dp(e1) {
    return new oe(e1.strings, e1.values);
}
function Wt(e1) {
    if (typeof e1 != "object" || e1 == null || e1 instanceof Ae || ht(e1)) return e1;
    if (yt(e1)) return new we(e1.toFixed());
    if (mt(e1)) return new Date(+e1);
    if (ArrayBuffer.isView(e1)) return e1.slice(0);
    if (Array.isArray(e1)) {
        let t1 = e1.length, r1;
        for(r1 = Array(t1); t1--;)r1[t1] = Wt(e1[t1]);
        return r1;
    }
    if (typeof e1 == "object") {
        let t1 = {};
        for(let r1 in e1)r1 === "__proto__" ? Object.defineProperty(t1, r1, {
            value: Wt(e1[r1]),
            configurable: !0,
            enumerable: !0,
            writable: !0
        }) : t1[r1] = Wt(e1[r1]);
        return t1;
    }
    Ge(e1, "Unknown value");
}
function ta(e1, t1, r1, n1 = 0) {
    return e1._createPrismaPromise((i1)=>{
        let o1 = t1.customDataProxyFetch;
        return "transaction" in t1 && i1 !== void 0 && (t1.transaction?.kind === "batch" && t1.transaction.lock.then(), t1.transaction = i1), n1 === r1.length ? e1._executeRequest(t1) : r1[n1]({
            model: t1.model,
            operation: t1.model ? t1.action : t1.clientMethod,
            args: Xs(t1.args ?? {}),
            __internalParams: t1,
            query: (s1, a1 = t1)=>{
                let l1 = a1.customDataProxyFetch;
                return a1.customDataProxyFetch = oa(o1, l1), a1.args = s1, ta(e1, a1, r1, n1 + 1);
            }
        });
    });
}
function ra(e1, t1) {
    let { jsModelName: r1, action: n1, clientMethod: i1 } = t1, o1 = r1 ? n1 : i1;
    if (e1._extensions.isEmpty()) return e1._executeRequest(t1);
    let s1 = e1._extensions.getAllQueryCallbacks(r1 ?? "$none", o1);
    return ta(e1, t1, s1);
}
function na(e1) {
    return (t1)=>{
        let r1 = {
            requests: t1
        }, n1 = t1[0].extensions.getAllBatchQueryCallbacks();
        return n1.length ? ia(r1, n1, 0, e1) : e1(r1);
    };
}
function ia(e1, t1, r1, n1) {
    if (r1 === t1.length) return n1(e1);
    let i1 = e1.customDataProxyFetch, o1 = e1.requests[0].transaction;
    return t1[r1]({
        args: {
            queries: e1.requests.map((s1)=>({
                    model: s1.modelName,
                    operation: s1.action,
                    args: s1.args
                })),
            transaction: o1 ? {
                isolationLevel: o1.kind === "batch" ? o1.isolationLevel : void 0
            } : void 0
        },
        __internalParams: e1,
        query (s1, a1 = e1) {
            let l1 = a1.customDataProxyFetch;
            return a1.customDataProxyFetch = oa(i1, l1), ia(a1, t1, r1 + 1, n1);
        }
    });
}
var ea = (e1)=>e1;
function oa(e1 = ea, t1 = ea) {
    return (r1)=>e1(t1(r1));
}
function aa(e1, t1, r1) {
    let n1 = ve(r1);
    return !t1.result || !(t1.result.$allModels || t1.result[n1]) ? e1 : _p({
        ...e1,
        ...sa(t1.name, e1, t1.result.$allModels),
        ...sa(t1.name, e1, t1.result[n1])
    });
}
function _p(e1) {
    let t1 = new xe, r1 = (n1, i1)=>t1.getOrCreate(n1, ()=>i1.has(n1) ? [
                n1
            ] : (i1.add(n1), e1[n1] ? e1[n1].needs.flatMap((o1)=>r1(o1, i1)) : [
                n1
            ]));
    return ct(e1, (n1)=>({
            ...n1,
            needs: r1(n1.name, new Set)
        }));
}
function sa(e1, t1, r1) {
    return r1 ? ct(r1, ({ needs: n1, compute: i1 }, o1)=>({
            name: o1,
            needs: n1 ? Object.keys(n1).filter((s1)=>n1[s1]) : [],
            compute: Np(t1, o1, i1)
        })) : {};
}
function Np(e1, t1, r1) {
    let n1 = e1?.[t1]?.compute;
    return n1 ? (i1)=>r1({
            ...i1,
            [t1]: n1(i1)
        }) : r1;
}
function la(e1, t1) {
    if (!t1) return e1;
    let r1 = {
        ...e1
    };
    for (let n1 of Object.values(t1))if (e1[n1.name]) for (let i1 of n1.needs)r1[i1] = !0;
    return r1;
}
var nn = class {
    constructor(t1, r1){
        this.extension = t1;
        this.previous = r1;
        this.computedFieldsCache = new xe;
        this.modelExtensionsCache = new xe;
        this.queryCallbacksCache = new xe;
        this.clientExtensions = $t(()=>this.extension.client ? {
                ...this.previous?.getAllClientExtensions(),
                ...this.extension.client
            } : this.previous?.getAllClientExtensions());
        this.batchCallbacks = $t(()=>{
            let t1 = this.previous?.getAllBatchQueryCallbacks() ?? [], r1 = this.extension.query?.$__internalBatch;
            return r1 ? t1.concat(r1) : t1;
        });
    }
    getAllComputedFields(t1) {
        return this.computedFieldsCache.getOrCreate(t1, ()=>aa(this.previous?.getAllComputedFields(t1), this.extension, t1));
    }
    getAllClientExtensions() {
        return this.clientExtensions.get();
    }
    getAllModelExtensions(t1) {
        return this.modelExtensionsCache.getOrCreate(t1, ()=>{
            let r1 = ve(t1);
            return !this.extension.model || !(this.extension.model[r1] || this.extension.model.$allModels) ? this.previous?.getAllModelExtensions(t1) : {
                ...this.previous?.getAllModelExtensions(t1),
                ...this.extension.model.$allModels,
                ...this.extension.model[r1]
            };
        });
    }
    getAllQueryCallbacks(t1, r1) {
        return this.queryCallbacksCache.getOrCreate(`${t1}:${r1}`, ()=>{
            let n1 = this.previous?.getAllQueryCallbacks(t1, r1) ?? [], i1 = [], o1 = this.extension.query;
            return !o1 || !(o1[t1] || o1.$allModels || o1[r1] || o1.$allOperations) ? n1 : (o1[t1] !== void 0 && (o1[t1][r1] !== void 0 && i1.push(o1[t1][r1]), o1[t1].$allOperations !== void 0 && i1.push(o1[t1].$allOperations)), t1 !== "$none" && o1.$allModels !== void 0 && (o1.$allModels[r1] !== void 0 && i1.push(o1.$allModels[r1]), o1.$allModels.$allOperations !== void 0 && i1.push(o1.$allModels.$allOperations)), o1[r1] !== void 0 && i1.push(o1[r1]), o1.$allOperations !== void 0 && i1.push(o1.$allOperations), n1.concat(i1));
        });
    }
    getAllBatchQueryCallbacks() {
        return this.batchCallbacks.get();
    }
}, on = class e {
    constructor(t1){
        this.head = t1;
    }
    static empty() {
        return new e;
    }
    static single(t1) {
        return new e(new nn(t1));
    }
    isEmpty() {
        return this.head === void 0;
    }
    append(t1) {
        return new e(new nn(t1, this.head));
    }
    getAllComputedFields(t1) {
        return this.head?.getAllComputedFields(t1);
    }
    getAllClientExtensions() {
        return this.head?.getAllClientExtensions();
    }
    getAllModelExtensions(t1) {
        return this.head?.getAllModelExtensions(t1);
    }
    getAllQueryCallbacks(t1, r1) {
        return this.head?.getAllQueryCallbacks(t1, r1) ?? [];
    }
    getAllBatchQueryCallbacks() {
        return this.head?.getAllBatchQueryCallbacks() ?? [];
    }
};
var ua = D("prisma:client"), ca = {
    Vercel: "vercel",
    "Netlify CI": "netlify"
};
function pa({ postinstall: e1, ciName: t1, clientVersion: r1 }) {
    if (ua("checkPlatformCaching:postinstall", e1), ua("checkPlatformCaching:ciName", t1), e1 === !0 && t1 && t1 in ca) {
        let n1 = `Prisma has detected that this project was built on ${t1}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${ca[t1]}-build`;
        throw console.error(n1), new k(n1, r1);
    }
}
function da(e1, t1) {
    return e1 ? e1.datasources ? e1.datasources : e1.datasourceUrl ? {
        [t1[0]]: {
            url: e1.datasourceUrl
        }
    } : {} : {};
}
function zt({ error: e1, user_facing_error: t1 }, r1) {
    return t1.error_code ? new U(t1.message, {
        code: t1.error_code,
        clientVersion: r1,
        meta: t1.meta,
        batchRequestIdx: t1.batch_request_idx
    }) : new K(e1, {
        clientVersion: r1,
        batchRequestIdx: t1.batch_request_idx
    });
}
var Pt = class {
};
var ha = S(__webpack_require__(57147)), Yt = S(__webpack_require__(71017));
function sn(e1) {
    let { runtimeBinaryTarget: t1 } = e1;
    return `Add "${t1}" to \`binaryTargets\` in the "schema.prisma" file and run \`prisma generate\` after saving it:

${Lp(e1)}`;
}
function Lp(e1) {
    let { generator: t1, generatorBinaryTargets: r1, runtimeBinaryTarget: n1 } = e1, i1 = {
        fromEnvVar: null,
        value: n1
    }, o1 = [
        ...r1,
        i1
    ];
    return ti({
        ...t1,
        binaryTargets: o1
    });
}
function Ve(e1) {
    let { runtimeBinaryTarget: t1 } = e1;
    return `Prisma Client could not locate the Query Engine for runtime "${t1}".`;
}
function je(e1) {
    let { searchedLocations: t1 } = e1;
    return `The following locations have been searched:
${[
        ...new Set(t1)
    ].map((i1)=>`  ${i1}`).join(`
`)}`;
}
function ma(e1) {
    let { runtimeBinaryTarget: t1 } = e1;
    return `${Ve(e1)}

This happened because \`binaryTargets\` have been pinned, but the actual deployment also required "${t1}".
${sn(e1)}

${je(e1)}`;
}
function an(e1) {
    return `We would appreciate if you could take the time to share some information with us.
Please help us by answering a few questions: https://pris.ly/${e1}`;
}
function fa(e1) {
    let { queryEngineName: t1 } = e1;
    return `${Ve(e1)}

This is likely caused by a bundler that has not copied "${t1}" next to the resulting bundle.
Ensure that "${t1}" has been copied next to the bundle or in "${e1.expectedLocation}".

${an("engine-not-found-bundler-investigation")}

${je(e1)}`;
}
function ga(e1) {
    let { runtimeBinaryTarget: t1, generatorBinaryTargets: r1 } = e1, n1 = r1.find((i1)=>i1.native);
    return `${Ve(e1)}

This happened because Prisma Client was generated for "${n1?.value ?? "unknown"}", but the actual deployment required "${t1}".
${sn(e1)}

${je(e1)}`;
}
function ya(e1) {
    let { queryEngineName: t1 } = e1;
    return `${Ve(e1)}

This is likely caused by tooling that has not copied "${t1}" to the deployment folder.
Ensure that you ran \`prisma generate\` and that "${t1}" has been copied to "${e1.expectedLocation}".

${an("engine-not-found-tooling-investigation")}

${je(e1)}`;
}
var $p = D("prisma:client:engines:resolveEnginePath"), qp = ()=>new RegExp("runtime[\\\\/]library\\.m?js$");
async function xa(e1, t1) {
    let r1 = {
        binary: process.env.PRISMA_QUERY_ENGINE_BINARY,
        library: process.env.PRISMA_QUERY_ENGINE_LIBRARY
    }[e1] ?? t1.prismaPath;
    if (r1 !== void 0) return r1;
    let { enginePath: n1, searchedLocations: i1 } = await Vp(e1, t1);
    if ($p("enginePath", n1), n1 !== void 0 && e1 === "binary" && zn(n1), n1 !== void 0) return t1.prismaPath = n1;
    let o1 = await lt(), s1 = t1.generator?.binaryTargets ?? [], a1 = s1.some((d1)=>d1.native), l1 = !s1.some((d1)=>d1.value === o1), u1 = __filename.match(qp()) === null, c1 = {
        searchedLocations: i1,
        generatorBinaryTargets: s1,
        generator: t1.generator,
        runtimeBinaryTarget: o1,
        queryEngineName: ba(e1, o1),
        expectedLocation: Yt.default.relative(process.cwd(), t1.dirname)
    }, p1;
    throw a1 && l1 ? p1 = ga(c1) : l1 ? p1 = ma(c1) : u1 ? p1 = fa(c1) : p1 = ya(c1), new k(p1, t1.clientVersion);
}
async function Vp(engineType, config) {
    let binaryTarget = await lt(), searchedLocations = [], dirname = eval("__dirname"), searchLocations = [
        config.dirname,
        Yt.default.resolve(dirname, ".."),
        config.generator?.output?.value ?? dirname,
        Yt.default.resolve(dirname, "../../../.prisma/client"),
        "/tmp/prisma-engines",
        config.cwd
    ];
    __filename.includes("resolveEnginePath") && searchLocations.push(zo());
    for (let e of searchLocations){
        let t = ba(engineType, binaryTarget), r = Yt.default.join(e, t);
        if (searchedLocations.push(e), ha.default.existsSync(r)) return {
            enginePath: r,
            searchedLocations
        };
    }
    return {
        enginePath: void 0,
        searchedLocations
    };
}
function ba(e1, t1) {
    return e1 === "library" ? Nn(t1, "fs") : `query-engine-${t1}${t1 === "windows" ? ".exe" : ""}`;
}
function ln(e1, t1) {
    return {
        batch: e1,
        transaction: t1?.kind === "batch" ? {
            isolationLevel: t1.options.isolationLevel
        } : void 0
    };
}
var Ci = S(ni());
function Ea(e1) {
    return e1 ? e1.replace(/".*"/g, '"X"').replace(/[\s:\[]([+-]?([0-9]*[.])?[0-9]+)/g, (t1)=>`${t1[0]}5`) : "";
}
function wa(e1) {
    return e1.split(`
`).map((t1)=>t1.replace(/^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)\s*/, "").replace(/\+\d+\s*ms$/, "")).join(`
`);
}
var Pa = S(is());
function va({ title: e1, user: t1 = "prisma", repo: r1 = "prisma", template: n1 = "bug_report.md", body: i1 }) {
    return (0, Pa.default)({
        user: t1,
        repo: r1,
        template: n1,
        title: e1,
        body: i1
    });
}
function Ta({ version: e1, platform: t1, title: r1, description: n1, engineVersion: i1, database: o1, query: s1 }) {
    let a1 = mo(6e3 - (s1?.length ?? 0)), l1 = wa((0, Ci.default)(a1)), u1 = n1 ? `# Description
\`\`\`
${n1}
\`\`\`` : "", c1 = (0, Ci.default)(`Hi Prisma Team! My Prisma Client just crashed. This is the report:
## Versions

| Name            | Version            |
|-----------------|--------------------|
| Node            | ${process.version?.padEnd(19)}| 
| OS              | ${t1?.padEnd(19)}|
| Prisma Client   | ${e1?.padEnd(19)}|
| Query Engine    | ${i1?.padEnd(19)}|
| Database        | ${o1?.padEnd(19)}|

${u1}

## Logs
\`\`\`
${l1}
\`\`\`

## Client Snippet
\`\`\`ts
// PLEASE FILL YOUR CODE SNIPPET HERE
\`\`\`

## Schema
\`\`\`prisma
// PLEASE ADD YOUR SCHEMA HERE IF POSSIBLE
\`\`\`

## Prisma Engine Query
\`\`\`
${s1 ? Ea(s1) : ""}
\`\`\`
`), p1 = va({
        title: r1,
        body: c1
    });
    return `${r1}

This is a non-recoverable error which probably happens when the Prisma Query Engine has a panic.

${te(p1)}

If you want the Prisma team to look into it, please open the link above \u{1F64F}
To increase the chance of success, please post your schema and a snippet of
how you used Prisma Client in the issue. 
`;
}
function un({ inlineDatasources: e1, overrideDatasources: t1, env: r1, clientVersion: n1 }) {
    let i1, o1 = Object.keys(e1)[0], s1 = e1[o1]?.url, a1 = t1[o1]?.url;
    if (o1 === void 0 ? i1 = void 0 : a1 ? i1 = a1 : s1?.value ? i1 = s1.value : s1?.fromEnvVar && (i1 = r1[s1.fromEnvVar]), s1?.fromEnvVar !== void 0 && i1 === void 0) throw new k(`error: Environment variable not found: ${s1.fromEnvVar}.`, n1);
    if (i1 === void 0) throw new k("error: Missing URL environment variable, value, or override.", n1);
    return i1;
}
var cn = class extends Error {
    constructor(r1, n1){
        super(r1);
        this.clientVersion = n1.clientVersion, this.cause = n1.cause;
    }
    get [Symbol.toStringTag]() {
        return this.name;
    }
};
var ae = class extends cn {
    constructor(r1, n1){
        super(r1, n1);
        this.isRetryable = n1.isRetryable ?? !0;
    }
};
function M(e1, t1) {
    return {
        ...e1,
        isRetryable: t1
    };
}
var vt = class extends ae {
    constructor(r1){
        super("This request must be retried", M(r1, !0));
        this.name = "ForcedRetryError";
        this.code = "P5001";
    }
};
E(vt, "ForcedRetryError");
var ze = class extends ae {
    constructor(r1, n1){
        super(r1, M(n1, !1));
        this.name = "InvalidDatasourceError";
        this.code = "P5002";
    }
};
E(ze, "InvalidDatasourceError");
var Ye = class extends ae {
    constructor(r1, n1){
        super(r1, M(n1, !1));
        this.name = "NotImplementedYetError";
        this.code = "P5004";
    }
};
E(Ye, "NotImplementedYetError");
var L = class extends ae {
    constructor(r1, n1){
        super(r1, n1);
        this.response = n1.response;
        let i1 = this.response.headers.get("prisma-request-id");
        if (i1) {
            let o1 = `(The request id was: ${i1})`;
            this.message = this.message + " " + o1;
        }
    }
};
var Ze = class extends L {
    constructor(r1){
        super("Schema needs to be uploaded", M(r1, !0));
        this.name = "SchemaMissingError";
        this.code = "P5005";
    }
};
E(Ze, "SchemaMissingError");
var Ai = "This request could not be understood by the server", Zt = class extends L {
    constructor(r1, n1, i1){
        super(n1 || Ai, M(r1, !1));
        this.name = "BadRequestError";
        this.code = "P5000";
        i1 && (this.code = i1);
    }
};
E(Zt, "BadRequestError");
var Xt = class extends L {
    constructor(r1, n1){
        super("Engine not started: healthcheck timeout", M(r1, !0));
        this.name = "HealthcheckTimeoutError";
        this.code = "P5013";
        this.logs = n1;
    }
};
E(Xt, "HealthcheckTimeoutError");
var er = class extends L {
    constructor(r1, n1, i1){
        super(n1, M(r1, !0));
        this.name = "EngineStartupError";
        this.code = "P5014";
        this.logs = i1;
    }
};
E(er, "EngineStartupError");
var tr = class extends L {
    constructor(r1){
        super("Engine version is not supported", M(r1, !1));
        this.name = "EngineVersionNotSupportedError";
        this.code = "P5012";
    }
};
E(tr, "EngineVersionNotSupportedError");
var Ri = "Request timed out", rr = class extends L {
    constructor(r1, n1 = Ri){
        super(n1, M(r1, !1));
        this.name = "GatewayTimeoutError";
        this.code = "P5009";
    }
};
E(rr, "GatewayTimeoutError");
var jp = "Interactive transaction error", nr = class extends L {
    constructor(r1, n1 = jp){
        super(n1, M(r1, !1));
        this.name = "InteractiveTransactionError";
        this.code = "P5015";
    }
};
E(nr, "InteractiveTransactionError");
var Bp = "Request parameters are invalid", ir = class extends L {
    constructor(r1, n1 = Bp){
        super(n1, M(r1, !1));
        this.name = "InvalidRequestError";
        this.code = "P5011";
    }
};
E(ir, "InvalidRequestError");
var Mi = "Requested resource does not exist", or = class extends L {
    constructor(r1, n1 = Mi){
        super(n1, M(r1, !1));
        this.name = "NotFoundError";
        this.code = "P5003";
    }
};
E(or, "NotFoundError");
var Si = "Unknown server error", Tt = class extends L {
    constructor(r1, n1, i1){
        super(n1 || Si, M(r1, !0));
        this.name = "ServerError";
        this.code = "P5006";
        this.logs = i1;
    }
};
E(Tt, "ServerError");
var Ii = "Unauthorized, check your connection string", sr = class extends L {
    constructor(r1, n1 = Ii){
        super(n1, M(r1, !1));
        this.name = "UnauthorizedError";
        this.code = "P5007";
    }
};
E(sr, "UnauthorizedError");
var Fi = "Usage exceeded, retry again later", ar = class extends L {
    constructor(r1, n1 = Fi){
        super(n1, M(r1, !0));
        this.name = "UsageExceededError";
        this.code = "P5008";
    }
};
E(ar, "UsageExceededError");
async function Up(e1) {
    let t1;
    try {
        t1 = await e1.text();
    } catch  {
        return {
            type: "EmptyError"
        };
    }
    try {
        let r1 = JSON.parse(t1);
        if (typeof r1 == "string") switch(r1){
            case "InternalDataProxyError":
                return {
                    type: "DataProxyError",
                    body: r1
                };
            default:
                return {
                    type: "UnknownTextError",
                    body: r1
                };
        }
        if (typeof r1 == "object" && r1 !== null) {
            if ("is_panic" in r1 && "message" in r1 && "error_code" in r1) return {
                type: "QueryEngineError",
                body: r1
            };
            if ("EngineNotStarted" in r1 || "InteractiveTransactionMisrouted" in r1 || "InvalidRequestError" in r1) {
                let n1 = Object.values(r1)[0].reason;
                return typeof n1 == "string" && ![
                    "SchemaMissing",
                    "EngineVersionNotSupported"
                ].includes(n1) ? {
                    type: "UnknownJsonError",
                    body: r1
                } : {
                    type: "DataProxyError",
                    body: r1
                };
            }
        }
        return {
            type: "UnknownJsonError",
            body: r1
        };
    } catch  {
        return t1 === "" ? {
            type: "EmptyError"
        } : {
            type: "UnknownTextError",
            body: t1
        };
    }
}
async function lr(e1, t1) {
    if (e1.ok) return;
    let r1 = {
        clientVersion: t1,
        response: e1
    }, n1 = await Up(e1);
    if (n1.type === "QueryEngineError") throw new U(n1.body.message, {
        code: n1.body.error_code,
        clientVersion: t1
    });
    if (n1.type === "DataProxyError") {
        if (n1.body === "InternalDataProxyError") throw new Tt(r1, "Internal Data Proxy error");
        if ("EngineNotStarted" in n1.body) {
            if (n1.body.EngineNotStarted.reason === "SchemaMissing") return new Ze(r1);
            if (n1.body.EngineNotStarted.reason === "EngineVersionNotSupported") throw new tr(r1);
            if ("EngineStartupError" in n1.body.EngineNotStarted.reason) {
                let { msg: i1, logs: o1 } = n1.body.EngineNotStarted.reason.EngineStartupError;
                throw new er(r1, i1, o1);
            }
            if ("KnownEngineStartupError" in n1.body.EngineNotStarted.reason) {
                let { msg: i1, error_code: o1 } = n1.body.EngineNotStarted.reason.KnownEngineStartupError;
                throw new k(i1, t1, o1);
            }
            if ("HealthcheckTimeout" in n1.body.EngineNotStarted.reason) {
                let { logs: i1 } = n1.body.EngineNotStarted.reason.HealthcheckTimeout;
                throw new Xt(r1, i1);
            }
        }
        if ("InteractiveTransactionMisrouted" in n1.body) {
            let i1 = {
                IDParseError: "Could not parse interactive transaction ID",
                NoQueryEngineFoundError: "Could not find Query Engine for the specified host and transaction ID",
                TransactionStartError: "Could not start interactive transaction"
            };
            throw new nr(r1, i1[n1.body.InteractiveTransactionMisrouted.reason]);
        }
        if ("InvalidRequestError" in n1.body) throw new ir(r1, n1.body.InvalidRequestError.reason);
    }
    if (e1.status === 401 || e1.status === 403) throw new sr(r1, Ct(Ii, n1));
    if (e1.status === 404) return new or(r1, Ct(Mi, n1));
    if (e1.status === 429) throw new ar(r1, Ct(Fi, n1));
    if (e1.status === 504) throw new rr(r1, Ct(Ri, n1));
    if (e1.status >= 500) throw new Tt(r1, Ct(Si, n1));
    if (e1.status >= 400) throw new Zt(r1, Ct(Ai, n1));
}
function Ct(e1, t1) {
    return t1.type === "EmptyError" ? e1 : `${e1}: ${JSON.stringify(t1)}`;
}
function Ca(e1) {
    let t1 = Math.pow(2, e1) * 50, r1 = Math.ceil(Math.random() * t1) - Math.ceil(t1 / 2), n1 = t1 + r1;
    return new Promise((i1)=>setTimeout(()=>i1(n1), n1));
}
function Aa(e1) {
    if (!!e1.generator?.previewFeatures.some((r1)=>r1.toLowerCase().includes("metrics"))) throw new k("The `metrics` preview feature is not yet available with Accelerate.\nPlease remove `metrics` from the `previewFeatures` in your schema.\n\nMore information about Accelerate: https://pris.ly/d/accelerate", e1.clientVersion);
}
var Ra = {
    "@prisma/debug": "workspace:*",
    "@prisma/engines-version": "5.3.1-2.61e140623197a131c2a6189271ffee05a7aa9a59",
    "@prisma/fetch-engine": "workspace:*",
    "@prisma/get-platform": "workspace:*",
    "@swc/core": "1.3.75",
    "@swc/jest": "0.2.29",
    "@types/jest": "29.5.4",
    "@types/node": "18.17.12",
    execa: "5.1.1",
    jest: "29.6.4",
    typescript: "5.2.2"
};
var ur = class extends ae {
    constructor(r1, n1){
        super(`Cannot fetch data from service:
${r1}`, M(n1, !0));
        this.name = "RequestError";
        this.code = "P5010";
    }
};
E(ur, "RequestError");
async function Xe(e1, t1, r1 = (n1)=>n1) {
    let n1 = t1.clientVersion;
    try {
        return typeof fetch == "function" ? await r1(fetch)(e1, t1) : await r1(ki)(e1, t1);
    } catch (i1) {
        console.log(e1);
        let o1 = i1.message ?? "Unknown error";
        throw new ur(o1, {
            clientVersion: n1
        });
    }
}
function Qp(e1) {
    return {
        ...e1.headers,
        "Content-Type": "application/json"
    };
}
function Jp(e1) {
    return {
        method: e1.method,
        headers: Qp(e1)
    };
}
function Gp(e1, t1) {
    return {
        text: ()=>Promise.resolve(Buffer.concat(e1).toString()),
        json: ()=>Promise.resolve().then(()=>JSON.parse(Buffer.concat(e1).toString())),
        ok: t1.statusCode >= 200 && t1.statusCode <= 299,
        status: t1.statusCode,
        url: t1.url,
        headers: new Oi(t1.headers)
    };
}
async function ki(e1, t1 = {}) {
    let r1 = Hp("https"), n1 = Jp(t1), i1 = [], { origin: o1 } = new URL(e1);
    return new Promise((s1, a1)=>{
        let l1 = r1.request(e1, n1, (u1)=>{
            let { statusCode: c1, headers: { location: p1 } } = u1;
            c1 >= 301 && c1 <= 399 && p1 && (p1.startsWith("http") === !1 ? s1(ki(`${o1}${p1}`, t1)) : s1(ki(p1, t1))), u1.on("data", (d1)=>i1.push(d1)), u1.on("end", ()=>s1(Gp(i1, u1))), u1.on("error", a1);
        });
        l1.on("error", a1), l1.end(t1.body ?? "");
    });
}
var Hp = undefined, Oi = class {
    constructor(t1 = {}){
        this.headers = new Map;
        for (let [r1, n1] of Object.entries(t1))if (typeof n1 == "string") this.headers.set(r1, n1);
        else if (Array.isArray(n1)) for (let i1 of n1)this.headers.set(r1, i1);
    }
    append(t1, r1) {
        this.headers.set(t1, r1);
    }
    delete(t1) {
        this.headers.delete(t1);
    }
    get(t1) {
        return this.headers.get(t1) ?? null;
    }
    has(t1) {
        return this.headers.has(t1);
    }
    set(t1, r1) {
        this.headers.set(t1, r1);
    }
    forEach(t1, r1) {
        for (let [n1, i1] of this.headers)t1.call(r1, i1, n1, this);
    }
};
var Wp = /^[1-9][0-9]*\.[0-9]+\.[0-9]+$/, Ma = D("prisma:client:dataproxyEngine");
async function zp(e1, t1) {
    let r1 = Ra["@prisma/engines-version"], n1 = t1.clientVersion ?? "unknown";
    if (process.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION) return process.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION;
    if (e1.includes("accelerate") && n1 !== "0.0.0" && n1 !== "in-memory") return n1;
    let [i1, o1] = n1?.split("-") ?? [];
    if (o1 === void 0 && Wp.test(i1)) return i1;
    if (o1 !== void 0 || n1 === "0.0.0" || n1 === "in-memory") {
        if (e1.startsWith("localhost") || e1.startsWith("127.0.0.1")) return "0.0.0";
        let [s1] = r1.split("-") ?? [], [a1, l1, u1] = s1.split("."), c1 = Yp(`<=${a1}.${l1}.${u1}`), p1 = await Xe(c1, {
            clientVersion: n1
        });
        if (!p1.ok) throw new Error(`Failed to fetch stable Prisma version, unpkg.com status ${p1.status} ${p1.statusText}, response body: ${await p1.text() || "<empty body>"}`);
        let d1 = await p1.text();
        Ma("length of body fetched from unpkg.com", d1.length);
        let f1;
        try {
            f1 = JSON.parse(d1);
        } catch (y1) {
            throw console.error("JSON.parse error: body fetched from unpkg.com: ", d1), y1;
        }
        return f1.version;
    }
    throw new Ye("Only `major.minor.patch` versions are supported by Accelerate.", {
        clientVersion: n1
    });
}
async function Sa(e1, t1) {
    let r1 = await zp(e1, t1);
    return Ma("version", r1), r1;
}
function Yp(e1) {
    return encodeURI(`https://unpkg.com/prisma@${e1}/package.json`);
}
var Ia = 3, Di = D("prisma:client:dataproxyEngine"), _i = class {
    constructor({ apiKey: t1, tracingHelper: r1, logLevel: n1, logQueries: i1 }){
        this.apiKey = t1, this.tracingHelper = r1, this.logLevel = n1, this.logQueries = i1;
    }
    build({ traceparent: t1, interactiveTransaction: r1 } = {}) {
        let n1 = {
            Authorization: `Bearer ${this.apiKey}`
        };
        this.tracingHelper.isEnabled() && (n1.traceparent = t1 ?? this.tracingHelper.getTraceParent()), r1 && (n1["X-transaction-id"] = r1.id);
        let i1 = this.buildCaptureSettings();
        return i1.length > 0 && (n1["X-capture-telemetry"] = i1.join(", ")), n1;
    }
    buildCaptureSettings() {
        let t1 = [];
        return this.tracingHelper.isEnabled() && t1.push("tracing"), this.logLevel && t1.push(this.logLevel), this.logQueries && t1.push("query"), t1;
    }
}, cr = class extends Pt {
    constructor(r1){
        super();
        Aa(r1), this.config = r1, this.env = {
            ...this.config.env,
            ...process.env
        }, this.inlineSchema = r1.inlineSchema ?? "", this.inlineDatasources = r1.inlineDatasources ?? {}, this.inlineSchemaHash = r1.inlineSchemaHash ?? "", this.clientVersion = r1.clientVersion ?? "unknown", this.logEmitter = r1.logEmitter, this.tracingHelper = this.config.tracingHelper;
    }
    apiKey() {
        return this.headerBuilder.apiKey;
    }
    version() {
        return "unknown";
    }
    async start() {
        this.startPromise !== void 0 && await this.startPromise, this.startPromise = (async ()=>{
            let [r1, n1] = this.extractHostAndApiKey();
            this.host = r1, this.headerBuilder = new _i({
                apiKey: n1,
                tracingHelper: this.tracingHelper,
                logLevel: this.config.logLevel,
                logQueries: this.config.logQueries
            }), this.remoteClientVersion = await Sa(r1, this.config), Di("host", this.host);
        })(), await this.startPromise;
    }
    async stop() {}
    propagateResponseExtensions(r1) {
        r1?.logs?.length && r1.logs.forEach((n1)=>{
            switch(n1.level){
                case "debug":
                case "error":
                case "trace":
                case "warn":
                case "info":
                    break;
                case "query":
                    {
                        let i1 = typeof n1.attributes.query == "string" ? n1.attributes.query : "";
                        if (!this.tracingHelper.isEnabled()) {
                            let [o1] = i1.split("/* traceparent");
                            i1 = o1;
                        }
                        this.logEmitter.emit("query", {
                            query: i1,
                            timestamp: n1.timestamp,
                            duration: n1.attributes.duration_ms,
                            params: n1.attributes.params,
                            target: n1.attributes.target
                        });
                    }
            }
        }), r1?.traces?.length && this.tracingHelper.createEngineSpan({
            span: !0,
            spans: r1.traces
        });
    }
    on(r1, n1) {
        if (r1 === "beforeExit") throw new Error('"beforeExit" hook is not applicable to the remote query engine');
        this.logEmitter.on(r1, n1);
    }
    async url(r1) {
        return await this.start(), `https://${this.host}/${this.remoteClientVersion}/${this.inlineSchemaHash}/${r1}`;
    }
    async uploadSchema() {
        let r1 = {
            name: "schemaUpload",
            internal: !0
        };
        return this.tracingHelper.runInChildSpan(r1, async ()=>{
            let n1 = await Xe(await this.url("schema"), {
                method: "PUT",
                headers: this.headerBuilder.build(),
                body: this.inlineSchema,
                clientVersion: this.clientVersion
            });
            n1.ok || Di("schema response status", n1.status);
            let i1 = await lr(n1, this.clientVersion);
            if (i1) throw this.logEmitter.emit("warn", {
                message: `Error while uploading schema: ${i1.message}`
            }), i1;
            this.logEmitter.emit("info", {
                message: `Schema (re)uploaded (hash: ${this.inlineSchemaHash})`
            });
        });
    }
    request(r1, { traceparent: n1, interactiveTransaction: i1, customDataProxyFetch: o1 }) {
        return this.requestInternal({
            body: r1,
            traceparent: n1,
            interactiveTransaction: i1,
            customDataProxyFetch: o1
        });
    }
    async requestBatch(r1, { traceparent: n1, transaction: i1, customDataProxyFetch: o1 }) {
        let s1 = i1?.kind === "itx" ? i1.options : void 0, a1 = ln(r1, i1), { batchResult: l1, elapsed: u1 } = await this.requestInternal({
            body: a1,
            customDataProxyFetch: o1,
            interactiveTransaction: s1,
            traceparent: n1
        });
        return l1.map((c1)=>"errors" in c1 && c1.errors.length > 0 ? zt(c1.errors[0], this.clientVersion) : {
                data: c1,
                elapsed: u1
            });
    }
    requestInternal({ body: r1, traceparent: n1, customDataProxyFetch: i1, interactiveTransaction: o1 }) {
        return this.withRetry({
            actionGerund: "querying",
            callback: async ({ logHttpCall: s1 })=>{
                let a1 = o1 ? `${o1.payload.endpoint}/graphql` : await this.url("graphql");
                s1(a1);
                let l1 = await Xe(a1, {
                    method: "POST",
                    headers: this.headerBuilder.build({
                        traceparent: n1,
                        interactiveTransaction: o1
                    }),
                    body: JSON.stringify(r1),
                    clientVersion: this.clientVersion
                }, i1);
                l1.ok || Di("graphql response status", l1.status), await this.handleError(await lr(l1, this.clientVersion));
                let u1 = await l1.json(), c1 = u1.extensions;
                if (c1 && this.propagateResponseExtensions(c1), u1.errors) throw u1.errors.length === 1 ? zt(u1.errors[0], this.config.clientVersion) : new K(u1.errors, {
                    clientVersion: this.config.clientVersion
                });
                return u1;
            }
        });
    }
    async transaction(r1, n1, i1) {
        let o1 = {
            start: "starting",
            commit: "committing",
            rollback: "rolling back"
        };
        return this.withRetry({
            actionGerund: `${o1[r1]} transaction`,
            callback: async ({ logHttpCall: s1 })=>{
                if (r1 === "start") {
                    let a1 = JSON.stringify({
                        max_wait: i1?.maxWait ?? 2e3,
                        timeout: i1?.timeout ?? 5e3,
                        isolation_level: i1?.isolationLevel
                    }), l1 = await this.url("transaction/start");
                    s1(l1);
                    let u1 = await Xe(l1, {
                        method: "POST",
                        headers: this.headerBuilder.build({
                            traceparent: n1.traceparent
                        }),
                        body: a1,
                        clientVersion: this.clientVersion
                    });
                    await this.handleError(await lr(u1, this.clientVersion));
                    let c1 = await u1.json(), p1 = c1.extensions;
                    p1 && this.propagateResponseExtensions(p1);
                    let d1 = c1.id, f1 = c1["data-proxy"].endpoint;
                    return {
                        id: d1,
                        payload: {
                            endpoint: f1
                        }
                    };
                } else {
                    let a1 = `${i1.payload.endpoint}/${r1}`;
                    s1(a1);
                    let l1 = await Xe(a1, {
                        method: "POST",
                        headers: this.headerBuilder.build({
                            traceparent: n1.traceparent
                        }),
                        clientVersion: this.clientVersion
                    });
                    await this.handleError(await lr(l1, this.clientVersion));
                    let c1 = (await l1.json()).extensions;
                    c1 && this.propagateResponseExtensions(c1);
                    return;
                }
            }
        });
    }
    extractHostAndApiKey() {
        let r1 = {
            clientVersion: this.clientVersion
        }, n1 = Object.keys(this.inlineDatasources)[0], i1 = un({
            inlineDatasources: this.inlineDatasources,
            overrideDatasources: this.config.overrideDatasources,
            clientVersion: this.clientVersion,
            env: this.env
        }), o1;
        try {
            o1 = new URL(i1);
        } catch  {
            throw new ze(`Error validating datasource \`${n1}\`: the URL must start with the protocol \`prisma://\``, r1);
        }
        let { protocol: s1, host: a1, searchParams: l1 } = o1;
        if (s1 !== "prisma:") throw new ze(`Error validating datasource \`${n1}\`: the URL must start with the protocol \`prisma://\``, r1);
        let u1 = l1.get("api_key");
        if (u1 === null || u1.length < 1) throw new ze(`Error validating datasource \`${n1}\`: the URL must contain a valid API key`, r1);
        return [
            a1,
            u1
        ];
    }
    metrics() {
        throw new Ye("Metrics are not yet supported for Accelerate", {
            clientVersion: this.clientVersion
        });
    }
    async withRetry(r1) {
        for(let n1 = 0;; n1++){
            let i1 = (o1)=>{
                this.logEmitter.emit("info", {
                    message: `Calling ${o1} (n=${n1})`
                });
            };
            try {
                return await r1.callback({
                    logHttpCall: i1
                });
            } catch (o1) {
                if (!(o1 instanceof ae) || !o1.isRetryable) throw o1;
                if (n1 >= Ia) throw o1 instanceof vt ? o1.cause : o1;
                this.logEmitter.emit("warn", {
                    message: `Attempt ${n1 + 1}/${Ia} failed for ${r1.actionGerund}: ${o1.message ?? "(unknown)"}`
                });
                let s1 = await Ca(n1);
                this.logEmitter.emit("warn", {
                    message: `Retrying after ${s1}ms`
                });
            }
        }
    }
    async handleError(r1) {
        if (r1 instanceof Ze) throw await this.uploadSchema(), new vt({
            clientVersion: this.clientVersion,
            cause: r1
        });
        if (r1) throw r1;
    }
};
var _a = S(__webpack_require__(57147));
function Fa(e1) {
    if (e1?.kind === "itx") return e1.options.id;
}
var Li = S(__webpack_require__(22037)), ka = S(__webpack_require__(71017));
var Ni = Symbol("PrismaLibraryEngineCache");
function Zp() {
    let e1 = globalThis;
    return e1[Ni] === void 0 && (e1[Ni] = {}), e1[Ni];
}
function Xp(e1) {
    let t1 = Zp();
    if (t1[e1] !== void 0) return t1[e1];
    let r1 = ka.default.toNamespacedPath(e1), n1 = {
        exports: {}
    }, i1 = 0;
    return process.platform !== "win32" && (i1 = Li.default.constants.dlopen.RTLD_LAZY | Li.default.constants.dlopen.RTLD_DEEPBIND), process.dlopen(n1, r1, i1), t1[e1] = n1.exports, n1.exports;
}
var pn = class {
    constructor(t1){
        this.config = t1;
    }
    async loadLibrary() {
        let t1 = await Bn(), r1 = await xa("library", this.config);
        try {
            return this.config.tracingHelper.runInChildSpan({
                name: "loadLibrary",
                internal: !0
            }, ()=>Xp(r1));
        } catch (n1) {
            let i1 = Yn({
                e: n1,
                platformInfo: t1,
                id: r1
            });
            throw new k(i1, this.config.clientVersion);
        }
    }
};
var Me = D("prisma:client:libraryEngine");
function ed(e1) {
    return e1.item_type === "query" && "query" in e1;
}
function td(e1) {
    return "level" in e1 ? e1.level === "error" && e1.message === "PANIC" : !1;
}
var Oa = [
    ...Un,
    "native"
], Da = 0, pr = class extends Pt {
    constructor(r1, n1 = new pn(r1)){
        super();
        try {
            this.datamodel = _a.default.readFileSync(r1.datamodelPath, "utf-8");
        } catch (s1) {
            throw s1.stack.match(/\/\.next|\/next@|\/next\//) ? new k(`Your schema.prisma could not be found, and we detected that you are using Next.js.
Find out why and learn how to fix this: https://pris.ly/d/schema-not-found-nextjs`, r1.clientVersion) : r1.isBundled === !0 ? new k("Prisma Client could not find its `schema.prisma`. This is likely caused by a bundling step, which leads to `schema.prisma` not being copied near the resulting bundle. We would appreciate if you could take the time to share some information with us.\nPlease help us by answering a few questions: https://pris.ly/bundler-investigation-error", r1.clientVersion) : s1;
        }
        this.config = r1, this.libraryStarted = !1, this.logQueries = r1.logQueries ?? !1, this.logLevel = r1.logLevel ?? "error", this.libraryLoader = n1, this.logEmitter = r1.logEmitter, r1.enableDebugLogs && (this.logLevel = "debug");
        let i1 = Object.keys(r1.overrideDatasources)[0], o1 = r1.overrideDatasources[i1]?.url;
        i1 !== void 0 && o1 !== void 0 && (this.datasourceOverrides = {
            [i1]: o1
        }), this.libraryInstantiationPromise = this.instantiateLibrary(), this.checkForTooManyEngines();
    }
    checkForTooManyEngines() {
        Da === 10 && console.warn(`${he("warn(prisma-client)")} This is the 10th instance of Prisma Client being started. Make sure this is intentional.`);
    }
    async transaction(r1, n1, i1) {
        await this.start();
        let o1 = JSON.stringify(n1), s1;
        if (r1 === "start") {
            let l1 = JSON.stringify({
                max_wait: i1?.maxWait ?? 2e3,
                timeout: i1?.timeout ?? 5e3,
                isolation_level: i1?.isolationLevel
            });
            s1 = await this.engine?.startTransaction(l1, o1);
        } else r1 === "commit" ? s1 = await this.engine?.commitTransaction(i1.id, o1) : r1 === "rollback" && (s1 = await this.engine?.rollbackTransaction(i1.id, o1));
        let a1 = this.parseEngineResponse(s1);
        if (a1.error_code) throw new U(a1.message, {
            code: a1.error_code,
            clientVersion: this.config.clientVersion,
            meta: a1.meta
        });
        return a1;
    }
    async instantiateLibrary() {
        if (Me("internalSetup"), this.libraryInstantiationPromise) return this.libraryInstantiationPromise;
        _n(), this.platform = await this.getPlatform(), await this.loadEngine(), this.version();
    }
    async getPlatform() {
        if (this.platform) return this.platform;
        let r1 = await lt();
        if (!Oa.includes(r1)) throw new k(`Unknown ${me("PRISMA_QUERY_ENGINE_LIBRARY")} ${me(ne(r1))}. Possible binaryTargets: ${Qe(Oa.join(", "))} or a path to the query engine library.
You may have to run ${Qe("prisma generate")} for your changes to take effect.`, this.config.clientVersion);
        return r1;
    }
    parseEngineResponse(r1) {
        if (!r1) throw new K("Response from the Engine was empty", {
            clientVersion: this.config.clientVersion
        });
        try {
            return JSON.parse(r1);
        } catch  {
            throw new K("Unable to JSON.parse response from engine", {
                clientVersion: this.config.clientVersion
            });
        }
    }
    async loadEngine() {
        if (!this.engine) {
            this.QueryEngineConstructor || (this.library = await this.libraryLoader.loadLibrary(), this.QueryEngineConstructor = this.library.QueryEngine);
            try {
                let r1 = new WeakRef(this);
                this.engine = new this.QueryEngineConstructor({
                    datamodel: this.datamodel,
                    env: process.env,
                    logQueries: this.config.logQueries ?? !1,
                    ignoreEnvVarErrors: !0,
                    datasourceOverrides: this.datasourceOverrides ?? {},
                    logLevel: this.logLevel,
                    configDir: this.config.cwd,
                    engineProtocol: "json"
                }, (n1)=>{
                    r1.deref()?.logger(n1);
                }), Da++;
            } catch (r1) {
                let n1 = r1, i1 = this.parseInitError(n1.message);
                throw typeof i1 == "string" ? n1 : new k(i1.message, this.config.clientVersion, i1.error_code);
            }
        }
    }
    logger(r1) {
        let n1 = this.parseEngineResponse(r1);
        if (n1) {
            if ("span" in n1) {
                this.config.tracingHelper.createEngineSpan(n1);
                return;
            }
            n1.level = n1?.level.toLowerCase() ?? "unknown", ed(n1) ? this.logEmitter.emit("query", {
                timestamp: new Date,
                query: n1.query,
                params: n1.params,
                duration: Number(n1.duration_ms),
                target: n1.module_path
            }) : td(n1) ? this.loggerRustPanic = new ue(this.getErrorMessageWithLink(`${n1.message}: ${n1.reason} in ${n1.file}:${n1.line}:${n1.column}`), this.config.clientVersion) : this.logEmitter.emit(n1.level, {
                timestamp: new Date,
                message: n1.message,
                target: n1.module_path
            });
        }
    }
    getErrorMessageWithLink(r1) {
        return Ta({
            platform: this.platform,
            title: r1,
            version: this.config.clientVersion,
            engineVersion: this.versionInfo?.commit,
            database: this.config.activeProvider,
            query: this.lastQuery
        });
    }
    parseInitError(r1) {
        try {
            return JSON.parse(r1);
        } catch  {}
        return r1;
    }
    parseRequestError(r1) {
        try {
            return JSON.parse(r1);
        } catch  {}
        return r1;
    }
    on(r1, n1) {
        if (r1 === "beforeExit") throw new Error('"beforeExit" hook is not applicable to the library engine since Prisma 5.0.0, it is only relevant and implemented for the binary engine. Please add your event listener to the `process` object directly instead.');
        this.logEmitter.on(r1, n1);
    }
    async start() {
        if (await this.libraryInstantiationPromise, await this.libraryStoppingPromise, this.libraryStartingPromise) return Me(`library already starting, this.libraryStarted: ${this.libraryStarted}`), this.libraryStartingPromise;
        if (this.libraryStarted) return;
        let r1 = async ()=>{
            Me("library starting");
            try {
                let n1 = {
                    traceparent: this.config.tracingHelper.getTraceParent()
                };
                await this.engine?.connect(JSON.stringify(n1)), this.libraryStarted = !0, Me("library started");
            } catch (n1) {
                let i1 = this.parseInitError(n1.message);
                throw typeof i1 == "string" ? n1 : new k(i1.message, this.config.clientVersion, i1.error_code);
            } finally{
                this.libraryStartingPromise = void 0;
            }
        };
        return this.libraryStartingPromise = this.config.tracingHelper.runInChildSpan("connect", r1), this.libraryStartingPromise;
    }
    async stop() {
        if (await this.libraryStartingPromise, await this.executingQueryPromise, this.libraryStoppingPromise) return Me("library is already stopping"), this.libraryStoppingPromise;
        if (!this.libraryStarted) return;
        let r1 = async ()=>{
            await new Promise((i1)=>setTimeout(i1, 5)), Me("library stopping");
            let n1 = {
                traceparent: this.config.tracingHelper.getTraceParent()
            };
            await this.engine?.disconnect(JSON.stringify(n1)), this.libraryStarted = !1, this.libraryStoppingPromise = void 0, Me("library stopped");
        };
        return this.libraryStoppingPromise = this.config.tracingHelper.runInChildSpan("disconnect", r1), this.libraryStoppingPromise;
    }
    version() {
        return this.versionInfo = this.library?.version(), this.versionInfo?.version ?? "unknown";
    }
    debugPanic(r1) {
        return this.library?.debugPanic(r1);
    }
    async request(r1, { traceparent: n1, interactiveTransaction: i1 }) {
        Me(`sending request, this.libraryStarted: ${this.libraryStarted}`);
        let o1 = JSON.stringify({
            traceparent: n1
        }), s1 = JSON.stringify(r1);
        try {
            await this.start(), this.executingQueryPromise = this.engine?.query(s1, o1, i1?.id), this.lastQuery = s1;
            let a1 = this.parseEngineResponse(await this.executingQueryPromise);
            if (a1.errors) throw a1.errors.length === 1 ? this.buildQueryError(a1.errors[0]) : new K(JSON.stringify(a1.errors), {
                clientVersion: this.config.clientVersion
            });
            if (this.loggerRustPanic) throw this.loggerRustPanic;
            return {
                data: a1,
                elapsed: 0
            };
        } catch (a1) {
            if (a1 instanceof k) throw a1;
            if (a1.code === "GenericFailure" && a1.message?.startsWith("PANIC:")) throw new ue(this.getErrorMessageWithLink(a1.message), this.config.clientVersion);
            let l1 = this.parseRequestError(a1.message);
            throw typeof l1 == "string" ? a1 : new K(`${l1.message}
${l1.backtrace}`, {
                clientVersion: this.config.clientVersion
            });
        }
    }
    async requestBatch(r1, { transaction: n1, traceparent: i1 }) {
        Me("requestBatch");
        let o1 = ln(r1, n1);
        await this.start(), this.lastQuery = JSON.stringify(o1), this.executingQueryPromise = this.engine.query(this.lastQuery, JSON.stringify({
            traceparent: i1
        }), Fa(n1));
        let s1 = await this.executingQueryPromise, a1 = this.parseEngineResponse(s1);
        if (a1.errors) throw a1.errors.length === 1 ? this.buildQueryError(a1.errors[0]) : new K(JSON.stringify(a1.errors), {
            clientVersion: this.config.clientVersion
        });
        let { batchResult: l1, errors: u1 } = a1;
        if (Array.isArray(l1)) return l1.map((c1)=>c1.errors && c1.errors.length > 0 ? this.loggerRustPanic ?? this.buildQueryError(c1.errors[0]) : {
                data: c1,
                elapsed: 0
            });
        throw u1 && u1.length === 1 ? new Error(u1[0].error) : new Error(JSON.stringify(a1));
    }
    buildQueryError(r1) {
        return r1.user_facing_error.is_panic ? new ue(this.getErrorMessageWithLink(r1.user_facing_error.message), this.config.clientVersion) : zt(r1, this.config.clientVersion);
    }
    async metrics(r1) {
        await this.start();
        let n1 = await this.engine.metrics(JSON.stringify(r1));
        return r1.format === "prometheus" ? n1 : this.parseEngineResponse(n1);
    }
};
function Na(e1, t1) {
    let r1;
    try {
        r1 = un({
            inlineDatasources: t1.inlineDatasources,
            overrideDatasources: t1.overrideDatasources,
            env: {
                ...t1.env,
                ...process.env
            },
            clientVersion: t1.clientVersion
        });
    } catch  {}
    e1.noEngine !== !0 && r1?.startsWith("prisma://") && Lt("recommend--no-engine", "In production, we recommend using `prisma generate --no-engine` (See: `prisma generate --help`)");
    let n1 = Gn(t1.generator);
    if (r1?.startsWith("prisma://") || e1.noEngine) return new cr(t1);
    if (n1 === "library") return new pr(t1);
    throw "binary", new X("Invalid client engine type, please use `library` or `binary`", {
        clientVersion: t1.clientVersion
    });
}
var Ba = S($i());
function Va(e1, t1) {
    let r1 = ja(e1), n1 = rd(r1), i1 = id(n1);
    i1 ? dn(i1, t1) : t1.addErrorMessage(()=>"Unknown error");
}
function ja(e1) {
    return e1.errors.flatMap((t1)=>t1.kind === "Union" ? ja(t1) : [
            t1
        ]);
}
function rd(e1) {
    let t1 = new Map, r1 = [];
    for (let n1 of e1){
        if (n1.kind !== "InvalidArgumentType") {
            r1.push(n1);
            continue;
        }
        let i1 = `${n1.selectionPath.join(".")}:${n1.argumentPath.join(".")}`, o1 = t1.get(i1);
        o1 ? t1.set(i1, {
            ...n1,
            argument: {
                ...n1.argument,
                typeNames: nd(o1.argument.typeNames, n1.argument.typeNames)
            }
        }) : t1.set(i1, n1);
    }
    return r1.push(...t1.values()), r1;
}
function nd(e1, t1) {
    return [
        ...new Set(e1.concat(t1))
    ];
}
function id(e1) {
    return si(e1, (t1, r1)=>{
        let n1 = $a(t1), i1 = $a(r1);
        return n1 !== i1 ? n1 - i1 : qa(t1) - qa(r1);
    });
}
function $a(e1) {
    let t1 = 0;
    return Array.isArray(e1.selectionPath) && (t1 += e1.selectionPath.length), Array.isArray(e1.argumentPath) && (t1 += e1.argumentPath.length), t1;
}
function qa(e1) {
    switch(e1.kind){
        case "InvalidArgumentValue":
        case "ValueTooLarge":
            return 20;
        case "InvalidArgumentType":
            return 10;
        case "RequiredArgumentMissing":
            return -10;
        default:
            return 0;
    }
}
var Se = class {
    constructor(t1, r1){
        this.name = t1;
        this.value = r1;
        this.isRequired = !1;
    }
    makeRequired() {
        return this.isRequired = !0, this;
    }
    write(t1) {
        let { colors: { green: r1 } } = t1.context;
        t1.addMarginSymbol(r1(this.isRequired ? "+" : "?")), t1.write(r1(this.name)), this.isRequired || t1.write(r1("?")), t1.write(r1(": ")), typeof this.value == "string" ? t1.write(r1(this.value)) : t1.write(this.value);
    }
};
var mn = class {
    constructor(){
        this.fields = [];
    }
    addField(t1, r1) {
        return this.fields.push({
            write (n1) {
                let { green: i1, dim: o1 } = n1.context.colors;
                n1.write(i1(o1(`${t1}: ${r1}`))).addMarginSymbol(i1(o1("+")));
            }
        }), this;
    }
    write(t1) {
        let { colors: { green: r1 } } = t1.context;
        t1.writeLine(r1("{")).withIndent(()=>{
            t1.writeJoined(xt, this.fields).newLine();
        }).write(r1("}")).addMarginSymbol(r1("+"));
    }
};
function dn(e1, t1) {
    switch(e1.kind){
        case "IncludeAndSelect":
            od(e1, t1);
            break;
        case "IncludeOnScalar":
            sd(e1, t1);
            break;
        case "EmptySelection":
            ad(e1, t1);
            break;
        case "UnknownSelectionField":
            ld(e1, t1);
            break;
        case "UnknownArgument":
            ud(e1, t1);
            break;
        case "UnknownInputField":
            cd(e1, t1);
            break;
        case "RequiredArgumentMissing":
            pd(e1, t1);
            break;
        case "InvalidArgumentType":
            dd(e1, t1);
            break;
        case "InvalidArgumentValue":
            md(e1, t1);
            break;
        case "ValueTooLarge":
            fd(e1, t1);
            break;
        case "SomeFieldsMissing":
            gd(e1, t1);
            break;
        case "TooManyFieldsGiven":
            yd(e1, t1);
            break;
        case "Union":
            Va(e1, t1);
            break;
        default:
            throw new Error("not implemented: " + e1.kind);
    }
}
function od(e1, t1) {
    let r1 = t1.arguments.getDeepSubSelectionValue(e1.selectionPath);
    r1 && r1 instanceof Q && (r1.getField("include")?.markAsError(), r1.getField("select")?.markAsError()), t1.addErrorMessage((n1)=>`Please ${n1.bold("either")} use ${n1.green("`include`")} or ${n1.green("`select`")}, but ${n1.red("not both")} at the same time.`);
}
function sd(e1, t1) {
    let [r1, n1] = fn(e1.selectionPath), i1 = e1.outputType, o1 = t1.arguments.getDeepSelectionParent(r1)?.value;
    if (o1 && (o1.getField(n1)?.markAsError(), i1)) for (let s1 of i1.fields)s1.isRelation && o1.addSuggestion(new Se(s1.name, "true"));
    t1.addErrorMessage((s1)=>{
        let a1 = `Invalid scalar field ${s1.red(`\`${n1}\``)} for ${s1.bold("include")} statement`;
        return i1 ? a1 += ` on model ${s1.bold(i1.name)}. ${dr(s1)}` : a1 += ".", a1 += `
Note that ${s1.bold("include")} statements only accept relation fields.`, a1;
    });
}
function ad(e1, t1) {
    let r1 = e1.outputType, n1 = t1.arguments.getDeepSelectionParent(e1.selectionPath)?.value, i1 = n1?.isEmpty() ?? !1;
    n1 && (n1.removeAllFields(), Qa(n1, r1)), t1.addErrorMessage((o1)=>i1 ? `The ${o1.red("`select`")} statement for type ${o1.bold(r1.name)} must not be empty. ${dr(o1)}` : `The ${o1.red("`select`")} statement for type ${o1.bold(r1.name)} needs ${o1.bold("at least one truthy value")}.`);
}
function ld(e1, t1) {
    let [r1, n1] = fn(e1.selectionPath), i1 = t1.arguments.getDeepSelectionParent(r1);
    i1 && (i1.value.getField(n1)?.markAsError(), Qa(i1.value, e1.outputType)), t1.addErrorMessage((o1)=>{
        let s1 = [
            `Unknown field ${o1.red(`\`${n1}\``)}`
        ];
        return i1 && s1.push(`for ${o1.bold(i1.kind)} statement`), s1.push(`on model ${o1.bold(`\`${e1.outputType.name}\``)}.`), s1.push(dr(o1)), s1.join(" ");
    });
}
function ud(e1, t1) {
    let r1 = e1.argumentPath[0], n1 = t1.arguments.getDeepSubSelectionValue(e1.selectionPath);
    n1 instanceof Q && (n1.getField(r1)?.markAsError(), hd(n1, e1.arguments)), t1.addErrorMessage((i1)=>Ua(i1, r1, e1.arguments.map((o1)=>o1.name)));
}
function cd(e1, t1) {
    let [r1, n1] = fn(e1.argumentPath), i1 = t1.arguments.getDeepSubSelectionValue(e1.selectionPath);
    if (i1 instanceof Q) {
        i1.getDeepField(e1.argumentPath)?.markAsError();
        let o1 = i1.getDeepFieldValue(r1);
        o1 instanceof Q && Ja(o1, e1.inputType);
    }
    t1.addErrorMessage((o1)=>Ua(o1, n1, e1.inputType.fields.map((s1)=>s1.name)));
}
function Ua(e1, t1, r1) {
    let n1 = [
        `Unknown argument \`${e1.red(t1)}\`.`
    ], i1 = bd(t1, r1);
    return i1 && n1.push(`Did you mean \`${e1.green(i1)}\`?`), r1.length > 0 && n1.push(dr(e1)), n1.join(" ");
}
function pd(e1, t1) {
    let r1;
    t1.addErrorMessage((l1)=>r1?.value instanceof J && r1.value.text === "null" ? `Argument \`${l1.green(o1)}\` must not be ${l1.red("null")}.` : `Argument \`${l1.green(o1)}\` is missing.`);
    let n1 = t1.arguments.getDeepSubSelectionValue(e1.selectionPath);
    if (!(n1 instanceof Q)) return;
    let [i1, o1] = fn(e1.argumentPath), s1 = new mn, a1 = n1.getDeepFieldValue(i1);
    if (a1 instanceof Q) if (r1 = a1.getField(o1), r1 && a1.removeField(o1), e1.inputTypes.length === 1 && e1.inputTypes[0].kind === "object") {
        for (let l1 of e1.inputTypes[0].fields)s1.addField(l1.name, l1.typeNames.join(" | "));
        a1.addSuggestion(new Se(o1, s1).makeRequired());
    } else {
        let l1 = e1.inputTypes.map(Ka).join(" | ");
        a1.addSuggestion(new Se(o1, l1).makeRequired());
    }
}
function Ka(e1) {
    return e1.kind === "list" ? `${Ka(e1.elementType)}[]` : e1.name;
}
function dd(e1, t1) {
    let r1 = e1.argument.name, n1 = t1.arguments.getDeepSubSelectionValue(e1.selectionPath);
    n1 instanceof Q && n1.getDeepFieldValue(e1.argumentPath)?.markAsError(), t1.addErrorMessage((i1)=>{
        let o1 = gn("or", e1.argument.typeNames.map((s1)=>i1.green(s1)));
        return `Argument \`${i1.bold(r1)}\`: Invalid value provided. Expected ${o1}, provided ${i1.red(e1.inferredType)}.`;
    });
}
function md(e1, t1) {
    let r1 = e1.argument.name, n1 = t1.arguments.getDeepSubSelectionValue(e1.selectionPath);
    n1 instanceof Q && n1.getDeepFieldValue(e1.argumentPath)?.markAsError(), t1.addErrorMessage((i1)=>{
        let o1 = [
            `Invalid value for argument \`${i1.bold(r1)}\``
        ];
        if (e1.underlyingError && o1.push(`: ${e1.underlyingError}`), o1.push("."), e1.argument.typeNames.length > 0) {
            let s1 = gn("or", e1.argument.typeNames.map((a1)=>i1.green(a1)));
            o1.push(` Expected ${s1}.`);
        }
        return o1.join("");
    });
}
function fd(e1, t1) {
    let r1 = e1.argument.name, n1 = t1.arguments.getDeepSubSelectionValue(e1.selectionPath), i1;
    if (n1 instanceof Q) {
        let s1 = n1.getDeepField(e1.argumentPath)?.value;
        s1?.markAsError(), s1 instanceof J && (i1 = s1.text);
    }
    t1.addErrorMessage((o1)=>{
        let s1 = [
            "Unable to fit value"
        ];
        return i1 && s1.push(o1.red(i1)), s1.push(`into a 64-bit signed integer for field \`${o1.bold(r1)}\``), s1.join(" ");
    });
}
function gd(e1, t1) {
    let r1 = e1.argumentPath[e1.argumentPath.length - 1], n1 = t1.arguments.getDeepSubSelectionValue(e1.selectionPath);
    if (n1 instanceof Q) {
        let i1 = n1.getDeepFieldValue(e1.argumentPath);
        i1 instanceof Q && Ja(i1, e1.inputType);
    }
    t1.addErrorMessage((i1)=>{
        let o1 = [
            `Argument \`${i1.bold(r1)}\` of type ${i1.bold(e1.inputType.name)} needs`
        ];
        return e1.constraints.minFieldCount === 1 ? e1.constraints.requiredFields ? o1.push(`${i1.green("at least one of")} ${gn("or", e1.constraints.requiredFields.map((s1)=>`\`${i1.bold(s1)}\``))} arguments.`) : o1.push(`${i1.green("at least one")} argument.`) : o1.push(`${i1.green(`at least ${e1.constraints.minFieldCount}`)} arguments.`), o1.push(dr(i1)), o1.join(" ");
    });
}
function yd(e1, t1) {
    let r1 = e1.argumentPath[e1.argumentPath.length - 1], n1 = t1.arguments.getDeepSubSelectionValue(e1.selectionPath), i1 = [];
    if (n1 instanceof Q) {
        let o1 = n1.getDeepFieldValue(e1.argumentPath);
        o1 instanceof Q && (o1.markAsError(), i1 = Object.keys(o1.getFields()));
    }
    t1.addErrorMessage((o1)=>{
        let s1 = [
            `Argument \`${o1.bold(r1)}\` of type ${o1.bold(e1.inputType.name)} needs`
        ];
        return e1.constraints.minFieldCount === 1 && e1.constraints.maxFieldCount == 1 ? s1.push(`${o1.green("exactly one")} argument,`) : e1.constraints.maxFieldCount == 1 ? s1.push(`${o1.green("at most one")} argument,`) : s1.push(`${o1.green(`at most ${e1.constraints.maxFieldCount}`)} arguments,`), s1.push(`but you provided ${gn("and", i1.map((a1)=>o1.red(a1)))}. Please choose`), e1.constraints.maxFieldCount === 1 ? s1.push("one.") : s1.push(`${e1.constraints.maxFieldCount}.`), s1.join(" ");
    });
}
function Qa(e1, t1) {
    for (let r1 of t1.fields)e1.hasField(r1.name) || e1.addSuggestion(new Se(r1.name, "true"));
}
function hd(e1, t1) {
    for (let r1 of t1)e1.hasField(r1.name) || e1.addSuggestion(new Se(r1.name, r1.typeNames.join(" | ")));
}
function Ja(e1, t1) {
    if (t1.kind === "object") for (let r1 of t1.fields)e1.hasField(r1.name) || e1.addSuggestion(new Se(r1.name, r1.typeNames.join(" | ")));
}
function fn(e1) {
    let t1 = [
        ...e1
    ], r1 = t1.pop();
    if (!r1) throw new Error("unexpected empty path");
    return [
        t1,
        r1
    ];
}
function dr({ green: e1 }) {
    return `Available options are listed in ${e1("green")}.`;
}
function gn(e1, t1) {
    if (t1.length === 1) return t1[0];
    let r1 = [
        ...t1
    ], n1 = r1.pop();
    return `${r1.join(", ")} ${e1} ${n1}`;
}
var xd = 3;
function bd(e1, t1) {
    let r1 = 1 / 0, n1;
    for (let i1 of t1){
        let o1 = (0, Ba.default)(e1, i1);
        o1 > xd || o1 < r1 && (r1 = o1, n1 = i1);
    }
    return n1;
}
function yn({ args: e1, errors: t1, errorFormat: r1, callsite: n1, originalMethod: i1, clientVersion: o1 }) {
    let s1 = Yr(e1);
    for (let p1 of t1)dn(p1, s1);
    let a1 = r1 === "pretty" ? Rs : Wr, l1 = s1.renderAllMessages(a1), u1 = new dt(0, {
        colors: a1
    }).write(s1).toString(), c1 = wt({
        message: l1,
        callsite: n1,
        originalMethod: i1,
        showColors: r1 === "pretty",
        callArguments: u1
    });
    throw new X(c1, {
        clientVersion: o1
    });
}
var Ed = {
    findUnique: "findUnique",
    findUniqueOrThrow: "findUniqueOrThrow",
    findFirst: "findFirst",
    findFirstOrThrow: "findFirstOrThrow",
    findMany: "findMany",
    count: "aggregate",
    create: "createOne",
    createMany: "createMany",
    update: "updateOne",
    updateMany: "updateMany",
    upsert: "upsertOne",
    delete: "deleteOne",
    deleteMany: "deleteMany",
    executeRaw: "executeRaw",
    queryRaw: "queryRaw",
    aggregate: "aggregate",
    groupBy: "groupBy",
    runCommandRaw: "runCommandRaw",
    findRaw: "findRaw",
    aggregateRaw: "aggregateRaw"
};
function Ga({ modelName: e1, action: t1, args: r1, runtimeDataModel: n1, extensions: i1, callsite: o1, clientMethod: s1, errorFormat: a1, clientVersion: l1 }) {
    let u1 = new qi({
        runtimeDataModel: n1,
        modelName: e1,
        action: t1,
        rootArgs: r1,
        callsite: o1,
        extensions: i1,
        selectionPath: [],
        argumentPath: [],
        originalMethod: s1,
        errorFormat: a1,
        clientVersion: l1
    });
    return {
        modelName: e1,
        action: Ed[t1],
        query: Vi(r1, u1)
    };
}
function Vi({ select: e1, include: t1, ...r1 } = {}, n1) {
    return {
        arguments: Wa(r1, n1),
        selection: wd(e1, t1, n1)
    };
}
function wd(e1, t1, r1) {
    return e1 && t1 && r1.throwValidationError({
        kind: "IncludeAndSelect",
        selectionPath: r1.getSelectionPath()
    }), e1 ? Td(e1, r1) : Pd(r1, t1);
}
function Pd(e1, t1) {
    let r1 = {};
    return e1.model && !e1.isRawAction() && (r1.$composites = !0, r1.$scalars = !0), t1 && vd(r1, t1, e1), r1;
}
function vd(e1, t1, r1) {
    for (let [n1, i1] of Object.entries(t1)){
        let o1 = r1.findField(n1);
        o1 && o1?.kind !== "object" && r1.throwValidationError({
            kind: "IncludeOnScalar",
            selectionPath: r1.getSelectionPath().concat(n1),
            outputType: r1.getOutputTypeDescription()
        }), i1 === !0 ? e1[n1] = !0 : typeof i1 == "object" && (e1[n1] = Vi(i1, r1.nestSelection(n1)));
    }
}
function Td(e1, t1) {
    let r1 = {}, n1 = t1.getComputedFields(), i1 = la(e1, n1);
    for (let [o1, s1] of Object.entries(i1)){
        let a1 = t1.findField(o1);
        n1?.[o1] && !a1 || (s1 === !0 ? r1[o1] = !0 : typeof s1 == "object" && (r1[o1] = Vi(s1, t1.nestSelection(o1))));
    }
    return r1;
}
function Ha(e1, t1) {
    if (e1 === null) return null;
    if (typeof e1 == "string" || typeof e1 == "number" || typeof e1 == "boolean") return e1;
    if (typeof e1 == "bigint") return {
        $type: "BigInt",
        value: String(e1)
    };
    if (mt(e1)) {
        if (qr(e1)) return {
            $type: "DateTime",
            value: e1.toISOString()
        };
        t1.throwValidationError({
            kind: "InvalidArgumentValue",
            selectionPath: t1.getSelectionPath(),
            argumentPath: t1.getArgumentPath(),
            argument: {
                name: t1.getArgumentName(),
                typeNames: [
                    "Date"
                ]
            },
            underlyingError: "Provided Date object is invalid"
        });
    }
    if (ht(e1)) return {
        $type: "FieldRef",
        value: {
            _ref: e1.name,
            _container: e1.modelName
        }
    };
    if (Array.isArray(e1)) return Cd(e1, t1);
    if (ArrayBuffer.isView(e1)) return {
        $type: "Bytes",
        value: Buffer.from(e1).toString("base64")
    };
    if (Ad(e1)) return e1.values;
    if (yt(e1)) return {
        $type: "Decimal",
        value: e1.toFixed()
    };
    if (e1 instanceof Ae) {
        if (e1 !== $r.instances[e1._getName()]) throw new Error("Invalid ObjectEnumValue");
        return {
            $type: "Enum",
            value: e1._getName()
        };
    }
    if (Rd(e1)) return e1.toJSON();
    if (typeof e1 == "object") return Wa(e1, t1);
    t1.throwValidationError({
        kind: "InvalidArgumentValue",
        selectionPath: t1.getSelectionPath(),
        argumentPath: t1.getArgumentPath(),
        argument: {
            name: t1.getArgumentName(),
            typeNames: []
        },
        underlyingError: `We could not serialize ${Object.prototype.toString.call(e1)} value. Serialize the object to JSON or implement a ".toJSON()" method on it`
    });
}
function Wa(e1, t1) {
    if (e1.$type) return {
        $type: "Json",
        value: JSON.stringify(e1)
    };
    let r1 = {};
    for(let n1 in e1){
        let i1 = e1[n1];
        i1 !== void 0 && (r1[n1] = Ha(i1, t1.nestArgument(n1)));
    }
    return r1;
}
function Cd(e1, t1) {
    let r1 = [];
    for(let n1 = 0; n1 < e1.length; n1++){
        let i1 = t1.nestArgument(String(n1)), o1 = e1[n1];
        o1 === void 0 && t1.throwValidationError({
            kind: "InvalidArgumentValue",
            selectionPath: i1.getSelectionPath(),
            argumentPath: i1.getArgumentPath(),
            argument: {
                name: `${t1.getArgumentName()}[${n1}]`,
                typeNames: []
            },
            underlyingError: "Can not use `undefined` value within array. Use `null` or filter out `undefined` values"
        }), r1.push(Ha(o1, i1));
    }
    return r1;
}
function Ad(e1) {
    return typeof e1 == "object" && e1 !== null && e1.__prismaRawParameters__ === !0;
}
function Rd(e1) {
    return typeof e1 == "object" && e1 !== null && typeof e1.toJSON == "function";
}
var qi = class e {
    constructor(t1){
        this.params = t1;
        this.params.modelName && (this.model = this.params.runtimeDataModel.models[this.params.modelName]);
    }
    throwValidationError(t1) {
        yn({
            errors: [
                t1
            ],
            originalMethod: this.params.originalMethod,
            args: this.params.rootArgs ?? {},
            callsite: this.params.callsite,
            errorFormat: this.params.errorFormat,
            clientVersion: this.params.clientVersion
        });
    }
    getSelectionPath() {
        return this.params.selectionPath;
    }
    getArgumentPath() {
        return this.params.argumentPath;
    }
    getArgumentName() {
        return this.params.argumentPath[this.params.argumentPath.length - 1];
    }
    getOutputTypeDescription() {
        if (!(!this.params.modelName || !this.model)) return {
            name: this.params.modelName,
            fields: this.model.fields.map((t1)=>({
                    name: t1.name,
                    typeName: "boolean",
                    isRelation: t1.kind === "object"
                }))
        };
    }
    isRawAction() {
        return [
            "executeRaw",
            "queryRaw",
            "runCommandRaw",
            "findRaw",
            "aggregateRaw"
        ].includes(this.params.action);
    }
    getComputedFields() {
        if (this.params.modelName) return this.params.extensions.getAllComputedFields(this.params.modelName);
    }
    findField(t1) {
        return this.model?.fields.find((r1)=>r1.name === t1);
    }
    nestSelection(t1) {
        let r1 = this.findField(t1), n1 = r1?.kind === "object" ? r1.type : void 0;
        return new e({
            ...this.params,
            modelName: n1,
            selectionPath: this.params.selectionPath.concat(t1)
        });
    }
    nestArgument(t1) {
        return new e({
            ...this.params,
            argumentPath: this.params.argumentPath.concat(t1)
        });
    }
};
var za = (e1)=>({
        command: e1
    });
var Ya = (e1)=>e1.strings.reduce((t1, r1, n1)=>`${t1}@P${n1}${r1}`);
function mr(e1) {
    try {
        return Za(e1, "fast");
    } catch  {
        return Za(e1, "slow");
    }
}
function Za(e1, t1) {
    return JSON.stringify(e1.map((r1)=>Md(r1, t1)));
}
function Md(e1, t1) {
    return typeof e1 == "bigint" ? {
        prisma__type: "bigint",
        prisma__value: e1.toString()
    } : mt(e1) ? {
        prisma__type: "date",
        prisma__value: e1.toJSON()
    } : we.isDecimal(e1) ? {
        prisma__type: "decimal",
        prisma__value: e1.toJSON()
    } : Buffer.isBuffer(e1) ? {
        prisma__type: "bytes",
        prisma__value: e1.toString("base64")
    } : Sd(e1) || ArrayBuffer.isView(e1) ? {
        prisma__type: "bytes",
        prisma__value: Buffer.from(e1).toString("base64")
    } : typeof e1 == "object" && t1 === "slow" ? el(e1) : e1;
}
function Sd(e1) {
    return e1 instanceof ArrayBuffer || e1 instanceof SharedArrayBuffer ? !0 : typeof e1 == "object" && e1 !== null ? e1[Symbol.toStringTag] === "ArrayBuffer" || e1[Symbol.toStringTag] === "SharedArrayBuffer" : !1;
}
function el(e1) {
    if (typeof e1 != "object" || e1 === null) return e1;
    if (typeof e1.toJSON == "function") return e1.toJSON();
    if (Array.isArray(e1)) return e1.map(Xa);
    let t1 = {};
    for (let r1 of Object.keys(e1))t1[r1] = Xa(e1[r1]);
    return t1;
}
function Xa(e1) {
    return typeof e1 == "bigint" ? e1.toString() : el(e1);
}
var Id = /^(\s*alter\s)/i, tl = D("prisma:client");
function ji(e1, t1, r1, n1) {
    if (!(e1 !== "postgresql" && e1 !== "cockroachdb") && r1.length > 0 && Id.exec(t1)) throw new Error(`Running ALTER using ${n1} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
}
var Bi = (e1, t1)=>(r1)=>{
        let n1 = "", i1;
        if (Array.isArray(r1)) {
            let [o1, ...s1] = r1;
            n1 = o1, i1 = {
                values: mr(s1 || []),
                __prismaRawParameters__: !0
            };
        } else switch(e1){
            case "sqlite":
            case "mysql":
                {
                    n1 = r1.sql, i1 = {
                        values: mr(r1.values),
                        __prismaRawParameters__: !0
                    };
                    break;
                }
            case "cockroachdb":
            case "postgresql":
                {
                    n1 = r1.text, i1 = {
                        values: mr(r1.values),
                        __prismaRawParameters__: !0
                    };
                    break;
                }
            case "sqlserver":
                {
                    n1 = Ya(r1), i1 = {
                        values: mr(r1.values),
                        __prismaRawParameters__: !0
                    };
                    break;
                }
            default:
                throw new Error(`The ${e1} provider does not support ${t1}`);
        }
        return i1?.values ? tl(`prisma.${t1}(${n1}, ${i1.values})`) : tl(`prisma.${t1}(${n1})`), {
            query: n1,
            parameters: i1
        };
    }, rl = {
    requestArgsToMiddlewareArgs (e1) {
        return [
            e1.strings,
            ...e1.values
        ];
    },
    middlewareArgsToRequestArgs (e1) {
        let [t1, ...r1] = e1;
        return new oe(t1, r1);
    }
}, nl = {
    requestArgsToMiddlewareArgs (e1) {
        return [
            e1
        ];
    },
    middlewareArgsToRequestArgs (e1) {
        return e1[0];
    }
};
function Ui(e1) {
    return function(r1) {
        let n1, i1 = (o1 = e1)=>{
            try {
                return o1 === void 0 || o1?.kind === "itx" ? n1 ?? (n1 = il(r1(o1))) : il(r1(o1));
            } catch (s1) {
                return Promise.reject(s1);
            }
        };
        return {
            then (o1, s1) {
                return i1().then(o1, s1);
            },
            catch (o1) {
                return i1().catch(o1);
            },
            finally (o1) {
                return i1().finally(o1);
            },
            requestTransaction (o1) {
                let s1 = i1(o1);
                return s1.requestTransaction ? s1.requestTransaction(o1) : s1;
            },
            [Symbol.toStringTag]: "PrismaPromise"
        };
    };
}
function il(e1) {
    return typeof e1.then == "function" ? e1 : Promise.resolve(e1);
}
var ol = {
    isEnabled () {
        return !1;
    },
    getTraceParent () {
        return "00-10-10-00";
    },
    async createEngineSpan () {},
    getActiveContext () {},
    runInChildSpan (e1, t1) {
        return t1();
    }
}, Ki = class {
    isEnabled() {
        return this.getGlobalTracingHelper().isEnabled();
    }
    getTraceParent(t1) {
        return this.getGlobalTracingHelper().getTraceParent(t1);
    }
    createEngineSpan(t1) {
        return this.getGlobalTracingHelper().createEngineSpan(t1);
    }
    getActiveContext() {
        return this.getGlobalTracingHelper().getActiveContext();
    }
    runInChildSpan(t1, r1) {
        return this.getGlobalTracingHelper().runInChildSpan(t1, r1);
    }
    getGlobalTracingHelper() {
        return globalThis.PRISMA_INSTRUMENTATION?.helper ?? ol;
    }
};
function sl(e1) {
    return e1.includes("tracing") ? new Ki : ol;
}
function al(e1, t1 = ()=>{}) {
    let r1, n1 = new Promise((i1)=>r1 = i1);
    return {
        then (i1) {
            return --e1 === 0 && r1(t1()), i1?.(n1);
        }
    };
}
function ll(e1) {
    return typeof e1 == "string" ? e1 : e1.reduce((t1, r1)=>{
        let n1 = typeof r1 == "string" ? r1 : r1.level;
        return n1 === "query" ? t1 : t1 && (r1 === "info" || t1 === "info") ? "info" : n1;
    }, void 0);
}
var Fd = [
    "$connect",
    "$disconnect",
    "$on",
    "$transaction",
    "$use",
    "$extends"
], ul = Fd;
var hn = class {
    constructor(){
        this._middlewares = [];
    }
    use(t1) {
        this._middlewares.push(t1);
    }
    get(t1) {
        return this._middlewares[t1];
    }
    has(t1) {
        return !!this._middlewares[t1];
    }
    length() {
        return this._middlewares.length;
    }
};
var pl = S(ni());
function xn(e1) {
    return typeof e1.batchRequestIdx == "number";
}
function bn(e1) {
    return e1 === null ? e1 : Array.isArray(e1) ? e1.map(bn) : typeof e1 == "object" ? kd(e1) ? Od(e1) : ct(e1, bn) : e1;
}
function kd(e1) {
    return e1 !== null && typeof e1 == "object" && typeof e1.$type == "string";
}
function Od({ $type: e1, value: t1 }) {
    switch(e1){
        case "BigInt":
            return BigInt(t1);
        case "Bytes":
            return Buffer.from(t1, "base64");
        case "DateTime":
            return new Date(t1);
        case "Decimal":
            return new we(t1);
        case "Json":
            return JSON.parse(t1);
        default:
            Ge(t1, "Unknown tagged value");
    }
}
function cl(e1) {
    if (e1.action !== "findUnique" && e1.action !== "findUniqueOrThrow") return;
    let t1 = [];
    return e1.modelName && t1.push(e1.modelName), e1.query.arguments && t1.push(Qi(e1.query.arguments)), t1.push(Qi(e1.query.selection)), t1.join("");
}
function Qi(e1) {
    return `(${Object.keys(e1).sort().map((r1)=>{
        let n1 = e1[r1];
        return typeof n1 == "object" && n1 !== null ? `(${r1} ${Qi(n1)})` : r1;
    }).join(" ")})`;
}
var Dd = {
    aggregate: !1,
    aggregateRaw: !1,
    createMany: !0,
    createOne: !0,
    deleteMany: !0,
    deleteOne: !0,
    executeRaw: !0,
    findFirst: !1,
    findFirstOrThrow: !1,
    findMany: !1,
    findRaw: !1,
    findUnique: !1,
    findUniqueOrThrow: !1,
    groupBy: !1,
    queryRaw: !1,
    runCommandRaw: !0,
    updateMany: !0,
    updateOne: !0,
    upsertOne: !0
};
function Ji(e1) {
    return Dd[e1];
}
var En = class {
    constructor(t1){
        this.options = t1;
        this.tickActive = !1;
        this.batches = {};
    }
    request(t1) {
        let r1 = this.options.batchBy(t1);
        return r1 ? (this.batches[r1] || (this.batches[r1] = [], this.tickActive || (this.tickActive = !0, process.nextTick(()=>{
            this.dispatchBatches(), this.tickActive = !1;
        }))), new Promise((n1, i1)=>{
            this.batches[r1].push({
                request: t1,
                resolve: n1,
                reject: i1
            });
        })) : this.options.singleLoader(t1);
    }
    dispatchBatches() {
        for(let t1 in this.batches){
            let r1 = this.batches[t1];
            delete this.batches[t1], r1.length === 1 ? this.options.singleLoader(r1[0].request).then((n1)=>{
                n1 instanceof Error ? r1[0].reject(n1) : r1[0].resolve(n1);
            }).catch((n1)=>{
                r1[0].reject(n1);
            }) : (r1.sort((n1, i1)=>this.options.batchOrder(n1.request, i1.request)), this.options.batchLoader(r1.map((n1)=>n1.request)).then((n1)=>{
                if (n1 instanceof Error) for(let i1 = 0; i1 < r1.length; i1++)r1[i1].reject(n1);
                else for(let i1 = 0; i1 < r1.length; i1++){
                    let o1 = n1[i1];
                    o1 instanceof Error ? r1[i1].reject(o1) : r1[i1].resolve(o1);
                }
            }).catch((n1)=>{
                for(let i1 = 0; i1 < r1.length; i1++)r1[i1].reject(n1);
            }));
        }
    }
    get [Symbol.toStringTag]() {
        return "DataLoader";
    }
};
var _d = D("prisma:client:request_handler"), wn = class {
    constructor(t1, r1){
        this.logEmitter = r1, this.client = t1, this.dataloader = new En({
            batchLoader: na(async ({ requests: n1, customDataProxyFetch: i1 })=>{
                let { transaction: o1, otelParentCtx: s1 } = n1[0], a1 = n1.map((p1)=>p1.protocolQuery), l1 = this.client._tracingHelper.getTraceParent(s1), u1 = n1.some((p1)=>Ji(p1.protocolQuery.action));
                return (await this.client._engine.requestBatch(a1, {
                    traceparent: l1,
                    transaction: Nd(o1),
                    containsWrite: u1,
                    customDataProxyFetch: i1
                })).map((p1, d1)=>{
                    if (p1 instanceof Error) return p1;
                    try {
                        return this.mapQueryEngineResult(n1[d1], p1);
                    } catch (f1) {
                        return f1;
                    }
                });
            }),
            singleLoader: async (n1)=>{
                let i1 = n1.transaction?.kind === "itx" ? dl(n1.transaction) : void 0, o1 = await this.client._engine.request(n1.protocolQuery, {
                    traceparent: this.client._tracingHelper.getTraceParent(),
                    interactiveTransaction: i1,
                    isWrite: Ji(n1.protocolQuery.action),
                    customDataProxyFetch: n1.customDataProxyFetch
                });
                return this.mapQueryEngineResult(n1, o1);
            },
            batchBy: (n1)=>n1.transaction?.id ? `transaction-${n1.transaction.id}` : cl(n1.protocolQuery),
            batchOrder (n1, i1) {
                return n1.transaction?.kind === "batch" && i1.transaction?.kind === "batch" ? n1.transaction.index - i1.transaction.index : 0;
            }
        });
    }
    async request(t1) {
        try {
            return await this.dataloader.request(t1);
        } catch (r1) {
            let { clientMethod: n1, callsite: i1, transaction: o1, args: s1 } = t1;
            this.handleAndLogRequestError({
                error: r1,
                clientMethod: n1,
                callsite: i1,
                transaction: o1,
                args: s1
            });
        }
    }
    mapQueryEngineResult({ dataPath: t1, unpacker: r1 }, n1) {
        let i1 = n1?.data, o1 = n1?.elapsed, s1 = this.unpack(i1, t1, r1);
        return process.env.PRISMA_CLIENT_GET_TIME ? {
            data: s1,
            elapsed: o1
        } : s1;
    }
    handleAndLogRequestError(t1) {
        try {
            this.handleRequestError(t1);
        } catch (r1) {
            throw this.logEmitter && this.logEmitter.emit("error", {
                message: r1.message,
                target: t1.clientMethod,
                timestamp: new Date
            }), r1;
        }
    }
    handleRequestError({ error: t1, clientMethod: r1, callsite: n1, transaction: i1, args: o1 }) {
        if (_d(t1), Ld(t1, i1) || t1 instanceof Ce) throw t1;
        if (t1 instanceof U && $d(t1)) {
            let a1 = ml(t1.meta);
            yn({
                args: o1,
                errors: [
                    a1
                ],
                callsite: n1,
                errorFormat: this.client._errorFormat,
                originalMethod: r1,
                clientVersion: this.client._clientVersion
            });
        }
        let s1 = t1.message;
        throw n1 && (s1 = wt({
            callsite: n1,
            originalMethod: r1,
            isPanic: t1.isPanic,
            showColors: this.client._errorFormat === "pretty",
            message: s1
        })), s1 = this.sanitizeMessage(s1), t1.code ? new U(s1, {
            code: t1.code,
            clientVersion: this.client._clientVersion,
            meta: t1.meta,
            batchRequestIdx: t1.batchRequestIdx
        }) : t1.isPanic ? new ue(s1, this.client._clientVersion) : t1 instanceof K ? new K(s1, {
            clientVersion: this.client._clientVersion,
            batchRequestIdx: t1.batchRequestIdx
        }) : t1 instanceof k ? new k(s1, this.client._clientVersion) : t1 instanceof ue ? new ue(s1, this.client._clientVersion) : (t1.clientVersion = this.client._clientVersion, t1);
    }
    sanitizeMessage(t1) {
        return this.client._errorFormat && this.client._errorFormat !== "pretty" ? (0, pl.default)(t1) : t1;
    }
    unpack(t1, r1, n1) {
        if (!t1 || (t1.data && (t1 = t1.data), !t1)) return t1;
        let i1 = Object.values(t1)[0], o1 = r1.filter((a1)=>a1 !== "select" && a1 !== "include"), s1 = bn(wi(i1, o1));
        return n1 ? n1(s1) : s1;
    }
    get [Symbol.toStringTag]() {
        return "RequestHandler";
    }
};
function Nd(e1) {
    if (e1) {
        if (e1.kind === "batch") return {
            kind: "batch",
            options: {
                isolationLevel: e1.isolationLevel
            }
        };
        if (e1.kind === "itx") return {
            kind: "itx",
            options: dl(e1)
        };
        Ge(e1, "Unknown transaction kind");
    }
}
function dl(e1) {
    return {
        id: e1.id,
        payload: e1.payload
    };
}
function Ld(e1, t1) {
    return xn(e1) && t1?.kind === "batch" && e1.batchRequestIdx !== t1.index;
}
function $d(e1) {
    return e1.code === "P2009" || e1.code === "P2012";
}
function ml(e1) {
    if (e1.kind === "Union") return {
        kind: "Union",
        errors: e1.errors.map(ml)
    };
    if (Array.isArray(e1.selectionPath)) {
        let [, ...t1] = e1.selectionPath;
        return {
            ...e1,
            selectionPath: t1
        };
    }
    return e1;
}
var fl = "5.3.1";
var gl = fl;
function yl(e1) {
    return e1.map((t1)=>{
        let r1 = {};
        for (let n1 of Object.keys(t1))r1[n1] = hl(t1[n1]);
        return r1;
    });
}
function hl({ prisma__type: e1, prisma__value: t1 }) {
    switch(e1){
        case "bigint":
            return BigInt(t1);
        case "bytes":
            return Buffer.from(t1, "base64");
        case "decimal":
            return new we(t1);
        case "datetime":
        case "date":
            return new Date(t1);
        case "time":
            return new Date(`1970-01-01T${t1}Z`);
        case "array":
            return t1.map(hl);
        default:
            return t1;
    }
}
var wl = S($i());
var V = class extends Error {
    constructor(t1){
        super(t1 + `
Read more at https://pris.ly/d/client-constructor`), this.name = "PrismaClientConstructorValidationError";
    }
    get [Symbol.toStringTag]() {
        return "PrismaClientConstructorValidationError";
    }
};
E(V, "PrismaClientConstructorValidationError");
var xl = [
    "datasources",
    "datasourceUrl",
    "errorFormat",
    "log",
    "__internal"
], bl = [
    "pretty",
    "colorless",
    "minimal"
], El = [
    "info",
    "query",
    "warn",
    "error"
], Vd = {
    datasources: (e1, t1)=>{
        if (e1) {
            if (typeof e1 != "object" || Array.isArray(e1)) throw new V(`Invalid value ${JSON.stringify(e1)} for "datasources" provided to PrismaClient constructor`);
            for (let [r1, n1] of Object.entries(e1)){
                if (!t1.includes(r1)) {
                    let i1 = At(r1, t1) || ` Available datasources: ${t1.join(", ")}`;
                    throw new V(`Unknown datasource ${r1} provided to PrismaClient constructor.${i1}`);
                }
                if (typeof n1 != "object" || Array.isArray(n1)) throw new V(`Invalid value ${JSON.stringify(e1)} for datasource "${r1}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
                if (n1 && typeof n1 == "object") for (let [i1, o1] of Object.entries(n1)){
                    if (i1 !== "url") throw new V(`Invalid value ${JSON.stringify(e1)} for datasource "${r1}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
                    if (typeof o1 != "string") throw new V(`Invalid value ${JSON.stringify(o1)} for datasource "${r1}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
                }
            }
        }
    },
    datasourceUrl: (e1)=>{
        if (typeof e1 < "u" && typeof e1 != "string") throw new V(`Invalid value ${JSON.stringify(e1)} for "datasourceUrl" provided to PrismaClient constructor.
Expected string or undefined.`);
    },
    errorFormat: (e1)=>{
        if (e1) {
            if (typeof e1 != "string") throw new V(`Invalid value ${JSON.stringify(e1)} for "errorFormat" provided to PrismaClient constructor.`);
            if (!bl.includes(e1)) {
                let t1 = At(e1, bl);
                throw new V(`Invalid errorFormat ${e1} provided to PrismaClient constructor.${t1}`);
            }
        }
    },
    log: (e1)=>{
        if (!e1) return;
        if (!Array.isArray(e1)) throw new V(`Invalid value ${JSON.stringify(e1)} for "log" provided to PrismaClient constructor.`);
        function t1(r1) {
            if (typeof r1 == "string" && !El.includes(r1)) {
                let n1 = At(r1, El);
                throw new V(`Invalid log level "${r1}" provided to PrismaClient constructor.${n1}`);
            }
        }
        for (let r1 of e1){
            t1(r1);
            let n1 = {
                level: t1,
                emit: (i1)=>{
                    let o1 = [
                        "stdout",
                        "event"
                    ];
                    if (!o1.includes(i1)) {
                        let s1 = At(i1, o1);
                        throw new V(`Invalid value ${JSON.stringify(i1)} for "emit" in logLevel provided to PrismaClient constructor.${s1}`);
                    }
                }
            };
            if (r1 && typeof r1 == "object") for (let [i1, o1] of Object.entries(r1))if (n1[i1]) n1[i1](o1);
            else throw new V(`Invalid property ${i1} for "log" provided to PrismaClient constructor`);
        }
    },
    __internal: (e1)=>{
        if (!e1) return;
        let t1 = [
            "debug",
            "hooks",
            "engine",
            "measurePerformance"
        ];
        if (typeof e1 != "object") throw new V(`Invalid value ${JSON.stringify(e1)} for "__internal" to PrismaClient constructor`);
        for (let [r1] of Object.entries(e1))if (!t1.includes(r1)) {
            let n1 = At(r1, t1);
            throw new V(`Invalid property ${JSON.stringify(r1)} for "__internal" provided to PrismaClient constructor.${n1}`);
        }
    }
};
function Pl(e1, t1) {
    for (let [r1, n1] of Object.entries(e1)){
        if (!xl.includes(r1)) {
            let i1 = At(r1, xl);
            throw new V(`Unknown property ${r1} provided to PrismaClient constructor.${i1}`);
        }
        Vd[r1](n1, t1);
    }
    if (e1.datasourceUrl && e1.datasources) throw new V('Can not use "datasourceUrl" and "datasources" options at the same time. Pick one of them');
}
function At(e1, t1) {
    if (t1.length === 0 || typeof e1 != "string") return "";
    let r1 = jd(e1, t1);
    return r1 ? ` Did you mean "${r1}"?` : "";
}
function jd(e1, t1) {
    if (t1.length === 0) return null;
    let r1 = t1.map((i1)=>({
            value: i1,
            distance: (0, wl.default)(e1, i1)
        }));
    r1.sort((i1, o1)=>i1.distance < o1.distance ? -1 : 1);
    let n1 = r1[0];
    return n1.distance < 3 ? n1.value : null;
}
function vl(e1) {
    return e1.length === 0 ? Promise.resolve([]) : new Promise((t1, r1)=>{
        let n1 = new Array(e1.length), i1 = null, o1 = !1, s1 = 0, a1 = ()=>{
            o1 || (s1++, s1 === e1.length && (o1 = !0, i1 ? r1(i1) : t1(n1)));
        }, l1 = (u1)=>{
            o1 || (o1 = !0, r1(u1));
        };
        for(let u1 = 0; u1 < e1.length; u1++)e1[u1].then((c1)=>{
            n1[u1] = c1, a1();
        }, (c1)=>{
            if (!xn(c1)) {
                l1(c1);
                return;
            }
            c1.batchRequestIdx === u1 ? l1(c1) : (i1 || (i1 = c1), a1());
        });
    });
}
var Be = D("prisma:client");
typeof globalThis == "object" && (globalThis.NODE_CLIENT = !0);
var Bd = {
    requestArgsToMiddlewareArgs: (e1)=>e1,
    middlewareArgsToRequestArgs: (e1)=>e1
}, Ud = Symbol.for("prisma.client.transaction.id"), Kd = {
    id: 0,
    nextId () {
        return ++this.id;
    }
};
function Ml(e1) {
    class t1 {
        constructor(n1){
            this._middlewares = new hn;
            this._createPrismaPromise = Ui();
            this.$extends = Ws;
            pa(e1), n1 && Pl(n1, e1.datasourceNames);
            let i1 = new Al.EventEmitter().on("error", ()=>{});
            this._extensions = on.empty(), this._previewFeatures = e1.generator?.previewFeatures ?? [], this._clientVersion = e1.clientVersion ?? gl, this._activeProvider = e1.activeProvider, this._tracingHelper = sl(this._previewFeatures);
            let o1 = {
                rootEnvPath: e1.relativeEnvPaths.rootEnvPath && fr.default.resolve(e1.dirname, e1.relativeEnvPaths.rootEnvPath),
                schemaEnvPath: e1.relativeEnvPaths.schemaEnvPath && fr.default.resolve(e1.dirname, e1.relativeEnvPaths.schemaEnvPath)
            }, s1 = Ot(o1, {
                conflictCheck: "none"
            }) || e1.injectableEdgeEnv?.();
            try {
                let a1 = n1 ?? {}, l1 = a1.__internal ?? {}, u1 = l1.debug === !0;
                u1 && D.enable("prisma:client");
                let c1 = fr.default.resolve(e1.dirname, e1.relativePath);
                Rl.default.existsSync(c1) || (c1 = e1.dirname), Be("dirname", e1.dirname), Be("relativePath", e1.relativePath), Be("cwd", c1);
                let p1 = l1.engine || {};
                if (a1.errorFormat ? this._errorFormat = a1.errorFormat :  true ? this._errorFormat = "minimal" : 0, this._runtimeDataModel = e1.runtimeDataModel, this._engineConfig = {
                    cwd: c1,
                    dirname: e1.dirname,
                    enableDebugLogs: u1,
                    allowTriggerPanic: p1.allowTriggerPanic,
                    datamodelPath: fr.default.join(e1.dirname, e1.filename ?? "schema.prisma"),
                    prismaPath: p1.binaryPath ?? void 0,
                    engineEndpoint: p1.endpoint,
                    generator: e1.generator,
                    showColors: this._errorFormat === "pretty",
                    logLevel: a1.log && ll(a1.log),
                    logQueries: a1.log && !!(typeof a1.log == "string" ? a1.log === "query" : a1.log.find((d1)=>typeof d1 == "string" ? d1 === "query" : d1.level === "query")),
                    env: s1?.parsed ?? {},
                    flags: [],
                    clientVersion: e1.clientVersion,
                    engineVersion: e1.engineVersion,
                    previewFeatures: this._previewFeatures,
                    activeProvider: e1.activeProvider,
                    inlineSchema: e1.inlineSchema,
                    overrideDatasources: da(a1, e1.datasourceNames),
                    inlineDatasources: e1.inlineDatasources,
                    inlineSchemaHash: e1.inlineSchemaHash,
                    tracingHelper: this._tracingHelper,
                    logEmitter: i1,
                    isBundled: e1.isBundled
                }, Be("clientVersion", e1.clientVersion), this._engine = Na(e1, this._engineConfig), this._requestHandler = new wn(this, i1), a1.log) for (let d1 of a1.log){
                    let f1 = typeof d1 == "string" ? d1 : d1.emit === "stdout" ? d1.level : null;
                    f1 && this.$on(f1, (y1)=>{
                        Nt.log(`${Nt.tags[f1] ?? ""}`, y1.message || y1.query);
                    });
                }
                this._metrics = new pt(this._engine);
            } catch (a1) {
                throw a1.clientVersion = this._clientVersion, a1;
            }
            return this._appliedParent = Ht(this);
        }
        get [Symbol.toStringTag]() {
            return "PrismaClient";
        }
        $use(n1) {
            this._middlewares.use(n1);
        }
        $on(n1, i1) {
            n1 === "beforeExit" ? this._engine.on("beforeExit", i1) : this._engine.on(n1, (o1)=>{
                let s1 = o1.fields;
                return i1(n1 === "query" ? {
                    timestamp: o1.timestamp,
                    query: s1?.query ?? o1.query,
                    params: s1?.params ?? o1.params,
                    duration: s1?.duration_ms ?? o1.duration,
                    target: o1.target
                } : {
                    timestamp: o1.timestamp,
                    message: s1?.message ?? o1.message,
                    target: o1.target
                });
            });
        }
        $connect() {
            try {
                return this._engine.start();
            } catch (n1) {
                throw n1.clientVersion = this._clientVersion, n1;
            }
        }
        async $disconnect() {
            try {
                await this._engine.stop();
            } catch (n1) {
                throw n1.clientVersion = this._clientVersion, n1;
            } finally{
                fo();
            }
        }
        $executeRawInternal(n1, i1, o1, s1) {
            return this._request({
                action: "executeRaw",
                args: o1,
                transaction: n1,
                clientMethod: i1,
                argsMapper: Bi(this._activeProvider, i1),
                callsite: qe(this._errorFormat),
                dataPath: [],
                middlewareArgsMapper: s1
            });
        }
        $executeRaw(n1, ...i1) {
            return this._createPrismaPromise((o1)=>{
                if (n1.raw !== void 0 || n1.sql !== void 0) {
                    let [s1, a1] = Tl(n1, i1);
                    return ji(this._activeProvider, s1.text, s1.values, Array.isArray(n1) ? "prisma.$executeRaw`<SQL>`" : "prisma.$executeRaw(sql`<SQL>`)"), this.$executeRawInternal(o1, "$executeRaw", s1, a1);
                }
                throw new X("`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n", {
                    clientVersion: this._clientVersion
                });
            });
        }
        $executeRawUnsafe(n1, ...i1) {
            return this._createPrismaPromise((o1)=>(ji(this._activeProvider, n1, i1, "prisma.$executeRawUnsafe(<SQL>, [...values])"), this.$executeRawInternal(o1, "$executeRawUnsafe", [
                    n1,
                    ...i1
                ])));
        }
        $runCommandRaw(n1) {
            if (e1.activeProvider !== "mongodb") throw new X(`The ${e1.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`, {
                clientVersion: this._clientVersion
            });
            return this._createPrismaPromise((i1)=>this._request({
                    args: n1,
                    clientMethod: "$runCommandRaw",
                    dataPath: [],
                    action: "runCommandRaw",
                    argsMapper: za,
                    callsite: qe(this._errorFormat),
                    transaction: i1
                }));
        }
        async $queryRawInternal(n1, i1, o1, s1) {
            return this._request({
                action: "queryRaw",
                args: o1,
                transaction: n1,
                clientMethod: i1,
                argsMapper: Bi(this._activeProvider, i1),
                callsite: qe(this._errorFormat),
                dataPath: [],
                middlewareArgsMapper: s1
            }).then(yl);
        }
        $queryRaw(n1, ...i1) {
            return this._createPrismaPromise((o1)=>{
                if (n1.raw !== void 0 || n1.sql !== void 0) return this.$queryRawInternal(o1, "$queryRaw", ...Tl(n1, i1));
                throw new X("`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n", {
                    clientVersion: this._clientVersion
                });
            });
        }
        $queryRawUnsafe(n1, ...i1) {
            return this._createPrismaPromise((o1)=>this.$queryRawInternal(o1, "$queryRawUnsafe", [
                    n1,
                    ...i1
                ]));
        }
        _transactionWithArray({ promises: n1, options: i1 }) {
            let o1 = Kd.nextId(), s1 = al(n1.length), a1 = n1.map((l1, u1)=>{
                if (l1?.[Symbol.toStringTag] !== "PrismaPromise") throw new Error("All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.");
                let c1 = i1?.isolationLevel, p1 = {
                    kind: "batch",
                    id: o1,
                    index: u1,
                    isolationLevel: c1,
                    lock: s1
                };
                return l1.requestTransaction?.(p1) ?? l1;
            });
            return vl(a1);
        }
        async _transactionWithCallback({ callback: n1, options: i1 }) {
            let o1 = {
                traceparent: this._tracingHelper.getTraceParent()
            }, s1 = await this._engine.transaction("start", o1, i1), a1;
            try {
                let l1 = {
                    kind: "itx",
                    ...s1
                };
                a1 = await n1(this._createItxClient(l1)), await this._engine.transaction("commit", o1, s1);
            } catch (l1) {
                throw await this._engine.transaction("rollback", o1, s1).catch(()=>{}), l1;
            }
            return a1;
        }
        _createItxClient(n1) {
            return Ht(be(tn(this), [
                re("_appliedParent", ()=>this._appliedParent._createItxClient(n1)),
                re("_createPrismaPromise", ()=>Ui(n1)),
                re(Ud, ()=>n1.id),
                Vt(ul)
            ]));
        }
        $transaction(n1, i1) {
            let o1;
            typeof n1 == "function" ? o1 = ()=>this._transactionWithCallback({
                    callback: n1,
                    options: i1
                }) : o1 = ()=>this._transactionWithArray({
                    promises: n1,
                    options: i1
                });
            let s1 = {
                name: "transaction",
                attributes: {
                    method: "$transaction"
                }
            };
            return this._tracingHelper.runInChildSpan(s1, o1);
        }
        _request(n1) {
            n1.otelParentCtx = this._tracingHelper.getActiveContext();
            let i1 = n1.middlewareArgsMapper ?? Bd, o1 = {
                args: i1.requestArgsToMiddlewareArgs(n1.args),
                dataPath: n1.dataPath,
                runInTransaction: !!n1.transaction,
                action: n1.action,
                model: n1.model
            }, s1 = {
                middleware: {
                    name: "middleware",
                    middleware: !0,
                    attributes: {
                        method: "$use"
                    },
                    active: !1
                },
                operation: {
                    name: "operation",
                    attributes: {
                        method: o1.action,
                        model: o1.model,
                        name: o1.model ? `${o1.model}.${o1.action}` : o1.action
                    }
                }
            }, a1 = -1, l1 = async (u1)=>{
                let c1 = this._middlewares.get(++a1);
                if (c1) return this._tracingHelper.runInChildSpan(s1.middleware, (P1)=>c1(u1, (T1)=>(P1?.end(), l1(T1))));
                let { runInTransaction: p1, args: d1, ...f1 } = u1, y1 = {
                    ...n1,
                    ...f1
                };
                d1 && (y1.args = i1.middlewareArgsToRequestArgs(d1)), n1.transaction !== void 0 && p1 === !1 && delete y1.transaction;
                let g1 = await ra(this, y1);
                return y1.model ? Zs({
                    result: g1,
                    modelName: y1.model,
                    args: y1.args,
                    extensions: this._extensions,
                    runtimeDataModel: this._runtimeDataModel
                }) : g1;
            };
            return this._tracingHelper.runInChildSpan(s1.operation, ()=>new Cl.AsyncResource("prisma-client-request").runInAsyncScope(()=>l1(o1)));
        }
        async _executeRequest({ args: n1, clientMethod: i1, dataPath: o1, callsite: s1, action: a1, model: l1, argsMapper: u1, transaction: c1, unpacker: p1, otelParentCtx: d1, customDataProxyFetch: f1 }) {
            try {
                n1 = u1 ? u1(n1) : n1;
                let y1 = {
                    name: "serialize"
                }, g1 = this._tracingHelper.runInChildSpan(y1, ()=>Ga({
                        modelName: l1,
                        runtimeDataModel: this._runtimeDataModel,
                        action: a1,
                        args: n1,
                        clientMethod: i1,
                        callsite: s1,
                        extensions: this._extensions,
                        errorFormat: this._errorFormat,
                        clientVersion: this._clientVersion
                    }));
                return D.enabled("prisma:client") && (Be("Prisma Client call:"), Be(`prisma.${i1}(${Fs(n1)})`), Be("Generated request:"), Be(JSON.stringify(g1, null, 2) + `
`)), c1?.kind === "batch" && await c1.lock, this._requestHandler.request({
                    protocolQuery: g1,
                    modelName: l1,
                    action: a1,
                    clientMethod: i1,
                    dataPath: o1,
                    callsite: s1,
                    args: n1,
                    extensions: this._extensions,
                    transaction: c1,
                    unpacker: p1,
                    otelParentCtx: d1,
                    otelChildCtx: this._tracingHelper.getActiveContext(),
                    customDataProxyFetch: f1
                });
            } catch (y1) {
                throw y1.clientVersion = this._clientVersion, y1;
            }
        }
        get $metrics() {
            if (!this._hasPreviewFlag("metrics")) throw new X("`metrics` preview feature must be enabled in order to access metrics API", {
                clientVersion: this._clientVersion
            });
            return this._metrics;
        }
        _hasPreviewFlag(n1) {
            return !!this._engineConfig.previewFeatures?.includes(n1);
        }
    }
    return t1;
}
function Tl(e1, t1) {
    return Qd(e1) ? [
        new oe(e1, t1),
        rl
    ] : [
        e1,
        nl
    ];
}
function Qd(e1) {
    return Array.isArray(e1) && Array.isArray(e1.raw);
}
var Jd = new Set([
    "toJSON",
    "$$typeof",
    "asymmetricMatch",
    Symbol.iterator,
    Symbol.toStringTag,
    Symbol.isConcatSpreadable,
    Symbol.toPrimitive
]);
function Sl(e1) {
    return new Proxy(e1, {
        get (t1, r1) {
            if (r1 in t1) return t1[r1];
            if (!Jd.has(r1)) throw new TypeError(`Invalid enum value: ${String(r1)}`);
        }
    });
}
function Il(e1) {
    Ot(e1, {
        conflictCheck: "warn"
    });
}
0 && (0); /*! Bundled license information:

decimal.js/decimal.mjs:
  (*!
   *  decimal.js v10.4.3
   *  An arbitrary-precision Decimal type for JavaScript.
   *  https://github.com/MikeMcl/decimal.js
   *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
   *  MIT Licence
   *)
*/  //# sourceMappingURL=library.js.map


/***/ }),

/***/ 49101:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_generated_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94612);
/* harmony import */ var _prisma_generated_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_generated_client__WEBPACK_IMPORTED_MODULE_0__);
// import { PrismaClient } from '@prisma/client';

let prisma;
if (true) {
    prisma = new _prisma_generated_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
} else {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);


/***/ })

};
;