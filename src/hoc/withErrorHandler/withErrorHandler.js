import React, { useState, useEffect } from "react";
import Modal from "../../components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {
  return (props) => {
    const [state, setState] = useState({ error: null });
    let reqInterceptor;
    let resInterceptor;

    useEffect(() => {
      axios.interceptors.request.use((req) => {
        setState({ ...state, error: null });
        return req;
      });
      axios.interceptors.response.use(
        (res) => res,
        (error) => {
          setState({ ...state, error: error });
        }
      );
      return () => {
        axios.interceptors.request.eject(reqInterceptor);
        axios.interceptors.response.eject(resInterceptor);
      };
    });

    const errorConfirmedHandler = () => {
      setState({ ...state, error: null });
    };
    return (
      <>
        <Modal show={state.error} modalClosed={errorConfirmedHandler}>
          {state.error ? state.error.message : null}
        </Modal>
        <WrappedComponent {...props} />
      </>
    );
  };
};

export default withErrorHandler;
