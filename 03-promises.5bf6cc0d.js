!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var i=o("h6c0i"),l=document.querySelector(".form");function r(e,n){return new Promise((function(t,o){var i=Math.random()>.3;setTimeout((function(){i?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}l.addEventListener("submit",(function(e){e.preventDefault(),console.log(l.elements.delay.value,l.elements.step.value,l.elements.amount.value);for(var n=Number(l.elements.delay.value),t=Number(l.elements.step.value),o=Number(l.elements.amount.value),a=1;a<=o;a+=1)r(a,n).then((function(e){var n=e.position,t=e.delay;i.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;i.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))})),n+=t}))}();
//# sourceMappingURL=03-promises.5bf6cc0d.js.map
