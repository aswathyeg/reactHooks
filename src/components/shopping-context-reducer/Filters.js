import { Button, Form } from "react-bootstrap";
import Rating from "./Rating";
import { CartState } from "./context/Context";

const Filters = () => {
  //const [rate, setState] = useState(2);
  const {
    filterState: { byStock, byFastDelivery, byRating, sort, searchQuery },
    filterDispatch,
  } = CartState();
  console.log(byStock, byFastDelivery, byRating, sort);
  return (
    <div className="filters">
      <span className="title">Filter products</span>
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
          onChange={() =>
            filterDispatch({
              type: "sort by price",
              payload: "lowToHigh",
            })
          }
          checked={sort === "lowToHigh" ? true : false}
        ></Form.Check>
      </span>
      <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={`inline-2`}
          onChange={() =>
            filterDispatch({
              type: "sort by price",
              payload: "HighToLow",
            })
          }
          checked={sort === "HighToLow" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Include Out Of Stock"
          name="group1"
          type="checkbox"
          id={`inline-3`}
          onChange={() =>
            filterDispatch({
              type: "filter by stock",
            })
          }
          checked={byStock}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast Delivery Only"
          name="group1"
          type="checkbox"
          id={`inline-4`}
          onChange={() =>
            filterDispatch({
              type: "filter by delivery",
            })
          }
          checked={byFastDelivery}
        />
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>Rating:</label>
        <Rating
          rating={byRating}
          onClick={(i) =>
            filterDispatch({
              type: "filter by rating",
              payload: i + 1,
            })
          }
          style={{ cursor: "pointer" }}
        />
      </span>
      <Button
        variant="light"
        onClick={() =>
          filterDispatch({
            type: "clear filters",
          })
        }
      >
        Clear Filters
      </Button>
    </div>
  );
};
export default Filters;
