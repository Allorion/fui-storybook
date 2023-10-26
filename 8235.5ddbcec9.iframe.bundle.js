"use strict";(self.webpackChunkfui_material=self.webpackChunkfui_material||[]).push([[8235],{"./src/function-elements/fNotification/fNotification.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return function_elements_fNotification_fNotification}});var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),fNotification=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/function-elements/fNotification/fNotification.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(fNotification.Z,options),fNotification.Z&&fNotification.Z.locals&&fNotification.Z.locals;var generateUniqueId=__webpack_require__("./src/dop-function/generateUniqueId.ts"),function_elements_fNotification_fNotification=function fNotification(_ref){var title=_ref.title,body=_ref.body,_ref$variant=_ref.variant,variant=void 0===_ref$variant?"info":_ref$variant,_ref$timeSecClose=_ref.timeSecClose,timeSecClose=void 0===_ref$timeSecClose?100:_ref$timeSecClose,_ref$buttonClose=_ref.buttonClose,buttonClose=void 0!==_ref$buttonClose&&_ref$buttonClose,ico="";switch(variant){case"info":ico='<path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/><path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>';break;case"success":ico='<path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/><path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"/>';break;case"error":ico='<path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>';break;case"warning":ico='<path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/><path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>'}var arrBody=[];body.split("\n").map((function(opt){arrBody.push("<span>".concat(opt,"</span>"))}));var idFuncBlockNot="f-function-block-notification-"+(0,generateUniqueId.l)(),not="\n            <div class='f-function-block-notification' id=\"".concat(idFuncBlockNot,"\">\n                <div class='f-function-notification'>\n                    <div class='f-function-notification-ico ").concat(variant,'-notification\'>\n                        <svg width="28" height="28" viewBox="0 0 16 16">\n                            ').concat(ico,"\n                        </svg>\n                    </div>\n                    <div class='f-function-notification-inside'>\n                        <div class='f-function-notification-header'>\n                            <h4>").concat(void 0!==title?title:"","</h4>\n                            ").concat(buttonClose?'<svg\n                                                    width="25"\n                                                    class="bi bi-x-lg primary close-not"\n                                                    viewBox="0 0 16 16"\n                                                >\n                                                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>\n                                                </svg>':"","\n                        </div>\n                        <div class='f-function-notification-body'>\n                             ").concat(arrBody.join(""),"\n                        </div>\n                    </div>\n                   ").concat(timeSecClose&&'<div class="f-notification-progress">\n                       <div class="f-notification-progress-bar">\n                            <div class="f-notification-progress-value '.concat(variant,'" style="animation: notification-progress-animated ').concat(timeSecClose,'s linear;"/>\n                       </div>\n                   </div>'),"\n                </div>\n            </div>\n        "),blockNotification=document.querySelector("#block-notification");if(null===blockNotification?((blockNotification=document.createElement("div")).id="block-notification",blockNotification.insertAdjacentHTML("afterbegin",not),document.body.appendChild(blockNotification)):(blockNotification.insertAdjacentHTML("afterbegin",not),document.body.appendChild(blockNotification)),buttonClose){var el=window.document.querySelector("#".concat(idFuncBlockNot));if(null!==el){var svgElement=el.querySelector(".close-not");null!==svgElement&&svgElement.addEventListener("click",(function(){el.classList.add("f-function-notification-hidden"),setTimeout((function(){el.parentNode&&el.parentNode.removeChild(el)}),1e3)}))}}if(void 0!==timeSecClose){var _el=window.document.querySelector("#".concat(idFuncBlockNot));null!==_el&&(setTimeout((function(){_el.className="f-function-notification-hidden"}),1e3*(timeSecClose-1)),setTimeout((function(){_el.parentNode&&_el.parentNode.removeChild(_el)}),1e3*timeSecClose))}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/function-elements/fNotification/fNotification.css":function(module,__webpack_exports__,__webpack_require__){var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'#block-notification {\n    display: flex;\n    flex-direction: column;\n    align-items: end;\n    margin: 16px;\n    gap: 16px;\n}\n.f-function-notification {\n    display: flex;\n    flex-direction: row;\n    width: fit-content;\n    min-height: 75px;\n    background-color: white;\n    border-radius: 10px;\n    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);\n    position: relative;\n    max-width: 500px;\n}\n\n.f-function-notification-ico {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 45px;\n    border-bottom-left-radius: 10px;\n    border-top-left-radius: 10px;\n}\n\n.f-function-notification-ico.info-notification {\n    color: #2164BE !important;\n    background-color: rgba(149, 191, 255, 0.4) !important;\n    fill: #2164BE !important;\n}\n\n.f-function-notification-ico.error-notification {\n    color: #D10000 !important;\n    background-color: rgba(209, 0, 0, 0.4) !important;\n    fill: #D10000 !important;\n}\n\n.f-function-notification-ico.success-notification {\n    color: #0f7a11 !important;\n    background-color: rgba(72, 159, 73, 0.4) !important;\n    fill: #0f7a11 !important;\n}\n\n.f-function-notification-ico.warning-notification {\n    color: #ffc107 !important;\n    background-color: rgba(255, 193, 7, 0.4) !important;\n    fill: #ffc107 !important;\n}\n\n.f-function-notification-inside {\n    display: flex;\n    flex-direction: column;\n    margin: 16px;\n    gap: 9px;\n}\n\n.f-function-notification-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.f-function-notification-header h4 {\n    font-family: "SF UI Display", sans-serif;\n    color: #000;\n    font-size: 16px;\n    font-weight: 600;\n    line-height: 1.2;\n    margin-bottom: 0;\n}\n\n.f-function-notification-body {\n    display: flex;\n    flex-direction: column;\n}\n\n.f-function-notification-body span {\n    font-size: 14px;\n    font-weight: bold;\n    color: #656565;\n    white-space: normal;\n    -webkit-hyphens: auto;\n    -ms-hyphens: auto;\n    hyphens: auto;\n    word-wrap: anywhere;\n}\n\n.f-function-notification-hidden {\n    visibility: hidden;\n    opacity: 0;\n    transition: visibility 0s 1s, opacity 1s linear;\n}\n\n.close-not {\n    cursor: pointer;\n}\n\n\n.f-notification-progress {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    width: calc(100% - 40px);\n}\n\n.f-notification-progress-bar {\n    position: relative;\n    border: 0;\n    height: 6px;\n    background-color: #e9ecef !important;\n    border-bottom-left-radius: 10px;\n    border-top-left-radius: 10px;\n    width: 100%;\n}\n\n.f-notification-progress-value {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    border-bottom-left-radius: 10px;\n    border-top-left-radius: 10px;\n    transform: rotate(180deg) scaleX(1);\n    height: 6px;\n    width: 100%;\n}\n\n.f-notification-progress-value.info {\n    background-color: rgba(149, 191, 255, 0.4) !important;\n}\n\n.f-notification-progress-value.error {\n    background-color: rgba(209, 0, 0, 0.4) !important;\n}\n\n.f-notification-progress-value.success {\n    background-color: rgba(72, 159, 73, 0.4) !important;\n}\n\n.f-notification-progress-value.warning {\n    background-color: rgba(255, 193, 7, 0.4) !important;\n}\n\n@keyframes notification-progress-animated {\n    from {\n        width: 100%;\n    }\n    to {\n        width: 0;\n    }\n}',"",{version:3,sources:["webpack://./src/function-elements/fNotification/fNotification.css"],names:[],mappings:"AAAA;IACI,aAAa;IACb,sBAAsB;IACtB,gBAAgB;IAChB,YAAY;IACZ,SAAS;AACb;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,gBAAgB;IAChB,uBAAuB;IACvB,mBAAmB;IACnB,8CAA8C;IAC9C,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,+BAA+B;IAC/B,4BAA4B;AAChC;;AAEA;IACI,yBAAyB;IACzB,qDAAqD;IACrD,wBAAwB;AAC5B;;AAEA;IACI,yBAAyB;IACzB,iDAAiD;IACjD,wBAAwB;AAC5B;;AAEA;IACI,yBAAyB;IACzB,mDAAmD;IACnD,wBAAwB;AAC5B;;AAEA;IACI,yBAAyB;IACzB,mDAAmD;IACnD,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;IACI,wCAAwC;IACxC,WAAW;IACX,eAAe;IACf,gBAAgB;IAChB,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,cAAc;IACd,mBAAmB;IACnB,qBAAqB;IACrB,iBAAiB;IACjB,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,+CAA+C;AACnD;;AAEA;IACI,eAAe;AACnB;;;AAGA;IACI,kBAAkB;IAClB,SAAS;IACT,QAAQ;IACR,wBAAwB;AAC5B;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,WAAW;IACX,oCAAoC;IACpC,+BAA+B;IAC/B,4BAA4B;IAC5B,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,QAAQ;IACR,+BAA+B;IAC/B,4BAA4B;IAC5B,mCAAmC;IACnC,WAAW;IACX,WAAW;AACf;;AAEA;IACI,qDAAqD;AACzD;;AAEA;IACI,iDAAiD;AACrD;;AAEA;IACI,mDAAmD;AACvD;;AAEA;IACI,mDAAmD;AACvD;;AAEA;IACI;QACI,WAAW;IACf;IACA;QACI,QAAQ;IACZ;AACJ",sourcesContent:['#block-notification {\n    display: flex;\n    flex-direction: column;\n    align-items: end;\n    margin: 16px;\n    gap: 16px;\n}\n.f-function-notification {\n    display: flex;\n    flex-direction: row;\n    width: fit-content;\n    min-height: 75px;\n    background-color: white;\n    border-radius: 10px;\n    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);\n    position: relative;\n    max-width: 500px;\n}\n\n.f-function-notification-ico {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 45px;\n    border-bottom-left-radius: 10px;\n    border-top-left-radius: 10px;\n}\n\n.f-function-notification-ico.info-notification {\n    color: #2164BE !important;\n    background-color: rgba(149, 191, 255, 0.4) !important;\n    fill: #2164BE !important;\n}\n\n.f-function-notification-ico.error-notification {\n    color: #D10000 !important;\n    background-color: rgba(209, 0, 0, 0.4) !important;\n    fill: #D10000 !important;\n}\n\n.f-function-notification-ico.success-notification {\n    color: #0f7a11 !important;\n    background-color: rgba(72, 159, 73, 0.4) !important;\n    fill: #0f7a11 !important;\n}\n\n.f-function-notification-ico.warning-notification {\n    color: #ffc107 !important;\n    background-color: rgba(255, 193, 7, 0.4) !important;\n    fill: #ffc107 !important;\n}\n\n.f-function-notification-inside {\n    display: flex;\n    flex-direction: column;\n    margin: 16px;\n    gap: 9px;\n}\n\n.f-function-notification-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.f-function-notification-header h4 {\n    font-family: "SF UI Display", sans-serif;\n    color: #000;\n    font-size: 16px;\n    font-weight: 600;\n    line-height: 1.2;\n    margin-bottom: 0;\n}\n\n.f-function-notification-body {\n    display: flex;\n    flex-direction: column;\n}\n\n.f-function-notification-body span {\n    font-size: 14px;\n    font-weight: bold;\n    color: #656565;\n    white-space: normal;\n    -webkit-hyphens: auto;\n    -ms-hyphens: auto;\n    hyphens: auto;\n    word-wrap: anywhere;\n}\n\n.f-function-notification-hidden {\n    visibility: hidden;\n    opacity: 0;\n    transition: visibility 0s 1s, opacity 1s linear;\n}\n\n.close-not {\n    cursor: pointer;\n}\n\n\n.f-notification-progress {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    width: calc(100% - 40px);\n}\n\n.f-notification-progress-bar {\n    position: relative;\n    border: 0;\n    height: 6px;\n    background-color: #e9ecef !important;\n    border-bottom-left-radius: 10px;\n    border-top-left-radius: 10px;\n    width: 100%;\n}\n\n.f-notification-progress-value {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    border-bottom-left-radius: 10px;\n    border-top-left-radius: 10px;\n    transform: rotate(180deg) scaleX(1);\n    height: 6px;\n    width: 100%;\n}\n\n.f-notification-progress-value.info {\n    background-color: rgba(149, 191, 255, 0.4) !important;\n}\n\n.f-notification-progress-value.error {\n    background-color: rgba(209, 0, 0, 0.4) !important;\n}\n\n.f-notification-progress-value.success {\n    background-color: rgba(72, 159, 73, 0.4) !important;\n}\n\n.f-notification-progress-value.warning {\n    background-color: rgba(255, 193, 7, 0.4) !important;\n}\n\n@keyframes notification-progress-animated {\n    from {\n        width: 100%;\n    }\n    to {\n        width: 0;\n    }\n}'],sourceRoot:""}]),__webpack_exports__.Z=___CSS_LOADER_EXPORT___},"data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e":function(module){module.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e"},"data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e":function(module){module.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e"},"data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e":function(module){module.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e"},"data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e":function(module){module.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e"},"data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%28255, 255, 255, 0.25%29%27/%3e%3c/svg%3e":function(module){module.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%28255, 255, 255, 0.25%29%27/%3e%3c/svg%3e"},"data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e":function(module){module.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e"},"data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e":function(module){module.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e"},"data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23052c65%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e":function(module){module.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23052c65%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e"},"data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23212529%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e":function(module){module.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23212529%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e"},"data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%236ea8fe%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e":function(module){module.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%236ea8fe%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e"},"data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e":function(module){module.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e"},"data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e":function(module){module.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e"},"data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e":function(module){module.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e"},"data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23dee2e6%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e":function(module){module.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23dee2e6%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e"},"data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e":function(module){module.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e"},"data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e":function(module){module.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e"},"data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e":function(module){module.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e"},"data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%2833, 37, 41, 0.75%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e":function(module){module.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%2833, 37, 41, 0.75%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e"},"data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e":function(module){module.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e"}}]);