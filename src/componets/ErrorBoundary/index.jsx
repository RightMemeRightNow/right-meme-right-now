import { Component } from "react";
import Error from "../Error";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // 폴백 UI를 커스텀하여 렌더링할 수 있습니다.
      return <Error message={'일시적인 오류가 발생했습니다.'} />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
