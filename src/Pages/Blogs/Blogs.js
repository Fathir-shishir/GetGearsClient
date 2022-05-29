import React from 'react';

const Blogs = () => {
    return (
        <div className='m-10'>
            <h1 className='text-3xl font-bold'>How will you improve the performance of a React Application?</h1>
            <p className=''> 
                <ul>
                    <li> Ans: Keeping component state local where necessary.</li>
                    <li>Memoizing React components to prevent unnecessary re-renders.</li>
                    <li>Code-splitting in React using dynamic import()</li>
                    <li>Windowing or list virtualization in React.</li>
                    <li>Lazy loading images in React.</li>
                </ul>
            </p>
            <h1 className='text-3xl font-bold'>What are the different ways to manage a state in a React application?</h1>
            <p>Local (UI) state – Local state is data we manage in one or another component.

Local state is most often managed in React using the useState hook.

For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.</p>
<p>Global (UI) state – Global state is data we manage across multiple components.

Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.

A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.

Sometimes state we think should be local might become global.</p>
<p>Server state – Data that comes from an external server that must be integrated with our UI state.

Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.

There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.

Fortunately there are tools such as SWR and React Query that make managing server state much easier.</p>
<p>URL state – Data that exists on our URLs, including the pathname and query parameters.

URL state is often missing as a category of state, but it is an important one.
In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!

There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.</p>
<h1 className='text-3xl font-bold'>How does prototypical inheritance work?</h1>
<p>Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.</p>
<h1 className='text-3xl font-bold'>What is a unit test? Why should write unit tests?</h1>
<p>Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.</p>
<h1 className='text-3xl font-bold'>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h1>
<p>When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.</p>

        </div>
    );
};

export default Blogs;