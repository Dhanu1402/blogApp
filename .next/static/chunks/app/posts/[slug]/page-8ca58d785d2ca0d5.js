(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[333],{7572:function(e,t,n){Promise.resolve().then(n.t.bind(n,3222,23)),Promise.resolve().then(n.t.bind(n,6685,23)),Promise.resolve().then(n.bind(n,3717)),Promise.resolve().then(n.t.bind(n,9240,23)),Promise.resolve().then(n.t.bind(n,2997,23)),Promise.resolve().then(n.t.bind(n,4708,23)),Promise.resolve().then(n.t.bind(n,1372,23))},3717:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var s=n(7437),_=n(1396),i=n.n(_),o=n(7158),a=n.n(o),m=n(6691),r=n.n(m),c=n(2333),u=n(2749),l=n(2265);let g=async e=>{let t=await fetch(e),n=await t.json();if(!t.ok){let e=Error(n.message);throw e}return n};function d(e){let{postSlug:t}=e,{status:n}=(0,u.useSession)(),{data:_,mutate:o,isLoading:m}=(0,c.ZP)("http://localhost:3000/api/comments?postSlug=".concat(t),g),[d,P]=(0,l.useState)(""),h=async()=>{await fetch("/api/comments",{method:"POST",body:JSON.stringify({desc:d,postSlug:t})}),o()};return(0,s.jsxs)("div",{className:a().container,children:[(0,s.jsx)("h1",{className:a().title,children:"Comments"}),"authenticated"===n?(0,s.jsxs)("div",{className:a().write,children:[(0,s.jsx)("textarea",{placeholder:"write a comment...",className:a().input,onChange:e=>P(e.target.value)}),(0,s.jsx)("button",{className:a().button,onClick:h,children:"Send"})]}):(0,s.jsx)(i(),{href:"/login",children:"Login to write a comment"}),(0,s.jsx)("div",{className:a().comments,children:m?"loading":null==_?void 0:_.map(e=>{var t;return(0,s.jsxs)("div",{className:a().comment,children:[(0,s.jsxs)("div",{className:a().user,children:[(null==e?void 0:null===(t=e.user)||void 0===t?void 0:t.image)&&(0,s.jsx)(r(),{src:e.user.image,alt:"",width:50,height:50,className:a().image}),(0,s.jsxs)("div",{className:a().userInfo,children:[(0,s.jsx)("span",{className:a().username,children:e.user.name}),(0,s.jsx)("span",{className:a().date,children:e.createdAt})]})]}),(0,s.jsx)("p",{className:a().desc,children:e.desc})]},e._id)})})]})}},9240:function(e){e.exports={infoContainer:"singlePage_infoContainer__tDFL9",textContainer:"singlePage_textContainer__6daun",title:"singlePage_title__MZu_m",user:"singlePage_user__gH_3H",userImageContainer:"singlePage_userImageContainer__MewWB",avatar:"singlePage_avatar__sdEz8",userTextContainer:"singlePage_userTextContainer__gpwGe",username:"singlePage_username__dTgCv",imageContainer:"singlePage_imageContainer__dmU88",image:"singlePage_image__ue3_I",content:"singlePage_content__QU5pL",post:"singlePage_post__XJLWC",description:"singlePage_description__wJyyk"}},7158:function(e){e.exports={container:"comments_container__xxba1",title:"comments_title__Q4Ma_",write:"comments_write__WpTkj",input:"comments_input__Om1ak",button:"comments_button__gOWXM",comments:"comments_comments__0uKqx",comment:"comments_comment__VdHvU",user:"comments_user__YXVWa",image:"comments_image__xlffC",userInfo:"comments_userInfo__OOZgO",username:"comments_username__vjnPs",date:"comments_date__u970Q",desc:"comments_desc__Jakce"}},2997:function(e){e.exports={container:"menu_container__jTKJp",subtitle:"menu_subtitle__J7xJj",title:"menu_title__QQ7Zn"}},1372:function(e){e.exports={categoryList:"menuCategories_categoryList__ktFqg",categoryItem:"menuCategories_categoryItem__o9cKJ",style:"menuCategories_style__cZGml",fashion:"menuCategories_fashion__iNpn3",food:"menuCategories_food__ufPAu",travel:"menuCategories_travel__E4B5s",culture:"menuCategories_culture__QFA4c",coding:"menuCategories_coding__9Rxni"}},4708:function(e){e.exports={items:"menuPosts_items__zCzFu",item:"menuPosts_item__FYpEz",imageContainer:"menuPosts_imageContainer__XG76w",image:"menuPosts_image__IA3eB",textContainer:"menuPosts_textContainer__au0GC",category:"menuPosts_category__Aonfr",travel:"menuPosts_travel__mQpLL",culture:"menuPosts_culture__pFTSR",food:"menuPosts_food__s3FgX",fashion:"menuPosts_fashion__CLcq8",coding:"menuPosts_coding__gPTWe",style:"menuPosts_style__2TsaX",postTitle:"menuPosts_postTitle___KHVw",detail:"menuPosts_detail__kP_z0",date:"menuPosts_date__ioevs"}}},function(e){e.O(0,[954,749,685,591,971,596,744],function(){return e(e.s=7572)}),_N_E=e.O()}]);