import React, { Component, ErrorInfo, ReactNode } from 'react';
import { ErrorSvg } from './svg/404';
import styles from './ErrorBoundary.module.scss';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className={styles.container}>
          <ErrorSvg />
          <h2>Sorry, something went wrong.</h2>
          <h2>Please reload the page</h2>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
