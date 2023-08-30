import { Button, Card } from "react-bootstrap";
import currencyFormat from "../util/currencyFormat";

interface StoreItem {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

function storeItem(props: StoreItem) {
  const { id, name, price, imgUrl } = props;
  console.log(props);
  let quantity = 1;
  return (
    <Card>
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      ></Card.Img>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between mb-4 align-items-baseline">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{currencyFormat(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100">+ Add to Cart</Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: "0.5rem" }}
            >
              {" "}
              <div
                className="d-flex align-items-center flex-column justify-content-center"
                style={{ gap: "0.5rem" }}
              >
                <Button>+</Button>-<Button></Button>
              </div>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default storeItem;
