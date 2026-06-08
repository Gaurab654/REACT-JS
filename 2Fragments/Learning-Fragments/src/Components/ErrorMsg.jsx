const ErrorMessage = ({ items }) => {
  return <>{items.length === 0 ? <h3>Im Still hunger</h3> : null}</>;
};
export default ErrorMessage;
