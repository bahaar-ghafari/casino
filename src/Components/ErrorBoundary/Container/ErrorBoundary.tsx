import { Component } from "react";
import { Props, State } from "../@type";
import { ErrorComponent } from "../Components/ErrorComponent/ErrorComponent";

class ErrorBoundary extends Component<Props, State> {
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  constructor(props: Props | Readonly<Props>) {
    super(props);
    this.state = { hasError: false };
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (!hasError) {
      return children;
    }

    return <ErrorComponent />;
  }
}

export default ErrorBoundary;
