




// document.addEventListener('DOMContentLoaded', () => {
// 	const accordions = document.querySelectorAll('.accordion');
//   // console.log(accordions);

// 	accordions.forEach(el => {
// 		el.addEventListener('click', (e) => {
// 			const self = e.currentTarget;
//       // console.log(self);
// 			const control = self.querySelector('.accordion__control');
//       // console.log(control);
// 			const content = self.querySelector('.accordion__content');
//       console.log(content);
// 			self.classList.toggle('open');

// 			// если открыт аккордеон
// 			if (self.classList.contains('open')) {
// 				control.setAttribute('aria-expanded', true);
// 				content.setAttribute('aria-hidden', false);
// 			} else {
// 				control.setAttribute('aria-expanded', false);
// 				content.setAttribute('aria-hidden', true);
// 			}
// 		});
// 	});
// });


// if (document.querySelector('.interior-offer')) {

//   const accordion1 = new GraphAccordion('.accordion-1', {
//     speed: 500,
//     isOpen: (acc) => {
//       console.log(acc);
//     },
//     isClose: (acc) => {
//       console.log(acc);
//     }
//   });

//   const accordion2 = new GraphAccordion('.accordion-2', {
//     speed: 1500,
//     isOpen: (acc) => {
//       console.log(acc);
//       console.log("Димон крут");
//     },
//     isClose: (acc) => {
//       console.log(acc);
//       console.log("Димон крут");
//     }
//   });
// }
