# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

@  React is a JavaScript library for building user interfaces. React solves this by giving the developer a virtual DOM to render to instead of the actual DOM. React also solves the problem of making practical the creating of reusable, composable components.

1. What does it mean to think in react?

@ Thinking in React is thinking in components. It's about being able to break down an application in components.

1. Describe state.

@ In the React sense, “state” is an object that represents the parts of the app that can change. Each component can maintain its own state, which lives in an object called this.state .

1. Describe props.

In React and React Native the data flows in one direction -> From the parent to the child. Props is the data that is passed on the data flow.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

@ It is a general concept about behaviours of functions. A function is said to have side effect if it trys to modify anything outside its body. For example, if it modidifies a global variable, then it is a side effect. If it makes a network call, it is a side effect as well.
 There is a React Hook for side effects useEffect.
