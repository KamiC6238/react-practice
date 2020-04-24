import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 配置了这个才能在控制台看到redux
/**
 * react 提供了一个增强函数compose, 理解为函数的链式调用，
 * 因为creatStore只能传两个参数，因为没办法直接满足使用deltools的同时使用redux-thunk
 * 所以通过增强函数，只需要把需要执行的函数传进去，再执行这个增强函数，就能够
 * 链式的执行所有函数
 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
                         window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) :
                         compose

const enhancer = composeEnhancers(applyMiddleware(thunk))

const store = createStore (reducer, enhancer)

export default store