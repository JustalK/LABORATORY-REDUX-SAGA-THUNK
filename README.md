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

## System

Ubuntu Version: Ubuntu 20.04.1 LTS
Node Version: v16.15.1

```bash
# Get the version of node
$ node -v

# Get the latest version of ubuntu
$ lsb_release -a
```
