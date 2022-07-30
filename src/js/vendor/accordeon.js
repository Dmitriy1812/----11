/**
 * Accordion v3.3.0
 * Lightweight and accessible accordion module created in pure Javascript
 * https://github.com/michu2k/Accordion
 *
 * Copyright (c) Michał Strumpf
 * Published under MIT License
 */

 "use strict";!function(e){var t=0,n=function e(n,i){var s=this,o=this,r=!1;if(Array.isArray(n))return!!n.length&&n.map((function(t){return new e(t,i)}));var a={init:function(){this.options=Object.assign({duration:600,ariaEnabled:!0,collapse:!0,showMultiple:!1,onlyChildNodes:!0,openOnInit:[],elementClass:"ac",triggerClass:"ac-trigger",panelClass:"ac-panel",activeClass:"is-active",beforeOpen:function(){},onOpen:function(){},beforeClose:function(){},onClose:function(){}},i);var e="string"==typeof n;this.container=e?document.querySelector(n):n,this.createDefinitions(),o.attachEvents()},createDefinitions:function(){var e=this,n=this.options,i=n.elementClass,s=n.openOnInit,o=n.onlyChildNodes?this.container.childNodes:this.container.querySelectorAll(".".concat(i));this.elements=Array.from(o).filter((function(e){return e.classList&&e.classList.contains(i)})),this.firstElement=this.elements[0],this.lastElement=this.elements[this.elements.length-1],this.elements.filter((function(e){return!e.classList.contains("js-enabled")})).forEach((function(n){n.classList.add("js-enabled"),e.generateIDs(n),e.setARIA(n),e.setTransition(n);var i=e.elements.indexOf(n);t++,s.includes(i)?e.showElement(n,!1):e.closeElement(n,!1)}))},setTransition:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.options,i=n.duration,s=n.panelClass,o=e.querySelector(".".concat(s)),r=c("transitionDuration");o.style[r]=t?null:"".concat(i,"ms")},generateIDs:function(e){var n=this.options,i=n.triggerClass,s=n.panelClass,o=e.querySelector(".".concat(i)),r=e.querySelector(".".concat(s));e.setAttribute("id","ac-".concat(t)),o.setAttribute("id","ac-trigger-".concat(t)),r.setAttribute("id","ac-panel-".concat(t))},removeIDs:function(e){var t=this.options,n=t.triggerClass,i=t.panelClass,s=e.querySelector(".".concat(n)),o=e.querySelector(".".concat(i));e.removeAttribute("id"),s.removeAttribute("id"),o.removeAttribute("id")},setARIA:function(e){var n=this.options,i=n.ariaEnabled,s=n.triggerClass,o=n.panelClass;if(i){var r=e.querySelector(".".concat(s)),a=e.querySelector(".".concat(o));r.setAttribute("role","button"),r.setAttribute("aria-controls","ac-panel-".concat(t)),r.setAttribute("aria-disabled",!1),r.setAttribute("aria-expanded",!1),a.setAttribute("role","region"),a.setAttribute("aria-labelledby","ac-trigger-".concat(t))}},updateARIA:function(e,t){var n=t.ariaExpanded,i=t.ariaDisabled,s=this.options,o=s.ariaEnabled,r=s.triggerClass;if(o){var a=e.querySelector(".".concat(r));a.setAttribute("aria-expanded",n),a.setAttribute("aria-disabled",i)}},removeARIA:function(e){var t=this.options,n=t.ariaEnabled,i=t.triggerClass,s=t.panelClass;if(n){var o=e.querySelector(".".concat(i)),r=e.querySelector(".".concat(s));o.removeAttribute("role"),o.removeAttribute("aria-controls"),o.removeAttribute("aria-disabled"),o.removeAttribute("aria-expanded"),r.removeAttribute("role"),r.removeAttribute("aria-labelledby")}},focus:function(e,t){e.preventDefault();var n=this.options.triggerClass;t.querySelector(".".concat(n)).focus()},focusFirstElement:function(e){this.focus(e,this.firstElement),this.currFocusedIdx=0},focusLastElement:function(e){this.focus(e,this.lastElement),this.currFocusedIdx=this.elements.length-1},focusNextElement:function(e){var t=this.currFocusedIdx+1;if(t>this.elements.length-1)return this.focusFirstElement(e);this.focus(e,this.elements[t]),this.currFocusedIdx=t},focusPrevElement:function(e){var t=this.currFocusedIdx-1;if(t<0)return this.focusLastElement(e);this.focus(e,this.elements[t]),this.currFocusedIdx=t},showElement:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=this.options,i=n.panelClass,s=n.activeClass,o=n.collapse,r=n.beforeOpen,a=e.querySelector(".".concat(i)),c=a.scrollHeight;e.classList.add(s),t&&r(e),requestAnimationFrame((function(){requestAnimationFrame((function(){a.style.height=t?"".concat(c,"px"):"auto"}))})),this.updateARIA(e,{ariaExpanded:!0,ariaDisabled:!o})},closeElement:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=this.options,i=n.panelClass,s=n.activeClass,o=n.beforeClose,r=e.querySelector(".".concat(i)),a=r.scrollHeight;e.classList.remove(s),t?(o(e),requestAnimationFrame((function(){r.style.height="".concat(a,"px"),requestAnimationFrame((function(){r.style.height=0}))})),this.updateARIA(e,{ariaExpanded:!1,ariaDisabled:!1})):r.style.height=0},toggleElement:function(e){var t=this.options,n=t.activeClass,i=t.collapse,s=e.classList.contains(n);if(!s||i)return s?this.closeElement(e):this.showElement(e)},closeElements:function(){var e=this,t=this.options,n=t.activeClass;t.showMultiple||this.elements.forEach((function(t,i){t.classList.contains(n)&&i!==e.currFocusedIdx&&e.closeElement(t)}))},handleClick:function(e){var t=this,n=e.currentTarget;this.elements.forEach((function(i,s){i.contains(n)&&"A"!==e.target.nodeName&&(t.currFocusedIdx=s,t.closeElements(),t.focus(e,i),t.toggleElement(i))}))},handleKeydown:function(e){var t=38,n=40,i=36,s=35;switch(e.keyCode){case t:return this.focusPrevElement(e);case n:return this.focusNextElement(e);case i:return this.focusFirstElement(e);case s:return this.focusLastElement(e);default:return null}},handleTransitionEnd:function(e){if("height"===e.propertyName){var t=this.options,n=t.onOpen,i=t.onClose,s=e.currentTarget,o=parseInt(s.style.height),r=this.elements.find((function(e){return e.contains(s)}));o>0?(s.style.height="auto",n(r)):i(r)}}};this.attachEvents=function(){if(!r){var e=a.options,t=e.triggerClass,n=e.panelClass;a.handleClick=a.handleClick.bind(a),a.handleKeydown=a.handleKeydown.bind(a),a.handleTransitionEnd=a.handleTransitionEnd.bind(a),a.elements.forEach((function(e){var i=e.querySelector(".".concat(t)),s=e.querySelector(".".concat(n));i.addEventListener("click",a.handleClick),i.addEventListener("keydown",a.handleKeydown),s.addEventListener("webkitTransitionEnd",a.handleTransitionEnd),s.addEventListener("transitionend",a.handleTransitionEnd)})),r=!0}},this.detachEvents=function(){if(r){var e=a.options,t=e.triggerClass,n=e.panelClass;a.elements.forEach((function(e){var i=e.querySelector(".".concat(t)),s=e.querySelector(".".concat(n));i.removeEventListener("click",a.handleClick),i.removeEventListener("keydown",a.handleKeydown),s.removeEventListener("webkitTransitionEnd",a.handleTransitionEnd),s.removeEventListener("transitionend",a.handleTransitionEnd)})),r=!1}},this.toggle=function(e){var t=a.elements[e];t&&a.toggleElement(t)},this.open=function(e){var t=a.elements[e];t&&a.showElement(t)},this.openAll=function(){a.elements.forEach((function(e){return a.showElement(e,!1)}))},this.close=function(e){var t=a.elements[e];t&&a.closeElement(t)},this.closeAll=function(){a.elements.forEach((function(e){return a.closeElement(e,!1)}))},this.destroy=function(){s.detachEvents(),s.openAll(),a.elements.forEach((function(e){a.removeIDs(e),a.removeARIA(e),a.setTransition(e,!0)})),r=!0},this.update=function(){a.createDefinitions(),s.detachEvents(),s.attachEvents()};var c=function(e){return"string"==typeof document.documentElement.style[e]?e:(e=l(e),e="webkit".concat(e))},l=function(e){return e.charAt(0).toUpperCase()+e.slice(1)};a.init()};"undefined"!=typeof module&&void 0!==module.exports?module.exports=n:e.Accordion=n}(window);

