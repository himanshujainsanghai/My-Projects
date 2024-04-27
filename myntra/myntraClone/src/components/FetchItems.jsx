import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/itemSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();
  // console.log(fetchStatus);

  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchStatusActions.markFetchingStarted());
    fetch("https://mymyntrabackend.onrender.com/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchFinished());
        dispatch(itemsActions.addInitialItems(items[0]));
      });
    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return <></>;
};
export default FetchItems;
