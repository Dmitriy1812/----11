document.addEventListener('DOMContentLoaded', () => {
	const accordions = document.querySelectorAll('.accordion');

	accordions.forEach(el => {
		el.addEventListener('click', (e) => {
			const self = e.currentTarget;
			const selfcontrol = self.querySelector('.accordion__control');
			const selfcontent = self.querySelector('.accordion__content');





			self.classList.toggle('open');

			// если открыт аккордеон
			if (self.classList.contains('open')) {
				selfcontent.style.maxHeight = selfcontent.scrollHeight + 'px';
			} else {
				selfcontent.style.maxHeight = null;
			}

      accordions.forEach(ac => {
        if ((ac !== self) & (ac.classList.contains('open'))) {
          console.log(self)
          console.log(ac)
          const accontrol = ac.querySelector('.accordion__control');
			    const accontent = ac.querySelector('.accordion__content');
          ac.classList.toggle('open');
          accontent.style.maxHeight = null;

        }
      })

		});
	});
});


// document.addEventListener('DOMContentLoaded', () => {
// 	const accordions = document.querySelectorAll('.accordion');
// console.log(accordions);
// const arrayAccordeons = Array.from(accordions);
// console.log(arrayAccordeons);

// accordions.forEach(el => {
// 	el.addEventListener('click', (e) => {
// 		const self = e.currentTarget;
//     // console.log(self);
//     console.log(accordions[0]);
//     console.log(accordions[0] === self);
// const another = arrayAccordeons.filter(item => item !== self);
// console.log(another);
// const control = self.querySelector('.accordion__control');
// const content = self.querySelector('.accordion__content');
// if (e !== self) {
//   e.classList.remove('open');
// }

// self.classList.toggle('open');


// // если открыт аккордеон
// 			if (self.classList.contains('open')) {
// 				control.setAttribute('aria-expanded', true);
// 				content.setAttribute('aria-hidden', false);
// 				content.style.maxHeight = content.scrollHeight + 'px';
// 			} else {
// 				control.setAttribute('aria-expanded', false);
// 				content.setAttribute('aria-hidden', true);
// 				content.style.maxHeight = null;
// 			}
// 		});
// 	});
// });

// const control = document.querySelectorAll('.accordion__control');
// const content = document.querySelectorAll('.accordion__content');

// control.forEach((item) => {
//   item.addEventListener('click', () => {
//     const parent = item.parentNode;

//     if (parent.classList.contains('open')) {
//       parent.classList.remove('open');
//     } else {
//       document.querySelectorAll('.accordion').forEach((child) =>
//       {child.classList.remove('open');
//       child.
//       }
//       )

//       parent.classList.toggle('open');
//     }
//     if (self.classList.contains('open')) {
//       				content.style.maxHeight = content.scrollHeight + 'px';
//       			} else {
//       				content.style.maxHeight = null;
//       			}
//   })
// })
// 	el.addEventListener('click', (e) => {
// 		const self = e.curre