// class GraphAccordion {
// 	constructor(selector, options) {
// 		let defaultOptions = {
// 			isOpen: () => {},
// 			isClose: () => {},
// 			speed: 300
// 		};

// 		this.options = Object.assign(defaultOptions, options);
// 		this.accordion = document.querySelector(selector);
//     this.accordions = document.querySelectorAll('.accordion');
// 		this.control = this.accordion.querySelector('.accordion__control');
// 		this.content = this.accordion.querySelector('.accordion__content');
// 		this.event();
//     this.start();
// 	}

//   start() {
//     console.log('!!!!!!!!!!');
//   }

// 	event() {
// 		console.log('event!');

// 		if (this.accordion) {

// 			this.accordion.addEventListener('click', (e) => {
//         // this.accordions.classList.remove('open');
// 				this.accordion.classList.toggle('open');

// 				if (this.accordion.classList.contains('open')) {

// 					this.open();
// 				} else {
// 					this.close();
//         		}



// 			});
// 		}
// 	}

// 	open() {
// 		this.accordion.style.setProperty('--accordion-time', `${this.options.speed / 1000}s`);
// 		this.accordion.classList.add('is-open');
// 		this.control.setAttribute('aria-expanded', true);
// 		this.content.setAttribute('aria-hidden', false);
// 		this.content.style.maxHeight = this.content.scrollHeight + 'px';
// 		this.options.isOpen(this);
// 	}

// 	close() {
// 		this.accordion.classList.remove('is-open');
// 		this.control.setAttribute('aria-expanded', false);
// 		this.content.setAttribute('aria-hidden', true);
// 		this.content.style.maxHeight = null;
// 		this.options.isClose(this);
// 	}
// }
