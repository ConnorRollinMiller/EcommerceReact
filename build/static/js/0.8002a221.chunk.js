webpackJsonp([0],{210:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=r(0),s=r.n(i),c=r(1),u=r.n(c),l=r(217),p=r(262),f=r(266),m=r(273),h=r(279),d=r(6),v=r(19),y=r(18),b=r(237),g=r(12),w=r(2),E=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),R=function(e){function t(){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),E(t,[{key:"componentDidMount",value:function(){this.props.fetchShoeById(this.props.shoeId),this.props.getReviewsByShoeId(this.props.shoeId)}},{key:"shouldComponentUpdate",value:function(e){if(e.shoe!==this.props.shoe)return!0;if(e.shoe&&this.props.shoe)for(var t in this.props.shoe)if(e.shoe[t]!==this.props.shoe[t])return!0;return e.shoeId!==this.props.shoeId||(e.reviews!==this.props.reviews||(e.activeShoeImage!==this.props.activeShoeImage||e.user!==this.props.user))}},{key:"componentDidUpdate",value:function(e){e.shoeId!==this.props.shoeId&&(this.props.fetchShoeById(this.props.shoeId),this.props.getReviewsByShoeId(this.props.shoeId),this.props.resetReviews())}},{key:"render",value:function(){var e=this;return this.props.shoe?s.a.createElement("main",{className:"main-section"},s.a.createElement(l.a,{displayPageTitle:!1}),s.a.createElement("div",{className:"container py-4"},s.a.createElement("section",{className:"row justify-content-center align-items-center mb-4"},s.a.createElement(p.a,{shoe:this.props.shoe,activeShoeImage:this.props.activeShoeImage,changeActiveShoeImage:this.props.changeActiveShoeImage}),s.a.createElement(f.a,{shoe:this.props.shoe,addToCart:function(){return e.props.addToCart(e.props.shoe,e.props.cart)}})),s.a.createElement("section",{className:"row text-center"},s.a.createElement(h.a,{reviews:this.props.reviews}),s.a.createElement(m.a,{shoeId:this.props.shoe.shoeId,user:this.props.user})))):s.a.createElement("div",{className:"alert alert-danger text-center text-capitalize h5 col-6 mx-auto"},"Error Fetching Shoe From Server...")}}]),t}(i.Component);R.propTypes={shoe:u.a.object,reviews:u.a.array.isRequired,shoeId:u.a.number.isRequired,fetchShoeById:u.a.func.isRequired,addToCart:u.a.func.isRequired,getReviewsByShoeId:u.a.func.isRequired};var O=function(e,t){return{shoes:e.shoeReducer.shoes,shoeId:Number(t.match.params.shoeId),shoe:e.shoeReducer.shoe,activeShoeImage:e.shoeReducer.activeShoeImage,reviews:e.reviewReducer.reviews,user:e.accountReducer.user,cart:e.cartReducer.cart}},j=function(e){return{fetchShoeById:function(t){return e(Object(y.c)(t))},addToCart:function(t,r){e(Object(v.a)(t,r)),e(Object(g.a)(w.g.ADD_TO_CART))},changeActiveShoeImage:function(t){return e(Object(y.a)(t))},getReviewsByShoeId:function(t){return e(Object(b.c)(t))},resetReviews:function(){return e(Object(b.f)())}}};t.default=Object(d.b)(O,j)(R)},216:function(e,t,r){"use strict";function n(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}var o=r(0),a=r.n(o),i=r(1),s=r.n(i),c=function(e){var t=n(e,[]);return a.a.createElement("form",{className:t.className,onSubmit:t.onSubmit},t.children)};c.propTypes={className:s.a.string.isRequired,onSubmit:s.a.func.isRequired},c.defaultProps={className:""},t.a=c},217:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=r(0),s=r.n(i),c=r(1),u=r.n(c),l=r(5),p=r(218),f=(r.n(p),r(6)),m=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),h=function(e){function t(){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),m(t,[{key:"shouldComponentUpdate",value:function(e){if(e.displayBreadcrumbs!==this.props.displayBreadcrumbs)return!0;if(e.displayPageTitle!==this.props.displayPageTitle)return!0;if(e.path.length!==this.props.path.length)return!0;for(var t=0;t<e.path.length;t++)if(e.path[t]!==this.props.path[t])return!0;return!1}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"page-title text-center py-4"},this.props.displayPageTitle&&s.a.createElement("h2",{className:"h3 mb-0 text-uppercase"},this.props.path[this.props.path.length-1]),this.props.displayBreadcrumbs&&s.a.createElement("h3",{className:"h4 mt-2 breadcrumbs"},s.a.createElement(l.a,{className:"",to:"/"},"Home"),this.props.path&&this.props.path.map(function(t){return t!==e.props.path[e.props.path.length-1]?s.a.createElement("span",{key:t}," ","/ ",s.a.createElement(l.a,{to:"/"+t},t)):s.a.createElement("span",{className:"breadcrumbs-path",key:t},"/ ",t)})))}}]),t}(i.Component);h.propTypes={displayPageTitle:u.a.bool,displayBreadcrumbs:u.a.bool,path:u.a.array.isRequired},h.defaultProps={displayPageTitle:!0,displayBreadcrumbs:!0};var d=function(e,t){return{path:e.routerReducer.location.pathname.split("/").slice(1)}};t.a=Object(f.b)(d)(h)},218:function(e,t,r){var n=r(219);"string"===typeof n&&(n=[[e.i,n,""]]);var o={hmr:!1};o.transform=void 0;r(207)(n,o);n.locals&&(e.exports=n.locals)},219:function(e,t,r){t=e.exports=r(206)(!0),t.push([e.i,".page-title{background:var(--primary-color);color:#fff}.breadcrumbs{text-transform:uppercase;font-size:1.2em!important}.breadcrumbs-link{margin-right:6px}.breadcrumbs-path{margin-left:6px}","",{version:3,sources:["/Users/connormiller/Documents/Projects/ReactEcommerceApp/src/components/common/css/PageTitle.css"],names:[],mappings:"AAAA,YACC,gCAAiC,AACjC,UAAY,CACZ,AAED,aACC,yBAA0B,AAC1B,yBAA4B,CAC5B,AAED,kBACC,gBAAkB,CAClB,AAED,kBACC,eAAgB,CAChB",file:"PageTitle.css",sourcesContent:[".page-title {\n\tbackground: var(--primary-color);\n\tcolor: #fff;\n}\n\n.breadcrumbs {\n\ttext-transform: uppercase;\n\tfont-size: 1.2em !important;\n}\n\n.breadcrumbs-link {\n\tmargin-right: 6px;\n}\n\n.breadcrumbs-path {\n\tmargin-left:6px;\n}"],sourceRoot:""}])},227:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=r(0),s=r.n(i),c=r(1),u=r.n(c),l=r(7),p=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=function(e){function t(){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),p(t,[{key:"shouldComponentUpdate",value:function(e){return!1}},{key:"render",value:function(){return s.a.createElement(l.a,{className:this.props.className,icon:["fas","envelope"],size:this.props.size,onClick:this.props.onClick})}}]),t}(i.Component);f.propTypes={className:u.a.string,size:u.a.string,onClick:u.a.func},f.defaultProps={size:"1x"},t.a=f},236:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=r(0),s=r.n(i),c=r(1),u=r.n(c),l=r(7),p=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=function(e){function t(){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),p(t,[{key:"shouldComponentUpdate",value:function(e){return!1}},{key:"render",value:function(){return s.a.createElement(l.a,{className:this.props.className,icon:["fas","star"],size:this.props.size,onClick:this.props.onClick})}}]),t}(i.Component);f.propTypes={onClick:u.a.func,className:u.a.string,size:u.a.string},t.a=f},237:function(e,t,r){"use strict";r.d(t,"c",function(){return s}),r.d(t,"f",function(){return l}),r.d(t,"a",function(){return p}),r.d(t,"b",function(){return f}),r.d(t,"d",function(){return m}),r.d(t,"e",function(){return v});var n=r(2),o=r(13),a=r.n(o),i=r(278),s=function(e){return function(t){a.a.get("/api/reviews/"+e).then(function(e){console.log("RESPONSE:",e.data),t(e.data.success&&e.data.reviews.length>0?c(e.data.reviews):l())}).catch(function(e){console.error(e),console.error("ERROR:",e.response),t(u(e.response))})}},c=function(e){return{type:n.h.GET_REVIEWS_BY_SHOEID_SUCCESS,reviews:e}},u=function(e){return{type:n.h.GET_REVIEWS_BY_SHOEID_FAILURE,errorMessage:e}},l=function(){return{type:n.h.RESET_REVIEWS}},p=function(e){return{type:n.h.CHANGE_REVIEW_RATING,rating:e}},f=function(e){return{type:n.h.CHANGE_REVIEW_TEXT,value:e}},m=function(e,t,r,n,o){return function(s){if(!n)return s(d("Must Give A Rating."));if(!o)return s(d("Must Give A Review."));if(!e)return s(d("No Shoe ID Provided."));if(!r)return s(d("Must Be Logged In To Leave Review."));var c=Object(i.a)(e,t,r,o,n);a.a.post("/api/reviews",c).then(function(e){console.log(e.data),s(h(e.data.newReview))}).catch(function(e){console.error(e),console.log("ERROR:",e.response),s(d(e.response))})}},h=function(e){return{type:n.h.POST_NEW_REVIEW_SUCCESS,newReview:e}},d=function(e){return{type:n.h.POST_NEW_REVIEW_FAILURE,errorMessage:e}},v=function(){return{type:n.h.RESET_REVIEW_FORM}}},262:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=r(0),s=r.n(i),c=r(1),u=r.n(c),l=r(263),p=(r.n(l),r(265)),f=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),m=[1,2,3,4],h=function(e){function t(){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),f(t,[{key:"shouldComponentUpdate",value:function(e){return e.shoe!==this.props.shoe||e.activeShoeImage!==this.props.activeShoeImage}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"col-md-6 d-flex flex-column justify-content-center align-items-center mb-4"},s.a.createElement("img",{className:"product-image-container img-fluid mb-4",src:"/images/"+this.props.shoe.brand+"/"+this.props.shoe.imageFolderName+"/"+this.props.activeShoeImage+".jpg",alt:this.props.shoe.brand+" "+this.props.shoe.colorway}),s.a.createElement("div",{className:"row justify-content-center align-items-center mb-4"},m.map(function(t){return s.a.createElement(p.a,{key:t,shoeId:e.props.shoe.shoeId,brand:e.props.shoe.brand,imageFolderURL:e.props.shoe.imageFolderName,colorway:e.props.shoe.colorway,imageId:t,isActive:t===e.props.activeShoeImage,changeActiveShoeImage:e.props.changeActiveShoeImage})})))}}]),t}(i.Component);h.propTypes={shoe:u.a.object.isRequired,activeShoeImage:u.a.number.isRequired,changeActiveShoeImage:u.a.func.isRequired},t.a=h},263:function(e,t,r){var n=r(264);"string"===typeof n&&(n=[[e.i,n,""]]);var o={hmr:!1};o.transform=void 0;r(207)(n,o);n.locals&&(e.exports=n.locals)},264:function(e,t,r){t=e.exports=r(206)(!0),t.push([e.i,".product-image-container{overflow:hidden}.product-image-thumbnail:hover{cursor:pointer}","",{version:3,sources:["/Users/connormiller/Documents/Projects/ReactEcommerceApp/src/components/product/css/ProductImage.css"],names:[],mappings:"AAAA,yBACC,eAAiB,CACjB,AAED,+BACC,cAAgB,CAChB",file:"ProductImage.css",sourcesContent:[".product-image-container {\n\toverflow: hidden;\n}\n\n.product-image-thumbnail:hover {\n\tcursor: pointer;\n}"],sourceRoot:""}])},265:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=r(0),s=r.n(i),c=r(1),u=r.n(c),l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),p=function(e){function t(){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),l(t,[{key:"shouldComponentUpdate",value:function(e){return e.isActive!==this.props.isActive||e.shoeId!==this.props.shoeId}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"product-image-thumbnail col-sm-3 col-6",style:this.props.isActive?{opacity:"1"}:{opacity:"0.5"}},s.a.createElement("img",{className:"w-100",src:"/images/"+this.props.brand+"/"+this.props.imageFolderURL+"/"+this.props.imageId+".jpg",alt:this.props.brand+" "+this.props.colorway+" 1",onClick:function(){return e.props.changeActiveShoeImage(e.props.imageId)}}))}}]),t}(i.Component);p.propTypes={shoeId:u.a.number.isRequired,brand:u.a.string.isRequired,imageFolderURL:u.a.string.isRequired,colorway:u.a.string.isRequired,imageId:u.a.number.isRequired,isActive:u.a.bool.isRequired,changeActiveShoeImage:u.a.func.isRequired},t.a=p},266:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=r(0),s=r.n(i),c=r(1),u=r.n(c),l=r(70),p=r(30),f=r(267),m=r(271),h=(r.n(m),r(68)),d=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),v=function(e){function t(){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),d(t,[{key:"shouldComponentUpdate",value:function(e){return e.shoe!==this.props.shoe}},{key:"render",value:function(){return s.a.createElement("div",{className:"col-md-6 flex-column text-center text-uppercase mb-4"},s.a.createElement("span",{className:"col-12 text-uppercase"},this.props.shoe.brand),s.a.createElement("h4",{className:"col-12 mb-0 font-weight-bold mb-1"},this.props.shoe.model),s.a.createElement("h3",{className:"col-12 text-center mb-0 font-weight-bold mb-0"},this.props.shoe.colorway),s.a.createElement("hr",{className:"product-details-hr mx-auto"}),s.a.createElement("strong",{className:"h3 mb-0 font-weight-bold secondary-color"},"$",this.props.shoe.price.toFixed(2)),s.a.createElement(l.a,{className:"col-8 col-md-6 mx-auto my-4",name:"shoeSize",options:h.c,onChange:function(e){return e.preventDefault()}}),s.a.createElement(p.a,{className:"col-8 col-md-6 btn btn-primary py-2 mx-auto",onClick:this.props.addToCart},"Add To Cart"),s.a.createElement("hr",{className:"col-8 mx-auto my-4"}),s.a.createElement(f.a,{shoe:this.props.shoe}))}}]),t}(i.Component);v.propTypes={shoe:u.a.object.isRequired,addToCart:u.a.func.isRequired},t.a=v},267:function(e,t,r){"use strict";function n(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}var o=r(0),a=r.n(o),i=r(1),s=r.n(i),c=r(268),u=r(269),l=r(270),p=r(227),f="http://localhost:3000/shop",m=function(e){var t=n(e,[]);return a.a.createElement("div",null,a.a.createElement("h4",{className:"h6 text-center font-weight-bold text-uppercase mb-2"},"Share:"),a.a.createElement("div",{className:"d-flex justify-content-center"},a.a.createElement("a",{className:"mx-2",href:"http://twitter.com/share?url="+f+"/"+t.shoe.shoeId,target:"_blank"},a.a.createElement(c.a,{size:"lg"})),a.a.createElement("a",{className:"mx-2",href:"http://facebook.com/sharer.php?u="+f+"/"+t.shoe.shoeId,target:"_blank"},a.a.createElement(u.a,{size:"lg"})),a.a.createElement("a",{className:"mx-2",href:"http://instagram.com/",target:"_blank"},a.a.createElement(l.a,{size:"lg"})),a.a.createElement("a",{className:"mx-2",href:"mailto:enteremail@here.com?\n\t\t\t\t\t\tsubject="+t.shoe.brand+" "+t.shoe.model+" "+t.shoe.colorway+"&\n\t\t\t\t\t\tbody=Check This Out: "+f+"/"+t.shoe.shoeId},a.a.createElement(p.a,{size:"lg"}))))};m.propTypes={shoe:s.a.object.isRequired},t.a=m},268:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=r(0),s=r.n(i),c=r(1),u=r.n(c),l=r(7),p=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=function(e){function t(){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),p(t,[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){return s.a.createElement(l.a,{className:this.props.className,icon:["fab","twitter"],size:this.props.size,onClick:this.props.onClick})}}]),t}(i.Component);f.propTypes={className:u.a.string,size:u.a.string.isRequired,onClick:u.a.func},t.a=f},269:function(e,t,r){"use strict";function n(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}var o=r(0),a=r.n(o),i=r(1),s=r.n(i),c=r(7),u=function(e){var t=n(e,[]);return a.a.createElement(c.a,{className:t.className,icon:["fab","facebook"],size:t.size,onClick:t.onClick})};u.propTypes={className:s.a.string,size:s.a.string.isRequired,onClick:s.a.func},t.a=u},270:function(e,t,r){"use strict";function n(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}var o=r(0),a=r.n(o),i=r(1),s=r.n(i),c=r(7),u=function(e){var t=n(e,[]);return a.a.createElement(c.a,{className:t.className,icon:["fab","instagram"],size:t.size,onClick:t.onClick})};u.propTypes={className:s.a.string,size:s.a.string.isRequired,onClick:s.a.func},t.a=u},271:function(e,t,r){var n=r(272);"string"===typeof n&&(n=[[e.i,n,""]]);var o={hmr:!1};o.transform=void 0;r(207)(n,o);n.locals&&(e.exports=n.locals)},272:function(e,t,r){t=e.exports=r(206)(!0),t.push([e.i,".product-details-hr{width:10%;border:none;height:3px;background:var(--secondary-color);margin:1em 0}","",{version:3,sources:["/Users/connormiller/Documents/Projects/ReactEcommerceApp/src/components/product/css/ProductDetails.css"],names:[],mappings:"AAAA,oBACC,UAAW,AACX,YAAa,AACb,WAAY,AACZ,kCAAmC,AACnC,YAAc,CACd",file:"ProductDetails.css",sourcesContent:[".product-details-hr {\n\twidth: 10%;\n\tborder: none;\n\theight: 3px;\n\tbackground: var(--secondary-color);\n\tmargin: 1em 0;\n}"],sourceRoot:""}])},273:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=r(0),s=r.n(i),c=r(1),u=r.n(c),l=r(216),p=r(274),f=r(275),m=r(30),h=r(6),d=r(237),v=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),y=function(e){function t(){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),v(t,[{key:"componentDidUpdate",value:function(e){e.shoeId!==this.props.shoeId&&this.props.resetReviewForm()}},{key:"shouldComponentUpdate",value:function(e){return e.user!==this.props.user||(e.reviewText!==this.props.reviewText||(e.reviewRating!==this.props.reviewRating||(e.shoeId!==this.props.shoeId||(e.userId!==this.props.userId||(e.review!==this.props.review||(e.error!==this.props.error||e.errorMessage!==this.props.errorMessage))))))}},{key:"render",value:function(){var e=this;return this.props.shoeId&&this.props.user?s.a.createElement("div",{className:"col-md-6 flex-column align-items-center mb-4"},s.a.createElement("h3",{className:"h4 font-weight-bold text-uppercase"},"Add A Review"),s.a.createElement(l.a,{className:"col-12 my-4",onSubmit:function(t){return e.props.postNewReview(t,e.props.shoeId,e.props.user.userId,e.props.user.username,e.props.reviewRating,e.props.reviewText)}},this.props.error&&s.a.createElement("div",{className:"mt-4 alert alert-danger"},this.props.errorMessage),s.a.createElement("div",{className:"mb-2"},s.a.createElement("p",{className:"mb-1"},"Your Rating:"),s.a.createElement(f.a,{reviewRating:this.props.reviewRating,changeReviewRating:this.props.changeReviewRating})),s.a.createElement(p.a,{label:"Your Review:",value:this.props.reviewText,onChange:this.props.changeReviewText,rows:4}),s.a.createElement(m.a,{className:"col-12 col-md-6"},"Submit Review"))):s.a.createElement("div",{className:"col-md-6 flex-column align-items-center mb-4"},s.a.createElement("h3",{className:"h4 font-weight-bold text-uppercase"},"Add A Review"),s.a.createElement("strong",{className:"mt-2 text-capitalize"},"Must Be Logged In To Leave Review!"))}}]),t}(i.Component);y.propTypes={reviewRating:u.a.number,reviewText:u.a.string.isRequired,changeReviewText:u.a.func.isRequired,changeReviewRating:u.a.func.isRequired,shoeId:u.a.number.isRequired,user:u.a.object};var b=function(e,t){return{reviewText:e.reviewReducer.reviewText,reviewRating:e.reviewReducer.reviewRating,shoeId:t.shoeId,user:t.user,error:e.reviewReducer.error,errorMessage:e.reviewReducer.errorMessage}},g=function(e){return{changeReviewText:function(t){return e(Object(d.b)(t))},changeReviewRating:function(t){return e(Object(d.a)(t))},postNewReview:function(t,r,n,o,a,i){t.preventDefault(),e(Object(d.d)(r,n,o,a,i))},resetReviewForm:function(){return e(Object(d.e)())}}};t.a=Object(h.b)(b,g)(y)},274:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=r(0),s=r.n(i),c=r(1),u=r.n(c),l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),p=function(e){function t(){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),l(t,[{key:"shouldComponentUpdate",value:function(e){return e.value!==this.props.value}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"form-group"},this.props.label&&s.a.createElement("label",null,this.props.label),s.a.createElement("textarea",{className:"form-control",value:this.props.value,onChange:function(t){return e.props.onChange(t.target.value)},rows:this.props.rows}))}}]),t}(i.Component);p.propTypes={value:u.a.string.isRequired,rows:u.a.number.isRequired,onChange:u.a.func.isRequired},t.a=p},275:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=r(0),s=r.n(i),c=r(1),u=r.n(c),l=r(236),p=r(276),f=(r.n(p),function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}()),m=function(e){function t(){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),f(t,[{key:"shouldComponentUpdate",value:function(e){return e.reviewRating!==this.props.reviewRating}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"d-flex flex-column flex-sm-row justify-content-center"},s.a.createElement("div",{className:1===this.props.reviewRating?" d-flex justify-content-center review-rating-active review-rating m-2":" d-flex justify-content-center review-rating m-2",onClick:function(){return e.props.changeReviewRating(1)}},s.a.createElement(l.a,null)),s.a.createElement("div",{className:2===this.props.reviewRating?" d-flex justify-content-center review-rating-active review-rating m-2":" d-flex justify-content-center review-rating m-2",onClick:function(){return e.props.changeReviewRating(2)}},s.a.createElement(l.a,null),s.a.createElement(l.a,null)),s.a.createElement("div",{className:3===this.props.reviewRating?"d-flex justify-content-center review-rating-active review-rating m-2":"d-flex justify-content-center review-rating m-2",onClick:function(){return e.props.changeReviewRating(3)}},s.a.createElement(l.a,null),s.a.createElement(l.a,null),s.a.createElement(l.a,null)),s.a.createElement("div",{className:4===this.props.reviewRating?"d-flex justify-content-center review-rating-active review-rating m-2":"d-flex justify-content-center review-rating m-2",onClick:function(){return e.props.changeReviewRating(4)}},s.a.createElement(l.a,null),s.a.createElement(l.a,null),s.a.createElement(l.a,null),s.a.createElement(l.a,null)),s.a.createElement("div",{className:5===this.props.reviewRating?"d-flex justify-content-center review-rating-active review-rating m-2":"d-flex justify-content-center review-rating m-2",onClick:function(){return e.props.changeReviewRating(5)}},s.a.createElement(l.a,null),s.a.createElement(l.a,null),s.a.createElement(l.a,null),s.a.createElement(l.a,null),s.a.createElement(l.a,null)))}}]),t}(i.Component);m.propTypes={reviewRating:u.a.number,changeReviewRating:u.a.func.isRequired},t.a=m},276:function(e,t,r){var n=r(277);"string"===typeof n&&(n=[[e.i,n,""]]);var o={hmr:!1};o.transform=void 0;r(207)(n,o);n.locals&&(e.exports=n.locals)},277:function(e,t,r){t=e.exports=r(206)(!0),t.push([e.i,".review-rating-active,.review-rating:hover{color:var(--secondary-color)}.review-rating:hover{cursor:pointer}","",{version:3,sources:["/Users/connormiller/Documents/Projects/ReactEcommerceApp/src/components/review/css/ReviewRating.css"],names:[],mappings:"AAIA,2CAHG,4BAA8B,CAMhC,AAHD,qBAEG,cAAgB,CAClB",file:"ReviewRating.css",sourcesContent:[".review-rating-active {\n   color: var(--secondary-color);\n}\n\n.review-rating:hover {\n   color: var(--secondary-color);\n   cursor: pointer;\n}\n"],sourceRoot:""}])},278:function(e,t,r){"use strict";t.a=function(e,t,r,n,o){return{userId:t,shoeId:e,username:r,reviewText:n,rating:o}}},279:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=r(0),s=r.n(i),c=r(1),u=r.n(c),l=r(280),p=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=function(e){function t(){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),p(t,[{key:"shouldComponentUpdate",value:function(e){return e.reviews.length!==this.props.reviews.length}},{key:"render",value:function(){return s.a.createElement("div",{className:"col-md-6 flex-column align-items center mb-4"},s.a.createElement("h3",{className:"h4 font-weight-bold text-uppercase"},"Reviews (",this.props.reviews.length,")"),this.props.reviews&&this.props.reviews.length>0?s.a.createElement("div",{className:"my-4"},this.props.reviews.map(function(e){return s.a.createElement(l.a,{key:e.reviewId,rating:e.rating,username:e.username,createdAt:e.createdAt,reviewText:e.reviewText})})):s.a.createElement("strong",{className:"py-2 text-capitalize"},"No Reviews"))}}]),t}(i.Component);f.propTypes={reviews:u.a.array.isRequired},t.a=f},280:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(1),i=r.n(a),s=r(281),c=r(283),u=function(e){var t=e.rating,r=e.username,n=e.createdAt,a=e.reviewText;return o.a.createElement("article",{className:"py-3 text-center text-md-left border-bottom"},o.a.createElement(s.a,{rating:t}),o.a.createElement("p",{className:"mb-0 text-uppercase font-weight-bold"},r),o.a.createElement("p",{className:"mb-0"},Object(c.a)(n)),o.a.createElement("p",{className:"mb-0 font-italic font-weight-light"},a))};u.propTypes={rating:i.a.number.isRequired,username:i.a.string.isRequired,createdAt:i.a.string.isRequired,reviewText:i.a.string.isRequired},t.a=u},281:function(e,t,r){"use strict";function n(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}var o=r(0),a=r.n(o),i=r(1),s=r.n(i),c=r(236),u=r(282),l=function(e){var t=n(e,[]);switch(t.rating){case 0:return a.a.createElement("div",{className:"d-flex justify-content-md-start justify-content-center mb-2 secondary-color"},a.a.createElement(u.a,null),a.a.createElement(u.a,null),a.a.createElement(u.a,null),a.a.createElement(u.a,null),a.a.createElement(u.a,null));case 1:return a.a.createElement("div",{className:"d-flex justify-content-md-start justify-content-center mb-2 secondary-color"},a.a.createElement(c.a,null),a.a.createElement(u.a,null),a.a.createElement(u.a,null),a.a.createElement(u.a,null),a.a.createElement(u.a,null));case 2:return a.a.createElement("div",{className:"d-flex justify-content-md-start justify-content-center mb-2 secondary-color"},a.a.createElement(c.a,null),a.a.createElement(c.a,null),a.a.createElement(u.a,null),a.a.createElement(u.a,null),a.a.createElement(u.a,null));case 3:return a.a.createElement("div",{className:"d-flex justify-content-md-start justify-content-center mb-2 secondary-color"},a.a.createElement(c.a,null),a.a.createElement(c.a,null),a.a.createElement(c.a,null),a.a.createElement(u.a,null),a.a.createElement(u.a,null));case 4:return a.a.createElement("div",{className:"d-flex justify-content-md-start justify-content-center mb-2 secondary-color"},a.a.createElement(c.a,null),a.a.createElement(c.a,null),a.a.createElement(c.a,null),a.a.createElement(c.a,null),a.a.createElement(u.a,null));case 5:return a.a.createElement("div",{className:"d-flex justify-content-md-start justify-content-center mb-2 secondary-color"},a.a.createElement(c.a,null),a.a.createElement(c.a,null),a.a.createElement(c.a,null),a.a.createElement(c.a,null),a.a.createElement(c.a,null));default:return"Error with rating => "+t.rating}};l.propTypes={rating:s.a.number.isRequired},t.a=l},282:function(e,t,r){"use strict";function n(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}var o=r(0),a=r.n(o),i=r(1),s=r.n(i),c=r(7),u=function(e){var t=n(e,[]);return a.a.createElement(c.a,{className:t.className,icon:["far","star"],size:t.size,onClick:t.onClick})};u.propTypes={onClick:s.a.func,className:s.a.string,size:s.a.string},t.a=u},283:function(e,t,r){"use strict";t.a=function(e){return e.slice(0,9)}}});
//# sourceMappingURL=0.8002a221.chunk.js.map