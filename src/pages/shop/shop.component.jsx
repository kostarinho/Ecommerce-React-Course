import { React, useState } from "react";
import CollectionPreview from "../../components/preview-collection/preview.component";
import SHOP_DATA from "./shop.data";

const ShopPage = () => {
  const [state, setstate] = useState(SHOP_DATA);
  const collections = state;
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProp }) => (
        <CollectionPreview key={id} {...otherCollectionProp} />
      ))}
    </div>
  );
};

// class ShopPage extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       collections: SHOP_DATA,
//     };
//   }

//   render() {
//     const { collections } = this.state;
//     return (
//       <div className="shop-page">
//         {collections.map(({ id, ...otherCollectionProp }) => (
//           <CollectionPreview key={id} {...otherCollectionProp} />
//         ))}
//       </div>
//     );
//   }
// }

export default ShopPage;
