import React from "react";
import "../styles/subtotal.css";
import CurrencyFormat from "react-currency-format";

function Subtotal() {
  return (
    <div className="subtotal">
        <CurrencyFormat
            renderText={(value) => (
                <>
                    <p> {/* part of hw */}
                        Subtotal (0 items): <strong>0</strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox" /> This order contains a gift
                    </small>
                </>
            )}
            decimalScale={2}
            value={0} //partofhw
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
        />

        <button>Proceed to Checout</button>
    </div>
  );
}

export default Subtotal