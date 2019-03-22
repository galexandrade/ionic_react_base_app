import React, { createContext, useReducer, useContext, ReactNode } from "react";
import reducer, { initialState, Reducer, State } from "./reducer";
import { Action } from "./actions";

const customMiddleware = (store: any) => (next: any) => (action: any) => {
  console.log("Action Triggered");
  console.log(action);
  next(action);
};

const Store = createContext({state: {}, dispatch: (action: any) => {}});

const compose = (...funcs: any[]) => (x: any) =>
  funcs.reduceRight((composed, f) => f(composed), x);

const createStore = (reducer: Reducer, initialState: State, middlewares: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  if (typeof middlewares !== "undefined") {
    const middlewareAPI = {
      getState: () => state,
      dispatch: (action: Action) => dispatch(action)
    };
    const chain = middlewares.map((middleware: any) => middleware(middlewareAPI));
    const enhancedDispatch = compose(...chain)(dispatch);
    return { state, dispatch: enhancedDispatch };
  }

  return { state, dispatch };
};

const Provider = (props: { children: ReactNode }) => {
  const store = createStore(reducer, initialState, [customMiddleware]);
  return <Store.Provider value={store}>{props.children}</Store.Provider>;
};

const connect = (
  mapStateToProps?: any,
  mapDispatchToProps?: any
) => (WrappedComponent: any) => {
  return (props: any) => {
    const { dispatch, state }: any = useContext(Store);

    mapStateToProps = mapStateToProps ? mapStateToProps : (el: any) => {};
    mapDispatchToProps = mapDispatchToProps ? mapDispatchToProps : (el: any) => {};

    return (
      <WrappedComponent
        {...mapStateToProps(state, props)}
        {...mapDispatchToProps(dispatch)}
      />
    );
  };
};

export { connect, Store, Provider };