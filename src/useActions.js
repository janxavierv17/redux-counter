import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

export const useActions = (actions) => {
  const dispatch = useDispatch();

  // memoize actions and dispatch so that it doesn't generate the same object again.
  return useMemo(
    () => bindActionCreators(actions, dispatch),
    [actions, dispatch]
  );
};
