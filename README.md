# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![image](https://github.com/franclobo/FAQs-acordion/assets/58642949/86abd350-1b6a-40b9-80e8-9c3fd88b038f)


### Links

- Solution URL: [GitHub](https://github.com/franclobo/FAQs-acordion)
- Live Site URL: [faqs-accordion-frontend-mentor](https://faqs-accordion-frontend-mentor.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [hyperui.dev](https://www.hyperui.dev/components/marketing/faqs) - For styles

### What I learned

```js
<details className="group py-8 [&_summary::-webkit-details-marker]:hidden">
      <summary className="grayish-purple flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
        <h2 className="text-lg font-medium">Is Frontend Mentor free?</h2>

        <span className="relative size-5 shrink-0">
        <Image src={Minus} alt="Minus" className="absolute inset-0 size-5 opacity-0 group-open:opacity-100" />
          <Image src={Plus} alt="Plus" className="absolute inset-0 size-5 opacity-100 group-open:opacity-0" />
        </span>
      </summary>

      <p className="mt-4 leading-relaxed text-gray-700">
      Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
  option providing access to a range of projects suitable for all skill levels.
      </p>
    </details>
```

### Continued development

I would like to add a dark mode to the project.

### Useful resources

- [hyperui.dev](https://www.hyperui.dev/components/marketing/faqs) - HyperUI is a collection of free Tailwind CSS components that can be used in your next project. With a range of components, you can build your next marketing website, admin dashboard, eCommerce store and much more.


## Author

- Website - [WebMinds Studio](https://www.webmindsstudio.com/)
- Frontend Mentor - [@franclobo](https://www.frontendmentor.io/profile/franclobo)
- Twitter - [@Pancho2788](https://twitter.com/Pancho2788)

## Acknowledgments

Thanks to Frontend Mentor for the challenge and someone who give me feedback on my code.
