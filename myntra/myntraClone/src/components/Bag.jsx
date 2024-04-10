import BagSummary from "./BagSummary";
import BagItem from "./BagItem";
import { useSelector } from "react-redux";
const Bag = () => {
  const bagitems = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);
  const finalItems = items.filter((item) => {
    const itemIndex = bagitems.indexOf(item.id);
    return itemIndex >= 0;
  });

  return (
    <>
      <main>
        <div className="bag-page">
          {finalItems.map((item) => (
            <BagItem key={item.id} item={item} />
          ))}
          <BagSummary></BagSummary>
        </div>
      </main>
    </>
  );
};
export default Bag;
