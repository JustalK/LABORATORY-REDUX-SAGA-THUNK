# LABORATORY-REDUX-SAGA-THUNK

## Experience

**Redux Thunk**

#### Experience 1

The goal of experience 1 was to show how to use the middleware for handling the side-effect. This example also shows up the problem of React Redux when hangling call happening concurently.

Redux Thunk does not have a queue and does not pause his execution. Because of that, the state for processing a call is the one when the action arrive at the middleware. A problem appear in this case. For example,

0- The counter is at 0
1- The user clicks on increment, the middleware will handle the call on 3 seconds. The resultat expected will be 1.
2- Before the previous call is fullfilled. The user click on decrement. This call will also take 3 seconds. The resultat expected in this case is 0 since we have done that after the incrementation.
3- The counter goes to 1
4- The counter goes to -1

The counter at the moment of decrementing took in account, the value of the state the moment I pressed the decrement button. At this moment, the value was 0. It did not care about the incrementation at all.

#### Experience 2

Experience2 is a fix of the previous problem using the ThunkApi to call the state for getting the result of the actual state.

0- The counter is at 0
1- The user clicks on increment, the middleware will handle the call on 3 seconds. The resultat expected will be 1.
2- Before the previous call is fullfilled. The user click on decrement. This call will also take 3 seconds. The resultat expected in this case is 0 since we have done that after the incrementation.
3- ThunkApi get the actual state for the first call
4- The counter goes to 1
5- ThunkApi get the actual state for the second call
6- The counter goes to 0

In this case, it will work. But getting the last state is not a proper solution. In the case, where the call have different response time and something happen we are doom.

#### Experience 3

Experience3 is how tricky event can be. In this example, a message appears if the count reaches 3. The time for the call are different. When you decrease, it takes 5 seconds but when it increase, it takes 2 seconds. Unexpected behaviors arrive in some cases:

0- The counter is at 1
1- One user click on increase
2- Another user click on decrease before the previous call ended
3- Another user click on increase before any of the other call ended
4- We are expecting to see the counter move from 1 digit at most. However, since the increase is way faster than the decrease. The message for reaching 3 will be shown.

The only solution is really to create a queue in react-redux.

**Redux Saga**

#### Experience 1

This experience is the same as the experience 3 in React-Thunk

## System

Ubuntu Version: Ubuntu 20.04.1 LTS
Node Version: v16.15.1

```bash
# Get the version of node
$ node -v

# Get the latest version of ubuntu
$ lsb_release -a
```
